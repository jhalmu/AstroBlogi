---
title: 'Miten blogi-himmelini pyörii juuri nyt'
pubDate: '2025-02-01T14:15:54.345'
author: 'Juha Halmu'
description: ''
tags: [devaus,markdown]
---

Sivusto on siis tehty Astro 5. Siitä piti tulla liian monimutkainen, mutta eipä onneksi tullut. Tällä viittaan AI avusteiseen ideointiin joka lähti hieman lapasesta vs. tietotaidot. Tietotaidolla tarkoitan sen hetkistä kokemustasoani Astrosta ja AI:n käyttämisestä apuvälineenä. 

Tekstit tulee nyt markdownina eli käytännössä ihan tekstitiedostoina, sillä ainakin vielä on tullut käytettyä merkkausta tekstin tyylittelyyn varsin vähän. Tutkin paljon eri vaihtoehtoja mitä ryhtyisin käyttämään tekstien kirjoittamiseen. Käytössä on ollut Obsidan, jonka käyttö on hiipunut nollaan. Toinen vaihtoehto olisi ollut Joplin, jossa on jonkinlaiset mahdollisuudet pullauttaa tiedosto eteenpäin. Monia muitakin vaihtoehtoja oli, mutta päätin sitten kysäistä AI:lta viitsisikö hän västä minulle sellaisen.

Ilmainen Claude ja minä olimme synkassa ja niin saimme aikaan node-pohjaisen toteutuksen jossa on kentät frontmatterin tiedoille ja turvallisuusominaisuuksia. Muotoiluun käytin mainiota ja kevyttä picocss kirjastoa, joka hoitaa tyylittelyn perusasiat mainiosti. Tumma teema on ihmisten parhaita ystäviä. Claude ehdotteli vielä kaikenlaista muokkaustoimintoa ja tietenkin mahdollisuus olisi ollut melko mihin tahansa, mutta onneksi olin oppinut jo pitämään toiveet kurissa joten simppeli ja toimiva oli se mitä halusin ja sen sain. Mukava yksityiskohta on, että kuvaus-kenttä täytetään automaagisesti ensimmäisillä sanoilla jos en jaksa sellaista kirjoittaa. Ja eihän sitä jaksa.  Ja jos oikeasti tulee jotain kirotusvirheitä isompaa virhettä niin näppärästi nörtti hyppää terminaaliin ja käy korjaamassa.

Itse serverillä proxysta huolehtii Caddy, joka vaan on niin simppeli siihen mitä tarvitsen että kesti kauan uskoa. Toki kaipaan vähän Ningx:in turvallisuusmäärittelyjä ja ehkä headereitakin olisin tarvinnut esim cacheen, mutta taitaapi olla enemmän pullistelua kirjata että nyt on niin tiukka serveri etten itsekään pääse sisään tjsp. jota joskus käynyt. Turvallisuusjutut on nyt keskitetty olennaisuuksiin. Toki varmaan pidän jatkosessiota aiheen tiimoilta, koska miksei. 

Blogia pitää ylhäällä pm2. Muitakin vaihtoehtoja olisi. Voisin laittaa palveluna itse serverille ja ehkä caddyllakin saisi asian hoidettua. Pidän nyt kuitenkin asian yksinkertaisena, koska asioita tulee ja menee paljon ja muistan helpommin miten tämä pyörii. Tämäkin editori pyörii sillä. Isompana asiana on, että mitä tapahtuu kun painan Tallenna.

Tätä jouduin pohtimaan enemmänkin - ja vähän liiankin paljon kun tein sitä pohtimista yömyöhään väsyneenä. Pm2:sen manuaalit ovat jotensakin sekavat. Yksinkertainen tarkoitus oli, että kun teksti lähtee astroon omaan kansioonsa, niin tämän jälkeen astro buildaisi että se teksti muuttuu staattiseksi html-tiedostoksi world wide webin saavutettavaksi. Koetin käyttää tekoälyä apuna, mutta enpä oikein päässyt toimivaan lopputulokseen, ainostaan logit täyttyivät ja kohta olisi kaatunut koko serverirukka. No, löysin vihdoin haluamani käskyn pm2:selle ja niin muisti tekoälykin miten pm2 toimii (sen tehtävä on käynnistyä ja pitää palvelut ylhäällä). Ehdottipa jopa että mitä jos ajelisin astroa ihan dev moodissa niin ei tarttes häntä kiusata. Uh. Se oli jo väsynyttä. 

No kuitenkin oikean pm2:en käskyn keksittyäni sain build-prosessin pysähtymään siihen milloin tarvitsi eli halusin ja näin olimme melko maalissa lopputuloksen kannalta. Ainoa huoli oli logien kertyminen. Siihen on olemassa lisäosa, mutta se tuntui niin pommilta että enpä sitä uskaltanut ottaa käyttöön tai ainakaan jättää päälle. Kerroin vain käskyksi että tyhjentää logit ja käynnistää sitten buildin. Eli mahdollisesti buildinjälkeiset kärähmät jäävät tuoreesti tarkasteltaviksi ja logit tulevat tyhjennettyä kunhan jaksan kirjoittaa uusia tekstejä. Sen verran yksinkertaista että tiedä sitten toimiiko tämä occamin partaveitsi tai onko se edes terävä - ja kasvaako edes parta.

 ### Kehityskohteita

- Voisi lisätä yhden kirjautumislayerin. Itseä se ei haittaisi kun salasana pysyisi muistissa, mutta jos joku innostuu pommittamaan, niin olisipa ainakin yksi kerros ennen kuin kaatuu.
- Itse blogiin voisi pohtia tagien kanssa puljaamista. Mutta ei kiirettä, kunhan näitä nyt kerääntyy. Voisi jopa ajatella että tulisi uusi linkki navigaatioon jos kyseistä tagia olisi tarpeeksi monta. Nyt muuten kun tagien kautta filtteröityminen ei ole olemassa. Itseasiassa tagit oli kokonaan menossa pois käytöstä, mutta otin ne kuitenkin loppuvaiheessa takaisin. Ihan mahdollisia lukijoita ajatellen. 
- Samalla voisi innostua penkomaan tyylitiedostojen ja css:n suhtetta taas uudestaan tai vähintään lisäämään purkkaa että mobiilikäyttö sujuisi sujakammin. Ja ihan oppimismielessäkin tämä. Ei tiedä jos vahingossa tulisi johonkin uuteen sivuun ajateltua se mobiilifirst ihan first. Ajatus aiheesta kun kuitenkin on jo vahva.
        
