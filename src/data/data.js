import i18n from '@/i18n.js'

const PROMOCODE_01 = 'XPTRR6'

const data = {
  project: i18n.t('message.projectName'),
  version: 0.1,
  author: 'Marco Pavan',
  authorMail: 'marcopavan.mp@gmail.com',
  torzeonFbPage: 'https://www.facebook.com/Torzeon-103840521139047/',
  tours:
  [
    {
      id: 0,
      default: true,
      title: i18n.t('message.tour_0.title'),
      subtitle: i18n.t('message.tour_0.subtitle'),
      cover: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/share-min.jpg',
      text: i18n.t('message.tour_0.text'),
      author: 'Marco Pavan',
      avatarAuthorUrl: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/author-min.jpg',
      authorMail: 'marcopavan.mp@gmail.com',
      fbPost: 'https://www.facebook.com/permalink.php?story_fbid=133978121458620&id=103840521139047',
      twPost: 'https://twitter.com/torzeon/status/1231515201557684225',
      started: false,
      stopsTotal: 7,
      stopsDone: 0,
      promocode: PROMOCODE_01,
      revealedPromocode: '',
      get promocodeStepsTotal () {
        return this.promocode.length
      },
      socials: [
        {
          name: 'Facebook',
          icon: 'fab fa-facebook-f',
          href: 'https://www.facebook.com/Torzeon-103840521139047'
        },
        {
          name: 'Twitter',
          icon: 'fab fa-twitter',
          href: 'https://twitter.com/torzeoncom'
        },
        {
          name: 'Instagram',
          icon: 'fab fa-instagram',
          href: 'https://www.instagram.com/torzeoncom/'
        }
      ],
      images: [
        {
          id: 0,
          src: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/preview-1-min.jpg',
          alt: i18n.t('message.tour_0.stops.1.images.3.alt')
        },
        {
          id: 1,
          src: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/preview-2-min.jpg',
          alt: i18n.t('message.tour_0.stops.2.images.1.alt')
        },
        {
          id: 2,
          src: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/preview-3-min.jpg',
          alt: i18n.t('message.tour_0.stops.1.images.0.alt')
        },
        {
          id: 3,
          src: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/preview-4-min.jpg',
          alt: i18n.t('message.tour_0.stops.6.images.0.alt')
        },
        {
          id: 4,
          src: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/preview-5-min.jpg',
          alt: i18n.t('message.tour_0.stops.4.images.1.alt')
        },
        {
          id: 5,
          src: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/preview-6-min.jpg',
          alt: i18n.t('message.tour_0.stops.0.images.2.alt')
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
              value: i18n.t('message.tour_0.stops.0.name')
            },
            {
              id: 1,
              icon: 'fas fa-flag-checkered',
              key: i18n.t('message.end'),
              value: i18n.t('message.tour_0.stops.6.name')
            },
            {
              id: 2,
              icon: 'fas fa-star-half-alt',
              key: i18n.t('message.rating'),
              value: 0 + '<span class="small">/5</span>'
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
            src: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/card-1-min.jpg',
            alt: i18n.t('message.tour_0.placesImageInCardAltText')
          },
          text: i18n.t('message.tour_0.placesTextInCard')
        },
        {
          id: 2,
          marker: i18n.t('message.tour_0.relax'),
          title: i18n.t('message.tour_0.youWillTaste'),
          image: {
            src: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/card-2-min.jpg',
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
          gmapsLocation: 'https://goo.gl/maps/X1ML1Pv5TAHBnEQy8',
          description: i18n.t('message.tour_0.stops.0.description'),
          checked: false,
          get promo () {
            return PROMOCODE_01[this.id]
          },
          popup: 'promo',
          latitude: 45.487825,
          longitude: 9.206766,
          links: [
            {
              url: i18n.t('message.tour_0.stops.0.links.0.url'),
              text: i18n.t('message.tour_0.stops.0.links.0.text')
            },
            {
              url: i18n.t('message.tour_0.stops.0.links.1.url'),
              text: i18n.t('message.tour_0.stops.0.links.1.text')
            },
            {
              url: i18n.t('message.tour_0.stops.0.links.2.url'),
              text: i18n.t('message.tour_0.stops.0.links.2.text')
            }
          ],
          images: [
            {
              id: 0,
              alt: i18n.t('message.tour_0.stops.0.images.0.alt'),
              url: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/stop-1-1-min.jpg',
              orientation: 'h',
              description: i18n.t('message.tour_0.stops.0.images.0.description')
            },
            {
              id: 1,
              alt: i18n.t('message.tour_0.stops.0.images.1.alt'),
              url: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/stop-1-2-min.jpg',
              orientation: 'h',
              description: i18n.t('message.tour_0.stops.0.images.1.description')
            },
            {
              id: 2,
              alt: i18n.t('message.tour_0.stops.0.images.2.alt'),
              url: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/stop-1-3-min.jpg',
              orientation: 'v',
              description: i18n.t('message.tour_0.stops.0.images.2.description')
            }
          ]
        },
        {
          id: 1,
          name: i18n.t('message.tour_0.stops.1.name'),
          type: 'public',
          gmapsLocation: 'https://goo.gl/maps/2ozFNbPpZo2D9JKj9',
          description: i18n.t('message.tour_0.stops.1.description'),
          checked: false,
          get promo () {
            return PROMOCODE_01[this.id]
          },
          popup: 'promo',
          latitude: 45.464165,
          longitude: 9.190467,
          links: [
            {
              url: i18n.t('message.tour_0.stops.1.links.0.url'),
              text: i18n.t('message.tour_0.stops.1.links.0.text')
            },
            {
              url: i18n.t('message.tour_0.stops.1.links.1.url'),
              text: i18n.t('message.tour_0.stops.1.links.1.text')
            },
            {
              url: i18n.t('message.tour_0.stops.1.links.2.url'),
              text: i18n.t('message.tour_0.stops.1.links.2.text')
            },
            {
              url: i18n.t('message.tour_0.stops.1.links.3.url'),
              text: i18n.t('message.tour_0.stops.1.links.3.text')
            }
          ],
          images: [
            {
              id: 0,
              alt: i18n.t('message.tour_0.stops.1.images.0.alt'),
              url: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/stop-2-1-min.jpg',
              orientation: 'h',
              description: i18n.t('message.tour_0.stops.1.images.0.description')
            },
            {
              id: 1,
              alt: i18n.t('message.tour_0.stops.1.images.1.alt'),
              url: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/stop-2-2-min.jpg',
              orientation: 'v',
              description: i18n.t('message.tour_0.stops.1.images.1.description')
            },
            {
              id: 2,
              alt: i18n.t('message.tour_0.stops.1.images.2.alt'),
              url: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/stop-2-3-min.jpg',
              orientation: 'h',
              description: i18n.t('message.tour_0.stops.1.images.2.description')
            },
            {
              id: 3,
              alt: i18n.t('message.tour_0.stops.1.images.3.alt'),
              url: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/stop-2-4-min.jpg',
              orientation: 'v',
              description: i18n.t('message.tour_0.stops.1.images.3.description')
            }
          ],
          near: [
            {
              id: 0,
              name: i18n.t('message.tour_0.stops.1.nears.0.name'),
              image: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/stop-2-5-min.jpg',
              alt: i18n.t('message.tour_0.stops.1.nears.0.alt'),
              orientation: 'h',
              gmapsUrl: 'https://goo.gl/maps/g1DRTDmL2z3xnZLk7'
            },
            {
              id: 1,
              name: i18n.t('message.tour_0.stops.1.nears.1.name'),
              image: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/stop-2-6-min.jpg',
              alt: i18n.t('message.tour_0.stops.1.nears.1.alt'),
              orientation: 'h',
              gmapsUrl: 'https://goo.gl/maps/ni7Z4KTFLYn6TtKR7'
            }
          ]
        },
        {
          id: 2,
          name: i18n.t('message.tour_0.stops.2.name'),
          type: 'public',
          gmapsLocation: 'https://goo.gl/maps/AL9kjtvAKbkFbPdg7',
          torzeonFbPage: 'https://www.facebook.com/Torzeon-103840521139047/',
          description: i18n.t('message.tour_0.stops.2.description'),
          checked: false,
          get promo () {
            return PROMOCODE_01[this.id]
          },
          popup: 'promo',
          latitude: 45.466971,
          longitude: 9.189869,
          links: [
            {
              url: i18n.t('message.tour_0.stops.2.links.0.url'),
              text: i18n.t('message.tour_0.stops.2.links.0.text')
            },
            {
              url: i18n.t('message.tour_0.stops.2.links.1.url'),
              text: i18n.t('message.tour_0.stops.2.links.1.text')
            },
            {
              url: i18n.t('message.tour_0.stops.2.links.2.url'),
              text: i18n.t('message.tour_0.stops.2.links.2.text')
            }
          ],
          images: [
            {
              id: 0,
              alt: i18n.t('message.tour_0.stops.2.images.0.alt'),
              url: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/stop-3-2-min.jpg',
              orientation: 'v',
              description: i18n.t('message.tour_0.stops.2.images.0.description')
            },
            {
              id: 1,
              alt: i18n.t('message.tour_0.stops.2.images.1.alt'),
              url: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/stop-3-1-min.jpg',
              orientation: 'h',
              description: i18n.t('message.tour_0.stops.2.images.1.description')
            },
            {
              id: 2,
              alt: i18n.t('message.tour_0.stops.2.images.2.alt'),
              url: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/stop-3-3-min.jpg',
              orientation: 'h',
              description: i18n.t('message.tour_0.stops.2.images.2.description')
            }
          ],
          near: [
            {
              id: 0,
              name: i18n.t('message.tour_0.stops.2.nears.0.name'),
              image: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/stop-3-4-min.jpg',
              alt: i18n.t('message.tour_0.stops.2.nears.0.name'),
              orientation: 'v',
              gmapsUrl: 'https://goo.gl/maps/iH7VmFZ1rWMxski7A'
            },
            {
              id: 1,
              name: i18n.t('message.tour_0.stops.2.nears.1.name'),
              image: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/stop-3-5-min.jpg',
              alt: i18n.t('message.tour_0.stops.2.nears.1.name'),
              orientation: 'h',
              gmapsUrl: 'https://goo.gl/maps/k7qeNf9s2NnhFK246'
            }
          ]
        },
        {
          id: 3,
          name: i18n.t('message.tour_0.stops.3.name'),
          type: 'public',
          gmapsLocation: 'https://goo.gl/maps/kTtD3cF5DkrKa8Md8',
          description: i18n.t('message.tour_0.stops.3.description'),
          checked: false,
          get promo () {
            return PROMOCODE_01[this.id]
          },
          popup: 'promo',
          latitude: 45.471326,
          longitude: 9.187450,
          links: [
            {
              url: i18n.t('message.tour_0.stops.3.links.0.url'),
              text: i18n.t('message.tour_0.stops.3.links.0.text')
            }
          ],
          images: [
            {
              id: 0,
              alt: i18n.t('message.tour_0.stops.3.images.0.alt'),
              url: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/stop-4-1-min.jpg',
              orientation: 'h',
              description: i18n.t('message.tour_0.stops.3.images.0.description')
            }
          ],
          near: [
            {
              id: 0,
              name: i18n.t('message.tour_0.stops.3.nears.0.name'),
              image: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/stop-4-2-min.jpg',
              alt: i18n.t('message.tour_0.stops.3.nears.0.name'),
              orientation: 'v',
              gmapsUrl: 'https://goo.gl/maps/sHorsAP4Hq2DRwBq8'
            },
            {
              id: 1,
              name: i18n.t('message.tour_0.stops.3.nears.1.name'),
              image: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/stop-4-3-min.jpg',
              alt: i18n.t('message.tour_0.stops.3.nears.1.name'),
              orientation: 'h',
              gmapsUrl: 'https://goo.gl/maps/CLNVyFQNa6Teup3d8'
            }
          ]
        },
        {
          id: 4,
          name: i18n.t('message.tour_0.stops.4.name'),
          type: 'public',
          gmapsLocation: 'https://goo.gl/maps/Undw8xN83jaZDJjj7',
          description: i18n.t('message.tour_0.stops.4.description'),
          checked: false,
          get promo () {
            return PROMOCODE_01[this.id]
          },
          popup: 'promo',
          latitude: 45.470612,
          longitude: 9.179300,
          links: [
            {
              url: i18n.t('message.tour_0.stops.4.links.0.url'),
              text: i18n.t('message.tour_0.stops.4.links.0.text')
            },
            {
              url: i18n.t('message.tour_0.stops.4.links.1.url'),
              text: i18n.t('message.tour_0.stops.4.links.1.text')
            }
          ],
          images: [
            {
              id: 0,
              alt: i18n.t('message.tour_0.stops.4.images.0.alt'),
              url: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/stop-5-1-min.jpg',
              orientation: 'h',
              description: i18n.t('message.tour_0.stops.4.images.0.description')
            },
            {
              id: 1,
              alt: i18n.t('message.tour_0.stops.4.images.1.alt'),
              url: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/stop-5-2-min.jpg',
              orientation: 'v',
              description: i18n.t('message.tour_0.stops.4.images.1.description')
            }
          ],
          near: [
            {
              id: 0,
              name: i18n.t('message.tour_0.stops.4.nears.0.name'),
              image: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/stop-5-3-min.jpg',
              alt: i18n.t('message.tour_0.stops.4.nears.0.name'),
              orientation: 'h',
              gmapsUrl: 'https://goo.gl/maps/xRCCHjkXwK6WJCT86'
            },
            {
              id: 1,
              name: i18n.t('message.tour_0.stops.4.nears.1.name'),
              image: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/stop-5-4-min.jpg',
              alt: i18n.t('message.tour_0.stops.4.nears.1.name'),
              orientation: 'v',
              gmapsUrl: 'https://goo.gl/maps/W1r5mg2vDJsLcQT56'
            },
            {
              id: 2,
              name: i18n.t('message.tour_0.stops.4.nears.2.name'),
              image: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/stop-5-5-min.jpg',
              alt: i18n.t('message.tour_0.stops.4.nears.2.name'),
              orientation: 'h',
              gmapsUrl: 'https://goo.gl/maps/QeN3ni2oq2J4otfz9'
            },
            {
              id: 3,
              name: i18n.t('message.tour_0.stops.4.nears.3.name'),
              image: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/stop-5-6-min.jpg',
              alt: i18n.t('message.tour_0.stops.4.nears.3.name'),
              orientation: 'h',
              gmapsUrl: 'https://goo.gl/maps/vYw5G4Y8xSjusw5k6'
            },
            {
              id: 4,
              name: i18n.t('message.tour_0.stops.4.nears.4.name'),
              image: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/stop-5-7-min.jpg',
              alt: i18n.t('message.tour_0.stops.4.nears.4.name'),
              orientation: 'h',
              gmapsUrl: 'https://g.page/cenacolo-milano?share'
            }
          ]
        },
        {
          id: 5,
          name: i18n.t('message.tour_0.stops.5.name'),
          type: 'private',
          gmapsLocation: 'https://g.page/oggigelatomilano?share',
          description: i18n.t('message.tour_0.stops.5.description'),
          checked: false,
          get promo () {
            return PROMOCODE_01[this.id]
          },
          popup: 'shop',
          latitude: 45.475852,
          longitude: 9.183850,
          links: [
            {
              url: i18n.t('message.tour_0.stops.5.links.0.url'),
              text: i18n.t('message.tour_0.stops.5.links.0.text')
            },
            {
              url: i18n.t('message.tour_0.stops.5.links.1.url'),
              text: i18n.t('message.tour_0.stops.5.links.1.text')
            }
          ],
          carousel: [
            {
              id: 0,
              alt: i18n.t('message.tour_0.stops.5.carousel.0.alt'),
              url: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/slider-1-min.jpg',
              orientation: 'h'
            },
            {
              id: 1,
              alt: i18n.t('message.tour_0.stops.5.carousel.1.alt'),
              url: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/slider-2-min.jpg',
              orientation: 'h'
            },
            {
              id: 2,
              alt: i18n.t('message.tour_0.stops.5.carousel.2.alt'),
              url: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/slider-3-min.jpg',
              orientation: 'h'
            }
          ],
          images: [
            {
              id: 0,
              alt: i18n.t('message.tour_0.stops.5.images.0.alt'),
              url: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/stop-6-1-min.jpg',
              orientation: 'h',
              description: i18n.t('message.tour_0.stops.5.images.0.description')
            }
          ],
          near: [
            {
              id: 0,
              name: i18n.t('message.tour_0.stops.5.nears.0.name'),
              image: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/stop-6-2-min.jpg',
              alt: i18n.t('message.tour_0.stops.5.nears.0.name'),
              orientation: 'v',
              gmapsUrl: 'https://goo.gl/maps/qQm5ENv57ZjpWmhs5'
            },
            {
              id: 1,
              name: i18n.t('message.tour_0.stops.5.nears.1.name'),
              image: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/stop-6-3-min.jpg',
              alt: i18n.t('message.tour_0.stops.5.nears.1.name'),
              orientation: 'h',
              gmapsUrl: 'https://goo.gl/maps/RhoahuqXEVeyXyUG9'
            }
          ]
        },
        {
          id: 6,
          name: i18n.t('message.tour_0.stops.6.name'),
          type: 'public',
          gmapsLocation: 'https://goo.gl/maps/MXwbYow29AjM76tg6',
          description: i18n.t('message.tour_0.stops.6.description'),
          checked: false,
          get promo () {
            return ''
          },
          popup: 'finish',
          latitude: 45.483756,
          longitude: 9.189713,
          links: [
            {
              url: i18n.t('message.tour_0.stops.6.links.0.url'),
              text: i18n.t('message.tour_0.stops.6.links.0.text')
            },
            {
              url: i18n.t('message.tour_0.stops.6.links.1.url'),
              text: i18n.t('message.tour_0.stops.6.links.1.text')
            },
            {
              url: i18n.t('message.tour_0.stops.6.links.2.url'),
              text: i18n.t('message.tour_0.stops.6.links.2.text')
            }
          ],
          images: [
            {
              id: 0,
              alt: i18n.t('message.tour_0.stops.6.images.0.alt'),
              url: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/stop-7-1-min.jpg',
              orientation: 'h',
              description: i18n.t('message.tour_0.stops.6.images.0.description')
            },
            {
              id: 1,
              alt: i18n.t('message.tour_0.stops.6.images.1.alt'),
              url: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/stop-7-2-min.jpg',
              orientation: 'h',
              description: i18n.t('message.tour_0.stops.6.images.1.description')
            },
            {
              id: 2,
              alt: i18n.t('message.tour_0.stops.6.images.2.alt'),
              url: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/stop-7-3-min.jpg',
              orientation: 'v',
              description: i18n.t('message.tour_0.stops.6.images.2.description')
            }
          ],
          near: [
            {
              id: 0,
              name: i18n.t('message.tour_0.stops.6.nears.0.name'),
              image: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/stop-7-4-min.jpg',
              alt: i18n.t('message.tour_0.stops.6.nears.0.name'),
              orientation: 'v',
              gmapsUrl: 'https://goo.gl/maps/ArHjBwRNRUrUa1Xh7'
            },
            {
              id: 1,
              name: i18n.t('message.tour_0.stops.6.nears.1.name'),
              image: 'https://torzeon.s3.eu-central-1.amazonaws.com/tour_0/stop-7-5-min.jpg',
              alt: i18n.t('message.tour_0.stops.6.nears.1.name'),
              orientation: 'h',
              gmapsUrl: 'https://goo.gl/maps/2DxmpnHCj6K51fmn6'
            }
          ]
        }
      ]
    }
  ]
}

export default data
