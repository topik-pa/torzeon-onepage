<template>
  <footer v-if="isVisible">
    footer
  </footer>
</template>

<script>
export default {
  name: 'FooterCmp',
  data () {
    return {
      isVisible: true
    }
  }
}
</script>

<style scoped>
  footer {
    height: 3rem;
    border-top: 1px solid #999;
    background-color: #EEEEEE;
    z-index: 99;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
