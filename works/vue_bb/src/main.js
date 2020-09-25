import './styles/style.scss';
import pause from './assets/pause.svg';
import start from './assets/triangular.svg';
import stop from './assets/square.svg';

const tempTimer = Vue.component("temp-timer", {
  props: ["timer"],
  data: () => ({
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
    startStyle: false
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
          return `${this.h}:${this.m}:${this.s}`
        }
      }

      return this.s
    },
  },
  watch: {
    s: function (val) {
      if (val === -1) {
        this.s = 59;
        this.m -= 1;
      }
    },
    m: function (val) {
      if (val === -1) {
        this.m = 59;
        this.h -= 1;
      }
    },
  },
  methods: {
    onStart() {
      this.start = false;
      this.startStyle = true;
      this.pause = true;
      this.stop = false;

      this.interval = setInterval(() => {
        this.s--;
      }, 1000);
    },
    onPause() {
      if (pause) {
        clearInterval(this.interval);
      }

      this.start = true;
      this.startStyle = false;
      this.pause = false;
      this.stop = false;
    },
    onStop() {
      this.s = this.defaultTime.s;
      this.m = this.defaultTime.m;
      this.h = this.defaultTime.h;

      this.start = true;
      this.startStyle = false;
      this.pause = false;
      this.stop = true;
      clearInterval(this.interval);
    }
  },
  template: `
  <div :class="['timer', {'active': startStyle}]">
      <p class="result">{{ formattedTimer }}</p>
      <div class="actions">
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
  <div class="timer-add" @click="$emit('add')">
    <p>+</p>
  </div>
  `,
});

const app = new Vue({
  el: '#app',
  name: 'App',
  data() {
    return {
      timers: [{
          id: 't0',
        },
        {
          id: 't1',
        },
        {
          id: 't2',
        }
      ],
      count: 0,
      isDestroy: null,
    }
  },
  methods: {
    onAddClick() {
      this.count++;
      this.timers.push({
        id: 't' + this.count
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
