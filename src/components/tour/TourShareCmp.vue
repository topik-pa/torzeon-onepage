<template>
  <div id="share">
    <div class="author">
      <img :alt="author" :src="avatar"/>
      <div>{{ $t('message.by') }}<strong>{{author}}</strong></div>
    </div>
    <div class="socials">
      {{ $t('message.followThisOn') }}
      <a v-for="social in socials" :key="social.name" :href="social.href" :title="$t('message.followOn') + social.name">
        <i :class="social.icon"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TourShareCmp',
  data () {
    return {

    }
  },
  props: {
    author: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: false
    },
    mail: {
      type: String,
      required: true
    },
    socials: {
      type: Array,
      required: false
    }
  }
}
</script>

<style scoped>
#share {
    display: flex;
    justify-content: space-between;
    padding: 2rem 0;
    align-items: center;
}

.author {
    display: flex;
    align-items: center;
    font-size: 90%;
}

.author img {
    border-radius: 50%;
    margin-right: .5rem;
    width: 40px;
    height: 40px;
}

.socials {
  font-size: 90%;
}

.socials i {
    margin: 0 .5rem;
    color: #333;
    font-size: 150%;
    vertical-align: text-bottom;
}
</style>
