<template>
  <article :class="{'up': isArticleUp}">
    <div class="shadow" :class="{'expanded': isShadowExpanded}"></div>
    <section class="article">
      <h2>{article.subtitle}</h2>
      <h1>{article.title}</h1>
      <p>{article.text}</p>
      <div className="article__footer">
        <div className="article__author">
          <img alt={article.author} src={article.avatar}/>
          <div>by <a href="mailto:marcopavan.mp@gmail.com">{article.author}</a></div>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
import JSUtils from '@/assets/scripts/utilities.js'
export default {
  name: 'Tour',
  data () {
    return {
      stopExpandShadow: 180,
      isShadowExpanded: false,
      stopArticleUp: 120,
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

@media screen and (max-width: 1024px) {
    article {
        margin: 0 2rem;
        padding: 2rem 2rem;
    }
}

@media screen and (max-width: 768px) {
    article {
        top: 460px;
        padding: 2rem 2rem;
    }
    .shadow {
        margin: 0 2rem;
    }
}

@media screen and (max-width: 360px) {
    article {
        margin: 0 1rem;
    }
  }

  .article {
    width: 66%;
}

h2 {
    font-weight: bold;
    margin-top: 1rem;
    font-size: 1.2rem;
}

h1 {
    font-weight: bold;
    font-size: 3rem;
    margin: 2rem 0;
}

p {
    padding-bottom: 2rem;
    border-bottom: 1px solid #DDD;
    font-size: 1.2rem;
    line-height: 150%;
    margin: 0;
}

.article__footer {
    display: flex;
    justify-content: space-between;
    padding: 2rem 0;
    align-items: center;
}

.article__author {
    display: flex;
    align-items: center;
}

.article__author img {
    border-radius: 50%;
    margin-right: 1rem;
}

.article__socials i {
    margin: 0 .5rem;
    color: #DDDDDD;
}

.article__gallery {
    margin: 3rem 0;
}

.article__stops--hide {
    display: none;
}

.article__stops--show {
    display: block;
}

@media screen and (max-width: 768px) {
    .article {
        width: initial;
        top: 0;
    }
}
</style>
