const messages = {
  en: {
    message: {
      projectName: 'Torzeon',
      promocode: 'Il tuo promocode: ',
      by: 'di ',
      contactTourAuthor: 'Invia una mail al responsabile',
      shareOn: 'Condividi su ',
      followOn: 'Segui su: ',
      congrats: 'Congratulazioni, hai completato il Tour!',
      shareIt: 'Condividi la tua esperienza e scopri cosa ne pensa chi ha già fatto questo Tour!',
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
      infoFromTheWeb: 'Maggiori info dal Web',
      areYouHere: 'Ti trovi qui?',
      nearHere: 'Scopri altri luoghi qui vicino...',
      goals: {
        promo: 'Obiettivo: trova parte del Promocode',
        shop: 'Obiettivo: ottieni il promocode completo e usalo per goderti un momento di relax!',
        check: 'Obiettivo: completa il tragitto',
        finish: 'Obiettivo: condividi la tua esperienza!'
      },
      popups: {
        notEvenCloseTitle: 'Non sei nemmeno vicino!',
        notEvenCloseText: 'Mmhhhh... sei sicuro di essere in questo luogo? <br/>Ho controllato e sembra che tu sia a <br/><strong>{distance} metri </strong><br/> da qui.',
        nearHereButTitle: 'Sei vicino... ma non troppo!',
        nearHereButText: 'Ho controllato e sembra che tu sia a <br/><strong>{distance} metri</strong><br/> da qui.<br/><br/><strong>Prova a cambiare posizione e riprova a fare CHECK!</strong>',
        geolocalizationNotActiveTitle: 'IL tuo browser non ha la geolocalizzazione attiva',
        geolocalizationNotActiveText: 'We need to get your location to permit this software to work!',
        checkTitle: 'Congratulazioni! Hai fatto CHECK su:<br/>&#34;{stop}&#34;',
        checkText: '',
        promoText: '<strong class="promoletter">{promo}</strong><br/>Hai scoperto una parte del promocode segreto<br/><br/><small>Continua il Tour per scoprire le parti rimanenti!</small>',
        promoTextComplete: 'You discovered the following piece of your promocode:<br/><strong style="font-size:200%; color: #35b742">{promo}</strong><br/><br/>Now you can use the complete promocode to get a 15% discount',
        shopText: `
          <br/>Now you can use the promocode <br/><span class="promoletter">{promo}</span> <br/>to <strong style="font-weight: bold;"><br/>
          get a 15% discount in this store</strong>.<br/>
          Hope you appreciate this!!<br/><br/><br/>
          <div class="social-widget-cointainer-popup">
            <div id="TA_cdsratingsonlynarrow363" class="TA_cdsratingsonlynarrow"><ul id="QynJUXF4" class="TA_links nxneR81"><li id="2Rxm5agCk" class="J1fcr2cdc"><a target="_blank" href="https://www.tripadvisor.it/"><img src="https://www.tripadvisor.it/img/cdsi/img2/branding/tripadvisor_logo_transp_340x80-18034-2.png" alt="TripAdvisor"/></a></li></ul></div>
          </div>
        `,
        shopTextNoPromocode: `
          <strong class="promoletter">{promo}</strong><br/>Hai scoperto una parte del promocode segreto<br/><br/>
          Visit all the places to complete the promocode and <strong style="font-weight: bold;"><br/>
          get a 15% discount in this store</strong>.<br/>
          <br/><br/><br/>
          <div class="social-widget-cointainer-popup">
            <div id="TA_cdsratingsonlynarrow363" class="TA_cdsratingsonlynarrow"><ul id="QynJUXF4" class="TA_links nxneR81"><li id="2Rxm5agCk" class="J1fcr2cdc"><a target="_blank" href="https://www.tripadvisor.it/"><img src="https://www.tripadvisor.it/img/cdsi/img2/branding/tripadvisor_logo_transp_340x80-18034-2.png" alt="TripAdvisor"/></a></li></ul></div>
          </div>
        `,
        finishTitle: 'Congratulazioni! <br/>Hai concluso il tuo tour!',
        finishText: '<br/><div>Ti è piaciuta questa esperienza? <strong>Lascia una tua valutazione</strong> e <strong>condividi questa pagina su Facebook</strong>!</div>'
      },
      tour_0: {
        title: 'Un giorno a... Milano',
        subtitle: 'Visita tutti i luoghi del nostro Itinerario e scopri il promocode segreto!',
        text: 'Ogni volta che effettuerai un <strong>check</strong> di un luogo del nostro itinerario otterrai un parte del <strong>promocode segreto</strong> utile per ottenere sconti e vantaggi nel luogo di ristoro da noi suggerito.<br/><br/> Il Tour di Milano prende in considerazione punti di interesse turistico storico, religioso e culturale, ma ci porterà a visitare anche quegli aspetti della Milano più contemporanea e ambiziosa. E\'previta una pausa per un gelato presso <strong>Oggi Gelato</strong> in Corso Garibaldi per un ristoro che allieterà la fase conclusiva del Tour.',
        info: 'info',
        generalInfos: 'Informazioni itinerario',
        places: 'Luoghi',
        youWillVisit: 'Luoghi che visiterai...',
        placesImageInCardAltText: 'Galleria Vittorio Emanuele - Photo by Fernando Meloni on Unsplash',
        placesTextInCard: 'Il tour comprende la <strong>Stazione Centrale</strong>, una passeggiata verso il quartiere moderno <strong>Gae Aulenti</strong>, una visita verso il centro città attraverso <strong>Corso Como</strong> per arrivare presso il <strong>Castello Sforzesco</strong>. Proseguiremo per il <strong>Duomo</strong> e la <strong>Galleria Vittorio Emanuele</strong> e verso <strong>Piazza San Fedele</strong> e poi verso il <strong>Quartiere della Moda</strong> con via Montenapoleone e via della Spiga. <br/><br/><small>Photo by Fernando Meloni on Unsplash</small>',
        relax: 'Relax',
        youWillTaste: 'Ristoro e sapori...',
        shopImageInCardAltText: 'Alt image...',
        shopTextInCard: 'Il punto di ristoro è la <strong>Gelateria Oggi di Corso Garibaldi</strong>. Immagina di entrare in un mondo di eccellenze, di profumi, di gusto e di artigianalità… e vedere gli ingredienti, freschissimi e rigorosamente selezionati a seconda della stagionalità, pronti ad essere lavorati sul tavolo e poi fusi insieme nella cucina dell’Officina di OGGI Gelato.<br/><br/>Utilizza qui il <strong>promocode</strong> che scoprirai durante il tour!',
        stops: {
          0: {
            name: 'Stazione Centrale di Milano',
            description: 'Info generali sulla Stazione. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel purus sollicitudin, congue libero id, suscipit nisl. Cras posuere facilisis erat interdum commodo. Phasellus vitae lobortis nisi, sit amet pretium lectus. Curabitur nisi ex, venenatis non diam et, aliquam fringilla massa. Fusce imperdiet viverra elit, non facilisis dolor ultrices sit amet.',
            images: {
              0: {
                alt: 'Stazione Centrale - la facciata principale',
                description: 'Descrizione architettonica della facciata della Stazione. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel purus sollicitudin, congue libero id, suscipit nisl. Cras posuere facilisis erat interdum commodo. Phasellus vitae lobortis nisi, sit amet pretium lectus. Curabitur nisi ex, venenatis non diam et, aliquam fringilla massa. Fusce imperdiet viverra elit, non facilisis dolor ultrices sit amet. Vestibulum at sagittis nibh. Mauris a felis a dolor tincidunt sagittis et at velit. Donec sem mauris, rhoncus non quam in, rhoncus lobortis enim. Sed cursus mauris ac massa fermentum, vel sagittis arcu venenatis.'
              },
              1: {
                alt: 'La "Mela Reintegrata" di Michelangelo Pistoletto',
                description: 'Alcune info sulla Mela Reintegrata. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel purus sollicitudin, congue libero id, suscipit nisl. Cras posuere facilisis erat interdum commodo. Phasellus vitae lobortis nisi, sit amet pretium lectus. Curabitur nisi ex, venenatis non diam et, aliquam fringilla massa. Fusce imperdiet viverra elit, non facilisis dolor ultrices sit amet. Vestibulum at sagittis nibh.'
              },
              2: {
                alt: 'Il Grattacielo Pirelli',
                description: 'Alcune info sul Grattacielo Pirelli. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel purus sollicitudin, congue libero id, suscipit nisl. Cras posuere facilisis erat interdum commodo. Phasellus vitae lobortis nisi, sit amet pretium lectus. Curabitur nisi ex, venenatis non diam et, aliquam fringilla massa. Fusce imperdiet viverra elit, non facilisis dolor ultrices sit amet. Vestibulum at sagittis nibh.'
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
            name: 'Il Duomo',
            description: 'Info generali sul Duomo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel purus sollicitudin, congue libero id, suscipit nisl. Cras posuere facilisis erat interdum commodo. Phasellus vitae lobortis nisi, sit amet pretium lectus. Curabitur nisi ex, venenatis non diam et, aliquam fringilla massa. Fusce imperdiet viverra elit, non facilisis dolor ultrices sit amet.',
            images: {
              0: {
                alt: 'La facciata in stile classico-barocco',
                description: 'La facciata del Duomo in stile classico-barocco. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel purus sollicitudin, congue libero id, suscipit nisl. Cras posuere facilisis erat interdum commodo. Phasellus vitae lobortis nisi, sit amet pretium lectus.'
              },
              1: {
                alt: 'La "Statua della Libertà"',
                description: 'Una particolare statua del Duomo è stata presa a modello per la più famosa statua di New York... due righe su tale argomento. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel purus sollicitudin, congue libero id, suscipit nisl. Cras posuere facilisis erat interdum commodo. Phasellus vitae lobortis nisi, sit amet pretium lectus.'
              },
              2: {
                alt: 'Il Palazzo Reale',
                description: 'Il Palazzo Reale. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel purus sollicitudin, congue libero id, suscipit nisl. Cras posuere facilisis erat interdum commodo. Phasellus vitae lobortis nisi, sit amet pretium lectus. Curabitur nisi ex, venenatis non diam et, aliquam fringilla massa. Fusce imperdiet viverra elit, non facilisis dolor ultrices sit amet. Vestibulum at sagittis nibh. Mauris a felis a dolor tincidunt sagittis et at velit. Donec sem mauris, rhoncus non quam in, rhoncus lobortis enim. Sed cursus mauris ac massa fermentum, vel sagittis arcu venenatis.'
              },
              3: {
                alt: 'La Galleria Vittorio Emanuele',
                description: 'La Galleria Vittorio Emanuele. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel purus sollicitudin, congue libero id, suscipit nisl. Cras posuere facilisis erat interdum commodo. Phasellus vitae lobortis nisi, sit amet pretium lectus. Curabitur nisi ex, venenatis non diam et, aliquam fringilla massa. Fusce imperdiet viverra elit, non facilisis dolor ultrices sit amet. Vestibulum at sagittis nibh. Mauris a felis a dolor tincidunt sagittis et at velit. Donec sem mauris, rhoncus non quam in, rhoncus lobortis enim. Sed cursus mauris ac massa fermentum, vel sagittis arcu venenatis.'
              }
            },
            nears: {
              0: {
                name: 'Magazzini La Rinascente'
              },
              1: {
                name: 'PInacoteca Ambrosiana'
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
            description: 'Info generali sulla Piazza della Scala. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel purus sollicitudin, congue libero id, suscipit nisl. Cras posuere facilisis erat interdum commodo. Phasellus vitae lobortis nisi, sit amet pretium lectus. Curabitur nisi ex, venenatis non diam et, aliquam fringilla massa. Fusce imperdiet viverra elit, non facilisis dolor ultrices sit amet.',
            images: {
              0: {
                alt: 'Statua di Leonardo in Piazza della Scala',
                description: 'Statua di Leonardo in Piazza della Scala. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel purus sollicitudin, congue libero id, suscipit nisl. Cras posuere facilisis erat interdum commodo. Phasellus vitae lobortis nisi, sit amet pretium lectus. Curabitur nisi ex, venenatis non diam et, aliquam fringilla massa. Fusce imperdiet viverra elit, non facilisis dolor ultrices sit amet. Vestibulum at sagittis nibh. Mauris a felis a dolor tincidunt sagittis et at velit. Donec sem mauris, rhoncus non quam in, rhoncus lobortis enim. Sed cursus mauris ac massa fermentum, vel sagittis arcu venenatis.'
              },
              1: {
                alt: 'Teatro alla Scala',
                description: 'Alcune info sul Teatro alla Scala. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel purus sollicitudin, congue libero id, suscipit nisl. Cras posuere facilisis erat interdum commodo. Phasellus vitae lobortis nisi, sit amet pretium lectus. Curabitur nisi ex, venenatis non diam et, aliquam fringilla massa. Fusce imperdiet viverra elit, non facilisis dolor ultrices sit amet. Vestibulum at sagittis nibh.'
              },
              2: {
                alt: 'Gallerie d\'Italia',
                description: 'Descrizione Gallerie d\'Italia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel purus sollicitudin, congue libero id, suscipit nisl. Cras posuere facilisis erat interdum commodo. Phasellus vitae lobortis nisi, sit amet pretium lectus. Curabitur nisi ex, venenatis non diam et, aliquam fringilla massa. Fusce imperdiet viverra elit, non facilisis dolor ultrices sit amet. Vestibulum at sagittis nibh.'
              }
            },
            nears: {
              0: {
                name: 'Casa del Manzoni'
              },
              1: {
                name: 'Via Monte Napoleone'
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
            description: 'Info generali sulla quartiere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel purus sollicitudin, congue libero id, suscipit nisl. Cras posuere facilisis erat interdum commodo. Phasellus vitae lobortis nisi, sit amet pretium lectus. Curabitur nisi ex, venenatis non diam et, aliquam fringilla massa. Fusce imperdiet viverra elit, non facilisis dolor ultrices sit amet.',
            images: {
              0: {
                alt: 'Le vie del quartiere Brera',
                description: 'Descrizione della vita nel quartiere tra caffè e shopping. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel purus sollicitudin, congue libero id, suscipit nisl. Cras posuere facilisis erat interdum commodo. Phasellus vitae lobortis nisi, sit amet pretium lectus. Curabitur nisi ex, venenatis non diam et, aliquam fringilla massa. Fusce imperdiet viverra elit, non facilisis dolor ultrices sit amet. Vestibulum at sagittis nibh. Mauris a felis a dolor tincidunt sagittis et at velit. Donec sem mauris, rhoncus non quam in, rhoncus lobortis enim. Sed cursus mauris ac massa fermentum, vel sagittis arcu venenatis.'
              }
            },
            nears: {
              0: {
                name: 'Pinacoteca di Brera'
              },
              1: {
                name: 'Orto Botanico di Brera'
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
            description: 'Info generali sul Castello Sforzesco. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel purus sollicitudin, congue libero id, suscipit nisl. Cras posuere facilisis erat interdum commodo. Phasellus vitae lobortis nisi, sit amet pretium lectus. Curabitur nisi ex, venenatis non diam et, aliquam fringilla massa. Fusce imperdiet viverra elit, non facilisis dolor ultrices sit amet.',
            images: {
              0: {
                alt: 'La torre del Filarete',
                description: 'Descrizione architettonica della torre del Filarete. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel purus sollicitudin, congue libero id, suscipit nisl. Cras posuere facilisis erat interdum commodo. Phasellus vitae lobortis nisi, sit amet pretium lectus. Curabitur nisi ex, venenatis non diam et, aliquam fringilla massa. Fusce imperdiet viverra elit, non facilisis dolor ultrices sit amet. Vestibulum at sagittis nibh. Mauris a felis a dolor tincidunt sagittis et at velit. Donec sem mauris, rhoncus non quam in, rhoncus lobortis enim. Sed cursus mauris ac massa fermentum, vel sagittis arcu venenatis.'
              },
              1: {
                alt: 'Fontana di Piazza Castello',
                description: 'Info su Fontana di Piazza Castello. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel purus sollicitudin, congue libero id, suscipit nisl. Cras posuere facilisis erat interdum commodo. Phasellus vitae lobortis nisi, sit amet pretium lectus. Curabitur nisi ex, venenatis non diam et, aliquam fringilla massa. Fusce imperdiet viverra elit, non facilisis dolor ultrices sit amet. Vestibulum at sagittis nibh.'
              }
            },
            nears: {
              0: {
                name: 'Parco Sempione'
              },
              1: {
                name: 'Triennale di Milano'
              },
              2: {
                name: 'Arco della Pace'
              },
              3: {
                name: 'Basilica di san Ambrogio'
              },
              4: {
                name: 'Museo del Cenacolo'
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
            description: 'Presentazione attività dello sponsor OGGI Gelato Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel purus sollicitudin, congue libero id, suscipit nisl. Cras posuere facilisis erat interdum commodo. Phasellus vitae lobortis nisi, sit amet pretium lectus.',
            carousel: {
              0: {
                alt: 'Descizione 1'
              },
              1: {
                alt: 'Descizione 2'
              },
              2: {
                alt: 'Descizione 3'
              }
            },
            images: {
              0: {
                alt: 'Oggi Gelato - Gelato al cioccolato',
                description: 'Lista e descrizione di ciò che di maggior interesse si può ordinare in questa gelateria.'
              },
              1: {
                alt: 'Oggi Gelato - interni',
                description: 'Lista dei servizi ulteriori (wi-fi, accesso disabili, altre info utili prese dal loro sito e di interesse per i possibili avventori)'
              }
            },
            nears: {
              0: {
                name: 'Via Moscova'
              },
              1: {
                name: 'Corso Como'
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
            description: 'Info generali sulla Piazza Gae Aulenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel purus sollicitudin, congue libero id, suscipit nisl. Cras posuere facilisis erat interdum commodo. Phasellus vitae lobortis nisi, sit amet pretium lectus. Curabitur nisi ex, venenatis non diam et, aliquam fringilla massa. Fusce imperdiet viverra elit, non facilisis dolor ultrices sit amet.',
            images: {
              0: {
                alt: 'Fontana di piazza Gae Aulenti',
                description: 'Qualche info sulla Fontana di piazza Gae Aulenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel purus sollicitudin, congue libero id, suscipit nisl. Cras posuere facilisis erat interdum commodo. Phasellus vitae lobortis nisi, sit amet pretium lectus. Curabitur nisi ex, venenatis non diam et, aliquam fringilla massa. Fusce imperdiet viverra elit, non facilisis dolor ultrices sit amet. Vestibulum at sagittis nibh. Mauris a felis a dolor tincidunt sagittis et at velit. Donec sem mauris, rhoncus non quam in, rhoncus lobortis enim. Sed cursus mauris ac massa fermentum, vel sagittis arcu venenatis.'
              },
              1: {
                alt: 'Le trombe di piazza Gae Aulenti',
                description: 'Alcune info sul questa particolare opera (le trombe). Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel purus sollicitudin, congue libero id, suscipit nisl. Cras posuere facilisis erat interdum commodo. Phasellus vitae lobortis nisi, sit amet pretium lectus. Curabitur nisi ex, venenatis non diam et, aliquam fringilla massa. Fusce imperdiet viverra elit, non facilisis dolor ultrices sit amet. Vestibulum at sagittis nibh.'
              },
              2: {
                alt: 'Il Grattacielo Unicredit',
                description: 'Alcune info sul Grattacielo Unicredit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel purus sollicitudin, congue libero id, suscipit nisl. Cras posuere facilisis erat interdum commodo. Phasellus vitae lobortis nisi, sit amet pretium lectus. Curabitur nisi ex, venenatis non diam et, aliquam fringilla massa. Fusce imperdiet viverra elit, non facilisis dolor ultrices sit amet. Vestibulum at sagittis nibh.'
              }
            },
            nears: {
              0: {
                name: 'Bosco verticale'
              },
              1: {
                name: 'Parco Biblioteca degli Alberi'
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
  },
  it: {
    message: {
      projectName: 'Torzeon',
      promocode: 'Il tuo promocode: ',
      by: 'di ',
      contactTourAuthor: 'Invia una mail al responsabile',
      shareOn: 'Condividi su ',
      followOn: 'Segui su: ',
      congrats: 'Congratulazioni, hai completato il Tour!',
      shareIt: 'Condividi la tua esperienza e scopri cosa ne pensa chi ha già fatto questo Tour!',
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
      infoFromTheWeb: 'Maggiori info dal Web',
      areYouHere: 'Ti trovi qui?',
      nearHere: 'Scopri altri luoghi qui vicino...',
      goals: {
        promo: 'Obiettivo: trova parte del Promocode',
        shop: 'Obiettivo: ottieni il promocode completo e usalo per goderti un momento di relax!',
        check: 'Obiettivo: completa il tragitto',
        finish: 'Obiettivo: condividi la tua esperienza!'
      },
      popups: {
        notEvenCloseTitle: 'Non sei nemmeno vicino!',
        notEvenCloseText: 'Mmhhhh... sei sicuro di essere in questo luogo? <br/><br/>Ho controllato e sembra che tu sia a <br/><strong>{distance} metri </strong><br/> da qui.<br/><br/>Se vuoi scoprire il tuo promocode <strong>devi percorrere realmente questo Tour</strong>',
        nearHereButTitle: 'Sei vicino... ma non troppo!',
        nearHereButText: 'Ho controllato e sembra che tu sia a <br/><strong>{distance} metri</strong><br/> da qui.<br/><br/><strong>Prova ad avvicinarti di più e premi nuovamente CHECK!</strong><br/><br/><small>Puoi aiutarti con il pulsante "Localizza sulla mappa" per avere la posizione esatta di questo Stop</small>',
        geolocalizationNotActiveTitle: 'IL tuo browser non ha la geolocalizzazione attiva',
        geolocalizationNotActiveText: 'We need to get your location to permit this software to work!',
        checkTitle: 'Congratulazioni!<br/>Hai fatto CHECK su:<br/><span class="popup stopname">{stop}</span>',
        checkText: '',
        promoText: '<span class="popup promocode">{promo}</span><br/>Hai scoperto una parte del promocode segreto<br/><br/><strong>Continua il Tour per scoprire le parti rimanenti!</strong>',
        promoTextComplete: '<br/>You discovered the following piece of your promocode:<br/><span class="popup promocode">{promo}</span><br/><br/><strong>Now you can use the complete promocode to get a 15% discount!</strong>',
        shopText: `
          <br/>Now you can use the promocode <br/><span class="promocode">{promo}</span> <br/>to <strong><br/>
          get a 15% discount in this store</strong>.<br/><br/>
          Hope you appreciate this!!<br/><br/><br/>
          <h3>{stop} sui Social</h3>
          <div class="social-section-popup">
            <div id="TA_cdsratingsonlynarrow363" class="TA_cdsratingsonlynarrow"><ul id="QynJUXF4" class="TA_links nxneR81"><li id="2Rxm5agCk" class="J1fcr2cdc"><a target="_blank" href="https://www.tripadvisor.it/"><img src="https://www.tripadvisor.it/img/cdsi/img2/branding/tripadvisor_logo_transp_340x80-18034-2.png" alt="TripAdvisor"/></a></li></ul></div>
          </div>
        `,
        shopTextNoPromocode: `
          <span class="popup promocode">{promo}</span><br/>Hai scoperto una parte del promocode segreto<br/><br/>
          Visit all the places to complete the promocode and <strong><br/>
          get a 15% discount in this store</strong>.<br/><br/><br/>
          <h3>{stop} sui Social</h3>
          <div class="social-section-popup">
            <div id="TA_cdsratingsonlynarrow363" class="TA_cdsratingsonlynarrow"><ul id="QynJUXF4" class="TA_links nxneR81"><li id="2Rxm5agCk" class="J1fcr2cdc"><a target="_blank" href="https://www.tripadvisor.it/"><img src="https://www.tripadvisor.it/img/cdsi/img2/branding/tripadvisor_logo_transp_340x80-18034-2.png" alt="TripAdvisor"/></a></li></ul></div>
          </div>
        `,
        finishTitle: '<span class="popup stopname">{stop}</span> era l\'ultima tappa del nostro Tour<br/>',
        finishText: 'Ti è piaciuta questa esperienza?<br/><br/><strong>Lascia una tua valutazione</strong> e <strong>condividi questa pagina su Facebook</strong>!</div>'
      },
      tour_0: {
        title: 'Un giorno a... Milano',
        subtitle: 'Visita tutti i luoghi del nostro Itinerario e scopri il promocode segreto!',
        text: 'Ogni volta che effettuerai un <strong>check</strong> di un luogo del nostro itinerario otterrai un parte del <strong>promocode segreto</strong> utile per ottenere sconti e vantaggi nel luogo di ristoro da noi suggerito.<br/><br/> Il Tour di Milano prende in considerazione punti di interesse turistico storico, religioso e culturale, ma ci porterà a visitare anche quegli aspetti della Milano più contemporanea e ambiziosa. E\'previta una pausa per un gelato presso <strong>Oggi Gelato</strong> in Corso Garibaldi per un ristoro che allieterà la fase conclusiva del Tour.',
        info: 'info',
        generalInfos: 'Informazioni itinerario',
        places: 'Luoghi',
        youWillVisit: 'Luoghi che visiterai...',
        placesImageInCardAltText: 'Galleria Vittorio Emanuele - Photo by Fernando Meloni on Unsplash',
        placesTextInCard: 'Il tour comprende la <strong>Stazione Centrale</strong>, una passeggiata verso il quartiere moderno <strong>Gae Aulenti</strong>, una visita verso il centro città attraverso <strong>Corso Como</strong> per arrivare presso il <strong>Castello Sforzesco</strong>. Proseguiremo per il <strong>Duomo</strong> e la <strong>Galleria Vittorio Emanuele</strong> e verso <strong>Piazza San Fedele</strong> e poi verso il <strong>Quartiere della Moda</strong> con via Montenapoleone e via della Spiga. <br/><br/><small>Photo by Fernando Meloni on Unsplash</small>',
        relax: 'Relax',
        youWillTaste: 'Ristoro e sapori...',
        shopImageInCardAltText: 'Alt image...',
        shopTextInCard: 'Il punto di ristoro è la <strong>Gelateria Oggi di Corso Garibaldi</strong>. Immagina di entrare in un mondo di eccellenze, di profumi, di gusto e di artigianalità… e vedere gli ingredienti, freschissimi e rigorosamente selezionati a seconda della stagionalità, pronti ad essere lavorati sul tavolo e poi fusi insieme nella cucina dell’Officina di OGGI Gelato.<br/><br/>Utilizza qui il <strong>promocode</strong> che scoprirai durante il tour!',
        stops: {
          0: {
            name: 'Stazione Centrale di Milano',
            description: 'Info generali sulla Stazione. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel purus sollicitudin, congue libero id, suscipit nisl. Cras posuere facilisis erat interdum commodo. Phasellus vitae lobortis nisi, sit amet pretium lectus. Curabitur nisi ex, venenatis non diam et, aliquam fringilla massa. Fusce imperdiet viverra elit, non facilisis dolor ultrices sit amet.',
            images: {
              0: {
                alt: 'Stazione Centrale - la facciata principale',
                description: 'Descrizione architettonica della facciata della Stazione. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel purus sollicitudin, congue libero id, suscipit nisl. Cras posuere facilisis erat interdum commodo. Phasellus vitae lobortis nisi, sit amet pretium lectus. Curabitur nisi ex, venenatis non diam et, aliquam fringilla massa. Fusce imperdiet viverra elit, non facilisis dolor ultrices sit amet. Vestibulum at sagittis nibh. Mauris a felis a dolor tincidunt sagittis et at velit. Donec sem mauris, rhoncus non quam in, rhoncus lobortis enim. Sed cursus mauris ac massa fermentum, vel sagittis arcu venenatis.'
              },
              1: {
                alt: 'La "Mela Reintegrata" di Michelangelo Pistoletto',
                description: 'Alcune info sulla Mela Reintegrata. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel purus sollicitudin, congue libero id, suscipit nisl. Cras posuere facilisis erat interdum commodo. Phasellus vitae lobortis nisi, sit amet pretium lectus. Curabitur nisi ex, venenatis non diam et, aliquam fringilla massa. Fusce imperdiet viverra elit, non facilisis dolor ultrices sit amet. Vestibulum at sagittis nibh.'
              },
              2: {
                alt: 'Il Grattacielo Pirelli',
                description: 'Alcune info sul Grattacielo Pirelli. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel purus sollicitudin, congue libero id, suscipit nisl. Cras posuere facilisis erat interdum commodo. Phasellus vitae lobortis nisi, sit amet pretium lectus. Curabitur nisi ex, venenatis non diam et, aliquam fringilla massa. Fusce imperdiet viverra elit, non facilisis dolor ultrices sit amet. Vestibulum at sagittis nibh.'
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
            name: 'Il Duomo',
            description: 'Info generali sul Duomo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel purus sollicitudin, congue libero id, suscipit nisl. Cras posuere facilisis erat interdum commodo. Phasellus vitae lobortis nisi, sit amet pretium lectus. Curabitur nisi ex, venenatis non diam et, aliquam fringilla massa. Fusce imperdiet viverra elit, non facilisis dolor ultrices sit amet.',
            images: {
              0: {
                alt: 'La facciata in stile classico-barocco',
                description: 'La facciata del Duomo in stile classico-barocco. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel purus sollicitudin, congue libero id, suscipit nisl. Cras posuere facilisis erat interdum commodo. Phasellus vitae lobortis nisi, sit amet pretium lectus.'
              },
              1: {
                alt: 'La "Statua della Libertà"',
                description: 'Una particolare statua del Duomo è stata presa a modello per la più famosa statua di New York... due righe su tale argomento. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel purus sollicitudin, congue libero id, suscipit nisl. Cras posuere facilisis erat interdum commodo. Phasellus vitae lobortis nisi, sit amet pretium lectus.'
              },
              2: {
                alt: 'Il Palazzo Reale',
                description: 'Il Palazzo Reale. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel purus sollicitudin, congue libero id, suscipit nisl. Cras posuere facilisis erat interdum commodo. Phasellus vitae lobortis nisi, sit amet pretium lectus. Curabitur nisi ex, venenatis non diam et, aliquam fringilla massa. Fusce imperdiet viverra elit, non facilisis dolor ultrices sit amet. Vestibulum at sagittis nibh. Mauris a felis a dolor tincidunt sagittis et at velit. Donec sem mauris, rhoncus non quam in, rhoncus lobortis enim. Sed cursus mauris ac massa fermentum, vel sagittis arcu venenatis.'
              },
              3: {
                alt: 'La Galleria Vittorio Emanuele',
                description: 'La Galleria Vittorio Emanuele. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel purus sollicitudin, congue libero id, suscipit nisl. Cras posuere facilisis erat interdum commodo. Phasellus vitae lobortis nisi, sit amet pretium lectus. Curabitur nisi ex, venenatis non diam et, aliquam fringilla massa. Fusce imperdiet viverra elit, non facilisis dolor ultrices sit amet. Vestibulum at sagittis nibh. Mauris a felis a dolor tincidunt sagittis et at velit. Donec sem mauris, rhoncus non quam in, rhoncus lobortis enim. Sed cursus mauris ac massa fermentum, vel sagittis arcu venenatis.'
              }
            },
            nears: {
              0: {
                name: 'Magazzini La Rinascente'
              },
              1: {
                name: 'PInacoteca Ambrosiana'
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
            description: 'Info generali sulla Piazza della Scala. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel purus sollicitudin, congue libero id, suscipit nisl. Cras posuere facilisis erat interdum commodo. Phasellus vitae lobortis nisi, sit amet pretium lectus. Curabitur nisi ex, venenatis non diam et, aliquam fringilla massa. Fusce imperdiet viverra elit, non facilisis dolor ultrices sit amet.',
            images: {
              0: {
                alt: 'Statua di Leonardo in Piazza della Scala',
                description: 'Statua di Leonardo in Piazza della Scala. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel purus sollicitudin, congue libero id, suscipit nisl. Cras posuere facilisis erat interdum commodo. Phasellus vitae lobortis nisi, sit amet pretium lectus. Curabitur nisi ex, venenatis non diam et, aliquam fringilla massa. Fusce imperdiet viverra elit, non facilisis dolor ultrices sit amet. Vestibulum at sagittis nibh. Mauris a felis a dolor tincidunt sagittis et at velit. Donec sem mauris, rhoncus non quam in, rhoncus lobortis enim. Sed cursus mauris ac massa fermentum, vel sagittis arcu venenatis.'
              },
              1: {
                alt: 'Teatro alla Scala',
                description: 'Alcune info sul Teatro alla Scala. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel purus sollicitudin, congue libero id, suscipit nisl. Cras posuere facilisis erat interdum commodo. Phasellus vitae lobortis nisi, sit amet pretium lectus. Curabitur nisi ex, venenatis non diam et, aliquam fringilla massa. Fusce imperdiet viverra elit, non facilisis dolor ultrices sit amet. Vestibulum at sagittis nibh.'
              },
              2: {
                alt: 'Gallerie d\'Italia',
                description: 'Descrizione Gallerie d\'Italia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel purus sollicitudin, congue libero id, suscipit nisl. Cras posuere facilisis erat interdum commodo. Phasellus vitae lobortis nisi, sit amet pretium lectus. Curabitur nisi ex, venenatis non diam et, aliquam fringilla massa. Fusce imperdiet viverra elit, non facilisis dolor ultrices sit amet. Vestibulum at sagittis nibh.'
              }
            },
            nears: {
              0: {
                name: 'Casa del Manzoni'
              },
              1: {
                name: 'Via Monte Napoleone'
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
            description: 'Info generali sulla quartiere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel purus sollicitudin, congue libero id, suscipit nisl. Cras posuere facilisis erat interdum commodo. Phasellus vitae lobortis nisi, sit amet pretium lectus. Curabitur nisi ex, venenatis non diam et, aliquam fringilla massa. Fusce imperdiet viverra elit, non facilisis dolor ultrices sit amet.',
            images: {
              0: {
                alt: 'Le vie del quartiere Brera',
                description: 'Descrizione della vita nel quartiere tra caffè e shopping. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel purus sollicitudin, congue libero id, suscipit nisl. Cras posuere facilisis erat interdum commodo. Phasellus vitae lobortis nisi, sit amet pretium lectus. Curabitur nisi ex, venenatis non diam et, aliquam fringilla massa. Fusce imperdiet viverra elit, non facilisis dolor ultrices sit amet. Vestibulum at sagittis nibh. Mauris a felis a dolor tincidunt sagittis et at velit. Donec sem mauris, rhoncus non quam in, rhoncus lobortis enim. Sed cursus mauris ac massa fermentum, vel sagittis arcu venenatis.'
              }
            },
            nears: {
              0: {
                name: 'Pinacoteca di Brera'
              },
              1: {
                name: 'Orto Botanico di Brera'
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
            description: 'Info generali sul Castello Sforzesco. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel purus sollicitudin, congue libero id, suscipit nisl. Cras posuere facilisis erat interdum commodo. Phasellus vitae lobortis nisi, sit amet pretium lectus. Curabitur nisi ex, venenatis non diam et, aliquam fringilla massa. Fusce imperdiet viverra elit, non facilisis dolor ultrices sit amet.',
            images: {
              0: {
                alt: 'La torre del Filarete',
                description: 'Descrizione architettonica della torre del Filarete. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel purus sollicitudin, congue libero id, suscipit nisl. Cras posuere facilisis erat interdum commodo. Phasellus vitae lobortis nisi, sit amet pretium lectus. Curabitur nisi ex, venenatis non diam et, aliquam fringilla massa. Fusce imperdiet viverra elit, non facilisis dolor ultrices sit amet. Vestibulum at sagittis nibh. Mauris a felis a dolor tincidunt sagittis et at velit. Donec sem mauris, rhoncus non quam in, rhoncus lobortis enim. Sed cursus mauris ac massa fermentum, vel sagittis arcu venenatis.'
              },
              1: {
                alt: 'Fontana di Piazza Castello',
                description: 'Info su Fontana di Piazza Castello. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel purus sollicitudin, congue libero id, suscipit nisl. Cras posuere facilisis erat interdum commodo. Phasellus vitae lobortis nisi, sit amet pretium lectus. Curabitur nisi ex, venenatis non diam et, aliquam fringilla massa. Fusce imperdiet viverra elit, non facilisis dolor ultrices sit amet. Vestibulum at sagittis nibh.'
              }
            },
            nears: {
              0: {
                name: 'Parco Sempione'
              },
              1: {
                name: 'Triennale di Milano'
              },
              2: {
                name: 'Arco della Pace'
              },
              3: {
                name: 'Basilica di san Ambrogio'
              },
              4: {
                name: 'Museo del Cenacolo'
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
            description: 'Presentazione attività dello sponsor OGGI Gelato Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel purus sollicitudin, congue libero id, suscipit nisl. Cras posuere facilisis erat interdum commodo. Phasellus vitae lobortis nisi, sit amet pretium lectus.',
            carousel: {
              0: {
                alt: 'Descizione 1'
              },
              1: {
                alt: 'Descizione 2'
              },
              2: {
                alt: 'Descizione 3'
              }
            },
            images: {
              0: {
                alt: 'Oggi Gelato - Gelato al cioccolato',
                description: 'Lista e descrizione di ciò che di maggior interesse si può ordinare in questa gelateria.'
              },
              1: {
                alt: 'Oggi Gelato - interni',
                description: 'Lista dei servizi ulteriori (wi-fi, accesso disabili, altre info utili prese dal loro sito e di interesse per i possibili avventori)'
              }
            },
            nears: {
              0: {
                name: 'Via Moscova'
              },
              1: {
                name: 'Corso Como'
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
            description: 'Info generali sulla Piazza Gae Aulenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel purus sollicitudin, congue libero id, suscipit nisl. Cras posuere facilisis erat interdum commodo. Phasellus vitae lobortis nisi, sit amet pretium lectus. Curabitur nisi ex, venenatis non diam et, aliquam fringilla massa. Fusce imperdiet viverra elit, non facilisis dolor ultrices sit amet.',
            images: {
              0: {
                alt: 'Fontana di piazza Gae Aulenti',
                description: 'Qualche info sulla Fontana di piazza Gae Aulenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel purus sollicitudin, congue libero id, suscipit nisl. Cras posuere facilisis erat interdum commodo. Phasellus vitae lobortis nisi, sit amet pretium lectus. Curabitur nisi ex, venenatis non diam et, aliquam fringilla massa. Fusce imperdiet viverra elit, non facilisis dolor ultrices sit amet. Vestibulum at sagittis nibh. Mauris a felis a dolor tincidunt sagittis et at velit. Donec sem mauris, rhoncus non quam in, rhoncus lobortis enim. Sed cursus mauris ac massa fermentum, vel sagittis arcu venenatis.'
              },
              1: {
                alt: 'Le trombe di piazza Gae Aulenti',
                description: 'Alcune info sul questa particolare opera (le trombe). Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel purus sollicitudin, congue libero id, suscipit nisl. Cras posuere facilisis erat interdum commodo. Phasellus vitae lobortis nisi, sit amet pretium lectus. Curabitur nisi ex, venenatis non diam et, aliquam fringilla massa. Fusce imperdiet viverra elit, non facilisis dolor ultrices sit amet. Vestibulum at sagittis nibh.'
              },
              2: {
                alt: 'Il Grattacielo Unicredit',
                description: 'Alcune info sul Grattacielo Unicredit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel purus sollicitudin, congue libero id, suscipit nisl. Cras posuere facilisis erat interdum commodo. Phasellus vitae lobortis nisi, sit amet pretium lectus. Curabitur nisi ex, venenatis non diam et, aliquam fringilla massa. Fusce imperdiet viverra elit, non facilisis dolor ultrices sit amet. Vestibulum at sagittis nibh.'
              }
            },
            nears: {
              0: {
                name: 'Bosco verticale'
              },
              1: {
                name: 'Parco Biblioteca degli Alberi'
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
