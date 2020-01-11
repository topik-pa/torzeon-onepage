<template>
  <div class="footer">
    <div class="author">
      <img :alt="author" :src="avatar"/>
      <div>by <a title="Contact the author with an email" :href="'mailto:' + mail">{{author}}</a></div>
    </div>
    <div class="socials">
      <i v-for="social in socials" :key="social.name" class="material-icons">
        {{social.icon}}
      </i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TourFooterCmp',
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
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.footer {
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

.socials i {
    margin: 0 .5rem;
    color: #DDDDDD;
}
</style>
