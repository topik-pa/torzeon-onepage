<template>
  <button @click="clicked" type="button" :class="[{'disabled': disabled}, btnType]">
    {{label}}
  </button>
</template>

<script>
export default {
  name: 'CtaCmp',
  props: {
    label: {
      type: String,
      required: true
    },
    btnType: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      required: false
    }
  },
  methods: {
    clicked () {
      this.$emit('clicked')
    }
  }
}
</script>

<style scoped>
button {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    background-color: transparent;
    border: 1px solid transparent;
    padding: .5rem 1rem;
    font-size: 100%;
    line-height: 1.4;
    border-radius: 5px;
}
button.primary {
    color: #333;
    background-color: #F8E627;
    border-color: #E7D516;
    font-weight: bold;
}
button.primary.disabled {
    color: #999;
    background-color: transparent;
    cursor: auto;
}
</style>
