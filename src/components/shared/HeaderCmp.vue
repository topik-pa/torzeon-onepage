<template>
  <header :class="{'fixed': isFixedHeader && !isMobile }">
    <logo-cmp/>
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
      stopHeaderFixed: 300,
      isFixedHeader: true,
      debounceInterval: 10
    }
  },
  mounted: function () {
    var _this = this
    var deabouncedScrollListener = JSUtils.debounce(function () {
      let scrollPosition = window.scrollY
      if (scrollPosition > _this.stopHeaderFixed) {
        _this.isFixedHeader = false
      }
      if (scrollPosition <= _this.stopHeaderFixed) {
        _this.isFixedHeader = true
      }
    }, _this.debounceInterval)
    window.addEventListener('scroll', function () {
      deabouncedScrollListener()
    })
  },
  computed: {
    isMobile: function () {
      return screen.width <= 760
    }
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
    top: 300px;
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
