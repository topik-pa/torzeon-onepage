<template>
  <div class="card">
    <div v-if="marker" class="marker">{{marker}}</div>
    <div v-if="image" class="image">
      <img :title="image.alt" v-lazy="image.src"/>
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
          <i :class="obj.icon"></i>{{obj.key}}:&nbsp;&nbsp;<span v-html="obj.value"></span>
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
      required: true
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
    border-radius: 10px;
    position: relative;
    font-weight: bold;
    max-width: 260px;
    margin: 0 auto 3rem;
    padding: 3.3rem 1rem;
    overflow: hidden;
    box-shadow: 0px 0px 10px #AAAAAA;
    min-height: 280px;
    font-family: 'Libre Franklin', sans-serif;
}

.marker {
    font-size: 660%;
    position: absolute;
    top: -15px;
    left: -15px;
    line-height: 110px;
    opacity: .15;
    text-transform: capitalize;
    text-shadow: 1px 1px 1px #fff;
    font-style: italic;
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
  vertical-align: sub;
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
  font-size: 110%;
}

@media screen and (max-width: 1024px) {
  .marker {
    font-size: 560%;
  }
  .card {
    max-width: 200px;
    padding: 2.3rem 1rem;
  }
}

@media screen and (max-width: 768px) {
  .marker {
    font-size: 760%;
  }
  .card {
    max-width: initial;
  }
}
</style>
