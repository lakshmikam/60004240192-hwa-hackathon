import type { Kit } from '../types';

export const KITS: Kit[] = [
  {
    id: 'starter-quest',
    name: 'Starter Quest',
    tagline: '3 stations for first-time buyers.',
    description:
      'The core set: three stations for one timed treasure hunt.',
    stations: 3,
    quests: 1,
    price: 36,
    badge: 'Start here',
    accent: 'coral',
    includes: [
      '3 timed stations — one full quest',
      '3 removable food cups',
      'Quick-start timing card',
      'Paw-print trail stickers',
    ],
  },
  {
    id: 'double-quest',
    name: 'Double Quest',
    tagline: '6 stations for rotating between rooms.',
    description:
      'Two complete sets for longer days or bigger spaces.',
    stations: 6,
    quests: 2,
    price: 64,
    badge: 'A good step up',
    accent: 'teal',
    includes: [
      '6 timed stations — two full quests',
      '6 removable food cups',
      '2 quick-start timing cards',
      'Paw-print trail stickers',
    ],
  },
  {
    id: 'triple-quest',
    name: 'Triple Quest',
    tagline: '9 stations for spare sets.',
    description:
      'Three complete sets for back-to-back trails and more rooms in play.',
    stations: 9,
    quests: 3,
    price: 89,
    badge: 'Biggest set',
    accent: 'sun',
    includes: [
      '9 timed stations — three full quests',
      '9 removable food cups',
      '3 quick-start timing cards',
      'Paw-print trail stickers',
    ],
  },
];

export function getKit(id: string): Kit | undefined {
  return KITS.find((kit) => kit.id === id);
}
