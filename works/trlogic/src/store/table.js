export default {
  state: {
    headers: ["#", "Name", "Email", "Phone", "City", "Added", "Removed"]
  },
  mutations: {
    addInTable(state, array) {
      array.forEach(element => {
        if (!state.headers.includes(element)) {
          state.headers.splice(-2, 0, ...array);
        }
      });
    },
    deleteHead(state, str) {
      let index = state.headers.indexof(str);
      state.headers.splice(index, 1);
    }
  },
  actions: {
    addHeaders({ commit }, aH) {
      commit("addInTable", [aH]);
    },
    deleteHeader({ commit }, str) {
      commit("deleteHead", str);
    }
  },
  getters: {
    getTableHeaders: s => s.headers,
  }
};
