<template>
  <section>
    <h2>{{subtitle}}</h2>
    <h1>{{title}}</h1>
    <p>{{text}}</p>
    <tour-footer-cmp :author="author" :avatar="avatarAuthorUrl" :mail="authorMail" :socials="socials"/>
    <tour-gallery-cmp :images="images"/>
  </section>
</template>

<script>
import TourFooterCmp from './TourFooterCmp'
import TourGalleryCmp from './TourGalleryCmp'
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
      ]
    }
  },
  components: {
    TourFooterCmp,
    TourGalleryCmp
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
</style>
