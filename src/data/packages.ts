import { SpaPackage } from '../types';

export const SPA_PACKAGES: SpaPackage[] = [
  {
    id: 'soul-rejuvenation',
    name: 'The Soul Rejuvenation Ritual',
    subtitle: 'Our signature multi-sensory restorative escape for mind, body, and spirit.',
    durationMinutes: 120,
    pricePlaceholder: '₹4,499',
    price: 4499,
    includedTreatments: [
      '60-Min Aromatherapy or Swedish Massage',
      '30-Min Exfoliating Botanical Body Scrub',
      '30-Min Scalp & Acupressure Facial Touch',
      'Warm Herbal Tea & Dried Fruit Presentation'
    ],
    description: 'An unhurried two-hour immersive wellness journey combining full-body skin polish, tension-melting massage, and calming head therapy to reset your nervous system.',
    idealFor: 'Individuals needing total revitalization and deep sensory recovery from relentless work routines.',
    isFeatured: true
  },
  {
    id: 'imperial-couple-serenity',
    name: 'Imperial Couple Sanctuary',
    subtitle: 'Exclusive VIP double suite ritual crafted for celebratory moments and intimacy.',
    durationMinutes: 150,
    pricePlaceholder: '₹8,999',
    price: 8999,
    includedTreatments: [
      'Welcome Rose Water Floral Foot Wash',
      '90-Min Synchronized Couple Massage (Choice of Modality)',
      '30-Min Rejuvenating Facial or Foot Reflexology',
      '30-Min Private Suite Relaxation with Sparkling Artisan Elixir'
    ],
    description: 'Designed for couples to unplug from digital distractions. Recline in our royal couple suite adorned with rose petals and amber candlelight for an unforgettable memory.',
    idealFor: 'Anniversaries, birthdays, honeymooners, and partners celebrating connection.',
    isFeatured: true
  },
  {
    id: 'total-body-renewal',
    name: 'Total Body Renewal',
    subtitle: 'Deep tissue physical realignment paired with invigorating foot reflexology.',
    durationMinutes: 105,
    pricePlaceholder: '₹4,199',
    price: 4199,
    includedTreatments: [
      '60-Min Deep Tissue Therapeutic Massage',
      '30-Min Targeted Foot Reflexology Therapy',
      '15-Min Warm Camphor & Herbal Back Compress',
      'Detoxifying Ginger-Turmeric Infusion'
    ],
    description: 'A focused, potent package geared toward muscle tension, stiff joints, and heavy legs. Combines targeted myofascial pressure with plantar meridian stimulation.',
    idealFor: 'Fitness buffs, marathoners, frequent flyers, and desk workers with chronic tension.',
    isFeatured: false
  },
  {
    id: 'glow-radiance-ritual',
    name: 'Luminous Glow & Radiance',
    subtitle: 'Exfoliation, deep dermal hydration, and botanical glow for camera-ready elegance.',
    durationMinutes: 120,
    pricePlaceholder: '₹4,899',
    price: 4899,
    includedTreatments: [
      '45-Min Dead Sea Mineral & Walnut Shell Body Polish',
      '45-Min Customized Botanical Facial Treatment',
      '30-Min Calming Back, Neck & Shoulder Massage',
      'Chilled Rose Quartz Facial Roller Finishing'
    ],
    description: 'The definitive head-to-toe beauty retreat. Leaves your skin feeling velvety smooth, deeply hydrated, and glowing with natural vitality.',
    idealFor: 'Pre-wedding preparation, festive season sparkle, and restorative personal pampering.',
    isFeatured: false
  }
];
