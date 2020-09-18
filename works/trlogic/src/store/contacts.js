export default {
  state: {
    contacts: [{
        id: "0",
        name: "Evan You",
        email: "evan@you.com",
        phone: "8941234565",
        city: "New Jersey",
        removed: true,
        added: false,
      },
      {
        id: "1",
        name: "Санта Клаусс",
        email: "hny@hny.com",
        phone: "8941234565",
        city: "Москва",
        removed: true,
        added: false,
      },
      {
        id: "2",
        name: "Карл Маркс",
        email: "mark@company.com",
        phone: "8941234565",
        city: "Москва",
        removed: false,
        added: true,
      },
      {
        id: "3",
        name: "Мурзик",
        email: "cat@milk.way",
        phone: "8941080808",
        city: "Москва, Ростов",
        removed: false,
        added: true,
      }
    ]
  },
  mutations: {
    addNew(state, id) {
      state.contacts.find(c => {
        if (c.id === id) {
          c.added = true;
          c.removed = false;
        }
      });
    },
    remove(state, id) {
      state.contacts.find(c => {
        if (c.id === id) {
          c.added = false;
          c.removed = true;
        }
      });
    },
    update(state, obj) {
      let index = state.contacts.findIndex(i => i.id === obj.id);

      state.contacts[index] = { ...obj };
    }
  },
  actions: {
    addContact({ commit }, id) {
      commit("addNew", id);
    },
    removeContact({ getters, commit }, id) {
      let contact = getters.getContact(id);
      let res = confirm(`Вы хотите удалить ${contact.name}?`);

      if (res) commit("remove", id);
    },
    updateContact({ commit }, obj) {
      commit("update", obj);
    }
  },
  getters: {
    allContacts: state => state.contacts,
    getContact: state => id => ({ ...state.contacts.find(c => c.id === id) })
  }
};
