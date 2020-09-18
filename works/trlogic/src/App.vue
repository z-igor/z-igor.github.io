<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import "@/style/style.scss";
import MainLayout from "@/layouts/MainLayout";

export default {
  name: "App",
  computed: {
    layout() {
      return this.$route.meta.layout + "-layout";
    }
  },
  mounted() {},
  components: {
    MainLayout
  }
};
</script>
