export interface SpaVideo {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  videoUrl: string;
  posterUrl: string;
  duration: string;
  badge: string;
  tags: string[];
}

export interface SpaMediaPhoto {
  id: string;
  title: string;
  category: 'Ambience' | 'Treatment Suites' | 'Couple Suites' | 'Botanicals & Oils' | 'Therapies';
  imageUrl: string;
  description: string;
  sourceNote?: string;
}

export const SPA_VIDEOS: SpaVideo[] = [
  {
    id: 'vid-ambience',
    title: 'The Art of Restorative Touch',
    subtitle: 'Cinematic Sanctuary Ambience',
    description: 'Immerse yourself in the calming aura of our private treatment chambers, softly glowing candles, and organic aromatic oils.',
    videoUrl: 'https://videos.pexels.com/video-files/6628456/6628456-uhd_4096_2160_25fps.mp4',
    posterUrl: 'https://images.pexels.com/videos/6628456/pexels-photo-6628456.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200',
    duration: '0:35 min',
    badge: 'Ambient Film',
    tags: ['Sanctuary Atmosphere', 'Gentle Illumination', 'Private Suites']
  },
  {
    id: 'vid-massage',
    title: 'Holistic Bodywork & Aromatic Oils',
    subtitle: 'Signature Therapy Reel',
    description: 'Witness the rhythmic kneading, muscle release techniques, and warm botanical oil infusions performed by expert therapists.',
    videoUrl: 'https://videos.pexels.com/video-files/6629856/6629856-uhd_2732_1440_25fps.mp4',
    posterUrl: 'https://images.pexels.com/videos/6629856/body-massage-massage-massage-oil-massage-room-6629856.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200',
    duration: '0:28 min',
    badge: 'Therapy Reel',
    tags: ['Deep Tissue', 'Warm Herbal Oil', 'Stress Relief']
  }
];

export const REAL_SPA_PHOTOS: SpaMediaPhoto[] = [
  {
    id: 'real-01',
    title: 'Grand Welcome Lounge & Reception Sanctuary',
    category: 'Ambience',
    imageUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,fit=crop/6tBfZAW4uxS8gNOJ/dsc08264-50kb-xkywwEX8g6q2RfQu.jpg',
    description: 'Our warm, serene arrival reception designed with polished marble, soft ambient lighting, and bespoke herbal welcome teas.'
  },
  {
    id: 'real-02',
    title: 'Signature Deep Relaxation Massage Suite',
    category: 'Treatment Suites',
    imageUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,fit=crop/6tBfZAW4uxS8gNOJ/dsc08258-50kb-07aNsE0Ln1GSTZ0Y.jpg',
    description: 'Spacious private massage bed with layered Egyptian linens, ambient mood backlight, and dedicated aromatherapy diffuser.'
  },
  {
    id: 'real-03',
    title: 'Private Quietude Chamber & Therapy Bed',
    category: 'Treatment Suites',
    imageUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,fit=crop/6tBfZAW4uxS8gNOJ/dsc08251-50kb-qT3OzhnKW970zBwH.jpg',
    description: 'Intimate therapy suite with acoustic insulation and soothing earth tones for total decompression.'
  },
  {
    id: 'real-04',
    title: 'Quiet Wellness Corridor & Suite Entrances',
    category: 'Ambience',
    imageUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,fit=crop/6tBfZAW4uxS8gNOJ/dsc08270-50kb-MwzN0z3iAl94SWJO.jpg',
    description: 'Sound-dampened architectural hallway leading directly into secluded private chambers.'
  },
  {
    id: 'real-05',
    title: 'Reflexology Foot Sanctuary & Recliner Lounge',
    category: 'Ambience',
    imageUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,fit=crop/6tBfZAW4uxS8gNOJ/dsc08230-50kb-Rqgwn2tNKhJ2SJko.jpg',
    description: 'Ergonomic plush leather recliners dedicated to Ayurvedic and Thai pressure-point foot reflexology.'
  },
  {
    id: 'real-06',
    title: 'Artisan Essential Oils & Herbal Apothecary',
    category: 'Botanicals & Oils',
    imageUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,fit=crop/6tBfZAW4uxS8gNOJ/dsc08231-50kb-EwFAVZhDbXuP1f3a.jpg',
    description: 'Cold-pressed almond, sesame, and pure organic essential oils blended custom for each guest.'
  },
  {
    id: 'real-07',
    title: 'Royal Couple Sanctuary & Jacuzzi Chamber',
    category: 'Couple Suites',
    imageUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,fit=crop/6tBfZAW4uxS8gNOJ/dsc08262-50kb-cPk9HggfE6129RpE.jpg',
    description: 'Double therapy beds and candlelit ambiance crafted exclusively for couple wellness rituals and anniversaries.'
  },
  {
    id: 'real-08',
    title: 'Botanical Facial & Skin Rejuvenation Suite',
    category: 'Treatment Suites',
    imageUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,fit=crop/6tBfZAW4uxS8gNOJ/dsc08249-50kb-rymUIxqOqXkBI6ni.jpg',
    description: 'Dedicated aesthetician station featuring pure herbal face masks, steam pore cleansing, and lymphatic drainage.'
  },
  {
    id: 'real-09',
    title: 'Basalt River Hot Stones Therapy Prep',
    category: 'Botanicals & Oils',
    imageUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,fit=crop/6tBfZAW4uxS8gNOJ/dsc08244-50kb-9MkbcSza2YzKdXjo.jpg',
    description: 'Polished volcanic basalt stones heated to optimal healing temperature for deep chronic muscle relief.'
  },
  {
    id: 'real-10',
    title: 'Private Rain Shower & Hydro-Therapy Area',
    category: 'Treatment Suites',
    imageUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,fit=crop/6tBfZAW4uxS8gNOJ/dsc08285-50kb-aSdEQCk85hQ8tOMk.jpg',
    description: 'En-suite hydrotherapy rain shower for refreshing post-oil massage comfort and complete guest privacy.'
  },
  {
    id: 'real-11',
    title: 'Post-Ritual Organic Herbal Elixir Lounge',
    category: 'Ambience',
    imageUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,fit=crop/6tBfZAW4uxS8gNOJ/dsc08281-50kb-NxB1R0P8LGWExx9b.jpg',
    description: 'Relax post-therapy with warm lemongrass and Himalayan mint herbal tea infusions.'
  },
  {
    id: 'real-12',
    title: 'Pure Body Scrub Salts & Botanical Extracts',
    category: 'Botanicals & Oils',
    imageUrl: '/assets/spa/botanicals_bowl.jpg',
    description: 'Mineral-rich Dead Sea salts blended with floral extracts and cold-pressed essential oils in carved artisanal bowls.'
  }
];

