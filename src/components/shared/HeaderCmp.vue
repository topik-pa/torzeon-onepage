<template>
  <header :class="{'show': showHeader}">
    <logo-cmp :projectName="projectName"/>
  </header>
</template>

<script>
import JSUtils from '@/assets/scripts/utilities.js'
import LogoCmp from './LogoCmp'

export default {
  name: 'HeaderCmp',
  components: {
    LogoCmp
  },
  data () {
    return {
      stopHideHeader: 120,
      showHeader: true,
      scrolledPosition: 0,
      debounceInterval: 50
    }
  },
  computed: {
    projectName () {
      return this.$store.getters.getProjectName
    }
  },
  mounted () {
    let deabouncedScrollListener = JSUtils.debounce(() => {
      this.scrolledPosition = window.scrollY
      if (this.scrolledPosition > this.stopHideHeader) {
        this.showHeader = false
      }
      else {
        this.showHeader = true
      }
    }, this.debounceInterval)
    window.addEventListener('scroll', function () {
      deabouncedScrollListener()
    })
  }
}
</script>

<style scoped>
header {
  position: fixed;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 100%;
  max-width: 1280px; 
  height: 5rem;
  border-bottom: 1px solid #999;
  background-color: #FFFFFF;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: top .4s ease-in;
  top: -5rem;
}
header.show  {
   top: 0; 
}
</style>
