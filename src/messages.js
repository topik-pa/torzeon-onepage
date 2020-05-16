const messages = {
  en: {
    message: {
      projectName: 'torzeon.com',
      promocode: 'Il tuo promocode: ',
      by: 'di ',
      followOn: 'Segui su: ',
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
        promoTextComplete: '<br/>Hai svelato il promocode!<br/><span class="popup promocode">{promo}</span><br/><br/>Ora puoi usare il tuo promocode per ottenere <strong>uno sconto del 15%</strong> sulla tua consumazione presso <strong>{stop}</strong>!<br/><br/>Basterà comunicarlo alla cassa oppure alla persona che ti servirà.<br/>Buon appetito!!!',
        shopText: `
          <br/>Ora puoi usare il tuo promocode<br/><span class="promocode">{promo}</span><br/>
          per ottenere <strong>uno sconto del 15%</strong> sulla tua consumazione in questa attività.<br/><br/>
          Riferisci questo promocode alla cassa o alla persona che ti servirà e... Buon appetito!!!<br/><br/><br/>
          <h3>{stop} sui Social</h3>
          <div class="social-section-popup">
            <div id="TA_cdsratingsonlynarrow363" class="TA_cdsratingsonlynarrow"><ul id="QynJUXF4" class="TA_links nxneR81"><li id="2Rxm5agCk" class="J1fcr2cdc"><a target="_blank" href="https://www.tripadvisor.it/"><img src="https://www.tripadvisor.it/img/cdsi/img2/branding/tripadvisor_logo_transp_340x80-18034-2.png" alt="TripAdvisor"/></a></li></ul></div>
          </div>
        `,
        shopTextNoPromocode: `
          <span class="popup promocode">{promo}</span><br/>Hai scoperto una parte del promocode segreto!<br/><br/>
          Visita tutti i luoghi di questo Tour per completare il promocode segreto e<br/>
          <strong>ottenere uno sconto del 15% in questa attività</strong>.<br/><br/><br/>
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
        subtitle: 'Visita i luoghi del nostro itinerario e scopri il promocode segreto!',
        text: `Effettua un <strong>check</strong> nei luoghi dell'itinerario e ottieni un parte del <strong>promocode segreto</strong>: conquista tutti gli <strong>sconti</strong> e scopri quali vantaggi hai guadagnato nel luogo di ristoro previsto.<br><br/>
        Il Tour di Milano prende in considerazione non solo punti di interesse turistico, storico, religioso e culturale ma anche quei luoghi che oggi rendono Milano una città contemporanea e ambiziosa. <br/>
        È prevista <strong>una pausa presso la golosa gelateria Oggi Gelato</strong> che si trova in Corso Garibaldi, un delizioso ristoro che addolcirà la fase conclusiva del Tour.
        `,
        info: 'info',
        generalInfos: 'Informazioni itinerario',
        places: 'Luoghi',
        youWillVisit: 'Luoghi che visiterai!',
        placesImageInCardAltText: 'Galleria Vittorio Emanuele - Photo by Fernando Meloni on Unsplash',
        placesTextInCard: 'Il tour comprende una passeggiata che parte dalla maestosa <strong>Stazione Centrale</strong> fino al <strong>Duomo</strong>, simbolo del capoluogo lombardo, e al passaggio coperto della <strong>Galleria Vittorio Emanuele II</strong>. Dopo aver scoperto la grandiosità della <strong>Piazza della Scala</strong>, il giro prosegue verso l’affascinante <strong>quartiere Brera</strong> e il complesso fortificato del <strong>Castello Sforzesco</strong>, pronti per raggiungere l’ultima tappa del circuito rappresentata dalla modernità di <strong>piazza Gae Aulenti</strong>.',
        relax: 'Relax',
        youWillTaste: 'Ristoro e sapori',
        shopImageInCardAltText: 'OGGI Gelato in Corso Garibaldi',
        shopTextInCard: 'Il punto di ristoro di questo tour è la <strong>Gelateria Oggi di Corso Garibaldi</strong>.<br/>Un favoloso mondo di sapori, profumi e artigianalità dove sarà possibile scoprire la lavorazione dei freschissimi ingredienti che vengono amalgamati nella cucina dell’Officina di Oggi Gelato per dar vita a dolci emozioni.<br/><br/><strong>Utilizza qui il promocode che scoprirai durante il tour!</strong>',
        stops: {
          0: {
            name: 'Stazione Centrale di Milano',
            description: `La Stazione Centrale di Milano è la seconda più trafficata in Italia: tutti i giorni circa 600 treni circolano nella stazione ferroviaria che ha 24 binari tronchi coperti da una grande tettoia lunga più di 340 metri e composta da ben cinque volte in ferro e vetro.<br/>
            Sul lato sud-est della stazione c’è un’entrata che viene aperta in alcune occasioni speciali e che un tempo portava nell’area riservata alla famiglia reale dei Savoia. C’è anche un passaggio segreto (dietro lo specchio in bagno!).`,
            images: {
              0: {
                alt: 'Stazione Centrale - La facciata della Stazione',
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
                alt: 'La facciata del Duomo',
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
                alt: 'Palazzo Reale ',
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
                name: 'Magazzini La Rinascente'
              },
              1: {
                name: 'Pinacoteca Ambrosiana'
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
            description: `Unisci architettura, storia e cultura e ottieni il quartiere Brera: questo è uno dei luoghi più visitati di Milano, un posto ricco di charme e fascino che deve il suo nome a “braida”, distesa di terra incolta. Già oltre cent’anni fa il quartiere era frequentato dagli artisti dell’Accademia di Belle Arti che si spostavano dal Palazzo Brera alla Pinacoteca, dall’Orto Botanico al Mercatino.`,
            images: {
              0: {
                alt: 'Le vie del quartiere Brera',
                description: `Strade strette con i ciottoli, cortili magnifici, palazzi d’epoca, botteghe e boutique: è nelle vie del quartiere Brera che gli appassionati dello shopping si dirigono per cercare le migliori occasioni tra gli oggetti più originali del momento. E, dopo gli acquisti, impossibile evitare una sosta in uno dei molti locali inseriti in questa cornice bohemien.`
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
                name: 'Parco Sempione'
              },
              1: {
                name: 'Triennale di Milano'
              },
              2: {
                name: 'Arco della Pace'
              },
              3: {
                name: 'Basilica di San Ambrogio'
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
            description: `OGGI Gelato produce golosi coni e coppe gelato artigianali senza coloranti e conservanti aggiunti. Il gelato sano e naturale viene realizzato con ottime materie prime stagionali dall’Officina Gelato Gusto Italiano: da oltre sei anni OGGI suggerisce ai suoi clienti le migliori dolci proposte all’interno dei suoi negozi.<br/>
            Gli ingredienti selezionati, eccellenze del territorio italiano, sono il segreto della gelateria artigianale. I mantecati e le creme spalmabili di OGGI Gelato sono prodotti unici che vengono realizzati per offrire ai clienti il gusto originale di ogni gelato.
            `,
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
                alt: 'Oggi Gelato - descrizione attività',
                description: `OGGI Gelato è una delle prime gelaterie italiane a utilizzare il logo Campa Amica di Coldiretti, un progetto che promuove la filiera agricola completamente italiana. Ma non solo! L’Officina Gelato Gusto Italiano è stata scelta per essere il fornitore ufficiale del Papa, l’unica gelateria a produrre il gelato per la Santa Sede.`
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
      projectName: 'torzeon.com',
      promocode: 'Il tuo promocode: ',
      by: 'di ',
      followOn: 'Segui su: ',
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
        promoTextComplete: '<br/>Hai svelato il promocode!<br/><span class="popup promocode">{promo}</span><br/><br/>Ora puoi usare il tuo promocode per ottenere <strong>uno sconto del 15%</strong> sulla tua consumazione presso <strong>{stop}</strong>!<br/><br/>Basterà comunicarlo alla cassa oppure alla persona che ti servirà.<br/>Buon appetito!!!',
        shopText: `
          <br/>Ora puoi usare il tuo promocode<br/><span class="promocode">{promo}</span><br/>
          per ottenere <strong>uno sconto del 15%</strong> sulla tua consumazione in questa attività.<br/><br/>
          Riferisci questo promocode alla cassa o alla persona che ti servirà e... Buon appetito!!!<br/><br/><br/>
          <h3>{stop} sui Social</h3>
          <div class="social-section-popup">
            <div id="TA_cdsratingsonlynarrow363" class="TA_cdsratingsonlynarrow"><ul id="QynJUXF4" class="TA_links nxneR81"><li id="2Rxm5agCk" class="J1fcr2cdc"><a target="_blank" href="https://www.tripadvisor.it/"><img src="https://www.tripadvisor.it/img/cdsi/img2/branding/tripadvisor_logo_transp_340x80-18034-2.png" alt="TripAdvisor"/></a></li></ul></div>
          </div>
        `,
        shopTextNoPromocode: `
          <span class="popup promocode">{promo}</span><br/>Hai scoperto una parte del promocode segreto!<br/><br/>
          Visita tutti i luoghi di questo Tour per completare il promocode segreto e<br/>
          <strong>ottenere uno sconto del 15% in questa attività</strong>.<br/><br/><br/>
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
        subtitle: 'Visita i luoghi del nostro itinerario e scopri il promocode segreto!',
        text: `Effettua un <strong>check</strong> nei luoghi dell'itinerario e ottieni un parte del <strong>promocode segreto</strong>: conquista tutti gli <strong>sconti</strong> e scopri quali vantaggi hai guadagnato nel luogo di ristoro previsto.<br><br/>
        Il Tour di Milano prende in considerazione non solo punti di interesse turistico, storico, religioso e culturale ma anche quei luoghi che oggi rendono Milano una città contemporanea e ambiziosa. <br/>
        È prevista <strong>una pausa presso la golosa gelateria Oggi Gelato</strong> che si trova in Corso Garibaldi, un delizioso ristoro che addolcirà la fase conclusiva del Tour.
        `,
        info: 'info',
        generalInfos: 'Informazioni itinerario',
        places: 'Luoghi',
        youWillVisit: 'Luoghi che visiterai!',
        placesImageInCardAltText: 'Galleria Vittorio Emanuele - Photo by Fernando Meloni on Unsplash',
        placesTextInCard: 'Il tour comprende una passeggiata che parte dalla maestosa <strong>Stazione Centrale</strong> fino al <strong>Duomo</strong>, simbolo del capoluogo lombardo, e al passaggio coperto della <strong>Galleria Vittorio Emanuele II</strong>. Dopo aver scoperto la grandiosità della <strong>Piazza della Scala</strong>, il giro prosegue verso l’affascinante <strong>quartiere Brera</strong> e il complesso fortificato del <strong>Castello Sforzesco</strong>, pronti per raggiungere l’ultima tappa del circuito rappresentata dalla modernità di <strong>piazza Gae Aulenti</strong>.',
        relax: 'Relax',
        youWillTaste: 'Ristoro e sapori',
        shopImageInCardAltText: 'OGGI Gelato in Corso Garibaldi',
        shopTextInCard: 'Il punto di ristoro di questo tour è la <strong>Gelateria Oggi di Corso Garibaldi</strong>.<br/>Un favoloso mondo di sapori, profumi e artigianalità dove sarà possibile scoprire la lavorazione dei freschissimi ingredienti che vengono amalgamati nella cucina dell’Officina di Oggi Gelato per dar vita a dolci emozioni.<br/><br/><strong>Utilizza qui il promocode che scoprirai durante il tour!</strong>',
        stops: {
          0: {
            name: 'Stazione Centrale di Milano',
            description: `La Stazione Centrale di Milano è la seconda più trafficata in Italia: tutti i giorni circa 600 treni circolano nella stazione ferroviaria che ha 24 binari tronchi coperti da una grande tettoia lunga più di 340 metri e composta da ben cinque volte in ferro e vetro.<br/>
            Sul lato sud-est della stazione c’è un’entrata che viene aperta in alcune occasioni speciali e che un tempo portava nell’area riservata alla famiglia reale dei Savoia. C’è anche un passaggio segreto (dietro lo specchio in bagno!).`,
            images: {
              0: {
                alt: 'Stazione Centrale - La facciata della Stazione',
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
                alt: 'La facciata del Duomo',
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
                alt: 'Palazzo Reale ',
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
                name: 'Magazzini La Rinascente'
              },
              1: {
                name: 'Pinacoteca Ambrosiana'
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
            description: `Unisci architettura, storia e cultura e ottieni il quartiere Brera: questo è uno dei luoghi più visitati di Milano, un posto ricco di charme e fascino che deve il suo nome a “braida”, distesa di terra incolta. Già oltre cent’anni fa il quartiere era frequentato dagli artisti dell’Accademia di Belle Arti che si spostavano dal Palazzo Brera alla Pinacoteca, dall’Orto Botanico al Mercatino.`,
            images: {
              0: {
                alt: 'Le vie del quartiere Brera',
                description: `Strade strette con i ciottoli, cortili magnifici, palazzi d’epoca, botteghe e boutique: è nelle vie del quartiere Brera che gli appassionati dello shopping si dirigono per cercare le migliori occasioni tra gli oggetti più originali del momento. E, dopo gli acquisti, impossibile evitare una sosta in uno dei molti locali inseriti in questa cornice bohemien.`
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
                name: 'Parco Sempione'
              },
              1: {
                name: 'Triennale di Milano'
              },
              2: {
                name: 'Arco della Pace'
              },
              3: {
                name: 'Basilica di San Ambrogio'
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
            description: `OGGI Gelato produce golosi coni e coppe gelato artigianali senza coloranti e conservanti aggiunti. Il gelato sano e naturale viene realizzato con ottime materie prime stagionali dall’Officina Gelato Gusto Italiano: da oltre sei anni OGGI suggerisce ai suoi clienti le migliori dolci proposte all’interno dei suoi negozi.<br/>
            Gli ingredienti selezionati, eccellenze del territorio italiano, sono il segreto della gelateria artigianale. I mantecati e le creme spalmabili di OGGI Gelato sono prodotti unici che vengono realizzati per offrire ai clienti il gusto originale di ogni gelato.
            `,
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
                alt: 'Oggi Gelato - descrizione attività',
                description: `OGGI Gelato è una delle prime gelaterie italiane a utilizzare il logo Campa Amica di Coldiretti, un progetto che promuove la filiera agricola completamente italiana. Ma non solo! L’Officina Gelato Gusto Italiano è stata scelta per essere il fornitore ufficiale del Papa, l’unica gelateria a produrre il gelato per la Santa Sede.`
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
