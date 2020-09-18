<template>
  <div class="content">
    <div class="header">
      <div class="header-head">
        <div class="breadcrumbs">home / contacts / {{ $route.params.id }}</div>
        <h1 class="header-head__title">{{ title }}</h1>
      </div>
    </div>
    <div class="content-body">
      <div class="contacts-edit">
        <h3 class="contacts-edit__title">Редактировать</h3>
        <form class="contacts-edit__form" @submit.prevent :key="update">
          <label v-for="(elm, i) in filterContact" :key="elm[0] + i">
            <p>{{ firstLetter(elm[0]) | headers }}</p>
            <input type="text" name="firstName" v-model="contact[elm[0]]" placeholder="Name" />
            <button class="btni btn-danger" @click="onRemoveFieldClick($event, elm)">
              <fa-icon :icon="['fa', 'trash']" />
            </button>
          </label>
          <div class="newField" v-show="newField">
            <label>
              <p>Новое поле</p>
              <input type="text" name="new-field" v-model="newFieldKey" placeholder="Значение поля" />
            </label>
            <label>
              <p>Новое значение</p>
              <input
                type="text"
                name="new-field-val"
                v-model="newFieldVal"
                placeholder="Новое значение"
              />
            </label>
          </div>
          <div class="form-action">
            <button
              class="btn btn-primary"
              @click="onUpdateClick"
              :disabled="isDisableSave"
            >Сохранить</button>
            <button class="btn btn-success" @click="onAddNewFieldClick">Добавить поле</button>
            <button
              class="btn btn-light"
              title="Сброс редактирования и нового поля"
              @click="onCancelClick"
            >Отмена</button>
            <button
              class="btni btn-primary"
              title="Отменить последнее изменение"
              @click="undo"
              :disabled="canUndo"
            >
              <fa-icon :icon="['fa', 'undo']" />
            </button>
          </div>
        </form>
      </div>
    </div>
    <ContentFooter />
  </div>
</template>

<script>
import ContentFooter from "@/components/ContentFooter";
import { mapGetters } from "vuex";
import undo from "@/mixins/";

export default {
  name: "contact",
  data() {
    return {
      title: "",
      contact: {},
      newField: false,
      newFieldKey: "",
      newFieldVal: null,
      saveTimeout: null,
      isDisableSave: true,
      update: null
    };
  },
  computed: {
    ...mapGetters(["getContact"]),
    filterContact() {
      return Object.entries(this.contact).filter(
        c => c[0] !== "added" && c[0] !== "removed" && c[0] !== "id"
      );
    }
  },
  methods: {
    onUpdateClick() {
      if (this.newFieldKey !== "" && this.newFieldVal !== null) {
        if (!this.hasDuplicate(this.newFieldKey)) {
          this.contact = {
            ...this.contact,
            [this.newFieldKey.toLowerCase()]: this.newFieldVal
          };
          this.$store.dispatch("addHeaders", this.newFieldKey);
        }
      }

      this.$store.dispatch("updateContact", this.contact);
      this.$store.dispatch("setNotification", { page: "contacts", bool: true });

      this.done.pop();
      this.done.push({ ...this.contact });
      this.title = this.contact.name;

      this.newField = false;
      this.newFieldKey = "";
      this.newFieldVal = null;
      this.activeTimeoutBtnSave();
      this.update++;
    },
    onAddNewFieldClick() {
      this.newField = !this.newField;
      this.newFieldKey = "";
      this.newFieldVal = null;
    },
    onRemoveFieldClick(e, field) {
      let isCansel = confirm("Удалить поле?");

      if (isCansel) {
        let index = this.filterContact.findIndex(i => i[0] === field[0]);

        this.filterContact.splice(index, 1);
        delete this.contact[field[0]];
        this.update++;
      }
    },
    onCancelClick() {
      let isCansel = confirm("Отменить?");

      if (isCansel) {
        this.newField = false;
        this.contact = this.getContact(this.$route.params.id);
      }
    },
    firstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    hasDuplicate(elm) {
      let index = this.filterContact.findIndex(i => i[0] === elm.toLowerCase());
      return index !== -1;
    },
    activeTimeoutBtnSave() {
      this.isDisableSave = true;
      this.saveTimeout = setTimeout(() => {
        this.isDisableSave = false;
      }, 1e3);
    }
  },
  mixins: [undo],
  mounted() {
    this.contact = this.getContact(this.$route.params.id);
    this.title = this.contact.name;
    this.activeTimeoutBtnSave();
  },
  components: {
    ContentFooter
  }
};
</script>
