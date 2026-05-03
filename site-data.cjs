const pages = [
  {
    path: "o-nas",
    title: "O meni",
    eyebrow: "The Quantum Doctor",
    image: "wellness-detail.png",
    imageAlt: "Mirna wellness postavitev v sodobnem terapevtskem prostoru",
    intro: "Quantum Health je holistični center v Ljubljani, ki ga vodi dr. Milenca Omerzu Pevec, DNM, Ph.D. Pristop povezuje kvantno-integrativno medicino, izkušnje z estetiko in razumevanje človeka kot celote.",
    sections: [
      {
        heading: "Celostna obravnava posameznika",
        paragraphs: [
          "V ospredju ni samo posamezen simptom ali estetski cilj, ampak širša slika: življenjski ritem, navade, stresni vzorci, počutje, regeneracija in odnos do telesa. Tak način dela pomaga izbrati obravnavo, ki je bolj osebna in manj generična.",
          "Posvet je namenjen temu, da se najprej razjasnijo cilji. Pri nekaterih je fokus na vitalnosti in notranjem ravnovesju, pri drugih na negi kože, oblikovanju telesa ali podpori pri spremembi življenjskih navad."
        ]
      },
      {
        heading: "Znanje, estetika in občutek za človeka",
        paragraphs: [
          "Center združuje področja, ki se pogosto obravnavajo ločeno: integrativno zdravje, psihološke in energijske vzorce, estetske tehnologije in podporne wellness metode. Namen je ustvariti urejen, miren in strokoven prostor za postopno spremembo.",
          "Obravnava se začne s pogovorom, nadaljuje z izborom primernih postopkov in se po potrebi prilagaja glede na odziv telesa ter želje posameznika."
        ]
      }
    ],
    facts: ["Dr. Milenca Omerzu Pevec, DNM, Ph.D", "Cesta na Brdo 85, Ljubljana", "Kvantno-integrativni in estetski pristop"],
    related: ["kvantno-integrativna-medicina", "estetika-in-oblikovanje-telesa", "mnenja-strank"]
  },
  {
    path: "kvantno-integrativna-medicina",
    title: "Kvantno-integrativna medicina",
    eyebrow: "Zavest, telo in vitalnost",
    image: "integrative-room.png",
    imageAlt: "Svetel prostor za posvet in integrativno obravnavo",
    intro: "Kvantno-integrativna medicina raziskuje povezave med zavestjo, telesnimi procesi, navadami in vzorci, ki lahko vplivajo na zdravje, počutje in kakovost življenja.",
    sections: [
      {
        heading: "Kje se pristop začne",
        paragraphs: [
          "Prvi korak je razumevanje človeka v kontekstu njegovega življenja. V praksi to pomeni pogovor o počutju, obremenitvah, energiji, odnosu do hrane, stresu, regeneraciji in ciljih, ki jih želi oseba doseči.",
          "Metode se ne uporabljajo kot univerzalna rešitev za vse, ampak kot izbor orodij, ki lahko podprejo več ravni: telesno, čustveno, vedenjsko in energijsko."
        ]
      },
      {
        heading: "Področja dela",
        paragraphs: [
          "V to vejo spadajo kvantna integrativna medicina, kvantna psihologija, aurikuloterapija, frekvenčna terapija, neurofeedback in biofeedback, intuitivno prehranjevanje, integrativni wellness ter kreativnost v healthcare managementu.",
          "Vsaka metoda ima svoj namen. Nekatere so usmerjene v prepoznavanje notranjih vzorcev, druge v regulacijo, umirjanje ali podporo spremembam življenjskih navad."
        ],
        bullets: ["Kvantna psihologija", "Aurikuloterapija", "Frekvenčna terapija", "Neurofeedback in biofeedback", "Intuitivno prehranjevanje", "Integrativni wellness"]
      }
    ],
    children: [
      "kvantna-integrativna-medicina",
      "kvantna-psihologija",
      "aurikuloterapija",
      "frekvencna-terapija",
      "neurofeedback-biofeedback",
      "intuitivno-prehranjevanje",
      "integrativni-wellness",
      "kreativnost-in-healthcare-management"
    ],
    related: ["estetika-in-oblikovanje-telesa", "o-nas", "mnenja-strank"]
  },
  {
    path: "kvantno-integrativna-medicina/kvantna-integrativna-medicina",
    title: "Kvantna integrativna medicina",
    eyebrow: "Celostno razumevanje zdravja",
    image: "integrative-room.png",
    imageAlt: "Sodoben prostor za integrativno svetovanje",
    intro: "Ta obravnava združuje idejo, da so telo, zavest, navade in okolje medsebojno povezani. Namenjena je iskanju globljega konteksta za počutje, utrujenost, stres in ponavljajoče se vzorce.",
    sections: [
      {
        heading: "Več kot posamezen simptom",
        paragraphs: [
          "Pri kvantno-integrativnem delu se vprašanje ne ustavi pri tem, kaj se kaže na površini. Pomembno je tudi, kdaj se težava pojavlja, kaj jo ojača, kakšen je življenjski tempo in kako se telo odziva na spremembe.",
          "Tak pristop pomaga sestaviti širši zemljevid: fizično stanje, psihološki odziv, prehranske navade, stres, spanje, odzive telesa in energijsko ravnovesje."
        ]
      },
      {
        heading: "Za koga je primerna",
        paragraphs: [
          "Primerna je za ljudi, ki želijo bolj poglobljen pogled na svoje počutje in so pripravljeni sodelovati v procesu. Posebej uporabna je takrat, ko oseba želi povezati osebne cilje z bolj zdravimi navadami in boljšim stikom s telesom.",
          "Obravnava lahko služi kot samostojen posvet ali kot izhodišče za izbor drugih metod v centru."
        ],
        bullets: ["razumevanje ponavljajočih se vzorcev", "podpora pri stresu in regeneraciji", "usmerjanje k bolj uravnoteženim navadam", "individualen načrt nadaljnjih korakov"]
      }
    ],
    related: ["kvantna-psihologija", "frekvencna-terapija", "integrativni-wellness"]
  },
  {
    path: "kvantno-integrativna-medicina/kvantna-psihologija",
    title: "Kvantna psihologija",
    eyebrow: "Vzorci, zavest in notranje spremembe",
    image: "integrative-room.png",
    imageAlt: "Mirno svetovalno okolje z naravno svetlobo",
    intro: "Kvantna psihologija se osredotoča na povezavo med miselnimi vzorci, čustvenim odzivom, zaznavanjem telesa in načinom, kako človek izbira ali ponavlja določene življenjske strategije.",
    sections: [
      {
        heading: "Prepoznavanje notranjih vzorcev",
        paragraphs: [
          "Veliko odločitev, reakcij in navad nastaja iz ponavljajočih se notranjih programov. Ko jih oseba začne prepoznavati, se odpre prostor za bolj zavestne izbire in manj avtomatske odzive.",
          "Delo ni namenjeno hitremu popravljanju človeka, ampak razumevanju, zakaj se določene teme vračajo in kako se lahko posameznik nanje odzove z več jasnosti."
        ]
      },
      {
        heading: "Praktična uporaba",
        paragraphs: [
          "V praksi lahko obravnava podpre spremembo odnosa do stresa, telesa, hrane, dela ali osebnih meja. Pomemben del je pogovor, ki pomaga povezati doživljanje z vsakdanjimi situacijami.",
          "Metoda se lahko poveže tudi z integrativnim wellnessom, frekvenčno terapijo ali prehranskim usmerjanjem, kadar je to za posameznika smiselno."
        ],
        bullets: ["stresni odzivi", "samopodoba in odnos do telesa", "življenjske odločitve", "podpora pri spremembi navad"]
      }
    ],
    related: ["kvantna-integrativna-medicina", "integrativni-wellness", "intuitivno-prehranjevanje"]
  },
  {
    path: "kvantno-integrativna-medicina/aurikuloterapija",
    title: "Aurikuloterapija",
    eyebrow: "Uho kot refleksna mapa telesa",
    image: "wellness-still-life.png",
    imageAlt: "Nežna wellness postavitev za podporne terapije",
    intro: "Aurikuloterapija uporablja točke na ušesu kot refleksno področje, prek katerega se lahko podpira uravnavanje telesnih odzivov, sproščanje in boljša notranja regulacija.",
    sections: [
      {
        heading: "Nežna podporna metoda",
        paragraphs: [
          "Metoda izhaja iz razumevanja, da uho odraža različna področja telesa. Z obravnavo izbranih točk se lahko podpre določene procese, kot so umirjanje, regulacija napetosti in spremljanje sprememb v počutju.",
          "Pred obravnavo se najprej določi namen: ali gre za podporo pri stresu, navadah, napetosti, apetitu ali splošnem ravnovesju."
        ]
      },
      {
        heading: "Kako se vključi v načrt",
        paragraphs: [
          "Aurikuloterapija se pogosto uporablja kot del širše celostne obravnave. Lahko dopolni pogovor, prehransko usmerjanje, integrativni wellness ali druge podporne metode.",
          "Pomembno je postopno spremljanje odziva, saj se občutki in učinki lahko razlikujejo med posamezniki."
        ],
        bullets: ["podpora pri sproščanju", "spremljanje navad", "dopolnitev integrativnega načrta", "individualen izbor točk"]
      }
    ],
    related: ["frekvencna-terapija", "integrativni-wellness", "kvantno-integrativna-medicina"]
  },
  {
    path: "kvantno-integrativna-medicina/frekvencna-terapija",
    title: "Frekvenčna terapija",
    eyebrow: "Podpora energijskemu ravnovesju",
    image: "integrative-room.png",
    imageAlt: "Minimalen prostor za terapevtsko obravnavo",
    intro: "Frekvenčna terapija je podporna metoda, ki temelji na ideji, da se telo odziva na različne frekvenčne dražljaje in informacije. V centru se uporablja znotraj širšega celostnega pristopa.",
    sections: [
      {
        heading: "Namen obravnave",
        paragraphs: [
          "Cilj ni izolirana obravnava ene težave, temveč podpora organizmu pri vzpostavljanju boljšega ravnovesja. Zato se frekvenčni pristop povezuje s posvetom, oceno počutja in drugimi metodami, kadar je to smiselno.",
          "Obravnava je lahko namenjena sprostitvi, podpori regeneracije, boljšemu stiku s telesom in spremljanju sprememb skozi čas."
        ]
      },
      {
        heading: "Vključitev v celostni proces",
        paragraphs: [
          "Frekvenčna terapija je najbolj smiselna, ko je del širše slike. Posameznik skupaj s terapevtom določi področje fokusa in nato spremlja, kako se telo odziva.",
          "Ker so odzivi individualni, je pomembno realno pričakovanje, postopnost in odprt pogovor pred ter po obravnavi."
        ],
        bullets: ["podpora sproščanju", "regeneracija in vitalnost", "dopolnitev kvantno-integrativnega posveta", "nežen pristop brez agresivnih postopkov"]
      }
    ],
    related: ["aurikuloterapija", "neurofeedback-biofeedback", "integrativni-wellness"]
  },
  {
    path: "kvantno-integrativna-medicina/neurofeedback-biofeedback",
    title: "Neurofeedback & Biofeedback",
    eyebrow: "Učenje samoregulacije",
    image: "integrative-room.png",
    imageAlt: "Terapevtski prostor s sodobno opremo",
    intro: "Neurofeedback in biofeedback sta metodi, ki pomagata opazovati odzive telesa in živčnega sistema. Namen je boljše zavedanje, učenje regulacije in podpora pri spremembi odzivnih vzorcev.",
    sections: [
      {
        heading: "Povratna informacija telesa",
        paragraphs: [
          "Biofeedback temelji na tem, da človek lažje spremeni nekaj, kar lahko opazuje. Ko dobi povratno informacijo o telesnem odzivu, lahko postopoma razvija več nadzora in občutka za regulacijo.",
          "Neurofeedback se bolj osredotoča na možgansko aktivnost in vzorce delovanja živčnega sistema. V obeh primerih je cilj učenje, ne prisila."
        ]
      },
      {
        heading: "Področja uporabe",
        paragraphs: [
          "Metodi se pogosto povezujeta s stresom, koncentracijo, sproščanjem, spanjem in občutkom notranje stabilnosti. V centru se uporabljata kot del celostnega načrta, kadar sta primerna za cilje posameznika.",
          "Pred začetkom je pomembno pojasniti pričakovanja in izbrati realen ritem obravnav."
        ],
        bullets: ["samoregulacija", "zaznavanje telesnih odzivov", "podpora koncentraciji", "umirjanje in sproščanje"]
      }
    ],
    related: ["frekvencna-terapija", "kvantna-psihologija", "integrativni-wellness"]
  },
  {
    path: "kvantno-integrativna-medicina/intuitivno-prehranjevanje",
    title: "Intuitivno prehranjevanje",
    eyebrow: "Odnos do hrane in telesa",
    image: "wellness-still-life.png",
    imageAlt: "Zeliščni čaj, listi in dnevnik na svetli leseni mizi",
    intro: "Intuitivno prehranjevanje je usmerjeno v boljši stik s telesom, občutkom lakote in sitosti ter prepoznavanje navad, ki pogosto vodijo v avtomatsko hranjenje ali stroge cikle odpovedovanja.",
    sections: [
      {
        heading: "Bolj prijazen odnos do hrane",
        paragraphs: [
          "Namesto rigidnih pravil se obravnava osredotoči na poslušanje telesa, ritma, čustvenih sprožilcev in življenjskih okoliščin. Cilj je več jasnosti in manj boja s hrano.",
          "Pomemben del procesa je razlikovanje med fizično potrebo, navado, stresom, utrujenostjo in čustvenim odzivom."
        ]
      },
      {
        heading: "Vključitev v življenjski slog",
        paragraphs: [
          "Prehranske spremembe so najbolj trajne, ko so izvedljive v realnem življenju. Zato se pogleda, kako oseba dela, spi, počiva, nakupuje, načrtuje obroke in kako se odziva v stresu.",
          "Intuitivno prehranjevanje se lahko poveže s kvantno psihologijo, integrativnim wellnessom ali estetskimi cilji, kadar je odnos do telesa pomemben del procesa."
        ],
        bullets: ["lakota in sitost", "čustveni sprožilci", "navade in ritem obrokov", "trajnejša sprememba odnosa do telesa"]
      }
    ],
    related: ["kvantna-psihologija", "integrativni-wellness", "o-nas"]
  },
  {
    path: "kvantno-integrativna-medicina/integrativni-wellness",
    title: "Integrativni Wellness",
    eyebrow: "Podpora ravnovesju",
    image: "wellness-still-life.png",
    imageAlt: "Wellness tihožitje z zeliščnim čajem in naravnimi materiali",
    intro: "Integrativni wellness združuje podporne pristope za sproščanje, regeneracijo, življenjske navade in boljši stik s telesom. Namenjen je ljudem, ki želijo postopno, celostno podporo.",
    sections: [
      {
        heading: "Ko telo potrebuje več prostora",
        paragraphs: [
          "Veliko ljudi pride v center v obdobju preobremenjenosti, utrujenosti ali občutka, da potrebujejo spremembo, vendar ne vedo, kje začeti. Integrativni wellness pomaga oblikovati bolj umirjen in izvedljiv načrt.",
          "Obravnava lahko vključuje pogovor, sprostitvene metode, podporo pri navadah in povezovanje z drugimi terapijami."
        ]
      },
      {
        heading: "Stress management in pain management",
        paragraphs: [
          "Pomembni področji sta upravljanje stresa in podpora pri obvladovanju bolečine. Pri tem se upošteva, da se telo, živčni sistem in način razmišljanja med seboj nenehno odzivajo.",
          "Cilj je izboljšati občutek notranje stabilnosti in pomagati posamezniku razviti bolj podporne vsakdanje rutine."
        ],
        bullets: ["stress management", "pain management", "regeneracija", "navade, počitek in ritem dneva"]
      }
    ],
    related: ["kvantna-psihologija", "intuitivno-prehranjevanje", "frekvencna-terapija"]
  },
  {
    path: "kvantno-integrativna-medicina/kreativnost-in-healthcare-management",
    title: "Kreativnost in HealthCare Management",
    eyebrow: "Inovativno razmišljanje v zdravju",
    image: "integrative-room.png",
    imageAlt: "Svetel delovni prostor za strateški posvet",
    intro: "Kreativnost v healthcare managementu povezuje razumevanje človeka, organizacijskih procesov, zdravstvenih izzivov in novih načinov razmišljanja o podpori posamezniku.",
    sections: [
      {
        heading: "Zdravje kot širši sistem",
        paragraphs: [
          "Zdravje ni samo osebna tema, ampak tudi organizacijska, komunikacijska in kulturna. Način, kako ljudje delajo, sprejemajo odločitve in vodijo spremembe, lahko pomembno vpliva na kakovost življenja.",
          "Ta vsebina je namenjena tistim, ki jih zanima preplet osebnega razvoja, zdravstvenega managementa, kreativnosti in bolj celostnih modelov podpore."
        ]
      },
      {
        heading: "Praktični poudarki",
        paragraphs: [
          "V ospredju so ustvarjalno reševanje problemov, boljša komunikacija, razumevanje potreb posameznika in načrtovanje pristopov, ki niso le tehnično pravilni, temveč tudi človeško izvedljivi.",
          "Gre za področje, ki dopolnjuje klasično obravnavo in spodbuja bolj prožen pogled na zdravje."
        ],
        bullets: ["kreativno reševanje zdravstvenih izzivov", "komunikacija in procesi", "celostno vodenje sprememb", "človek v središču sistema"]
      }
    ],
    related: ["kvantno-integrativna-medicina", "integrativni-wellness", "o-nas"]
  },
  {
    path: "estetika-in-oblikovanje-telesa",
    title: "Estetika in oblikovanje telesa",
    eyebrow: "Koža, tonus in silhueta",
    image: "aesthetic-device.png",
    imageAlt: "Sodobna estetska oprema v svetlem tretma prostoru",
    intro: "Estetski del centra združuje obravnave za obraz, kožo, odstranjevanje poraščenosti, oblikovanje telesa in podporo boljšemu tonusu. Vsaka izbira se začne s posvetom.",
    sections: [
      {
        heading: "Tehnologije z individualnim načrtom",
        paragraphs: [
          "Estetska obravnava je najboljša, ko je prilagojena osebi in ne samo trendu. Zato se pred izbiro postopka pregleda cilj, stanje kože ali telesa, pričakovanja in primernost metode.",
          "V ponudbi so ultrazvočna lipoliza, radiofrekvenca, laserska epilacija, EMBipolar Sculpt Neo, DermaClear, pomlajevanje obraza ter biorevitalizacija."
        ],
        bullets: ["oblikovanje telesa", "laserska epilacija", "nega in pomlajevanje obraza", "čiščenje in hidratacija kože"]
      },
      {
        heading: "Naraven, urejen rezultat",
        paragraphs: [
          "Cilj ni pretirana sprememba, ampak bolj svež, negovan in uravnotežen videz. Pri telesnih obravnavah je poudarek na postopnosti, realnih pričakovanjih in dopolnitvi z življenjskimi navadami.",
          "Estetske storitve se lahko smiselno povežejo tudi z integrativnim wellnessom, kadar posameznik želi celostno podporo."
        ]
      }
    ],
    children: [
      "oblikovanje-telesa-s-pomocjo-ultrazvocne-lipolize-in-unipolarne-radiofrekvence",
      "dermaclear-3-postopki-ciscenja-in-mocne-hidratacije-obraza",
      "laserska-epilacija-trajno-odstranjevanje-porascenosti-2",
      "embipolar-sculpt-neo",
      "pomlajevanje-obraza-ultrazvok-za-obraz",
      "biorevitalizacija-in-pomlajevanje-obraza"
    ],
    related: ["kvantno-integrativna-medicina", "laserska-epilacija", "o-nas"]
  },
  {
    path: "estetika-in-oblikovanje-telesa/oblikovanje-telesa-s-pomocjo-ultrazvocne-lipolize-in-unipolarne-radiofrekvence",
    title: "Oblikovanje telesa z ultrazvočno lipolizo in unipolarno radiofrekvenco",
    eyebrow: "Tonus, kontura in mikrocirkulacija",
    image: "aesthetic-device.png",
    imageAlt: "Estetska oprema in brisače v sodobnem prostoru",
    intro: "Oblikovanje telesa s pomočjo ultrazvočne lipolize in unipolarne radiofrekvence je namenjeno podpori videza kože, tonusa in konture izbranih predelov telesa.",
    sections: [
      {
        heading: "Kako se pristop uporablja",
        paragraphs: [
          "Ultrazvočna lipoliza je usmerjena v obravnavo maščobnih oblog, radiofrekvenca pa v segrevanje tkiva in podporo boljšemu videzu kože. Skupaj lahko tvorita premišljen program za telo.",
          "Pred začetkom je pomembno določiti področja obravnave, pričakovanja in morebitne omejitve. Rezultati so povezani tudi z življenjskim slogom, hidracijo, prehrano in gibanjem."
        ]
      },
      {
        heading: "Za koga je smiselna",
        paragraphs: [
          "Primerna je za osebe, ki želijo neinvazivno podporo pri oblikovanju postave in izboljšanju občutka čvrstosti kože. Ni nadomestilo za zdrav življenjski slog, lahko pa ga dobro dopolni.",
          "Program se običajno načrtuje v več obiskih, pri čemer se spremlja odziv telesa."
        ],
        bullets: ["lokalna obravnava izbranih predelov", "podpora tonusu kože", "neinvaziven pristop", "individualen ritem terapij"]
      }
    ],
    related: ["embipolar-sculpt-neo", "estetika-in-oblikovanje-telesa", "integrativni-wellness"]
  },
  {
    path: "estetika-in-oblikovanje-telesa/dermaclear-3-postopki-ciscenja-in-mocne-hidratacije-obraza",
    title: "DermaClear - čiščenje in močna hidratacija obraza",
    eyebrow: "Čista, navlažena in sveža koža",
    image: "wellness-detail.png",
    imageAlt: "Nega obraza s stekleničkami in čistimi brisačami",
    intro: "DermaClear je namenjen negi obraza, ki združuje čiščenje, osvežitev in hidracijo. Primeren je za kožo, ki potrebuje bolj urejen videz in občutek svežine.",
    sections: [
      {
        heading: "Tri faze nege",
        paragraphs: [
          "Postopek je zasnovan kot kombinacija čiščenja, odstranjevanja nečistoč in intenzivnejše hidracije. Cilj je, da je koža po obravnavi bolj gladka, sveža in pripravljena na nadaljnjo nego.",
          "Pred tretmajem se pogleda stanje kože in občutljivost, saj mora biti nega prilagojena posamezniku."
        ]
      },
      {
        heading: "Kdaj izbrati DermaClear",
        paragraphs: [
          "Smiseln je pred posebnimi dogodki, kot redna podpora negi ali kot uvod v druge estetske postopke. Dobro deluje pri ljudeh, ki želijo urejen rezultat brez invazivnega posega.",
          "Tretma se lahko kombinira z drugimi postopki za pomlajevanje obraza, če je koža za to primerna."
        ],
        bullets: ["čiščenje obraza", "hidratacija", "svež videz kože", "podpora redni negi"]
      }
    ],
    related: ["pomlajevanje-obraza-ultrazvok-za-obraz", "biorevitalizacija-in-pomlajevanje-obraza", "estetika-in-oblikovanje-telesa"]
  },
  {
    path: "estetika-in-oblikovanje-telesa/laserska-epilacija-trajno-odstranjevanje-porascenosti-2",
    title: "Laserska epilacija - trajno odstranjevanje poraščenosti",
    eyebrow: "Gladkejša koža, manj vraščenih dlak",
    image: "aesthetic-device.png",
    imageAlt: "Minimalna estetska oprema za laserske tretmaje",
    intro: "Laserska epilacija je namenjena zmanjšanju neželene poraščenosti na izbranih predelih obraza ali telesa. Potek se prilagodi tipu kože, poraščenosti in ciljem posameznika.",
    sections: [
      {
        heading: "Postopno zmanjšanje poraščenosti",
        paragraphs: [
          "Laserska epilacija deluje v ciklih, zato je za dober rezultat praviloma potrebnih več obiskov. Med posvetom se pojasni, kateri predeli so primerni in kakšen ritem obravnav je smiseln.",
          "Pred tretmajem je pomembna pravilna priprava kože, po tretmaju pa zaščita in upoštevanje navodil za nego."
        ]
      },
      {
        heading: "Prednosti za vsakdan",
        paragraphs: [
          "Veliko ljudi se za epilacijo odloči zaradi manj pogostega britja, manj draženja in bolj gladkega občutka kože. Posebej dobrodošla je pri predelih, kjer se dlake pogosto vraščajo.",
          "Obravnava se lahko načrtuje kot samostojen program ali kot del širše estetske nege."
        ],
        bullets: ["obraz in telo", "postopen rezultat", "manj draženja kože", "oseben načrt obiskov"]
      }
    ],
    related: ["laserska-epilacija", "estetika-in-oblikovanje-telesa", "dermaclear-3-postopki-ciscenja-in-mocne-hidratacije-obraza"]
  },
  {
    path: "estetika-in-oblikovanje-telesa/embipolar-sculpt-neo",
    title: "EMBipolar Sculpt Neo",
    eyebrow: "Oblikovanje, tonus in podpora mišicam",
    image: "aesthetic-device.png",
    imageAlt: "Sodobna oprema za oblikovanje telesa",
    intro: "EMBipolar Sculpt Neo je storitev za oblikovanje telesa, ki je usmerjena v podporo mišičnemu tonusu in konturi izbranih predelov. Uporablja se v okviru estetskega načrta.",
    sections: [
      {
        heading: "Sodobna podpora telesu",
        paragraphs: [
          "Tretma je namenjen ljudem, ki želijo izboljšati občutek čvrstosti, obliko in tonus. Pred začetkom se določi cilj, področje obravnave in realno pričakovanje glede poteka.",
          "Kot pri drugih telesnih postopkih je rezultat najbolj smiseln, ko se poveže z gibanjem, hidracijo in urejenimi navadami."
        ]
      },
      {
        heading: "Program po meri",
        paragraphs: [
          "Obravnava se lahko uporablja samostojno ali v kombinaciji z drugimi metodami oblikovanja telesa. Pomembno je spremljanje odziva in prilagajanje načrta.",
          "Prednost takega pristopa je, da se ne osredotoči samo na en obisk, ampak na celoten proces."
        ],
        bullets: ["podpora tonusu", "ciljana področja", "kombinacija s telesnimi obravnavami", "individualen program"]
      }
    ],
    related: ["oblikovanje-telesa-s-pomocjo-ultrazvocne-lipolize-in-unipolarne-radiofrekvence", "estetika-in-oblikovanje-telesa", "integrativni-wellness"]
  },
  {
    path: "estetika-in-oblikovanje-telesa/pomlajevanje-obraza-ultrazvok-za-obraz",
    title: "Pomlajevanje obraza",
    eyebrow: "Ultrazvok za obraz",
    image: "wellness-detail.png",
    imageAlt: "Nega obraza v svetlem wellness okolju",
    intro: "Pomlajevanje obraza z ultrazvočnim pristopom je namenjeno podpori bolj svežega videza kože, boljšega občutka napetosti in negovanega izraza brez pretirano agresivnega postopka.",
    sections: [
      {
        heading: "Nežen, postopno viden rezultat",
        paragraphs: [
          "Obravnava se osredotoča na kakovost kože in občutek tonusa. Pred postopkom se pogleda stanje kože, področja, ki osebo motijo, in želena stopnja spremembe.",
          "Namen ni spremeniti obraz, ampak podpreti svežino, teksturo in bolj urejen videz."
        ]
      },
      {
        heading: "Vloga redne nege",
        paragraphs: [
          "Rezultat estetskih tretmajev je vedno povezan z vsakdanjo nego, zaščito kože in življenjskim ritmom. Zato je priporočljivo, da se pomlajevanje poveže z dobrimi navadami in po potrebi z drugimi negovalnimi postopki.",
          "Tretma se lahko smiselno dopolni z DermaClear nego ali biorevitalizacijo."
        ],
        bullets: ["svež videz", "podpora tonusu", "nega teksture kože", "individualen posvet pred postopkom"]
      }
    ],
    related: ["dermaclear-3-postopki-ciscenja-in-mocne-hidratacije-obraza", "biorevitalizacija-in-pomlajevanje-obraza", "estetika-in-oblikovanje-telesa"]
  },
  {
    path: "estetika-in-oblikovanje-telesa/biorevitalizacija-in-pomlajevanje-obraza",
    title: "Biorevitalizacija in pomlajevanje obraza",
    eyebrow: "Hidracija, sijaj in kakovost kože",
    image: "wellness-detail.png",
    imageAlt: "Mirna postavitev za nego kože in obraza",
    intro: "Biorevitalizacija je namenjena podpori bolj navlažene, sveže in vitalne kože. V kombinaciji s pomlajevalnimi pristopi pomaga izboljšati občutek kakovosti kože.",
    sections: [
      {
        heading: "Koža potrebuje vlago in podporo",
        paragraphs: [
          "Koža se z leti, stresom, soncem in načinom življenja spreminja. Biorevitalizacija je usmerjena v podporo hidraciji in bolj živemu videzu kože, pri čemer se upošteva njena trenutna občutljivost.",
          "Pred obravnavo se pregleda stanje kože in izbere način, ki je primeren za posameznika."
        ]
      },
      {
        heading: "Povezava z drugimi postopki",
        paragraphs: [
          "Biorevitalizacija se lahko uporablja samostojno ali kot del širšega programa nege obraza. Smiselna je zlasti takrat, ko je cilj izboljšati teksturo, sijaj in občutek prožnosti kože.",
          "Za dolgotrajnejši učinek je pomembna tudi domača nega in zaščita kože."
        ],
        bullets: ["hidratacija kože", "svežina in sijaj", "podpora prožnosti", "dopolnitev programa nege obraza"]
      }
    ],
    related: ["pomlajevanje-obraza-ultrazvok-za-obraz", "dermaclear-3-postopki-ciscenja-in-mocne-hidratacije-obraza", "estetika-in-oblikovanje-telesa"]
  },
  {
    path: "laserska-epilacija",
    title: "Laserska epilacija - rezervirajte termin",
    eyebrow: "Namenska landing stran",
    image: "aesthetic-device.png",
    imageAlt: "Estetski tretma prostor za lasersko epilacijo",
    intro: "Namenska stran za lasersko epilacijo je zasnovana za hitro rezervacijo termina, osnovne informacije o pripravi in jasen pregled, kaj lahko pričakujete.",
    sections: [
      {
        heading: "Pred terminom",
        paragraphs: [
          "Pred prvim obiskom je smiselno opraviti posvet, kjer se pregleda predel obravnave, tip kože in morebitne omejitve. Dobra priprava pomaga, da je tretma bolj predvidljiv in prijeten.",
          "Ker dlake rastejo v ciklih, je običajno potreben program več obravnav. Točen ritem se določi individualno."
        ]
      },
      {
        heading: "Po tretmaju",
        paragraphs: [
          "Po laserski epilaciji je pomembna nežna nega kože in zaščita pred soncem. Priporočila se prilagodijo predelu in odzivu kože.",
          "Za dodatna vprašanja je najprimernejši neposreden kontakt s centrom."
        ],
        bullets: ["posvet pred prvim obiskom", "več zaporednih terminov", "nega kože po obravnavi", "rezervacija termina"]
      }
    ],
    related: ["laserska-epilacija-trajno-odstranjevanje-porascenosti-2", "estetika-in-oblikovanje-telesa", "kontakt"]
  },
  {
    path: "mnenja-strank",
    title: "Mnenja strank",
    eyebrow: "Izkušnje in vtisi",
    image: "wellness-still-life.png",
    imageAlt: "Umirjen kotiček za zapisovanje vtisov in posvet",
    intro: "Stranke pri centru pogosto izpostavljajo individualen pristop, miren prostor, občutek slišanosti in strokovno razlago možnosti pred obravnavo.",
    sections: [
      {
        heading: "Kaj ljudje največkrat cenijo",
        paragraphs: [
          "Pri celostnih in estetskih storitvah je zaupanje zelo pomembno. Zato je velik del izkušnje povezan z razlago, občutkom varnosti in tem, da oseba razume, zakaj je določen postopek primeren zanjo.",
          "Mnenja so na tej lokalni strani predstavljena kot povzetek poudarkov, brez kopiranja posameznih zapisov z izvorne strani."
        ],
        bullets: ["oseben posvet", "mirna in urejena obravnava", "strokovna razlaga", "celosten občutek podpore"]
      },
      {
        heading: "Pred prvim obiskom",
        paragraphs: [
          "Najboljši prvi korak je kratek kontakt in dogovor za posvet. Tako se lahko že pred obiskom razjasni, ali oseba išče estetsko obravnavo, integrativno podporo ali kombinacijo obojega.",
          "Vprašanja so dobrodošla, saj pomagajo oblikovati realna pričakovanja in boljši načrt."
        ]
      }
    ],
    related: ["o-nas", "kvantno-integrativna-medicina", "estetika-in-oblikovanje-telesa"]
  },
  {
    path: "politika-zasebnosti",
    title: "Politika zasebnosti",
    eyebrow: "Zasebnost in podatki",
    image: "integrative-room.png",
    imageAlt: "Urejen prostor za zaupen posvet",
    intro: "Ta lokalna demo stran vsebuje povzetek politike zasebnosti. Za pravno veljavno besedilo je treba uporabiti uradni dokument podjetja in ga pregledati pred objavo.",
    sections: [
      {
        heading: "Osnovna načela",
        paragraphs: [
          "Pri obravnavi osebnih podatkov so pomembni jasen namen, najmanjši potreben obseg podatkov, varno shranjevanje in možnost, da posameznik dobi informacije o svojih pravicah.",
          "Kontaktni obrazec na tej statični demo strani podatkov ne pošilja na strežnik. Za produkcijsko uporabo je treba obrazec povezati z ustreznim sistemom in urediti soglasja."
        ]
      },
      {
        heading: "Pred objavo",
        paragraphs: [
          "Ker je politika zasebnosti pravni dokument, je ni smiselno parafrazirati kot dokončno verzijo brez pregleda. Ta stran je zato pripravljena kot struktura, ki jo lahko zamenja uradno odobreno besedilo.",
          "V praksi je treba navesti upravljavca, vrste podatkov, namene obdelave, hrambo, pravice posameznika in kontakt za vprašanja."
        ],
        bullets: ["upravljavec podatkov", "kontaktni podatki", "namen obdelave", "pravice posameznika", "rok hrambe"]
      }
    ],
    related: ["kontakt", "o-nas", "index"]
  }
];

