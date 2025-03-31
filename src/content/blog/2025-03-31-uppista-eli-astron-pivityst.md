---
title: 'Uppista eli Astron päivitystä'
pubDate: '2025-03-31T10:44:19.258'
author: 'Juha Halmu'
description: ''
tags: [Devaus,Tietoturva]
---
Tein kuten ajattelin. Laitoin toiseen kansioon "testiympäristön", johon sitten gittasin blogin. Tai siis pullasin. Jynöu. Tein päivitykset Astron omalla työkalulla ja kun se näytti toimivan eli pysyi pystyssä, tein saman "tuotantoon". Tämä kirjoitus on toki osa testiä, että meneekö vielä tämä artikkelikin omalle paikalleen sujuvasti niin kuin ennen. Piti käydä muistelemassa koodia, niin pitäisi mennä sinne minne pitääkin.

Piti samalla myös viritellä Viten conffia että "testiympäristö" suostui näkymään. Ja hyvinhän se onnistui kun laittoi lisämääritykset oikeaan kohtaan, eikä siis väärään jossa ei toiminut. On se helppoa. 

Sitten järjestin itselleni pienen oppimistilaisuuden Gitin kanssa. Eli piti sitten tietenkin saada päivitetty koodi pushattua githubiin. No päätin ottaa rennosti koska kuitenkin git ja annoin komentoja siksinsokin. Tietenkin uusimmat blogipäivitukset hävisivät. En kuitenkaan ollut huolissani, koska tämän takia gittiä käytetään, vaan kävin Claudelta varmistamassa taikasanat ja tilanne korjaantui nopeasti ja myös kätevästi. Nyt on paremmin muistissa mitä pitää ja voi tehdä kuin jos olisin mennyt vaan heti kysymään oikeita toimintakäskyjä. Harrasteesta kannattaa ottaa hyöty irti kun on mahdollisuus ja oppia.

Saipa ainakin tehtyä githubiin uusi kohta sydeemin päivittämisestä - ja samalla klousattua issue. Oikein tuottavaa. Onhan noi security-issue sähköpostit vähän rasittavia. 

Nyt sitten pitäisi ehkä tehdä itse korjauksia, että mobiilikäyttäjät näkisivät sisältöä paremmin ja pari harmillista bugitusta tulisi korjattua. Ja olisihan tuo RSS feedi ihan kiva jos toimisi. 

Onkin kaksi tapaa miten lähteä tähän. Tai oikeastaan kolme.  Ensimmäinen on mennä lisäämään purkkaa, toinen on pistää ihan uusi Astro tulille ja rakentaa ulkoasu uusiksi. Kolmas on lähteä rakentamaan koko blogia vaikk Elixiirillä. 

- Purkalla saisi *ehkä* korjattua suurimmat virheet ajassa X.
- Lähtemällä alusta saisi *mahdollisesti* purettua muutkin purkat ja tehtyä asiat niin kuin ne olisi pitänyt tehdä ja kenties jopa päivitettyä käytännöllisyyksiä. Vaikka ottaa käyttöön se md:n laajempi muoto, josta *ehkä* hyötyä (tämänhetkisellä muistikuvilla/tiedoilla). Saisi tehtyä ulkoasun niin kuin se olisi pitänyt tehdä - ongelmana tässä tietenkin oma osaaminen jonka pitäisi siis kasvaa rojektin myötä. 
- Kolmas tosiaan helpottuisi jos olisi tehnyt kohdan kaksi ulkosun uusiksi. Tämä on toisaalta mihin haluaisi päätyä koska yksinkertaisesti pitäisi jatkaa Elixirin opiskelua. Uhat ja mahdollisuudet toisaalta painottuisi nyt uhkiin koska tie on sen verran tuntematon, vaikkakaan ei täysin uutta koska harjoiteltu jo on ja materiaalia löytyy.  

Luulen että valitsen nyt että lähden Astron kanssa puhtaalta pöydältä ja yritän välttää tekoälyn voimia sekoittamsta ajatuksiani. Olen jo tehnyt testini sillä joten tiedän jo missä se voisi olla hyödyksi ja mitkä ovat uhat. Eli lähden ihan tutoriaalipohjalta ja pyrin toteuttamaan perustoiminnallisuudet ja sitten koetan saada ulkoasun siihen mukaan. 

Ei muuta kuin enteenpäin. 

Lisäys: Ei toiminutkaan automaattinen buildi kun olin käynyt *muistelemassa* toimintoja. Lähtiskö nyt käynytiin. Vai tutkitaanko nyt taas tätäkin loppupäivä...

Lisäys: Päivitetty PM2. Ei päivittynyt aiemmin. Katsotaas mites nyt...

Lisäys: Melkein päivitetty npm. Sitten päätinkin olla vähemmän hurja ja katsoa vaan outdated. Security fixit sain tehtyä joten se hyvä. Huomasin onneksi että esim tailwind olisi päivittymässä numerolla, joten sillä varmasti hajoisi jotain joten päätin jättää jos kerran muutenkin aion päivittää koko roskan. Kokeilen tätä automaattipäivitystä vielä kerran (kirjotian tätä serverin kautta) ja laitoin jopa **päälle** eli starttasin tuon jonka pitäisi tutkailla jos muutoksia tulisi. Varmaan uudelleen käynnistäessä jäänyt se jotenkin käynnistymättä.

Siinä oli siis ideana että buildi ei saa olla päällä kuin sen kerran kuin tulee muutos, muuten se humppaa loopaten koko serverin kumoon. Mikä tietenkin herättää kysymyksen, että onpas herkkä systeemi bugittaessa saada serveri kumoon. En usko kun en tiedä että kaatuuko ohjelma vai serveri kun muistit menee tukkoon. Siksi minulla on tuplavarmistus logeillekin että on tuo logrotate ohjelma joka toivottavasti on päivittynyt vähemmän bugiseksi (tuskin). Sitä varmistamassa ettei logit pukkaa kumoon on buildia ennen pyörähtävä komento jonka pitäisi flussata logit. 

Okei. Sori jos satuin puhumaan matalasti ci/cd putkista. Se oli huumoria. Hauskaa huumoria. No. Katotaas huomaako scripti että nyt on muutos ja pitäisi buildata. Jos ei niin teen sen käsin ja mietin näitä asioita uudemman kerran. Tuossa kun tuli tuo scripti -sanakin mainittua, niin onhan noita mahdollisuuksia. Jos vaikka croni käynnistäisi klo 12 buildin? tylsää. Ehkä iltahartautena tutkin pm2 manuaalia uudelleen kun se kerran on päivittynytkin niin hurmaavan paljon. 

Lisäys: No jos vielä kerran `pm2 start ecosystem.config.cjs` eli watchin kanssa?

Lisäys: Pah, rikki on.

Lisäys: No mutta. Voipi olla tosiaan käynyt niin että olin korjannut aiemmin ecosystem filun... mutta en ollut päivittänyt sitä githubiin. Tai jotain muuta amatöörimäistä. Oikeilla komennoilla nääs se nyt toimii. Ja jos pä nyt push...
