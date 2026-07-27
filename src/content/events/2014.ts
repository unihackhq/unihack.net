import { EventDefinition } from '@/types/event'
import backgroundImage from '@/assets/events/2014-background.jpg'

export const event: EventDefinition = {
  name: 'UNIHACK 2014',
  type: 'IN_PERSON',
  year: 2014,
  location: 'York Butter Factory, Melbourne',
  url: 'https://medium.com/unihack-blog/revisiting-unihack-2014-a-photo-essay-26d36a07d0ea',
  startDate: new Date('2014-08-08'),
  endDate: new Date('2014-08-10'),
  branding: {
    background: {
      image: backgroundImage,
      altText: "UNIHACK 2014 participant demonstrating his idea",
      credit: "Terence Huynh"
    }
  },
  video: {
    title: 'Recap Video',
    url: 'https://www.youtube.com/watch?v=5O6w1Ef9-FQ',
  },
  prizesNote: {
    type: 'INFO',
    text: [
      'Devpost was not used in UNIHACK 2014. All pitches were presented in-person.',
    ],
  },
  prizes: [
    {
      type: 'MAIN',
      place: 'FIRST',
      name: 'First Place',
      winner: 'Snippet',
      university: 'UniMelb',
    },
    {
      type: 'SPONSOR',
      sponsor: 'Braintree',
      name: 'Best Use of Braintree',
      winner: 'Discovr',
      university: 'Monash',
    },
    {
      type: 'CATEGORY',
      name: 'Best Design',
      winner: 'Discovr',
      university: 'Monash',
    },
    {
      type: 'CATEGORY',
      name: 'Most Creative Idea',
      winner: 'Cryptic',
      university: 'UniMelb',
    },
  ],
}
