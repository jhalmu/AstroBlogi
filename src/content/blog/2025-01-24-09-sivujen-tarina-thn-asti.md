---
title: 'Sivujen tarina tähän asti'
pubDate: '2025-01-24T09:38:16.963'
author: 'Juha Halmu'
description: ''
tags: [devaus,astro,ai]
---

Tosiaan minulla on ollut ikuisuusprojekti tehdä kotisivut. Mutta koska olen kiiltävien asioiden ihminen, niin tekniikat vaihtuu ja kielet muuttuu. Ja tietenkin ajatus miten kotisivut toteuttaisin. 

Alkuperäinen ajatus oli, että olisin tehnyt backendin go:lla ja terminaalipohjaisesti, ettei olisi tarvinnut sen enempää pohtia asiaa. Sellaisen toimivan teinkin ja ai:n avulla laajensin mukaviin mittasuhteisiin. Nyt kuitenkin tässä kirjoittelen tätä aika puhtaasti AI:n avulla tehdyllä www-pohjaisella JS käyttöliittymällä, joka toimii mainiosti. Ulkoasun riipasin itse, joten se on kohtuullisen kauniskin. 


## Ei kun hommiin

Takaisin sivuhin. Suunnittelu lähti ulkoasusta. Minulla oli hyvä idea ulkoasuksi ja ai hyvänä jees-henkilönä auttoi ideoimaan teknisiä mahdollisuuksia lisää. Ja myös siis teki toteutuksen. Se meni niin kivasti että se sai hybridi-kierrokset nousemaan kivasti. 

Käytin windsurffia jatkon tekemiseen. Lykkäsin sille dollareita ja ws painoi koodia kuin setelipaino. Samalla vähän opiskelin miten tekoälyn kanssa toimitaan. Ja nimenomaan windsurfin. Ideoimme ja toteutimme paljon. Hyvinkin syvällisesti, adminia, turvallisuutta ja tulevaisuutta. Vähitellen koodia olikin paljon, kovasti paljon ja virheitä myös. Ja kohta oli myös virheitä korjaavaa koodia paljon. 

Annoin tekoälyn tehdä mahdollisimman paljon, koska en ole niin välittänyt javasctiptistä. Aluksi yritin vältellä typesctiptiä, mutta vähän mahdottomaksi meni. Type erroreita oli paljon ja tekoäly niitä korjaili ja välillä looppasi kovasti. 

Koska kehitys oli hyvinkin avointa ja ideoivaa, niin vähitellen alkoi koodia ja korjauksia olla päälekkäin ja sivuttain. Ongelma ei-internettiä käyttävissä tekoälyissä on vielä se, että se ei välttämättä tiedä uusimpia koodin käänteitä. Hieman turhauduin kun menin vihdoin lukemaan Astron manuaaleja ja huomasin että sillähän on omat työkalut moneenkin asiaan jota halusin. Ja rupesin myös ihmettelemään manuaalin esimerkkien yksinkertaisuutta versus toteutunut koodi omassa koodipesässä. Tekoäly alkoi olla vähän tottelematon tosin määräyksiäkin oli paljon. Tuntui että minun taidot ei nyt pystyneet sitä enää tässä spahettikasassa enää sitä suitsimaan. 

## Uusi alku

Poistin ison osan tehdystä koodista. Varsinkin ns. admin-osuudet. Koodia lähti paljon. Minulla oli jo tehtynä systeemi joka huomioi että tuleeko sisältö ulkoisesta apista jsonina vai markdown tiedostosta. Ne kaikki tallennettiin sqliteen ja ulospäin data lähti sitten sieltä. Hienon kuuloinen systeemi. Ehkä sen osuuden olisi voinut säästää, mutta toisaalta sellaisen saa uudella tiedolla ja ohjauksella sitten hallitummin jos haluaa. 

Aloitin uuden projektin ja sain kopioitua ulkoasun. Luin enemmän manuaalia saadakseni sen mitä halusin. Jossain vaiheessa annoin windsurfin olla ja siirryin vscodeen ai-sekakäyttäjäksi. Sain - toki ai:n avustuksella - korjattua tyyppivirheet kivasti ja vähitellen aloin itsekin ymmärtää enemmän Astron toiminnasta. Sain tehtyä pari uutta toiminnallisuutta ja jonkin verran karsittua päälekkäisyyksiä. Ulkoasukin pysyi siedettävänä, vaikkakin tyylivirheitä tuli herkästi muokkausten seurauksena. 

## Tämän hetkisiä haasteita

### Accessibility

Vaikka aika hyvin olen saanut accessibilityä pysymään mukana, on siinä tietenkin vielä puutteensa. Se on ollut yksi vaatimukseni tässä tekemisessä ja ai on siinä osannut auttaa hyvin. Ukoasun koodissa on ilmeisesti ei-hyviä sisäkkäisyyksiä eli niitä pitäisi purkaa kun uskaltaa.

### Deployment

Deploy. Sivuston muutosten deplays pitäisi mennä oikeammin. Painiskelin pitkään githubin automaattisen deployn kanssa, mutta en saanut toimimaan. Nyt menee vähän käsipelillä.  Sivujen pystyssä pysymisestä ja usemmissa instansseissa pyörimisestä vastaa PM2 jossa ilmeisesti olisi mahdollisuus myös että käskisi buildin käyntiin kun huomaa tuleen lisää tekstejä. Tätä tutkitaan.

### Responsiivisuus

Tätä olen koettanut rakentaa kuntoon tässä vähitellen. Eli että mobiilissa näkyisi käyttäjäystävällisesti. Myös etusivu pienemmillä näytöillä on vähän **meh**. Tähän liittyen myös tyylitiedostot ovat kovasti paljon sekoitusta tailwindiä ja perus-cssää. Tämä työ jatkuu. Jossain vaiheessa oli onglmia yö/päivä-teemojen kanssa mutta sain ne korjatuksi. Koska käytän myös tailwindin typographya, sain sitä kautta tekstin pysymään valkeina, koska en käytä muuta kuin tummaa teemaa tässä tekeleessä. 

## Lopuksi

Onneksi voi sanoa oppineensa paljon. Nyt osaa kiinnittää eri asioihin huomiota jo aiemmin. Sitä voisi jopa sanoa, että typescriptin kanssa voi elää kun on tekoäly apuna. Tekoäly on ollut myös oikein hyvänä opettajana näyttämässä miten jotkut perusasiat tehdään niin että saa ne toimimaan. Usein pää ei vaan riitä. Ja niinhän luokkahuoneissakin tehdään: Opettaja kirjoittaa kalvolle koodia huonolla tussilla ja oppilaat kopioi sen siitä notepadeihinsä. Ja ihan samaa modernimminkin. Ja yhtä vähän sitä muistaa jälkeenpäin asiasta. 

  
