import i18n from '@/i18n.js'

const data = {
  project: 'Torzeon',
  version: 0.1,
  author: 'Marco Pavan',
  authorMail: 'marcopavan.mp@gmail.com',
  fbPage: 'https://www.facebook.com/Torzeon-103840521139047/',
  scrolledSizeFromTourStarted: 0,
  promocode: 'X P T R R 6',
  tours:
  [
    {
      id: 0,
      default: true,
      title: i18n.t('message.tour_0.title'),
      subtitle: i18n.t('message.tour_0.subtitle'),
      cover: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/shareimage.min.jpg',
      text: i18n.t('message.tour_0.text'),
      author: 'Marco Pavan',
      avatarAuthorUrl: 'http://www.marcopavan.org/src/assets/images/Profile_Image.jpg',
      authorMail: 'marcopavan.mp@gmail.com',
      fbPost: 'https://www.facebook.com/permalink.php?story_fbid=133978121458620&id=103840521139047',
      twPost: 'https://twitter.com/torzeon/status/1231515201557684225',
      started: false,
      stopsTotal: 7,
      promocodeStepsTotal: 6,
      promocodeStepsDone: 0,
      socials: [
        {
          name: 'Facebook',
          icon: 'fab fa-facebook-f',
          href: 'https://www.facebook.com/permalink.php?story_fbid=133978121458620&id=103840521139047'
        },
        {
          name: 'Twitter',
          icon: 'fab fa-twitter',
          href: 'https://twitter.com/torzeon'
        }
      ],
      images: [
        {
          id: 0,
          src: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/preview-5.min.jpg',
          alt: 'Alt descriprion for this image'
        },
        {
          id: 1,
          src: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/preview-2.min.jpg',
          alt: 'Alt descriprion for this image'
        },
        {
          id: 2,
          src: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/preview-3.min.jpg',
          alt: 'Alt descriprion for this image'
        },
        {
          id: 3,
          src: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/preview-4.min.jpg',
          alt: 'Alt descriprion for this image'
        },
        {
          id: 4,
          src: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/preview-1.min.jpg',
          alt: 'Alt descriprion for this image'
        },
        {
          id: 5,
          src: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/preview-6.min.jpg',
          alt: 'Alt descriprion for this image'
        }
      ],
      highlights: [
        {
          id: 0,
          marker: i18n.t('message.tour_0.info'),
          title: i18n.t('message.tour_0.generalInfos'),
          list: [
            {
              id: 0,
              icon: 'fa fa-play-circle',
              key: i18n.t('message.start'),
              value: 'Stazione Centrale'
            },
            {
              id: 1,
              icon: 'fas fa-flag-checkered',
              key: i18n.t('message.end'),
              value: 'Piazza Gae Aulenti'
            },
            {
              id: 2,
              icon: 'fas fa-star-half-alt',
              key: i18n.t('message.rating'),
              value: 4.6 + '<span class="small">/5</span>'
            },
            {
              id: 4,
              icon: 'fas fa-clock',
              key: i18n.t('message.duration'),
              value: 240 + i18n.t('message.minutes')
            },
            {
              id: 5,
              icon: 'fas fa-route',
              key: i18n.t('message.geometry'),
              value: i18n.t('message.roundTrip')
            }
          ]
        },
        {
          id: 1,
          marker: i18n.t('message.tour_0.places'),
          title: i18n.t('message.tour_0.youWillVisit'),
          image: {
            src: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/card-1.min.jpg',
            alt: i18n.t('message.tour_0.placesImageInCardAltText')
          },
          text: i18n.t('message.tour_0.placesTextInCard')
        },
        {
          id: 2,
          marker: i18n.t('message.tour_0.relax'),
          title: i18n.t('message.tour_0.youWillTaste'),
          image: {
            src: 'https://placekitten.com/720/445',
            alt: i18n.t('message.tour_0.shopImageInCardAltText')
          },
          text: i18n.t('message.tour_0.shopTextInCard')
        }
      ],
      stops: [
        {
          id: 0,
          name: i18n.t('message.tour_0.stops.0.name'),
          type: 'public',
          gmapsLocation: 'https://goo.gl/maps/4UesoB2u579WrBm68',
          description: i18n.t('message.tour_0.stops.0.description'),
          checked: false,
          promo: 'X',
          popup: 'promo',
          latitude: 45.484642,
          longitude: 9.202691,
          links: [
            {
              url: i18n.t('message.tour_0.stops.0.links.0.url'),
              text: i18n.t('message.tour_0.stops.0.links.0.text'),
            },
            {
              url: i18n.t('message.tour_0.stops.0.links.1.url'),
              text: i18n.t('message.tour_0.stops.0.links.1.text'),
            },
            {
              url: i18n.t('message.tour_0.stops.0.links.2.url'),
              text: i18n.t('message.tour_0.stops.0.links.2.text'),
            }
          ],
          images: [
            {
              id: 0,
              alt: i18n.t('message.tour_0.stops.0.images.0.alt'),
              url: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/stazione-centrale-1.min.jpg',
              description: i18n.t('message.tour_0.stops.0.images.0.description')
            },
            {
              id: 0,
              alt: i18n.t('message.tour_0.stops.0.images.1.alt'),
              url: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/stazione-centrale-2.min.jpg',
              description: i18n.t('message.tour_0.stops.0.images.1.description')
            },
            {
              id: 0,
              alt: i18n.t('message.tour_0.stops.0.images.2.alt'),
              url: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/stazione-centrale-3.min.jpg',
              description: i18n.t('message.tour_0.stops.0.images.2.description')
            }
          ]
        },
        {
          id: 1,
          name: i18n.t('message.tour_0.stops.1.name'),
          type: 'public',
          gmapsLocation: 'https://goo.gl/maps/wEoeadENmaBR5ymV6',
          description: i18n.t('message.tour_0.stops.1.description'),
          checked: false,
          promo: 'P',
          popup: 'promo',
          latitude: 45.484642,
          longitude: 9.202691,
          links: [
            {
              url: i18n.t('message.tour_0.stops.1.links.0.url'),
              text: i18n.t('message.tour_0.stops.1.links.0.text'),
            },
            {
              url: i18n.t('message.tour_0.stops.1.links.1.url'),
              text: i18n.t('message.tour_0.stops.1.links.1.text'),
            },
            {
              url: i18n.t('message.tour_0.stops.1.links.2.url'),
              text: i18n.t('message.tour_0.stops.1.links.2.text'),
            },
            {
              url: i18n.t('message.tour_0.stops.1.links.3.url'),
              text: i18n.t('message.tour_0.stops.1.links.3.text'),
            }
          ],
          images: [
            {
              id: 0,
              alt: i18n.t('message.tour_0.stops.1.images.0.alt'),
              url: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/duomo-1.min.jpg',
              description: i18n.t('message.tour_0.stops.1.images.0.description')
            },
            {
              id: 1,
              alt: i18n.t('message.tour_0.stops.1.images.1.alt'),
              url: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/duomo-2.min.jpg',
              description: i18n.t('message.tour_0.stops.1.images.1.description')
            },
            {
              id: 2,
              alt: i18n.t('message.tour_0.stops.1.images.2.alt'),
              url: 'https://placekitten.com/720/445',
              description: i18n.t('message.tour_0.stops.1.images.2.description')
            },
            {
              id: 3,
              alt: i18n.t('message.tour_0.stops.1.images.3.alt'),
              url: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/duomo-4.min.jpg',
              description: i18n.t('message.tour_0.stops.1.images.3.description')
            },
          ],
          near: [
            {
              id: 0,
              name: 'Magazzini La Rinascente',
              image: 'https://placekitten.com/250/154',
              gmapsUrl: 'https://goo.gl/maps/4UesoB2u579WrBm68'
            },
            {
              id: 1,
              name: 'Pinacoteca Ambrosiana',
              image: 'https://placekitten.com/250/154',
              gmapsUrl: 'https://goo.gl/maps/4UesoB2u579WrBm68'
            }
          ]
        },
        {
          id: 2,
          name: i18n.t('message.tour_0.stops.2.name'),
          type: 'public',
          gmapsLocation: 'https://goo.gl/maps/UaFLa5gr9N1MFaf78',
          fbPage: 'https://www.facebook.com/Torzeon-103840521139047/',
          description: i18n.t('message.tour_0.stops.2.description'),
          checked: false,
          promo: 'T',
          popup: 'promo',
          latitude: 45.484642,
          longitude: 9.202691,
          links: [
            {
              url: i18n.t('message.tour_0.stops.2.links.0.url'),
              text: i18n.t('message.tour_0.stops.2.links.0.text'),
            },
            {
              url: i18n.t('message.tour_0.stops.2.links.1.url'),
              text: i18n.t('message.tour_0.stops.2.links.1.text'),
            },
            {
              url: i18n.t('message.tour_0.stops.2.links.2.url'),
              text: i18n.t('message.tour_0.stops.2.links.2.text'),
            }
          ],
          images: [
            {
              id: 0,
              alt: i18n.t('message.tour_0.stops.2.images.0.alt'),
              url: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/piazza-della-scala-1.min.jpg',
              description: i18n.t('message.tour_0.stops.2.images.0.description')
            },
            {
              id: 1,
              alt: i18n.t('message.tour_0.stops.2.images.1.alt'),
              url: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/piazza-della-scala-2.min.jpg',
              description: i18n.t('message.tour_0.stops.2.images.1.description')
            },
            {
              id: 2,
              alt: i18n.t('message.tour_0.stops.2.images.2.alt'),
              url: 'https://placekitten.com/720/445',
              description: i18n.t('message.tour_0.stops.2.images.2.description')
            }
          ],
          near: [
            {
              id: 0,
              name: 'Casa del Manzoni',
              image: 'https://placekitten.com/250/154',
              gmapsUrl: 'https://goo.gl/maps/4UesoB2u579WrBm68'
            },
            {
              id: 1,
              name: 'Via Monte Napoleone',
              image: 'https://placekitten.com/250/154',
              gmapsUrl: 'https://goo.gl/maps/4UesoB2u579WrBm68'
            }
          ]
        },
        {
          id: 3,
          name: i18n.t('message.tour_0.stops.3.name'),
          type: 'public',
          gmapsLocation: 'https://goo.gl/maps/DTBBdMfDpuGCLeHr5',
          description: i18n.t('message.tour_0.stops.3.description'),
          checked: false,
          promo: 'R',
          popup: 'promo',
          latitude: 45.484642,
          longitude: 9.202691,
          links: [
            {
              url: i18n.t('message.tour_0.stops.3.links.0.url'),
              text: i18n.t('message.tour_0.stops.3.links.0.text'),
            }
          ],
          images: [
            {
              id: 0,
              alt: i18n.t('message.tour_0.stops.3.images.0.alt'),
              url: 'https://placekitten.com/720/445',
              description: i18n.t('message.tour_0.stops.3.images.0.description')
            }
          ],
          near: [
            {
              id: 0,
              name: 'Pinacoteca di Brera',
              image: 'https://placekitten.com/250/154',
              gmapsUrl: 'https://goo.gl/maps/4UesoB2u579WrBm68'
            },
            {
              id: 1,
              name: 'Orto Botanico di Brera',
              image: 'https://placekitten.com/250/154',
              gmapsUrl: 'https://goo.gl/maps/4UesoB2u579WrBm68'
            }
          ]
        },
        {
          id: 4,
          name: i18n.t('message.tour_0.stops.4.name'),
          type: 'public',
          gmapsLocation: 'https://goo.gl/maps/aWae9qkr1GasgJQs5',
          description: i18n.t('message.tour_0.stops.4.description'),
          checked: false,
          promo: 'R',
          popup: 'promo',
          latitude: 45.484642,
          longitude: 9.202691,
          links: [
            {
              url: i18n.t('message.tour_0.stops.4.links.0.url'),
              text: i18n.t('message.tour_0.stops.4.links.0.text'),
            },
            {
              url: i18n.t('message.tour_0.stops.4.links.1.url'),
              text: i18n.t('message.tour_0.stops.4.links.1.text'),
            }
          ],
          images: [
            {
              id: 0,
              alt: i18n.t('message.tour_0.stops.4.images.0.alt'),
              url: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/castello-sforzesco-1.min.jpg',
              description: i18n.t('message.tour_0.stops.4.images.0.description')
            },
            {
              id: 1,
              alt: i18n.t('message.tour_0.stops.4.images.1.alt'),
              url: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/castello-sforzesco-2.min.jpg',
              description: i18n.t('message.tour_0.stops.4.images.1.description')
            },
          ],
          near: [
            {
              id: 0,
              name: 'Parco Sempione',
              image: 'https://placekitten.com/250/154',
              gmapsUrl: 'https://goo.gl/maps/4UesoB2u579WrBm68'
            },
            {
              id: 1,
              name: 'Triennale di Milano',
              image: 'https://placekitten.com/250/154',
              gmapsUrl: 'https://goo.gl/maps/4UesoB2u579WrBm68'
            },
            {
              id: 2,
              name: 'Arco della Pace',
              image: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/castello-sforzesco-5.min.jpg',
              gmapsUrl: 'https://goo.gl/maps/4UesoB2u579WrBm68'
            },
            {
              id: 3,
              name: 'Basilica di San Ambrogio',
              image: 'https://placekitten.com/250/154',
              gmapsUrl: 'https://goo.gl/maps/4UesoB2u579WrBm68'
            },
            {
              id: 4,
              name: 'Museo del Cenacolo',
              image: 'https://placekitten.com/250/154',
              gmapsUrl: 'https://goo.gl/maps/4UesoB2u579WrBm68'
            }
          ]
        },
        {
          id: 5,
          name: i18n.t('message.tour_0.stops.5.name'),
          type: 'private',
          gmapsLocation: 'https://goo.gl/maps/KKV1hZgBgLhtEik17',
          description: i18n.t('message.tour_0.stops.5.description'),
          checked: false,
          promo: '6',
          popup: 'shop',
          latitude: 45.484642,
          longitude: 9.202691,
          links: [
            {
              url: i18n.t('message.tour_0.stops.5.links.0.url'),
              text: i18n.t('message.tour_0.stops.5.links.0.text'),
            },
            {
              url: i18n.t('message.tour_0.stops.5.links.1.url'),
              text: i18n.t('message.tour_0.stops.5.links.1.text'),
            }
          ],
          carousel: [
            {
              id: 0,
              alt: i18n.t('message.tour_0.stops.5.carousel.0.alt'),
              url: 'https://placekitten.com/720/445',
            },
            {
              id: 1,
              alt: i18n.t('message.tour_0.stops.5.carousel.1.alt'),
              url: 'https://placekitten.com/720/445',
            },
            {
              id: 2,
              alt: i18n.t('message.tour_0.stops.5.carousel.2.alt'),
              url: 'https://placekitten.com/720/445',
            },
          ],
          images: [
            {
              id: 0,
              alt: i18n.t('message.tour_0.stops.5.images.0.alt'),
              url: 'https://placekitten.com/720/445',
              description: i18n.t('message.tour_0.stops.5.images.0.description')
            },
            {
              id: 0,
              alt: i18n.t('message.tour_0.stops.5.images.1.alt'),
              url: 'https://placekitten.com/720/445',
              description: i18n.t('message.tour_0.stops.5.images.1.description')
            },
          ],
          near: [
            {
              id: 0,
              name: 'Via Moscova',
              image: 'https://placekitten.com/250/154',
              gmapsUrl: 'https://goo.gl/maps/4UesoB2u579WrBm68'
            },
            {
              id: 1,
              name: 'Corso Como',
              image: 'https://placekitten.com/250/154',
              gmapsUrl: 'https://goo.gl/maps/4UesoB2u579WrBm68'
            }
          ]
        },
        {
          id: 6,
          name: i18n.t('message.tour_0.stops.6.name'),
          type: 'public',
          gmapsLocation: 'https://goo.gl/maps/K9M9CNVn1QS5BJPw5',
          description: i18n.t('message.tour_0.stops.6.description'),
          checked: false,
          promo: '',
          popup: 'finish',
          latitude: 45.484642,
          longitude: 9.202691,
          links: [
            {
              url: i18n.t('message.tour_0.stops.6.links.0.url'),
              text: i18n.t('message.tour_0.stops.6.links.0.text'),
            },
            {
              url: i18n.t('message.tour_0.stops.6.links.1.url'),
              text: i18n.t('message.tour_0.stops.6.links.1.text'),
            },
            {
              url: i18n.t('message.tour_0.stops.6.links.2.url'),
              text: i18n.t('message.tour_0.stops.6.links.2.text'),
            }
          ],
          images: [
            {
              id: 0,
              alt: i18n.t('message.tour_0.stops.6.images.0.alt'),
              url: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/piazza-gae-aulenti-1.min.jpg',
              description: i18n.t('message.tour_0.stops.6.images.0.description')
            },
            {
              id: 1,
              alt: i18n.t('message.tour_0.stops.6.images.1.alt'),
              url: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/piazza-gae-aulenti-2.min.jpg',
              description: i18n.t('message.tour_0.stops.6.images.1.description')
            },
            {
              id: 2,
              alt: i18n.t('message.tour_0.stops.6.images.2.alt'),
              url: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/piazza-gae-aulenti-3.min.jpg',
              description: i18n.t('message.tour_0.stops.6.images.2.description')
            },
          ],
          near: [
            {
              id: 0,
              name: 'Bosco verticale',
              image: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/piazza-gae-aulenti-4.min.jpg',
              gmapsUrl: 'https://goo.gl/maps/4UesoB2u579WrBm68'
            },
            {
              id: 1,
              name: 'Parco Biblioteca degli Alberi',
              image: 'https://placekitten.com/250/154',
              gmapsUrl: 'https://goo.gl/maps/4UesoB2u579WrBm68'
            }
          ]
        }
      ]
    }
  ]
}

export default data
