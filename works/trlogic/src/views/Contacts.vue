<template>
  <div class="content">
    <div class="header">
      <div class="header-head">
        <div class="breadcrumbs">home / contacts</div>
        <h1 class="header-head__title">Книга контактов</h1>
      </div>
    </div>
    <div class="content-body">
      <div class="contacts">
        <table class="contacts-table">
          <thead>
            <tr>
              <th v-for="th in getTableHeaders" :key="th">
                <p>{{ th | headers }}</p>
              </th>
            </tr>
          </thead>
          <!-- <tfoot></tfoot> -->
          <tbody>
            <tr v-for="(contact, i) in allContacts" :key="contact.id">
              <td v-for="(h, j) in filterHeaders" :key="contact.id + j">
                <router-link
                  :to="`contacts/${contact.id}`"
                >{{ h === "#" ? (i+1) : contact[h.toLowerCase()] }}</router-link>
              </td>
              <td>
                <button
                  class="btn btn-success"
                  v-if="contact.removed"
                  @click="onAddClick(contact.id)"
                >
                  <fa-icon :icon="['fa', 'plus-circle']" />Добавить
                </button>
                <p class="contact-added" v-else>
                  <fa-icon :icon="['fa', 'check']" />Добавлен
                </p>
              </td>
              <td>
                <button
                  class="btn btn-danger"
                  v-if="contact.added"
                  @click="onRemoveClick(contact.id)"
                >
                  <fa-icon :icon="['fa', 'trash']" />Удалить
                </button>
                <p class="contact-removed" v-else>
                  <fa-icon :icon="['fa', 'check']" />Удалён
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <ContentFooter />
  </div>
</template>

<script>
import ContentFooter from "@/components/ContentFooter";
import { mapGetters } from "vuex";

export default {
  name: "contacts",
  computed: {
    ...mapGetters(["getTableHeaders"]),
    allContacts() {
      return this.$store.getters.allContacts;
    },
    filterHeaders() {
      return this.getTableHeaders.filter(h => h !== "Added" && h !== "Removed");
    }
  },
  methods: {
    routeTo(id) {
      return `contacts/${id}`;
    },
    onAddClick(id) {
      this.$store.dispatch("addContact", id);
    },
    onRemoveClick(id) {
      this.$store.dispatch("removeContact", id);
    }
  },
  mounted() {
    this.$store.dispatch("setNotification", { page: "contacts", bool: false });
  },
  components: {
    ContentFooter
  }
};
</script>
