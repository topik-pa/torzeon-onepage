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
        <h2><i class="icon material-icons">directions</i>&nbsp; Are you ready? ...Let's START!</h2>
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
      title: 'Un giorno a... Milano',
      subtitle: 'I luoghi più caratteristici, tra Storia e modernità',
      text: 'Il tour parte dalla storica Stazione Centrale, esempio di architettura del periodo Fascista, per attraversare i nuovi quartieri di piazza Gae Aulenti e Tre Torri, ma vedranno luoghi classici come il Duomo e il Castello Sforzesco. Una pausa per un gelato presso Oggi Gelato allieterà la giornata prima della conclusione del tour.',
      author: 'Marco Pavan',
      avatarAuthorUrl: 'http://www.marcopavan.org/src/assets/images/Profile_Image.jpg',
      authorMail: 'marcopavan.mp@gmail.com',
      started: false,
      socials: [
        {
          name: 'Facebook',
          icon: 'person'
        },
        {
          name: 'Instagram',
          icon: 'school'
        },
        {
          name: 'Twitter',
          icon: 'public'
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
          marker: 'info',
          title: 'General infos',
          list: [
            {
              id: 0,
              icon: 'play_circle_outline',
              key: 'Start',
              value: 'Stazione Centrale'
            },
            {
              id: 1,
              icon: 'pause_circle_outline',
              key: 'End',
              value: 'Castello Sforzesco'
            },
            {
              id: 2,
              icon: 'star_half',
              key: 'Rating',
              value: 4.6
            },
            {
              id: 3,
              icon: 'emoji_flags',
              key: 'Type',
              value: 'Classic'
            },
            {
              id: 4,
              icon: 'timer',
              key: 'Duration',
              value: 240
            },
            {
              id: 5,
              icon: 'map',
              key: 'Geometry',
              value: 'Linear trip'
            }
          ]
        },
        {
          id: 1,
          marker: 'places',
          title: 'You will visit...',
          image: {
            src: 'https://cdn.getyourguide.com/img/tour_img-484465-146.jpg',
            alt: 'Alt text for this image'
          },
          text: 'Il tour comprende la <strong>Stazione Centrale</strong>, una passeggiata verso il quartiere moderno <strong>Gae Aulenti</strong>, una visita verso il centro città attraverso <strong>Corso Como</strong> per arrivare presso il <strong>Castello Sforzesco</strong>. Proseguiremo per il <strong>Duomo</strong> e la <strong>Galleria Vittorio Emanuele</strong> e verso <strong>Piazza San Fedele</strong> e poi verso il <strong>Quartiere della Moda</strong> con via Montenapoleone e via della Spiga.'
        },
        {
          id: 2,
          marker: 'relax',
          title: 'You will taste...',
          image: {
            src: 'https://www.campagnamica.it/wp-content/uploads/sites/43/2017/09/oggi-gelato-03-1024x682.jpg',
            alt: 'Alt text for this image'
          },
          text: 'Il punto di ristoro è la <strong>Gelateria Oggi di Corso Garibaldi</strong>. Immagina di entrare in un mondo di eccellenze, di profumi, di gusto e di artigianalità… e vedere gli ingredienti, freschissimi e rigorosamente selezionati a seconda della stagionalità, pronti ad essere lavorati sul tavolo e poi fusi insieme nella cucina dell’Officina di OGGI Gelato.<br/><br/>Utilizza qui il <strong>promocode</strong> che scoprirai durante il tour!'
        }
      ],
      stops: [
        {
          id: 0,
          name: 'Stazione Centrale',
          type: 'public',
          gmapsLocation: 'https://goo.gl/maps/4UesoB2u579WrBm68',
          path: 'https://goo.gl/maps/x8wrtAUp1XBz8J817',
          description: 'La stazione di Milano Centrale è la principale stazione ferroviaria del capoluogo lombardo, la seconda d&apos;Italia per flusso di passeggeri, nonché una delle principali stazioni ferroviarie d&apos;Europa.',
          checked: false,
          promo: 'Noio',
          popup: 'promo',
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
              name: 'Stazione Centrale di Milano',
              url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-923042218-1520434856.jpg?crop=1.00xw:0.847xh;0,0.0987xh&resize=480:*',
              alt: 'First image of stazione Centrale',
              description: ' Fu inaugurata nel 1931 per sostituire la vecchia stazione centrale che sorgeva nell&apos;attuale piazza della Repubblica, divenuta insufficiente a causa dell&apos;aumento del traffico ferroviario. La gestione degli impianti è affidata a Rete Ferroviaria Italiana (RFI) società del gruppo Ferrovie dello Stato, che classifica la stazione nella categoria "Platinum", mentre quella delle aree commerciali del monumentale fabbricato viaggiatori è di competenza di Grandi Stazioni. Nel novembre 2010 lo scalo è stato intitolato a santa Francesca Cabrini (1850-1917), fondatrice della congregazione delle Missionarie del Sacro Cuore di Gesù.'
            },
            {
              id: 1,
              name: 'La "Mela Reintegrata"',
              url: 'https://www.artribune.com/wp-content/uploads/2016/03/La-Mela-Reintegrata-di-Pistoletto-in-Piazza-Duca-dAosta.jpg',
              alt: 'Second image of stazione Centrale',
              description: 'Undici tonnellate di peso, 8 metri di altezza e 7 di diametro: una scultura monumentale, è “La Mela Reintegrata” realizzata dall’artista Michelangelo Pistoletto, simbolo di un futuro in cui la scienza e la tecnica si saldano finalmente con la natura, anziché allontanarci da essa.'
            }
          ]
        },
        {
          id: 1,
          name: 'Piazza Gae Aulenti',
          type: 'public',
          gmapsLocation: 'https://goo.gl/maps/wEoeadENmaBR5ymV6',
          path: 'https://goo.gl/maps/QfHpUP7EZfizuZzV7',
          description: 'Piazza Gae Aulenti è una piazza circolare sopraelevata, di 100 metri di diametro situata nel Centro Direzionale di Milano. Rialzata di 6 metri rispetto al livello della strada, è stata progettata dall&apos;architetto argentino César Pelli[1] a completamento delle omonime torri, attualmente di proprietà del fondo Immobiliare Porta Nuova Garibaldi e concesse in locazione a diverse multinazionali tra cui la principale banca Unicredit[2]. L&apos;inaugurazione è avvenuta il giorno 8 dicembre 2012, con la conseguente intitolazione all&apos;architetto e designer Gae Aulenti.',
          checked: false,
          promo: 'volevan',
          popup: 'promo',
          links: [
            {
              url: 'https://it.wikipedia.org/wiki/Piazza_Gae_Aulenti',
              name: 'Piazza Gae Aulenti (from Wikipedia)'
            },
            {
              url: 'https://www.lifegate.it/persone/stile-di-vita/piazza-gae-aulenti-milano-landscape-institute-award',
              name: 'Piazza Gae Aulenti a Milano è tra le più belle al mondo, lo dice il premio Landscape'
            }
          ],
          images: [
            {
              id: 0,
              name: 'PIazza Gae Aulenti',
              url: 'https://www.gabetta-architetto-monza.com/images/news/gae-aulenti-milano.jpg',
              alt: 'First image of stazione Centrale',
              description: ' Come dalla vicina piazza Alvar Aalto, anche da Gae Aulenti si può godere ottimamente dello skyline di Milano. Sono visibili le Torri Garibaldi e gli adiacenti grattacieli del Bosco Verticale, il palazzo della giunta regionale lombarda, la Torre Galfa, la Torre Servizi Tecnici Comunali, il Grattacielo Pirelli, le torri residenziali Solaria, Solea, Aria e una porzione della Torre Diamante. Oltre a ciò, dal livello della piazza è possibile avere una visione d&apos;insieme imponente dell&apos;Unicredit Tower, che con i suoi 231 metri è il grattacielo più alto d&apos;Italia.'
            }
          ]
        },
        {
          id: 2,
          name: 'OGGI Officina Gelato Gusto Italiano',
          type: 'private',
          gmapsLocation: 'https://goo.gl/maps/UaFLa5gr9N1MFaf78',
          path: 'https://goo.gl/maps/1FmPJkq8uGk9PkMR7',
          fbPage: 'https://www.facebook.com/Torzeon-103840521139047/',
          description: 'Nella cucina dell’Officina di OGGI Gelato vedrai creare solo ricette originali, frutto di anni di esperienza maturata sul campo, di tradizione artigiana e di un pizzico di follia, in un mix di grandi classici, riscoperta di antichi sapori e nuove, inedite combinazioni. Immagina di vedere i mantecati che lentamente prendono forma, pronti ad essere serviti. Da oggi, tutto davanti ai tuoi occhi.',
          checked: false,
          promo: 'savuar',
          popup: 'shop',
          links: [
            {
              url: 'https://oggigelato.it/',
              name: 'OGGI Officina Gelato Gusto Italiano (Official site)'
            },
            {
              url: 'https://www.tripadvisor.it/ShowUserReviews-g187849-d14156464-r593531554-OGGI_Officina_Gelato_Gusto_Italiano-Milan_Lombardy.html',
              name: 'Recensioni su OGGI (Tripadvisor)'
            }
          ],
          images: [
            {
              id: 0,
              name: '',
              url: 'https://media-cdn.tripadvisor.com/media/photo-s/13/40/4e/7e/oggi-officina-gelato.jpg',
              alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor.',
              description: 'Nella cucina dell’Officina di OGGI Gelato, dove il caldo dei fornelli incontra il freddo del mantecatore, si può assistere ora dopo ora, ogni giorno, al taglio della frutta, sentire i profumi della tostatura, fatta rigorosamente a mano, osservare la preparazione dei mantecati e di tanto altro ancora. Il tutto nel rispetto della natura, con l’aiuto di partner d’eccezione e a sostegno – ad esempio – del progetto “Campagna Amica”, per valorizzare le risorse del nostro territorio e migliorare la qualità della vita di chi lavora in campagna.'
            },
            {
              id: 1,
              name: '',
              url: 'http://img.pgol.it/img/Z6/57/80/12/2/15003202.jpg',
              alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor.',
              description: 'Le Spalmabili di OGGI sono prelibate creme artigianali ottenute da ingredienti di eccellenza selezionati sul territorio e lavorate esclusivamente nelle nostre Officine, secondo le ricette originali del Maestro Carmelo Chiaramida.'
            }
          ]
        },
        {
          id: 3,
          name: 'Castello Sforzesco',
          type: 'public',
          gmapsLocation: 'https://goo.gl/maps/DTBBdMfDpuGCLeHr5',
          path: 'https://goo.gl/maps/U2YdNZVNfzvUmLuQA',
          description: 'Il Castello Sforzesco (Castell Sforzesch in dialetto milanese), è un grande complesso fortificato che sorge a Milano poco fuori il centro storico della città.',
          checked: false,
          promo: '',
          popup: 'check',
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
              name: '',
              url: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/20110725_Castello_Sforzesco_Milan_5557.jpg',
              alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor. Proin ac dictum nunc.',
              description: 'Fu eretto nel XV secolo da Francesco Sforza, divenuto da poco Duca di Milano, sui resti di una precedente fortificazione medievale del XIV secolo nota come Castello di Porta Giovia (o Zobia). Nella stessa zona in cui sorgeva il Castello di Porta Giovia, in epoca romana, sorgeva l&apos;omonimo Castrum Portae Jovis, uno dei quattro castelli difensivi della Milano romana.'
            },
            {
              id: 1,
              name: '',
              url: 'https://www.turismo.it/typo3temp/pics/24bd0ac83b.jpg',
              alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor. Proin ac dictum nunc.',
              description: 'Notevolmente trasformato e modificato nel corso dei secoli, il Castello Sforzesco fu, tra il Cinquecento e il Seicento, una delle principali cittadelle militari d&apos;Europa; restaurato in stile storicista da Luca Beltrami tra il 1890 e il 1905, è oggi sede di istituzioni culturali e di importanti musei. È uno dei più grandi castelli d&apos;Europa nonché uno dei principali simboli di Milano e della sua storia.'
            }
          ]
        },
        {
          id: 4,
          name: 'Duomo di Milano',
          type: 'public',
          gmapsLocation: 'https://goo.gl/maps/aWae9qkr1GasgJQs5',
          path: 'https://goo.gl/maps/PXUDK6qhZfZAYKkD9',
          description: 'Il Duomo di Milano, ufficialmente Basilica Cattedrale Metropolitana della Natività della Beata Vergine Maria (Dòmm de Milan in dialetto milanese), è la cattedrale dell&apos;arcidiocesi di Milano. Simbolo del capoluogo lombardo, e situato nell&apos;omonima piazza al centro della metropoli, è dedicata a Santa Maria Nascente. È la chiesa più grande d&apos;Italia (la Basilica di San Pietro, più grande, è infatti nel territorio della Città del Vaticano), la quarta nel mondo per superficie, la sesta per volume. È sede della parrocchia di Santa Tecla nel Duomo di Milano.',
          checked: false,
          promo: '',
          popup: 'check',
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
              name: 'Duomo di Milano',
              url: 'https://i2.wp.com/www.maart.mi.it/wp-content/uploads/2017/04/Maart-Milano-Duomo.png',
              alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor. Proin ac dictum nunc.',
              description: 'Nel luogo in cui sorge il Duomo un tempo si trovavano l&apos;antica cattedrale di Santa Maria Maggiore, cattedrale invernale, e la basilica di Santa Tecla, cattedrale estiva. Dopo il crollo del campanile, l&apos;arcivescovo Antonio de&apos; Saluzzi, sostenuto dalla popolazione, promosse la ricostruzione di una nuova e più grande cattedrale (12 maggio 1386), che sorgesse sul luogo del più antico cuore religioso della città. Per il nuovo edificio si iniziò ad abbattere entrambe le chiese precedenti: Santa Maria Maggiore venne demolita per prima, Santa Tecla in un secondo momento, nel 1461-1462 (parzialmente ricostruita nel 1489 e definitivamente abbattuta nel 1548).'
            },
            {
              id: 1,
              name: 'Duomo di Milano - Facciata',
              url: 'http://www.italia.it/fileadmin/src/img/cluster_gallery/Citta_d_arte_Milano/Duomo-Milano.jpg',
              alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor. Proin ac dictum nunc.',
              description: 'Per quanto riguarda la facciata Pellegrino Tibaldi disegnò un progetto nel 1580, basato su un basamento a due piani animato da colonne corinzie giganti e con un&apos;edicola in corrispondenza della navata centrale, affiancata da obelischi. La morte di Carlo Borromeo nel 1584 significò l&apos;allontanamento del suo protetto che lasciò la città, mentre il cantiere veniva preso in mano dal suo rivale Martino Bassi, che inviò a Gregorio XIV, papa milanese, un nuovo progetto di facciata.'
            },
            {
              id: 3,
              name: 'La "Statua della Libertà"',
              url: 'https://www.eventiatmilano.it/wp-content/uploads/2014/12/statua_liberta_milano.jpg',
              alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor. Proin ac dictum nunc.',
              description: 'È stata creata dallo scultore Camillo Pacetti, nel 1810, e si chiama La Legge Nuova. Non serve essere esperti d’arte per capire che la somiglianza con quell’altra statua, quella che ha avuto un cicinin di successo in più , è fortissima. E infatti, secondo diverse fonti e pareri, sarebbe proprio la scultura creata dal Pacetti in epoca napoleonica la fonte di ispirazione di Frédéric Auguste Bartholdi per la creazione della Statua della Libertà di New York.'
            }
          ]
        },
        {
          id: 5,
          name: 'Piazza della Scale e Teatro',
          type: 'public',
          gmapsLocation: 'https://goo.gl/maps/KKV1hZgBgLhtEik17',
          path: 'https://goo.gl/maps/PMhY5if3HA7NQy3m9',
          description: 'Piazza della Scala è un&apos;aggiunta relativamente recente all&apos;urbanistica del centro di Milano, dato che è stata creata nel 1858 grazie alla demolizione di diversi caseggiati che si trovavano di fronte all&apos;omonimo teatro, e tra questi del palazzetto in cui aveva sede lo storico Caffè Martini.',
          checked: false,
          promo: '',
          popup: 'check',
          links: [
            {
              url: 'http://www.teatroallascala.org/',
              name: 'Teatro alla Scala (Official site)'
            },
            {
              url: 'https://it.wikipedia.org/wiki/Piazza_della_Scala',
              name: 'Piazza della Scala (Wikipedia)'
            }
          ],
          images: [
            {
              id: 0,
              name: 'Teatro alla Scala',
              url: 'https://wips.plug.it/cips/initalia.virgilio.it/cms/2018/12/prima-teatro-alla-scala-milano.jpg',
              alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor. Proin ac dictum nunc.',
              description: 'Il Teatro alla Scala, citato solitamente in maniera informale come la Scala, è il principale teatro d&apos;opera di Milano. Considerato tra i più prestigiosi teatri al mondo, ospita da 242 anni i principali artisti nel campo internazionale dell&apos;opera, e, più in generale, della musica classica, spesso commissionando opere tuttora presenti nei cartelloni dei maggiori teatri nel mondo.'
            },
            {
              id: 1,
              name: 'Statua di Leonardo da Vinci',
              url: 'https://www.fotoeweb.it/milano/TeatroAllaScala/Statua%20Leonardo_Da_Vinci%20in%20PiazzadellaScala%20Milano.jpg',
              alt: 'La statua di Leonardo da Vinci si trova in Piazza della Scala, in bella evidenza, proprio davanti al tempio internazionale del bel canto. Il monumento offre un’immagine solenne e austera dello scienziato e ai piedi si trovano quattro suoi discepoli. La statua è stata realizzata con il marmo bianco di Carrara mentre, per il basamento, è stato utilizzato il granito proveniente da Baveno.',
              description: 'La statua di Leonardo da Vinci si trova in Piazza della Scala, in bella evidenza, proprio davanti al tempio internazionale del bel canto. Il monumento offre un’immagine solenne e austera dello scienziato e ai piedi si trovano quattro suoi discepoli. La statua è stata realizzata con il marmo bianco di Carrara mentre, per il basamento, è stato utilizzato il granito proveniente da Baveno.'
            }
          ]
        },
        {
          id: 6,
          name: 'Via Monte Napoleone',
          type: 'public',
          gmapsLocation: 'https://goo.gl/maps/K9M9CNVn1QS5BJPw5',
          path: 'https://goo.gl/maps/4gT39cPCZkgvQkRd9',
          description: 'Via Monte Napoleone è una via del centro di Milano, considerata una delle zone più lussuose e uno dei maggiori centri degli acquisti del prêt-à-porter. Via Monte Napoleone è nota come la via più cara di Europa.',
          checked: false,
          promo: '',
          popup: 'finish',
          links: [
            {
              url: 'https://it.wikipedia.org/wiki/Via_Monte_Napoleone',
              name: 'Via Monte Napoleone (Wikipedia)'
            }
          ],
          images: [
            {
              id: 0,
              name: 'Via Monte Napoleone',
              url: 'https://media-cdn.tripadvisor.com/media/photo-s/07/58/99/ec/via-monte-napoleone.jpg',
              alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor. Proin ac dictum nunc.',
              description: 'La via nel corso della sua storia ha ospitato diversi illustri personaggi milanesi: a Palazzo Taverna (civico 2) visse e morì lo scrittore Carlo Porta, mentre sul fronte opposto, il civico 1, era la casa in cui viveva ed era morto il poeta e scrittore Tommaso Grossi. Sempre in questa via Giuseppe Verdi avrebbe composto nel 1840 il suo Nabucco. Storicamente in passato la strada aveva il soprannome di el Quartier de Riverissi, in riferimento all&apos;usanza dei signori milanesi di togliersi il cappello in segno di riverenza, per salutare una signora che qui aveva la propria dimora.'
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
    margin-bottom: 10rem;
}

h2 {
    font-weight: bold;
    margin-top: 1rem;
    font-size: 1.2rem;
}

h1 {
    font-weight: bold;
    font-size: 2.5rem;
    margin: 2rem 0;
}

p {
    padding-bottom: 2rem;
    font-size: 1.2rem;
    line-height: 150%;
    margin: 0;
}

#ready {
  padding-top: 4rem;
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
