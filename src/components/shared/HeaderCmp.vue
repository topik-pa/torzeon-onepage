<template>
  <header :class="{'fixed': isFixedHeader && !isMobile }" :style="headerInlineStyle">
    <logo-cmp :project="project"/>
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
      isMobile: false,
      stopHeaderFixed: 120,
      isFixedHeader: true,
      scrolledPosition: 0,
      lastScrolled: 0,
      debounceInterval: 5,
      headerInlineStyle: {}
    }
  },
  computed: {
    project () {
      return this.$store.getters.getProjectName
    }
  },
  mounted: function () {
    if (screen.width <= 760) {
      this.isMobile = true
    }
    let deabouncedScrollListener = JSUtils.debounce(() => {
      if (this.isMobile) {
        return
      }
      this.scrolledPosition = window.scrollY
      if (this.scrolledPosition > this.stopHeaderFixed) {
        if (this.isFixedHeader) {
          this.lastScrolled = this.scrolledPosition
        }
        this.isFixedHeader = false
        this.headerInlineStyle = {top: this.lastScrolled + 'px'}
      }
      if (this.scrolledPosition <= this.stopHeaderFixed) {
        this.isFixedHeader = true
        this.headerInlineStyle = {}
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
  position: relative;
  height: 5rem;
  border-bottom: 1px solid #999;
  background-color: #FFFFFF;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header.fixed  {
    position: fixed;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 100%;
    top: 0;
    max-width: 1280px;
}
@media screen and (max-width: 768px) {
  header {
    top: 0;
  }
}
</style>
