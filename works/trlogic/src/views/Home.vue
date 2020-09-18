<template>
  <div class="content">
    <div class="header">
      <div class="header-head">
        <div class="breadcrumbs">home</div>
        <h1 class="header-head__title">Главная страница</h1>
      </div>
    </div>
    <div class="content-body">
      <div class="wcontacts">
        <div class="wcontacts-title">
          <h3>Контакты</h3>
          <div>
            <button
              type="button"
              class="btn btn-light"
              :disabled="action"
              @click="action = !action"
            >Добавленные</button>
            <button
              type="button"
              class="btn btn-light"
              :disabled="!action"
              @click="action = !action"
            >Удаленные</button>
          </div>
        </div>
        <p class="blank-text" v-if="!allContacts.length">Список пуст</p>
        <table class="wcontacts-table" v-else>
          <thead>
            <tr>
              <th v-for="th in filterHeaders" :key="th">
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
  name: "Home",
  data: () => ({
    action: true
  }),
  computed: {
    ...mapGetters(["getTableHeaders"]),
    allContacts() {
      if (this.action) {
        return this.$store.getters.allContacts.filter(c => c.added === true);
      }
      return this.$store.getters.allContacts.filter(c => c.removed === true);
    },
    filterHeaders() {
      return this.getTableHeaders.filter(h => h !== "Added" && h !== "Removed");
    }
  },
  methods: {
    routeTo(id) {
      return `contacts/${id}`;
    }
  },
  components: {
    ContentFooter
  }
};
</script>
