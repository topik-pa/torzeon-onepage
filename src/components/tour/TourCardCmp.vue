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
      <p>
        {{text}}
      </p>
    </div>
    <div v-if="list" class="list">
      <ul>
        <li v-for="obj in list" :key="obj.id">
          <i class="icon material-icons">{{obj.icon}}</i>&nbsp;<span><span>{{obj.key}}</span>{{obj.value}}</span>
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
    font-size: 120px;
    position: absolute;
    top: 0;
    left: -20px;
    line-height: 110px;
    opacity: .1;
}

.title {
    padding: 2rem 0;
    font-size: 230%;
    font-weight: bold;
    margin-bottom: 1rem;
}

li {
  line-height: 1.5rem;
}

li > span span:after {
  content: ': ';
}
li > span span {
  font-weight: bolder;
}

li > span {
  vertical-align: super;
  font-weight: 400;
}

.image img {
  width: 100%;
  border: 5px solid white;
  box-sizing: border-box;
}

.text {
  font-weight: normal;
  line-height: 140%;
}
</style>
