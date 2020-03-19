const messages = {
  en: {
    message: {
      promocode: 'Your Promocode: ',
      by: 'by ',
      contactTourAuthor: 'Contact the author with an email',
      shareOn: 'Share on ',
      followOn: 'follow on ',
      checkOurSocials: 'Check our Socials to keep updated!',
      start: 'Start',
      end: 'End',
      rating: 'Rating',
      duration: 'Duration',
      geometry: 'Geometry',
      minutes: ' minuti (circa)',
      linearTrip: 'Linear trip',
      roundTrip: 'Round trip',
      readyMessage: 'Are you ready? ...Let\'s START!',
      getThere: 'Location on map',
      checkLocation: 'CHECK!',
      locationChecked: 'CHECKED',
      infoFromTheWeb: 'Some infos from the Web',
      areYouHere: 'Are you here?',
      nearHere: 'Near here...',
      goals: {
        promo: 'Goal: search for the promocode',
        shop: 'Goal: get the complete promocode and take a rest',
        check: 'Goal: complete the journey',
        finish: 'Goal: share your experience'
      },
      popups: {
        notEvenCloseTitle: 'Not even close!',
        notEvenCloseText: 'Mmhhhh... are you sure you reached this place? <br/>I checked and seems to me you are <br/><strong>{distance} meters</strong><br/> away from here!',
        nearHereButTitle: 'You are near here... but not here',
        nearHereButText: 'I checked and seems to me you are {distance} meters away from here!<br/>Try to get closer and try again!',
        geolocalizationNotActiveTitle: 'Geolocalization not active',
        geolocalizationNotActiveText: 'We need to get your location to permit this software to work!',
        checkTitle: 'Congrats! You checked <br/> &#34;{stop}&#34;',
        checkText: '',
        promoTitle: 'Congrats! You checked <br/> &#34;{stop}&#34;',
        promoText: 'You discovered the following piece of your promocode:<strong style="font-size:200%">&#34;{promo}&#34;</strong>',
        promoTextComplete: 'You discovered the following piece of your promocode:<br/><strong style="font-size:200%">&#34;{promo}&#34;</strong><br/><br/>Now you can use the complete promocode to get a 10% discount',
        shopTitle: 'Congrats! You checked <br/> &#34;{stop}&#34;',
        shopText: `
          Now you can use the promocode {promocode} to <strong style="font-weight: bold;"><br/>
          get a 10% discount in this store</strong>.<br/>
          Hope you appreciate this!!<br/><br/><br/>
          <div class="social-widget-cointainer-popup">
            <div id="TA_cdsratingsonlynarrow363" class="TA_cdsratingsonlynarrow"><ul id="QynJUXF4" class="TA_links nxneR81"><li id="2Rxm5agCk" class="J1fcr2cdc"><a target="_blank" href="https://www.tripadvisor.it/"><img src="https://www.tripadvisor.it/img/cdsi/img2/branding/tripadvisor_logo_transp_340x80-18034-2.png" alt="TripAdvisor"/></a></li></ul></div>
          </div>
        `,
        shopTextNoPromocode: `
          Visit all the places to complete the promocode and <strong style="font-weight: bold;"><br/>
          get a 10% discount in this store</strong>.<br/>
          <br/><br/><br/>
          <div class="social-widget-cointainer-popup">
            <div id="TA_cdsratingsonlynarrow363" class="TA_cdsratingsonlynarrow"><ul id="QynJUXF4" class="TA_links nxneR81"><li id="2Rxm5agCk" class="J1fcr2cdc"><a target="_blank" href="https://www.tripadvisor.it/"><img src="https://www.tripadvisor.it/img/cdsi/img2/branding/tripadvisor_logo_transp_340x80-18034-2.png" alt="TripAdvisor"/></a></li></ul></div>
          </div>
        `,
        finishTitle: 'Congrats! Your journey in complete!',
        finishText: 'Did you like the journey?<br/>Please, share it on Facebook and rate this tour!'
      },
      tour_0: {
        title: 'A day in... Milan',
        subtitle: 'The most interesting places in the most fashion Italian city',
        text: 'Il tour parte dalla storica Stazione Centrale, esempio di architettura del periodo Fascista, per attraversare i nuovi quartieri di piazza Gae Aulenti e Tre Torri, ma vedranno luoghi classici come il Duomo e il Castello Sforzesco. Una pausa per un gelato presso Oggi Gelato allieterà la giornata prima della conclusione del tour.',
        info: 'infos',
        generalInfos: 'Tour info',
        places: 'places',
        youWillVisit: 'You will visit...',
        placesImageInCardAltText: 'Alt image...',
        placesTextInCard: 'Il tour comprende la <strong>Stazione Centrale</strong>, una passeggiata verso il quartiere moderno <strong>Gae Aulenti</strong>, una visita verso il centro città attraverso <strong>Corso Como</strong> per arrivare presso il <strong>Castello Sforzesco</strong>. Proseguiremo per il <strong>Duomo</strong> e la <strong>Galleria Vittorio Emanuele</strong> e verso <strong>Piazza San Fedele</strong> e poi verso il <strong>Quartiere della Moda</strong> con via Montenapoleone e via della Spiga.',
        relax: 'Relax',
        youWillTaste: 'You will taste...',
        shopImageInCardAltText: 'Alt image...',
        shopTextInCard: 'Il punto di ristoro è la <strong>Gelateria Oggi di Corso Garibaldi</strong>. Immagina di entrare in un mondo di eccellenze, di profumi, di gusto e di artigianalità… e vedere gli ingredienti, freschissimi e rigorosamente selezionati a seconda della stagionalità, pronti ad essere lavorati sul tavolo e poi fusi insieme nella cucina dell’Officina di OGGI Gelato.<br/><br/>Utilizza qui il <strong>promocode</strong> che scoprirai durante il tour!',
        stop_0_name: 'Stazione Centrale',
        stop_0_description: 'La stazione di Milano Centrale è la principale stazione ferroviaria del capoluogo lombardo, la seconda d&apos;Italia per flusso di passeggeri, nonché una delle principali stazioni ferroviarie d&apos;Europa.',
        stop_0_link_1_url: 'https://it.wikipedia.org/wiki/Stazione_di_Milano_Centrale',
        stop_0_link_1_name: 'Stazione Centrale (from Wikipedia)',
        stop_0_link_2_url: 'https://www.esquire.com/it/lifestyle/viaggi/a19151611/stazione-centrale-milano-curiosita/',
        stop_0_link_2_name: 'Stazione Centrale (from Esquire)',
        stop_0_link_3_url: 'https://www.panorama.it/cultura/arte-idee/michelangelo-pistoletto-spiega-la-sua-mela-reintegrata/',
        stop_0_link_3_name: 'The apple (from Panorama)',
        stop_0_image_1_name: 'Stazione Centrale di Milano',
        stop_0_image_1_alt: 'First image of stazione Centrale',
        stop_0_image_1_description: 'Fu inaugurata nel 1931 per sostituire la vecchia stazione centrale che sorgeva nell&apos;attuale piazza della Repubblica, divenuta insufficiente a causa dell&apos;aumento del traffico ferroviario. La gestione degli impianti è affidata a Rete Ferroviaria Italiana (RFI) società del gruppo Ferrovie dello Stato, che classifica la stazione nella categoria "Platinum", mentre quella delle aree commerciali del monumentale fabbricato viaggiatori è di competenza di Grandi Stazioni. Nel novembre 2010 lo scalo è stato intitolato a santa Francesca Cabrini (1850-1917), fondatrice della congregazione delle Missionarie del Sacro Cuore di Gesù.',
        stop_0_image_2_name: 'La "Mela Reintegrata"',
        stop_0_image_2_alt: 'Second image of stazione Centrale',
        stop_0_image_2_description: 'Undici tonnellate di peso, 8 metri di altezza e 7 di diametro: una scultura monumentale, è “La Mela Reintegrata” realizzata dall’artista Michelangelo Pistoletto, simbolo di un futuro in cui la scienza e la tecnica si saldano finalmente con la natura, anziché allontanarci da essa.',
        stop_1_name: 'Piazza Gae Aulenti',
        stop_1_description: 'Piazza Gae Aulenti è una piazza circolare sopraelevata, di 100 metri di diametro situata nel Centro Direzionale di Milano. Rialzata di 6 metri rispetto al livello della strada, è stata progettata dall&apos;architetto argentino César Pelli[1] a completamento delle omonime torri, attualmente di proprietà del fondo Immobiliare Porta Nuova Garibaldi e concesse in locazione a diverse multinazionali tra cui la principale banca Unicredit[2]. L&apos;inaugurazione è avvenuta il giorno 8 dicembre 2012, con la conseguente intitolazione all&apos;architetto e designer Gae Aulenti.',
        stop_1_link_1_url: 'https://it.wikipedia.org/wiki/Piazza_Gae_Aulenti',
        stop_1_link_1_name: 'Piazza Gae Aulenti (from Wikipedia)',
        stop_1_link_2_url: 'https://www.lifegate.it/persone/stile-di-vita/piazza-gae-aulenti-milano-landscape-institute-award',
        stop_1_link_2_name: 'Piazza Gae Aulenti a Milano è tra le più belle al mondo, lo dice il premio Landscape',
        stop_1_image_1_name: 'PIazza Gae Aulenti',
        stop_1_image_1_alt: 'First image of stazione Centrale',
        stop_1_image_1_description: 'Come dalla vicina piazza Alvar Aalto, anche da Gae Aulenti si può godere ottimamente dello skyline di Milano. Sono visibili le Torri Garibaldi e gli adiacenti grattacieli del Bosco Verticale, il palazzo della giunta regionale lombarda, la Torre Galfa, la Torre Servizi Tecnici Comunali, il Grattacielo Pirelli, le torri residenziali Solaria, Solea, Aria e una porzione della Torre Diamante. Oltre a ciò, dal livello della piazza è possibile avere una visione d&apos;insieme imponente dell&apos;Unicredit Tower, che con i suoi 231 metri è il grattacielo più alto d&apos;Italia.',
        stop_2_name: 'OGGI Officina Gelato Gusto Italiano',
        stop_2_description: 'Nella cucina dell’Officina di OGGI Gelato vedrai creare solo ricette originali, frutto di anni di esperienza maturata sul campo, di tradizione artigiana e di un pizzico di follia, in un mix di grandi classici, riscoperta di antichi sapori e nuove, inedite combinazioni. Immagina di vedere i mantecati che lentamente prendono forma, pronti ad essere serviti. Da oggi, tutto davanti ai tuoi occhi.',
        stop_2_link_1_url: 'https://oggigelato.it/',
        stop_2_link_1_name: 'OGGI Officina Gelato Gusto Italiano (Official site)',
        stop_2_link_2_url: 'https://www.tripadvisor.it/ShowUserReviews-g187849-d14156464-r593531554-OGGI_Officina_Gelato_Gusto_Italiano-Milan_Lombardy.html',
        stop_2_link_2_name: 'Recensioni su OGGI (Tripadvisor)',
        stop_2_image_1_name: '',
        stop_2_image_1_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor.',
        stop_2_image_1_description: 'Nella cucina dell’Officina di OGGI Gelato, dove il caldo dei fornelli incontra il freddo del mantecatore, si può assistere ora dopo ora, ogni giorno, al taglio della frutta, sentire i profumi della tostatura, fatta rigorosamente a mano, osservare la preparazione dei mantecati e di tanto altro ancora. Il tutto nel rispetto della natura, con l’aiuto di partner d’eccezione e a sostegno – ad esempio – del progetto “Campagna Amica”, per valorizzare le risorse del nostro territorio e migliorare la qualità della vita di chi lavora in campagna.',
        stop_2_image_2_name: '',
        stop_2_image_2_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor.',
        stop_2_image_2_description: 'Le Spalmabili di OGGI sono prelibate creme artigianali ottenute da ingredienti di eccellenza selezionati sul territorio e lavorate esclusivamente nelle nostre Officine, secondo le ricette originali del Maestro Carmelo Chiaramida.',
        stop_3_name: 'Castello Sforzesco',
        stop_3_description: 'Il Castello Sforzesco (Castell Sforzesch in dialetto milanese), è un grande complesso fortificato che sorge a Milano poco fuori il centro storico della città.',
        stop_3_link_1_url: 'https://www.milanocastello.it/',
        stop_3_link_1_name: 'Castello Sforzesco (official site)',
        stop_3_link_2_url: 'https://it.wikipedia.org/wiki/Castello_Sforzesco',
        stop_3_link_2_name: 'Castello Sforzesco (from Wikipedia)',
        stop_3_image_1_name: '',
        stop_3_image_1_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor. Proin ac dictum nunc.',
        stop_3_image_1_description: 'Fu eretto nel XV secolo da Francesco Sforza, divenuto da poco Duca di Milano, sui resti di una precedente fortificazione medievale del XIV secolo nota come Castello di Porta Giovia (o Zobia). Nella stessa zona in cui sorgeva il Castello di Porta Giovia, in epoca romana, sorgeva l&apos;omonimo Castrum Portae Jovis, uno dei quattro castelli difensivi della Milano romana.',
        stop_3_image_2_name: '',
        stop_3_image_2_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor. Proin ac dictum nunc.',
        stop_3_image_2_description: 'Notevolmente trasformato e modificato nel corso dei secoli, il Castello Sforzesco fu, tra il Cinquecento e il Seicento, una delle principali cittadelle militari d&apos;Europa; restaurato in stile storicista da Luca Beltrami tra il 1890 e il 1905, è oggi sede di istituzioni culturali e di importanti musei. È uno dei più grandi castelli d&apos;Europa nonché uno dei principali simboli di Milano e della sua storia.',
        stop_4_name: 'Duomo di Milano',
        stop_4_description: 'Il Duomo di Milano, ufficialmente Basilica Cattedrale Metropolitana della Natività della Beata Vergine Maria (Dòmm de Milan in dialetto milanese), è la cattedrale dell&apos;arcidiocesi di Milano. Simbolo del capoluogo lombardo, e situato nell&apos;omonima piazza al centro della metropoli, è dedicata a Santa Maria Nascente. È la chiesa più grande d&apos;Italia (la Basilica di San Pietro, più grande, è infatti nel territorio della Città del Vaticano), la quarta nel mondo per superficie, la sesta per volume. È sede della parrocchia di Santa Tecla nel Duomo di Milano.',
        stop_4_link_1_url: 'https://www.duomomilano.it/it/',
        stop_4_link_1_name: 'Duomo di Milano (Official site)',
        stop_4_link_2_url: 'https://it.wikipedia.org/wiki/Duomo_di_Milano',
        stop_4_link_2_name: 'Duomo di Milano (Wikipedia)',
        stop_4_image_1_name: 'Duomo di Milano',
        stop_4_image_1_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor. Proin ac dictum nunc.',
        stop_4_image_1_description: 'Nel luogo in cui sorge il Duomo un tempo si trovavano l&apos;antica cattedrale di Santa Maria Maggiore, cattedrale invernale, e la basilica di Santa Tecla, cattedrale estiva. Dopo il crollo del campanile, l&apos;arcivescovo Antonio de&apos; Saluzzi, sostenuto dalla popolazione, promosse la ricostruzione di una nuova e più grande cattedrale (12 maggio 1386), che sorgesse sul luogo del più antico cuore religioso della città. Per il nuovo edificio si iniziò ad abbattere entrambe le chiese precedenti: Santa Maria Maggiore venne demolita per prima, Santa Tecla in un secondo momento, nel 1461-1462 (parzialmente ricostruita nel 1489 e definitivamente abbattuta nel 1548).',
        stop_4_image_2_name: 'Duomo di Milano - Facciata',
        stop_4_image_2_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor. Proin ac dictum nunc.',
        stop_4_image_2_description: 'Per quanto riguarda la facciata Pellegrino Tibaldi disegnò un progetto nel 1580, basato su un basamento a due piani animato da colonne corinzie giganti e con un&apos;edicola in corrispondenza della navata centrale, affiancata da obelischi. La morte di Carlo Borromeo nel 1584 significò l&apos;allontanamento del suo protetto che lasciò la città, mentre il cantiere veniva preso in mano dal suo rivale Martino Bassi, che inviò a Gregorio XIV, papa milanese, un nuovo progetto di facciata.',
        stop_4_image_3_name: 'La "Statua della Libertà"',
        stop_4_image_3_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor. Proin ac dictum nunc.',
        stop_4_image_3_description: 'È stata creata dallo scultore Camillo Pacetti, nel 1810, e si chiama La Legge Nuova. Non serve essere esperti d’arte per capire che la somiglianza con quell’altra statua, quella che ha avuto un cicinin di successo in più , è fortissima. E infatti, secondo diverse fonti e pareri, sarebbe proprio la scultura creata dal Pacetti in epoca napoleonica la fonte di ispirazione di Frédéric Auguste Bartholdi per la creazione della Statua della Libertà di New York.',
        stop_5_name: 'Piazza della Scale e Teatro',
        stop_5_description: 'Piazza della Scala è un&apos;aggiunta relativamente recente all&apos;urbanistica del centro di Milano, dato che è stata creata nel 1858 grazie alla demolizione di diversi caseggiati che si trovavano di fronte all&apos;omonimo teatro, e tra questi del palazzetto in cui aveva sede lo storico Caffè Martini.',
        stop_5_link_1_url: 'http://www.teatroallascala.org/',
        stop_5_link_1_name: 'Teatro alla Scala (Official site)',
        stop_5_link_2_url: 'https://it.wikipedia.org/wiki/Piazza_della_Scala',
        stop_5_link_2_name: 'Piazza della Scala (Wikipedia)',
        stop_5_image_1_name: 'Teatro alla Scala',
        stop_5_image_1_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor. Proin ac dictum nunc.',
        stop_5_image_1_description: 'Il Teatro alla Scala, citato solitamente in maniera informale come la Scala, è il principale teatro d&apos;opera di Milano. Considerato tra i più prestigiosi teatri al mondo, ospita da 242 anni i principali artisti nel campo internazionale dell&apos;opera, e, più in generale, della musica classica, spesso commissionando opere tuttora presenti nei cartelloni dei maggiori teatri nel mondo.',
        stop_5_image_2_name: 'La statua di Leonardo da Vinci si trova in Piazza della Scala, in bella evidenza, proprio davanti al tempio internazionale del bel canto. Il monumento offre un’immagine solenne e austera dello scienziato e ai piedi si trovano quattro suoi discepoli. La statua è stata realizzata con il marmo bianco di Carrara mentre, per il basamento, è stato utilizzato il granito proveniente da Baveno.',
        stop_5_image_2_alt: 'La statua di Leonardo da Vinci si trova in Piazza della Scala, in bella evidenza, proprio davanti al tempio internazionale del bel canto. Il monumento offre un’immagine solenne e austera dello scienziato e ai piedi si trovano quattro suoi discepoli. La statua è stata realizzata con il marmo bianco di Carrara mentre, per il basamento, è stato utilizzato il granito proveniente da Baveno.',
        stop_5_image_2_description: 'Statua di Leonardo da Vinci',
        stop_6_name: 'Via Monte Napoleone',
        stop_6_description: 'Via Monte Napoleone è una via del centro di Milano, considerata una delle zone più lussuose e uno dei maggiori centri degli acquisti del prêt-à-porter. Via Monte Napoleone è nota come la via più cara di Europa.',
        stop_6_link_1_url: 'https://it.wikipedia.org/wiki/Via_Monte_Napoleone',
        stop_6_link_1_name: 'Via Monte Napoleone (Wikipedia)',
        stop_6_image_1_name: 'Via Monte Napoleone',
        stop_6_image_1_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor. Proin ac dictum nunc.',
        stop_6_image_1_description: 'La via nel corso della sua storia ha ospitato diversi illustri personaggi milanesi: a Palazzo Taverna (civico 2) visse e morì lo scrittore Carlo Porta, mentre sul fronte opposto, il civico 1, era la casa in cui viveva ed era morto il poeta e scrittore Tommaso Grossi. Sempre in questa via Giuseppe Verdi avrebbe composto nel 1840 il suo Nabucco. Storicamente in passato la strada aveva il soprannome di el Quartier de Riverissi, in riferimento all&apos;usanza dei signori milanesi di togliersi il cappello in segno di riverenza, per salutare una signora che qui aveva la propria dimora.'
      }
    }
  },
  it: {
    message: {
      promocode: 'Il tuo promocode: ',
      by: 'di ',
      contactTourAuthor: 'Invia una mail all\'autore',
      shareOn: 'Condividi su ',
      followOn: 'Segui su ',
      checkOurSocials: 'Check our Socials to keep updated!',
      start: 'Inizio',
      end: 'Fine',
      rating: 'Rating',
      duration: 'Durata',
      geometry: 'Geometria',
      minutes: ' minuti (circa)',
      linearTrip: 'Linear trip',
      roundTrip: 'Round trip',
      readyMessage: 'Pronti? ...VIA!',
      getThere: 'Posizione sulla mappa',
      checkLocation: 'CHECK!',
      locationChecked: 'CHECKED',
      infoFromTheWeb: 'Altre info dal Web',
      areYouHere: 'Ti trovi qui?',
      nearHere: 'Qui vicino...',
      goals: {
        promo: 'Goal: search for the promocode',
        shop: 'Goal: get the complete promocode and take a rest',
        check: 'Goal: complete the journey',
        finish: 'Goal: share your experience'
      },
      popups: {
        notEvenCloseTitle: 'Not even close!',
        notEvenCloseText: 'Mmhhhh... are you sure you reached this place? <br/>I checked and seems to me you are <br/><strong>{distance} meters</strong><br/> away from here!',
        nearHereButTitle: 'You are near here... but not here',
        nearHereButText: 'I checked and seems to me you are <br/><strong>{distance} meters</strong><br/> away from here!<br/><br/><strong>Try to get closer and try again!</strong>',
        geolocalizationNotActiveTitle: 'Geolocalization not active',
        geolocalizationNotActiveText: 'We need to get your location to permit this software to work!',
        checkTitle: 'Congrats! You checked<br/>&#34;{stop}&#34;',
        checkText: '',
        promoTitle: 'Congrats! You checked<br/>&#34;{stop}&#34;',
        promoText: 'You discovered the following piece of your promocode:<br/><strong style="font-size:200%">&#34;{promo}&#34;</strong>',
        promoTextComplete: 'You discovered the following piece of your promocode:<br/><strong style="font-size:200%">&#34;{promo}&#34;</strong><br/><br/>Now you can use the complete promocode {promocode} to get a 10% discount',
        shopTitle: 'Congrats! You checked<br/>&#34;{stop}&#34;',
        shopText: `
          Now you can use the promocode {promocode} to <strong style="font-weight: bold;"><br/>
          get a 10% discount in this store</strong>.<br/>
          Hope you appreciate this!!<br/><br/><br/>
          <div class="social-widget-cointainer-popup">
            <div id="TA_cdsratingsonlynarrow363" class="TA_cdsratingsonlynarrow"><ul id="QynJUXF4" class="TA_links nxneR81"><li id="2Rxm5agCk" class="J1fcr2cdc"><a target="_blank" href="https://www.tripadvisor.it/"><img src="https://www.tripadvisor.it/img/cdsi/img2/branding/tripadvisor_logo_transp_340x80-18034-2.png" alt="TripAdvisor"/></a></li></ul></div>
          </div>
        `,
        shopTextNoPromocode: `
          Visit all the places to complete the promocode and <strong style="font-weight: bold;"><br/>
          get a 10% discount in this store</strong>.<br/>
          <br/><br/><br/>
          <div class="social-widget-cointainer-popup">
            <div id="TA_cdsratingsonlynarrow363" class="TA_cdsratingsonlynarrow"><ul id="QynJUXF4" class="TA_links nxneR81"><li id="2Rxm5agCk" class="J1fcr2cdc"><a target="_blank" href="https://www.tripadvisor.it/"><img src="https://www.tripadvisor.it/img/cdsi/img2/branding/tripadvisor_logo_transp_340x80-18034-2.png" alt="TripAdvisor"/></a></li></ul></div>
          </div>
        `,
        finishTitle: 'Congrats! Your journey in complete!',
        finishText: '<div>Did you like the journey?<br/>Please, <strong>share it on Facebook</strong> and <strong>rate this tour</strong>!</div>'
      },
      tour_0: {
        title: 'Un giorno a... Milano',
        subtitle: 'I luoghi più caratteristici, tra Storia e modernità',
        text: 'Il tour parte dalla storica Stazione Centrale, esempio di architettura del periodo Fascista, per attraversare i nuovi quartieri di piazza Gae Aulenti e Tre Torri, ma vedranno luoghi classici come il Duomo e il Castello Sforzesco. Una pausa per un gelato presso Oggi Gelato allieterà la giornata prima della conclusione del tour.',
        info: 'info',
        generalInfos: 'Informazioni itinerario',
        places: 'places',
        youWillVisit: 'You will visit...',
        placesImageInCardAltText: 'Alt image...',
        placesTextInCard: 'Il tour comprende la <strong>Stazione Centrale</strong>, una passeggiata verso il quartiere moderno <strong>Gae Aulenti</strong>, una visita verso il centro città attraverso <strong>Corso Como</strong> per arrivare presso il <strong>Castello Sforzesco</strong>. Proseguiremo per il <strong>Duomo</strong> e la <strong>Galleria Vittorio Emanuele</strong> e verso <strong>Piazza San Fedele</strong> e poi verso il <strong>Quartiere della Moda</strong> con via Montenapoleone e via della Spiga.',
        relax: 'Relax',
        youWillTaste: 'You will taste...',
        shopImageInCardAltText: 'Alt image...',
        shopTextInCard: 'Il punto di ristoro è la <strong>Gelateria Oggi di Corso Garibaldi</strong>. Immagina di entrare in un mondo di eccellenze, di profumi, di gusto e di artigianalità… e vedere gli ingredienti, freschissimi e rigorosamente selezionati a seconda della stagionalità, pronti ad essere lavorati sul tavolo e poi fusi insieme nella cucina dell’Officina di OGGI Gelato.<br/><br/>Utilizza qui il <strong>promocode</strong> che scoprirai durante il tour!',
        stop_0_name: 'Stazione Centrale',
        stop_0_description: 'La stazione di Milano Centrale è la principale stazione ferroviaria del capoluogo lombardo, la seconda d&apos;Italia per flusso di passeggeri, nonché una delle principali stazioni ferroviarie d&apos;Europa.',
        stop_0_link_1_url: 'https://it.wikipedia.org/wiki/Stazione_di_Milano_Centrale',
        stop_0_link_1_name: 'Stazione Centrale (from Wikipedia)',
        stop_0_link_2_url: 'https://www.esquire.com/it/lifestyle/viaggi/a19151611/stazione-centrale-milano-curiosita/',
        stop_0_link_2_name: 'Stazione Centrale (from Esquire)',
        stop_0_link_3_url: 'https://www.panorama.it/cultura/arte-idee/michelangelo-pistoletto-spiega-la-sua-mela-reintegrata/',
        stop_0_link_3_name: 'The apple (from Panorama)',
        stop_0_image_1_name: 'Stazione Centrale di Milano',
        stop_0_image_1_alt: 'First image of stazione Centrale',
        stop_0_image_1_description: 'Fu inaugurata nel 1931 per sostituire la vecchia stazione centrale che sorgeva nell&apos;attuale piazza della Repubblica, divenuta insufficiente a causa dell&apos;aumento del traffico ferroviario. La gestione degli impianti è affidata a Rete Ferroviaria Italiana (RFI) società del gruppo Ferrovie dello Stato, che classifica la stazione nella categoria "Platinum", mentre quella delle aree commerciali del monumentale fabbricato viaggiatori è di competenza di Grandi Stazioni. Nel novembre 2010 lo scalo è stato intitolato a santa Francesca Cabrini (1850-1917), fondatrice della congregazione delle Missionarie del Sacro Cuore di Gesù.',
        stop_0_image_2_name: 'La "Mela Reintegrata"',
        stop_0_image_2_alt: 'Second image of stazione Centrale',
        stop_0_image_2_description: 'Undici tonnellate di peso, 8 metri di altezza e 7 di diametro: una scultura monumentale, è “La Mela Reintegrata” realizzata dall’artista Michelangelo Pistoletto, simbolo di un futuro in cui la scienza e la tecnica si saldano finalmente con la natura, anziché allontanarci da essa.',
        stop_1_name: 'Piazza Gae Aulenti',
        stop_1_description: 'Piazza Gae Aulenti è una piazza circolare sopraelevata, di 100 metri di diametro situata nel Centro Direzionale di Milano. Rialzata di 6 metri rispetto al livello della strada, è stata progettata dall&apos;architetto argentino César Pelli[1] a completamento delle omonime torri, attualmente di proprietà del fondo Immobiliare Porta Nuova Garibaldi e concesse in locazione a diverse multinazionali tra cui la principale banca Unicredit[2]. L&apos;inaugurazione è avvenuta il giorno 8 dicembre 2012, con la conseguente intitolazione all&apos;architetto e designer Gae Aulenti.',
        stop_1_link_1_url: 'https://it.wikipedia.org/wiki/Piazza_Gae_Aulenti',
        stop_1_link_1_name: 'Piazza Gae Aulenti (from Wikipedia)',
        stop_1_link_2_url: 'https://www.lifegate.it/persone/stile-di-vita/piazza-gae-aulenti-milano-landscape-institute-award',
        stop_1_link_2_name: 'Piazza Gae Aulenti a Milano è tra le più belle al mondo, lo dice il premio Landscape',
        stop_1_image_1_name: 'PIazza Gae Aulenti',
        stop_1_image_1_alt: 'First image of stazione Centrale',
        stop_1_image_1_description: 'Come dalla vicina piazza Alvar Aalto, anche da Gae Aulenti si può godere ottimamente dello skyline di Milano. Sono visibili le Torri Garibaldi e gli adiacenti grattacieli del Bosco Verticale, il palazzo della giunta regionale lombarda, la Torre Galfa, la Torre Servizi Tecnici Comunali, il Grattacielo Pirelli, le torri residenziali Solaria, Solea, Aria e una porzione della Torre Diamante. Oltre a ciò, dal livello della piazza è possibile avere una visione d&apos;insieme imponente dell&apos;Unicredit Tower, che con i suoi 231 metri è il grattacielo più alto d&apos;Italia.',
        stop_2_name: 'OGGI Officina Gelato Gusto Italiano',
        stop_2_description: 'Nella cucina dell’Officina di OGGI Gelato vedrai creare solo ricette originali, frutto di anni di esperienza maturata sul campo, di tradizione artigiana e di un pizzico di follia, in un mix di grandi classici, riscoperta di antichi sapori e nuove, inedite combinazioni. Immagina di vedere i mantecati che lentamente prendono forma, pronti ad essere serviti. Da oggi, tutto davanti ai tuoi occhi.',
        stop_2_link_1_url: 'https://oggigelato.it/',
        stop_2_link_1_name: 'OGGI Officina Gelato Gusto Italiano (Official site)',
        stop_2_link_2_url: 'https://www.tripadvisor.it/ShowUserReviews-g187849-d14156464-r593531554-OGGI_Officina_Gelato_Gusto_Italiano-Milan_Lombardy.html',
        stop_2_link_2_name: 'Recensioni su OGGI (Tripadvisor)',
        stop_2_image_1_name: '',
        stop_2_image_1_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor.',
        stop_2_image_1_description: 'Nella cucina dell’Officina di OGGI Gelato, dove il caldo dei fornelli incontra il freddo del mantecatore, si può assistere ora dopo ora, ogni giorno, al taglio della frutta, sentire i profumi della tostatura, fatta rigorosamente a mano, osservare la preparazione dei mantecati e di tanto altro ancora. Il tutto nel rispetto della natura, con l’aiuto di partner d’eccezione e a sostegno – ad esempio – del progetto “Campagna Amica”, per valorizzare le risorse del nostro territorio e migliorare la qualità della vita di chi lavora in campagna.',
        stop_2_image_2_name: '',
        stop_2_image_2_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor.',
        stop_2_image_2_description: 'Le Spalmabili di OGGI sono prelibate creme artigianali ottenute da ingredienti di eccellenza selezionati sul territorio e lavorate esclusivamente nelle nostre Officine, secondo le ricette originali del Maestro Carmelo Chiaramida.',
        stop_3_name: 'Castello Sforzesco',
        stop_3_description: 'Il Castello Sforzesco (Castell Sforzesch in dialetto milanese), è un grande complesso fortificato che sorge a Milano poco fuori il centro storico della città.',
        stop_3_link_1_url: 'https://www.milanocastello.it/',
        stop_3_link_1_name: 'Castello Sforzesco (official site)',
        stop_3_link_2_url: 'https://it.wikipedia.org/wiki/Castello_Sforzesco',
        stop_3_link_2_name: 'Castello Sforzesco (from Wikipedia)',
        stop_3_image_1_name: '',
        stop_3_image_1_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor. Proin ac dictum nunc.',
        stop_3_image_1_description: 'Fu eretto nel XV secolo da Francesco Sforza, divenuto da poco Duca di Milano, sui resti di una precedente fortificazione medievale del XIV secolo nota come Castello di Porta Giovia (o Zobia). Nella stessa zona in cui sorgeva il Castello di Porta Giovia, in epoca romana, sorgeva l&apos;omonimo Castrum Portae Jovis, uno dei quattro castelli difensivi della Milano romana.',
        stop_3_image_2_name: '',
        stop_3_image_2_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor. Proin ac dictum nunc.',
        stop_3_image_2_description: 'Notevolmente trasformato e modificato nel corso dei secoli, il Castello Sforzesco fu, tra il Cinquecento e il Seicento, una delle principali cittadelle militari d&apos;Europa; restaurato in stile storicista da Luca Beltrami tra il 1890 e il 1905, è oggi sede di istituzioni culturali e di importanti musei. È uno dei più grandi castelli d&apos;Europa nonché uno dei principali simboli di Milano e della sua storia.',
        stop_4_name: 'Duomo di Milano',
        stop_4_description: 'Il Duomo di Milano, ufficialmente Basilica Cattedrale Metropolitana della Natività della Beata Vergine Maria (Dòmm de Milan in dialetto milanese), è la cattedrale dell&apos;arcidiocesi di Milano. Simbolo del capoluogo lombardo, e situato nell&apos;omonima piazza al centro della metropoli, è dedicata a Santa Maria Nascente. È la chiesa più grande d&apos;Italia (la Basilica di San Pietro, più grande, è infatti nel territorio della Città del Vaticano), la quarta nel mondo per superficie, la sesta per volume. È sede della parrocchia di Santa Tecla nel Duomo di Milano.',
        stop_4_link_1_url: 'https://www.duomomilano.it/it/',
        stop_4_link_1_name: 'Duomo di Milano (Official site)',
        stop_4_link_2_url: 'https://it.wikipedia.org/wiki/Duomo_di_Milano',
        stop_4_link_2_name: 'Duomo di Milano (Wikipedia)',
        stop_4_image_1_name: 'Duomo di Milano',
        stop_4_image_1_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor. Proin ac dictum nunc.',
        stop_4_image_1_description: 'Nel luogo in cui sorge il Duomo un tempo si trovavano l&apos;antica cattedrale di Santa Maria Maggiore, cattedrale invernale, e la basilica di Santa Tecla, cattedrale estiva. Dopo il crollo del campanile, l&apos;arcivescovo Antonio de&apos; Saluzzi, sostenuto dalla popolazione, promosse la ricostruzione di una nuova e più grande cattedrale (12 maggio 1386), che sorgesse sul luogo del più antico cuore religioso della città. Per il nuovo edificio si iniziò ad abbattere entrambe le chiese precedenti: Santa Maria Maggiore venne demolita per prima, Santa Tecla in un secondo momento, nel 1461-1462 (parzialmente ricostruita nel 1489 e definitivamente abbattuta nel 1548).',
        stop_4_image_2_name: 'Duomo di Milano - Facciata',
        stop_4_image_2_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor. Proin ac dictum nunc.',
        stop_4_image_2_description: 'Per quanto riguarda la facciata Pellegrino Tibaldi disegnò un progetto nel 1580, basato su un basamento a due piani animato da colonne corinzie giganti e con un&apos;edicola in corrispondenza della navata centrale, affiancata da obelischi. La morte di Carlo Borromeo nel 1584 significò l&apos;allontanamento del suo protetto che lasciò la città, mentre il cantiere veniva preso in mano dal suo rivale Martino Bassi, che inviò a Gregorio XIV, papa milanese, un nuovo progetto di facciata.',
        stop_4_image_3_name: 'La "Statua della Libertà"',
        stop_4_image_3_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor. Proin ac dictum nunc.',
        stop_4_image_3_description: 'È stata creata dallo scultore Camillo Pacetti, nel 1810, e si chiama La Legge Nuova. Non serve essere esperti d’arte per capire che la somiglianza con quell’altra statua, quella che ha avuto un cicinin di successo in più , è fortissima. E infatti, secondo diverse fonti e pareri, sarebbe proprio la scultura creata dal Pacetti in epoca napoleonica la fonte di ispirazione di Frédéric Auguste Bartholdi per la creazione della Statua della Libertà di New York.',
        stop_5_name: 'Piazza della Scale e Teatro',
        stop_5_description: 'Piazza della Scala è un&apos;aggiunta relativamente recente all&apos;urbanistica del centro di Milano, dato che è stata creata nel 1858 grazie alla demolizione di diversi caseggiati che si trovavano di fronte all&apos;omonimo teatro, e tra questi del palazzetto in cui aveva sede lo storico Caffè Martini.',
        stop_5_link_1_url: 'http://www.teatroallascala.org/',
        stop_5_link_1_name: 'Teatro alla Scala (Official site)',
        stop_5_link_2_url: 'https://it.wikipedia.org/wiki/Piazza_della_Scala',
        stop_5_link_2_name: 'Piazza della Scala (Wikipedia)',
        stop_5_image_1_name: 'Teatro alla Scala',
        stop_5_image_1_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor. Proin ac dictum nunc.',
        stop_5_image_1_description: 'Il Teatro alla Scala, citato solitamente in maniera informale come la Scala, è il principale teatro d&apos;opera di Milano. Considerato tra i più prestigiosi teatri al mondo, ospita da 242 anni i principali artisti nel campo internazionale dell&apos;opera, e, più in generale, della musica classica, spesso commissionando opere tuttora presenti nei cartelloni dei maggiori teatri nel mondo.',
        stop_5_image_2_name: 'La statua di Leonardo da Vinci si trova in Piazza della Scala, in bella evidenza, proprio davanti al tempio internazionale del bel canto. Il monumento offre un’immagine solenne e austera dello scienziato e ai piedi si trovano quattro suoi discepoli. La statua è stata realizzata con il marmo bianco di Carrara mentre, per il basamento, è stato utilizzato il granito proveniente da Baveno.',
        stop_5_image_2_alt: 'La statua di Leonardo da Vinci si trova in Piazza della Scala, in bella evidenza, proprio davanti al tempio internazionale del bel canto. Il monumento offre un’immagine solenne e austera dello scienziato e ai piedi si trovano quattro suoi discepoli. La statua è stata realizzata con il marmo bianco di Carrara mentre, per il basamento, è stato utilizzato il granito proveniente da Baveno.',
        stop_5_image_2_description: 'Statua di Leonardo da Vinci',
        stop_6_name: 'Via Monte Napoleone',
        stop_6_description: 'Via Monte Napoleone è una via del centro di Milano, considerata una delle zone più lussuose e uno dei maggiori centri degli acquisti del prêt-à-porter. Via Monte Napoleone è nota come la via più cara di Europa.',
        stop_6_link_1_url: 'https://it.wikipedia.org/wiki/Via_Monte_Napoleone',
        stop_6_link_1_name: 'Via Monte Napoleone (Wikipedia)',
        stop_6_image_1_name: 'Via Monte Napoleone',
        stop_6_image_1_alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sodales ex, nec mollis tortor. Proin ac dictum nunc.',
        stop_6_image_1_description: 'La via nel corso della sua storia ha ospitato diversi illustri personaggi milanesi: a Palazzo Taverna (civico 2) visse e morì lo scrittore Carlo Porta, mentre sul fronte opposto, il civico 1, era la casa in cui viveva ed era morto il poeta e scrittore Tommaso Grossi. Sempre in questa via Giuseppe Verdi avrebbe composto nel 1840 il suo Nabucco. Storicamente in passato la strada aveva il soprannome di el Quartier de Riverissi, in riferimento all&apos;usanza dei signori milanesi di togliersi il cappello in segno di riverenza, per salutare una signora che qui aveva la propria dimora.'
      }
    }
  }
}

export default messages
