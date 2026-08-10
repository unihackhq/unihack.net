import { EventDefinition } from '@/types/event'
import background from '@/assets/events/2016-background.jpg'

export const event: EventDefinition = {
  name: 'UNIHACK 2016',
  type: 'IN_PERSON',
  year: 2016,
  location: 'LAB-14, Melbourne',
  url: 'https://unihack2016.devpost.com/',
  startDate: new Date('2016-07-30'),
  endDate: new Date('2016-07-31'),
  prizesNote: {
    type: 'INFO',
    text: [
      'Some Devpost submissions are incomplete or missing. Some teams may have taken down their submissions.',
      'Between 2015-2019, Devpost was only used to record projects submitted. All judging was done in-person on the final day of the hackathon. As a result, quality of Devpost submissions may vary.',
    ],
  },
  branding: {
    background: {
      image: background,
      altText: "A group presenting their robot to a guest at UNIHACK 2016",
      credit: "Tom Solari"
    }
  },
  prizes: [
    {
      name: 'First Place',
      winner: 'mangodb',
      type: 'MAIN',
      place: 'FIRST',
      devpostUrl: 'https://devpost.com/software/mangodb',
      university: 'Melbourne'
    },
    {
      name: 'Second Place',
      winner: 'Pyraminx Scheme',
      type: 'MAIN',
      place: 'SECOND',
      devpostUrl: 'https://devpost.com/software/pyraminx-scheme',
      university: 'Monash'
    },
    {
      name: 'Third Place',
      winner: 'The Magic Hand',
      type: 'MAIN',
      place: 'THIRD',
      devpostUrl: 'https://devpost.com/software/the-magic-hand',
      university: 'Monash'
    },
    {
      name: 'Most Elegant Algorithm',
      winner: 'Pyraminx Scheme',
      type: 'SPONSOR',
      sponsor: 'IMC',
      devpostUrl: 'https://devpost.com/software/pyraminx-scheme',
      university: 'Monash'
    },
    {
      name: "People's Choice Award",
      winner: 'Buiz-e',
      type: 'SPONSOR',
      sponsor: 'Microsoft',
      devpostUrl: 'https://devpost.com/software/buiz-e',
      university: 'Monash'
    },
    {
      name: 'IOT: Invented for Life Award',
      winner: 'NodeCare',
      type: 'SPONSOR',
      sponsor: 'Bosch',
      devpostUrl: 'https://devpost.com/software/nodecare',
      university: "Melbourne"
    },
    {
      name: 'Future Leaders Prize',
      winner: 'NodeCare',
      type: 'SPONSOR',
      sponsor: 'PwC',
      devpostUrl: 'https://devpost.com/software/nodecare',
      university: 'Melbourne'
    },
    {
      name: 'Universal Design Prize',
      winner: 'Dequeue',
      type: 'SPONSOR',
      sponsor: 'Seamless CMS',
      devpostUrl: 'https://devpost.com/software/dequeue',
      university: 'Monash'
    },
    {
      name: 'The Unicorn Prize',
      winner: 'Reverb: Audio Comparison Microservice',
      type: 'SPONSOR',
      sponsor: 'Accenture',
      devpostUrl:
        'https://devpost.com/software/reverb-audio-comparison-microservice',
      university: 'Monash'
    },
    {
      name: 'Best Use of TDD',
      winner: 'Dashr',
      type: 'SPONSOR',
      sponsor: 'Thoughtworks',
      devpostUrl: 'https://devpost.com/software/top-secret-module-project',
      university: 'Monash/RMIT/UniMelb'
    },
    {
      name: 'Best Marketplace Ready Hack',
      winner: 'Dashr',
      type: 'SPONSOR',
      sponsor: 'Xero',
      devpostUrl: 'https://devpost.com/software/top-secret-module-project',
      university: 'Monash/RMIT/UniMelb'
    },
    {
      name: 'Best Student Solution',
      winner: 'Bytegem',
      type: 'SPONSOR',
      sponsor: 'Monash eSolutions',
      devpostUrl: 'https://devpost.com/software/bytegem',
      university: 'Monash'
    },
    {
      name: 'Best Design',
      winner: 'Buiz-e',
      type: 'CATEGORY',
      devpostUrl: 'https://devpost.com/software/buiz-e',
      university: 'Monash'
    },
    {
      name: 'Most Creative Idea',
      winner: 'Canine Synergy Solutions',
      type: 'CATEGORY',
      devpostUrl: 'https://devpost.com/software/unihack-2016',
      university: 'RMIT'
    },
  ],
}