export const PINTEREST_EDITORIAL_PHOTOS: SpaMediaPhoto[] = [
  {
    id: 'pin-01',
    title: 'Warm Basalt Hot Stone Meridian Therapy',
    category: 'Therapies',
    imageUrl: '/assets/spa/hot_stones.jpg',
    description: 'Volcanic river stones heated in aromatic herbal water and positioned along key meridian points to dissolve deep fatigue.'
  },
  {
    id: 'pin-02',
    title: 'Deep Tissue & Spinal Myofascial Alignment',
    category: 'Therapies',
    imageUrl: '/assets/spa/deep_tissue.jpg',
    description: 'Targeted deep-layer myofascial release utilizing heated basalt stones and fragrant orchid flower essences.'
  },
  {
    id: 'pin-03',
    title: 'Botanical Clay Facial & Skin Radiance Ritual',
    category: 'Therapies',
    imageUrl: 'https://i.pinimg.com/1200x/60/49/2c/60492cb2c9462eed91a9b27b715295b6.jpg',
    description: 'Custom organic clay mask infused with wild rose and chamomile extracts to restore cellular glow.'
  },
  {
    id: 'pin-04',
    title: 'Restorative Full Body Therapeutic Massage',
    category: 'Therapies',
    imageUrl: '/assets/spa/full_body.jpg',
    description: 'Skilled female therapist applying rhythmic gliding effleurage and gentle acupressure to untangle posture fatigue.'
  },
  {
    id: 'pin-05',
    title: 'Pure Essential Botanical Apothecary & Aromas',
    category: 'Botanicals & Oils',
    imageUrl: '/assets/spa/aromatherapy.jpg',
    description: 'Therapeutic-grade lavender, eucalyptus, and bergamot essences formulated to harmonize the autonomic nervous system.'
  },
  {
    id: 'pin-06',
    title: 'Warm Ayurvedic Herb-Infused Oil Drizzle',
    category: 'Botanicals & Oils',
    imageUrl: 'https://i.pinimg.com/1200x/15/55/07/155507ca774e67567e733a0f0ee593df.jpg',
    description: 'Continuous stream of nourishing therapeutic warm oil poured gracefully along the spine.'
  },
  {
    id: 'pin-07',
    title: 'Targeted Scapula & Neck Knot Release',
    category: 'Therapies',
    imageUrl: 'https://i.pinimg.com/1200x/b3/6b/7f/b36b7f2aab3ebc6f291507804edeb231.jpg',
    description: 'Precision trigger point therapy eliminating chronic desk-work neck and shoulder tightness.'
  },
  {
    id: 'pin-08',
    title: 'Rose Petal Hydro-Jacuzzi Bath Experience',
    category: 'Couple Suites',
    imageUrl: '/assets/spasoul/service_8.webp',
    description: 'Deep whirlpool bath adorned with hundreds of fragrant fresh roses, gentle bubbles, and warm mood lighting.'
  },
  {
    id: 'pin-09',
    title: 'Romantic Candlelit Sanctuary Couple Suite',
    category: 'Couple Suites',
    imageUrl: '/assets/spasoul/service_7.jpg',
    description: 'Intimate couple sanctuary with heart-shaped towel art, fresh red rose petals, and tranquil candlelight.'
  }
];
