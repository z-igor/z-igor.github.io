<template>
  <!-- <div class="sidebar sidebar--open sidebar--short"> -->
  <div class="sidebar" :class="open ? 'sidebar--open' : 'sidebar--short'">
    <div class="sidebar-header">
      <button class="btn btn-default" @click="open = !open">
        <fa-icon :icon="['fa', 'bars']" size="1x" />
      </button>
    </div>
    <ul class="sidebar-lists">
      <li class="sidebar-list">
        <router-link to="/" exact>
          <i class="indicators" v-show="getNotification.home">&#9679;</i>
          <fa-icon :icon="['fa', 'home']" size="1x" />
          <p>Домой</p>
        </router-link>
      </li>
      <li class="sidebar-list">
        <router-link to="/contacts">
          <i class="indicators" v-show="getNotification.contacts">&#9679;</i>
          <fa-icon :icon="['fa', 'address-book']" size="1x" />
          <p>Книга контактов</p>
        </router-link>
      </li>
      <li class="sidebar-list">
        <router-link to="/todos" active-class="active">
          <i class="indicators" v-show="getNotification.todos">&#9679;</i>
          <fa-icon :icon="['fa', 'check-double']" size="1x" />
          <p>Todos</p>
        </router-link>
      </li>
    </ul>
    <div class="sidebar-footer">sidebar footer</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "sidebar",
  data() {
    return {
      open: true
    };
  },
  computed: mapGetters(["getNotification"]),
  methods: {}
};
</script>
