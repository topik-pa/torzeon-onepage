<template>
  <article :class="{'up': isArticleUp}">
    <div class="shadow" :class="{'expanded': isShadowExpanded}"></div>
  </article>
</template>

<script>
import JSUtils from '@/assets/scripts/utilities.js'
export default {
  name: 'Tour',
  data () {
    return {
      stopExpandShadow: 120,
      isShadowExpanded: false,
      stopArticleUp: 60,
      isArticleUp: false,
      debounceInterval: 10
    }
  },
  mounted: function () {
    var _this = this
    var deabouncedScrollListener = JSUtils.debounce(function () {
      let scrollPosition = window.scrollY
      if (scrollPosition >= _this.stopExpandShadow) {
        _this.isShadowExpanded = true
      }
      if (scrollPosition < _this.stopExpandShadow) {
        _this.isShadowExpanded = false
      }
      if (scrollPosition >= _this.stopArticleUp) {
        _this.isArticleUp = true
      }
      if (scrollPosition < _this.stopArticleUp) {
        _this.isArticleUp = false
      }
    }, _this.debounceInterval)
    window.addEventListener('scroll', function () {
      deabouncedScrollListener()
    })
  }
}
</script>

<style scoped>
article, .shadow {
    background: white;
    top: 480px;
    padding: 2rem 4rem;
    border-radius: 10px;
}

article {
    position: relative;
    margin: 0 5rem;
    z-index: 99;
    transition: top 1s ease-out;
    height: 1024px;
}
article.up {
  top: 380px;
}

.shadow {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 100%;
    transition: margin 1s ease-out;
    z-index: -1;
}
.shadow.expanded {
    margin: 0 -3rem;
}

@media screen and (max-width: 768px) {
    article {
        top: 460px;
        padding: 2rem 2rem;
        margin: 0 2rem;
    }
    .shadow {
        margin: 0;
        padding: 2rem 2rem;
    }
    .shadow.expanded {
        margin: 0 -1rem;
    }
}
</style>
