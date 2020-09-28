import './styles/style.scss';

try {
  Vue.config.devtools = true;
} catch (error) {
  throw new Error(error.message);
}

const app = new Vue({
  el: '#app1',
  name: 'App',
  data() {
    return {
      tasks: [{
          id: "tt0",
          cover: "Vue",
          title: "Книга контактов от TRLogic",
          url: "https://z-igor.github.io/vue-widget_gh-ps/",
          addUrls: [{
            github: "https://github.com/z-igor/vue-widget_gh-ps/tree/master",
          }, {
            dribbble: "https://dribbble.com/shots/6609532-EverDo-Exploration/attachments",
          }, {
            "career.habr": "https://career.habr.com/companies/tr-logic",
          }
        ],
        },
        {
          id: "tt1",
          cover: "Vue",
          title: "Таймеры/секундомеры",
          url: "https://z-igor.github.io/works/vue_bb/dist/index.html",
          addUrls: [{
            github: "https://github.com/z-igor/z-igor.github.io/tree/master/works/vue_bb"
          }],
        },
        {
          id: "tt2",
          cover: "Vue",
          title: "Типа мессенджера",
          url: "https://z-igor.github.io/vue_test_messange/#/",
          addUrls: [{
            github: "https://github.com/z-igor/vue_test_messange"
          }],
        }
      ]
    }
  },
  methods: {},
  mounted() {},
  destroyed() {}
});
