import type { Event } from './types'

export const event: Event = {
  name: 'UNIHACK 2024',
  year: 2024,
  type: 'HYBRID',
  url: 'https://unihack2024.devpost.com/',
  location: 'Australia and New Zealand',
  startDate: new Date('2024-03-01'),
  endDate: new Date('2024-03-03'),
  prizes: [
    {
      name: 'First Place',
      winner: 'Sweet',
      type: 'MAIN',
      place: 'FIRST',
      devpostUrl: 'https://devpost.com/software/sweet-qlndop',
    },
    {
      name: 'Second Place',
      winner: "W.I.M.P (What's In My Pantry)",
      type: 'MAIN',
      place: 'SECOND',
      devpostUrl: 'https://devpost.com/software/konran-v2',
    },
    {
      name: 'Third Place',
      winner: 'Gerda',
      type: 'MAIN',
      place: 'THIRD',
      devpostUrl: 'https://devpost.com/software/gerda',
    },
    {
      name: 'Most Healthy Hack',
      winner: 'PillPal',
      type: 'SPONSOR',
      sponsor: 'Miga Health',
      devpostUrl: 'https://devpost.com/software/pillpal-vsjq87',
    },
    {
      name: 'Best Use of API',
      winner: 'PassClass',
      type: 'SPONSOR',
      sponsor: 'Redactive AI',
      devpostUrl: 'https://devpost.com/software/passclass',
    },
    {
      name: 'Most Creative Idea',
      winner: 'Sweet',
      type: 'CATEGORY',
      devpostUrl: 'https://devpost.com/software/sweet-qlndop',
    },
    {
      name: 'Best Design',
      winner: 'MyFridge',
      type: 'CATEGORY',
      devpostUrl: 'https://devpost.com/software/myfridge-slnhme',
    },
    {
      name: 'Social Impact Prize',
      winner: 'Voxurf',
      type: 'CATEGORY',
      devpostUrl: 'https://devpost.com/software/voxurf',
    },
    {
      name: "First Timers' Prize",
      winner: 'Journaly',
      type: 'CATEGORY',
      devpostUrl: 'https://devpost.com/software/journaly-2ml6q9',
    },
    {
      name: 'Most Entertaining Pitch',
      winner: 'Allodate+',
      type: 'CATEGORY',
      devpostUrl: 'https://devpost.com/software/allocate-plus',
    },
    {
      name: "People's Choice",
      winner: 'BiteBalance',
      type: 'CATEGORY',
      devpostUrl: 'https://devpost.com/software/bitebalance',
    },
  ],
}
