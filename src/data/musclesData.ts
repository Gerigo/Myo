export interface Muscle {
  id: string;
  latinName: string;
  frenchName: string;
  region: 'tronc' | 'dos' | 'membres_sup' | 'membres_inf' | 'cou_tete';
  regionLabel: string;
  functions: string[];
  keyExercises: string[];
  subGroup?: string;
  examNote?: string;
  examTrap?: string;
  coreSystem?: 'local' | 'global' | 'mouvement';
}

export const MUSCLES_DATABASE: Muscle[] = [
  // ==========================================
  // 1. COU & TÊTE (Posture & Upper Crossed)
  // ==========================================
  {
    id: 'sternocleidomastoid',
    latinName: 'M. Sternocleidomastoideus (SCM)',
    frenchName: 'Sterno-cléido-mastoïdien',
    region: 'cou_tete',
    regionLabel: 'Cou & Tête',
    functions: [
      'Flexion de la tête et du cou',
      'Rotation controlatérale de la tête',
      'Flexion latérale ipsilatérale du cou'
    ],
    keyExercises: ['Gainage cervical', 'Renforcement postural du cou'],
    examNote: 'Sur-actif / raccourci dans l’Upper Crossed Syndrome (tête en avant).'
  },
  {
    id: 'levator_scapulae',
    latinName: 'M. Levator Scapulae',
    frenchName: 'Élévateur de l’omoplate (Angulaire)',
    region: 'cou_tete',
    regionLabel: 'Cou & Épaule',
    functions: [
      'Élévation de l’omoplate',
      'Rotation vers le bas de l’omoplate (sonnette interne)',
      'Extension et flexion latérale du cou'
    ],
    keyExercises: ['Étirements cervicaux', 'Haussements d’épaules'],
    examNote: 'Sur-actif dans l’Upper Crossed Syndrome avec le trapèze supérieur.'
  },
  {
    id: 'deep_cervical_flexors',
    latinName: 'Fléchisseurs profonds du cou',
    frenchName: 'Muscles long du cou et de la tête',
    region: 'cou_tete',
    regionLabel: 'Cou & Tête',
    functions: [
      'Flexion cervicale profonde',
      'Stabilisation posturale de la colonne cervicale'
    ],
    keyExercises: ['Chin tuck (rentrer le menton)'],
    examNote: 'Sous-actifs / allongés dans l’Upper Crossed Syndrome.'
  },

  // ==========================================
  // 2. SANGLE ABDOMINALE & TRONC
  // ==========================================
  {
    id: 'rectus_abdominis',
    latinName: 'M. Rectus Abdominis',
    frenchName: 'Droit de l’abdomen (Grand droit)',
    region: 'tronc',
    regionLabel: 'Sangle abdominale',
    functions: [
      'Flexion de la colonne vertébrale',
      'Flexion latérale de la colonne',
      'Rotation de la colonne'
    ],
    keyExercises: ['Crunch', 'Leg Raise', 'Abdominal Crunch machine'],
    examNote: 'Mouvement de montée Push-up = contraction isométrique !'
  },
  {
    id: 'obliquus_externus',
    latinName: 'M. Obliquus Externus Abdominis',
    frenchName: 'Oblique externe',
    region: 'tronc',
    regionLabel: 'Sangle abdominale',
    functions: [
      'Flexion de la colonne (bilatérale)',
      'Flexion latérale de la colonne',
      'Rotation controlatérale (vers le côté opposé)'
    ],
    keyExercises: ['Lateral Crunch', 'Crossed Leg Raise'],
    examNote: 'Attention : rotation CONTROLATÉRALE (côté opposé) !'
  },
  {
    id: 'obliquus_internus',
    latinName: 'M. Obliquus Internus Abdominis',
    frenchName: 'Oblique interne',
    region: 'tronc',
    regionLabel: 'Sangle abdominale',
    functions: [
      'Flexion de la colonne',
      'Flexion latérale de la colonne',
      'Rotation ipsilatérale (du même côté)'
    ],
    keyExercises: ['Lateral Reverse Crunch', 'Crossed Leg Raise'],
    examNote: 'Attention : rotation IPSILATÉRALE (du même côté) ! Stabilisateur local.'
  },
  {
    id: 'transversus_abdominis',
    latinName: 'M. Transversus Abdominis',
    frenchName: 'Transverse de l’abdomen',
    region: 'tronc',
    regionLabel: 'Sangle abdominale (profond)',
    functions: [
      'Augmente la pression intra-abdominale',
      'Soutient les viscères'
    ],
    keyExercises: ['Drawing-in maneuver (aspirer le nombril)', 'Plank / Gainage'],
    examNote: 'Stabilisateur local majeur du core stability.'
  },
  {
    id: 'quadratus_lumborum',
    latinName: 'M. Quadratus Lumborum',
    frenchName: 'Carré des lombes',
    region: 'tronc',
    regionLabel: 'Tronc & Lombaire',
    functions: [
      'Flexion latérale du tronc',
      'Stabilisation lombaire et du bassin'
    ],
    keyExercises: ['Side bending (planche latérale)', 'Suitcase carry'],
    examNote: 'Stabilisateur global entre bassin et rachis.'
  },
  {
    id: 'diaphragme',
    latinName: 'Diaphragme',
    frenchName: 'Diaphragme',
    region: 'tronc',
    regionLabel: 'Thorax / Respiration',
    functions: [
      'Tire le tendon central vers le bas',
      'Augmente le volume dans la cavité thoracique (inspiration)'
    ],
    keyExercises: ['Respiration ventrale diaphragmatique'],
    examNote: 'Muscle respiratoire principal et stabilisateur local du tronc.'
  },
  {
    id: 'multifidus',
    latinName: 'M. Multifidus',
    frenchName: 'Multifide (Transversaire épineux)',
    region: 'tronc',
    regionLabel: 'Rachis profond',
    functions: [
      'Stabilisation vertébrale segment par segment',
      'Extension de la colonne',
      'Rotation controlatérale de la colonne'
    ],
    keyExercises: ['Bird Dog', 'Gainage dynamique'],
    examNote: 'Composant clé du système stabilisateur local (gainage profond).'
  },
  {
    id: 'plancher_pelvien',
    latinName: 'Plancher pelvien (Périnée)',
    frenchName: 'Muscles du plancher pelvien',
    region: 'tronc',
    regionLabel: 'Bassin / Core profond',
    functions: [
      'Soutien des organes pelviens',
      'Maintien de la continence et pression intra-abdominale'
    ],
    keyExercises: ['Exercices de Kegel', 'Gainage profond coordonné'],
    examNote: 'Agit en synergie avec le transverse et le diaphragme.'
  },

  // ==========================================
  // 3. DOS & RACHIS
  // ==========================================
  {
    id: 'latissimus_dorsi',
    latinName: 'M. Latissimus Dorsi',
    frenchName: 'Grand dorsal',
    region: 'dos',
    regionLabel: 'Dos / Épaule',
    functions: [
      'Extension de l’épaule (rétroflexion)',
      'Adduction de l’épaule',
      'Rotation interne de l’épaule'
    ],
    keyExercises: ['Lat Pulldown', 'Pull-up', 'Chin-up', 'Dumbbell Row'],
    examNote: 'Montée lors d’un Pull-up = contraction concentrique !'
  },
  {
    id: 'rhomboideus_major',
    latinName: 'M. Rhomboideus Major',
    frenchName: 'Grand rhomboïde',
    region: 'dos',
    regionLabel: 'Dos / Omoplate',
    functions: [
      'Rétraction de l’omoplate',
      'Rotation interne de l’omoplate (sonnette interne)',
      'Élévation légère de l’omoplate'
    ],
    keyExercises: ['Face pull', 'Machine Row', 'Tirage horizontal'],
    examNote: 'Rapproche les omoplates de la colonne vertébrale.'
  },
  {
    id: 'rhomboideus_minor',
    latinName: 'M. Rhomboideus Minor',
    frenchName: 'Petit rhomboïde',
    region: 'dos',
    regionLabel: 'Dos / Omoplate',
    functions: [
      'Rétraction de l’omoplate',
      'Rotation interne de l’omoplate (sonnette interne)'
    ],
    keyExercises: ['Face pull', 'Rowing prise large'],
    examNote: 'Sous le trapèze, au-dessus du grand rhomboïde.'
  },
  {
    id: 'erector_spinae',
    latinName: 'M. Erector Spinae',
    frenchName: 'Érecteurs du rachis (Iliocostalis, Longissimus, Spinalis)',
    region: 'dos',
    regionLabel: 'Dos / Rachis',
    functions: [
      'Extension de la colonne',
      'Rotation de la colonne',
      'Flexion latérale de la colonne'
    ],
    keyExercises: ['Back extension', 'Reverse hypers', 'Deadlift'],
    examNote: 'Montée au Deadlift = contraction ISOMÉTRIQUE.'
  },
  {
    id: 'trapezius_upper',
    latinName: 'M. Trapezius - Faisceau Supérieur',
    frenchName: 'Trapèze supérieur (partie descendante)',
    region: 'dos',
    regionLabel: 'Dos / Nuque',
    functions: [
      'Élévation de l’omoplate',
      'Extension et inclinaison latérale de la tête'
    ],
    keyExercises: ['Shrug (haussement d’épaules)'],
    examNote: 'Sur-actif dans le syndrome croisé supérieur.'
  },
  {
    id: 'trapezius_middle',
    latinName: 'M. Trapezius - Faisceau Moyen',
    frenchName: 'Trapèze moyen (partie transverse)',
    region: 'dos',
    regionLabel: 'Dos / Scapula',
    functions: [
      'Rétraction de l’omoplate'
    ],
    keyExercises: ['Rowing coudes ouverts', 'Oiseau sur banc'],
    examNote: 'Rétracte les omoplates avec les rhomboïdes.'
  },
  {
    id: 'trapezius_lower',
    latinName: 'M. Trapezius - Faisceau Inférieur',
    frenchName: 'Trapèze inférieur (partie ascendante)',
    region: 'dos',
    regionLabel: 'Dos / Scapula',
    functions: [
      'Dépression de l’omoplate (abaisse l’omoplate)'
    ],
    keyExercises: ['Tirage vertical bas', 'Y-Raise au sol'],
    examNote: 'Souvent sous-actif ; essentiel pour fixer l’épaule vers le bas.'
  },

  // ==========================================
  // 4. ÉPAULE, POITRINE & BRAS
  // ==========================================
  {
    id: 'pectoralis_major',
    latinName: 'M. Pectoralis Major',
    frenchName: 'Grand pectoral',
    region: 'membres_sup',
    regionLabel: 'Poitrine / Épaule',
    functions: [
      'Flexion de l’épaule (antéflexion)',
      'Adduction horizontale de l’épaule',
      'Rotation interne de l’épaule'
    ],
    keyExercises: ['Bench Press', 'Chest Press', 'Fly / Écartés', 'Push-up'],
    examNote: 'Descente Push-up = contraction EXCENTRIQUE !'
  },
  {
    id: 'pectoralis_minor',
    latinName: 'M. Pectoralis Minor',
    frenchName: 'Petit pectoral',
    region: 'membres_sup',
    regionLabel: 'Poitrine / Scapula',
    functions: [
      'Protraction de l’omoplate (tire l’omoplate vers l’avant)',
      'Bascule antérieure de l’omoplate'
    ],
    keyExercises: ['Scapular Push-up'],
    examNote: 'Raccourci fréquent chez les personnes assises voûtées.'
  },
  {
    id: 'serratus_anterior',
    latinName: 'M. Serratus Anterior',
    frenchName: 'Grand dentelé (Dentelé antérieur)',
    region: 'membres_sup',
    regionLabel: 'Thorax / Scapula',
    functions: [
      'Protraction de l’omoplate',
      'Rotation vers le haut de l’omoplate (sonnette externe)',
      'Plaque l’omoplate contre la cage thoracique'
    ],
    keyExercises: ['Scapular push-up', 'Punch press'],
    examNote: 'Évite le décollement de l’omoplate (scapula alata).'
  },
  {
    id: 'deltoideus_anterior',
    latinName: 'M. Deltoideus - Faisceau Antérieur',
    frenchName: 'Deltoïde antérieur (partie claviculaire)',
    region: 'membres_sup',
    regionLabel: 'Épaule (antérieur)',
    functions: [
      'Flexion de l’épaule',
      'Rotation interne de l’épaule',
      'Adduction horizontale de l’épaule'
    ],
    keyExercises: ['Front Raise', 'Bench Press (synergiste)', 'Shoulder Press'],
    examNote: 'Synergiste clé du grand pectoral au Bench Press.'
  },
  {
    id: 'deltoideus_lateral',
    latinName: 'M. Deltoideus - Faisceau Moyen',
    frenchName: 'Deltoïde moyen (partie acromiale)',
    region: 'membres_sup',
    regionLabel: 'Épaule (latérale)',
    functions: [
      'Abduction de l’épaule'
    ],
    keyExercises: ['Lateral Raise (élévations latérales)'],
    examNote: 'Agit dans le plan frontal (axe sagittal Z).'
  },
  {
    id: 'deltoideus_posterior',
    latinName: 'M. Deltoideus - Faisceau Postérieur',
    frenchName: 'Deltoïde postérieur (partie épineuse)',
    region: 'membres_sup',
    regionLabel: 'Épaule (postérieur)',
    functions: [
      'Extension de l’épaule',
      'Rotation externe de l’épaule',
      'Abduction horizontale de l’épaule'
    ],
    keyExercises: ['Reverse Fly (oiseau)', 'Face pull', 'Rowing'],
    examNote: 'Synergiste dans les tirages horizontaux.'
  },

  // COIFFE DES ROTATEURS (4 MUSCLES À CITER À L'EXAMEN)
  {
    id: 'supraspinatus',
    latinName: 'M. Supraspinatus',
    frenchName: 'Sus-épineux (Supra-épineux)',
    region: 'membres_sup',
    regionLabel: 'Coiffe des rotateurs',
    subGroup: 'Coiffe des rotateurs',
    functions: [
      'Initiation de l’abduction de l’épaule (0 à 15°)',
      'Stabilisation et centrage de la tête humérale'
    ],
    keyExercises: ['Élévations dans le plan de la scapula (scaption)'],
    examNote: 'Membre de la coiffe des rotateurs, initie l’abduction.'
  },
  {
    id: 'infraspinatus',
    latinName: 'M. Infraspinatus',
    frenchName: 'Sous-épineux (Infra-épineux)',
    region: 'membres_sup',
    regionLabel: 'Coiffe des rotateurs',
    subGroup: 'Coiffe des rotateurs',
    functions: [
      'Rotation externe de l’épaule',
      'Stabilisation de la tête humérale'
    ],
    keyExercises: ['Rotation externe avec élastique / poulie', 'L-Fly'],
    examNote: 'Membre de la coiffe des rotateurs, rotateur externe majeur.'
  },
  {
    id: 'teres_minor',
    latinName: 'M. Teres Minor',
    frenchName: 'Petit rond',
    region: 'membres_sup',
    regionLabel: 'Coiffe des rotateurs',
    subGroup: 'Coiffe des rotateurs',
    functions: [
      'Rotation externe de l’épaule',
      'Stabilisation de la tête humérale'
    ],
    keyExercises: ['Rotation externe coude au corps', 'Face pull'],
    examNote: 'Membre de la coiffe des rotateurs avec l’infra-épineux.'
  },
  {
    id: 'subscapularis',
    latinName: 'M. Subscapularis',
    frenchName: 'Sous-scapulaire (Subscapulaire)',
    region: 'membres_sup',
    regionLabel: 'Coiffe des rotateurs',
    subGroup: 'Coiffe des rotateurs',
    functions: [
      'Rotation interne de l’épaule',
      'Stabilisation antérieure de la tête humérale'
    ],
    keyExercises: ['Rotation interne avec élastique'],
    examNote: 'Seul muscle de la coiffe situé sur la face antérieure de l’omoplate.'
  },
  {
    id: 'teres_major',
    latinName: 'M. Teres Major',
    frenchName: 'Grand rond',
    region: 'membres_sup',
    regionLabel: 'Dos / Épaule',
    functions: [
      'Extension de l’épaule',
      'Adduction de l’épaule',
      'Rotation interne de l’épaule'
    ],
    keyExercises: ['Lat Pulldown (synergiste)', 'Traction'],
    examNote: 'Surnommé le « petit jumeau du grand dorsal » (mêmes fonctions).'
  },

  // BRAS & AVANT-BRAS
  {
    id: 'biceps_brachii',
    latinName: 'M. Biceps Brachii',
    frenchName: 'Biceps brachial',
    region: 'membres_sup',
    regionLabel: 'Bras (antérieur)',
    functions: [
      'Flexion du coude',
      'Supination de l’avant-bras (articulation radio-ulnaire)',
      'Flexion de l’épaule'
    ],
    keyExercises: ['Biceps Curl', 'Chin-up'],
    examNote: 'Agoniste au Biceps curl. Chef long + chef court.'
  },
  {
    id: 'brachialis',
    latinName: 'M. Brachialis',
    frenchName: 'Brachial antérieur',
    region: 'membres_sup',
    regionLabel: 'Bras (antérieur)',
    functions: [
      'Flexion du coude'
    ],
    keyExercises: ['Hammer Curl (prise marteau)'],
    examNote: 'Synergiste clé du Biceps curl, pur fléchisseur du coude.'
  },
  {
    id: 'brachioradialis',
    latinName: 'M. Brachioradialis',
    frenchName: 'Brachio-radial (Long supinateur)',
    region: 'membres_sup',
    regionLabel: 'Avant-bras / Coude',
    functions: [
      'Flexion du coude'
    ],
    keyExercises: ['Reverse Biceps Curl (prise pronation)'],
    examNote: 'Synergiste clé du Biceps curl.'
  },
  {
    id: 'triceps_brachii',
    latinName: 'M. Triceps Brachii',
    frenchName: 'Triceps brachial',
    region: 'membres_sup',
    regionLabel: 'Bras (postérieur)',
    functions: [
      'Extension du coude',
      'Extension de l’épaule (rétroflexion - chef long)'
    ],
    keyExercises: ['Triceps Pushdown', 'Overhead Extension', 'Tate Press', 'Bench Press'],
    examNote: 'Antagoniste du Biceps curl, agoniste des développés.'
  },
  {
    id: 'pronator_teres',
    latinName: 'M. Pronator Teres',
    frenchName: 'Rond pronateur',
    region: 'membres_sup',
    regionLabel: 'Avant-bras',
    functions: [
      'Pronation de l’avant-bras',
      'Flexion légère du coude',
      'Stabilisation du coude'
    ],
    keyExercises: ['Biceps Curl (agit comme stabilisateur !)'],
    examNote: 'Rôle de stabilisateur officiel dans le Biceps Curl selon le cours PCA.'
  },

  // ==========================================
  // 5. BASSIN, HANCHE & MEMBRES INFÉRIEURS
  // ==========================================
  {
    id: 'gluteus_maximus',
    latinName: 'M. Gluteus Maximus',
    frenchName: 'Grand fessier',
    region: 'membres_inf',
    regionLabel: 'Bassin & Fessier',
    functions: [
      'Extension de la hanche (rétroflexion)',
      'Rotation externe de la hanche'
    ],
    keyExercises: ['Squat', 'Deadlift', 'Split Squat', 'Forward Lunge', 'Glute kickback'],
    examNote: 'Mouvement descendant lors d’une fente (Lunge) = contraction EXCENTRIQUE.'
  },
  {
    id: 'gluteus_medius',
    latinName: 'M. Gluteus Medius',
    frenchName: 'Moyen fessier',
    region: 'membres_inf',
    regionLabel: 'Bassin & Fessier',
    functions: [
      'Abduction de la hanche',
      'Rotation interne de la hanche (fibres antérieures)',
      'Rotation externe de la hanche (fibres postérieures)'
    ],
    keyExercises: ['Banded Lateral Walk', 'Lateral Step-up', 'Clamshell'],
    examNote: 'Stabilisateur frontal du bassin, prévient la chute controlatérale.'
  },
  {
    id: 'piriformis',
    latinName: 'M. Piriformis',
    frenchName: 'Piriforme (Pyramidal)',
    region: 'membres_inf',
    regionLabel: 'Bassin profond',
    functions: [
      'Rotation externe de la hanche',
      'Abduction de la hanche',
      'Rotateur interne au-delà de 60° de flexion de hanche'
    ],
    keyExercises: ['Clamshell', 'Banded walk'],
    examNote: 'Piège d’examen : devient ROTATEUR INTERNE au-delà de 60° de flexion !'
  },
  {
    id: 'iliopsoas_psoas',
    latinName: 'M. Psoas Major',
    frenchName: 'Grand psoas',
    region: 'membres_inf',
    regionLabel: 'Bassin / Lombaire',
    functions: [
      'Flexion de la hanche',
      'Rotation externe de la hanche',
      'Extension et rotation de la colonne lombaire'
    ],
    keyExercises: ['Leg Lifts', 'Montées de genoux'],
    examNote: 'Relie les vertèbres T12-L5 au fémur. Sur-actif dans le Lower Crossed.'
  },
  {
    id: 'iliopsoas_iliacus',
    latinName: 'M. Iliacus',
    frenchName: 'Muscle iliaque',
    region: 'membres_inf',
    regionLabel: 'Bassin',
    functions: [
      'Flexion de la hanche',
      'Rotation externe de la hanche'
    ],
    keyExercises: ['Leg Lifts', 'Flexion de hanche'],
    examNote: 'S’unit avec le grand psoas pour former le tendon de l’iliopsoas.'
  },
  {
    id: 'tensor_fascia_latae',
    latinName: 'M. Tensor Fasciae Latae (TFL)',
    frenchName: 'Tenseur du fascia lata',
    region: 'membres_inf',
    regionLabel: 'Bassin / Cuisse',
    functions: [
      'Flexion de la hanche',
      'Abduction de la hanche',
      'Rotation interne de la hanche'
    ],
    keyExercises: ['Abduction hanche poulie / élastique'],
    examNote: 'Se prolonge par le tractus ilio-tibial.'
  },
  {
    id: 'sartorius',
    latinName: 'M. Sartorius',
    frenchName: 'Sartorius (Couturier)',
    region: 'membres_inf',
    regionLabel: 'Cuisse (antérieur)',
    functions: [
      'Flexion de la hanche',
      'Abduction de la hanche',
      'Rotation externe de la hanche',
      'Flexion du genou'
    ],
    keyExercises: ['Position en tailleur'],
    examNote: 'Plus long muscle du corps humain (bi-articulaire).'
  },

  // LES ADDUCTEURS
  {
    id: 'adductor_longus',
    latinName: 'M. Adductor Longus',
    frenchName: 'Long adducteur (Moyen adducteur)',
    region: 'membres_inf',
    regionLabel: 'Cuisse (médial)',
    subGroup: 'Adducteurs',
    functions: [
      'Adduction de la hanche',
      'Flexion de la hanche',
      'Rotation interne de la hanche'
    ],
    keyExercises: ['Machine Hip Adduction'],
    examNote: 'Participe à l’adduction et flexion de hanche.'
  },
  {
    id: 'adductor_magnus',
    latinName: 'M. Adductor Magnus',
    frenchName: 'Grand adducteur',
    region: 'membres_inf',
    regionLabel: 'Cuisse (médial)',
    subGroup: 'Adducteurs',
    functions: [
      'Adduction de la hanche',
      'Extension de la hanche (fibres postérieures)',
      'Rotation externe de la hanche (fibres postérieures)'
    ],
    keyExercises: ['Machine Hip Adduction', 'Squat large (Sumo)'],
    examNote: 'Important : ses fibres postérieures font l’EXTENSION et la ROTATION EXTERNE !'
  },
  {
    id: 'adductor_brevis',
    latinName: 'M. Adductor Brevis',
    frenchName: 'Court adducteur (Petit adducteur)',
    region: 'membres_inf',
    regionLabel: 'Cuisse (médial)',
    subGroup: 'Adducteurs',
    functions: [
      'Adduction de la hanche',
      'Flexion de la hanche',
      'Rotation interne de la hanche'
    ],
    keyExercises: ['Machine Hip Adduction'],
    examNote: 'Sous le long adducteur.'
  },
  {
    id: 'gracilis',
    latinName: 'M. Gracilis',
    frenchName: 'Gracile (Droit interne)',
    region: 'membres_inf',
    regionLabel: 'Cuisse (médial)',
    subGroup: 'Adducteurs',
    functions: [
      'Adduction de la hanche',
      'Flexion du genou',
      'Rotation interne du tibia/genou'
    ],
    keyExercises: ['Machine Hip Adduction', 'Copenhagen plank'],
    examNote: 'Bi-articulaire : s’insère sur la face interne du tibia (patte d’oie).'
  },
  {
    id: 'pectineus',
    latinName: 'M. Pectineus',
    frenchName: 'Pectiné',
    region: 'membres_inf',
    regionLabel: 'Cuisse / Aine',
    subGroup: 'Adducteurs',
    functions: [
      'Adduction de la hanche',
      'Flexion de la hanche',
      'Rotation interne de la hanche'
    ],
    keyExercises: ['Machine Hip Adduction'],
    examNote: 'Fait partie du complexe des adducteurs.'
  },

  // LE QUADRICEPS (4 CHEFS DÉTAILLÉS)
  {
    id: 'rectus_femoris',
    latinName: 'M. Rectus Femoris',
    frenchName: 'Droit fémoral (Droit antérieur)',
    region: 'membres_inf',
    regionLabel: 'Cuisse (antérieur)',
    subGroup: 'Quadriceps',
    functions: [
      'Extension du genou',
      'Flexion de la hanche'
    ],
    keyExercises: ['Squat', 'Leg Extension', 'Reverse Nordic Curl', 'Lunge'],
    examNote: 'SEUL chef du quadriceps bi-articulaire qui fléchit la hanche !'
  },
  {
    id: 'vastus_lateralis',
    latinName: 'M. Vastus Lateralis',
    frenchName: 'Vaste latéral (Vaste externe)',
    region: 'membres_inf',
    regionLabel: 'Cuisse (antérieur)',
    subGroup: 'Quadriceps',
    functions: [
      'Extension du genou'
    ],
    keyExercises: ['Squat', 'Leg Extension', 'Leg Press'],
    examNote: 'Chef le plus volumineux sur la face latérale de la cuisse.'
  },
  {
    id: 'vastus_medialis',
    latinName: 'M. Vastus Medialis',
    frenchName: 'Vaste médial (Vaste interne)',
    region: 'membres_inf',
    regionLabel: 'Cuisse (antérieur)',
    subGroup: 'Quadriceps',
    functions: [
      'Extension du genou',
      'Stabilisation de la rotule (patella)'
    ],
    keyExercises: ['Squat complet', 'Leg Extension'],
    examNote: 'Stabilisateur médial essentiel de la rotule.'
  },
  {
    id: 'vastus_intermedius',
    latinName: 'M. Vastus Intermedius',
    frenchName: 'Vaste intermédiaire (Crural)',
    region: 'membres_inf',
    regionLabel: 'Cuisse (antérieur)',
    subGroup: 'Quadriceps',
    functions: [
      'Extension du genou'
    ],
    keyExercises: ['Squat', 'Leg Press'],
    examNote: 'Situé sous le droit fémoral.'
  },

  // LES ISCHIO-JAMBIERS (HAMSTRINGS)
  {
    id: 'biceps_femoris',
    latinName: 'M. Biceps Femoris',
    frenchName: 'Biceps fémoral',
    region: 'membres_inf',
    regionLabel: 'Cuisse (postérieur)',
    subGroup: 'Ischio-jambiers',
    functions: [
      'Flexion du genou',
      'Extension de la hanche',
      'Rotation externe du tibia/genou'
    ],
    keyExercises: ['Leg Curl', 'Nordic Hamstring Curl', 'Romanian Deadlift'],
    examNote: 'Chef externe des ischio-jambiers : ROTATION EXTERNE du genou fléchi.'
  },
  {
    id: 'semitendinosus',
    latinName: 'M. Semitendinosus',
    frenchName: 'Semi-tendineux (Demi-tendineux)',
    region: 'membres_inf',
    regionLabel: 'Cuisse (postérieur)',
    subGroup: 'Ischio-jambiers',
    functions: [
      'Flexion du genou',
      'Extension de la hanche',
      'Rotation interne du tibia/genou'
    ],
    keyExercises: ['Leg Curl', 'Romanian Deadlift'],
    examNote: 'Chef interne des ischio-jambiers : ROTATION INTERNE du genou.'
  },
  {
    id: 'semimembranosus',
    latinName: 'M. Semimembranosus',
    frenchName: 'Semi-membraneux (Demi-membraneux)',
    region: 'membres_inf',
    regionLabel: 'Cuisse (postérieur)',
    subGroup: 'Ischio-jambiers',
    functions: [
      'Flexion du genou',
      'Extension de la hanche',
      'Rotation interne du tibia/genou'
    ],
    keyExercises: ['Leg Curl', 'Romanian Deadlift'],
    examNote: 'Chef interne profond des ischio-jambiers : ROTATION INTERNE du genou.'
  },

  // MOLLETS & JAMBE
  {
    id: 'gastrocnemius',
    latinName: 'M. Gastrocnemius (Triceps Surae)',
    frenchName: 'Gastrocnémien (Jumeaux)',
    region: 'membres_inf',
    regionLabel: 'Mollet / Jambe',
    functions: [
      'Flexion plantaire (extension cheville)',
      'Flexion du genou',
      'Supination de la cheville'
    ],
    keyExercises: ['Standing Calf Raise (mollets debout)'],
    examNote: 'Bi-articulaire : franchit le genou et la cheville. S’insère via le tendon d’Achille.'
  },
  {
    id: 'soleus',
    latinName: 'M. Soleus (Triceps Surae)',
    frenchName: 'Soléaire',
    region: 'membres_inf',
    regionLabel: 'Mollet / Jambe',
    functions: [
      'Flexion plantaire',
      'Supination de la cheville'
    ],
    keyExercises: ['Seated Calf Raise (mollets assis, genou fléchi)'],
    examNote: 'Mono-articulaire : ne fléchit PAS le genou (sous le gastrocnémien).'
  },
  {
    id: 'tibialis_anterior',
    latinName: 'M. Tibialis Anterior',
    frenchName: 'Tibial antérieur',
    region: 'membres_inf',
    regionLabel: 'Jambe (antérieur)',
    functions: [
      'Flexion dorsale de la cheville (dorsiflexion)',
      'Inversion de la cheville'
    ],
    keyExercises: ['Toe Raises (relevés de pointe)'],
    examNote: 'Action essentielle pour relever la pointe du pied pendant la marche/course.'
  },
  {
    id: 'fibularis_longus',
    latinName: 'M. Fibularis Longus (Peroneus)',
    frenchName: 'Long fibulaire (Long péronier)',
    region: 'membres_inf',
    regionLabel: 'Jambe (latéral)',
    functions: [
      'Éversion de la cheville',
      'Flexion plantaire de la cheville'
    ],
    keyExercises: ['Éversion avec bande élastique'],
    examNote: 'Antagoniste du tibial antérieur pour l’inversion/éversion.'
  }
];

export const ALL_UNIQUE_FUNCTIONS: string[] = Array.from(
  new Set(MUSCLES_DATABASE.flatMap(m => m.functions))
);
