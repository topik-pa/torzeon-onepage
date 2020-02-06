<template>
  <div class="card">
    <div v-if="marker" class="marker">{{marker}}</div>
    <div v-if="image" class="image">
      <img :src="image.src" :title="image.alt"/>
    </div>
    <div class="title">
      <h3>{{title}}</h3>
    </div>
    <div v-if="text" class="text">
      <p v-html="text"></p>
    </div>
    <div v-if="list" class="list">
      <ul>
        <li v-for="obj in list" :key="obj.id">
          <i :class="obj.icon" :title="obj.key"></i>&nbsp;<span>{{obj.value}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TourCardCmp',
  props: {
    marker: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: false
    },
    image: {
      type: Object,
      required: false
    },
    list: {
      type: Array,
      required: false
    },
    text: {
      type: String,
      required: false
    },
    cta: {
      type: Object,
      required: false
    }
  }
}
</script>

<style scoped>
.card {
    background-color: #F8E627;
    margin-bottom: 1rem;
    border-radius: 10px;
    position: relative;
    font-weight: bold;
    max-width: 270px;
    margin: 0 auto 3rem;
    padding: 4rem 1rem;
    overflow: hidden;
    box-shadow: 0px 0px 10px #AAAAAA;
    min-height: 280px;
}

.marker {
    font-size: 750%;
    position: absolute;
    top: 0;
    left: -20px;
    line-height: 110px;
    opacity: .15;
    text-transform: capitalize;
}

.title {
    padding-top: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
}

h3 {
  font-size: 180%;
}

i {
  font-size: 200%;
  vertical-align: middle;
  width: 2rem;
}

li {
  margin-bottom: .6rem;
}

li > span {
  font-weight: normal;
  font-style: italic;
}

.image img {
  width: 100%;
  border: 5px solid white;
  box-sizing: border-box;
}

.text {
  font-weight: normal;
}
</style>
