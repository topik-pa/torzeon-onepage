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
    line-height: 5rem;
    font-weight: bold;
    padding: 0 5rem;
    font-size: 1.7rem;
}

@media screen and (max-width: 768px) {
    div {
        padding: 0 2rem;
        width: 50%;
    }
}
</style>
