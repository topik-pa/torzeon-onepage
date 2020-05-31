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
              id: 3,
              icon: 'fas fa-clock',
              key: i18n.t('message.duration'),
              value: 240 + i18n.t('message.minutes')
            },
            {
              id: 4,
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
          socials: [
            {
              id: 0,
              name: 'tripadvisor',
              code: `
              <div id="TA_cdsratingsonlynarrow363" class="TA_cdsratingsonlynarrow"><ul id="QynJUXF4" class="TA_links nxneR81"><li id="2Rxm5agCk" class="J1fcr2cdc"><a target="_blank" href="https://www.tripadvisor.it/"><img src="https://www.tripadvisor.it/img/cdsi/img2/branding/tripadvisor_logo_transp_340x80-18034-2.png" alt="TripAdvisor"/></a></li></ul></div>
              `
            },
            {
              id: 1,
              name: 'instagram',
              code: `
                <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/CAiXBIcCC-q/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="12" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/CAiXBIcCC-q/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;"> Visualizza questo post su Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/CAiXBIcCC-q/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">Un post condiviso da OGGI (@oggigelato)</a> in data: <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2020-05-23T16:20:47+00:00">23 Mag 2020 alle ore 9:20 PDT</time></p></div></blockquote> 
              `
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
