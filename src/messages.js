const messages = {
  en: {
    message: {
      projectName: 'torzeon.com',
      promocode: 'Your Promocode: ',
      by: 'by ',
      followOn: 'Follow on: ',
      onSocials: ' on Socials',
      congrats: 'Congrats! Your Tour is complete!',
      shareIt: 'Did you like it? Please, share your experience.',
      start: 'Start',
      end: 'End',
      rating: 'Rating',
      duration: 'Duration',
      geometry: 'Geometry',
      minutes: ' minutes',
      linearTrip: 'Linear path',
      roundTrip: 'Round path',
      readyMessage: 'Ready? ...GO!',
      getThere: 'Find on Maps',
      checkLocation: 'CHECK!',
      locationChecked: 'Checked!',
      infoFromTheWeb: 'More info from the Web',
      areYouHere: 'Are you here?<br/> <strong>Check</strong> this Place!',
      nearHere: 'Find other places near here...',
      goals: {
        promo: 'Goal: find Promocode',
        shop: 'Goal: get the complete Promocode and take a relaxing rest!',
        check: 'Goal: complete your Journey',
        finish: 'Goal: share your experience!'
      },
      popups: {
        notEvenCloseTitle: 'You are not even close!',
        notEvenCloseText: 'Mmhhhh... Are you sure to be here? <br/><br/>I checked and seems you are <br/><strong>{distance} meters</strong><br/> away.<br/><br/>To reveal your Promocode you have to <strong>run across this Tour for real</strong>',
        nearHereButTitle: 'You are near... but not so close!',
        nearHereButText: 'I checked and seems you are <br/><strong>{distance} meters</strong><br/> away.<br/><br/><strong>Try to get closer and pressn CHECK again!</strong><br/><br/><small>"Find on Maps" button can help you to reach the correct location for this Stop</small>',
        geolocalizationNotActiveTitle: 'Your browser does not have Geolocation available',
        geolocalizationNotActiveText: 'We need to know your position in order to run this application!',
        checkTitle: 'Congrats!<br/>You CHECKED:<br/><span class="popup stopname">{stop}</span>',
        checkText: '',
        promoText: '<span class="popup promocode">{promo}</span><br/>You discovered a piece of the secret Promocode<br/><br/><strong>Continue the Tour to discover the entire Promocode!</strong>',
        promoTextComplete: '<br/>You got the Promocode!<br/><span class="popup promocode">{promo}</span><br/><br/>Now you can use it to obtain a <strong>15% discount</strong> on <strong>{shop}</strong>!<br/><br/>You only need to tell it to the waiter.<br/>Buon appetito!!!',
        shopText: `
          <br/>Now you can use<br/><span class="promocode">{promo}</span><br/>
          to obtain a <strong>15% discount </strong>on this store.<br/><br/>
          Tell the waiter about it and... Buon appetito!!!<br/><br/><br/>
        `,
        shopTextNoPromocode: `
          <span class="popup promocode">{promo}</span><br/>You discovered a piece of the secret Promocode!<br/><br/>
          Check all the places of this Tour to complete you Promocode and<br/>
          <strong>obtain a 15% discount on this store</strong>.<br/><br/><br/>
        `,
        finishTitle: '<span class="popup stopname">{stop}</span> was the last stop of this Tour<br/>',
        finishText: 'Did you enjoy it?<br/><br/><strong>Give us a feedback</strong> and <strong>share this page on Facebook</strong>!</div>'
      },
      tour_0: {
        title: 'A day in... Milan',
        subtitle: 'Visit the places of our Tour and discover the secret promocode!',
        text: `Make a <strong> check </strong> in the places of the itinerary and get a part of the <strong> secret promocode </strong>: win all the <strong> discounts </strong> and find out what advantages you have gained in our selected refreshment place. <br> <br/>
        The Tour of Milan takes into consideration not only points of tourist, historical, religious and cultural interest but also those places that today make Milan a contemporary and ambitious city. <br/>
        There will be <strong> a break at the gluttony ice cream store Oggi Gelato </strong> which is located in Corso Garibaldi, a delicious refreshment that will sweeten the final phase of the tour.
        `,
        info: 'info',
        generalInfos: 'Tout information',
        places: 'Places',
        youWillVisit: 'Places you will visit!',
        placesImageInCardAltText: 'Galleria Vittorio Emanuele',
        placesTextInCard: 'The tour includes a walk that starts from the majestic <strong> Central Station </strong> up to the <strong> Duomo </strong>, symbol of the Lombard capital, and to the covered passage of the <strong> Galleria Vittorio Emanuele II </strong> . After discovering the grandeur of the <strong> Piazza della Scala </strong>, the tour continues towards the fascinating <strong> Brera district </strong> and the fortified complex of the <strong> Castello Sforzesco </strong>, ready for reach the last stage of the circuit represented by the modernity of <strong> piazza Gae Aulenti </strong>.',
        relax: 'Relax',
        youWillTaste: 'Refreshment and flavors',
        shopImageInCardAltText: 'OGGI Gelato in Corso Garibaldi',
        shopTextInCard: 'The refreshment point of this tour is the <strong> Gelateria Oggi in Corso Garibaldi </strong>. <br/> A fabulous world of flavors, aromas and craftsmanship where it will be possible to discover the processing of the freshest ingredients that are mixed in the kitchen of the Officina Oggi Gelato to give life to sweet emotions. <br/> <br/> <strong> Here you can use the promocode that you will discover during the tour! </strong>',
        stops: {
          0: {
            name: 'Stazione Centrale di Milano',
            description: `The Central Station of Milan is the second busiest in Italy: every day around 600 trains circulate in the railway station which has 24 trunks tracks covered by a large canopy more than 340 meters long and composed of five iron and glass vaults. <br/>
            On the southeast side of the station there is an entrance which is opened on some special occasions and which once led to the area reserved for the Savoia royal family. There is also a secret passageway (behind the mirror in the bathroom!).`,
            images: {
              0: {
                alt: 'Central Station - The facade of the Station',
                description: `Arches, statues, terraces, decorations: it is impossible not to capture the timeless charm of the monumental complex created by Ulisse Stacchini and inaugurated in 1931. The solid structure in marble and concrete makes the construction even more powerful (together with the steel that covers the galleries ) and collects the mix of front body styles. Liberty, Art Decò and Neoclassical make the cathedral of the movement unique, with more than 300 thousand travelers passing by every day.`
              },
              1: {
                alt: 'The "Mela Reintegrata"',
                description: `The sculpture created by Michelangelo Pistoletto was installed in 2015 in the square in front of the station on the occasion of the opening of the EXPO. It is 8 meters high, 7 meters in diameter and 11 tons in weight. The candid and marble monument has a steel structure and a clay plaster, it is a work that represents the evolutionary passage of human society, the entry into an era in which nature and the artificial world finally come together in balance.`
              },
              2: {
                alt: 'The "Pirellone"',
                description: `The Pirelli skyscraper is a 31-storey building that was designed to house the offices of the famous tire company but was purchased by the Lombardy Region in 1978. Today the Pirellone is the seat of the Lombardy Regional Council. <br/>
                Run-up races are held on its 710 steps with the athletes who climb from the first to the top floor from where, among other things, on some days you can admire the panorama of the city.
                `
              }
            },
            links: {
              0: {
                text: 'Central Station: curiosities',
                url: 'https://www.esquire.com/it/lifestyle/viaggi/a19151611/stazione-centrale-milano-curiosita/'
              },
              1: {
                text: 'The "Reintegrated Apple" explained by its author',
                url: 'https://www.panorama.it/cultura/arte-idee/michelangelo-pistoletto-spiega-la-sua-mela-reintegrata/'
              },
              2: {
                text: '"Pirelli skyscraper": history, height and curiosity',
                url: 'https://www.milanoweekend.it/articoli/pirellone-storia-altezza-grattacielo-pirelli/'
              }
            }
          },
          1: {
            name: 'Duomo',
            description: `The Duomo of Milan is the third Catholic church in the world: the wonderful Gothic style is expressed in every spire and detail that was made with the white marble of Condoglia, a quarry of Lake Maggiore. It took 500 years to complete it, which happened in the late 1800s, and still today the church stands on the sacred territory that once housed the temple of Minerva.`,
            images: {
              0: {
                alt: 'The facade of the Duomo',
                description: `The monument symbol of the Lombard capital was dedicated to Santa Maria Nascente. Its facade testifies the time and the styles that have followed one another in its realization, centuries of Italian sculpture and architecture. <br/>
                The portals and the windows above, the broken tympanum, the bas-relief portals, the bases and the reliefs, the neo-Gothic windows, the statues: the neo-Gothic, late Renaissance and Baroque styles follow one another giving life to the extraordinary facade of the Cathedral.
                `
              },
              1: {
                alt: 'Statue of Liberty',
                description: `The nineteenth-century statues of Apostles and Prophets are located on the front shelves and have been adorning the balustrade since the early nineteenth century. It is precisely Pacetti's New Law that arouses some attention: the resemblance to the Statue of Liberty in New York is incredible! <br/>
                Indeed, many believe that Milanese Napoleonic sculpture was its inspiration.
                `
              },
              2: {
                alt: 'Palazzo Reale - WillyCortez (CC BY-SA 4.0)',
                description: `The Royal Palace elegantly represents classical architecture. Today the major exhibitions of the Lombard capital are held inside but once the Palazzo del Broletto Vecchio (once it was known this way) was the seat of the government of Milan, of the Kingdom of Lombardy-Veneto and even royal residence.`
              },
              3: {
                alt: 'Galleria Vittorio Emanuele II',
                description: `The original splendor of the Galleria Vittorio Emanuele II was restored in 2015, on the occasion of the Expo: beautiful frescoes, stuccos and iron decorations adorn the building that was designed by the Emilian architect Giuseppe Mengoni. Unfortunately, he died during a site inspection (accident or suicide?). <br/>
                Two things to do: observe the painted lunettes on top of the walls, which represent the 4 continents, and perform the superstitious ritual of rotating the heel of the right foot on the mosaic of the bull's genitals.
                `
              }
            },
            nears: {
              0: {
                name: 'Magazzini La Rinascente',
                alt: 'Magazzini La Rinascente'
              },
              1: {
                name: 'Pinacoteca Ambrosiana',
                alt: 'Pinacoteca Ambrosiana - Gampe (CC BY-SA 4.0)'
              }
            },
            links: {
              0: {
                text: 'Milan Cathedral - official site',
                url: 'https://www.duomomilano.it'
              },
              1: {
                text: 'The Statue of Liberty in Milan (which inspired that of New York)',
                url: 'https://www.milanopocket.it/statua-liberta-milano/'
              },
              2: {
                text: 'The Royal Palace - official site',
                url: 'https://www.palazzorealemilano.it/'
              },
              3: {
                text: 'Ten things to know about the Galleria Vittorio Emanuele II in Milan (and how to visit it)',
                url: 'https://www.touringclub.it/notizie-di-viaggio/dieci-cose-da-sapere-sulla-galleria-vittorio-emanuele-ii-di-milano-e-come'
              }
            }
          },
          2: {
            name: 'Piazza della Scala',
            description: `In the historic center of Milan stands the imposing Piazza della Scala, a square surrounded by elegant more or less recent buildings (the oldest is Palazzo Marino, from the mid 1500s) connected to the Galleria Vittorio Emanuele II. <br/>
            The old street called the Scala district became a square when several buildings were demolished, including the one where the famous Caffè Martini was located.
            `,
            images: {
              0: {
                alt: 'Leonardo statue',
                description: `In Piazza della Scala there is the statue dedicated to Leonardo Da Vinci (1872) which in dialect is nicknamed "on litter in quatter", one liter in four. This is because for the Milanese the artist, who lived and worked for a quarter of a century in Milan, looks like a bottle of wine and his four disciples resemble four shot glasses.`
              },
              1: {
                alt: 'Teatro alla Scala',
                description: `Built on the ashes of the Ducal Theater, the Teatro della Scala was born in 1776, inaugurated two years later. The name derives from the place where it was built, once the site of the church of Santa Maria alla Scala. <br/>
                A symbol of Italian melodrama, ballet, works and more generally of all Italian art: every year the Scala season opens on the day of Sant'Ambrogio which is the patron of Milan, December 7th.
                `
              },
              2: {
                alt: 'Gallerie d\'Italia - Paolobon140 (CC BY-SA 4.0)',
                description: `Gallerie d’Italia is the symbol of Progetto Cultura, the set of exhibition spaces of Intesa Sanpaolo. One of the bank's historic buildings is located right in Piazza della Scala, a place of enormous artistic and architectural heritage where it is possible to view the representative works of the Italian nineteenth century.`
              }
            },
            nears: {
              0: {
                name: 'Casa del Manzoni',
                alt: 'Manzoni\'s house - Fabiopic81 (CC BY-SA 4.0)'
              },
              1: {
                name: 'Via Monte Napoleone',
                alt: 'Via Monte Napoleone - Warburg (CC BY-SA 4.0)'
              }
            },
            links: {
              0: {
                text: 'Quel "litter in quatter" che celebra Leonardo in piazza Scala',
                url: 'https://www.milanopost.info/2016/05/08/quel-litter-in-quatter-che-celebra-leonardo-in-piazza-scala/'
              },
              1: {
                text: 'Teatro alla Scala - official site',
                url: 'http://www.teatroallascala.org/'
              },
              2: {
                text: 'Gallerie d\'Italia - official site',
                url: 'https://www.gallerieditalia.com/'
              }
            }
          },
          3: {
            name: 'Brera district',
            description: `Combine architecture, history and culture and get the Brera district: this is one of the most visited places in Milan, a place full of charm and charm that owes its name to "braida", an expanse of wasteland. Already over a hundred years ago, the neighborhood was frequented by the artists of the Academy of Fine Arts who moved from Palazzo Brera to the Pinacoteca, from the Botanical Garden to the Market.`,
            images: {
              0: {
                alt: 'The streets of the Brera district - RoseHAN (CC BY-SA 4.0)',
                description: `Narrow streets with cobblestones, magnificent courtyards, period buildings, shops and boutiques: it is in the streets of the Brera district that shopping enthusiasts head to find the best opportunities among the most original objects of the moment. And, after the purchases, it is impossible to avoid a stop in one of the many places inserted in this bohemian setting.`
              }
            },
            nears: {
              0: {
                name: 'Pinacoteca di Brera',
                alt: 'Pinacoteca di Brera'
              },
              1: {
                name: 'Orto Botanico di Brera',
                alt: 'Orto Botanico di Brera - Daniel Ventura (CC BY-SA 4.0)'
              }
            },
            links: {
              0: {
                text: 'THINGS TO SEE IN MILAN: Brera District',
                url: 'https://www.3giorniamilano.it/brera'
              }
            }
          },
          4: {
            name: 'Castello Sforzesco',
            description: `Today the Castello Sforzesco is one of the most representative buildings in Milan but for centuries it has been the symbol of foreign domination. With the unification of Italy it has become a place where history, art and culture meet and where you can find some of the major city museums. <br/>
            The courtyards, towers and rooms of Sforza origin are very famous.
            `,
            images: {
              0: {
                alt: 'The Filarete tower',
                description: `Antonio Averulino, known as il Filarete, designed the elegant tower that bears his name and was conceived in 1452. Not even a century later, however, the Torre del Filarete collapsed when it was a gunpowder deposit, so it was recreated after careful research by the architect Luca Beltrami who wanted to recreate his Renaissance appearance and who added the famous clock with the radiant sun.`
              },
              1: {
                alt: 'Fontana di Piazza Castello',
                description: `The "funtana di spus" (wedding cake, due to its similar shape), which later became "de Craxi" in the period after tangentopoli, is rich in history but also in urban legends: when it was dismantled to allow the continuation of the underground works, in 1960, it the rumor spread that it had been stolen and exposed by Craxi in the gardens of Hammamet.`
              }
            },
            nears: {
              0: {
                name: 'Parco Sempione',
                alt: 'Parco Sempione'
              },
              1: {
                name: 'Triennale di Milano',
                alt: 'Triennale di Milano'
              },
              2: {
                name: 'Arco della Pace',
                alt: 'Arco della Pace'
              },
              3: {
                name: 'Basilica di San Ambrogio',
                alt: 'Basilica di San Ambrogio'
              },
              4: {
                name: 'Museo del Cenacolo',
                alt: 'Museo del Cenacolo'
              }
            },
            links: {
              0: {
                text: 'Castello Sforzesco - official site',
                url: 'https://www.milanocastello.it/'
              },
              1: {
                text: 'Wedding Cake Fountain - Piazza Castello',
                url: 'http://www.fontanedimilano.it/piazza-castello/'
              }
            }
          },
          5: {
            name: 'OGGI Gelato',
            description: `OGGI Gelato produces mouth-watering cones and artisan ice cream bowls without added colorings and preservatives. Healthy and natural ice cream is made with excellent seasonal raw materials by the Officina Gelato Gusto Italiano: for over six years OGGI has been suggesting its customers the best sweets offered in its stores. <br/>
            The selected ingredients, excellences of the Italian territory, are the secret of the artisan ice cream shop. The creams and spreads of OGGI Gelato are unique products that are made to offer customers the original taste of each ice cream.
            `,
            carousel: {
              0: {
                alt: 'Strawberry, mascarpone cream and cocoa first note'
              },
              1: {
                alt: 'PAOLINA, one of our spreadable creams'
              },
              2: {
                alt: 'Our tiramisù'
              }
            },
            images: {
              0: {
                alt: 'Oggi Gelato - the Corso Garibaldi store',
                description: `OGGI Gelato is one of the first Italian ice cream parlors to use the Campagna Amica logo by Coldiretti, a project that promotes the completely Italian agricultural supply chain. But not only! The Officina Gelato Gusto Italiano was chosen to be the official supplier of the Pope, the only ice cream shop to produce ice cream for the Holy See.`
              }
            },
            nears: {
              0: {
                name: 'Via Moscova',
                alt: 'Via Moscova'
              },
              1: {
                name: 'Corso Como',
                alt: 'Corso Como'
              }
            },
            links: {
              0: {
                text: 'OGGI - Officina Gelato Gusto Italiano',
                url: 'https://oggigelato.it/'
              },
              1: {
                text: 'OGGI - Officina Gelato Gusto Italiano (tripadvisor)',
                url: 'https://www.tripadvisor.it/Restaurant_Review-g187849-d14156464-Reviews-OGGI_Officina_Gelato_Gusto_Italiano-Milan_Lombardy.html'
              }
            }
          },
          6: {
            name: 'Piazza Gae Aulenti',
            description: `One of the most recent (2012) yet most symbolic squares in Milan is certainly Gae Aulenti: in this place the financial and central areas meet. A futuristic project with a modern design that is the work of the architect Cesar Pelli and from which you can admire the Milanese skyline. <br/>
            The square was built ten meters above the street level and below are the parking lot and the underground.
            `,
            images: {
              0: {
                alt: 'Piazza Gae Aulenti fountain',
                description: `There are many fountains present in Milan: among them that of Piazza Gae Aulenti which is located at the foot of the skyscrapers and six meters from the road. A game of reflections and mirrors that makes the square enigmatic, romantic and beautiful and that always attracts tourists (but also citizens). <br/>
                You can cross the square by walking on the water (but don't swim).
                `
              },
              1: {
                alt: 'Trumpets',
                description: `Twenty-three tubes of extruded oxidized brass aluminum connect the interior of the square with its surface: an unusual urban detail that attracts tourists to whisper inside them. This is why the trumpets have been called the Voices of the city, demonstrating that a sculptural work can become an attraction to interact with. <br/>
                The project was created to allow air to recirculate between floors.
                `
              },
              2: {
                alt: 'Unicredit skyscraper',
                description: `This is the tallest skyscraper in Italy, 231 meters representing the Milanese urban restructuring of the early 2000s. The Unicredit Tower is located in the heart of the Milan Business Center and about 4 thousand people work here.
                The secular spire is composed of a series of eco-sustainable buildings constructed of glass and perforated steel that make it able to withstand ice and wind.
                `
              }
            },
            nears: {
              0: {
                name: 'Bosco verticale',
                alt: 'Bosco verticale'
              },
              1: {
                name: 'Parco Biblioteca degli Alberi',
                alt: 'Parco Biblioteca degli Alberi'
              }
            },
            links: {
              0: {
                text: 'The fountain in Piazza Gae Aulenti',
                url: 'https://www.yesmilano.it/esplora/itinerari/le-fontane-piu-belle-di-milano#paragraph-1909'
              },
              1: {
                text: 'The voice of aluminum: 23 trumpets for the Gae Aulenti square in Milan',
                url: 'https://www.guidafinestra.it/la-voce-dellalluminio-23-trombe-per-la-piazza-gae-aulenti-a-milano/'
              },
              2: {
                text: 'The Unicredit Skyscraper',
                url: 'https://www.grattacielimilano.it/it/unicredit-tower/'
              }
            }
          }
        }
      }
    }
  },
  it: {
    message: {
      projectName: 'torzeon.com',
      promocode: 'Il tuo promocode: ',
      by: 'di ',
      followOn: 'Segui su: ',
      onSocials: ' sui Social',
      congrats: 'Congratulazioni, hai completato il Tour!',
      shareIt: 'Condividi la tua esperienza e scopri cosa dicono gli altri utenti',
      start: 'Inizio',
      end: 'Fine',
      rating: 'Rating',
      duration: 'Durata',
      geometry: 'Geometria',
      minutes: ' minuti (circa)',
      linearTrip: 'Tragitto lineare',
      roundTrip: 'Tragitto circolare',
      readyMessage: 'Pronti? ...VIA!',
      getThere: 'Localizza sulla mappa',
      checkLocation: 'CHECK!',
      locationChecked: 'Hai fatto check!',
      infoFromTheWeb: 'Approfondimenti',
      areYouHere: 'Ti trovi qui?<br/>Fai il <strong>Check</strong> di questo Stop!',
      nearHere: 'Scopri altri luoghi qui vicino...',
      goals: {
        promo: 'Obiettivo: trova parte del Promocode',
        shop: 'Obiettivo: ottieni il promocode completo e usalo per goderti un momento di relax!',
        check: 'Obiettivo: completa il tragitto',
        finish: 'Obiettivo: condividi la tua esperienza!'
      },
      popups: {
        notEvenCloseTitle: 'Non ci sei nemmeno vicino!',
        notEvenCloseText: 'Mmhhhh... sei sicuro di essere in questo luogo? <br/><br/>Ho controllato e sembra che tu sia a <br/><strong>{distance} metri </strong><br/> da qui.<br/><br/>Se vuoi scoprire il tuo promocode <strong>devi percorrere realmente questo Tour</strong>',
        nearHereButTitle: 'Sei vicino... ma non troppo!',
        nearHereButText: 'Ho controllato e sembra che tu sia a <br/><strong>{distance} metri</strong><br/> da qui.<br/><br/><strong>Prova ad avvicinarti di più e premi nuovamente CHECK!</strong><br/><br/><small>Puoi aiutarti con il pulsante "Localizza sulla mappa" per avere la posizione esatta di questo Stop</small>',
        geolocalizationNotActiveTitle: 'Il tuo browser non ha la geolocalizzazione attiva',
        geolocalizationNotActiveText: 'E\' necessario conoscere la tua posizione per permettere a questa applicazione di funzionare!',
        checkTitle: 'Congratulazioni!<br/>Hai fatto CHECK su:<br/><span class="popup stopname">{stop}</span>',
        checkText: '',
        promoText: '<span class="popup promocode">{promo}</span><br/>Hai scoperto una parte del promocode segreto<br/><br/><strong>Continua il Tour per scoprire le parti rimanenti!</strong>',
        promoTextComplete: '<br/>Hai svelato il promocode!<br/><span class="popup promocode">{promo}</span><br/><br/>Ora puoi usare il tuo promocode per ottenere <strong>uno sconto del 15%</strong> sulla tua consumazione presso <strong>{shop}</strong>!<br/><br/>Basterà comunicarlo alla cassa oppure alla persona che ti servirà.<br/>Buon appetito!!!',
        shopText: `
          <br/>Ora puoi usare il tuo promocode<br/><span class="promocode">{promo}</span><br/>
          per ottenere <strong>uno sconto del 15%</strong> sulla tua consumazione in questa attività.<br/><br/>
          Riferisci questo promocode alla cassa o alla persona che ti servirà e... Buon appetito!!!<br/><br/><br/>
        `,
        shopTextNoPromocode: `
          <span class="popup promocode">{promo}</span><br/>Hai scoperto una parte del promocode segreto!<br/><br/>
          Visita tutti i luoghi di questo Tour per completare il promocode segreto e<br/>
          <strong>ottenere uno sconto del 15% in questa attività</strong>.<br/><br/><br/>
        `,
        finishTitle: '<span class="popup stopname">{stop}</span> era l\'ultima tappa del nostro Tour<br/>',
        finishText: 'Ti è piaciuta questa esperienza?<br/><br/><strong>Lascia una tua valutazione</strong> e <strong>condividi questa pagina su Facebook</strong>!</div>'
      },
      tour_0: {
        title: 'Un giorno a... Milano',
        subtitle: 'Visita i luoghi del nostro itinerario e scopri il promocode segreto!',
        text: `Effettua un <strong>check</strong> nei luoghi dell'itinerario e ottieni un parte del <strong>promocode segreto</strong>: conquista tutti gli <strong>sconti</strong> e scopri quali vantaggi hai guadagnato nel luogo di ristoro previsto.<br><br/>
        Il Tour di Milano prende in considerazione non solo punti di interesse turistico, storico, religioso e culturale ma anche quei luoghi che oggi rendono Milano una città contemporanea e ambiziosa. <br/>
        È prevista <strong>una pausa presso la golosa gelateria Oggi Gelato</strong> che si trova in Corso Garibaldi, un delizioso ristoro che addolcirà la fase conclusiva del Tour.
        `,
        info: 'info',
        generalInfos: 'Informazioni itinerario',
        places: 'Luoghi',
        youWillVisit: 'Luoghi che visiterai!',
        placesImageInCardAltText: 'Galleria Vittorio Emanuele II',
        placesTextInCard: 'Il tour comprende una passeggiata che parte dalla maestosa <strong>Stazione Centrale</strong> fino al <strong>Duomo</strong>, simbolo del capoluogo lombardo, e al passaggio coperto della <strong>Galleria Vittorio Emanuele II</strong>. Dopo aver scoperto la grandiosità della <strong>Piazza della Scala</strong>, il giro prosegue verso l’affascinante <strong>quartiere Brera</strong> e il complesso fortificato del <strong>Castello Sforzesco</strong>, pronti per raggiungere l’ultima tappa del circuito rappresentata dalla modernità di <strong>piazza Gae Aulenti</strong>.',
        relax: 'Relax',
        youWillTaste: 'Ristoro e sapori',
        shopImageInCardAltText: 'OGGI Gelato in Corso Garibaldi',
        shopTextInCard: 'Il punto di ristoro di questo tour è la <strong>Gelateria Oggi di Corso Garibaldi</strong>.<br/>Un favoloso mondo di sapori, profumi e artigianalità dove sarà possibile scoprire la lavorazione dei freschissimi ingredienti che vengono amalgamati nella cucina dell’Officina di Oggi Gelato per dar vita a dolci emozioni.<br/><br/><strong>Utilizza qui il promocode che scoprirai durante il tour!</strong>',
        stops: {
          0: {
            name: 'Stazione Centrale',
            description: `La Stazione Centrale di Milano è la seconda più trafficata in Italia: tutti i giorni circa 600 treni circolano nella stazione ferroviaria che ha 24 binari tronchi coperti da una grande tettoia lunga più di 340 metri e composta da ben cinque volte in ferro e vetro.<br/>
            Sul lato sud-est della stazione c’è un’entrata che viene aperta in alcune occasioni speciali e che un tempo portava nell’area riservata alla famiglia reale dei Savoia. C’è anche un passaggio segreto (dietro lo specchio in bagno!).`,
            images: {
              0: {
                alt: 'Stazione Centrale di Milano',
                description: `Archi, statue, terrazze, decorazioni: è impossibile non cogliere il fascino senza tempo del complesso monumentale realizzato da Ulisse Stacchini e inaugurato nel 1931. La solida struttura in marmo e cemento rende la costruzione ancora più possente (assieme all’acciaio che ricopre le gallerie) e raccoglie il mix di stili del corpo frontale. Liberty, Art Decò e Neoclassico rendono unica la cattedrale del movimento che ogni giorno vede passare più di 300mila viaggiatori.`
              },
              1: {
                alt: 'La "Mela Reintegrata"',
                description: `La scultura realizzata da Michelangelo Pistoletto è stata installata nel 2015 nella piazza antistante la Stazione in occasione dell’apertura dell'EXPO. È alta 8 metri, 7 metri di diametro e 11 tonnellate di peso. Il monumento candido e marmoreo ha una struttura in acciaio e un’intonaco in argilla, è un’opera che rappresenta il passaggio evolutivo della società umana, l’ingresso in un’era in cui natura e mondo artificiale finalmente si congiungono in equilibrio.`
              },
              2: {
                alt: 'Il "Pirellone"',
                description: `Il grattacielo Pirelli è un palazzo di 31 piani che era stato progettato per ospitare gli uffici della famosa azienda di pneumatici ma nel 1978 è stato acquistato dalla Regione Lombardia. Oggi il Pirellone è la sede del Consiglio Regionale della Lombardia.<br/>
                Sui suoi 710 scalini si svolgono corse run up con gli atleti che salgono dal primo all’ultimo piano da dove, tra l’altro, in alcune giornate si può ammirare il panorama sulla città.
                `
              }
            },
            links: {
              0: {
                text: 'Stazione Centrale: le curiosità',
                url: 'https://www.esquire.com/it/lifestyle/viaggi/a19151611/stazione-centrale-milano-curiosita/'
              },
              1: {
                text: 'La "Mela Reintegrata" spiegata dal suo autore',
                url: 'https://www.panorama.it/cultura/arte-idee/michelangelo-pistoletto-spiega-la-sua-mela-reintegrata/'
              },
              2: {
                text: '"Grattacielo Pirelli": storia, altezza e curiosità',
                url: 'https://www.milanoweekend.it/articoli/pirellone-storia-altezza-grattacielo-pirelli/'
              }
            }
          },
          1: {
            name: 'Duomo',
            description: `Il Duomo di Milano è la terza chiesa cattolica nel mondo: il meraviglioso stile Gotico si esprime in ogni guglia e particolare che è stato realizzato con il marmo bianco di Condoglia, una cava del Lago Maggiore. Ci sono voluti 500 anni per ultimarla, cosa che è successa alla fine del 1800, e ancora oggi la chiesa sorge sul territorio sacro che un tempo ospitava il tempio di Minerva.`,
            images: {
              0: {
                alt: 'Il Duomo',
                description: `Il monumento simbolo del capoluogo lombardo è stato dedicato a Santa Maria Nascente. La sua facciata testimonia il tempo e gli stili che si sono susseguiti nella sua realizzazione, secoli di scultura e architettura italiana.<br/>
                I portali e le finestre soprastanti, il timpano spezzato, i portali in bassorilievo, i basamenti e i rilievi, i finestroni neogotici, le statue: lo stile neogotico, quello tardo rinascimentale e il barocco si susseguono dando vita alla straordinaria facciata del Duomo.
                `
              },
              1: {
                alt: 'Statua della Libertà',
                description: `Le statue ottocentesche di Apostoli e Profeti si trovano sulle mensole frontali e ornano la balaustra già dall’inizio dell’Ottocento. È proprio La Legge Nuova di Pacetti a destare una certa attenzione: la somiglianza con la Statua della Libertà di New York è incredibile!<br/>
                Sono in molti, infatti, a credere che la scultura napoleonica milanese ne sia stata l’ispirazione.
                `
              },
              2: {
                alt: 'Palazzo Reale - WillyCortez (CC BY-SA 4.0)',
                description: `Il Palazzo Reale rappresenta in modo elegante l’architettura classica. Oggi al suo interno si svolgono le maggiori mostre del capoluogo lombardo ma un tempo il Palazzo del Broletto Vecchio (un tempo era noto così) è stato la sede del governo di Milano, del Regno del Lombardo-veneto e persino residenza reale.`
              },
              3: {
                alt: 'Galleria Vittorio Emanuele II',
                description: `L’originario splendore della Galleria Vittorio Emanuele II è stato ripristinato nel 2015, in occasione dell’Expo: stupendi affreschi, stucchi e decorazioni in ferro ornano la costruzione che fu progettata dall’architetto emiliano Giuseppe Mengoni. Egli purtroppo morì proprio durante una ispezione sul cantiere (incidente o suicidio?).<br/>
                Due cose da fare: osservare le lunette dipinte in cima alle pareti, che rappresentano i 4 continenti, e eseguire il rito scaramantico di far ruotare il tallone del piede destro sul mosaico dei genitali del toro.
                `
              }
            },
            nears: {
              0: {
                name: 'Magazzini La Rinascente',
                alt: 'Magazzini La Rinascente'
              },
              1: {
                name: 'Pinacoteca Ambrosiana',
                alt: 'Pinacoteca Ambrosiana - Gampe (CC BY-SA 4.0)'
              }
            },
            links: {
              0: {
                text: 'Duomo di Milano - sito ufficiale',
                url: 'https://www.duomomilano.it/it/'
              },
              1: {
                text: 'La Statua della Libertà di Milano (che ispirò quella di New York)',
                url: 'https://www.milanopocket.it/statua-liberta-milano/'
              },
              2: {
                text: 'Il Palazzo Reale - sito ufficiale',
                url: 'https://www.palazzorealemilano.it/'
              },
              3: {
                text: 'Dieci cose da sapere sulla Galleria Vittorio Emanuele II di Milano (e come visitarla)',
                url: 'https://www.touringclub.it/notizie-di-viaggio/dieci-cose-da-sapere-sulla-galleria-vittorio-emanuele-ii-di-milano-e-come'
              }
            }
          },
          2: {
            name: 'Piazza della Scala',
            description: `Nel centro storico milanese spicca l’imponenza di Piazza della Scala, un quadrato contornato da eleganti edifici più o meno recenti (il più antico è Palazzo Marino, della metà del 1500) collegato alla Galleria Vittorio Emanuele II.<br/>
            La vecchia via denominata contrada della Scala divenne una piazza quando vennero demoliti diversi caseggiati tra cui quello in cui aveva sede il famoso Caffè Martini.
            `,
            images: {
              0: {
                alt: 'Statua di Leonardo',
                description: `In Piazza della Scala si trova la statua dedicata a Leonardo Da Vinci (1872) che in dialetto è soprannominata “on litter in quatter”, un litro in quattro. Questo perché per i milanesi l’artista, che visse e lavorò per un quarto di secolo a Milano, sembra un bottiglione di vino e i suoi quattro discepoli assomigliano a quattro bicchierini.`
              },
              1: {
                alt: 'Teatro alla Scala',
                description: `Costruito sulle ceneri del Teatro Ducale, nel 1776 nasce il Teatro della Scala, inaugurato due anni dopo. Il nome deriva dal luogo dove è stato realizzato, un tempo sito della chiesa di Santa Maria alla Scala.<br/>
                Un simbolo del melodramma italiano, del balletto, delle opere e più in generale di tutta l’arte italiana: tutti gli anni la stagione della Scala si apre nel giorno di Sant’Ambrogio che è il patrono di Milano, 7 dicembre.
                `
              },
              2: {
                alt: 'Gallerie d\'Italia',
                description: `Gallerie d’Italia è il simbolo di Progetto Cultura, l’insieme degli spazi espositivi di Intesa Sanpaolo. Uno dei palazzi storici della banca si trova proprio nella Piazza della Scala, un luogo di enorme patrimonio artistico e architettonico dove è possibile visionare le opere rappresentative dell’Ottocento italiano.`
              }
            },
            nears: {
              0: {
                name: 'Casa del Manzoni',
                alt: 'Casa del Manzoni - Fabiopic81 (CC BY-SA 4.0)'
              },
              1: {
                name: 'Via Monte Napoleone',
                alt: 'Casa del Manzoni - Warburg (CC BY-SA 4.0)'
              }
            },
            links: {
              0: {
                text: 'Quel "litter in quatter" che celebra Leonardo in piazza Scala',
                url: 'https://www.milanopost.info/2016/05/08/quel-litter-in-quatter-che-celebra-leonardo-in-piazza-scala/'
              },
              1: {
                text: 'Teatro alla Scala - sito ufficiale',
                url: 'http://www.teatroallascala.org/it/index.html'
              },
              2: {
                text: 'Gallerie d\'Italia - sito ufficiale',
                url: 'https://www.gallerieditalia.com/'
              }
            }
          },
          3: {
            name: 'Quartiere Brera',
            description: `Unisci architettura, storia e cultura e ottieni il quartiere Brera: questo è uno dei luoghi più visitati di Milano, un posto ricco di charme e fascino che deve il suo nome a “braida”, distesa di terra incolta. Già oltre cent’anni fa il quartiere era frequentato dagli artisti dell’Accademia di Belle Arti che si spostavano dal Palazzo Brera alla Pinacoteca, dall’Orto Botanico al Mercatino.`,
            images: {
              0: {
                alt: 'Le vie del quartiere Brera',
                description: `Strade strette con i ciottoli, cortili magnifici, palazzi d’epoca, botteghe e boutique: è nelle vie del quartiere Brera che gli appassionati dello shopping si dirigono per cercare le migliori occasioni tra gli oggetti più originali del momento. E, dopo gli acquisti, impossibile evitare una sosta in uno dei molti locali inseriti in questa cornice bohemien.`
              }
            },
            nears: {
              0: {
                name: 'Pinacoteca di Brera',
                alt: 'Pinacoteca di Brera'
              },
              1: {
                name: 'Orto Botanico di Brera',
                alt: 'Orto Botanico di Brera - Daniel Ventura (CC BY-SA 4.0)'
              }
            },
            links: {
              0: {
                text: 'COSE DA VEDERE A MILANO: Quartiere Brera',
                url: 'https://www.3giorniamilano.it/brera'
              }
            }
          },
          4: {
            name: 'Castello Sforzesco',
            description: `Oggi il Castello Sforzesco è uno degli edifici più rappresentativi di Milano ma per secoli ha rappresentato il simbolo del dominio straniero. Con l’Unita d’Italia si è trasformato in un luogo in cui storia, arte e cultura si incontrano e dove si possono trovare alcuni tra i maggiori musei cittadini.<br/>
            Famosissimi i cortili, le torri e gli ambienti di origine sforzesca.
            `,
            images: {
              0: {
                alt: 'La torre del Filarete',
                description: `È di Antonio Averulino detto il Filarete il progetto della elegante Torre che porta il suo nome e che è stata ideata nel 1452. Neanche un secolo dopo, però, la Torre del Filarete crollò quando era un deposito di polvere da sparo, quindi venne ricreata dopo un’attenta ricerca da parte dell’architetto Luca Beltrami che volle ricreare il suo aspetto rinascimentale e che aggiunse il famoso orologio con il sole raggiante.`
              },
              1: {
                alt: 'Fontana di Piazza Castello',
                description: `La funtana di spus (torta nuziale, per la sua forma somigliante), poi diventata de Craxi nel periodo dopo tangentopoli, è ricca di storia ma anche di leggende metropolitane: quando fu smontata per consentire la prosecuzione dei lavori della metropolitana, nel 1960, si diffuse la voce che fosse stata trafugata ed esposta da Craxi nei giardini di Hammamet.`
              }
            },
            nears: {
              0: {
                name: 'Parco Sempione',
                alt: 'Parco Sempione'
              },
              1: {
                name: 'Triennale di Milano',
                alt: 'Triennale di Milano'
              },
              2: {
                name: 'Arco della Pace',
                alt: 'Arco della Pace'
              },
              3: {
                name: 'Basilica di San Ambrogio',
                alt: 'Basilica di San Ambrogio'
              },
              4: {
                name: 'Museo del Cenacolo',
                alt: 'Museo del Cenacolo'
              }
            },
            links: {
              0: {
                text: 'Castello Sforzesco - sito ufficiale',
                url: 'https://www.milanocastello.it/'
              },
              1: {
                text: 'Fontana Torta degli Sposi – Piazza Castello',
                url: 'http://www.fontanedimilano.it/piazza-castello/'
              }
            }
          },
          5: {
            name: 'OGGI Gelato',
            description: `OGGI Gelato produce golosi coni e coppe gelato artigianali senza coloranti e conservanti aggiunti. Il gelato sano e naturale viene realizzato con ottime materie prime stagionali dall’Officina Gelato Gusto Italiano: da oltre sei anni OGGI suggerisce ai suoi clienti le migliori dolci proposte all’interno dei suoi negozi.<br/>
            Gli ingredienti selezionati, eccellenze del territorio italiano, sono il segreto della gelateria artigianale. I mantecati e le creme spalmabili di OGGI Gelato sono prodotti unici che vengono realizzati per offrire ai clienti il gusto originale di ogni gelato.
            `,
            carousel: {
              0: {
                alt: 'Fragola, crema di mascarpone e prima nota cacao'
              },
              1: {
                alt: 'PAOLINA, una delle nostre creme spalmabili'
              },
              2: {
                alt: 'Il nostro tiramisù'
              }
            },
            images: {
              0: {
                alt: 'Oggi Gelato - il punto vendita di Corso Garibaldi',
                description: `OGGI Gelato è una delle prime gelaterie italiane a utilizzare il logo Campagna Amica di Coldiretti, un progetto che promuove la filiera agricola completamente italiana. Ma non solo! L’Officina Gelato Gusto Italiano è stata scelta per essere il fornitore ufficiale del Papa, l’unica gelateria a produrre il gelato per la Santa Sede.`
              }
            },
            nears: {
              0: {
                name: 'Via Moscova',
                alt: 'Via Moscova'
              },
              1: {
                name: 'Corso Como',
                alt: 'Corso Como'
              }
            },
            links: {
              0: {
                text: 'OGGI - Officina Gelato Gusto Italiano',
                url: 'https://oggigelato.it/'
              },
              1: {
                text: 'OGGI - Officina Gelato Gusto Italiano (tripadvisor)',
                url: 'https://www.tripadvisor.it/Restaurant_Review-g187849-d14156464-Reviews-OGGI_Officina_Gelato_Gusto_Italiano-Milan_Lombardy.html'
              }
            }
          },
          6: {
            name: 'Piazza Gae Aulenti',
            description: `Una delle piazze più recenti (2012) eppure più simboliche di Milano è sicuramente Gae Aulenti: in questo luogo si incontrano la zona finanziaria e quella centrale. Un progetto futuristico con un design moderno che è opera dell’architetto Cesar Pelli e dalla quale è possibile ammirare lo skyline milanese.<br/>
            La piazza è stata realizzata dieci metri sopra il livello stradale e sotto sono presenti il parcheggio e la metropolitana.
            `,
            images: {
              0: {
                alt: 'Fontana di Piazza Gae Aulenti',
                description: `Sono tantissime le fontane presenti a Milano: tra queste quella di Piazza Gae Aulenti che si trova ai piedi dei grattacieli e a sei metri dalla strada. Un gioco di riflessi e specchi che rende enigmatica, romantica e bellissima la piazza e che attira sempre i turisti (ma anche i cittadini).<br/>
                È possibile attraversare la piazza camminando sull’acqua (ma non fare il bagno).
                `
              },
              1: {
                alt: 'Le trombe',
                description: `Ventitre tubi di alluminio estruso ossidato ottone collegano l’interno della piazza con la sua superficie: un dettaglio urbano insolito che attira i turisti a bisbigliare al loro interno. Ecco perché le trombe sono state chiamate le Voci della città, a dimostrazione che un’opera scultorea può diventare un’attrattiva con cui interagire.<br/>
                Il progetto è stato realizzato per permettere il ricircolo dell’aria tra i piani.
                `
              },
              2: {
                alt: 'Grattacielo Unicredit',
                description: `Questo è il grattacielo più alto d’Italia, 231 metri che rappresentano la ristrutturazione urbana milanese dei primi anni del 2000. L’Unicredit Tower si trova nel cuore del Centro Direzionale di Milano e proprio qui lavorano circa 4mila persone.
                La guglia laica è composta da una serie di edifici ecosostenibili costruiti in vetro e acciaio traforato che la rendono in grado di sopportare ghiaccio e vento.
                `
              }
            },
            nears: {
              0: {
                name: 'Bosco verticale',
                alt: 'Bosco verticale'
              },
              1: {
                name: 'Parco Biblioteca degli Alberi',
                alt: 'Parco Biblioteca degli Alberi'
              }
            },
            links: {
              0: {
                text: 'La Fontana di piazza Gae Aulenti',
                url: 'https://www.yesmilano.it/esplora/itinerari/le-fontane-piu-belle-di-milano#paragraph-1909'
              },
              1: {
                text: 'La voce dell’alluminio: 23 trombe per la piazza Gae Aulenti a Milano',
                url: 'https://www.guidafinestra.it/la-voce-dellalluminio-23-trombe-per-la-piazza-gae-aulenti-a-milano/'
              },
              2: {
                text: 'Il Grattacielo Unicredit',
                url: 'https://www.grattacielimilano.it/it/unicredit-tower/'
              }
            }
          }
        }
      }
    }
  }
}

export default messages
