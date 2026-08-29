Purpose

This file gives Copilot-style assistants focused, repository-specific instructions so they can work effectively in unihackhq/unihack.net.

Quick commands

- Install: yarn install (Yarn v4 PnP; Node 22.x)
- Dev server: yarn dev (Next.js dev on http://localhost:3000)
- Production build: yarn build && yarn start
- Lint: yarn lint (uses biome)
- Format: yarn format (biome format --write .)
- Get environment vars (Vercel): vercel env pull (vercel CLI required)

Tests

- No test runner is configured in package.json. There are no "test" scripts at present.
- If tests are added, common choices and single-test invocations:
  - Vitest: yarn vitest path/to/file.spec.ts or yarn vitest -t "test name"
  - Jest: yarn test -- path/to/file.test.ts -t "test name"

High-level architecture

- Framework: Next.js (app uses Next 16, TypeScript, React 19)
- Styling: SASS + Tailwind utilities. Global SASS variables live under src/styles.
- Content-driven pages: content/ contains JSON/MDX blobs (event info, bios) consumed by page/section components.
- Composition pattern: pages import lightweight sections (sections/) which assemble primitives from components/ using data from content/.
- MDX: MDX and @next/mdx are present—pages may render MDX content via the MDX loader.
- Static assets: public/ for images/etc; components should prefer Next's <Image /> where possible.

Key repository conventions

- Use next/image instead of <img> for responsive images; README references this requirement.
- Linting & formatting: Biome ("biome") is the single source for lint/format commands (see package.json scripts). Do not run ESLint/Prettier separately unless a PR adds them.
- Node & package manager: package.json specifies Node 22.x and yarn@4.9.2 (Yarn PnP). Use the repo's Yarn version to avoid PnP surprises.
- Import alias: package.json defines an imports map for styles: "#styles/*.css" -> "./src/styles/*.css" — follow this mapping when referencing style files.
- Environment: Vercel-managed env vars are used in CI/deploy; use vercel env pull during local development when needed.
- No test infra: expect CI to currently not run unit tests; adding tests should include a test script in package.json.

CSS Modules & Tailwind convention

- Location & filename: CSS Modules must live adjacent to the component or page that uses them. File name MUST be styles.module.css (exact name).

- How Tailwind is included: Import the shared Tailwind entry from the repo using the imports alias at the top of the CSS Module:

Example: src/components/Hero/styles.module.css

```css
@import "#styles/core.css"; /* pulls in Tailwind base/utilities via the repo alias */

.container {
  /* use Tailwind utilities via @apply so styles are applied through the CSS module */
  @apply flex flex-col items-center justify-center;
  padding: 1rem;
}

.title {
  @apply text-3xl font-bold;
}
```

Example usage in JSX (components/Hero.tsx):

```tsx
import styles from './styles.module.css';

export default function Hero() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Welcome to UniHack</h1>
    </section>
  );
}
```

- Forbidden pattern (do not use):

```tsx
// Bad - do not inject Tailwind classes directly in JSX
export default function BadExample() {
  return <div className="flex items-center justify-center">Hello</div>;
}
```

- Rationale for agents: Always prefer adding or modifying classes inside styles.module.css and using className={styles.foo} in components. This keeps Tailwind utilities centralized in CSS Modules and avoids dynamic classname injection across the codebase.



Relevant files to inspect

- package.json (scripts, dependencies, biome config)
- README.md (local dev notes, env pull, folder structure)
- content/, sections/, components/, pages/ — canonical locations for app data and composition

AI assistant notes

- Prefer using biome (yarn lint / yarn format) when suggesting fixes or autoformatting.
- When recommending test tooling, propose adding a test script to package.json so run instructions are consistent.
- Avoid changing Node or packageManager versions without project owner approval.

Created by: Copilot CLI helper

