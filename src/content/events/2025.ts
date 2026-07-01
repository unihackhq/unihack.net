import type { Event } from './types'

export const event: Event = {
  name: 'UNIHACK 2025',
  year: 2025,
  type: 'HYBRID',
  url: 'https://unihack2025.devpost.com/',
  location: 'Australia and New Zealand',
  startDate: new Date('2025-03-14'),
  endDate: new Date('2025-03-16'),
  prizes: [
    {
      name: 'First Place',
      winner: 'Growth Garden',
      type: 'MAIN',
      place: 'FIRST',
      devpostUrl: 'https://unihack2025.devpost.com/submissions/630139-growth-garden',
    },
    {
      name: 'Second Place',
      winner: 'Shuffl',
      type: 'MAIN',
      place: 'SECOND',
      devpostUrl: 'https://unihack2025.devpost.com/submissions/631178-shuffl',
    },
    {
      name: 'Third Place',
      winner: 'Weave',
      type: 'MAIN',
      place: 'THIRD',
      devpostUrl: 'https://unihack2025.devpost.com/submissions/631098-weave',
    },
    {
      name: 'Best Use of DataStax API',
      winner: 'CollabAI',
      type: 'SPONSOR',
      sponsor: 'DataStax',
      devpostUrl: 'https://unihack2025.devpost.com/submissions/631022-collabai',
    },
    {
      name: 'Social Impact Prize',
      winner: 'Cryptarity',
      type: 'SPONSOR',
      sponsor: 'Atlassian',
      devpostUrl: 'https://unihack2025.devpost.com/submissions/631011-cryptarity',
    },
    {
      name: 'Best Design',
      winner: 'Cryptarity',
      type: 'CATEGORY',
      devpostUrl: 'https://unihack2025.devpost.com/submissions/631011-cryptarity',
    },
    {
      name: 'Most Creative Idea',
      winner: 'EYEVISION',
      type: 'CATEGORY',
      devpostUrl: 'https://unihack2025.devpost.com/submissions/630128-eyevision',
    },
    {
      name: "First Timers' Prize",
      winner: 'Crevo',
      type: 'CATEGORY',
      devpostUrl: 'https://unihack2025.devpost.com/submissions/630132-crevo',
    },
    {
      name: 'Most Entertaining Pitch',
      winner: 'Eepy',
      type: 'CATEGORY',
      devpostUrl: 'https://unihack2025.devpost.com/submissions/631180-eepy',
    },
    {
      name: "People's Choice Award",
      winner: 'ShelfAware',
      type: 'CATEGORY',
      devpostUrl: 'https://unihack2025.devpost.com/submissions/630411-shelfaware',
    },
  ],
}
