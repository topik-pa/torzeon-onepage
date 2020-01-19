<template>
  <div id="gallery">
    <div v-for="obj in imageObjects" :key="obj.id" :class="{'big': obj.big, 'small': !obj.big}">
      <img v-if="obj.big" :alt="obj.alt" :src="obj.src"/>
      <img v-else v-for="img in obj" :key="img.id" :alt="img.alt" :src="img.src"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TourGalleryCmp',
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  computed: {
    imageObjects: function () {
      let returnedArray = []
      let tempArr = []
      this.images.forEach((elem, i) => {
        let obj = {}
        obj.src = elem.src
        obj.alt = elem.alt
        // Only some images will be big
        if (i % 3 === 0) {
          obj.big = true
          returnedArray.push(obj)
        } else {
          obj.big = false
          tempArr.push(obj)
          if (tempArr.length === 2) {
            returnedArray.push(tempArr)
            tempArr = []
          }
        }
      })
      return returnedArray
    }
  }
}
</script>

<style scoped>
#gallery {
  display: flex;
}

#gallery div.small {
  width: 50%;
}
#gallery div.big {
  width: 100%;
}

#gallery img {
  display: block;
  width: 100%;
  border: 5px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 10px;
}

@media screen and (max-width: 768px) {
  #gallery {
    flex-direction: column;
  }
  #gallery div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
