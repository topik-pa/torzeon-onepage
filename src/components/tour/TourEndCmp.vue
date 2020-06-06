<template>
<div id="end">
  <h2><i class="fas fa-flag-checkered"></i>&nbsp;{{ $t('message.congrats') }}</h2>
  <h3>{{ $t('message.shareIt') }}</h3>
  <div>
    <div class="fb-post" data-href="https://www.facebook.com/permalink.php?story_fbid=166304114892687&amp;id=103840521139047" data-show-text="true" data-width=""><blockquote cite="https://developers.facebook.com/permalink.php?story_fbid=166304114892687&amp;id=103840521139047" class="fb-xfbml-parse-ignore">
    <p>Un giorno a... Milano
    Visita i luoghi del nostro itinerario e scopri il PROMOCODE segreto!
    Effettua un check nei...
    </p>Pubblicato da <a href="https://www.facebook.com/Torzeon-103840521139047/">Torzeon</a> su&nbsp;<a href="https://developers.facebook.com/permalink.php?story_fbid=166304114892687&amp;id=103840521139047">Lunedì 1 giugno 2020</a></blockquote></div>

    <br/><br/><br/><br/>

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

  #end .fb-post {
    overflow-x: scroll;
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
