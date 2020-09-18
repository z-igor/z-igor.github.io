<template>
  <div class="container">
    <Sidebar />
    <router-view />
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";

export default {
  name: "main-layout",
  components: {
    Sidebar
  }
};
</script>
