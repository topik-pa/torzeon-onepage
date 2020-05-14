<template>
  <article :class="{'up': isArticleUp}">
    <div class="shadow" :class="{'expanded': isShadowExpanded}"></div>
    <tour-cmp :tour="$store.getters.getDefaultTour"/>
  </article>
</template>

<script>
import JSUtils from '@/assets/scripts/utilities.js'
import TourCmp from '@/components/tour/TourCmp'

export default {
  name: 'ArticleCmp',
  data () {
    return {
      stopExpandShadow: 120,
      isShadowExpanded: false,
      stopArticleUp: 120,
      isArticleUp: false,
      debounceInterval: 50
    }
  },
  components: {
    TourCmp
  },
  mounted: function () {
    let _this = this
    let deabouncedScrollListener = JSUtils.debounce(function () {
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
    top: 420px;
    padding: 2rem 1rem;
    border-radius: 10px;
}
article {
    position: relative;
    margin: 0 5rem;
    z-index: 99;
    transition: top 1s linear;
}

article.up {
  top: 180px;
  padding: 2rem 1rem;
}

.shadow {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 100%;
    transition: margin 1s linear;
    z-index: -1;
}
.shadow.expanded {
    margin: 0 -3rem;
}

@media screen and (max-width: 768px) {
    article {
        top: 320px;
        padding: 2rem 1rem;
        margin: 0 1rem;
    }
    article.up {
      top: 120px;
    }
    .shadow {
        margin: 0;
        padding: 2rem 1rem;
    }
    .shadow.expanded {
        margin: 0 -1rem;
    }
}
</style>
