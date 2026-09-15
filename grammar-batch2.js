// Sprachblitz — grammar practice expansion, batch 2 of 6
// Sections brought up to 25 questions:
//   g_conj, g_poss, g_mod, g_tren, g_imp, g_comp, g_perf, g_habs, g_case, g_mail
//
// This file patches the grammar banks at load time. It must be loaded AFTER
// the main script in index.html.

(function () {
  if (typeof grammarExercises === 'undefined') {
    console.error('[Sprachblitz] grammar batch 2 loaded too early — grammarExercises not found.');
    return;
  }

  var batch = {

  // ---------- 4. Regular verb conjugation ----------
  g_conj: [
    { prompt: "Ich ___ Fußball. (spielen)", ask: "Conjugate the verb", options: ["spielt", "spiele", "spielst", "spielen"], correct: 1, explain: "ich + -e" },
    { prompt: "Du ___ Deutsch. (lernen)", ask: "Conjugate the verb", options: ["lerne", "lernt", "lernst", "lernen"], correct: 2, explain: "du + -st" },
    { prompt: "Er ___ in Berlin. (wohnen)", ask: "Conjugate the verb", options: ["wohnst", "wohnen", "wohnt", "wohne"], correct: 2, explain: "er/sie/es + -t" },
    { prompt: "Wir ___ Kaffee. (trinken)", ask: "Conjugate the verb", options: ["trinkst", "trinken", "trinkt", "trinke"], correct: 1, explain: "wir + -en" },
    { prompt: "Ihr ___ ein Buch. (kaufen)", ask: "Conjugate the verb", options: ["kaufe", "kaufst", "kaufen", "kauft"], correct: 3, explain: "ihr + -t" },
    { prompt: "Sie ___ viel. (arbeiten, they)", ask: "Conjugate the verb", options: ["arbeitet", "arbeiten", "arbeite", "arbeitest"], correct: 1, explain: "sie (plural) + -en" },
    { prompt: "Ich ___ gern Musik. (hören)", ask: "Conjugate the verb", options: ["hörst", "hört", "höre", "hören"], correct: 2, explain: "ich höre" },
    { prompt: "Du ___ sehr schnell. (schreiben)", ask: "Conjugate the verb", options: ["schreibe", "schreibst", "schreibt", "schreiben"], correct: 1, explain: "du schreibst" },
    { prompt: "Meine Mutter ___ jeden Tag. (kochen)", ask: "Conjugate the verb", options: ["koche", "kochst", "kocht", "kochen"], correct: 2, explain: "One person: kocht." },
    { prompt: "Die Kinder ___ im Garten. (spielen)", ask: "Conjugate the verb", options: ["spielt", "spielen", "spielst", "spiele"], correct: 1, explain: "Plural subject: spielen." },

    // stems ending in -t / -d take an extra e
    { prompt: "Du ___ im Büro. (arbeiten)", ask: "Careful with the stem", options: ["arbeitst", "arbeitest", "arbeitet", "arbeite"], correct: 1, explain: "The stem ends in -t, so an -e is added: du arbeitest." },
    { prompt: "Er ___ den Ball. (finden)", ask: "Careful with the stem", options: ["findt", "finde", "findet", "findest"], correct: 2, explain: "Stem ends in -d: er findet." },
    { prompt: "Ihr ___ auf den Bus. (warten)", ask: "Careful with the stem", options: ["wartt", "wartet", "wartest", "warte"], correct: 1, explain: "ihr wartet — the extra -e keeps it pronounceable." },
    { prompt: "Du ___ das Fenster. (öffnen)", ask: "Careful with the stem", options: ["öffnst", "öffnest", "öffnet", "öffne"], correct: 1, explain: "du öffnest." },

    // stem-vowel changes (irregular present)
    { prompt: "Du ___ ein Buch. (lesen)", ask: "Watch the stem vowel", options: ["lesst", "list", "liest", "lest"], correct: 2, explain: "e becomes ie: du liest." },
    { prompt: "Er ___ Pizza. (essen)", ask: "Watch the stem vowel", options: ["esst", "isst", "esse", "essen"], correct: 1, explain: "e becomes i: er isst." },
    { prompt: "Sie ___ Auto. (fahren)", ask: "Watch the stem vowel", options: ["fahrt", "fahre", "fährt", "fahren"], correct: 2, explain: "a takes an umlaut: sie fährt." },
    { prompt: "Du ___ Deutsch. (sprechen)", ask: "Watch the stem vowel", options: ["sprechst", "sprichst", "sprecht", "spricht"], correct: 1, explain: "e becomes i: du sprichst." },
    { prompt: "Er ___ fern. (sehen)", ask: "Watch the stem vowel", options: ["seht", "sieht", "sehe", "sehst"], correct: 1, explain: "e becomes ie: er sieht." },
    { prompt: "Wir ___ Deutsch. (sprechen)", ask: "Does the vowel change here?", options: ["sprichen", "sprecht", "sprechen", "spricht"], correct: 2, explain: "The vowel only changes for du and er/sie/es — wir sprechen stays regular." },

    // reverse direction and recognition
    { prompt: "Which pronoun goes with 'lernt'?", ask: "Choose the subject", options: ["ich", "du", "er", "wir"], correct: 2, explain: "-t marks er/sie/es (or ihr)." },
    { prompt: "Which pronoun goes with 'spielst'?", ask: "Choose the subject", options: ["ich", "du", "wir", "ihr"], correct: 1, explain: "-st always marks du." },
    { prompt: "Which sentence is correct?", ask: "Choose one", options: ["Ich lernst Deutsch.", "Du lerne Deutsch.", "Wir lernt Deutsch.", "Er lernt Deutsch."], correct: 3, explain: "er lernt — the others mismatch subject and ending." },
    { prompt: "Anna und Tom ___ in Köln. (wohnen)", ask: "Conjugate the verb", options: ["wohnt", "wohnen", "wohnst", "wohne"], correct: 1, explain: "Two people: wohnen." },
    { prompt: "Was ___ du am Wochenende? (machen)", ask: "Conjugate the verb", options: ["mache", "macht", "machst", "machen"], correct: 2, explain: "du machst — the verb stays in position 2 after 'was'." }
  ],

  // ---------- 5. Possessive articles ----------
  g_poss: [
    { prompt: "Das ist ___ Vater. (ich)", ask: "Which possessive?", options: ["meine", "dein", "mein", "sein"], correct: 2, explain: "Vater is masculine: mein." },
    { prompt: "Wo ist ___ Jacke? (ich)", ask: "Which possessive?", options: ["meins", "meine", "mein", "meiner"], correct: 1, explain: "Jacke is feminine: meine." },
    { prompt: "Das ist ___ Buch. (ich)", ask: "Which possessive?", options: ["meine", "meins", "mein", "meiner"], correct: 2, explain: "Buch is neuter: mein." },
    { prompt: "Wo sind ___ Schuhe? (ich)", ask: "Which possessive?", options: ["mein", "meins", "meiner", "meine"], correct: 3, explain: "Plural takes -e: meine Schuhe." },
    { prompt: "Ist das ___ Hund? (du)", ask: "Which possessive?", options: ["deine", "sein", "ihr", "dein"], correct: 3, explain: "Hund is masculine: dein." },
    { prompt: "Ist das ___ Tasche? (du)", ask: "Which possessive?", options: ["deine", "dein", "deins", "deiner"], correct: 0, explain: "Tasche is feminine: deine." },
    { prompt: "___ Schwester heißt Anna. (er)", ask: "Which possessive?", options: ["Mein", "Ihr", "Seine", "Sein"], correct: 2, explain: "His sister: seine (feminine noun)." },
    { prompt: "___ Bruder wohnt in Bonn. (er)", ask: "Which possessive?", options: ["Seine", "Sein", "Ihr", "Ihre"], correct: 1, explain: "His brother: sein." },
    { prompt: "___ Mann heißt Tom. (sie / her)", ask: "Which possessive?", options: ["Sein", "Seine", "Ihre", "Ihr"], correct: 3, explain: "Her husband: ihr (masculine noun)." },
    { prompt: "___ Mutter kocht gut. (sie / her)", ask: "Which possessive?", options: ["Ihre", "Ihr", "Sein", "Seine"], correct: 0, explain: "Her mother: ihre (feminine noun)." },
    { prompt: "Das ist ___ Haus. (wir)", ask: "Which possessive?", options: ["ihr", "euer", "unsere", "unser"], correct: 3, explain: "Haus is neuter: unser." },
    { prompt: "Das ist ___ Wohnung. (wir)", ask: "Which possessive?", options: ["unser", "unsere", "euer", "eure"], correct: 1, explain: "Wohnung is feminine: unsere." },
    { prompt: "Wo ist ___ Lehrer? (ihr)", ask: "Which possessive?", options: ["eure", "unser", "euer", "ihre"], correct: 2, explain: "Your (plural) teacher: euer." },
    { prompt: "Wo ist ___ Schule? (ihr)", ask: "Which possessive?", options: ["euer", "eure", "unser", "ihr"], correct: 1, explain: "Schule is feminine: eure." },
    { prompt: "Das sind ___ Kinder. (sie / their)", ask: "Which possessive?", options: ["ihr", "ihre", "sein", "seine"], correct: 1, explain: "Plural noun: ihre Kinder." },
    { prompt: "___ Name ist Müller. (Sie, formal)", ask: "Which possessive?", options: ["Ihre", "Ihr", "Dein", "Sein"], correct: 1, explain: "Formal possessive is Ihr, always capitalised." },
    { prompt: "___ Adresse, bitte. (Sie, formal)", ask: "Which possessive?", options: ["Ihr", "Ihre", "Deine", "Eure"], correct: 1, explain: "Adresse is feminine: Ihre." },

    // recognising the pattern
    { prompt: "The possessive gets -e when the noun is ...", ask: "Complete the rule", options: ["masculine or neuter", "feminine or plural", "always", "never"], correct: 1, explain: "meine Jacke, meine Schuhe — feminine and plural take -e." },
    { prompt: "Which sentence is correct?", ask: "Choose one", options: ["Das ist meine Vater.", "Das ist mein Mutter.", "Das ist meine Mutter.", "Das ist meiner Mutter."], correct: 2, explain: "Mutter is feminine, so meine." },
    { prompt: "Which sentence is correct?", ask: "Choose one", options: ["Wo ist deine Buch?", "Wo ist dein Buch?", "Wo ist deins Buch?", "Wo ist deiner Buch?"], correct: 1, explain: "Buch is neuter: dein Buch." },
    { prompt: "Ich suche ___ Handy. (ich)", ask: "Which possessive?", options: ["meine", "meinen", "mein", "meiner"], correct: 2, explain: "Handy is neuter, and neuter looks the same as subject or object: mein Handy." },
    { prompt: "Ich liebe ___ Familie. (ich)", ask: "Which possessive?", options: ["mein", "meine", "meinen", "meiner"], correct: 1, explain: "Familie is feminine: meine Familie." },
    { prompt: "___ Eltern wohnen in Indien. (ich)", ask: "Which possessive?", options: ["Mein", "Meiner", "Meins", "Meine"], correct: 3, explain: "Eltern is plural: meine Eltern." },
    { prompt: "Hast du ___ Schlüssel? (du)", ask: "Which possessive?", options: ["deine", "deinen", "dein", "deins"], correct: 2, explain: "der Schlüssel is masculine: dein Schlüssel." },
    { prompt: "___ Zimmer ist sehr klein. (wir)", ask: "Which possessive?", options: ["Unsere", "Unser", "Euer", "Ihre"], correct: 1, explain: "Zimmer is neuter: unser Zimmer." }
  ],

  // ---------- 6. Modal verbs ----------
  g_mod: [
    { prompt: "Ich ___ Deutsch sprechen. (können)", ask: "Fill in the modal", options: ["kannst", "kann", "könnt", "können"], correct: 1, explain: "ich kann — no ending in the ich form." },
    { prompt: "Du ___ heute arbeiten. (müssen)", ask: "Fill in the modal", options: ["müssen", "muss", "musst", "müsst"], correct: 2, explain: "du musst" },
    { prompt: "Er ___ ins Kino gehen. (wollen)", ask: "Fill in the modal", options: ["wollt", "willst", "will", "wollen"], correct: 2, explain: "er will — the vowel changes in the singular." },
    { prompt: "Wir ___ Pizza essen. (möchten)", ask: "Fill in the modal", options: ["möchte", "möchtest", "möchten", "möchtet"], correct: 2, explain: "wir möchten" },
    { prompt: "Ihr ___ jetzt gehen. (dürfen)", ask: "Fill in the modal", options: ["darf", "dürfen", "darfst", "dürft"], correct: 3, explain: "ihr dürft" },
    { prompt: "Sie ___ gut kochen. (können, she)", ask: "Fill in the modal", options: ["kannst", "kann", "können", "könnt"], correct: 1, explain: "sie kann" },
    { prompt: "Ich ___ noch nicht schwimmen. (können)", ask: "Fill in the modal", options: ["kannst", "können", "kann", "könnt"], correct: 2, explain: "ich kann — same form as er/sie/es." },
    { prompt: "Du ___ nicht rauchen. (dürfen)", ask: "Fill in the modal", options: ["darfst", "darf", "dürft", "dürfen"], correct: 0, explain: "du darfst — 'nicht dürfen' means must not." },
    { prompt: "Meine Eltern ___ nach Berlin fahren. (wollen)", ask: "Fill in the modal", options: ["will", "willst", "wollt", "wollen"], correct: 3, explain: "Plural: sie wollen." },
    { prompt: "___ ich Ihnen helfen? (können)", ask: "Fill in the modal", options: ["Kann", "Kannst", "Können", "Könnt"], correct: 0, explain: "Kann ich ...? — the verb leads in a question." },

    // where does the second verb go?
    { prompt: "Ich kann gut ___.", ask: "Which form goes at the end?", options: ["geschwommen", "schwimmen", "schwimme", "schwimmst"], correct: 1, explain: "The second verb stays an infinitive at the very end." },
    { prompt: "Wir müssen jetzt ___.", ask: "Which form goes at the end?", options: ["gehen", "gehe", "geht", "gegangen"], correct: 0, explain: "Infinitive at the end: gehen." },
    { prompt: "Where does the second verb go in a modal sentence?", ask: "Choose one", options: ["Right after the modal", "At the very end", "In position 1", "It disappears"], correct: 1, explain: "Ich muss heute früh aufstehen." },
    { prompt: "Which sentence is correct?", ask: "Choose one", options: ["Ich kann sprechen Deutsch.", "Ich kann Deutsch sprechen.", "Ich spreche kann Deutsch.", "Ich Deutsch sprechen kann."], correct: 1, explain: "Modal in position 2, infinitive last." },
    { prompt: "Er möchte am Wochenende ins Kino ___.", ask: "Complete the sentence", options: ["geht", "gegangen", "gehen", "gehe"], correct: 2, explain: "Infinitive at the end, however long the middle is." },

    // meaning
    { prompt: "Which modal means 'to be allowed to'?", ask: "Choose one", options: ["müssen", "dürfen", "wollen", "können"], correct: 1, explain: "dürfen = permission." },
    { prompt: "Which modal means 'to have to'?", ask: "Choose one", options: ["können", "möchten", "müssen", "dürfen"], correct: 2, explain: "müssen = obligation." },
    { prompt: "Which modal is the politest way to order in a café?", ask: "Choose one", options: ["Ich will einen Kaffee.", "Ich muss einen Kaffee.", "Ich möchte einen Kaffee.", "Ich darf einen Kaffee."], correct: 2, explain: "möchten is the polite 'would like'." },
    { prompt: "Ich ___ Klavier spielen, aber ich habe kein Klavier. (können)", ask: "Fill in the modal", options: ["kann", "muss", "darf", "will"], correct: 0, explain: "Ability: können." },
    { prompt: "Hier ___ man nicht parken. (dürfen)", ask: "Fill in the modal", options: ["muss", "darf", "will", "kann"], correct: 1, explain: "man darf nicht = it is not allowed." },

    // trickier
    { prompt: "Ich ___ morgen früh aufstehen. (müssen)", ask: "Fill in the modal", options: ["musst", "müssen", "muss", "müsst"], correct: 2, explain: "ich muss, and 'aufstehen' stays whole at the end." },
    { prompt: "Which pronoun goes with 'wollt'?", ask: "Choose the subject", options: ["ich", "du", "ihr", "wir"], correct: 2, explain: "ihr wollt." },
    { prompt: "Which pronoun goes with 'darf'?", ask: "Choose the subject", options: ["wir", "ihr", "du", "ich"], correct: 3, explain: "ich darf — and er/sie/es darf." },
    { prompt: "Kinder, ___ ihr Hausaufgaben machen? (müssen)", ask: "Fill in the modal", options: ["müsst", "muss", "müssen", "musst"], correct: 0, explain: "ihr müsst." },
    { prompt: "Wir ___ heute nicht arbeiten. (müssen)", ask: "Fill in the modal", options: ["muss", "müsst", "müssen", "musst"], correct: 2, explain: "wir müssen — 'nicht müssen' means don't have to." }
  ],

  // ---------- 7. Separable verbs ----------
  g_tren: [
    { prompt: "Ich stehe um 7 Uhr ___. (aufstehen)", ask: "Where does the prefix go?", options: ["aus", "ab", "auf", "an"], correct: 2, explain: "The prefix 'auf' detaches and moves to the end." },
    { prompt: "Der Zug kommt um 9 Uhr ___. (ankommen)", ask: "Complete the sentence", options: ["auf", "ein", "an", "aus"], correct: 2, explain: "ankommen → kommt ... an" },
    { prompt: "Wir kaufen im Supermarkt ___. (einkaufen)", ask: "Complete the sentence", options: ["auf", "an", "ein", "mit"], correct: 2, explain: "einkaufen → kaufen ... ein" },
    { prompt: "Rufst du mich heute ___? (anrufen)", ask: "Complete the sentence", options: ["ein", "aus", "an", "auf"], correct: 2, explain: "anrufen → rufst ... an" },
    { prompt: "Ich sehe gern ___. (fernsehen)", ask: "Complete the sentence", options: ["mit", "nach", "vor", "fern"], correct: 3, explain: "fernsehen → sehe ... fern" },
    { prompt: "Der Film fängt um acht ___. (anfangen)", ask: "Complete the sentence", options: ["auf", "an", "aus", "ein"], correct: 1, explain: "anfangen → fängt ... an" },
    { prompt: "Machst du bitte das Fenster ___? (aufmachen)", ask: "Complete the sentence", options: ["zu", "an", "aus", "auf"], correct: 3, explain: "aufmachen → machst ... auf" },
    { prompt: "Ich räume mein Zimmer ___. (aufräumen)", ask: "Complete the sentence", options: ["an", "auf", "ein", "ab"], correct: 1, explain: "aufräumen → räume ... auf" },
    { prompt: "Wann stehst du ___? (aufstehen)", ask: "Complete the question", options: ["an", "aus", "auf", "ein"], correct: 2, explain: "Even in a question the prefix goes last." },
    { prompt: "Ich ziehe nächste Woche ___. (umziehen)", ask: "Complete the sentence", options: ["ein", "an", "aus", "um"], correct: 3, explain: "umziehen → ziehe ... um" },

    // conjugating the stem correctly
    { prompt: "Er ___ jeden Morgen um sechs auf. (aufstehen)", ask: "Conjugate the stem", options: ["stehe", "stehst", "steht", "stehen"], correct: 2, explain: "The stem still conjugates normally: er steht ... auf." },
    { prompt: "Wir ___ am Samstag ein. (einkaufen)", ask: "Conjugate the stem", options: ["kaufe", "kaufst", "kauft", "kaufen"], correct: 3, explain: "wir kaufen ... ein" },
    { prompt: "Ihr ___ die Tür zu. (zumachen)", ask: "Conjugate the stem", options: ["macht", "macht ihr", "machen", "mache"], correct: 0, explain: "ihr macht ... zu" },
    { prompt: "Sie ___ ihre Freundin an. (anrufen, she)", ask: "Conjugate the stem", options: ["rufe", "rufst", "ruft", "rufen"], correct: 2, explain: "sie ruft ... an" },

    // separable or not?
    { prompt: "Which verb is separable?", ask: "Choose one", options: ["verstehen", "besuchen", "aufstehen", "erklären"], correct: 2, explain: "auf- separates. ver-, be- and er- never do." },
    { prompt: "Which verb is NOT separable?", ask: "Choose one", options: ["ankommen", "besuchen", "einkaufen", "fernsehen"], correct: 1, explain: "be- is an inseparable prefix: ich besuche dich." },
    { prompt: "Ich ___ meine Oma. (besuchen)", ask: "Does anything separate?", options: ["suche ... be", "besuche", "be ... suche", "suche be"], correct: 1, explain: "Nothing separates: ich besuche meine Oma." },
    { prompt: "Which sentence is correct?", ask: "Choose one", options: ["Ich aufstehe um sieben.", "Ich stehe auf um sieben.", "Ich stehe um sieben auf.", "Auf ich stehe um sieben."], correct: 2, explain: "The prefix goes right at the end, after the time." },

    // with modals and in questions
    { prompt: "Ich muss früh ___. (aufstehen)", ask: "With a modal, what happens?", options: ["auf stehen", "stehe auf", "aufstehen", "steh auf"], correct: 2, explain: "After a modal the verb stays whole: muss früh aufstehen." },
    { prompt: "Kannst du mich später ___? (anrufen)", ask: "With a modal, what happens?", options: ["an rufen", "rufst an", "anrufen", "ruf an"], correct: 2, explain: "The infinitive stays joined: ... später anrufen?" },
    { prompt: "Wann ___ der Zug an? (ankommen)", ask: "Complete the question", options: ["kommt", "kommen", "komme", "kommst"], correct: 0, explain: "der Zug kommt ... an" },
    { prompt: "___ bitte das Licht aus! (ausmachen, du-command)", ask: "Form the command", options: ["Ausmach", "Machst", "Mach", "Machen"], correct: 2, explain: "Mach ... aus! — the prefix still goes last." },
    { prompt: "Ich hole dich um acht ___. (abholen)", ask: "Complete the sentence", options: ["auf", "an", "ab", "aus"], correct: 2, explain: "abholen → hole ... ab" },
    { prompt: "Der Unterricht hört um zwei ___. (aufhören)", ask: "Complete the sentence", options: ["an", "auf", "ab", "aus"], correct: 1, explain: "aufhören → hört ... auf" },
    { prompt: "Wo does the prefix go in a simple statement?", ask: "Choose one", options: ["Right after the verb", "In position 1", "At the very end", "It stays attached"], correct: 2, explain: "Ich stehe jeden Tag um sieben Uhr auf." }
  ],

  // ---------- 8. Imperative ----------
  g_imp: [
    { prompt: "___ hierher! (kommen, du)", ask: "Form the imperative", options: ["Kommt", "Kommst", "Kommen", "Komm"], correct: 3, explain: "Drop 'du' and the -st ending." },
    { prompt: "___ bitte langsam! (sprechen, Sie)", ask: "Form the imperative", options: ["Sprecht", "Sprechen Sie", "Sprich", "Sprichst"], correct: 1, explain: "Formal keeps the pronoun after the verb." },
    { prompt: "___ das Fenster! (öffnen, du)", ask: "Form the imperative", options: ["Öffnet", "Öffnen", "Öffne", "Öffnest"], correct: 2, explain: "Stems in -n add -e: öffne!" },
    { prompt: "___ mir bitte! (helfen, du)", ask: "Form the imperative", options: ["Helft", "Helfen", "Hilf", "Hilfst"], correct: 2, explain: "Stem change e→i carries into the command: hilf!" },
    { prompt: "___ leise, bitte! (sein, du)", ask: "Form the imperative", options: ["Seid", "Bist", "Sei", "Sein"], correct: 2, explain: "sein is irregular: sei!" },
    { prompt: "___ vorsichtig! (sein, ihr)", ask: "Form the imperative", options: ["Sei", "Seid", "Sind", "Seien"], correct: 1, explain: "ihr-form: Seid vorsichtig!" },
    { prompt: "___ bitte ruhig! (sein, Sie)", ask: "Form the imperative", options: ["Sei", "Seid", "Seien Sie", "Sind Sie"], correct: 2, explain: "Formal: Seien Sie bitte ruhig!" },
    { prompt: "___ mehr Wasser! (trinken, du)", ask: "Form the imperative", options: ["Trinkst", "Trink", "Trinkt", "Trinken"], correct: 1, explain: "Trink! — no pronoun, no ending." },
    { prompt: "___ eure Hausaufgaben! (machen, ihr)", ask: "Form the imperative", options: ["Mach", "Macht", "Machen", "Machst"], correct: 1, explain: "The ihr-form looks like the normal present: Macht!" },
    { prompt: "___ hier, bitte! (warten, Sie)", ask: "Form the imperative", options: ["Wart", "Wartet", "Warten Sie", "Wartest"], correct: 2, explain: "Formal always keeps 'Sie': Warten Sie bitte!" },
    { prompt: "___ das Buch! (lesen, du)", ask: "Watch the stem vowel", options: ["Lese", "Lies", "Lest", "Liest"], correct: 1, explain: "e→ie carries over: Lies!" },
    { prompt: "___ langsam! (fahren, du)", ask: "Does the umlaut appear?", options: ["Fähr", "Fahre", "Fahr", "Fahrt"], correct: 2, explain: "a→ä does NOT appear in the command: Fahr langsam!" },
    { prompt: "___ mir bitte die Adresse! (geben, du)", ask: "Watch the stem vowel", options: ["Gebe", "Gib", "Gebt", "Gibst"], correct: 1, explain: "e→i: Gib mir ...!" },
    { prompt: "___ nicht so laut! (sprechen, ihr)", ask: "Form the imperative", options: ["Sprich", "Sprecht", "Sprechen", "Sprichst"], correct: 1, explain: "ihr-form: Sprecht nicht so laut!" },
    { prompt: "___ bitte das Licht aus! (ausmachen, du)", ask: "Where does the prefix go?", options: ["Ausmach", "Mach ... aus", "Machst aus", "Aus mach"], correct: 1, explain: "Separable prefix still goes to the end." },
    { prompt: "___ bitte an! (anrufen, Sie)", ask: "Form the imperative", options: ["Ruf", "Ruft", "Rufen Sie", "Anrufen Sie"], correct: 2, explain: "Rufen Sie bitte an!" },
    { prompt: "Which form is the du-imperative of 'gehen'?", ask: "Choose one", options: ["Gehst", "Geh", "Gehen", "Geht"], correct: 1, explain: "Geh! — an -e is optional: Gehe!" },
    { prompt: "Which form is the ihr-imperative of 'kommen'?", ask: "Choose one", options: ["Komm", "Kommt", "Kommen", "Kommen Sie"], correct: 1, explain: "Kommt!" },
    { prompt: "What happens to the pronoun in the du-command?", ask: "Choose one", options: ["It stays", "It moves to the end", "It disappears", "It becomes Sie"], correct: 2, explain: "Komm! — never 'Komm du!'" },
    { prompt: "Which sentence is a correct command?", ask: "Choose one", options: ["Du komm hier!", "Kommst hier!", "Komm hier!", "Kommen hier!"], correct: 2, explain: "No pronoun, no -st." },
    { prompt: "___ bitte Platz! (nehmen, Sie)", ask: "Form the imperative", options: ["Nimm", "Nehmt", "Nehmen Sie", "Nimmst"], correct: 2, explain: "Nehmen Sie bitte Platz! — a very common polite phrase." },
    { prompt: "___ keine Angst! (haben, du)", ask: "Form the imperative", options: ["Hast", "Hab", "Habt", "Haben"], correct: 1, explain: "Hab keine Angst!" },
    { prompt: "___ mir bitte! (zuhören, ihr)", ask: "Form the imperative", options: ["Hör ... zu", "Hört ... zu", "Zuhört", "Hören Sie zu"], correct: 1, explain: "ihr-form of a separable verb: Hört mir bitte zu!" },
    { prompt: "Adding an -e to the du-command (Gehe! Komme!) is ...", ask: "Choose one", options: ["required", "optional", "wrong", "only formal"], correct: 1, explain: "Both Geh! and Gehe! are correct; the short form is more common in speech." },
    { prompt: "___ bitte hier! (unterschreiben, Sie)", ask: "Form the imperative", options: ["Unterschreib", "Unterschreibt", "Unterschreiben Sie", "Schreiben Sie unter"], correct: 2, explain: "unter- is inseparable here, and formal keeps Sie." }
  ],

  // ---------- 9. Comparison ----------
  g_comp: [
    { prompt: "Anna ist ___ als Tom. (klein)", ask: "Comparative form", options: ["am kleinsten", "klein", "kleiner", "kleinste"], correct: 2, explain: "Add -er for the comparative." },
    { prompt: "Deutsch ist ___ als Englisch. (schwer)", ask: "Comparative form", options: ["schwerste", "schwer", "schwerer", "am schwersten"], correct: 2, explain: "schwer → schwerer" },
    { prompt: "Berlin ist ___ als Bonn. (groß)", ask: "Comparative form", options: ["groß", "am größten", "größer", "grosser"], correct: 2, explain: "groß → größer (the vowel takes an umlaut)." },
    { prompt: "Mein Bruder ist ___ als ich. (alt)", ask: "Comparative form", options: ["alt", "alter", "älter", "am ältesten"], correct: 2, explain: "a → ä: älter." },
    { prompt: "Der Zug ist ___ als der Bus. (schnell)", ask: "Comparative form", options: ["schnellste", "schneller", "am schnellsten", "schnell"], correct: 1, explain: "schnell → schneller (no umlaut)." },
    { prompt: "Heute ist es ___ als gestern. (warm)", ask: "Comparative form", options: ["warmer", "wärmer", "warm", "am wärmsten"], correct: 1, explain: "a → ä: wärmer." },
    { prompt: "Er läuft ___ von allen. (schnell)", ask: "Superlative form", options: ["schnellste", "am schnellsten", "schneller", "schnell"], correct: 1, explain: "am ...-sten for the superlative." },
    { prompt: "Sie singt ___ von allen. (schön)", ask: "Superlative form", options: ["schöner", "am schönsten", "schönste", "schön"], correct: 1, explain: "am schönsten." },
    { prompt: "Das ist ___ Haus im Dorf. (alt, superlative)", ask: "Superlative before a noun", options: ["alt", "alter", "am ältesten", "das älteste"], correct: 3, explain: "Before a noun: das älteste Haus." },
    { prompt: "Sie ist ___ Schülerin der Klasse. (gut, superlative)", ask: "Superlative before a noun", options: ["die guteste", "die beste", "am besten", "besser"], correct: 1, explain: "gut → besser → die beste." },

    // irregulars
    { prompt: "gut → ___ → am besten", ask: "Fill the comparative", options: ["guter", "gutter", "besser", "mehr gut"], correct: 2, explain: "gut is irregular: gut, besser, am besten." },
    { prompt: "viel → ___ → am meisten", ask: "Fill the comparative", options: ["vieler", "mehr", "vieles", "meister"], correct: 1, explain: "viel, mehr, am meisten." },
    { prompt: "gern → lieber → ___", ask: "Fill the superlative", options: ["am gernsten", "am liebsten", "am liebersten", "am meisten"], correct: 1, explain: "gern, lieber, am liebsten." },
    { prompt: "hoch → ___ → am höchsten", ask: "Fill the comparative", options: ["hocher", "höcher", "höher", "hoher"], correct: 2, explain: "hoch loses the c: höher." },
    { prompt: "Ich trinke ___ Tee als Kaffee. (gern)", ask: "Comparative of gern", options: ["gerner", "mehr gern", "lieber", "am liebsten"], correct: 2, explain: "lieber = prefer." },

    // so ... wie, and als vs wie
    { prompt: "Tom ist ___ groß ___ Anna. (equally tall)", ask: "Choose the pair", options: ["so ... wie", "so ... als", "mehr ... als", "als ... wie"], correct: 0, explain: "so + adjective + wie for equality." },
    { prompt: "Anna ist größer ___ Tom.", ask: "als or wie?", options: ["wie", "als", "so", "denn"], correct: 1, explain: "After a comparative, always 'als'." },
    { prompt: "Mein Zimmer ist nicht so groß ___ deins.", ask: "als or wie?", options: ["als", "wie", "denn", "so"], correct: 1, explain: "so groß wie — equality uses 'wie'." },
    { prompt: "Which sentence is correct?", ask: "Choose one", options: ["Er ist größer wie ich.", "Er ist größer als ich.", "Er ist so größer wie ich.", "Er ist mehr groß als ich."], correct: 1, explain: "Comparative + als." },

    // adjectives that don't take an umlaut
    { prompt: "klein → ___", ask: "Comparative form", options: ["kleiner", "kleiner mit Umlaut", "kläiner", "mehr klein"], correct: 0, explain: "klein takes no umlaut: kleiner." },
    { prompt: "Which one takes an umlaut in the comparative?", ask: "Choose one", options: ["klein", "schnell", "lang", "schön"], correct: 2, explain: "lang → länger. klein, schnell and schön stay as they are." },
    { prompt: "Der Winter ist ___ als der Sommer. (kalt)", ask: "Comparative form", options: ["kalter", "kälter", "kalt", "am kältesten"], correct: 1, explain: "a → ä: kälter." },
    { prompt: "Dieses Buch ist ___ als das andere. (interessant)", ask: "Comparative form", options: ["interessanter", "mehr interessant", "interessantest", "interessänter"], correct: 0, explain: "Even long adjectives just add -er in German." },
    { prompt: "Was ist ___? Kaffee oder Tee? (gut, superlative)", ask: "Superlative form", options: ["besser", "am besten", "das beste", "guter"], correct: 1, explain: "am besten — standing alone, not before a noun." },
    { prompt: "Adjectives ending in -t or -s add ...", ask: "Complete the superlative rule", options: ["-sten", "-esten", "-ster", "-ten"], correct: 1, explain: "am ältesten, am heißesten — the extra e keeps it sayable." }
  ],

  // ---------- 10. Perfekt ----------
  g_perf: [
    { prompt: "Ich ___ Deutsch gelernt.", ask: "Which auxiliary?", options: ["hat", "bin", "habe", "ist"], correct: 2, explain: "Most verbs take 'haben'." },
    { prompt: "Wir ___ nach Berlin gefahren.", ask: "Which auxiliary?", options: ["ist", "haben", "hat", "sind"], correct: 3, explain: "Movement verbs take 'sein'." },
    { prompt: "Er ___ ein Buch gelesen.", ask: "Which auxiliary?", options: ["ist", "hat", "sind", "bin"], correct: 1, explain: "lesen takes haben." },
    { prompt: "Sie ___ um sieben aufgestanden.", ask: "Which auxiliary?", options: ["hat", "haben", "ist", "sind"], correct: 2, explain: "aufstehen is a change of state: sein." },
    { prompt: "Ich ___ gestern zu Hause geblieben.", ask: "Which auxiliary?", options: ["habe", "bin", "hat", "ist"], correct: 1, explain: "bleiben takes sein, even though nothing moves — learn it as an exception." },
    { prompt: "Du ___ viel gearbeitet.", ask: "Which auxiliary?", options: ["bist", "hast", "hat", "bin"], correct: 1, explain: "du hast gearbeitet." },
    { prompt: "Die Kinder ___ im Garten gespielt.", ask: "Which auxiliary?", options: ["sind", "ist", "haben", "hat"], correct: 2, explain: "spielen takes haben." },
    { prompt: "Wann ___ ihr angekommen?", ask: "Which auxiliary?", options: ["habt", "seid", "sind", "haben"], correct: 1, explain: "ankommen takes sein: seid ihr angekommen." },

    // building the Partizip II
    { prompt: "Er hat ein Buch ___. (lesen)", ask: "Partizip II", options: ["liest", "lest", "lesen", "gelesen"], correct: 3, explain: "lesen → gelesen" },
    { prompt: "Ich habe Pizza ___. (essen)", ask: "Partizip II", options: ["essen", "isst", "esse", "gegessen"], correct: 3, explain: "essen → gegessen" },
    { prompt: "Wir haben Fußball ___. (spielen)", ask: "Partizip II", options: ["gespielt", "gespielen", "spielt", "spielte"], correct: 0, explain: "Regular verbs: ge- + stem + -t." },
    { prompt: "Sie hat einen Brief ___. (schreiben)", ask: "Partizip II", options: ["geschreibt", "geschrieben", "schreibt", "schrieb"], correct: 1, explain: "Irregular: geschrieben." },
    { prompt: "Ich habe viel ___. (trinken)", ask: "Partizip II", options: ["getrinkt", "getrunken", "trinkt", "trank"], correct: 1, explain: "trinken → getrunken" },
    { prompt: "Er ist nach Hause ___. (gehen)", ask: "Partizip II", options: ["geht", "gegeht", "gegangen", "ging"], correct: 2, explain: "gehen → gegangen" },
    { prompt: "Sie ist um 8 Uhr ___. (aufstehen)", ask: "Partizip II", options: ["aufsteht", "aufstehen", "aufgestanden", "gestanden"], correct: 2, explain: "The ge- slots between prefix and stem: aufgestanden." },
    { prompt: "Wir haben im Supermarkt ___. (einkaufen)", ask: "Partizip II", options: ["eingekauft", "geeinkauft", "einkauft", "gekauft ein"], correct: 0, explain: "ein + ge + kauft = eingekauft." },
    { prompt: "Ich habe meine Oma ___. (besuchen)", ask: "Partizip II", options: ["gebesucht", "besucht", "besuchte", "gesucht"], correct: 1, explain: "Verbs starting be-, ver-, er- take NO ge-." },
    { prompt: "Er hat das Wort nicht ___. (verstehen)", ask: "Partizip II", options: ["geverstanden", "verstand", "verstanden", "gestanden"], correct: 2, explain: "ver- verbs take no ge-: verstanden." },
    { prompt: "Wir haben das Zimmer ___. (reservieren)", ask: "Partizip II", options: ["gereserviert", "reserviert", "reservierte", "reservieren"], correct: 1, explain: "Verbs ending in -ieren never take ge-." },

    // word order
    { prompt: "Where does the Partizip II go?", ask: "Choose one", options: ["Position 1", "Position 2", "At the very end", "Right after haben"], correct: 2, explain: "Ich habe gestern einen Film gesehen." },
    { prompt: "Which sentence is correct?", ask: "Choose one", options: ["Ich habe gelernt Deutsch.", "Ich gelernt habe Deutsch.", "Ich habe Deutsch gelernt.", "Ich Deutsch gelernt habe."], correct: 2, explain: "haben in position 2, participle last." },
    { prompt: "___ du gestern ins Kino gegangen?", ask: "Complete the question", options: ["Hast", "Bist", "Hat", "Ist"], correct: 1, explain: "gehen takes sein: Bist du ... gegangen?" },
    { prompt: "Which group of verbs takes 'sein'?", ask: "Choose one", options: ["All verbs", "Movement and change of state", "Only regular verbs", "Verbs with a prefix"], correct: 1, explain: "gehen, fahren, kommen, aufstehen, bleiben, sein, werden." },
    { prompt: "Ich ___ letztes Jahr in Deutschland ___. (sein)", ask: "Complete both gaps", options: ["habe / gewesen", "bin / gewesen", "bin / gewest", "habe / gewest"], correct: 1, explain: "sein itself takes sein: ich bin gewesen." },
    { prompt: "Regular verbs form the Partizip II as ...", ask: "Complete the rule", options: ["ge- + stem + -t", "ge- + stem + -en", "stem + -te", "just the stem"], correct: 0, explain: "machen → gemacht, spielen → gespielt." }
  ],

  // ---------- 11. Präteritum of haben and sein ----------
  g_habs: [
    { prompt: "Gestern ___ ich müde. (sein)", ask: "Präteritum of 'sein'", options: ["bin", "war", "ist", "hatte"], correct: 1, explain: "sein → war" },
    { prompt: "Ich ___ gestern keine Zeit. (haben)", ask: "Präteritum of 'haben'", options: ["war", "bin", "hatte", "habe"], correct: 2, explain: "haben → hatte" },
    { prompt: "Wir ___ letzte Woche in Köln. (sein)", ask: "Präteritum of 'sein'", options: ["hatten", "waren", "haben", "sind"], correct: 1, explain: "wir waren" },
    { prompt: "Sie ___ ein großes Haus. (haben, she)", ask: "Präteritum of 'haben'", options: ["war", "hatte", "hat", "ist"], correct: 1, explain: "sie hatte" },
    { prompt: "___ du gestern krank? (sein)", ask: "Präteritum of 'sein'", options: ["Hattest", "Bist", "Warst", "Bin"], correct: 2, explain: "du warst" },
    { prompt: "___ du gestern Zeit? (haben)", ask: "Präteritum of 'haben'", options: ["Warst", "Hattest", "Hast", "Bist"], correct: 1, explain: "du hattest" },
    { prompt: "Er ___ als Kind sehr klein. (sein)", ask: "Präteritum of 'sein'", options: ["hatte", "ist", "war", "wart"], correct: 2, explain: "er war" },
    { prompt: "Ihr ___ gestern nicht da. (sein)", ask: "Präteritum of 'sein'", options: ["wart", "waren", "hattet", "seid"], correct: 0, explain: "ihr wart — note: no -e-." },
    { prompt: "Ihr ___ viel Glück. (haben)", ask: "Präteritum of 'haben'", options: ["wart", "hattet", "hatten", "habt"], correct: 1, explain: "ihr hattet" },
    { prompt: "Meine Eltern ___ ein Auto. (haben)", ask: "Präteritum of 'haben'", options: ["hatte", "hatten", "waren", "hattet"], correct: 1, explain: "Plural: sie hatten." },
    { prompt: "Die Kinder ___ im Park. (sein)", ask: "Präteritum of 'sein'", options: ["war", "wart", "waren", "hatten"], correct: 2, explain: "sie waren" },
    { prompt: "Es ___ sehr kalt. (sein)", ask: "Präteritum of 'sein'", options: ["hatte", "war", "ist", "waren"], correct: 1, explain: "es war" },
    { prompt: "Wir ___ Hunger. (haben)", ask: "Präteritum of 'haben'", options: ["hatte", "waren", "hatten", "hattet"], correct: 2, explain: "wir hatten" },
    { prompt: "Wo ___ du gestern Abend? (sein)", ask: "Präteritum of 'sein'", options: ["hattest", "warst", "bist", "wart"], correct: 1, explain: "Wo warst du?" },
    { prompt: "Ich ___ letztes Jahr in Indien. (sein)", ask: "Präteritum of 'sein'", options: ["hatte", "bin", "war", "waren"], correct: 2, explain: "ich war" },

    // choosing between them
    { prompt: "Which sentence is correct?", ask: "Choose one", options: ["Ich war Hunger.", "Ich hatte müde.", "Ich hatte Hunger.", "Ich war einen Hund."], correct: 2, explain: "Hunger haben — German 'has' hunger, it isn't hungry." },
    { prompt: "Ich ___ 20 Jahre alt.", ask: "haben or sein?", options: ["hatte", "war", "hatten", "waren"], correct: 1, explain: "Age uses sein: ich war 20." },
    { prompt: "Ich ___ Angst.", ask: "haben or sein?", options: ["war", "hatte", "waren", "wart"], correct: 1, explain: "Angst haben." },
    { prompt: "Which pronoun goes with 'wart'?", ask: "Choose the subject", options: ["wir", "ihr", "sie", "du"], correct: 1, explain: "ihr wart." },
    { prompt: "Which pronoun goes with 'hatten'?", ask: "Choose the subject", options: ["ich", "du", "wir", "ihr"], correct: 2, explain: "wir hatten (also sie/Sie hatten)." },
    { prompt: "Frau Klein, wo ___ Sie gestern? (sein)", ask: "Präteritum, formal", options: ["war", "wart", "waren", "warst"], correct: 2, explain: "Formal Sie takes the plural form: waren." },
    { prompt: "In spoken German, the past of 'sein' is usually ...", ask: "Choose one", options: ["ich bin gewesen", "ich war", "ich werde sein", "ich sei"], correct: 1, explain: "sein and haben prefer the Präteritum even in speech." },
    { prompt: "Der Film ___ sehr gut. (sein)", ask: "Präteritum of 'sein'", options: ["hatte", "war", "waren", "ist"], correct: 1, explain: "Singular subject: war." },
    { prompt: "Wir ___ keine Zeit, deshalb ___ wir zu Hause.", ask: "Fill both gaps", options: ["waren / hatten", "hatten / waren", "hatten / hatten", "waren / waren"], correct: 1, explain: "Zeit haben → hatten; zu Hause sein → waren." },
    { prompt: "___ ihr gestern im Kino? (sein)", ask: "Präteritum of 'sein'", options: ["Wart", "Waren", "Hattet", "Seid"], correct: 0, explain: "Wart ihr ...?" }
  ],

  // ---------- 12. Akkusativ and Dativ ----------
  g_case: [
    { prompt: "Ich sehe ___ Mann.", ask: "Akkusativ", options: ["der", "dem", "des", "den"], correct: 3, explain: "Masculine direct object: den." },
    { prompt: "Ich sehe ___ Frau.", ask: "Akkusativ", options: ["den", "die", "der", "dem"], correct: 1, explain: "Feminine stays 'die' in the Akkusativ." },
    { prompt: "Ich sehe ___ Kind.", ask: "Akkusativ", options: ["dem", "den", "das", "der"], correct: 2, explain: "Neuter stays 'das'." },
    { prompt: "Ich sehe ___ Kinder.", ask: "Akkusativ, plural", options: ["den", "die", "dem", "der"], correct: 1, explain: "Plural stays 'die' in the Akkusativ." },
    { prompt: "Wir haben ___ Hund.", ask: "Akkusativ", options: ["einem", "einen", "eines", "ein"], correct: 1, explain: "Masculine indefinite Akkusativ: einen." },
    { prompt: "Sie kauft ___ Jacke.", ask: "Akkusativ", options: ["einen", "eine", "einem", "ein"], correct: 1, explain: "Feminine: eine Jacke." },
    { prompt: "Er liest ___ Buch.", ask: "Akkusativ", options: ["einen", "einem", "ein", "eines"], correct: 2, explain: "Neuter: ein Buch." },

    { prompt: "Ich gebe ___ Kind ein Buch.", ask: "Dativ", options: ["den", "der", "das", "dem"], correct: 3, explain: "Neuter indirect object: dem." },
    { prompt: "Ich gebe ___ Mann das Buch.", ask: "Dativ", options: ["dem", "den", "der", "des"], correct: 0, explain: "Masculine Dativ: dem." },
    { prompt: "Er hilft ___ Frau.", ask: "Dativ", options: ["dem", "die", "der", "den"], correct: 2, explain: "Feminine Dativ: der." },
    { prompt: "Ich danke ___ Kindern.", ask: "Dativ, plural", options: ["die", "der", "dem", "den"], correct: 3, explain: "Plural Dativ: den, and the noun adds -n." },
    { prompt: "Ich helfe ___ Mann.", ask: "Dativ", options: ["den", "dem", "der", "des"], correct: 1, explain: "helfen always takes the Dativ." },

    // verbs that force the dative
    { prompt: "Which verb always takes the Dativ?", ask: "Choose one", options: ["sehen", "kaufen", "helfen", "lesen"], correct: 2, explain: "helfen, danken, gefallen, gehören, antworten." },
    { prompt: "Das Buch gehört ___ Lehrerin.", ask: "Dativ", options: ["die", "der", "den", "dem"], correct: 1, explain: "gehören + Dativ, feminine: der Lehrerin." },
    { prompt: "Der Film gefällt ___ Kindern.", ask: "Dativ, plural", options: ["die", "der", "den", "dem"], correct: 2, explain: "gefallen + Dativ, plural: den Kindern." },
    { prompt: "Ich antworte ___ Chef.", ask: "Dativ", options: ["den", "dem", "der", "des"], correct: 1, explain: "antworten + Dativ." },

    // two objects at once
    { prompt: "Ich gebe ___ Freund ___ Buch.", ask: "Dativ then Akkusativ", options: ["den / dem", "dem / das", "dem / dem", "den / das"], correct: 1, explain: "Person = Dativ (dem Freund), thing = Akkusativ (das Buch)." },
    { prompt: "In 'Ich schenke der Mutter eine Blume', which is Akkusativ?", ask: "Choose one", options: ["der Mutter", "eine Blume", "Ich", "schenke"], correct: 1, explain: "The thing given is the direct object." },
    { prompt: "Which comes first when both are nouns?", ask: "Choose the order", options: ["Akkusativ then Dativ", "Dativ then Akkusativ", "Either order", "Only one is allowed"], correct: 1, explain: "Ich gebe dem Mann den Ball." },

    // pronouns
    { prompt: "Kannst du ___ helfen? (ich)", ask: "Dativ pronoun", options: ["mich", "mir", "ich", "mein"], correct: 1, explain: "helfen + Dativ: mir." },
    { prompt: "Er sieht ___ nicht. (ich)", ask: "Akkusativ pronoun", options: ["mir", "mich", "ich", "mein"], correct: 1, explain: "sehen + Akkusativ: mich." },
    { prompt: "Ich rufe ___ morgen an. (du)", ask: "Akkusativ pronoun", options: ["dir", "dich", "du", "dein"], correct: 1, explain: "anrufen + Akkusativ: dich." },
    { prompt: "Das gehört ___. (du)", ask: "Dativ pronoun", options: ["dich", "dir", "du", "dein"], correct: 1, explain: "gehören + Dativ: dir." },

    // recognising the roles
    { prompt: "The Akkusativ marks the ...", ask: "Complete the rule", options: ["direct object", "indirect object", "subject", "owner"], correct: 0, explain: "Who or what receives the action directly." },
    { prompt: "Which sentence is correct?", ask: "Choose one", options: ["Ich sehe der Mann.", "Ich sehe den Mann.", "Ich sehe dem Mann.", "Ich sehe des Mann."], correct: 1, explain: "Direct object, masculine: den Mann." }
  ],

  // ---------- 13. Formal email ----------
  g_mail: [
    { prompt: "___ Damen und Herren,", ask: "Formal opening", options: ["Liebe", "Sehr geehrte", "Guten", "Hallo"], correct: 1, explain: "Used when you don't know the name." },
    { prompt: "___ Frau Müller,", ask: "Formal opening", options: ["Sehr geehrte", "Sehr geehrter", "Liebe", "Hallo"], correct: 0, explain: "geehrte for a woman, geehrter for a man." },
    { prompt: "___ Herr Bauer,", ask: "Formal opening", options: ["Sehr geehrte", "Sehr geehrter", "Lieber", "Hallo"], correct: 1, explain: "Sehr geehrter Herr Bauer." },
    { prompt: "___ Anna, wie geht es dir?", ask: "Informal opening", options: ["Mit freundlichen", "Hochachtungsvoll", "Liebe", "Sehr geehrte"], correct: 2, explain: "Liebe Anna — informal, for a woman." },
    { prompt: "___ Tom, danke für deine Nachricht.", ask: "Informal opening", options: ["Liebe", "Lieber", "Sehr geehrter", "Geehrter"], correct: 1, explain: "Lieber for a man." },
    { prompt: "What follows the greeting line?", ask: "Choose one", options: ["A full stop", "A comma", "A question mark", "Nothing"], correct: 1, explain: "Sehr geehrte Frau Müller, — then the next line starts lowercase." },

    { prompt: "___ Grüßen, Anna", ask: "Formal closing", options: ["Viele", "Liebe", "Mit freundlichen", "Bis"], correct: 2, explain: "Mit freundlichen Grüßen — the standard formal sign-off." },
    { prompt: "Which closing suits a friend?", ask: "Choose the register", options: ["Mit freundlichen Grüßen", "Liebe Grüße", "Hochachtungsvoll", "Sehr geehrte"], correct: 1, explain: "Liebe Grüße is informal." },
    { prompt: "Is there a comma after 'Mit freundlichen Grüßen'?", ask: "Choose one", options: ["Yes, always", "No", "Only if formal", "Only in emails"], correct: 1, explain: "No punctuation — the name simply goes on the next line." },

    { prompt: "Vielen ___ im Voraus.", ask: "Complete the phrase", options: ["Danke", "Bitte", "Gruß", "Dank"], correct: 3, explain: "Vielen Dank im Voraus — thanks in advance." },
    { prompt: "Ich ___ mich für Ihren Kurs.", ask: "Complete the phrase", options: ["interessiere", "interessiert", "interessieren", "interessierst"], correct: 0, explain: "Ich interessiere mich für ..." },
    { prompt: "___ Sie mir bitte die Preise mitteilen?", ask: "Polite request", options: ["Kann", "Können", "Könnt", "Konnten"], correct: 1, explain: "Können Sie ...? — formal and polite." },
    { prompt: "Ich ___ gern mehr Informationen.", ask: "Polite wish", options: ["habe", "hätte", "hatte", "haben"], correct: 1, explain: "Ich hätte gern — softer than 'ich will'." },
    { prompt: "___ für Ihre schnelle Antwort.", ask: "Complete the phrase", options: ["Danke", "Bitte", "Gruß", "Sehr"], correct: 0, explain: "Danke für Ihre Antwort." },
    { prompt: "Ich freue mich auf ___ Antwort. (formal)", ask: "Which possessive?", options: ["deine", "Ihre", "eure", "seine"], correct: 1, explain: "Formal Ihre, always capitalised." },
    { prompt: "In a formal email, 'you' is ...", ask: "Choose one", options: ["du", "ihr", "Sie", "man"], correct: 2, explain: "Sie, and its forms Ihnen and Ihr are all capitalised." },

    { prompt: "Which order is correct for a formal email?", ask: "Choose one", options: ["Greeting, closing, body", "Body, greeting, closing", "Greeting, body, closing", "Closing, body, greeting"], correct: 2, explain: "Anrede, then the content, then Grußformel." },
    { prompt: "Mit ___ Grüßen", ask: "Complete the closing", options: ["freundlich", "freundlichen", "freundliche", "freundlicher"], correct: 1, explain: "Dativ plural after 'mit': freundlichen Grüßen." },
    { prompt: "Ich schreibe ___ Ihnen, weil ich eine Frage habe.", ask: "Which word fits?", options: ["an", "zu", "für", "bei"], correct: 0, explain: "Ich schreibe an Sie / Ihnen — 'an' introduces the addressee." },
    { prompt: "Which is too informal for an email to a school?", ask: "Choose one", options: ["Sehr geehrte Damen und Herren,", "Mit freundlichen Grüßen", "Hallo Leute!", "Vielen Dank im Voraus."], correct: 2, explain: "Keep the register formal with an institution." },
    { prompt: "___ Sie mir bitte einen Termin geben?", ask: "Polite request", options: ["Können", "Kannst", "Könnt", "Kann"], correct: 0, explain: "Formal Sie: Können Sie ...?" },
    { prompt: "Ich möchte mich für den Kurs ___.", ask: "Complete the phrase", options: ["anmelde", "anmelden", "angemeldet", "meldet an"], correct: 1, explain: "After a modal the verb stays whole at the end." },
    { prompt: "Entschuldigen Sie bitte ___ späte Antwort.", ask: "Which article?", options: ["der", "die", "das", "den"], correct: 1, explain: "die Antwort, feminine, unchanged in the Akkusativ." },
    { prompt: "Which sign-off is the most formal?", ask: "Choose one", options: ["Liebe Grüße", "Bis bald", "Mit freundlichen Grüßen", "Tschüss"], correct: 2, explain: "The standard for business and official letters." },
    { prompt: "After 'Sehr geehrte Frau Müller,' the next word starts with ...", ask: "Choose one", options: ["a capital letter", "a small letter", "a number", "a comma"], correct: 1, explain: "ich schreibe Ihnen ... — lowercase, because the sentence continues." }
  ]

  };

  Object.assign(grammarExercises, batch);
  console.log('[Sprachblitz] grammar batch 2 applied:', Object.keys(batch).join(', '));
})();
