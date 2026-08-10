import type { EventDefinition } from '@/types/event'

export const event: EventDefinition = {
  name: 'UNIHACK Sydney 2017',
  id: '2017-sydney',
  type: 'IN_PERSON',
  year: 2017,
  location: 'Stone and Chalk, Sydney',
  url: 'https://unihack2017syd.devpost.com/',
  startDate: new Date('2017-08-19'),
  endDate: new Date('2017-08-20'),
  prizesNote: {
    type: 'INFO',
    text: [
      'Some Devpost submissions are incomplete or missing. Some teams may have taken down their submissions.',
      'Between 2015-2019, Devpost was only used to record projects submitted. All judging was done in-person on the final day of the hackathon. As a result, quality of Devpost submissions may vary.',
    ],
  },
  prizes: [
    {
      name: 'First Place',
      winner: 'Trusty',
      type: 'MAIN',
      place: 'FIRST',
      devpostUrl: 'https://devpost.com/software/trusty-tx7uwk',
      university: 'UTS/Macquarie'
    },
    {
      name: 'Second Place',
      winner: 'CharitySync',
      type: 'MAIN',
      place: 'SECOND',
      devpostUrl: 'https://devpost.com/software/charitysync',
      university: 'UNSW/Macquarie/UTS'
    },
    {
      name: 'Third Place',
      winner: 'Parzi',
      type: 'MAIN',
      place: 'THIRD',
      devpostUrl: 'https://devpost.com/software/parzi',
      university: 'UNSW'
    },
    {
      name: 'Best Use of Accenture API',
      winner: 'Spidr',
      type: 'SPONSOR',
      sponsor: 'Accenture',
      devpostUrl: 'https://devpost.com/software/spidr',
      university: 'USYD'
    },
    {
      name: 'Most Innovative Solution on Azure',
      winner: 'MootPoint',
      type: 'SPONSOR',
      sponsor: 'Microsoft',
      devpostUrl: 'https://devpost.com/software/mootpoint-rbfdha',
      university: 'USYD'
    },
    {
      name: 'Thoughtworks Prize for Team Collaboration',
      winner: 'Shrec',
      type: 'SPONSOR',
      sponsor: 'Thoughtworks',
      devpostUrl: 'https://devpost.com/software/shrec-yknhxc',
      university: 'USYD'
    },
    {
      name: 'Most Elegant Algorithm',
      winner: 'Shrec',
      type: 'SPONSOR',
      sponsor: 'IMC',
      devpostUrl: 'https://devpost.com/software/shrec-yknhxc',
      university: 'USYD'
    },
    {
      name: 'Social and Financial Wellbeing Prize',
      winner: 'Trusty',
      type: 'SPONSOR',
      sponsor: 'Commonwealth Bank',
      devpostUrl: 'https://devpost.com/software/trusty-tx7uwk',
      university: 'UTS/Macquarie'
    },
    {
      name: 'Best Design',
      winner: 'SondR',
      type: 'CATEGORY',
      devpostUrl: 'https://devpost.com/software/sondr',
      university: 'USYD'
    },
    {
      name: 'Most Explosive prize',
      winner: 'Spidr',
      type: 'CATEGORY',
      devpostUrl: 'https://devpost.com/software/spidr',
      university: 'USYD'
    },
    {
      name: 'Global Citizen Prize',
      winner: 'CharitySync',
      type: 'CATEGORY',
      devpostUrl: 'https://devpost.com/software/charitysync',
      university: 'UNSW/Macquarie/UTS'
    },
  ],
}
