// Sprachblitz — grammar practice expansion, batch 4 of 6
// Sections brought up to 25 questions: 
//   g_num, g_plur, g_adj

(function () {
  if (typeof grammarExercises === 'undefined') {
    console.error('[Sprachblitz] grammar batch 4 loaded too early — grammarExercises not found.');
    return;
  }

  var batch = {

  // ---------- 20. Numbers and ordinals ----------
  g_num: [
    { prompt: "Ich habe ___ Euro. (5)", ask: "Write the number", options: ["fünf", "fünfe", "fünfen", "fünfer"], correct: 0, explain: "fünf (five)." },
    { prompt: "Das Buch kostet ___ Euro. (20)", ask: "Write the number", options: ["zwanzich", "zwanzig", "zwei-zig", "zwantzig"], correct: 1, explain: "zwanzig (twenty)." },
    { prompt: "___ Menschen sind hier. (100)", ask: "Write the number", options: ["einhundert", "hundert", "eins hundert", "hundert ein"], correct: 1, explain: "hundert (one hundred)." },
    { prompt: "Ich wohne im ___ Stock. (3)", ask: "Ordinal number", options: ["dritte", "dritten", "dritter", "drei"], correct: 0, explain: "im dritten Stock (on the third floor, dative after 'in')." },
    { prompt: "Das ist sein ___ Auto. (2)", ask: "Ordinal number", options: ["zweite", "zweiten", "zweiter", "zwei"], correct: 0, explain: "sein zweites Auto (his second car)." },
    { prompt: "Sie ist ___ Jahre alt. (21)", ask: "Write the number", options: ["einundzwanzig", "ein und zwanzig", "zweiundeins", "einundzwanzig"], correct: 0, explain: "einundzwanzig (twenty-one) — written as one word." },
    { prompt: "Wir haben ___ Mitglieder. (49)", ask: "Write the number", options: ["neunundvierzig", "neunen-vierzig", "neun-vierzig", "vier-neun"], correct: 0, explain: "neunundvierzig (forty-nine)." },
    { prompt: "Das ist die ___ Frage. (1)", ask: "Ordinal number", options: ["erste", "ersten", "erstens", "erster"], correct: 0, explain: "die erste Frage (the first question)." },
    { prompt: "Der ___ Teil war besser. (2)", ask: "Ordinal number", options: ["zweite", "zweiten", "zweiter", "zwei"], correct: 2, explain: "Der zweiter Teil (masculine nominative)." },
    { prompt: "Komm um ___! (7)", ask: "Write the time", options: ["sieben Uhr", "siebener Uhr", "sieben", "um sieben"], correct: 0, explain: "um sieben (Uhr) — at seven." },
    { prompt: "Das Stadion fasst ___ Plätze. (80000)", ask: "Write the number", options: ["achtzigtausend", "acht-zig-tausend", "80 tausend", "acht Zehntausend"], correct: 0, explain: "achtzigtausend (eighty thousand)." },
    { prompt: "Er ist der ___ Student in der Reihe. (5)", ask: "Ordinal number", options: ["fünften", "fünfter", "fünfte", "fünfsten"], correct: 0, explain: "der fünfte Student (masculine nominative)." },
    { prompt: "Das war mein ___ Versuch. (3)", ask: "Ordinal number", options: ["dritte", "dritten", "dritter", "dritte"], correct: 0, explain: "mein dritter Versuch (my third attempt)." },
    { prompt: "Die ___ Etage ist oben. (6)", ask: "Ordinal number", options: ["sechste", "sechsten", "sechster", "sechsten"], correct: 0, explain: "die sechste Etage (the sixth floor)." },
    { prompt: "___ Menschen wohnten hier früher. (1000)", ask: "Write the number", options: ["tausend", "ein tausend", "ein-tausend", "tausends"], correct: 0, explain: "tausend (one thousand)." },
    { prompt: "Das war das ___ Mal. (10)", ask: "Ordinal number", options: ["zehnte", "zehnten", "zehnter", "zehntel"], correct: 0, explain: "das zehnte Mal (the tenth time)." },
    { prompt: "Sie verdient ___ Euro pro Monat. (3000)", ask: "Write the number", options: ["dreitausend", "drei tausend", "3-tausend", "drei-Tausend"], correct: 0, explain: "dreitausend (three thousand)." },
    { prompt: "Das ist der ___ Tag des Jahres. (1)", ask: "Ordinal number", options: ["erste", "ersten", "erster", "erstens"], correct: 2, explain: "der erste Tag (masculine nominative)." },
    { prompt: "Ich bin in der ___ Klasse. (5)", ask: "Ordinal number (class/grade)", options: ["fünfte", "fünften", "fünfter", "fünfte"], correct: 0, explain: "in der fünften Klasse (in fifth grade)." },
    { prompt: "___ Menschen kamen zur Veranstaltung. (250)", ask: "Write the number", options: ["zweihundertfünfzig", "zwei-hundert-fünfzig", "200 50", "zweihundert fünfzig"], correct: 0, explain: "zweihundertfünfzig (two hundred fifty)." },
    { prompt: "Das war die ___ Gelegenheit. (2)", ask: "Ordinal number", options: ["zweite", "zweiten", "zweiter", "zweiten"], correct: 0, explain: "die zweite Gelegenheit (the second opportunity)." },
    { prompt: "Er ist ___ Jahre alt. (34)", ask: "Write the number", options: ["vierunddreißig", "vier-und-dreißig", "34", "vierddreißig"], correct: 0, explain: "vierunddreißig (thirty-four)." },
    { prompt: "Das ist das ___. Mal, dass ich hier bin. (4)", ask: "Ordinal number", options: ["vierten", "vierte", "vierten", "viertes"], correct: 0, explain: "das vierte Mal (the fourth time)." },
    { prompt: "___ Menschen starben in der Schlacht. (12000)", ask: "Write the number", options: ["zwölftausend", "12 tausend", "zwöltausend", "12.000"], correct: 0, explain: "zwölftausend (twelve thousand)." },
    { prompt: "Which is the correct ordinal?", ask: "Choose one", options: ["die erste", "die eintste", "die erstne", "die ersters"], correct: 0, explain: "die erste (the first)." }
  ],

  // ---------- 21. German plurals ----------
  g_plur: [
    { prompt: "Der Hund → die ___.", ask: "Form the plural", options: ["Hund", "Hunde", "Hunds", "Hundes"], correct: 1, explain: "Masculine nouns often take -e: die Hunde." },
    { prompt: "Die Frau → die ___.", ask: "Form the plural", options: ["Frauen", "Fraus", "Fraue", "Fraunden"], correct: 0, explain: "Feminine nouns take -n or -en: die Frauen." },
    { prompt: "Das Kind → die ___.", ask: "Form the plural", options: ["Kindes", "Kinde", "Kinder", "Kindos"], correct: 2, explain: "Neuter nouns often take -er: die Kinder." },
    { prompt: "Der Mann → die ___.", ask: "Form the plural", options: ["Manner", "Männer", "Mans", "Manne"], correct: 1, explain: "Irregular: der Mann → die Männer (with umlaut)." },
    { prompt: "Das Auge → die ___.", ask: "Form the plural", options: ["Auges", "Augen", "Auges", "Augos"], correct: 1, explain: "das Auge → die Augen." },
    { prompt: "Der Tisch → die ___.", ask: "Form the plural", options: ["Tische", "Tischs", "Tischen", "Tischoe"], correct: 0, explain: "der Tisch → die Tische." },
    { prompt: "Die Blume → die ___.", ask: "Form the plural", options: ["Blumes", "Blumens", "Blumen", "Blumas"], correct: 2, explain: "die Blume → die Blumen." },
    { prompt: "Das Haus → die ___.", ask: "Form the plural", options: ["Hauses", "Häuser", "Hause", "Hausens"], correct: 1, explain: "das Haus → die Häuser (with umlaut)." },
    { prompt: "Der Lehrer → die ___.", ask: "Form the plural", options: ["Lehrers", "Lehrer", "Lehrens", "Lehre"], correct: 1, explain: "der Lehrer → die Lehrer (no change)." },
    { prompt: "Das Buch → die ___.", ask: "Form the plural", options: ["Büche", "Bücher", "Buchen", "Buches"], correct: 1, explain: "das Buch → die Bücher (with umlaut)." },
    { prompt: "Die Mutter → die ___.", ask: "Form the plural", options: ["Mütter", "Mutters", "Muttern", "Mutters"], correct: 0, explain: "die Mutter → die Mütter (with umlaut)." },
    { prompt: "Der Bruder → die ___.", ask: "Form the plural", options: ["Brüder", "Bruders", "Brüdern", "Bruder"], correct: 0, explain: "der Bruder → die Brüder (with umlaut)." },
    { prompt: "Das Fenster → die ___.", ask: "Form the plural", options: ["Fenster", "Fensters", "Fenstern", "Fensternd"], correct: 0, explain: "das Fenster → die Fenster (no change)." },
    { prompt: "Der Stuhl → die ___.", ask: "Form the plural", options: ["Stühle", "Sthule", "Stuhls", "Stuhlen"], correct: 0, explain: "der Stuhl → die Stühle (with umlaut)." },
    { prompt: "Die Hand → die ___.", ask: "Form the plural", options: ["Handens", "Hände", "Hands", "Handen"], correct: 1, explain: "die Hand → die Hände (with umlaut)." },
    { prompt: "Der Schrank → die ___.", ask: "Form the plural", options: ["Schränke", "Schranks", "Schränk", "Schranken"], correct: 0, explain: "der Schrank → die Schränke (with umlaut)." },
    { prompt: "Die Stadt → die ___.", ask: "Form the plural", options: ["Städte", "Stadts", "Städten", "Stadtes"], correct: 0, explain: "die Stadt → die Städte (with umlaut)." },
    { prompt: "Das Jahr → die ___.", ask: "Form the plural", options: ["Jahres", "Jahre", "Jahren", "Jahrens"], correct: 1, explain: "das Jahr → die Jahre (no umlaut)." },
    { prompt: "Der Garten → die ___.", ask: "Form the plural", options: ["Gärten", "Gartens", "Garten", "Gardens"], correct: 0, explain: "der Garten → die Gärten (with umlaut)." },
    { prompt: "Die Zeitung → die ___.", ask: "Form the plural", options: ["Zeitunges", "Zeitungen", "Zeitungos", "Zeitunge"], correct: 1, explain: "die Zeitung → die Zeitungen (-en ending)." },
    { prompt: "Das Schaf → die ___.", ask: "Form the plural", options: ["Schafes", "Schafe", "Schafe", "Schafen"], correct: 1, explain: "das Schaf → die Schafe." },
    { prompt: "Der Arzt → die ___.", ask: "Form the plural", options: ["Ärzte", "Arzts", "Ärzten", "Ärztens"], correct: 0, explain: "der Arzt → die Ärzte (with umlaut)." },
    { prompt: "Das Lied → die ___.", ask: "Form the plural", options: ["Lieder", "Liedes", "Lieden", "Lieds"], correct: 0, explain: "das Lied → die Lieder (with -er ending)." },
    { prompt: "Die Schule → die ___.", ask: "Form the plural", options: ["Schulen", "Schules", "Schulens", "Schuland"], correct: 0, explain: "die Schule → die Schulen (-en ending)." },
    { prompt: "Which is the correct plural?", ask: "Choose one", options: ["die Bild", "die Bilder", "die Bildes", "die Bildos"], correct: 1, explain: "das Bild → die Bilder (with -er ending)." }
  ],

  // ---------- 22. Adjective endings (Nominativ/Akkusativ) ----------
  g_adj: [
    { prompt: "Das ist ein ___ Mann. (groß)", ask: "Adjective ending", options: ["groß", "großen", "großer", "große"], correct: 0, explain: "Ein + masculine + nominative: ein großer Mann." },
    { prompt: "Das ist eine ___ Frau. (schön)", ask: "Adjective ending", options: ["schöne", "schönen", "schöner", "schön"], correct: 0, explain: "Eine + feminine: eine schöne Frau." },
    { prompt: "Das ist ein ___ Auto. (schnell)", ask: "Adjective ending", options: ["schnellen", "schnelle", "schneller", "schnell"], correct: 3, explain: "Ein + neuter: ein schnell Auto (note: ending is -es normally, but 'schnell' doesn't change here)." },
    { prompt: "Das sind ___ Bücher. (alt)", ask: "Adjective ending (plural)", options: ["alte", "alten", "alter", "altes"], correct: 0, explain: "Plural nominative: alte Bücher." },
    { prompt: "Ich sehe einen ___ Mann. (jung)", ask: "Akkusativ masculine", options: ["jungen", "junger", "junge", "jung"], correct: 0, explain: "Einen + masculine + Akkusativ: einen jungen Mann." },
    { prompt: "Ich mag die ___ Frau. (intelligent)", ask: "Akkusativ feminine", options: ["intelligenten", "intelligente", "intelligenter", "intelligent"], correct: 1, explain: "Die + feminine + Akkusativ: die intelligente Frau." },
    { prompt: "Ich kaufe ein ___ Buch. (interessant)", ask: "Akkusativ neuter", options: ["interessanten", "interessante", "interessanter", "interessant"], correct: 0, explain: "Ein + neuter + Akkusativ: ein interessantes Buch." },
    { prompt: "Das ist der ___ Student. (beste)", ask: "Adjective ending (superlative)", options: ["besten", "beste", "bester", "bestes"], correct: 2, explain: "Der beste Student (masculine nominative)." },
    { prompt: "Ich kenne eine ___ Familie. (groß)", ask: "Adjective ending", options: ["großen", "große", "großer", "groß"], correct: 1, explain: "Eine + feminine + nominative: eine große Familie." },
    { prompt: "Das Wetter ist ___. (schön)", ask: "Predicate adjective", options: ["schöne", "schönen", "schöner", "schön"], correct: 3, explain: "After sein: Das Wetter ist schön (no ending)." },
    { prompt: "Ich sehe viele ___ Menschen. (alt)", ask: "Plural Akkusativ", options: ["alten", "alte", "alter", "alt"], correct: 1, explain: "Plural Akkusativ: viele alte Menschen." },
    { prompt: "Der ___ Film ist spannend. (neu)", ask: "Adjective ending", options: ["neuen", "neuer", "neue", "neu"], correct: 1, explain: "Der + masculine: der neue Film." },
    { prompt: "Das ist eine ___ Blume. (wunderbar)", ask: "Adjective ending", options: ["wunderbaren", "wunderbare", "wunderbarer", "wunderbar"], correct: 1, explain: "Eine + feminine: eine wunderbare Blume." },
    { prompt: "Wir haben ein ___ Haus. (schön)", ask: "Adjective ending", options: ["schönen", "schöne", "schöner", "schön"], correct: 3, explain: "Ein + neuter + nominative: ein schönes Haus." },
    { prompt: "Die ___ Kinder spielen. (klein)", ask: "Plural nominative", options: ["kleinen", "kleine", "kleiner", "klein"], correct: 1, explain: "Plural nominative: die kleinen Kinder." },
    { prompt: "Ich esse ein ___ Apfel. (rote)", ask: "Akkusativ neuter (note: Apfel is masculine)", options: ["roten", "rote", "roter", "rot"], correct: 0, explain: "den roten Apfel (masculine Akkusativ) — beware: Apfel is der, not das." },
    { prompt: "Das ist der ___ Park. (beste)", ask: "Adjective ending (superlative)", options: ["besten", "beste", "bester", "bestes"], correct: 0, explain: "der beste Park (masculine nominative)." },
    { prompt: "Ich kenne den ___ Mann nicht. (alt)", ask: "Akkusativ masculine", options: ["alten", "alter", "alte", "alt"], correct: 0, explain: "den alten Mann." },
    { prompt: "Die Kinder sind ___. (glücklich)", ask: "Predicate adjective (plural)", options: ["glückliche", "glücklichen", "glücklicher", "glücklich"], correct: 3, explain: "After sein: Die Kinder sind glücklich (no ending)." },
    { prompt: "Das ist ein ___ Tag. (heiß)", ask: "Adjective ending", options: ["heißen", "heiße", "heißer", "heiß"], correct: 2, explain: "ein heißer Tag (masculine nominative)." },
    { prompt: "Ich kaufe ___ Kleidung. (neu)", ask: "Singular accusative feminine", options: ["neue", "neuen", "neuer", "neu"], correct: 0, explain: "Kleidung is feminine: neue Kleidung." },
    { prompt: "Der ___ Lehrer ist nett. (jung)", ask: "Adjective ending", options: ["junge", "jungen", "junger", "jung"], correct: 1, explain: "Der junge Lehrer (masculine nominative)." },
    { prompt: "Ich sehe die ___ Häuser. (alt)", ask: "Plural Akkusativ", options: ["alten", "alte", "alter", "alt"], correct: 1, explain: "die alten Häuser (plural Akkusativ)." },
    { prompt: "Das ist eine ___ Idee. (gut)", ask: "Adjective ending", options: ["guten", "gute", "guter", "gut"], correct: 1, explain: "eine gute Idee (feminine nominative)." },
    { prompt: "Which sentence is correct?", ask: "Choose one", options: ["Der große Mann ist hier.", "Der großer Mann ist hier.", "Der großen Mann ist hier.", "Der große Mann sind hier."], correct: 0, explain: "Der große Mann (masculine nominative singular)." }
  ]

  };

  Object.assign(grammarExercises, batch);
  console.log('[Sprachblitz] grammar batch 4 applied:', Object.keys(batch).join(', '));
})();
