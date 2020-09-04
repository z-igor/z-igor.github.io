import './styles/style.scss';
import data from '../../works';

Vue.config.devtools = true;

const wrapper = document.getElementById('app');
const cards = wrapper.querySelectorAll('.card');

cards.forEach(card => {
  let stacks = card.querySelector('.stack');

  card.addEventListener('mouseenter', (ev) => {
    stacks.className = 'stack stack--show';
  });

  card.addEventListener('mouseleave', (ev) => {
    stacks.className = 'stack stack--hide';
  });
});

const app = new Vue({
  el: '#app',
  name: 'App',
  data() {
    return {
      data: data.map(el => ({
        ...el,
        hover: false,
        images: [],
      })),
    }
  },
  methods: {
    toggleMouseOverLeave(card, h) {
      card.hover = h;
    },
    importAll(r) {
      r.keys().forEach(key => (this.images.push({
        pathLong: r(key),
        pathShort: key
      })));
    },
  },
  mounted() {
    this.importAll(require.context("../../works/blaz/", true, /\.jpg$/));
  }
});
