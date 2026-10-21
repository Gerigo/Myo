export interface CourseQuestion {
  id: string;
  day: 1 | 2 | 3 | 4 | 5;
  dayLabel: string;
  category: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  badge?: string;
}

export interface MovementAnalysis {
  exercise: string;
  primeMovers: string;
  antagonists?: string;
  synergists?: string;
  stabilizers?: string;
  chain: 'Chaîne ouverte' | 'Chaîne fermée';
  contractionExamTrap?: string;
}

export const MOVEMENT_ANALYSIS_DATA: MovementAnalysis[] = [
  {
    exercise: 'Biceps Curl',
    primeMovers: 'M. Biceps Brachii (Agoniste)',
    antagonists: 'M. Triceps Brachii',
    synergists: 'M. Brachialis, M. Brachioradialis',
    stabilizers: 'M. Pronator Teres (Stabilisateur), M. Deltoideus (Fixateur)',
    chain: 'Chaîne ouverte',
    contractionExamTrap: 'Montée = concentrique (raccourcissement), Descente = excentrique (allongement sous charge).'
  },
  {
    exercise: 'Lat Pulldown',
    primeMovers: 'M. Latissimus Dorsi (Grand dorsal)',
    antagonists: 'Grand pectoral (Pectoralis Major)',
    synergists: 'Grand rond (Teres major), Biceps brachii, Épaules',
    chain: 'Chaîne ouverte',
    contractionExamTrap: 'Traction vers le sternum = concentrique, retour = excentrique.'
  },
  {
    exercise: 'Barbell Bench Press (Développé couché)',
    primeMovers: 'M. Pectoralis Major, M. Triceps Brachii',
    antagonists: 'M. Biceps Brachii, M. Latissimus Dorsi',
    synergists: 'Deltoïde antérieur',
    chain: 'Chaîne ouverte',
    contractionExamTrap: 'Descente = excentrique, Poussée = concentrique.'
  },
  {
    exercise: 'Push-up (Pompes)',
    primeMovers: 'M. Pectoralis Major, Triceps Brachii, Deltoïde antérieur',
    antagonists: 'Latissimus dorsi, Biceps',
    synergists: 'Serratus anterior (dentelé)',
    stabilizers: 'Rectus Abdominis (isométrique !)',
    chain: 'Chaîne fermée',
    contractionExamTrap: 'Descente : Pectoralis major en EXCENTRIQUE. Montée : Rectus abdominis en ISOMÉTRIQUE (gainage).'
  },
  {
    exercise: 'Pull-up (Tractions)',
    primeMovers: 'M. Latissimus Dorsi',
    antagonists: 'Pectoralis Major',
    synergists: 'Biceps Brachii, Trapèzes, Grand rond',
    chain: 'Chaîne fermée',
    contractionExamTrap: 'Mouvement ascendant (montée) : Latissimus Dorsi en CONCENTRIQUE.'
  },
  {
    exercise: 'Squat / Back Squat',
    primeMovers: 'M. Quadriceps Femoris (Agoniste principal genou), Gluteus Maximus (Agoniste hanche)',
    antagonists: 'Ischio-jambiers (selon angle), Psoas',
    synergists: 'Ischio-jambiers, Triceps Surae (Gastrocnémien), Adducteurs',
    stabilizers: 'Core / Sangle abdominale, Érecteurs du rachis',
    chain: 'Chaîne fermée',
    contractionExamTrap: 'Descente = excentrique, Montée = concentrique.'
  },
  {
    exercise: 'Dumbbell Lunge (Fentes)',
    primeMovers: 'M. Quadriceps Femoris, Gluteus Maximus',
    antagonists: 'Ischio-jambiers',
    synergists: 'Ischio-jambiers, Mollets',
    chain: 'Chaîne fermée',
    contractionExamTrap: 'Mouvement descendant lors d’un Forward Lunge : Gluteus Maximus en EXCENTRIQUE.'
  },
  {
    exercise: 'Deadlift (Soulevé de terre)',
    primeMovers: 'Gluteus Maximus, Hamstrings, Quadriceps',
    synergists: 'Adducteur magnus, Mollets',
    stabilizers: 'M. Erector Spinae (ISOMÉTRIQUE !), Trapèzes, Latissimus dorsi',
    chain: 'Chaîne fermée',
    contractionExamTrap: 'Mouvement de montée : Erector Spinae en contraction ISOMÉTRIQUE pour fixer la colonne !'
  },
  {
    exercise: 'Machine Shoulder Press',
    primeMovers: 'Primaires : Deltoïde (faisceau claviculaire/acromial) ; Secondaires : Triceps Brachii',
    chain: 'Chaîne ouverte',
    contractionExamTrap: 'Poussée = concentrique, retenue = excentrique.'
  },
  {
    exercise: 'Machine Chest Press',
    primeMovers: 'Primaires : Pectoralis Major ; Secondaires : Triceps Brachii',
    chain: 'Chaîne ouverte'
  },
  {
    exercise: 'Machine Row / Tirage horizontal',
    primeMovers: 'Primaires : Dos (Latissimus dorsi, Rhomboideus) ; Secondaires : Biceps, Deltoïde postérieur, Trapèze',
    chain: 'Chaîne ouverte',
    contractionExamTrap: 'Tirage = concentrique, retour = excentrique.'
  },
  {
    exercise: 'Machine Abdominal Crunch',
    primeMovers: 'Primaires : Rectus Abdominis',
    chain: 'Chaîne ouverte',
    contractionExamTrap: 'Enroulement = concentrique.'
  },
  {
    exercise: 'Machine Incline Leg Press',
    primeMovers: 'Primaires : Quadriceps ; Secondaires : Gluteus maximus, Ischio-jambiers, Mollets',
    chain: 'Chaîne fermée',
    contractionExamTrap: 'Attention : considérée chaîne fermée car pieds en appui solide sur la plateforme.'
  },
  {
    exercise: 'Cable Rope Triceps Pushdown',
    primeMovers: 'M. Triceps Brachii',
    chain: 'Chaîne ouverte'
  },
  {
    exercise: 'Chin-up (Mains en supination)',
    primeMovers: 'Primaires : Latissimus Dorsi ; Secondaires : Trapèzes, Biceps Brachii',
    chain: 'Chaîne fermée',
    contractionExamTrap: 'Prise supination = recrutement accru du Biceps Brachii par rapport au Pull-up.'
  }
];

