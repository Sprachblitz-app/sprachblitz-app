// Sprachblitz — grammar practice expansion, batch 3 of 6
// Sections brought up to 25 questions: 
//   g_neg, g_prep, g_refl, g_time, g_adv, g_word

(function () {
  if (typeof grammarExercises === 'undefined') {
    console.error('[Sprachblitz] grammar batch 3 loaded too early — grammarExercises not found.');
    return;
  }

  var batch = {

  // ---------- 14. Negation (nicht vs kein) ----------
  g_neg: [
    { prompt: "Das ist ___ richtig.", ask: "nicht or kein?", options: ["kein", "nicht", "keine", "keine"], correct: 1, explain: "nicht for adjectives: nicht richtig." },
    { prompt: "Das ist ___ Buch.", ask: "nicht or kein?", options: ["nicht", "kein", "keine", "nicht"], correct: 1, explain: "kein for nouns: kein Buch." },
    { prompt: "Ich habe ___ Zeit.", ask: "nicht or kein?", options: ["nicht", "kein", "keine", "nicht"], correct: 1, explain: "kein for nouns: keine Zeit." },
    { prompt: "Ich bin ___ müde.", ask: "nicht or kein?", options: ["kein", "nicht", "keine", "kein"], correct: 1, explain: "nicht for adjectives: nicht müde." },
    { prompt: "Das ist ___ schön.", ask: "nicht or kein?", options: ["kein", "nicht", "keine", "nicht"], correct: 1, explain: "nicht schön — for how something is." },
    { prompt: "Wir haben ___ Geld.", ask: "nicht or kein?", options: ["nicht", "kein", "keine", "nicht"], correct: 1, explain: "kein Geld — there is no money." },
    { prompt: "Der Film ist ___ interessant.", ask: "nicht or kein?", options: ["kein", "nicht", "keine", "nicht"], correct: 1, explain: "nicht interessant." },
    { prompt: "Ich kenne ___ Menschen hier.", ask: "nicht or kein?", options: ["nicht", "kein", "keine", "nicht"], correct: 1, explain: "kein Menschen / keine Menschen (plural)." },
    { prompt: "Das Auto ist ___ neu.", ask: "nicht or kein?", options: ["kein", "nicht", "keine", "nicht"], correct: 1, explain: "nicht neu — quality or state." },
    { prompt: "Ich mag ___ Spinat.", ask: "nicht or kein?", options: ["nicht", "kein", "keine", "nicht"], correct: 1, explain: "kein Spinat — no spinach." },
    { prompt: "___ alle Schüler sind da.", ask: "nicht or kein?", options: ["kein", "nicht", "keine", "Nicht"], correct: 1, explain: "nicht alle — not all." },
    { prompt: "Das Buch ist ___ gut.", ask: "nicht or kein?", options: ["kein", "nicht", "keine", "nicht"], correct: 1, explain: "nicht gut." },
    { prompt: "Ich sehe ___ Problem.", ask: "nicht or kein?", options: ["nicht", "kein", "keine", "nicht"], correct: 1, explain: "kein Problem." },
    { prompt: "Das verstehe ich ___.", ask: "nicht or kein?", options: ["kein", "nicht", "keine", "kein"], correct: 1, explain: "Das verstehe ich nicht — whole sentence negation." },
    { prompt: "Ich bin ___ fertig.", ask: "nicht or kein?", options: ["kein", "nicht", "keine", "nicht"], correct: 1, explain: "nicht fertig." },
    { prompt: "Das sind ___ Freunde.", ask: "nicht or kein?", options: ["nicht", "kein", "keine", "nicht"], correct: 2, explain: "Das sind keine Freunde." },
    { prompt: "Ich esse ___ Fleisch.", ask: "nicht or kein?", options: ["nicht", "kein", "keine", "nicht"], correct: 1, explain: "kein Fleisch." },
    { prompt: "Diese Klasse ist ___ schwer.", ask: "nicht or kein?", options: ["kein", "nicht", "keine", "nicht"], correct: 1, explain: "nicht schwer." },
    { prompt: "Das ist ___ Angelegenheit.", ask: "nicht or kein?", options: ["nicht", "kein", "keine", "nicht"], correct: 1, explain: "kein Angelegenheit (but this would be 'keine Angelegenheit')." },
    { prompt: "Ich habe ___ Lust.", ask: "nicht or kein?", options: ["nicht", "kein", "keine", "nicht"], correct: 1, explain: "keine Lust — no desire." },
    { prompt: "Das ist ___ teuer.", ask: "nicht or kein?", options: ["kein", "nicht", "keine", "nicht"], correct: 1, explain: "nicht teuer." },
    { prompt: "Ich kenne Sie ___.", ask: "nicht or kein?", options: ["kein", "nicht", "keine", "kein"], correct: 1, explain: "Ich kenne Sie nicht." },
    { prompt: "Das ist ___ normal.", ask: "nicht or kein?", options: ["kein", "nicht", "keine", "nicht"], correct: 1, explain: "nicht normal." },
    { prompt: "Es gibt ___ Lösung.", ask: "nicht or kein?", options: ["nicht", "kein", "keine", "nicht"], correct: 1, explain: "keine Lösung." },
    { prompt: "Which sentence is correct?", ask: "Choose one", options: ["Das ist nicht kein Fehler.", "Das ist kein Fehler.", "Das ist kein nicht Fehler.", "Das ist nicht Fehler."], correct: 1, explain: "Only one negation: Das ist kein Fehler (It's not a mistake)." }
  ],

  // ---------- 15. Prepositions (Akkusativ/Dativ) ----------
  g_prep: [
    { prompt: "Ich gehe ___ den Park. (in)", ask: "Akkusativ or Dativ?", options: ["in dem", "in den", "im", "in der"], correct: 1, explain: "Movement into: Akkusativ (in den Park)." },
    { prompt: "Ich bin ___ Park. (in)", ask: "Akkusativ or Dativ?", options: ["in den", "im", "in dem", "in der"], correct: 1, explain: "Location: Dativ (im = in dem Park)." },
    { prompt: "Ich lege das Buch ___ den Tisch. (auf)", ask: "Akkusativ or Dativ?", options: ["auf dem", "auf den", "aufs", "auf der"], correct: 1, explain: "Movement onto: Akkusativ (auf den Tisch)." },
    { prompt: "Das Buch liegt ___ Tisch. (auf)", ask: "Akkusativ or Dativ?", options: ["auf den", "auf dem", "aufs", "auf der"], correct: 1, explain: "Location: Dativ (auf dem Tisch)." },
    { prompt: "Ich gehe ___ die Straße. (über)", ask: "Akkusativ or Dativ?", options: ["über der", "über den", "über die", "über dem"], correct: 2, explain: "Movement: Akkusativ (über die Straße)." },
    { prompt: "Die Lampe ist ___ der Straße. (über)", ask: "Akkusativ or Dativ?", options: ["über den", "über der", "über die", "über dem"], correct: 1, explain: "Location: Dativ (über der Straße)." },
    { prompt: "Ich gehe ___ das Fenster. (neben)", ask: "Akkusativ or Dativ?", options: ["neben den", "neben das", "neben dem", "nebens"], correct: 2, explain: "Movement: Akkusativ (neben das Fenster)." },
    { prompt: "Ich stehe ___ Fenster. (neben)", ask: "Akkusativ or Dativ?", options: ["neben das", "neben dem", "neben den", "neben der"], correct: 1, explain: "Location: Dativ (neben dem Fenster)." },
    { prompt: "Komm ___ mich! (zu)", ask: "Which form?", options: ["zu mir", "zum", "zu mich", "zur"], correct: 0, explain: "zu always takes Dativ: zu mir." },
    { prompt: "Ich fahre ___ Berlin. (nach)", ask: "Which form?", options: ["zum", "nach", "zum Berlin", "in Berlin"], correct: 1, explain: "nach + city/country without article: nach Berlin." },
    { prompt: "Ich fahre ___ Schweiz. (in)", ask: "Which form?", options: ["im", "in die", "in den", "zur"], correct: 1, explain: "in + country with article: in die Schweiz." },
    { prompt: "Das ist ___ mir. (für)", ask: "Which form?", options: ["fürs", "für mich", "für mir", "füren"], correct: 1, explain: "für takes Akkusativ: für mich." },
    { prompt: "Das ist ___ meinem Bruder. (ohne)", ask: "Which form?", options: ["ohne meinen", "ohne meinem", "ohne meines", "ohne meine"], correct: 0, explain: "ohne takes Akkusativ: ohne meinen Bruder." },
    { prompt: "Wir treffen uns ___ dem Kino. (vor)", ask: "Which form?", options: ["vor den", "vor dem", "vor der", "vor das"], correct: 1, explain: "vor (location) takes Dativ: vor dem Kino." },
    { prompt: "Ich stehe ___ der Tür. (hinter)", ask: "Which form?", options: ["hinter die", "hinter den", "hinter der", "hinter das"], correct: 2, explain: "hinter (location) takes Dativ: hinter der Tür." },
    { prompt: "Das Buch gehört ___ meine Schwester. (von)", ask: "Which form?", options: ["von meinen", "von meiner", "von meinem", "von meines"], correct: 1, explain: "von takes Dativ: von meiner Schwester." },
    { prompt: "Ich fahre ___ meinem Auto. (mit)", ask: "Which form?", options: ["mit mein", "mit meinem", "mit meinen", "mit meines"], correct: 1, explain: "mit takes Dativ: mit meinem Auto." },
    { prompt: "Das ist ___ Anne und Tom. (zwischen)", ask: "Which form?", options: ["zwischen Anne und Tom", "zwischen Anne und Tomen", "zwischen Annes und Toms", "zwischen die Anne"], correct: 0, explain: "zwischen + Dativ: zwischen Anne und Tom." },
    { prompt: "Ich gehe nicht ___ Schule. (zu)", ask: "Which form?", options: ["zu Schule", "zur Schule", "zum Schule", "in Schule"], correct: 1, explain: "zur Schule = zu der Schule." },
    { prompt: "Ich bin ___ Hause. (zu)", ask: "Which form?", options: ["zum", "zum Hause", "zu Hause", "zur Hause"], correct: 2, explain: "zu Hause (at home) is an idiom." },
    { prompt: "Wir sprechen ___ die Probleme. (über)", ask: "Which form?", options: ["über den", "über dem", "über die", "über der"], correct: 2, explain: "über (about) takes Akkusativ: über die Probleme." },
    { prompt: "Ich arbeite ___ diesem Projekt. (an)", ask: "Which form?", options: ["an den", "an dem", "an diesem", "an das"], correct: 2, explain: "an (work on) takes Dativ when expressing location: an diesem Projekt." },
    { prompt: "Komm ___ mir morgen! (zu)", ask: "Which form?", options: ["zu mir", "zu mich", "zum mir", "zur"], correct: 0, explain: "zu mir." },
    { prompt: "Das Geschenk ist ___ dich. (für)", ask: "Which form?", options: ["für du", "für dich", "für dir", "fürs"], correct: 1, explain: "für dich." },
    { prompt: "Prepositions that take only Dativ:", ask: "Choose one group", options: ["in, auf, unter", "mit, bei, von", "durch, gegen, ohne"], correct: 1, explain: "mit, bei, von, zu, nach, seit always take Dativ." }
  ],

  // ---------- 16. Reflexive verbs ----------
  g_refl: [
    { prompt: "Ich wasche ___. (myself)", ask: "Reflexive pronoun", options: ["mich", "mir", "mein", "meinen"], correct: 0, explain: "sich (3rd) / mich (1st) for accusative: Ich wasche mich." },
    { prompt: "Du setzest ___ hin. (yourself)", ask: "Reflexive pronoun", options: ["dir", "dich", "dein", "deinen"], correct: 1, explain: "du setzest dich hin." },
    { prompt: "Er interessiert ___ für Musik. (himself)", ask: "Reflexive pronoun", options: ["mich", "sich", "ihn", "im"], correct: 1, explain: "sich interessiert — 3rd person." },
    { prompt: "Wir freuen ___ auf Urlaub. (ourselves)", options: ["uns", "unsere", "unseren", "unser"], ask: "Reflexive pronoun", correct: 0, explain: "wir freuen uns." },
    { prompt: "Ihr vorstellt ___ falsch. (yourselves)", ask: "Reflexive pronoun", options: ["euch", "euer", "euren", "eure"], correct: 0, explain: "ihr vorstellt euch." },
    { prompt: "Sie erinnern ___ an das Buch. (themselves/formal)", ask: "Reflexive pronoun", options: ["sich", "ihnen", "ihren", "sie"], correct: 0, explain: "sie erinnern sich." },
    { prompt: "___ du wieder krank? (yourself)", ask: "Complete with reflexive", options: ["Wirst", "Machst", "Stellst", "Findest"], correct: 2, explain: "Stellst du dich krank? — Are you playing sick?" },
    { prompt: "Ich erinnere ___ an nichts. (myself)", ask: "Reflexive pronoun", options: ["mir", "mich", "mein", "meinen"], correct: 0, explain: "sich erinnern an (Akkusativ) — Ich erinnere mich (Akkusativ) an ..." },
    { prompt: "Das interessiert ___ nicht. (me/dative)", ask: "Which reflexive?", options: ["mir", "mich", "mein", "meinen"], correct: 0, explain: "sich interessieren takes Dativ in this context: Das interessiert mir nicht." },
    { prompt: "Ich stelle ___ einen neuen Job vor. (myself)", ask: "Reflexive pronoun", options: ["mir", "mich", "mein", "meinen"], correct: 0, explain: "sich vorstellen — Ich stelle mir einen Job vor." },
    { prompt: "Wir haben ___ erkältet. (ourselves)", ask: "Reflexive pronoun", options: ["uns", "unsere", "unseren", "unser"], correct: 0, explain: "Wir haben uns erkältet." },
    { prompt: "Er zieht ___ schnell an. (himself)", ask: "Reflexive pronoun", options: ["ihn", "sich", "ihm", "sein"], correct: 1, explain: "sich anziehen — Er zieht sich an." },
    { prompt: "Du fragst ___ warum. (yourself)", ask: "Reflexive pronoun", options: ["dir", "dich", "dein", "deinen"], correct: 1, explain: "Du fragst dich warum." },
    { prompt: "Sie entspannen ___ nach der Arbeit. (themselves)", ask: "Reflexive pronoun", options: ["sich", "ihnen", "ihren", "sie"], correct: 0, explain: "Sie entspannen sich." },
    { prompt: "Ich ärgere ___ über das Wetter. (myself)", ask: "Reflexive pronoun", options: ["mir", "mich", "mein", "meinen"], correct: 0, explain: "sich ärgern über — Ich ärgere mich." },
    { prompt: "Which verb is NOT reflexive?", ask: "Choose one", options: ["sich waschen", "sich freuen", "lesen", "sich erinnern"], correct: 2, explain: "lesen is a regular verb; the others all require reflexive pronouns." },
    { prompt: "Reflexive verbs in the 3rd person always take ...", ask: "Complete", options: ["sich", "sie", "ihm", "ihn"], correct: 0, explain: "3rd person (er/sie/es/sie) always uses 'sich' for reflexive verbs." },
    { prompt: "Wir müssen ___ beeilen. (hurry)", ask: "Complete the modal phrase", options: ["uns beeilen", "beeilen uns", "beeilen", "uns"], correct: 0, explain: "Wir müssen uns beeilen." },
    { prompt: "Ich kann ___ nicht vorstellen, dass ... (myself)", ask: "Reflexive pronoun", options: ["mir", "mich", "mein", "meinen"], correct: 0, explain: "Ich kann mir nicht vorstellen." },
    { prompt: "Du solltest ___ besser erinnern. (yourself)", ask: "Reflexive pronoun", options: ["dir", "dich", "dein", "deinen"], correct: 0, explain: "Du solltest dich besser erinnern." },
    { prompt: "Mein Bruder hat ___ angestrengt. (himself)", ask: "Reflexive pronoun", options: ["sich", "ihm", "ihn", "sein"], correct: 0, explain: "Er hat sich angestrengt." },
    { prompt: "Ihr seid ___ verspätet. (yourselves)", ask: "Reflexive pronoun", options: ["euch", "euer", "euren", "eure"], correct: 0, explain: "Ihr seid euch verspätet." },
    { prompt: "Ich habe ___ geirrt. (myself)", ask: "Reflexive pronoun", options: ["mir", "mich", "mein", "meinen"], correct: 0, explain: "Ich habe mich geirrt." },
    { prompt: "Können Sie ___ vorstellen? (yourself)", ask: "Formal reflexive", options: ["sich", "dir", "dich", "Ihren"], correct: 0, explain: "Können Sie sich vorstellen?" },
    { prompt: "Which is the correct past tense?", ask: "Choose one", options: ["Ich bin mich gewaschen.", "Ich habe mich gewaschen.", "Ich bin gewaschen.", "Ich habe sich gewaschen."], correct: 1, explain: "haben + past participle for most reflexive verbs." }
  ],

  // ---------- 17. Time expressions ----------
  g_time: [
    { prompt: "Ich arbeite von neun ___ fünf. (to)", ask: "Complete the time span", options: ["zum", "bis", "zu", "bis zu"], correct: 1, explain: "von ... bis (from ... to)." },
    { prompt: "Der Unterricht ___ um acht Uhr. (starts)", ask: "When?", options: ["findet", "anfängt", "fängt an", "beginnt"], correct: 2, explain: "anfangen or beginnen — Der Unterricht fängt an / beginnt." },
    { prompt: "Wir treffen ___ Montag. (on)", ask: "Which preposition?", options: ["an", "auf", "im", "den"], correct: 0, explain: "am Montag (an + dem)." },
    { prompt: "Das Konzert ist ___ Freitag um 20 Uhr.", ask: "Which preposition?", options: ["in", "am", "um", "zum"], correct: 1, explain: "am Freitag." },
    { prompt: "Wir fahren ___ Juni nach Italien. (in)", ask: "Which form?", options: ["zum Juni", "im Juni", "in Juni", "im"], correct: 1, explain: "im Juni (in + dem)." },
    { prompt: "Ich rufe ___ morgen an. (tomorrow)", ask: "Which adverb?", options: ["morgen", "morrow", "nächst Morgen", "der Morgen"], correct: 0, explain: "morgen (tomorrow)." },
    { prompt: "Das war ___ Woche. (last)", ask: "Which adverb?", options: ["die letzte", "letzte", "letztes", "das letzte"], correct: 1, explain: "letzte Woche (last week, without article)." },
    { prompt: "___ Stunde beginnt der Film. (in one hour)", ask: "Complete", options: ["In einer", "Nach einer", "Vor einer", "Um einer"], correct: 0, explain: "In einer Stunde — in one hour." },
    { prompt: "Ich warte seit zwei ___. (hours)", ask: "Which noun?", options: ["Stunden", "Stunde", "Zeit", "Zeiten"], correct: 0, explain: "seit zwei Stunden (since two hours = for two hours)." },
    { prompt: "Der Unterricht dauert ___ Minuten. (50)", ask: "How long?", options: ["fünfzig", "5.", "50.", "fünf und zehn"], correct: 0, explain: "fünfzig Minuten." },
    { prompt: "Komm um drei ___! (sharp)", ask: "Which word?", options: ["pünktlich", "genau", "Uhr", "Punkt"], correct: 2, explain: "um drei Uhr (exactly three o'clock)." },
    { prompt: "Das passierte ___ Abend.", ask: "Which preposition?", options: ["an", "am", "im", "um"], correct: 1, explain: "am Abend (in the evening)." },
    { prompt: "Wir haben ___ drei Tage Zeit. (nur)", ask: "Word order", options: ["nur", "vielleicht nur", "nur vielleicht", "ganz nur"], correct: 0, explain: "Wir haben nur drei Tage Zeit." },
    { prompt: "Ich bin jeden ___ im Gym. (Montag)", ask: "Which form?", options: ["Montag", "montag", "Montags", "den Montag"], correct: 0, explain: "jeden Montag." },
    { prompt: "Das passiert ___ Frühling. (in spring)", ask: "Which form?", options: ["im Frühling", "in Frühling", "zum Frühling", "am Frühling"], correct: 0, explain: "im Frühling (in dem Frühling)." },
    { prompt: "___ einer Woche komme ich. (in one week)", ask: "Complete", options: ["In", "Nach", "Vor", "Um"], correct: 0, explain: "In einer Woche." },
    { prompt: "Das ist schon ___ Tage her. (three)", ask: "Complete", options: ["drei", "drei Tage", "drei Tagen", "dreitag"], correct: 1, explain: "Es ist drei Tage her (It was three days ago)." },
    { prompt: "Öffnungszeiten: ___ 9:00-17:00", ask: "Which preposition?", options: ["Um", "Von", "An", "Zu"], correct: 1, explain: "Von 9:00 bis 17:00." },
    { prompt: "Ich rufe dich ___ einer Stunde an. (in)", ask: "Which form?", options: ["in einer", "nach einer", "vor einer", "um einer"], correct: 0, explain: "in einer Stunde." },
    { prompt: "Gestern war ___. (Monday)", ask: "Which form?", options: ["Montag", "der Montag", "Montags", "den Montag"], correct: 0, explain: "Gestern war Montag." },
    { prompt: "Das ist ___ Nacht passiert. (last)", ask: "Which adverb?", options: ["letzte", "letztes", "letzten", "der letzte"], correct: 0, explain: "in der letzten Nacht or letzte Nacht." },
    { prompt: "Wir treffen ___ 15 Minuten. (in)", ask: "Which form?", options: ["in", "nach", "vor", "zu"], correct: 0, explain: "in 15 Minuten." },
    { prompt: "Der Zug kommt ___ 14:30 an. (at)", ask: "Which preposition?", options: ["um", "an", "zu", "bis"], correct: 0, explain: "um 14:30." },
    { prompt: "Which is correct?", ask: "Choose one", options: ["Ich komme in 5 Minuten.", "Ich komme nach 5 Minuten.", "Ich komme vor 5 Minuten.", "Ich komme zu 5 Minuten."], correct: 0, explain: "in 5 Minuten = in 5 minutes (from now)." },
    { prompt: "Öffnungszeiten ___ Wochenende?", ask: "Which preposition?", options: ["am", "im", "am", "zu"], correct: 2, explain: "am Wochenende (on the weekend)." }
  ],

  // ---------- 18. Adverbs ----------
  g_adv: [
    { prompt: "Er läuft sehr ___.", ask: "Which adverb?", options: ["schnelle", "schnell", "schneller", "schnellste"], correct: 1, explain: "Adverbs don't take endings: sehr schnell." },
    { prompt: "Sie spricht ___ Deutsch.", ask: "Which adverb?", options: ["perfekt", "perfekte", "perfekter", "perfektest"], correct: 0, explain: "perfectly: sehr perfekt or einfach perfekt." },
    { prompt: "Das Auto fährt ___.", ask: "Which adverb?", options: ["langsam", "langsamen", "langsame", "langsamst"], correct: 0, explain: "slowly: Das Auto fährt langsam." },
    { prompt: "Ich bin ___ fertig.", ask: "Which adverb?", options: ["schnelle", "schnell", "schneider", "bald"], correct: 0, explain: "soon/quickly: Ich bin bald fertig." },
    { prompt: "Das ist ___ zu teuer.", ask: "Which adverb?", options: ["viel", "viele", "vielen", "vieles"], correct: 0, explain: "much/way: Das ist viel zu teuer." },
    { prompt: "Ich kenne ihn ___.", ask: "Which adverb?", options: ["gut", "gute", "guter", "gutes"], correct: 0, explain: "well: Ich kenne ihn gut." },
    { prompt: "Sie arbeitet ___.", ask: "Which adverb?", options: ["hart", "harte", "härter", "hartest"], correct: 0, explain: "hard: Sie arbeitet hart." },
    { prompt: "Das Wetter ist ___.", ask: "Which adverb?", options: ["schlechtlich", "schlecht", "schlechter", "schlechtst"], correct: 1, explain: "bad: Das Wetter ist schlecht." },
    { prompt: "Ich verstehe das ___.", ask: "Which adverb?", options: ["leicht", "leichte", "leichter", "leichtst"], correct: 0, explain: "easily: Ich verstehe das leicht." },
    { prompt: "Das Buch war ___.", ask: "Which adverb?", options: ["langweilig", "langweilen", "langweilend", "langweiler"], correct: 0, explain: "boring: Das war langweilig." },
    { prompt: "Er isst ___.", ask: "Which adverb?", options: ["gierend", "gierig", "gier", "gier"], correct: 1, explain: "greedily: Er isst gierig." },
    { prompt: "Das war sehr ___.", ask: "Which adverb?", options: ["interessant", "interessante", "interessanter", "interessanteste"], correct: 0, explain: "interesting: sehr interessant." },
    { prompt: "Wir gehen ___ spazieren.", ask: "Which adverb?", options: ["ruhig", "ruhige", "ruhiger", "ruhigst"], correct: 0, explain: "calmly: Wir gehen ruhig spazieren." },
    { prompt: "Das ist ___ möglich.", ask: "Which adverb?", options: ["kaum", "kaumlich", "kaumer", "kaumste"], correct: 0, explain: "hardly: Das ist kaum möglich." },
    { prompt: "Komm ___! (hier)", ask: "Which adverb?", options: ["hierhin", "hier", "herein", "hinein"], correct: 1, explain: "here: Komm hier!" },
    { prompt: "Gehen wir ___? (dorthin)", ask: "Which adverb?", options: ["dort", "dorthin", "dorther", "da"], correct: 1, explain: "there/to there: Gehen wir dorthin?" },
    { prompt: "Das geschah ___.", ask: "Which adverb?", options: ["ehemals", "ehemals", "ehemalig", "ehemalste"], correct: 0, explain: "formerly: Das geschah ehemals." },
    { prompt: "Sie spricht zu ___.", ask: "Which adverb?", options: ["laut", "laute", "lauter", "lauteste"], correct: 0, explain: "loud: Sie spricht zu laut." },
    { prompt: "Das war absolut ___.", ask: "Which adverb?", options: ["schrecklich", "schreckliche", "schrecklicher", "schrecklichst"], correct: 0, explain: "terrible: absolut schrecklich." },
    { prompt: "Ich fahre ___.", ask: "Which adverb?", options: ["vorwärts", "vorwärt", "vorwarte", "vorwärtstens"], correct: 0, explain: "forward: Ich fahre vorwärts." },
    { prompt: "Das Wasser ist ___ kalt.", ask: "Which adverb?", options: ["eiskalt", "eis kalt", "eise kalt", "eiskalten"], correct: 0, explain: "ice cold: Das Wasser ist eiskalt." },
    { prompt: "Ich bin ___ überrascht.", ask: "Which adverb?", options: ["sehr", "viel", "ganz", "total"], correct: 0, explain: "very surprised: Ich bin sehr / ganz überrascht." },
    { prompt: "Das ist ___ möglich.", ask: "Which adverb?", options: ["völlig", "voll", "volle", "vollig"], correct: 0, explain: "completely: Das ist völlig möglich." },
    { prompt: "Wir fahren ___ zur Arbeit.", ask: "Which adverb?", options: ["täglich", "täglich", "täg", "tägs"], correct: 1, explain: "daily: Wir fahren täglich zur Arbeit." },
    { prompt: "Which adverb goes with adjectives?", ask: "Choose one", options: ["sehr", "viel", "ganz", "ganz besonders"], correct: 0, explain: "sehr modifies adjectives: sehr gut, sehr schön." }
  ],

  // ---------- 19. Word order in questions ----------
  g_word: [
    { prompt: "Wohin geht ___? (you)", ask: "Correct word order", options: ["du gehen", "du gehst", "gehst du", "goest du"], correct: 1, explain: "Question: verb in position 2, subject after. Wohin gehst du?" },
    { prompt: "Wann ___ du nach Hause? (come)", ask: "Complete the question", options: ["kommt", "kommst", "komme", "gehen"], correct: 1, explain: "Wann kommst du nach Hause?" },
    { prompt: "Wie ___ dein Name? (ist)", ask: "Complete the question", options: ["ist", "bist", "heißt", "seid"], correct: 0, explain: "Wie ist dein Name?" },
    { prompt: "___ du gerne Kaffee? (Trinkst)", ask: "Complete the question", options: ["Trinkst", "Trink", "Trinke", "Trinken"], correct: 0, explain: "Trinkst du gerne Kaffee?" },
    { prompt: "Wer ___ das gemacht? (hat)", ask: "Complete the question", options: ["hat", "haben", "hast", "habt"], correct: 0, explain: "Wer hat das gemacht?" },
    { prompt: "Wo wohnt ___? (er)", ask: "Correct word order", options: ["er", "ihn", "ihm", "he"], correct: 0, explain: "Wo wohnt er?" },
    { prompt: "Was ___ du am Wochenende? (machst)", ask: "Complete the question", options: ["machst", "machest", "macht", "machen"], correct: 0, explain: "Was machst du am Wochenende?" },
    { prompt: "Warum kommt ___ nicht? (er)", ask: "Correct word order", options: ["nicht er", "er", "he", "er nicht"], correct: 1, explain: "Warum kommt er nicht?" },
    { prompt: "___ du schon gegessen? (Hast)", ask: "Complete the question", options: ["Hast", "Habt", "Hat", "Haben"], correct: 0, explain: "Hast du schon gegessen?" },
    { prompt: "Welcher Bus ___ zum Bahnhof? (geht)", ask: "Complete the question", options: ["geht", "gehst", "gehen", "gehet"], correct: 0, explain: "Welcher Bus geht zum Bahnhof?" },
    { prompt: "Wie lange ___ du schon hier? (bist)", ask: "Complete the question", options: ["bist", "ist", "bin", "seid"], correct: 0, explain: "Wie lange bist du schon hier?" },
    { prompt: "___ wir noch Zeit? (Haben)", ask: "Complete the question", options: ["Haben", "Hat", "Hast", "Habt"], correct: 0, explain: "Haben wir noch Zeit?" },
    { prompt: "Welche Farbe hat ___? (das Auto)", ask: "Correct word order", options: ["das Auto", "Auto das", "the car", "Auto"], correct: 0, explain: "Welche Farbe hat das Auto?" },
    { prompt: "Wem gehört ___? (das Buch)", ask: "Correct word order", options: ["das Buch", "Buch das", "the book", "das"], correct: 0, explain: "Wem gehört das Buch?" },
    { prompt: "Wen ___ du gerade? (kennst)", ask: "Complete the question", options: ["kennst", "kenne", "kennt", "kennen"], correct: 0, explain: "Wen kennst du gerade?" },
    { prompt: "Womit ___ du arbeiten? (fängst)", ask: "Complete the question", options: ["fängst", "fangt", "fange", "fangen"], correct: 0, explain: "Womit fängst du arbeiten?" },
    { prompt: "In a yes/no question, the verb goes to position ...", ask: "Choose one", options: ["1", "2", "3", "last"], correct: 0, explain: "Position 1: Kommst du mit?" },
    { prompt: "In a 'Wo/Was/Wer' question, the verb goes to position ...", ask: "Choose one", options: ["1", "2", "3", "last"], correct: 1, explain: "Position 2: Wo wohnst du?" },
    { prompt: "Which is the correct question?", ask: "Choose one", options: ["Gehst du wohin?", "Wohin du gehst?", "Wohin gehst du?", "Du wohin gehst?"], correct: 2, explain: "Question word + verb + subject: Wohin gehst du?" },
    { prompt: "Which sentence order is correct?", ask: "Choose one", options: ["Du hast gestern Zeit gehabt?", "Hattest du gestern Zeit?", "Du hattest gestern Zeit?", "Hattest du Zeit gestern?"], correct: 1, explain: "In Präteritum questions: Hattest du Zeit?" },
    { prompt: "___ du morgen Lust? (Hast)", ask: "Complete the question", options: ["Hast", "Hastest", "Habt", "Hat"], correct: 0, explain: "Hast du morgen Lust?" },
    { prompt: "Was macht dein Bruder ___? (now)", ask: "Complete the sentence", options: ["jetzt", "nun", "gerade", "gerade eben"], correct: 0, explain: "Was macht dein Bruder jetzt?" },
    { prompt: "Welches Buch ___ der Lehrer? (recommended)", ask: "Complete the question", options: ["empfiehlt", "empfohlen", "empfahl", "empfehlt"], correct: 2, explain: "Welches Buch empfahl der Lehrer?" },
    { prompt: "___ ihr das schon gesehen? (Have)", ask: "Complete the question", options: ["Habt", "Hattet", "Hat", "Hast"], correct: 0, explain: "Habt ihr das schon gesehen?" },
    { prompt: "Which is a correct question?", ask: "Choose one", options: ["Wohin gehen sie?", "Gehen wohin sie?", "Sie wohin gehen?", "Wohin sie gehen?"], correct: 0, explain: "Question word at the start, verb in position 2, subject after verb." }
  ]

  };

  Object.assign(grammarExercises, batch);
  console.log('[Sprachblitz] grammar batch 3 applied:', Object.keys(batch).join(', '));
})();