const aliases = {
  index: "",
  kontakt: "kontakt",
  "kvantna-integrativna-medicina": "kvantno-integrativna-medicina/kvantna-integrativna-medicina",
  "kvantna-psihologija": "kvantno-integrativna-medicina/kvantna-psihologija",
  aurikuloterapija: "kvantno-integrativna-medicina/aurikuloterapija",
  "frekvencna-terapija": "kvantno-integrativna-medicina/frekvencna-terapija",
  "neurofeedback-biofeedback": "kvantno-integrativna-medicina/neurofeedback-biofeedback",
  "intuitivno-prehranjevanje": "kvantno-integrativna-medicina/intuitivno-prehranjevanje",
  "integrativni-wellness": "kvantno-integrativna-medicina/integrativni-wellness",
  "kreativnost-in-healthcare-management": "kvantno-integrativna-medicina/kreativnost-in-healthcare-management",
  "oblikovanje-telesa-s-pomocjo-ultrazvocne-lipolize-in-unipolarne-radiofrekvence": "estetika-in-oblikovanje-telesa/oblikovanje-telesa-s-pomocjo-ultrazvocne-lipolize-in-unipolarne-radiofrekvence",
  "dermaclear-3-postopki-ciscenja-in-mocne-hidratacije-obraza": "estetika-in-oblikovanje-telesa/dermaclear-3-postopki-ciscenja-in-mocne-hidratacije-obraza",
  "laserska-epilacija-trajno-odstranjevanje-porascenosti-2": "estetika-in-oblikovanje-telesa/laserska-epilacija-trajno-odstranjevanje-porascenosti-2",
  "embipolar-sculpt-neo": "estetika-in-oblikovanje-telesa/embipolar-sculpt-neo",
  "pomlajevanje-obraza-ultrazvok-za-obraz": "estetika-in-oblikovanje-telesa/pomlajevanje-obraza-ultrazvok-za-obraz",
  "biorevitalizacija-in-pomlajevanje-obraza": "estetika-in-oblikovanje-telesa/biorevitalizacija-in-pomlajevanje-obraza"
};

