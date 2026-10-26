import { Service } from '../types';

export const SPA_SERVICES: Service[] = [
  {
    id: 'swedish-massage',
    slug: 'swedish-massage',
    name: 'Swedish Massage',
    tagline: 'Classic therapeutic gliding strokes to alleviate muscular fatigue and improve blood flow.',
    category: 'Massage Therapy',
    durationMinutes: [60, 90],
    pricePlaceholder: '₹2,499',
    startingPrice: 2499,
    description: 'A world-renowned holistic therapy utilizing long, rhythmic effleurage and gentle petrissage strokes to soften tense muscles, improve lymphatic circulation, and soothe your autonomic nervous system.',
    fullOverview: 'The Swedish Massage at Spa Soul is an orchestrated symphony of gentle kneading, friction, and long gliding strokes directed toward the heart. Ideal for first-time spa visitors and those seeking balanced tension release without intense pressure, this traditional Scandinavian ritual harmonizes body energy and promotes sound sleep.',
    keyBenefits: [
      'Encourages blood oxygenation and cardiovascular ease',
      'Flushes accumulated lactic acid from tight muscles',
      'Promotes restorative parasympathetic nervous relaxation',
      'Enhances joint flexibility and eases mental stress'
    ],
    treatmentSteps: [
      'Warm herbal foot cleansing and aromatic misting',
      'Effleurage stroke application using warm organic sweet almond oil',
      'Focused petrissage kneading across back, neck, and shoulder contours',
      'Gentle tapotement and friction to invigorate cellular circulation',
      'Soothing head and scalp pressure point closure'
    ],
    idealFor: [
      'Individuals dealing with mild daily fatigue',
      'First-time massage recipients',
      'Anyone seeking deep mental calm without painful deep pressure'
    ],
    contraindications: [
      'Uncontrolled high blood pressure',
      'Severe varicose veins',
      'Recent surgeries (under 6 weeks)'
    ],
    imageUrl: 'https://i.pinimg.com/1200x/15/55/07/155507ca774e67567e733a0f0ee593df.jpg',
    imageAlt: 'Swedish massage therapy with warm botanical oils and soothing gliding strokes',
    isPopular: true
  },
  {
    id: 'deep-tissue-massage',
    slug: 'deep-tissue-massage',
    name: 'Deep Tissue Massage',
    tagline: 'Targeted deep-layer myofascial pressure to untangle chronic muscle knots and stiffness.',
    category: 'Massage Therapy',
    durationMinutes: [60, 90],
    pricePlaceholder: '₹2,999',
    startingPrice: 2999,
    description: 'Designed specifically for chronic muscular tension and athletic fatigue, our certified therapists apply deliberate, sustained pressure and slow cross-fiber friction to reach deep connective muscle layers.',
    fullOverview: 'Deep Tissue Massage targets the sub-layer of muscles and fascia. Using slow strokes with deep finger, palm, forearm, and elbow pressure, our therapists systematically unlock persistent knots and postural adhesions caused by sedentary desk posture or rigorous physical activity.',
    keyBenefits: [
      'Releases chronic back, neck, and shoulder tension knots',
      'Breaks down postural scar tissue and myofascial adhesions',
      'Restores functional range of motion in stiff joints',
      'Lowers cortisol stress levels and persistent tension headaches'
    ],
    treatmentSteps: [
      'Consultation assessing focal pain triggers and posture patterns',
      'Preliminary warming of superficial tissue with aromatic heating balms',
      'Firm thumb and forearm friction along myofascial muscle lines',
      'Deep trigger point deactivation and targeted tension release',
      'Cooling camphor and herbal compress calming ritual'
    ],
    idealFor: [
      'Desk workers with tight trap and shoulder muscles',
      'Athletes and fitness enthusiasts',
      'Individuals suffering from recurring posture stiffness'
    ],
    contraindications: [
      'Recent fractures or acute muscular tears',
      'Blood clotting disorders or anticoagulant medication',
      'Severe osteoporosis'
    ],
    imageUrl: 'https://i.pinimg.com/1200x/b3/6b/7f/b36b7f2aab3ebc6f291507804edeb231.jpg',
    imageAlt: 'Targeted deep tissue massage focusing on neck, shoulder and back myofascial release',
    isPopular: true
  },
  {
    id: 'aromatherapy-massage',
    slug: 'aromatherapy-massage',
    name: 'Aromatherapy Massage',
    tagline: 'Sensory holistic bliss pairing cold-pressed botanical essences with meditative touch.',
    category: 'Massage Therapy',
    durationMinutes: [60, 90],
    pricePlaceholder: '₹2,799',
    startingPrice: 2799,
    description: 'A deeply restorative sensory ceremony combining customized pure botanical essential oils with rhythmic lymphatic strokes. Restores equilibrium between the physical body and emotional spirit.',
    fullOverview: 'At Spa Soul, Aromatherapy is personalized to your mood and bodily state upon arrival. Choose between calming French Lavender & Frankincense, uplifting Bergamot & Lemongrass, or soothing Roman Chamomile & Sandalwood, meticulously blended with organic jojoba carrier oil.',
    keyBenefits: [
      'Calms sensory overstimulation and emotional stress',
      'Absorbs pure botanical phytonutrients through dermis',
      'Assists natural lymphatic drainage and cellular detoxification',
      'Restores restful sleep cycles and positive psychological mood'
    ],
    treatmentSteps: [
      'Olfactory sensory pairing session with pure essential oil flight',
      'Inhalation ceremony with warm moist aromatic herbal towels',
      'Flowing lymphatic drainage strokes incorporating selected essence',
      'Aromatherapeutic acupressure across meridian lines',
      'Herbal chamomile infusion awakening finish'
    ],
    idealFor: [
      'Burnout, anxiety, and sensory fatigue sufferers',
      'Those in search of profound relaxation and emotional balance',
      'Lovers of pure botanical aromas and gentle therapeutic touch'
    ],
    contraindications: [
      'Known botanical or nut allergies (custom hypoallergenic blends provided)',
      'Early trimester pregnancy (safe pregnancy-specific blends upon consultation)'
    ],
    imageUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,fit=crop/6tBfZAW4uxS8gNOJ/dsc08231-50kb-EwFAVZhDbXuP1f3a.jpg',
    imageAlt: 'Pure botanical essential oil apothecary and natural herbal essences at Spa Soul',
    isPopular: true
  },
  {
    id: 'thai-massage',
    slug: 'thai-massage',
    name: 'Thai Massage',
    tagline: 'Ancient Nuad Boran passive yoga stretching and sen energy line stimulation.',
    category: 'Specialty & Couple',
    durationMinutes: [60, 90, 120],
    pricePlaceholder: '₹2,899',
    startingPrice: 2899,
    description: 'An ancient dry bodywork ritual performed on a traditional floor mat. Incorporates passive assisted yoga stretching, rhythmic acupressure along Sen energy meridians, and rhythmic rocking movements.',
    fullOverview: 'Known as "lazy man\'s yoga", traditional Thai Massage at Spa Soul increases flexibility, eases joint compression, and stimulates stagnant vital energy. Performed fully clothed in loose, comfortable cotton attire provided by the spa, without massage oils.',
    keyBenefits: [
      'Dramatically elevates physical flexibility and spine elongation',
      'Unblocks stagnant bodily energy pathways (Sen lines)',
      'Relieves lumbar lower back compression and hip tightness',
      'Invigorates mental focus and bodily alertness'
    ],
    treatmentSteps: [
      'Transition into traditional loose breathable organic spa attire',
      'Warm herbal foot ritual in floral brass bowl',
      'Rhythmic palming and thumb compression along legs and spine',
      'Assisted yoga-based passive stretches opening hips and shoulders',
      'Cranial and neck traction release finishing sequence'
    ],
    idealFor: [
      'People with tight hips, hamstrings, and lower back stiffness',
      'Those who prefer dry, non-oily massage treatments',
      'Practitioners of yoga, sports, or active physical lifestyles'
    ],
    contraindications: [
      'Spinal disc herniation or spinal fusion',
      'Severe arthritis',
      'Recent joint dislocations or ligament tears'
    ],
    imageUrl: '/assets/spa/thai_yoga.jpg',
    imageAlt: 'Traditional Thai Nuad Boran stretching massage and energy balancing',
    isPopular: false
  },
  {
    id: 'full-body-massage',
    slug: 'full-body-massage',
    name: 'Full Body Massage',
    tagline: 'Comprehensive head-to-toe rejuvenation integrating multiple therapeutic modalities.',
    category: 'Massage Therapy',
    durationMinutes: [60, 90],
    pricePlaceholder: '₹2,699',
    startingPrice: 2699,
    description: 'A holistic top-to-bottom body reset that seamlessly blends effleurage, gentle joint mobilization, and localized acupressure across your back, legs, arms, abdomen, neck, and scalp.',
    fullOverview: 'The Spa Soul Signature Full Body Massage addresses tension across every bodily zone. Our senior therapists customize the pressure gradient to your specific comfort level, systematically eliminating muscle aches while instilling an overarching sensation of lightness.',
    keyBenefits: [
      'Complete muscular reset covering major and minor muscle groups',
      'Stimulates systemic lymphatic flow and metabolic detox',
      'Balances autonomic equilibrium and calms overactive mind',
      'Restores somatic grounding and inner serenity'
    ],
    treatmentSteps: [
      'Warm lavender foot bathing and welcome grounding breathwork',
      'Posterior full-body effleurage (back, shoulders, calves, and soles)',
      'Anterior balancing therapy (quads, arms, shoulders, and décolleté)',
      'Gentle abdominal circular movements promoting digestion',
      'Meditative marma-point scalp and face massage'
    ],
    idealFor: [
      'Those wanting complete head-to-toe attention in a single session',
      'Exhausted individuals needing total somatic reboot',
      'Anyone experiencing generalized body stiffness'
    ],
    contraindications: [
      'Active fever or infectious skin conditions',
      'Acute open wounds or severe sunburn'
    ],
    imageUrl: '/assets/spa/full_body.jpg',
    imageAlt: 'Comprehensive full body massage with soothing therapeutic strokes',
    isPopular: false
  },
  {
    id: 'couple-spa-experience',
    slug: 'couple-spa-experience',
    name: 'Couple Spa Experience',
    tagline: 'Intimate shared sanctuary ritual in our private VIP royal couple suite.',
    category: 'Specialty & Couple',
    durationMinutes: [90, 120],
    pricePlaceholder: '₹5,499',
    startingPrice: 5499,
    description: 'Indulge together in an opulent VIP couple suite featuring side-by-side plush massage tables, amber candlelight, delicate rose water foot soaks, synchronized therapy, and warm herbal tea service.',
    fullOverview: 'Celebrate anniversaries, special milestones, or simply unwind together in absolute privacy. Each partner chooses their preferred massage style—whether Swedish, Deep Tissue, or Aromatherapy. Our synchronized therapists ensure both of you experience an unhurried, blissful retreat.',
    keyBenefits: [
      'Fosters shared peace, mutual reconnection, and tranquility',
      'Customized treatments tailored individually for each partner',
      'Private luxury couple suite reserved exclusively for your session',
      'Includes complimentary herbal brew and artisan spa refreshments'
    ],
    treatmentSteps: [
      'Welcome floral foot bath in rose water and sea salt crystals',
      'Selection of custom essential aromatherapy oils for each partner',
      'Synchronized 75 or 90-minute therapeutic massage treatment',
      'Warm aromatic towels and cranial scalp pressure ritual',
      'Private 15-minute relaxation downtime with herbal infusion'
    ],
    idealFor: [
      'Couples celebrating anniversaries, birthdays, or weekend getaways',
      'Friends or mothers and daughters seeking private shared pampering',
      'Anyone wanting a truly memorable premium gift experience'
    ],
    contraindications: [
      'Standard general massage contraindications apply individually'
    ],
    imageUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,fit=crop/6tBfZAW4uxS8gNOJ/dsc08262-50kb-cPk9HggfE6129RpE.jpg',
    imageAlt: 'Romantic couple spa suite with plush double beds and candlelit ambiance at Spa Soul Surat',
    isPopular: true
  },
  {
    id: 'relaxation-massage',
    slug: 'relaxation-massage',
    name: 'Relaxation Massage',
    tagline: 'Gentle, meditative touch designed exclusively to de-stress the central nervous system.',
    category: 'Massage Therapy',
    durationMinutes: [60, 90],
    pricePlaceholder: '₹2,299',
    startingPrice: 2299,
    description: 'A whisper-soft, rhythmic massage designed to quiet racing thoughts and surrender the body into restorative slumber. Features continuous fluid strokes with pure warm jojoba oil.',
    fullOverview: 'Unlike deep therapeutic work that targets knots, Relaxation Massage prioritizes nervous system sedation. By applying gentle, rhythmic, uninterrupted strokes at a calming tempo, your heart rate naturally settles, muscular holding patterns melt away, and mental clarity emerges.',
    keyBenefits: [
      'Instantly shifts nervous system into deep parasympathetic rest',
      'Alleviates stress-induced insomnia and restless tension',
      'Completely non-painful, pampering, and deeply comforting',
      'Hydrates dry skin with warm cold-pressed organic oils'
    ],
    treatmentSteps: [
      'Dimming of suite illumination to soft warm amber candle glow',
      'Inhalation of pure calming lavender and roman chamomile vapour',
      'Fluid, uninterrupted gliding strokes across back, legs, and arms',
      'Gentle temple and forehead marma-point relaxation touch',
      'Warm linen towel tucking and quiet awakening sequence'
    ],
    idealFor: [
      'High-stress professionals experiencing cognitive fatigue',
      'Those sensitive to deep tissue pressure who seek pure comfort',
      'Anyone needing restorative rest and emotional calm'
    ],
    contraindications: [
      'Active fever or contagious dermatological conditions'
    ],
    imageUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,fit=crop/6tBfZAW4uxS8gNOJ/dsc08251-50kb-qT3OzhnKW970zBwH.jpg',
    imageAlt: 'Peaceful relaxation massage therapy room with warm candle and clean linens',
    isPopular: false
  },
  {
    id: 'foot-reflexology',
    slug: 'foot-reflexology',
    name: 'Foot Reflexology',
    tagline: 'Targeted acupressure on reflex zones reflecting vital internal organs and meridians.',
    category: 'Specialty & Couple',
    durationMinutes: [45, 60],
    pricePlaceholder: '₹1,799',
    startingPrice: 1799,
    description: 'Rooted in ancient Eastern reflexology wisdom, this focused therapy stimulates specific nerve and energy zones on the soles and calves, restoring homeostasis across corresponding bodily systems.',
    fullOverview: 'Your feet contain thousands of sensory nerve endings. In this deeply satisfying treatment, you recline in our ergonomic loungers while a reflexologist uses precise thumb-walking techniques, wooden reflex tools, and cooling peppermint balm to relieve tired arches and revitalize internal vitality.',
    keyBenefits: [
      'Relieves intense plantar foot fatigue, heel aches, and swelling',
      'Stimulates reflex meridians mapped to internal organ systems',
      'Promotes venous circulation returning blood from lower extremities',
      'Deeply relaxing without needing to disrobe fully'
    ],
    treatmentSteps: [
      'Warm botanical soak with Epsom salts and essential eucalyptus',
      'Gentle exfoliating foot scrub removing calloused dead skin',
      'Zone-by-zone reflex point stimulation using thumb and wooden stylus',
      'Calf and shin tension-relieving upward lymphatic strokes',
      'Cooling botanical peppermint balm massage and hot towel wrap'
    ],
    idealFor: [
      'Shoppers, travelers, and retail professionals on their feet all day',
      'Quick lunch-break or evening recovery sessions without undressing',
      'Individuals suffering from swollen ankles or plantar discomfort'
    ],
    contraindications: [
      'Foot fractures or severe gout inflammation',
      'Deep vein thrombosis (DVT) in calves',
      'Severe open foot ulcers'
    ],
    imageUrl: '/assets/spa/reflexology.jpg',
    imageAlt: 'Soothing botanical foot reflexology soak and acupressure therapy',
    isPopular: false
  },
  {
    id: 'body-scrub',
    slug: 'body-scrub',
    name: 'Body Scrub',
    tagline: 'Full-body exfoliation with mineral salts and botanicals for radiant, silky skin.',
    category: 'Body & Skin Rituals',
    durationMinutes: [45, 60],
    pricePlaceholder: '₹2,399',
    startingPrice: 2399,
    description: 'Polish dull epidermal cells away with our artisanal body polishes. Formulated with Dead Sea minerals, crushed walnut shells, cocoa butter, and floral botanical oils to reveal luminous skin.',
    fullOverview: 'Environmental pollutants and dry air can leave skin rough, congested, and lackluster. Our full-body scrub removes dead skin flakes, stimulates microcirculation, and infuses intense moisture. Perfect as a standalone glow treatment or as a primer prior to a full massage.',
    keyBenefits: [
      'Sloughs off dead surface cells, revealing radiant, velvety skin',
      'Unclogs pores and prevents ingrown hairs',
      'Significantly amplifies skin absorption of hydrating lotions',
      'Stimulates cellular renewal and microvascular blood flow'
    ],
    treatmentSteps: [
      'Skin consultation selecting between Coffee Glow or Rose Salt polish',
      'Vigorous circular full-body buffing from shoulders to toes',
      'Warm rainfall shower rinse in private en-suite suite',
      'Application of nutrient-dense shea and argan whipped body butter',
      'Final protective botanical hydration lock'
    ],
    idealFor: [
      'Pre-wedding or pre-event luminous skin preparation',
      'Dry, flaky, or sun-weathered skin renewal',
      'Anyone seeking velvety soft, hydrated bodily skin'
    ],
    contraindications: [
      'Severe active sunburn or irritated eczema patches',
      'Within 24 hours of shaving or waxing'
    ],
    imageUrl: '/assets/spa/body_scrub.jpg',
    imageAlt: 'Natural mineral sea salt body scrub and exfoliating botanical herbs',
    isPopular: false
  },
  {
    id: 'facial-treatments',
    slug: 'facial-treatments',
    name: 'Facial Treatments',
    tagline: 'Customized luxury botanical facials designed for deep cleansing, hydration, and youth glow.',
    category: 'Body & Skin Rituals',
    durationMinutes: [60, 75],
    pricePlaceholder: '₹2,799',
    startingPrice: 2799,
    description: 'Transformative facial therapies blending potent botanical antioxidants, gentle lymphatic drainage, enzymatic exfoliation, and targeted nourishing masks for a radiant complexion.',
    fullOverview: 'Our facial rituals are carefully customized to your dermal type: Brightening Vitamin C, Ultra-Hydrating Hyaluronic Marine, or Calming Botanical Aloe. Includes soothing neck, shoulder, and décolleté massage while your botanical mask works its magic.',
    keyBenefits: [
      'Purifies congested pores and smooths epidermal texture',
      'Restores moisture barrier and diminishes fine dehydration lines',
      'Sculpts facial contours through specialized lymphatic drainage',
      'Provides a luminous, healthy, camera-ready bridal glow'
    ],
    treatmentSteps: [
      'Double cleanse with soothing botanical micellar and rose milk',
      'Gentle fruit enzyme exfoliation and warm ozone steam mist',
      'Lymphatic facial sculpting massage using cold rose quartz rollers',
      'Targeted bio-cellulose or botanical clay mask application',
      'Antioxidant serum, peptide eye cream, and broad-spectrum shield'
    ],
    idealFor: [
      'Dull, dehydrated, or pollution-stressed facial skin',
      'Pre-event glow for weddings, parties, or photographs',
      'Anyone seeking deep facial cleanliness and gentle rejuvenation'
    ],
    contraindications: [
      'Active severe cystic acne breakouts',
      'Recent chemical peels or laser treatments (within 14 days)'
    ],
    imageUrl: 'https://i.pinimg.com/1200x/60/49/2c/60492cb2c9462eed91a9b27b715295b6.jpg',
    imageAlt: 'Relaxing luxury botanical facial therapy and skin rejuvenation at Spa Soul',
    isPopular: true
  }
];
