// Sprachblitz — grammar practice expansion, batch 1 of 6
// Sections brought up to 25 questions: g_pron, g_sein
//
// This file patches the grammar banks at load time. It must be loaded AFTER
// the main script in index.html. Nothing inside index.html needs editing
// except adding the one <script> tag that pulls this file in.

(function () {
  if (typeof grammarExercises === 'undefined') {
    console.error('[Sprachblitz] grammar batch 1 loaded too early — grammarExercises not found.');
    return;
  }

  var batch = {

  // ---------- 2. Personal pronouns ----------
  g_pron: [
    // recognition: pronoun from the verb form
    { prompt: "___ bin Anna.", ask: "Which pronoun fits?", options: ["Wir", "Du", "Ich", "Ihr"], correct: 2, explain: "Only 'ich' goes with 'bin'." },
    { prompt: "___ bist mein Freund.", ask: "Which pronoun fits?", options: ["Sie", "Er", "Es", "Du"], correct: 3, explain: "'bist' belongs to 'du'." },
    { prompt: "___ ist meine Mutter.", ask: "Which pronoun fits?", options: ["Du", "Ihr", "Sie", "Wir"], correct: 2, explain: "sie ist — she is." },
    { prompt: "___ sind aus Berlin.", ask: "Which pronoun fits?", options: ["Er", "Ich", "Wir", "Du"], correct: 2, explain: "wir sind — first person plural." },
    { prompt: "___ seid sehr nett.", ask: "Which pronoun fits?", options: ["Wir", "Ich", "Sie", "Ihr"], correct: 3, explain: "'seid' only ever goes with 'ihr'." },
    { prompt: "___ ist mein Bruder.", ask: "Which pronoun fits?", options: ["Sie", "Es", "Er", "Ihr"], correct: 2, explain: "er ist — he is." },
    { prompt: "___ heiße Paul.", ask: "Which pronoun fits?", options: ["Du", "Ich", "Er", "Wir"], correct: 1, explain: "The ending -e marks 'ich'." },
    { prompt: "___ wohnst in Köln.", ask: "Which pronoun fits?", options: ["Ich", "Er", "Du", "Wir"], correct: 2, explain: "The ending -st marks 'du'." },

    // which pronoun does this verb form take?
    { prompt: "Which pronoun goes with 'bin'?", ask: "Choose the subject", options: ["du", "er", "ich", "wir"], correct: 2, explain: "ich bin." },
    { prompt: "Which pronoun goes with 'seid'?", ask: "Choose the subject", options: ["wir", "ihr", "sie", "du"], correct: 1, explain: "ihr seid." },

    // replacing a noun — gender must be tracked
    { prompt: "Die Frau arbeitet. ___ ist Ärztin.", ask: "Replace the noun", options: ["Er", "Es", "Sie", "Ihr"], correct: 2, explain: "die Frau is feminine, so 'sie'." },
    { prompt: "Der Tisch ist neu. ___ ist braun.", ask: "Replace the noun", options: ["Sie", "Er", "Es", "Wir"], correct: 1, explain: "der Tisch is masculine — things are 'er' too, not 'it'." },
    { prompt: "Das Auto ist alt. ___ fährt langsam.", ask: "Replace the noun", options: ["Er", "Sie", "Es", "Wir"], correct: 2, explain: "das Auto is neuter, so 'es'." },
    { prompt: "Das Kind spielt. ___ ist glücklich.", ask: "Replace the noun", options: ["Er", "Sie", "Es", "Wir"], correct: 2, explain: "das Kind is neuter — 'es', whether boy or girl." },
    { prompt: "Das Mädchen ist klein. ___ heißt Mia.", ask: "Replace the noun", options: ["Sie", "Er", "Es", "Ihr"], correct: 2, explain: "das Mädchen is grammatically neuter, so 'es'." },
    { prompt: "Mein Vater arbeitet im Büro. ___ ist Ingenieur.", ask: "Replace the noun", options: ["Sie", "Es", "Er", "Wir"], correct: 2, explain: "der Vater is masculine." },
    { prompt: "Meine Eltern kommen aus Indien. ___ wohnen dort.", ask: "Replace the noun", options: ["Er", "Sie", "Ihr", "Es"], correct: 1, explain: "Plural nouns become 'sie'." },
    { prompt: "Die Bücher sind neu. ___ sind teuer.", ask: "Replace the noun", options: ["Es", "Er", "Sie", "Ihr"], correct: 2, explain: "Plural: sie sind." },

    // groups: working out who 'we' and 'you plural' are
    { prompt: "Anna und ich lernen. ___ lernen Deutsch.", ask: "Which pronoun fits?", options: ["Ihr", "Sie", "Wir", "Du"], correct: 2, explain: "Anyone plus 'ich' becomes 'wir'." },
    { prompt: "Maria und ich – ___ sind Schwestern.", ask: "Which pronoun fits?", options: ["ihr", "wir", "sie", "Sie"], correct: 1, explain: "'... und ich' is always 'wir'." },
    { prompt: "Peter und du – ___ seid Freunde.", ask: "Which pronoun fits?", options: ["wir", "sie", "ihr", "Sie"], correct: 2, explain: "'... und du' is 'ihr'." },
    { prompt: "Tom und Lisa kommen. ___ kommen aus Wien.", ask: "Which pronoun fits?", options: ["Wir", "Ihr", "Sie", "Er"], correct: 2, explain: "Two other people: sie." },

    // formal vs informal — the hardest part for A1
    { prompt: "Which is the formal 'you'?", ask: "Choose one", options: ["du", "ihr", "Sie", "sie"], correct: 2, explain: "Sie, always capitalised, singular or plural." },
    { prompt: "Which is the informal 'you' for several people?", ask: "Choose one", options: ["du", "ihr", "Sie", "wir"], correct: 1, explain: "ihr — for a group of friends or children." },
    { prompt: "Frau Müller, woher kommen ___?", ask: "Formal or informal?", options: ["du", "ihr", "sie", "Sie"], correct: 3, explain: "Addressing an adult by surname takes formal 'Sie'." }
  ],

  // ---------- 3. sein (to be) ----------
  g_sein: [
    // straight conjugation, pronoun given
    { prompt: "Ich ___ müde.", ask: "Fill in 'sein'", options: ["sind", "bist", "ist", "bin"], correct: 3, explain: "ich bin" },
    { prompt: "Du ___ sehr freundlich.", ask: "Fill in 'sein'", options: ["bin", "seid", "bist", "ist"], correct: 2, explain: "du bist" },
    { prompt: "Er ___ Lehrer.", ask: "Fill in 'sein'", options: ["bist", "ist", "sind", "seid"], correct: 1, explain: "er ist" },
    { prompt: "Sie ___ meine Schwester.", ask: "Fill in 'sein'", options: ["bin", "bist", "ist", "sind"], correct: 2, explain: "sie ist — one person." },
    { prompt: "Es ___ heute kalt.", ask: "Fill in 'sein'", options: ["bin", "ist", "sind", "bist"], correct: 1, explain: "es ist" },
    { prompt: "Wir ___ zu Hause.", ask: "Fill in 'sein'", options: ["seid", "sind", "bin", "ist"], correct: 1, explain: "wir sind" },
    { prompt: "Ihr ___ willkommen.", ask: "Fill in 'sein'", options: ["bist", "ist", "seid", "sind"], correct: 2, explain: "ihr seid" },
    { prompt: "Sie ___ aus Spanien.", ask: "Fill in 'sein' (they)", options: ["ist", "seid", "sind", "bin"], correct: 2, explain: "sie sind — plural." },
    { prompt: "Ich ___ Student.", ask: "Fill in 'sein'", options: ["ist", "bin", "bist", "sind"], correct: 1, explain: "ich bin" },
    { prompt: "Wir ___ nicht allein.", ask: "Fill in 'sein'", options: ["bin", "ist", "sind", "seid"], correct: 2, explain: "wir sind, and 'nicht' comes after the verb." },

    // subject is a noun, not a pronoun
    { prompt: "Der Kaffee ___ heiß.", ask: "Fill in 'sein'", options: ["bin", "bist", "ist", "sind"], correct: 2, explain: "One thing: ist." },
    { prompt: "Die Bücher ___ neu.", ask: "Fill in 'sein'", options: ["ist", "sind", "seid", "bin"], correct: 1, explain: "Plural subject: sind." },
    { prompt: "Anna und Tom ___ Freunde.", ask: "Fill in 'sein'", options: ["ist", "sind", "seid", "bist"], correct: 1, explain: "Two people: sind." },
    { prompt: "Meine Eltern ___ in Berlin.", ask: "Fill in 'sein'", options: ["ist", "bin", "sind", "seid"], correct: 2, explain: "Eltern is plural: sind." },
    { prompt: "Das ___ meine Schwester.", ask: "Fill in 'sein'", options: ["bin", "bist", "ist", "sind"], correct: 2, explain: "'Das ist ...' is the standard way to introduce someone." },
    { prompt: "Das ___ meine Eltern.", ask: "Fill in 'sein'", options: ["ist", "sind", "bist", "bin"], correct: 1, explain: "'Das' stays, but the verb follows the plural: Das sind ..." },
    { prompt: "Du und ich, wir ___ ein Team.", ask: "Fill in 'sein'", options: ["seid", "sind", "bin", "ist"], correct: 1, explain: "'wir' governs the verb: sind." },

    // questions — verb comes first
    { prompt: "___ du glücklich?", ask: "Fill in 'sein'", options: ["Bin", "Bist", "Ist", "Seid"], correct: 1, explain: "In a yes/no question the verb leads: Bist du ...?" },
    { prompt: "___ ihr fertig?", ask: "Fill in 'sein'", options: ["Sind", "Seid", "Bist", "Ist"], correct: 1, explain: "Seid ihr fertig?" },
    { prompt: "Wie alt ___ du?", ask: "Fill in 'sein'", options: ["bin", "ist", "bist", "seid"], correct: 2, explain: "du bist — the verb stays in position 2 after 'wie alt'." },
    { prompt: "Wie alt ___ Sie?", ask: "Fill in 'sein'", options: ["bist", "ist", "seid", "sind"], correct: 3, explain: "Formal Sie takes the same form as plural: sind." },
    { prompt: "Frau Klein, ___ Sie Ärztin?", ask: "Fill in 'sein'", options: ["bist", "seid", "sind", "ist"], correct: 2, explain: "Sie sind — formal address." },
    { prompt: "Wo ___ meine Schlüssel?", ask: "Fill in 'sein'", options: ["ist", "sind", "bist", "bin"], correct: 1, explain: "Schlüssel here is plural: sind." },

    // pick the pronoun from the verb (reverse direction)
    { prompt: "___ seid zu spät.", ask: "Which pronoun fits 'seid'?", options: ["Wir", "Ihr", "Sie", "Du"], correct: 1, explain: "'seid' only pairs with 'ihr'." },
    { prompt: "Which sentence is correct?", ask: "Choose one", options: ["Ihr sind nett.", "Wir seid nett.", "Du ist nett.", "Ihr seid nett."], correct: 3, explain: "ihr seid — the other three mismatch subject and verb." }
  ]
};

  Object.assign(grammarExercises, batch);
  console.log('[Sprachblitz] grammar batch 1 applied:', Object.keys(batch).join(', '));
})();
