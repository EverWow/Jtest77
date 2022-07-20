//Nema sta da se opisuje kako radi, zato sto nista ne radi. 3 sata u projekat seq odlucuje da nece da mi dopusti da napravim model kako treba. Ili ga ne registruje ili zove pogresnu bazu, pa pet puta deklarisem kredencijale ili ne mogu da eksportujem klasu za instanciranje modela kako bi mogle da se vrse bilo kakve dml operacije. Nakon 5 sati pokusavanja da shvatim zasto ne postizem da eksporujem model je postalo jasno da sam ovo sve mogao da uradim za sat vremena preko rawSql-a i pg mdn-a, ali avaj vec tada, niti vremena niti vidim na oci.
Iskreno bio sam malo zatecen ovim zadatkom, nisam ocekivao nista slicno i mogao sam odmah da pretpostavim da necu stici koliko god logika bila jednostavna, jer nisam podizao nista ovakvo vec preko godinu dana. I raditi u sklopu projekta gde je vec sva arhitektura podignuta i ovoga kada pokusavas da shvatis sta sequalize hoce od tebe pri postavljanju osnova, uopste nije isto.  
Protokoli ovog orm-a su me sahranili kompletno. A, mozda je i do mene i nisam video nesto elementarno, ali sam barem toliko ponosan sto sam otkrio da je model random pravio date kolone u pozivu ka bazi i zato nije prepoznavao relacije(nije prepoznavao tabele u bazi, jer je na deklarisane tabele trazio i dateCreated i dateUpdated kolone koje naravno ne postoje-te moras eksp da mu kazes timestamp:false---nikada ranije nisam cuo niti video nesto do te mere retardirano i destruktivno)...iako mi je trebalo preko 3 sata da dodjem do tog zakljucka xD

U normalnim okolnostima bi me bilo malo sramota da nesto ovakvo podelim sa nekim, ali to sto sam skoro napravio model i skoro ukapirao sta mu pravi problem osecam da mi daje tu slobodu, pa se nadam da nema lose reakcije, posto nema lose namere :D

Jedina stvar koja ovde valja je migracija i eto, dotle sam stigao kada je sve puklo :D

Pozdrav,
Jakov
