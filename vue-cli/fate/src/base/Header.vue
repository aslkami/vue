<template>
  <div id="header">
    <slot></slot>
    <i class="iconfont iconfanhui" v-if="back"></i>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    back: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="less">

#header {
  position: fixed;
  width: 100%;
  line-height: 50px;
  text-align: center;
  top: 0;
  left: 0;
  background-color: lightcoral;
  color: #fff;
  i {
    position: absolute;
    left: 10px;
  }
}

</style>
