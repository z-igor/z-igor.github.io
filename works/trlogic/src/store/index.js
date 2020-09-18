import Vue from "vue";
import Vuex from "vuex";
import contacts from "./contacts";
import table from "./table";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notification: {
      home: false,
      contacts: true,
      todos: false
    }
  },
  mutations: {
    notification(state, { page, bool }) {
      state.notification[page] = bool;
    }
  },
  actions: {
    setNotification({ commit }, { page, bool }) {
      commit("notification", { page, bool });
    }
  },
  getters: {
    getNotification: s => s.notification
  },
  modules: {
    contacts, table
  }
});
