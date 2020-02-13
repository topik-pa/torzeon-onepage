import i18n from '@/i18n.js'

const data = {
  project: 'Torzeon',
  version: 0.1,
  author: 'Marco Pavan',
  authorMail: 'marcopavan.mp@gmail.com',
  scrolledSizeFromTourStarted: 0,
  tours:
  [
    {
      id: 0,
      default: true,
      title: i18n.t('message.tour_0.title'),
      subtitle: i18n.t('message.tour_0.subtitle'),
      cover: 'https://www.cinqueterre5.com/photos/milano-galleria-vittorio-emanuele-II_mobile.jpg',
      text: i18n.t('message.tour_0.text'),
      author: 'Marco Pavan',
      avatarAuthorUrl: 'http://www.marcopavan.org/src/assets/images/Profile_Image.jpg',
      authorMail: 'marcopavan.mp@gmail.com',
      started: false,
      stopsTotal: 7,
      socials: [
        {
          name: 'Email',
          icon: 'fa fa-envelope',
          href: `mailto:marcopavan.mp@gmail.com`
        },
        {
          name: 'Facebook',
          icon: 'fab fa-facebook-f',
          href: '#'
        },
        {
          name: 'Instagram',
          icon: 'fab fa-instagram',
          href: '#'
        },
        {
          name: 'Twitter',
          icon: 'fab fa-twitter',
          href: '#'
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
              icon: 'fa fa-stop-circle',
              key: i18n.t('message.end'),
              value: 'Castello Sforzesco'
            },
            {
              id: 2,
              icon: 'fas fa-star-half-alt',
              key: i18n.t('message.rating'),
              value: 4.6
            },
            {
              id: 4,
              icon: 'fas fa-clock',
              key: i18n.t('message.duration'),
              value: 240
            },
            {
              id: 5,
              icon: 'fas fa-route',
              key: i18n.t('message.geometry'),
              value: 'Linear trip'
            }
          ]
        },
        {
          id: 1,
          marker: i18n.t('message.tour_0.places'),
          title: i18n.t('message.tour_0.youWillVisit'),
          image: {
            src: 'https://cdn.getyourguide.com/img/tour_img-484465-146.jpg',
            alt: i18n.t('message.tour_0.placesImageInCardAltText')
          },
          text: i18n.t('message.tour_0.placesTextInCard')
        },
        {
          id: 2,
          marker: i18n.t('message.tour_0.relax'),
          title: i18n.t('message.tour_0.youWillTaste'),
          image: {
            src: 'https://www.campagnamica.it/wp-content/uploads/sites/43/2017/09/oggi-gelato-03-1024x682.jpg',
            alt: i18n.t('message.tour_0.shopImageInCardAltText')
          },
          text: i18n.t('message.tour_0.shopTextInCard')
        }
      ],
      stops: [
        {
          id: 0,
          name: i18n.t('message.tour_0.stop_0_name'),
          type: 'public',
          gmapsLocation: 'https://goo.gl/maps/4UesoB2u579WrBm68',
          path: 'https://goo.gl/maps/x8wrtAUp1XBz8J817',
          description: i18n.t('message.tour_0.stop_0_description'),
          checked: false,
          promo: 'Noio',
          popup: 'promo',
          latitude: 45.484642,
          longitude: 9.202691,
          links: [
            {
              url: i18n.t('message.tour_0.stop_0_link_1_url'),
              name: i18n.t('message.tour_0.stop_0_link_1_name')
            },
            {
              url: i18n.t('message.tour_0.stop_0_link_2_url'),
              name: i18n.t('message.tour_0.stop_0_link_2_name')
            },
            {
              url: i18n.t('message.tour_0.stop_0_link_3_url'),
              name: i18n.t('message.tour_0.stop_0_link_3_name')
            }
          ],
          images: [
            {
              id: 0,
              name: i18n.t('message.tour_0.stop_0_image_1_name'),
              url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-923042218-1520434856.jpg?crop=1.00xw:0.847xh;0,0.0987xh&resize=480:*',
              alt: i18n.t('message.tour_0.stop_0_image_1_alt'),
              description: i18n.t('message.tour_0.stop_0_image_1_description')
            },
            {
              id: 1,
              name: i18n.t('message.tour_0.stop_0_image_2_name'),
              url: 'https://www.artribune.com/wp-content/uploads/2016/03/La-Mela-Reintegrata-di-Pistoletto-in-Piazza-Duca-dAosta.jpg',
              alt: i18n.t('message.tour_0.stop_0_image_2_alt'),
              description: i18n.t('message.tour_0.stop_0_image_2_description')
            }
          ]
        },
        {
          id: 1,
          name: i18n.t('message.tour_0.stop_1_name'),
          type: 'public',
          gmapsLocation: 'https://goo.gl/maps/wEoeadENmaBR5ymV6',
          path: 'https://goo.gl/maps/QfHpUP7EZfizuZzV7',
          description: i18n.t('message.tour_0.stop_1_description'),
          checked: false,
          promo: 'volevan',
          popup: 'promo',
          links: [
            {
              url: i18n.t('message.tour_0.stop_1_link_1_url'),
              name: i18n.t('message.tour_0.stop_1_link_1_name')
            },
            {
              url: i18n.t('message.tour_0.stop_1_link_2_url'),
              name: i18n.t('message.tour_0.stop_1_link_2_name')
            }
          ],
          images: [
            {
              id: 0,
              name: i18n.t('message.tour_0.stop_1_image_1_name'),
              url: 'https://www.gabetta-architetto-monza.com/images/news/gae-aulenti-milano.jpg',
              alt: i18n.t('message.tour_0.stop_1_image_1_alt'),
              description: i18n.t('message.tour_0.stop_1_image_1_description')
            }
          ]
        },
        {
          id: 2,
          name: i18n.t('message.tour_0.stop_2_name'),
          type: 'private',
          gmapsLocation: 'https://goo.gl/maps/UaFLa5gr9N1MFaf78',
          path: 'https://goo.gl/maps/1FmPJkq8uGk9PkMR7',
          fbPage: 'https://www.facebook.com/Torzeon-103840521139047/',
          description: i18n.t('message.tour_0.stop_2_description'),
          checked: false,
          promo: 'savuar',
          popup: 'shop',
          links: [
            {
              url: i18n.t('message.tour_0.stop_2_link_1_url'),
              name: i18n.t('message.tour_0.stop_2_link_1_name')
            },
            {
              url: i18n.t('message.tour_0.stop_2_link_2_url'),
              name: i18n.t('message.tour_0.stop_2_link_2_name')
            }
          ],
          images: [
            {
              id: 0,
              name: i18n.t('message.tour_0.stop_2_image_1_name'),
              url: 'https://media-cdn.tripadvisor.com/media/photo-s/13/40/4e/7e/oggi-officina-gelato.jpg',
              alt: i18n.t('message.tour_0.stop_2_image_1_alt'),
              description: i18n.t('message.tour_0.stop_2_image_1_description')
            },
            {
              id: 1,
              name: i18n.t('message.tour_0.stop_2_image_2_name'),
              url: 'http://img.pgol.it/img/Z6/57/80/12/2/15003202.jpg',
              alt: i18n.t('message.tour_0.stop_2_image_2_alt'),
              description: i18n.t('message.tour_0.stop_2_image_2_description')
            }
          ]
        },
        {
          id: 3,
          name: i18n.t('message.tour_0.stop_3_name'),
          type: 'public',
          gmapsLocation: 'https://goo.gl/maps/DTBBdMfDpuGCLeHr5',
          path: 'https://goo.gl/maps/U2YdNZVNfzvUmLuQA',
          description: i18n.t('message.tour_0.stop_3_description'),
          checked: false,
          promo: '',
          popup: 'check',
          links: [
            {
              url: i18n.t('message.tour_0.stop_3_link_1_url'),
              name: i18n.t('message.tour_0.stop_3_link_1_name')
            },
            {
              url: i18n.t('message.tour_0.stop_3_link_2_url'),
              name: i18n.t('message.tour_0.stop_3_link_2_name')
            }
          ],
          images: [
            {
              id: 0,
              name: i18n.t('message.tour_0.stop_3_image_1_name'),
              url: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/20110725_Castello_Sforzesco_Milan_5557.jpg',
              alt: i18n.t('message.tour_0.stop_3_image_1_alt'),
              description: i18n.t('message.tour_0.stop_3_image_1_description')
            },
            {
              id: 1,
              name: i18n.t('message.tour_0.stop_3_image_2_name'),
              url: 'https://www.turismo.it/typo3temp/pics/24bd0ac83b.jpg',
              alt: i18n.t('message.tour_0.stop_3_image_2_alt'),
              description: i18n.t('message.tour_0.stop_3_image_2_description')
            }
          ]
        },
        {
          id: 4,
          name: i18n.t('message.tour_0.stop_4_name'),
          type: 'public',
          gmapsLocation: 'https://goo.gl/maps/aWae9qkr1GasgJQs5',
          path: 'https://goo.gl/maps/PXUDK6qhZfZAYKkD9',
          description: i18n.t('message.tour_0.stop_4_description'),
          checked: false,
          promo: '',
          popup: 'check',
          links: [
            {
              url: i18n.t('message.tour_0.stop_4_link_1_url'),
              name: i18n.t('message.tour_0.stop_4_link_1_name')
            },
            {
              url: i18n.t('message.tour_0.stop_4_link_2_url'),
              name: i18n.t('message.tour_0.stop_4_link_2_name')
            }
          ],
          images: [
            {
              id: 0,
              name: i18n.t('message.tour_0.stop_4_image_1_name'),
              url: 'https://i2.wp.com/www.maart.mi.it/wp-content/uploads/2017/04/Maart-Milano-Duomo.png',
              alt: i18n.t('message.tour_0.stop_4_image_1_alt'),
              description: i18n.t('message.tour_0.stop_4_image_1_description')
            },
            {
              id: 1,
              name: i18n.t('message.tour_0.stop_4_image_2_name'),
              url: 'http://www.italia.it/fileadmin/src/img/cluster_gallery/Citta_d_arte_Milano/Duomo-Milano.jpg',
              alt: i18n.t('message.tour_0.stop_4_image_2_alt'),
              description: i18n.t('message.tour_0.stop_4_image_2_description')
            },
            {
              id: 3,
              name: i18n.t('message.tour_0.stop_4_image_3_name'),
              url: 'https://www.eventiatmilano.it/wp-content/uploads/2014/12/statua_liberta_milano.jpg',
              alt: i18n.t('message.tour_0.stop_4_image_3_alt'),
              description: i18n.t('message.tour_0.stop_4_image_3_description')
            }
          ]
        },
        {
          id: 5,
          name: i18n.t('message.tour_0.stop_5_name'),
          type: 'public',
          gmapsLocation: 'https://goo.gl/maps/KKV1hZgBgLhtEik17',
          path: 'https://goo.gl/maps/PMhY5if3HA7NQy3m9',
          description: i18n.t('message.tour_0.stop_5_description'),
          checked: false,
          promo: '',
          popup: 'check',
          links: [
            {
              url: i18n.t('message.tour_0.stop_5_link_1_url'),
              name: i18n.t('message.tour_0.stop_5_link_1_name')
            },
            {
              url: i18n.t('message.tour_0.stop_5_link_2_url'),
              name: i18n.t('message.tour_0.stop_5_link_2_name')
            }
          ],
          images: [
            {
              id: 0,
              name: i18n.t('message.tour_0.stop_5_image_1_name'),
              url: 'https://wips.plug.it/cips/initalia.virgilio.it/cms/2018/12/prima-teatro-alla-scala-milano.jpg',
              alt: i18n.t('message.tour_0.stop_5_image_1_alt'),
              description: i18n.t('message.tour_0.stop_5_image_1_description')
            },
            {
              id: 1,
              name: i18n.t('message.tour_0.stop_5_image_2_name'),
              url: 'https://www.fotoeweb.it/milano/TeatroAllaScala/Statua%20Leonardo_Da_Vinci%20in%20PiazzadellaScala%20Milano.jpg',
              alt: i18n.t('message.tour_0.stop_5_image_2_alt'),
              description: i18n.t('message.tour_0.stop_5_image_2_description')
            }
          ]
        },
        {
          id: 6,
          name: i18n.t('message.tour_0.stop_6_name'),
          type: 'public',
          gmapsLocation: 'https://goo.gl/maps/K9M9CNVn1QS5BJPw5',
          path: 'https://goo.gl/maps/4gT39cPCZkgvQkRd9',
          description: i18n.t('message.tour_0.stop_6_description'),
          checked: false,
          promo: '',
          popup: 'finish',
          links: [
            {
              url: i18n.t('message.tour_0.stop_6_link_1_url'),
              name: i18n.t('message.tour_0.stop_6_link_1_name')
            }
          ],
          images: [
            {
              id: 0,
              name: i18n.t('message.tour_0.stop_6_image_1_name'),
              url: 'https://media-cdn.tripadvisor.com/media/photo-s/07/58/99/ec/via-monte-napoleone.jpg',
              alt: i18n.t('message.tour_0.stop_6_image_1_alt'),
              description: i18n.t('message.tour_0.stop_6_image_1_description')
            }
          ]
        }
      ]
    }
  ]
}

export default data
