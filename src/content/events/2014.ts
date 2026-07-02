import type { Event } from './types'

export const event: Event = {
  name: 'UNIHACK',
  type: 'IN_PERSON',
  year: 2014,
  location: 'York Butter Factory, Melbourne',
  url:
    'https://medium.com/unihack-blog/revisiting-unihack-2014-a-photo-essay-26d36a07d0ea',
  startDate: new Date('2014-08-08'),
  endDate: new Date('2014-08-10'),
  prizesNote: {
    type: 'INFO',
    text: ['Devpost was not used in UNIHACK 2014. All pitches were presented in-person.']
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
