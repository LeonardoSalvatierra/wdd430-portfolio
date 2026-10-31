# Leonardo Salvatierra — WDD 430 Portfolio

A personal portfolio created for the W01 “My First Next.js Application” assignment in WDD 430 at BYU-Idaho.

The application demonstrates App Router routing, Server Components, component composition, TypeScript props, Tailwind CSS styling, and a simple API Route Handler.

## Live Application

https://wdd430-portfolio-weld-omega.vercel.app/

## GitHub Repository

https://github.com/LeonardoSalvatierra/wdd430-portfolio

## Author

Leonardo Salvatierra

## Technologies

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- ESLint
- Vercel

## Pages and Features

- **Home (`/`):** Displays two real projects with descriptions, technologies, and links to live demos.
- **About (`/about`):** Presents my background and technical skills.
- **API (`/api/hello`):** Returns a JSON greeting.
- Shared navigation and footer.
- Responsive project and skill card layouts.
- Keyboard focus indicators and a skip-to-content link.

## Featured Projects

### Pocket Team Lab

A Pokémon explorer and team builder with search, comparisons, saved teams, and favorites.

Technologies: HTML, CSS, JavaScript, Vite, PokéAPI, and localStorage.

Live demo: https://leonardosalvatierra.github.io/pocket-team-lab/

### Fiama's XV Invitation

A mobile-first digital birthday invitation with a countdown, photo gallery, background music, event location, and RSVP through WhatsApp.

Technologies: HTML, CSS, and JavaScript.

Live demo: https://fiama-medina-xv.onrender.com/

## Project Structure

```text
app/
├── about/
│   └── page.tsx
├── api/
│   └── hello/
│       └── route.ts
├── favicon.ico
├── globals.css
├── layout.tsx
└── page.tsx

components/
├── Header.tsx
├── ProjectCard.tsx
├── ProjectList.tsx
├── Footer.tsx
└── SkillCard.tsx

public/
```

## Components

- **Header:** Displays the author name and Home/About navigation using Next.js Link.
- **ProjectCard:** Displays typed project information and conditionally renders an external link.
- **ProjectList:** Renders project cards using stable project IDs as keys.
- **Footer:** Displays copyright information with a calculated year cached on the server.
- **SkillCard:** Displays a technical skill and its description.

All five components are Server Components.

## Custom Component

**Filename:** `components/SkillCard.tsx`

This component displays a technical skill and its description using a TypeScript props interface and Tailwind CSS. It is reused on the About page.

## Run Locally

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Code Checks

Run ESLint:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

After building, start the production server:

```bash
npm run start
```

## API

### GET /api/hello

Returns:

```json
{
  "message": "Hello from Next.js API!"
}
```

Live endpoint: https://wdd430-portfolio-weld-omega.vercel.app/api/hello

## Deployment

The application is deployed on Vercel from the GitHub repository.

The Vercel project uses the Next.js preset and the repository root (`./`) as its Root Directory. No environment variables are required for this version.