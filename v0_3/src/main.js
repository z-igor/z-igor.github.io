import {
  data,
  covers
} from '../../works';
import './styles/style.scss';

Vue.config.devtools = true;

const app = new Vue({
  el: '#app',
  name: 'App',
  data() {
    return {
      data: data.map(el => ({
        ...el,
        hover: false,
        stylesImg: {},
      })),
      covers,
      preloader: true,
      isDestroy: null,
    }
  },
  methods: {
    onMouseOver(ev, card) {
      let evt = ev.target;
      let duration = null;

      card.hover = true;

      if (evt.className === 'img-item') {
        if (evt.height >= 990) {
          duration = 6;
        }

        if (evt.height <= 790) {
          duration = 4
        }

        if (evt.height <= 590) {
          duration = 3
        }

        if (evt.height <= 290) {
          duration = 1
        }

        card.stylesImg = {
          transitionDuration: duration + 's',
          transform: `translate(0, -${evt.height - 200}px)`,
        };
      }
    },
    onMouseLeave(ev, card) {
      let evt = ev.target;

      card.hover = false;

      if (evt.className === 'card') {
        card.stylesImg = {
          transitionDuration: '1s',
          transform: `translate(0, 0)`,
        }
      }
    },
  },
  mounted() {
    this.isDestroy = setTimeout(() => {
      this.preloader = false;
    }, 500);
  },
  destroyed() {
    this.isDestroy = null;
  }
});
