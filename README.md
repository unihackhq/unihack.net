# UNIHACK Site - unihack.net

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-10-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

This is the source code that powers the [unihack.net](unihack.net) website. This
website is running on the [Next.js][next.js] framework, using both [TypeScript][typescript] and [SASS][sass].

## Getting Started

### Requirements

You will need:

- Node 10.x or above

### Installing

You should be able to install all the dependencies by running the following
command:

```
npm install
```

### Running Locally

You can run this locally in development mode by running the following command:

```
npm run dev
```

Development mode includes hot-code reloading, error reporting and other
functionality from Next.js. You can read more [here](https://nextjs.org/docs/api-reference/cli#development)

To view the website, visit `http://localhost:3000`.

You can also run it locally in "production mode" - which allows you to see what
the site looks like when deployed _before_ you merge. You can do this by:

```
npm run build
npm start
```

You can read more about production mode [here](https://nextjs.org/docs/api-reference/cli#production)

### Linting

We use `tslint` to ensure code consistency, readability, and maintainability. You
can run this through:

```
npm run lint
```

### Folder Structure

- `components`: Primitive React components used on our website
- `content`: Content and JSON blobs (e.g. judge biographies, event information)
- `layouts`: Core layouts
- `pages`: Next.js pages
- `public`: Next.js location to serve static files (e.g. images, robots.txt)
- `sections`: Page sections - takes in content and components
- `styles`: Global styles and SASS stylesheet variables

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/anthonycr0"><img src="https://avatars.githubusercontent.com/u/19167953?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Anthony Roberts</b></sub></a><br /><a href="https://github.com/unihackhq/unihack.net/commits?author=anthonycr0" title="Code">💻</a> <a href="#design-anthonycr0" title="Design">🎨</a> <a href="#data-anthonycr0" title="Data">🔣</a></td>
    <td align="center"><a href="http://terencehuynh.com/"><img src="https://avatars.githubusercontent.com/u/1747517?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Terence Huynh</b></sub></a><br /><a href="https://github.com/unihackhq/unihack.net/commits?author=terencehuynh" title="Code">💻</a> <a href="#design-terencehuynh" title="Design">🎨</a> <a href="#data-terencehuynh" title="Data">🔣</a></td>
    <td align="center"><a href="https://joshparnham.com/"><img src="https://avatars.githubusercontent.com/u/712727?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Josh Parnham</b></sub></a><br /><a href="https://github.com/unihackhq/unihack.net/commits?author=josh-" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/sameersyedhd"><img src="https://avatars.githubusercontent.com/u/39996545?v=4?s=100" width="100px;" alt=""/><br /><sub><b>sameersyedhd</b></sub></a><br /><a href="https://github.com/unihackhq/unihack.net/commits?author=sameersyedhd" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/erfanio"><img src="https://avatars.githubusercontent.com/u/9994172?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Erfan</b></sub></a><br /><a href="https://github.com/unihackhq/unihack.net/commits?author=erfanio" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/GhinaY"><img src="https://avatars.githubusercontent.com/u/22129589?v=4?s=100" width="100px;" alt=""/><br /><sub><b>GhinaY</b></sub></a><br /><a href="https://github.com/unihackhq/unihack.net/commits?author=GhinaY" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/dsykesturner"><img src="https://avatars.githubusercontent.com/u/6570722?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Daniel Sykes-Turner</b></sub></a><br /><a href="https://github.com/unihackhq/unihack.net/commits?author=dsykesturner" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/hugomd"><img src="https://avatars.githubusercontent.com/u/1646536?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Hugo</b></sub></a><br /><a href="https://github.com/unihackhq/unihack.net/commits?author=hugomd" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/sph-huynh"><img src="https://avatars.githubusercontent.com/u/13181562?v=4?s=100" width="100px;" alt=""/><br /><sub><b>sph-huynh</b></sub></a><br /><a href="https://github.com/unihackhq/unihack.net/commits?author=sph-huynh" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/nick-ang"><img src="https://avatars.githubusercontent.com/u/87055485?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nick Ang</b></sub></a><br /><a href="https://github.com/unihackhq/unihack.net/commits?author=nick-ang" title="Code">💻</a></td>
    <td align="center"><a href="https://auspham.dev/"><img src="https://avatars.githubusercontent.com/u/16440123?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Austin (Thang Pham)</b></sub></a><br /><a href="https://github.com/unihackhq/unihack.net/commits?author=rockmanvnx6" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## Third Party Libraries

Our emojis come from Twitter's [Twemoji][twemoji] library. \n
Copyright 2020 Twitter, Inc and other contributors. \n
Code licensed under the MIT License: http://opensource.org/licenses/MIT \n
Graphics licensed under CC-BY 4.0: https://creativecommons.org/licenses/by/4.0/

[next.js]: https://nextjs.org/docs/
[typescript]: https://www.typescriptlang.org/
[sass]: https://sass-lang.com/
[twemoji]: https://twemoji.twitter.com/
