# Portolio

https://portfolio-noora.vercel.app/

## Noora Puhakka

## 100567838

## Sivusto

Sivusto on luoto toimimaan portfoliona minulle. Sivusto sisältää tietoa minusta, kokemuksestani, aiemmasta työkokemuksestani ja tekemistäni projekteista. Sivuston käyttäjä on henkilö, joka haluaa tutustua minuun, tai tekemiini projekteihin. Mitä todennäköisimmin tämä henkilö olisi mahdollinen rekryäjä, tai mahdollisesti joku kaverini, joka on kiinnostunut töistäni. Käyttäjä saa onnistuneen käyttökokemuksen, kun hän löytää tietoa minusta ja projekteistani.

Toteutin sivustoni kokonaan yksin. Käytin projektiin noin 30 tuntia.

Sivuston sisältö on vielä keskeneräinen, mutta tekninen toteutus on valmis.

## UX

Sivusto on pyritty luomaan siten, että siellä liikkuminen on mahdollisimman intuitiivista. Sivustolla on tällä hetkellä kolme sivua, joista ensimmäisenä sivuna toimii ns heropage. Tämän jälkeen navigoidaan muille sivuille etsimään lisätietoa.

## UI

Sivuston visuaalinen muotokieli on melko pelkistetty. Siihen on kuitenkin lisätty yksittäisiä visuaalisia elementtejä, jotka tuovat sivuihin hieman mielenkiintoisuutta. Alkusivulla tämä visuaalinen elementti on liikkuvat silmät, ja muilla sivuilla toisen värinen vihreä projektien ja työkokemuksen taustalla. Värit ovat metsäisen vihreät, joka tukee metsäistä moodboardia. Käytän fonttia Junge, koska se näytti kivalta.

Sivuston navigaatio on yläpalkissa. Modiilinavigaatio aukeaa yläpalkin napista.

Linkki figmaan: https://www.figma.com/file/Jfiuo8KplCm2wLkUA2lbmx/VJP----project?type=design&node-id=0-1&mode=design

## Sivuston rakentaminen

Sivuston pääteknologioina toimivat react ja typescript. Sivuston ajamiseen käytetään yarnia. Sivusto on rakennettu pitkälti käyttäen Material UI kirjaston komponentteja: https://mui.com/material-ui/all-components/.

Totesin MUI kirjaston hyväksi etenemistavaksi jo alussa, sillä se toteuttaa kaikki perus komponentit helposti ja komponentteihin on halutessaan sisällytetty mm. automaattinen skaalatuvuus tektsien osalta. Tämän lisäksi perus komponenttien tyylejä oli melko helppo muokata omaan käyttötarkoitukseeni sopivaksi. Sivuston tyylejä muokkasin pitkälti suoraan komponentteihin, enkä niinkään .css tiedostoihin, sillä tämä vaikutti nopeammalta.

### Interaktiivinen elementti

Interktiivinen elementtini on etusivulla näkyvät liikkuvat silmät. Silmät reagoivat käyttäjän hiiren liikkeisiin, ja silmät luovat efektin, jossa katse seuraa käyttäjän hiirtä. Elementti on toteutettu react-hookkeja hyödyntämällä, ja silmien asentoa siirretään tietyn matemaattisen kaavan mukaan hiiren liikkeitä seuraamalla.

Tämän lisäksi toisena interaktiivisena elementtinä toimii mobiilimenu, jonka näyttämisessä myöskin hyödynnetään react-hookkeja. Menu aukeaa, kun käyttäjä klikkaa nappia, ja sulkeutuu, kun käyttäjä klikkaa jotain menun napeista.

## Sivuston julkaisu

Julkaisin sivuston vercelissä. Tämän lisäksi ostin itselleni domainin, jonka sainkin ilmeisesti toimimaan kivasti, tosin kirjoitushetkellä uusi domaini ei vielä löydy netistä, sillä sen päivittäminen vercelissä kestää.

## Helppoa?

Mielestäni projekti sujui melko mallikaasti. Erityisesti mielestäni gitin käyttö ja react routen käyttäminen oli todella sujuvaa. Myös projektin pystyttäminen sujui mutkattomasti.

## Vaikeaa?

Haastavinta projektissa oli uuden komponenttikirjaston opetteleminen ja etusivun silmien tekeminen. Komponettikirjastossa komponenttien valmiiden tyylien muokkaaminen osoittautui melko hankalaksi, mutta dokumentaation avulla siitäkin selvittiin. Silmien pupillien liikkeen saaminen luonnolliseksi vaati muutamia iteraatioita ja testailua, missä meni melko paljon aikaa.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
