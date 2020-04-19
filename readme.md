# Marin Mersenne

## Származása

Marin Mersenne Oizében született, 1588. szeptember 8.-án. Paraszt család gyermeke volt, és még a születése napján megkeresztelték. Már fiatalkorában is nagyon érdekelte a világ minden része, és nagyon kíváncsi volt minden felé.

## Élete

Mersenne 16 éves korától a La Fléche-i Jezsuita kollégiumban tanult, nem sokkal az alapítása után. 1609 körül hagyta el La Fléche-t, hogy teológiát (hittudományt) tanuljon. 1613-ban avatták pappá.
1614-től 1618-ig filozófiát és teológiát tanított Nevers-ben. Párizsban élte életét, kivéve a gyakori külföldi utazásait, amik 1619-től haláláig, 1648-ig tartottak.

## Publikációi

1623-ban adta ki a *Quaestiones celeberrime in Genesim* című művét, amit 1625-ben *La vérité des sciences* követett 1625-ben. Ezekben az ortodox gondolkodást védte úgy, hogy két külön dologként kezelte a természet, és az esszenciáját a dolgoknak (amiket csak isten ismerhet), és az ember által észrevehető tényeket.  
1626 után Mersenne publikációi a matematika tudományával foglalkoztak, azon belül az Asztronómiával, és az optikával. 

## Nézetei
Mersenne nem értett egyet a **szkepticizmus** nézettel, ami szerint a világ teljesen megismerhetetlen. Azt állította, hogy a tudás szabadon terjed kísérletezés és megfigyelés által.  
Emiatt sokszor bűntette tanítványait, hogy nem raktak hiteles méréseket és megfigyeléseket a kutatómunkáikba.  
Emellett megkülönböztette a racionális, mechanisztikus világ között, amiben automatonok élnek, és amiben egy öntudattal rendelkező, emberi faj él. 

## Académie Parisienne

Mersenne 1635-ben megalapította az *Académie Parisienne*-t, ahol nagyon sok feltörekvő francia tudós, matematikus, és filozófus megtudta osztani kutatását. 

# Élete munkája: A Mersenne prímek

1644-ben publikálta kutatását a számokon (ma már Mersenne-prímeknek hívjuk ezeket). Ő figyelte meg először, hogyha `2ⁿ-1` eredménye prím szám, akkor `n` is prímszám. Bár nem sikerült találnia egy formulát prímek keresésére (nem is biztos hogy létezik), Mersenne formulája még mindig nagyon hasznos nagy számok tesztelésénél, hogy azok prímek-e.

## Mersenne-számok

Általánosságban véve, hogyha egy természetes szám eggyel kisebb egy kettő hatványnál, azt Mersenne-számnak nevezzük. (Sok forrás megköveteli a Mersenne-számoknál, hogy az `n` prímszám legyen.)

## Teszteld le magadnak! 

Nagyon egyszerű erre a célra kódot írni, mivel csak egy függvény kell, ami a kettőt `n` hatványára emeli, majd kivon belőle egyet. Így a legegyszerűbb megírni:  

    function mersenne(n) {
      return 2**n-1
    }

Ha még azt is szeretnénk, hogy ellenőrizze, hogy prím-e, akkor azt így tudjuk megírni:

    function isMersennePrime(n) {
      number = 2**n-1
      for (var i=2; i<number; i++) {
        if (number%i == 0) {
          return false
        }
      }
      return true
    }


## Ha leszeretnél ellenőrízni egy számot, hogy Mersenne-prím-e, kattints [*ide*](https://kepeterz.github.io/mersenne/mersennejs.html).