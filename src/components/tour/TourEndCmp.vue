<template>
<div id="end">
  <h2><i class="fas fa-flag-checkered"></i>&nbsp;{{ $t('message.congrats') }}</h2>
  <h3>{{ $t('message.shareIt') }}</h3>
  <div>
    <iframe :src="tourPostUrl" height="158" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
    <blockquote class="twitter-tweet"><p lang="en" dir="ltr"></p>&mdash; Torzeon (@torzeon) <a :href="tourTweetUrl"></a></blockquote>
  </div>
</div>
</template>

<script>
export default {
  name: 'TourEndCmp',
  data () {
    return {
      tourPostUrl: `https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(this.fbPost)}&width=0&show_text=true&appId=234626067544286&height=158`,
      tourTweetUrl: `${this.twPost}?ref_src=twsrc%5Etfw`
    }
  },
  props: {
    fbPost: {
      type: String,
      required: true
    },
    twPost: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped>
  #end {
    padding-top: 4rem;
    border-top: 1px solid #ccc;
  }

  #end i {
    font-size: 200%;
    vertical-align: middle;
  }

  #end > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-items: center;
  }
</style>
