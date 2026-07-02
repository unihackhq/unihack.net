import type { Event } from './types'

export const event: Event = {
  name: 'UNIHACK 2015',
  type: 'IN_PERSON',
  year: 2015,
  location: 'Inspire9, Melbourne',
  url: 'https://unihack2015.devpost.com/',
  startDate: new Date('2015-08-15'),
  endDate: new Date('2015-08-16'),
  prizesNote: {
    type: 'INFO',
    text: ['Some Devpost submissions are incomplete or missing. Some teams may have taken down their submissions.','Between 2015-2019, Devpost was only used to record projects submitted. All judging was done in-person on the final day of the hackathon. As a result, quality of Devpost submissions may vary.']
  },
  prizes: [
    {
      name: 'First Place',
      winner: 'Destroy My Idea',
      type: 'MAIN',
      place: 'FIRST',
      devpostUrl: 'https://devpost.com/software/destroy-my-idea',
    },
    {
      name: 'Second Place',
      winner: 'Fite Me',
      type: 'MAIN',
      place: 'SECOND',
      devpostUrl: 'https://devpost.com/software/fite-me',
    },
    {
      name: 'Third Place',
      winner: 'Flyte',
      type: 'MAIN',
      place: 'THIRD',
      devpostUrl: 'https://devpost.com/software/flyte',
    },
    {
      name: 'Making Things Happen Award',
      winner: 'Codebreaker',
      type: 'SPONSOR',
      sponsor: 'IMC',
      devpostUrl: 'https://devpost.com/software/codebreaker',
    },
    {
      name: "People's Choice",
      winner: 'Delivar',
      type: 'SPONSOR',
      sponsor: 'Freelancer',
      devpostUrl: 'https://devpost.com/software/delivar-peer-to-peet-delivery',
    },
    {
      name: 'Best Use of PayPal/Braintree API',
      winner: 'Delivar',
      type: 'SPONSOR',
      sponsor: 'PayPal',
      devpostUrl: 'https://devpost.com/software/delivar-peer-to-peet-delivery',
    },
    {
      name: 'Least Hacky Hack',
      winner: 'Chefup',
      type: 'SPONSOR',
      sponsor: 'Commonwealth Bank',
      devpostUrl: 'https://devpost.com/software/chefup',
    },
    {
      name: 'Best Mobile Hack',
      winner: 'Fridgebook',
      type: 'SPONSOR',
      sponsor: 'Outware Mobile',
      devpostUrl: 'https://devpost.com/software/fridgebook',
    },
    {
      name: 'Best Design',
      winner: 'Fite Me',
      type: 'CATEGORY',
      devpostUrl: 'https://devpost.com/software/fite-me',
    },
    {
      name: 'Most Creative Idea',
      winner: 'Codebreaker',
      type: 'CATEGORY',
      devpostUrl: 'https://devpost.com/software/codebreaker',
    },
    {
      name: 'Best First Year Hack',
      winner: 'ThisApp',
      type: 'CATEGORY',
      devpostUrl: 'https://devpost.com/software/unihack-57g0fa',
    },
  ],
}
