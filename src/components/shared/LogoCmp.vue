<template>
  <div>
    <img src="https://torzeon.s3.eu-central-1.amazonaws.com/torzeon-logo-half-min.png" :alt="project"/>
    <router-link :to="rootUrl">{{project}}</router-link>
  </div>
</template>

<script>
export default {
  name: 'LogoCmp',
  props: {
    project: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      rootUrl: '/'
    }
  }
}
</script>

<style scoped>
div {
    font-size: 180%;
    padding-left: 5rem;
    display: flex;
    align-items: center;
}
span {
  display: block;
  font-size: 80%;
}
img {
  width: 32px;
  margin-right: 0.4rem;
}
@media screen and (max-width: 768px) {
  div {
    padding-left: 1.5rem;
  }
}
</style>
