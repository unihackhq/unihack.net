import type { Event } from './types'

export const event: Event = {
  name: 'UNIHACK Sydney 2018',
  id: '2018-sydney',
  year: 2018,
  type: 'IN_PERSON',
  location: 'Coder Academy, Sydney',
  url: 'https://unihack2018syd.devpost.com/',
  startDate: new Date('2018-08-04'),
  endDate: new Date('2018-08-05'),
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
      winner: 'Surg.E.Lite',
      type: 'MAIN',
      place: 'FIRST',
      devpostUrl: 'https://devpost.com/software/surg-e-lite',
    },
    {
      name: 'Second Place',
      winner: 'Franklin Decides',
      type: 'MAIN',
      place: 'SECOND',
      devpostUrl: 'https://devpost.com/software/franklin-decides',
    },
    {
      name: 'Third Place',
      winner: 'StudySpace',
      type: 'MAIN',
      place: 'THIRD',
      devpostUrl: 'https://devpost.com/software/studyspace-kzvnem',
    },
    {
      name: 'Best University Project',
      winner: 'Finders and Keepers',
      type: 'SPONSOR',
      sponsor: 'Jetbrains',
      devpostUrl: 'https://devpost.com/software/finders-and-keepers',
    },
    {
      name: 'Best Data Correlation Prize',
      winner: 'Catch Me If You Can',
      type: 'SPONSOR',
      sponsor: 'Swipejobs',
      devpostUrl: 'https://devpost.com/software/catch-me-if-you-can-wtn3gp',
    },
    {
      name: 'Best User Interface',
      winner: 'Franklin Decides',
      type: 'CATEGORY',
      devpostUrl: 'https://devpost.com/software/franklin-decides',
    },
    {
      name: 'Best Algorithm',
      winner: 'NNKids',
      type: 'CATEGORY',
      devpostUrl: 'https://devpost.com/software/nnkids',
    },
    {
      name: 'Best Product Design',
      winner: 'Sleepworks',
      type: 'CATEGORY',
      devpostUrl: 'https://devpost.com/software/sleepworks',
    },
    {
      name: 'Best Emerging Tech Project',
      winner: 'StudySpace',
      type: 'CATEGORY',
      devpostUrl: 'https://devpost.com/software/studyspace-kzvnem',
    },
    {
      name: 'Best Interactive Work',
      winner: 'StudySpace',
      type: 'CATEGORY',
      devpostUrl: 'https://devpost.com/software/studyspace-kzvnem',
    },
  ],
}