export const COURSE_QUESTIONS: CourseQuestion[] = [
  // --- JOUR 1 : ANATOMIE, SQUELETTE, ARTICULATIONS, FIBRES ---
  {
    id: 'j1_q1',
    day: 1,
    dayLabel: 'Jour 1 : Anatomie & Squelette',
    category: 'Squelette',
    question: 'Combien d’os composent respectivement le squelette axial et le squelette appendiculaire ?',
    options: [
      '80 os pour l’axial, 126 os pour l’appendiculaire (Total : 206 os)',
      '126 os pour l’axial, 80 os pour l’appendiculaire (Total : 206 os)',
      '100 os pour l’axial, 106 os pour l’appendiculaire',
      '60 os pour l’axial, 146 os pour l’appendiculaire'
    ],
    correctAnswerIndex: 0,
    explanation: 'Le squelette axial comprend 80 os (tête, colonne vertébrale, thorax) et le squelette appendiculaire comprend 126 os (membres sup/inf et ceintures).'
  },
  {
    id: 'j1_q2',
    day: 1,
    dayLabel: 'Jour 1 : Anatomie & Squelette',
    category: 'Types d’os',
    question: 'À quelle catégorie appartient la rotule (patella) ou les petits os logés dans les tendons du gros orteil ?',
    options: [
      'Os sésamoïdes',
      'Os courts',
      'Os irréguliers',
      'Os plats'
    ],
    correctAnswerIndex: 0,
    explanation: 'Les os sésamoïdes sont de petits os situés au sein des tendons (comme la rotule ou sous le gros orteil) servant à protéger les tendons du stress et de l’usure.'
  },
  {
    id: 'j1_q3',
    day: 1,
    dayLabel: 'Jour 1 : Anatomie & Squelette',
    category: 'Articulations',
    question: 'Quelles sont les 3 grandes classes d’articulations selon leur degré de mobilité ?',
    options: [
      'Synarthroses (immobiles), Amphiarthroses (semi-mobiles), Diarthroses (synoviales, mobiles)',
      'Trochléennes, Énarthroses, Arthrodèses',
      'Cartilagineuses, Tendineuses, Musculaires',
      'Monoaxiales, Biaxiales, Triaxiales'
    ],
    correctAnswerIndex: 0,
    explanation: 'Synarthroses (fibreuses, immobiles ex: crâne), Amphiarthroses (cartilagineuses, semi-mobiles ex: vertèbres, sacro-iliaque), Diarthroses (synoviales, grande mobilité ex: hanche, genou, épaule).'
  },
  {
    id: 'j1_q4',
    day: 1,
    dayLabel: 'Jour 1 : Anatomie & Squelette',
    category: 'Articulations synoviales',
    question: 'Quel élément d’une articulation synoviale agit comme lubrifiant, absorbe les chocs et nourrit le cartilage ?',
    options: [
      'Le liquide synovial',
      'La capsule articulaire externe',
      'Le ligament croisé intracapsulaire',
      'L’aponévrose profonde'
    ],
    correctAnswerIndex: 0,
    explanation: 'Le liquide synovial lubrifie la cavité articulaire, amortit les chocs, réduit les frottements et nourrit le cartilage avasculaire.'
  },
  {
    id: 'j1_q5',
    day: 1,
    dayLabel: 'Jour 1 : Anatomie & Squelette',
    category: 'Classification articulations',
    question: 'Quelle est la classification articulaire d’une énarthrose (articulation sphéroïde comme l’épaule ou la hanche) ?',
    options: [
      'Articulation à 3 axes (triaxiale)',
      'Articulation à 1 axe (monoaxiale)',
      'Articulation à 2 axes (biaxiale)',
      'Articulation sans axe'
    ],
    correctAnswerIndex: 0,
    explanation: 'Les énarthroses / sphéroïdes possèdent 3 degrés de liberté (3 axes : frontal, sagittal, longitudinal), permettant des circumductions complètes.'
  },
  {
    id: 'j1_q6',
    day: 1,
    dayLabel: 'Jour 1 : Plans & Axes',
    category: 'Plans de mouvement',
    question: 'Dans quel plan de mouvement s’effectue un Dumbbell Lateral Raise (élévations latérales) ?',
    options: [
      'Plan frontal (axe sagittal Z)',
      'Plan sagittal (axe frontal X)',
      'Plan transversal (axe vertical Y)',
      'Plan oblique'
    ],
    correctAnswerIndex: 0,
    explanation: 'Les élévations latérales (abduction dans le plan coupant le corps en avant/arrière) s’effectuent dans le PLAN FRONTAL, autour de l’axe sagittal Z.'
  },
  {
    id: 'j1_q7',
    day: 1,
    dayLabel: 'Jour 1 : Plans & Axes',
    category: 'Plans de mouvement',
    question: 'Dans quel plan sont réalisés le Squat, les Fentes (Lunges) et le Biceps Curl ?',
    options: [
      'Plan sagittal (axe frontal X)',
      'Plan frontal (axe sagittal Z)',
      'Plan transversal (axe vertical Y)',
      'Plan coronal'
    ],
    correctAnswerIndex: 0,
    explanation: 'Les mouvements de flexion/extension (Biceps curl, Squat, Lunges) se déroulent dans le PLAN SAGITTAL, autour de l’axe frontal X.'
  },
  {
    id: 'j1_q8',
    day: 1,
    dayLabel: 'Jour 1 : Posture & Rachis',
    category: 'Courbures vertébrales',
    question: 'Quelles sont les courbures physiologiques normales de profil de la colonne vertébrale ?',
    options: [
      'Cervicale = Lordose, Thoracique = Cyphose, Lombaire = Lordose, Sacrée = Cyphose',
      'Cervicale = Cyphose, Thoracique = Lordose, Lombaire = Cyphose, Sacrée = Lordose',
      'Toutes les courbures sont des lordoses',
      'Cervicale = Scoliose, Lombaire = Cyphose'
    ],
    correctAnswerIndex: 0,
    explanation: 'De profil, la colonne présente 2 lordoses (cervicale et lombaire, courbures à concavité postérieure) et 2 cyphoses (thoracique et sacrée, courbures à convexité postérieure).'
  },
  {
    id: 'j1_q9',
    day: 1,
    dayLabel: 'Jour 1 : Posture & Déviations',
    category: 'Upper Crossed Syndrome',
    question: 'Dans l’Upper Crossed Syndrome (syndrome croisé supérieur), quels muscles sont sur-actifs / raccourcis ?',
    options: [
      'Pectoraux, SCM, Trapèze supérieur et Élévateur de la scapula',
      'Fléchisseurs profonds du cou et Trapèze moyen/inférieur',
      'Grand dorsal et Biceps',
      'Rhomboïdes et Deltoïde postérieur'
    ],
    correctAnswerIndex: 0,
    explanation: 'Upper Crossed Syndrome : Sur-actifs = Pectoraux, Sterno-cléido-mastoïdien (SCM), Trapèze supérieur, Levator scapulae. Sous-actifs = Fléchisseurs profonds du cou, Trapèze inférieur/moyen, Rhomboïdes.'
  },
  {
    id: 'j1_q10',
    day: 1,
    dayLabel: 'Jour 1 : Posture & Déviations',
    category: 'Lower Crossed Syndrome',
    question: 'Dans le Lower Crossed Syndrome (syndrome croisé inférieur), quels muscles sont sous-actifs / allongés ?',
    options: [
      'Abdominaux et Fessiers (Gluteus)',
      'Iliopsoas et Rectus femoris',
      'Érecteurs du rachis (Erector spinae)',
      'Quadriceps et Tenseur du fascia lata'
    ],
    correctAnswerIndex: 0,
    explanation: 'Lower Crossed Syndrome : Sur-actifs = Iliopsoas, Rectus femoris, Erector spinae. Sous-actifs = Abdominaux et Grand/Moyen Fessiers (Gluteus).'
  },
  {
    id: 'j1_q11',
    day: 1,
    dayLabel: 'Jour 1 : Muscle & Structure',
    category: 'Structure musculaire',
    question: 'Quel tissu conjonctif entoure un faisceau musculaire (fascicule) ?',
    options: [
      'Périmysium',
      'Épimysium',
      'Endomysium',
      'Sarcolemme'
    ],
    correctAnswerIndex: 0,
    explanation: 'Muscle entier = Épimysium ; Faisceau musculaire = Périmysium ; Fibre musculaire = Endomysium ; Myofibrille = Sarcolemme.'
  },
  {
    id: 'j1_q12',
    day: 1,
    dayLabel: 'Jour 1 : Sarcomère',
    category: 'Contraction musculaire',
    question: 'Dans le sarcomère, quel myofilament est épais et conserve +/- la même longueur pendant la contraction ?',
    options: [
      'La Myosine (filament épais, bande A)',
      'L’Actine (filament fin, bande I)',
      'La Titine',
      'La bande Z'
    ],
    correctAnswerIndex: 0,
    explanation: 'La Myosine est le filament épais (bande A), l’Actine est le filament fin (bande I) qui glisse et crée de la tension vers la bande Z.'
  },
  {
    id: 'j1_q13',
    day: 1,
    dayLabel: 'Jour 1 : Réflexes',
    category: 'Système neuromusculaire',
    question: 'Quel réflexe, activé par l’Organe Tendineux de Golgi (OTG), relâche la tension musculaire lors d’un étirement maintenu (>30 sec) ?',
    options: [
      'Le réflexe myotatique inversé (inhibition autogène)',
      'Le réflexe myotatique d’étirement',
      'L’inhibition réciproque (loi de Sherrington)',
      'Le réflexe rotulien'
    ],
    correctAnswerIndex: 0,
    explanation: 'L’inhibition autogène (réflexe myotatique inversé) est régie par les Organes Tendineux de Golgi (OTG) qui détectent la tension et commandent le relâchement après 30s de tension maintenue.'
  },
  {
    id: 'j1_q14',
    day: 1,
    dayLabel: 'Jour 1 : Réflexes',
    category: 'Système neuromusculaire',
    question: 'Que stipule la loi de Sherrington sur l’inhibition réciproque ?',
    options: [
      'À chaque excitation d’un muscle agoniste correspond une inhibition (relâchement) de son antagoniste',
      'Un muscle stimulé se contracte toujours à 100% de ses fibres',
      'Le muscle étiré se contracte par réflexe de protection',
      'L’Organe de Golgi inhibe le motoneurone après 30 secondes'
    ],
    correctAnswerIndex: 0,
    explanation: 'Inhibition réciproque (Sherrington) : quand l’agoniste est excité pour se contracter, les motoneurones de l’antagoniste sont inhibés pour lui permettre de se relâcher.'
  },
  {
    id: 'j1_q15',
    day: 1,
    dayLabel: 'Jour 1 : Fibres musculaires',
    category: 'Types de fibres',
    question: 'Quelles sont les caractéristiques clés des fibres musculaires de type 1 ?',
    options: [
      'Contraction lente, peu de force, très endurantes, rouges (forte densité capillaire), oxydatives',
      'Contraction très rapide, beaucoup de force, très fatigables, blanches',
      'Contraction rapide intermédiaire, mixtes aérobie/anaérobie',
      'Contraction volontaire uniquement lors des sprints de moins de 5 secondes'
    ],
    correctAnswerIndex: 0,
    explanation: 'Type 1 = Slow-twitch (lentes), rouges, riches en mitochondries et myoglobine, forte capacité aérobie, très endurantes.'
  },
  {
    id: 'j1_q16',
    day: 1,
    dayLabel: 'Jour 1 : Fibres musculaires',
    category: 'Types de fibres',
    question: 'Quelles fibres musculaires sont les plus rapides, génèrent le plus de force mais se fatiguent le plus rapidement ?',
    options: [
      'Fibres de type 2B (Fast glycolytic)',
      'Fibres de type 1 (Slow oxidative)',
      'Fibres de type 2A (Fast oxidative)',
      'Fibres cardiaques'
    ],
    correctAnswerIndex: 0,
    explanation: 'Type 2B (ou 2X) : fibres rapides anaérobies glycolytiques, blanches, gros diamètre, très puissantes mais s’épuisent très vite.'
  },

  // --- JOUR 2 : EXOS, AGONISTES, CONTRACTIONS, CHAÎNES, BLESSURES ---
  {
    id: 'j2_q1',
    day: 2,
    dayLabel: 'Jour 2 : Exercices & Contractions',
    category: 'Contraction musculaire',
    question: 'Quel type de contraction effectue le Pectoralis Major lors du mouvement descendant d’un Push-up (pompe) ?',
    options: [
      'Contraction excentrique',
      'Contraction concentrique',
      'Contraction isométrique',
      'Contraction auxotonique'
    ],
    correctAnswerIndex: 0,
    explanation: 'Lors de la descente (phase négative), le corps descend sous l’effet de la gravité et le pectoral s’allonge sous résistance pour freiner : c’est une contraction EXCENTRIQUE.'
  },
  {
    id: 'j2_q2',
    day: 2,
    dayLabel: 'Jour 2 : Exercices & Contractions',
    category: 'Contraction musculaire',
    question: 'Quel type de contraction effectue le Rectus Abdominis lors de la montée d’un Push-up ?',
    options: [
      'Contraction isométrique',
      'Contraction concentrique',
      'Contraction excentrique',
      'Aucune contraction'
    ],
    correctAnswerIndex: 0,
    explanation: 'Le grand droit de l’abdomen ne modifie pas sa longueur : il maintient le bassin et la colonne neutres en gainage statique, c’est une contraction ISOMÉTRIQUE.'
  },
  {
    id: 'j2_q3',
    day: 2,
    dayLabel: 'Jour 2 : Exercices & Contractions',
    category: 'Contraction musculaire',
    question: 'Quel type de contraction effectue le muscle Erector Spinae lors de la phase de montée d’un Deadlift (soulevé de terre) ?',
    options: [
      'Contraction isométrique',
      'Contraction concentrique',
      'Contraction excentrique',
      'Contraction ballistique'
    ],
    correctAnswerIndex: 0,
    explanation: 'Les érecteurs du rachis maintiennent la courbure neutre du dos sans bouger les vertèbres : contraction ISOMÉTRIQUE ! Le moteur de l’extension de hanche est le fessier et l’ischio.'
  },
  {
    id: 'j2_q4',
    day: 2,
    dayLabel: 'Jour 2 : Exercices & Contractions',
    category: 'Contraction musculaire',
    question: 'Quel type de contraction effectue le Latissimus Dorsi lors du mouvement ascendant (montée) d’un Pull-up ?',
    options: [
      'Contraction concentrique',
      'Contraction excentrique',
      'Contraction isométrique',
      'Inhibition autogène'
    ],
    correctAnswerIndex: 0,
    explanation: 'Le grand dorsal se raccourcit pour tracter le corps vers la barre : contraction CONCENTRIQUE.'
  },
  {
    id: 'j2_q5',
    day: 2,
    dayLabel: 'Jour 2 : Exercices & Contractions',
    category: 'Chaînes cinétiques',
    question: 'Parmi ces exercices, lesquels sont en CHAÎNE CINÉTIQUE FERMÉE ?',
    options: [
      'Push-up, Pull-up, Squat, Lunges, Deadlift',
      'Bench Press, Dumbbell Press, Biceps Curl, Lat Pulldown',
      'Leg Extension, Leg Curl, Cable Row, Triceps Pushdown',
      'Dumbbell Lateral Raise, Shoulder Press halteres'
    ],
    correctAnswerIndex: 0,
    explanation: 'En chaîne fermée, les extrémités distales (mains/pieds) sont fixées (au sol ou à une barre) et le corps/tronc se déplace. Force de compression dominante.'
  },
  {
    id: 'j2_q6',
    day: 2,
    dayLabel: 'Jour 2 : Exercices & Contractions',
    category: 'Chaînes cinétiques',
    question: 'Quelle est la caractéristique biomécanique d’une chaîne cinétique OUVERTE ?',
    options: [
      'Les extrémités distales sont libres, la résistance monte et descend tandis que le tronc reste fixe (forces de cisaillement)',
      'Les mains ou pieds sont scellés au sol et le tronc bouge',
      'Plus grande force de compression sur les articulations',
      'Réservée exclusivement au poids du corps'
    ],
    correctAnswerIndex: 0,
    explanation: 'Chaîne ouverte (ex: Bench press, Biceps curl, Lat pulldown) : extrémités libres, charge mobile, tronc fixe, forces de cisaillement plus prononcées.'
  },
  {
    id: 'j2_q7',
    day: 2,
    dayLabel: 'Jour 2 : Analyse de mouvement',
    category: 'Biceps Curl',
    question: 'Dans le Biceps Curl, quel muscle agit en tant qu’ANTAGONISTE ?',
    options: [
      'M. Triceps Brachii',
      'M. Brachialis',
      'M. Brachioradialis',
      'M. Pronator Teres'
    ],
    correctAnswerIndex: 0,
    explanation: 'Agoniste = Biceps Brachii ; Antagoniste = Triceps Brachii ; Synergistes = Brachialis, Brachioradialis ; Stabilisateur = Rond pronateur ; Fixateur = Deltoïde.'
  },
  {
    id: 'j2_q8',
    day: 2,
    dayLabel: 'Jour 2 : Analyse de mouvement',
    category: 'Bench Press',
    question: 'Au Bench Press (développé couché), quels sont les muscles agonistes principaux et synergistes ?',
    options: [
      'Agonistes : Pectoralis Major & Triceps Brachii ; Synergiste : Deltoïde antérieur',
      'Agonistes : Biceps Brachii & Grand dorsal ; Synergiste : Rhomboïdes',
      'Agonistes : Trapèze supérieur ; Synergiste : Quadriceps',
      'Agonistes : Deltoïde postérieur ; Synergiste : Biceps'
    ],
    correctAnswerIndex: 0,
    explanation: 'Au développé couché : Pectoralis Major et Triceps Brachii sont les moteurs principaux (agonistes), assistés par le faisceau antérieur du deltoïde (synergiste).'
  },
  {
    id: 'j2_q9',
    day: 2,
    dayLabel: 'Jour 2 : Blessures & Récupération',
    category: 'DOMS & Douleurs',
    question: 'Qu’est-ce qui caractérise les DOMS (Delayed Onset Muscle Soreness / courbatures) ?',
    options: [
      'Apparaissent 24 à 48h après, causées par des micro-ruptures structurelles principalement lors des phases excentriques (et NON par le lactate)',
      'Causées par l’accumulation de lactate et d’acide lactique dans le sang',
      'Surviennent immédiatement pendant la première minute d’effort',
      'Sont le signe d’une déchirure musculaire aiguë nécessitant un plâtre'
    ],
    correctAnswerIndex: 0,
    explanation: 'Les DOMS surviennent à 24-48h, sont causées par des micro-lésions musculaires et du tissu conjonctif induites surtout par le travail excentrique. Le lactate n’est pas responsable des courbatures !'
  },
  {
    id: 'j2_q10',
    day: 2,
    dayLabel: 'Jour 2 : Blessures & Récupération',
    category: 'Causes de blessures',
    question: 'Quelle est la différence entre une cause de blessure endogène et exogène ?',
    options: [
      'Endogène = inhérent au corps (posture, technique, sensibilité, maladie) ; Exogène = facteurs externes (exercices inadaptés, manque de correction, matériel)',
      'Endogène = choc avec une haltère ; Exogène = fatigue musculaire',
      'Endogène = blessure aiguë ; Exogène = blessure chronique',
      'Il n’y a aucune différence dans le cours PCA'
    ],
    correctAnswerIndex: 0,
    explanation: 'Endogène : interne au pratiquant (mauvaise posture, faiblesses, pathologies). Exogène : environnemental (charge trop lourde imposée, coaching inadapté, matériel défectueux).'
  },

  // --- JOUR 3 : BIOMÉCANIQUE, FORCES, LEVIERS ---
  {
    id: 'j3_q1',
    day: 3,
    dayLabel: 'Jour 3 : Biomécanique & Leviers',
    category: 'Centre de masse',
    question: 'Où se situe le centre de masse chez l’être humain en position anatomique debout ?',
    options: [
      'Juste sous le nombril',
      'Au niveau du sternum',
      'Au niveau du plexus solaire',
      'Au niveau des genoux'
    ],
    correctAnswerIndex: 0,
    explanation: 'En position anatomique debout, le centre de masse humain est situé juste sous le nombril. On est plus stable quand il est au milieu de la base d’appui.'
  },
  {
    id: 'j3_q2',
    day: 3,
    dayLabel: 'Jour 3 : Biomécanique & Leviers',
    category: 'Leviers',
    question: 'Quel type de levier place le PIVOT entre la force et la résistance (ex : flexion/extension de la tête, balançoire) ?',
    options: [
      'Levier de classe 1 (FAR : Force - Axe/Pivot - Résistance)',
      'Levier de classe 2 (ARF : Axe - Résistance - Force)',
      'Levier de classe 3 (AFR : Axe - Force - Résistance)',
      'Levier cinétique ouvert'
    ],
    correctAnswerIndex: 0,
    explanation: 'Classe 1 : Le PIVOT (axe) est au milieu (ex: tête qui bascule sur les vertèbres atlas/axis, balançoire à bascule).'
  },
  {
    id: 'j3_q3',
    day: 3,
    dayLabel: 'Jour 3 : Biomécanique & Leviers',
    category: 'Leviers',
    question: 'Quel levier place la RÉSISTANCE entre le pivot et la force (ex : Push-up, Calf raise, brouette) ?',
    options: [
      'Levier de classe 2',
      'Levier de classe 1',
      'Levier de classe 3',
      'Levier rotatoire'
    ],
    correctAnswerIndex: 0,
    explanation: 'Classe 2 : La RÉSISTANCE est au milieu (ex: pompe / push-up, mollets debout / calf raise, brouette). Avantage mécanique favorable.'
  },
  {
    id: 'j3_q4',
    day: 3,
    dayLabel: 'Jour 3 : Biomécanique & Leviers',
    category: 'Leviers',
    question: 'Quel levier place la FORCE musculaire entre le pivot et la résistance (ex : Biceps curl, lever une pelle) ?',
    options: [
      'Levier de classe 3',
      'Levier de classe 1',
      'Levier de classe 2',
      'Levier gravitationnel'
    ],
    correctAnswerIndex: 0,
    explanation: 'Classe 3 : La FORCE s’applique entre le pivot et la charge (ex: Biceps curl avec insertion du biceps sur le radius entre le coude et l’haltère). Levier le plus fréquent dans le corps humain.'
  },
  {
    id: 'j3_q5',
    day: 3,
    dayLabel: 'Jour 3 : Biomécanique & Leviers',
    category: 'Moment de force',
    question: 'Comment se calcule le moment de force (Torque M) et de quoi dépend-il ?',
    options: [
      'M = F x d (Force en Newton x distance du bras de levier en mètres)',
      'M = Masse / Gravité',
      'M = Puissance x Temps',
      'M = Volume x Intensité'
    ],
    correctAnswerIndex: 0,
    explanation: 'Le moment de force M = Force (N) x distance perpendiculaire au pivot (m). Plus le bras de levier d augmente, plus le moment de résistance est grand.'
  },

  // --- JOUR 4 : SYSTÈMES ÉNERGÉTIQUES, LACTATE, CARDIO ---
  {
    id: 'j4_q1',
    day: 4,
    dayLabel: 'Jour 4 : Énergie & Cardio',
    category: 'Carburants',
    question: 'Quelle est la valeur énergétique respective des Protéines, Glucides et Lipides ?',
    options: [
      'Glucides : 4 kcal/g | Protéines : 4 kcal/g | Lipides : 9 kcal/g',
      'Glucides : 9 kcal/g | Protéines : 4 kcal/g | Lipides : 4 kcal/g',
      'Glucides : 4 kcal/g | Protéines : 7 kcal/g | Lipides : 9 kcal/g',
      'Glucides : 5 kcal/g | Protéines : 5 kcal/g | Lipides : 10 kcal/g'
    ],
    correctAnswerIndex: 0,
    explanation: 'Glucides = 4 kcal/g, Protéines = 4 kcal/g, Lipides = 9 kcal/g (source d’énergie la plus concentrée).'
  },
  {
    id: 'j4_q2',
    day: 4,
    dayLabel: 'Jour 4 : Énergie & Cardio',
    category: 'Filières énergétiques',
    question: 'Quelle filière énergétique fournit l’énergie lors d’un effort maximal de 0 à 15 secondes sans oxygène ?',
    options: [
      'Système ATP-CP (Anaérobie Alactique)',
      'Système Glycolytique (Anaérobie Lactique)',
      'Système Oxydatif (Aérobie)',
      'Cycle de Krebs'
    ],
    correctAnswerIndex: 0,
    explanation: 'ATP-CP (Anaérobie Alactique) : ATP local (2-3s) + Phosphocréatine (jusqu’à 15s). Puissance très élevée, capacité très faible, pas d’oxygène ni de lactate.'
  },
  {
    id: 'j4_q3',
    day: 4,
    dayLabel: 'Jour 4 : Énergie & Cardio',
    category: 'Filières énergétiques',
    question: 'Quelle est la durée d’intervention dominante du système Glycolytique (Anaérobie Lactique) ?',
    options: [
      '15 à 90 secondes',
      '0 à 5 secondes',
      '2 à 3 minutes minimum',
      'Plus de 30 minutes'
    ],
    correctAnswerIndex: 0,
    explanation: 'Le système glycolytique prend le relais de 15 à 90 secondes. Combustion du glycogène sans O2, production de lactate et de 2 ATP par molécule de glucose.'
  },
  {
    id: 'j4_q4',
    day: 4,
    dayLabel: 'Jour 4 : Énergie & Cardio',
    category: 'Lactate & Métabolisme',
    question: 'Que faut-il retenir impérativement sur le Lactate selon le cours PCA ?',
    options: [
      'Le lactate N’EST PAS un déchet, NE CRÉE PAS de courbatures et sert de combustible énergétique (Cycle de Cori)',
      'Le lactate est le poison toxique qui détruit les fibres et cause les courbatures',
      'Lactate et acide lactique sont exactement la même molécule',
      'Le lactate ne peut être métabolisé que pendant le sommeil'
    ],
    correctAnswerIndex: 0,
    explanation: 'Idée reçue combattue au cours : le lactate n’est pas un déchet métabolique toxique, il ne génère pas de courbatures (DOMS) et sert de carburant noble recyclé par le foie (Cycle de Cori).'
  },
  {
    id: 'j4_q5',
    day: 4,
    dayLabel: 'Jour 4 : Énergie & Cardio',
    category: 'Seuils physiologiques',
    question: 'À quelles concentrations sanguines de lactate correspondent le 1er seuil (Aérobie) et le 2ème seuil (Anaérobie) ?',
    options: [
      'Seuil aérobie = 2 mmol/L (70-80% VMA) | Seuil anaérobie = 4 mmol/L (85-90% VMA)',
      'Seuil aérobie = 4 mmol/L | Seuil anaérobie = 8 mmol/L',
      'Seuil aérobie = 1 mmol/L | Seuil anaérobie = 2 mmol/L',
      'Seuil aérobie = 7 mmol/L | Seuil anaérobie = 12 mmol/L'
    ],
    correctAnswerIndex: 0,
    explanation: '1er seuil (seuil aérobie) = 2 mmol/L (70-80% VMA). 2ème seuil (seuil anaérobie / début d’accumulation exponentielle) = 4 mmol/L (85-90% VMA). VMA/PMA = ~7 mmol/L.'
  },
  {
    id: 'j4_q6',
    day: 4,
    dayLabel: 'Jour 4 : Énergie & Cardio',
    category: 'Cardio & Paramètres',
    question: 'Quelle formule relie le Débit Cardiaque (DC), le Volume d’Éjection Systolique (VES) et la Fréquence Cardiaque (FC) ?',
    options: [
      'DC = VES x FC',
      'DC = VES / FC',
      'DC = (220 - Age) x VES',
      'DC = FCmax - FCrepos'
    ],
    correctAnswerIndex: 0,
    explanation: 'Débit cardiaque = Volume de sang pompé par minute = VES (ml/battement) x Fréquence Cardiaque (battements/min). Passe de ~5 L/min au repos à 20-30 L/min à l’effort.'
  },
  {
    id: 'j4_q7',
    day: 4,
    dayLabel: 'Jour 4 : Formules cardio',
    category: 'Formule de Karvonen',
    question: 'Quelle est la formule exacte de Karvonen pour calculer la fréquence cardiaque cible d’entraînement ?',
    options: [
      'FC cible = ((FCmax - FC repos) x % intensité) + FC repos',
      'FC cible = (220 - âge) x % intensité',
      'FC cible = FCmax - FC repos',
      'FC cible = (VO2max x distance) / 100'
    ],
    correctAnswerIndex: 0,
    explanation: 'Karvonen utilise la fréquence cardiaque de réserve (FCmax - FCrepos) : FC cible = ((FCmax - FCrepos) x %) + FCrepos, ce qui prend en compte le niveau du pratiquant.'
  },
  {
    id: 'j4_q8',
    day: 4,
    dayLabel: 'Jour 4 : Formules cardio',
    category: 'Test de Cooper',
    question: 'Quelle est la formule pour estimer le VO2max (ml/kg/min) après 12 minutes de course (Test de Cooper) ?',
    options: [
      'VO2max = 0.02233 x (distance en mètres) - 11.3',
      'VO2max = 220 - âge - distance',
      'VO2max = (distance / 12) x 3.5',
      'VO2max = 0.5 x distance + 10'
    ],
    correctAnswerIndex: 0,
    explanation: 'Formule officielle de Cooper (1983) : VO2max (ml/kg/min) = 0.02233 x (distance en m) - 11.3.'
  },

  // --- JOUR 5 : PRINCIPES, OPT NASM, MÉTHODES, PSYCHOLOGIE ---
  {
    id: 'j5_q1',
    day: 5,
    dayLabel: 'Jour 5 : Méthodologie & OPT',
    category: 'Principes d’entraînement',
    question: 'Que signifie l’acronyme SAID dans le principe de spécificité de l’entraînement ?',
    options: [
      'Specific Adaptation to Imposed Demands (Adaptations spécifiques aux demandes imposées)',
      'Systematic Acceleration in Distance',
      'Surcharge Adaptée Individuelle Directe',
      'Speed Agility Intensity Determination'
    ],
    correctAnswerIndex: 0,
    explanation: 'Principe SAID : le corps humain s’adapte précisément et spécifiquement au type de stimulus mécanique, énergétique et neuromusculaire qui lui est imposé.'
  },
  {
    id: 'j5_q2',
    day: 5,
    dayLabel: 'Jour 5 : Méthodologie & OPT',
    category: 'SGA Hans Selye',
    question: 'Quelles sont les 3 phases successives du Syndrome Général d’Adaptation (SGA) de Hans Selye ?',
    options: [
      '1. Réaction d’alarme ➔ 2. Phase d’adaptation/résistance ➔ 3. Phase d’épuisement',
      '1. Préparation ➔ 2. Compétition ➔ 3. Transition',
      '1. Hypertrophie ➔ 2. Force ➔ 3. Puissance',
      '1. Microcycle ➔ 2. Mésocycle ➔ 3. Macrocycle'
    ],
    correctAnswerIndex: 0,
    explanation: 'SGA de Hans Selye : Phase 1 Alarme (stress aigu, cortisol, adrénaline) ➔ Phase 2 Adaptation/Résistance (homéostasie retrouvée avec repos) ➔ Phase 3 Épuisement (si stress prolongé sans récupération).'
  },
  {
    id: 'j5_q3',
    day: 5,
    dayLabel: 'Jour 5 : Méthodologie & OPT',
    category: 'Modèle OPT NASM',
    question: 'Quels sont les paramètres de répétitions et de tempo de la phase "Stabilisation Endurance" du modèle OPT ?',
    options: [
      '12 à 20 répétitions avec un tempo lent 4-2-1 (50-70% 1RM)',
      '1 à 5 répétitions avec tempo explosif X-X-X (85-100% 1RM)',
      '6 à 12 répétitions avec tempo 2-0-2 (75-85% 1RM)',
      '8 à 12 répétitions avec tempo 2-0-2 (70-80% 1RM)'
    ],
    correctAnswerIndex: 0,
    explanation: 'Phase 1 OPT (Stabilisation) : 1-3 séries, 12-20 reps, tempo lent 4-2-1 pour recruter les stabilisateurs profonds, repos 0-90s, intensité 50-70%.'
  },
  {
    id: 'j5_q4',
    day: 5,
    dayLabel: 'Jour 5 : Méthodologie & OPT',
    category: 'Systèmes d’entraînement',
    question: 'Qu’est-ce que le système PHA (Peripheral Heart Action) ?',
    options: [
      'Alterner des exercices pour le haut du corps et le bas du corps pour stimuler la circulation',
      'Augmenter puis diminuer la charge à chaque série',
      'Effectuer 2 exercices successifs sans temps de repos pour le même muscle',
      'Effectuer toutes les séries d’un exercice avant de passer au suivant'
    ],
    correctAnswerIndex: 0,
    explanation: 'PHA (Peripheral Heart Action) : système de circuit où l’on alterne haut et bas du corps (ex: push press puis squat) pour forcer le cœur à pomper le sang d’une extrémité à l’autre.'
  },
  {
    id: 'j5_q5',
    day: 5,
    dayLabel: 'Jour 5 : Psychologie & Changement',
    category: 'Modèle de Prochaska',
    question: 'Quelles sont dans l’ordre les étapes du modèle trans-théorique du changement de Prochaska et DiClemente ?',
    options: [
      'Pré-contemplation ➔ Contemplation ➔ Préparation ➔ Action ➔ Maintien/Entretien (avec risque de Rechute)',
      'Action ➔ Préparation ➔ Contemplation ➔ Maintien ➔ Arrêt',
      'Alarme ➔ Résistance ➔ Épuisement ➔ Surcompensation',
      'Intake ➔ PAR-Q ➔ Screening ➔ Test ➔ Programmation'
    ],
    correctAnswerIndex: 0,
    explanation: 'Modèle de Prochaska : 1. Pré-contemplation (pas envie de changer) ➔ 2. Contemplation (réfléchit) ➔ 3. Préparation (s’organise) ➔ 4. Action (démarre) ➔ 5. Maintien (consolidé) ➔ 6. Rechute éventuelle.'
  }
];
