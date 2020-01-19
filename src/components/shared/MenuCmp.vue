<template>
    <nav>
      <div id="menu-toggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul>
            <li v-for="page in pages" :key="page.id">
              <router-link :to="page.url">{{page.name}}</router-link>
            </li>
          </ul>
      </div>
  </nav>
</template>

<script>
import '@/assets/styles/menu-toggle.css'

export default {
  name: 'MenuCmp',
  data () {
    return {
      pages: [
        {
          id: 0,
          name: 'Contacts',
          url: '/contacts'
        }
      ]
    }
  }
}
</script>

<style scoped>
nav {
    position: relative;
    top: -5rem;
    text-transform: uppercase;
    color: #999999;
    font-size: 110%;
    line-height: 5rem;
    height: 5rem;
    padding: 0 5rem;
    width: 50%;
    float: right;
}
nav ul {
    margin: 0;
    padding: 0;
    text-align: right;
}
nav li {
    display: inline;
    list-style: none;
}

nav input {
    display: none;
}

@media screen and (max-width: 768px) {
    nav {
        color: #111111;
        padding: 0 2rem;
    }
    nav ul {
        padding: 1rem;
        background: #FAFAFA;
    }
    nav li {
        padding: .4rem 1rem;
        display: block;
    }
}
</style>
