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
  </section>
</template>

<script>
import TourFooterCmp from './TourFooterCmp'
import TourGalleryCmp from './TourGalleryCmp'
import TourCardCmp from './TourCardCmp'
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
          title: 'Most interesting destinations',
          image: {
            src: 'https://image.shutterstock.com/image-photo/heatwave-hot-sun-climate-change-260nw-1152324746.jpg',
            alt: 'Alt text for this image'
          },
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id finibus elit. Duis id placerat augue. Vivamus gravida rhoncus enim vitae placerat.'
        }
      ]
    }
  },
  components: {
    TourFooterCmp,
    TourGalleryCmp,
    TourCardCmp
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