const serviceGroups = [
  {
    title: "Kvantno-integrativna medicina",
    path: "kvantno-integrativna-medicina",
    intro: "Metode za razumevanje vzorcev, podporo regulaciji, prehranskim navadam in celostnemu ravnovesju.",
    items: [
      "kvantna-integrativna-medicina",
      "kvantna-psihologija",
      "aurikuloterapija",
      "frekvencna-terapija",
      "neurofeedback-biofeedback",
      "intuitivno-prehranjevanje",
      "integrativni-wellness",
      "kreativnost-in-healthcare-management"
    ]
  },
  {
    title: "Estetika in oblikovanje telesa",
    path: "estetika-in-oblikovanje-telesa",
    intro: "Storitve za obraz, kožo, lasersko epilacijo, tonus in oblikovanje izbranih predelov telesa.",
    items: [
      "oblikovanje-telesa-s-pomocjo-ultrazvocne-lipolize-in-unipolarne-radiofrekvence",
      "dermaclear-3-postopki-ciscenja-in-mocne-hidratacije-obraza",
      "laserska-epilacija-trajno-odstranjevanje-porascenosti-2",
      "embipolar-sculpt-neo",
      "pomlajevanje-obraza-ultrazvok-za-obraz",
      "biorevitalizacija-in-pomlajevanje-obraza"
    ]
  }
];

module.exports = {
  pages,
  aliases,
  serviceGroups,
  contact: {
    address: "Cesta na Brdo 85, 1000 Ljubljana",
    phone: "070 160 288",
    phoneHref: "+38670160288",
    email: "info@quantumhealth.si"
  }
};
