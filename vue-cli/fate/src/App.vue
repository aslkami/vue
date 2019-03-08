<template>
  <div id="app">
    <router-view></router-view>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from '@/base/Tabbar.vue'
export default {
  name: 'App',
  components: {
    Tabbar
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  ul,li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  input, button {
    -webkit-appearance: none;
  }
  .content {
    position: fixed;
    top: 50px;
    bottom: 50px;
    width: 100%;
    overflow: scroll;
  }
</style>
