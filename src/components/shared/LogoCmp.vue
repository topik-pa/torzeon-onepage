<template>
  <div>
    <router-link :to="url">{{name}}</router-link>
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
    font-size: 180%;
    padding-left: 5rem;
}
span {
  display: block;
  font-size: 80%;
}

@media screen and (max-width: 768px) {
  div {
    padding-left: 2rem;
  }
}
</style>
