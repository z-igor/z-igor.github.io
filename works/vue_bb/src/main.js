import './styles/style.scss';
import pause from './assets/pause.svg';
import start from './assets/triangular.svg';
import stop from './assets/square.svg';

const tempTimer = Vue.component("temp-timer", {
  props: ["timer"],
  data: () => ({
    seconds: 1000,
    h: 0,
    m: 0,
    s: 30,
    defaultTime: {
      h: 0,
      m: 0,
      s: 45,
    },
    stop: false,
    pause: false,
    start: true,
    interval: null,
    activateStyle: false,
    speeds: {
      one: true,
      double: false,
    }
  }),
  computed: {
    formattedTimer() {
      if (this.h > 0) {
        return `${this.h}:${this.m}:${this.s}`
      }

      if (this.m > 0) {
        return `${this.m}:${this.s}`
      }

      if (this.m === 0 && this.h === 0) {
        if (this.s === 0) {
          this.onStop();
          return `${this.s}`
        }
      }

      return this.s
    },
  },
  watch: {
    s: function (val) {
      if (this.timer.type === "timer" && val === -1) {
        this.s = 59;
        this.m -= 1;
      } else if (this.timer.type === "stopwatch" && val === 59) {
        this.s = 0;
        this.m += 1;
      }
    },
    m: function (val) {
      if (this.timer.type === "timer" && val === -1) {
        this.m = 59;
        this.h -= 1;
      } else if (this.timer.type === "stopwatch" && val === 59) {
        this.m = 0;
        this.h += 1;
      }
    },
  },
  methods: {
    onStart() {
      this.start = false;
      this.activateStyle = true;
      this.pause = true;
      this.stop = false;

      this.interval = setInterval(() => {
        if (this.timer.type === "timer") {
          this.s--;
        } else if (this.timer.type === "stopwatch") {
          this.s++;
        }
      }, this.seconds);
    },
    onPause() {
      if (pause) {
        clearInterval(this.interval);
      }

      this.start = true;
      this.activateStyle = false;
      this.pause = false;
      this.stop = false;
    },
    onStop() {
      this.s = this.defaultTime.s;
      this.m = this.defaultTime.m;
      this.h = this.defaultTime.h;

      this.start = true;
      this.activateStyle = false;
      this.pause = false;
      this.stop = true;
      clearInterval(this.interval);
    },
    onSpeedUpClick(e, speed) {
      if (speed === 2) {
        this.speeds.double = true;
        this.speeds.one = false;
        clearInterval(this.interval);
        this.seconds = 500;
        this.onStart();
      } else {
        this.speeds.double = false;
        this.speeds.one = true;
        clearInterval(this.interval);
        this.seconds = 1000;
        this.onStart();
      }
    }
  },
  template: `
  <div :class="['time-block', timer.class, {'active': activateStyle}]">
      <p class="result">{{ formattedTimer }}</p>
      <div class="actions">
        <button @click="onSpeedUpClick($event, 1)" class="btn speed" :disabled="speeds.one">1x</button>
        <button @click="onSpeedUpClick($event, 2)" class="btn speed" :disabled="speeds.double">2x</button>
        <button @click="onStart" class="btn start" v-if="!pause">${start}</button>
        <button @click="onPause" class="btn pause" v-else>${pause}</button>
        <button @click="onStop" class="btn stop">${stop}</button>
      </div>
  </div>
  `,
  mounted() {},
  destroyed() {
    clearInterval(this.interval);
    this.interval = null;
  }
});

const tempTimerAdd = Vue.component("temp-timer-add", {
  template: `
  <div class="time-block-add">
    <p @click="$emit('add-timer', $event, 'timer')">+ Таймер</p>
    <p @click="$emit('add-stopwatch', $event, 'stopwatch')">+ Секундомер</p>
  </div>
  `,
});

const app = new Vue({
  el: '#app',
  name: 'App',
  data() {
    return {
      timers: [{
          id: "t0",
          type: "timer",
          class: "timer"
        },
        {
          id: "t1",
          type: "timer",
          class: "timer"
        },
        {
          id: "t2",
          type: "stopwatch",
          class: "stopwatch"
        }
      ],
      count: 0,
      isDestroy: null,
    }
  },
  methods: {
    onAddTimeClick(e, type) {
      this.count++;
      this.timers.push({
        id: 't' + this.count,
        type,
        class: type
      });
    }
  },
  mounted() {
    this.count = this.timers.length;
  },
  destroyed() {
    this.isDestroy = null;
  },
  components: {
    "block-timer": tempTimer,
    "add-block": tempTimerAdd
  }
});
