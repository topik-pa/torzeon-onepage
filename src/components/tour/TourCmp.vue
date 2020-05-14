<template>
  <section>
    <h2>{{tour.subtitle}}</h2>
    <h1>{{tour.title}}</h1>
    <p v-html="tour.text" />
    <tour-share-cmp
      :author="tour.author"
      :avatar="tour.avatarAuthorUrl"
      :mail="tour.authorMail"
      :socials="tour.socials"
    />
    <tour-gallery-cmp :images="tour.images" />
    <aside>
      <tour-card-cmp
        v-for="highlight in tour.highlights"
        :key="highlight.id"
        :marker="highlight.marker"
        :title="highlight.title"
        :image="highlight.image"
        :list="highlight.list"
        :text="highlight.text"
        :cta="highlight.cta"
      />
    </aside>
    <div id="ready">
      <h2>
        <i class="far fa-play-circle"></i>
        &nbsp;{{ $t('message.readyMessage') }}
      </h2>
    </div>
    <div id="stops">
      <tour-stop-cmp
        v-for="stop in tour.stops"
        :key="stop.id"
        :stop="stop"
        :promocodeStepsDone="tour.promocodeStepsDone"
        :promocodeStepsTotal="tour.promocodeStepsTotal"
        :revealedPromocode="tour.revealedPromocode"
        :stopsDone="tour.stopsDone"
        @incrementPromocodeCounter="incrementPromocodeCounter"
        @incrementStopsDone="incrementStopsDone"
        @updateRevealedPromocode="updateRevealedPromocode"
      />
    </div>
    <tour-end-cmp :fbPost="tour.fbPost" :twPost="tour.twPost" />
    <tour-progress-cmp :stops="tour.stops" :started="tour.started" />
  </section>
</template>

<script>
import TourShareCmp from "./TourShareCmp";
import TourGalleryCmp from "./TourGalleryCmp";
import TourStopCmp from "./TourStopCmp";
import TourCardCmp from "./TourCardCmp";
import TourEndCmp from "./TourEndCmp";
import TourProgressCmp from "./TourProgressCmp";

export default {
  name: "TourCmp",
  components: {
    TourShareCmp,
    TourGalleryCmp,
    TourCardCmp,
    TourStopCmp,
    TourEndCmp,
    TourProgressCmp
  },
  props: {
    tour: {
      type: Object,
      required: true
    }
  },
  methods: {
    tourStarted() {
      let scrollSize =
        window.innerHeight -
        document.getElementById("ready").getBoundingClientRect().top;
      let padding = 300;
      if (scrollSize < padding) {
        this.tour.started = false;
      } else {
        this.tour.started = true;
      }
    },
    incrementPromocodeCounter() {
      this.tour.promocodeStepsDone++;
    },
    incrementStopsDone() {
      this.tour.stopsDone++;
    },
    updateRevealedPromocode(index) {
      let replaceAt = function(string, i, replace) {
        return string.substring(0, i) + replace + string.substring(i + 1);
      }
      
      if(this.tour.promocode[index]) {
        this.tour.revealedPromocode = replaceAt(this.tour.revealedPromocode, index, this.tour.promocode[index])
      }
      
    }
  },
  mounted() {
    for (let i = 0; i < this.tour.promocode.length; i++) {
      this.tour.revealedPromocode += "*";
    }
  },
  created() {
    window.addEventListener("scroll", this.tourStarted);
  },
  destroyed() {
    window.removeEventListener("scroll", this.tourStarted);
  }
};
</script>

<style scoped>
section {
  width: 66%;
}

p {
  padding-bottom: 2rem;
  font-size: 110%;
}

#ready {
  padding-top: 4rem;
}

#ready i {
  font-size: 200%;
  vertical-align: middle;
}

aside {
  position: absolute;
  top: -60px;
  right: 0;
  z-index: 99;
}

@media screen and (max-width: 1024px) {
  aside {
    right: -2rem;
  }
}

@media screen and (max-width: 768px) {
  aside {
    top: initial;
    position: relative;
    right: initial;
  }
  section {
    width: 100%;
  }
}
</style>
