<template>
  <section>
    <h2>{{subtitle}}</h2>
    <h1>{{title}}</h1>
    <p>{{text}}</p>
    <tour-footer-cmp :author="author" :avatar="avatarAuthorUrl" :mail="authorMail" :socials="socials"/>
    <tour-gallery-cmp :images="images"/>
    <aside>
      <tour-card-cmp v-for="highlight in highlights" :key="highlight.id" :marker="highlight.marker" :title="highlight.title" :image="highlight.image" :list="highlight.list" :text="highlight.text" :cta="highlight.cta"/>
    </aside>
    <div id="ready">
      <div class="title">
        <h2><i class="icon material-icons">directions</i>&nbsp; Are you ready? ....Let's START!</h2>        
      </div>
    </div>
    <div class="stops">
      <tour-stop-cmp v-for="stop in stops" :key="stop.id" :stop="stop"/>
    </div>
    <tour-bottom-cmp :stops="stops" :started="started"/>
  </section>
</template>

<script>
import TourFooterCmp from './TourFooterCmp'
import TourGalleryCmp from './TourGalleryCmp'
import TourStopCmp from './TourStopCmp'
import TourCardCmp from './TourCardCmp'
import TourBottomCmp from './TourBottomCmp'
export default {
  name: 'TourCmp',
  data () {
    return {
      title: 'Titolo',
      subtitle: 'Sottotitolo',
      text: 'Testo articolo',
      author: 'Marco Pavan',
      avatarAuthorUrl: 'https://placekitten.com/g/40/40',
      authorMail: 'marcopavan.mp@gmail.com',
      started: false,
      socials: [
        {
          name: 'Facebook',
          icon: 'book'
        },
        {
          name: 'Instagram',
          icon: 'android'
        },
        {
          name: 'Twitter',
          icon: 'build'
        }
      ],
      images: [
        {
          id: 0,
          src: 'https://placekitten.com/200/200',
          alt: 'Alt descriprion for this image'
        },
        {
          id: 1,
          src: 'https://placekitten.com/300/300',
          alt: 'Alt descriprion for this image'
        },
        {
          id: 2,
          src: 'https://placekitten.com/200/200',
          alt: 'Alt descriprion for this image'
        },
        {
          id: 3,
          src: 'https://placekitten.com/400/400',
          alt: 'Alt descriprion for this image'
        },
        {
          id: 4,
          src: 'https://placekitten.com/200/200',
          alt: 'Alt descriprion for this image'
        },
        {
          id: 5,
          src: 'https://placekitten.com/400/400',
          alt: 'Alt descriprion for this image'
        }
      ],
      highlights: [
        {
          id: 0,
          marker: 'Info',
          title: 'General infos',
          list: [
            {
              id: 0,
              icon: 'android',
              key: 'Start',
              value: 'Stazione Centrale'
            },
            {
              id: 1,
              icon: 'android',
              key: 'End',
              value: 'Castello Sforzesco'
            },
            {
              id: 2,
              icon: 'android',
              key: 'Rating',
              value: 4.6
            },
            {
              id: 3,
              icon: 'android',
              key: 'Type',
              value: 'Classic'
            },
            {
              id: 4,
              icon: 'android',
              key: 'Duration',
              value: 240
            },
            {
              id: 5,
              icon: 'android',
              key: 'Geometry',
              value: 'Linear trip'
            }
          ]
        },
        {
          id: 1,
          marker: 'Places',
          title: 'You will visit...',
          image: {
            src: 'https://image.shutterstock.com/image-photo/heatwave-hot-sun-climate-change-260nw-1152324746.jpg',
            alt: 'Alt text for this image'
          },
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id finibus elit. Duis id placerat augue. Vivamus gravida rhoncus enim vitae placerat.'
        },
        {
          id: 2,
          marker: 'Relax',
          title: 'You will taste...',
          image: {
            src: 'https://image.shutterstock.com/image-photo/heatwave-hot-sun-climate-change-260nw-1152324746.jpg',
            alt: 'Alt text for this image'
          },
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id finibus elit. Duis id placerat augue. Vivamus gravida rhoncus enim vitae placerat.'
        }
      ],
      stops: [
        {
          id: 0,
          name: 'Stazione Centrale',
          type: 'public',
          gmapsLocation: 'https://goo.gl/maps/4UesoB2u579WrBm68',
          path: 'https://goo.gl/maps/FY7REQsgZu9Ridmx5',
          description: 'Here we are in the first step of our journey... <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor. Proin ac dictum nunc. Nulla id justo varius, auctor elit ac, tristique erat.',
          checked: false,
          promo: 'M',
          links: [
            {
              url: 'https://it.wikipedia.org/wiki/Stazione_di_Milano_Centrale',
              name: 'Stazione Centrale (from Wikipedia)'
            },
            {
              url: 'https://www.esquire.com/it/lifestyle/viaggi/a19151611/stazione-centrale-milano-curiosita/',
              name: 'Stazione Centrale (from Esquire)'
            },
            {
              url: 'https://www.panorama.it/cultura/arte-idee/michelangelo-pistoletto-spiega-la-sua-mela-reintegrata/',
              name: 'The apple (from Panorama)'
            }
          ],
          images: [
            {
              id: 0,
              name: 'Stazione Centrale main building',
              url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-923042218-1520434856.jpg?crop=1.00xw:0.847xh;0,0.0987xh&resize=480:*',
              alt: 'First image of stazione Centrale',
              description: 'The station was build in the... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor. Proin ac dictum nunc. Nulla id justo varius, auctor elit ac, tristique erat.'
            },
            {
              id: 1,
              name: 'The apple monument',
              url: 'https://www.artribune.com/wp-content/uploads/2016/03/La-Mela-Reintegrata-di-Pistoletto-in-Piazza-Duca-dAosta.jpg',
              alt: 'Second image of stazione Centrale',
              description: 'The big apple of Stazione Centrale... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor. Proin ac dictum nunc.'
            }
          ]
        },
        {
          id: 1,
          name: 'Duomo',
          type: 'public',
          gmaps: 'https://goo.gl/maps/aWae9qkr1GasgJQs5',
          path: 'https://goo.gl/maps/eKiBCzHGzNBUuaUe7',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor. Proin ac dictum nunc. Nulla id justo varius, auctor elit ac, tristique erat.',
          checked: false,
          promo: 'R',
          links: [
            {
              url: 'https://www.duomomilano.it/it/',
              name: 'Duomo di Milano (Official site)'
            },
            {
              url: 'https://it.wikipedia.org/wiki/Duomo_di_Milano',
              name: 'Duomo di Milano (Wikipedia)'
            }
          ],
          images: [
            {
              id: 0,
              url: 'http://www.italia.it/fileadmin/src/img/cluster_gallery/Citta_d_arte_Milano/Duomo-Milano.jpg',
              alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor. Proin ac dictum nunc.',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor. Proin ac dictum nunc.'
            },
            {
              id: 1,
              url: 'https://i2.wp.com/www.maart.mi.it/wp-content/uploads/2017/04/Maart-Milano-Duomo.png',
              alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor. Proin ac dictum nunc.',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor. Proin ac dictum nunc.'
            }
          ]
        },
        {
          id: 2,
          name: 'Caffè Vecchia Brera',
          type: 'private',
          gmaps: 'https://goo.gl/maps/1KGVb7GvAwsJ1WQ88',
          path: 'https://goo.gl/maps/gwBY1VmGQm6K2eVs5',
          fbPage: 'https://www.facebook.com/Torzeon-103840521139047/',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor. Proin ac dictum nunc.',
          checked: false,
          promo: 'C',
          links: [
            {
              url: 'https://www.creperiacaffevecchiabrera.it/',
              name: 'Caffè Vecchia Brera (Official site)'
            }
          ],
          images: [
            {
              id: 0,
              url: 'https://media-cdn.tripadvisor.com/media/photo-s/14/fc/5e/56/welcoming-frontage.jpg',
              alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor.',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor.'
            }
          ]
        },
        {
          id: 3,
          name: 'Castello Sforzesco',
          type: 'public',
          gmaps: 'https://goo.gl/maps/WmsDrifoSoWW1jej7',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor. Proin ac dictum nunc.',
          checked: false,
          promo: '',
          links: [
            {
              url: 'https://www.milanocastello.it/',
              name: 'Castello Sforzesco (official site)'
            },
            {
              url: 'https://it.wikipedia.org/wiki/Castello_Sforzesco',
              name: 'Castello Sforzesco (from Wikipedia)'
            }
          ],
          images: [
            {
              id: 0,
              url: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/20110725_Castello_Sforzesco_Milan_5557.jpg',
              alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor. Proin ac dictum nunc.',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor. Proin ac dictum nunc.'
            },
            {
              id: 1,
              url: 'https://www.turismo.it/typo3temp/pics/24bd0ac83b.jpg',
              alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor. Proin ac dictum nunc.',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor. Proin ac dictum nunc.'
            }
          ]
        }
      ]
    }
  },
  components: {
    TourFooterCmp,
    TourGalleryCmp,
    TourCardCmp,
    TourStopCmp,
    TourBottomCmp
  },
  computed: {
  },
  methods: {
    tourStarted () {
      var scrollSize = window.innerHeight - document.getElementById('ready').getBoundingClientRect().top
      if (scrollSize < 300) {
        this.started = false
      } else {
        this.started = true
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.tourStarted)
  },
  destroyed () {
    window.removeEventListener('scroll', this.tourStarted)
  }
}
</script>

<style scoped>
section {
    width: 66%;
}

h2 {
    font-weight: bold;
    margin-top: 1rem;
    font-size: 1.2rem;
}

h1 {
    font-weight: bold;
    font-size: 3rem;
    margin: 2rem 0;
}

p {
    padding-bottom: 2rem;
    font-size: 1.2rem;
    line-height: 150%;
    margin: 0;
}

.stops {
  margin-top: 4rem;
}

#ready {
  margin: 5rem 0;
}

#ready i {
  font-size: 200%;
  vertical-align: middle;
}

@media screen and (max-width: 768px) {
  section {
      width: 100%;
  }
}

aside {
    position: absolute;
    top: 30px;
    right: 2rem;
    z-index: 99;
}

@media screen and (max-width: 768px) {
    aside {
        position: relative;
        right: initial;
    }
}
</style>
