# Boyce Consulting Website - Project Information

## Development Server

The development server should always be running during development:

```bash
npm run dev
```

- **URL**: http://localhost:3000
- **Auto-reload**: The browser will automatically refresh when you make changes to the code
- Always check this URL in your development browser to see changes

## Project Structure

```
boyce-consulting/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx      # Sticky navigation with smooth scroll
│   │   ├── Hero.tsx            # Hero section with gradient background
│   │   ├── Services.tsx        # Digital & Voter Contact services grid
│   │   ├── WhyChooseUs.tsx     # Feature grid section
│   │   ├── CallToAction.tsx    # CTA section
│   │   ├── Contact.tsx         # Contact form and info
│   │   └── Footer.tsx          # Footer with links
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Main page component
│   └── globals.css             # Global styles with Tailwind
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
├── next.config.ts              # Next.js configuration
└── package.json                # Dependencies and scripts

## Available Scripts

- `npm run dev` - Start development server (port 3000)
- `npm run build` - Build for production
- `npm start` - Run production build
- `npm run lint` - Run ESLint

## Key Features

- **One-page design** with smooth scroll navigation
- **Blue & white color scheme** (professional political consulting theme)
- **Responsive design** (mobile-first approach)
- **Sections**:
  - Hero with "We Win Campaigns" headline
  - Services (Digital + Voter Contact)
  - Why Choose Us (6 feature cards)
  - Call to Action
  - Contact form with info
  - Footer
- **JustCanvass partnership** highlighted in hero and footer
- **Contact info**:
  - Email: hello@boyce-consulting.ca
  - Phone: (780) 965-1195
  - Location: Canada

## Design Inspired By

Clear Impact Strategy (https://clearimpactstrategy.com/)
- Professional blue/white color palette
- Results-focused messaging
- Clean, minimal design with clear sections
- "We win elections" confidence-driven approach

## Technologies

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Smooth scroll** and animations
