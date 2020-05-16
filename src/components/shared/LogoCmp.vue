<template>
  <div>
    <img src="https://torzeon.s3.eu-central-1.amazonaws.com/torzeon-logo-half.min.png" :alt="projectName"/>
    <span>{{projectName}}</span>
  </div>
</template>

<script>
export default {
  name: 'LogoCmp',
  props: {
    projectName: {
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
    font-size: 1.5rem;
    padding-left: 5rem;
    display: flex;
    align-items: center;
}
span {
  text-decoration: none;
  color: #666;
  outline: none;
  cursor: default;
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
