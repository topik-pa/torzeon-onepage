<template>
  <div>
    <router-link :to="url">{{name}} <span>a day in...</span></router-link>
  </div>
</template>

<script>
export default {
  name: 'LogoCmp',
  data () {
    return {
      name: 'Torzeon',
      url: '/'
    }
  }
}
</script>

<style scoped>
div {
    font-weight: bold;
    font-size: 1.7rem;
    padding-left: 5rem;
}
span {
  display: block;
  font-size: .8rem;
}

@media screen and (max-width: 768px) {
  div {
    padding-left: 2rem;
  }
}
</style>
