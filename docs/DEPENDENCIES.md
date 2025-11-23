# 📦 Dependencies & Environment Reference

## ⚠️ DO NOT UPDATE UNLESS ABSOLUTELY NECESSARY

This project uses specific versions that are tested and working. Updating dependencies can break the build.

---

## 🔒 Locked Versions (DO NOT CHANGE)

### Core Framework
- **Next.js:** `16.0.0` (exact version, no caret)
- **React:** `19.2.0` (exact version, no caret)
- **React DOM:** `19.2.0` (exact version, no caret)
- **Node.js:** `20.x` (enforced by engines field)
- **pnpm:** `10.18.2` (exact version, enforced by packageManager field)

### Why These Versions?
- Next.js 16.0.0 is the latest stable with Turbopack
- React 19.2.0 is the latest stable
- Node 20.x is required by Next.js 16
- pnpm 10.18.2 is the latest stable package manager

---

## 📚 Key Dependencies

### UI Components
```json
"@radix-ui/react-accordion": "^1.2.1",
"@radix-ui/react-dialog": "^1.1.15",
"@radix-ui/react-navigation-menu": "^1.2.1",
"@radix-ui/react-popover": "^1.1.2",
"@radix-ui/react-select": "^2.1.2",
"@radix-ui/react-tooltip": "^1.1.3",
"@tabler/icons-react": "3.21.0",
"lucide-react": "^0.40.0"
```
**Purpose:** Accessible UI components for navigation, menus, tooltips, and icons.  
**Update Policy:** Only update if security vulnerability or critical bug.

### Styling
```json
"tailwindcss": "^4.0.17",
"@tailwindcss/postcss": "^4.0.17",
"@tailwindcss/typography": "^0.5.19",
"tailwindcss-radix": "^4.0.2",
"sass": "^1.83.0"
```
**Purpose:** Tailwind CSS v4 with PostCSS and typography plugin.  
**Update Policy:** DO NOT update Tailwind v4 until stable release.

### CMS & Content
```json
"@sanity/client": "^7.13.0",
"groq": "^4.18.0"
```
**Purpose:** Sanity CMS integration for changelog and future marketing content.  
**Update Policy:** Only update if Sanity client or GROQ APIs require it.  
**Required Env Vars:** `SANITY_PROJECT_ID`, `SANITY_DATASET`, `SANITY_API_VERSION`, optional `SANITY_API_TOKEN` for draft content.

### Image Processing
```json
"sharp": "^0.34.5"
```
**Purpose:** Image optimization during build.  
**Update Policy:** Only update if build fails due to sharp issues.

### Carousel
```json
"embla-carousel": "^8.0.4",
"embla-carousel-react": "^8.0.4",
"embla-carousel-wheel-gestures": "^8.0.1"
```
**Purpose:** Hero slideshow on homepage.  
**Update Policy:** Only update if carousel bugs occur.

---

## 🌍 Environment Variables

### Required for Production Build
```bash
NEXT_PUBLIC_SITE_URL=https://www.bespokeethos.com
SANITY_PROJECT_ID=3zm8j5u6
SANITY_DATASET=production
SANITY_API_VERSION=2025-02-01
OPENAI_API_KEY=sk-...
PINECONE_API_KEY=...
PINECONE_INDEX_NAME=...
PINECONE_PROJECT_NAME=...
PINECONE_HOST=https://...pinecone.io
EMBEDDING_MODEL=text-embedding-3-small
RESEND_API_KEY=...
CONTACT_ENABLE_EMAIL="true"
CONTACT_EMAIL_FROM="onboarding@bespokeethos.com"
CONTACT_EMAIL_TO="hello@bespokeethos.com"
CONTACT_EMAIL_SUBJECT="New Contact Form Submission from Bespoke Ethos Website"
```
**Purpose:** Site URL for metadata plus Sanity, OpenAI, and Pinecone configuration for changelog + internal search.  
**Location:** Set in Vercel dashboard for Production, Preview, Development.

### Local Development Only
```bash
SKIP_REMOTE_DATA=1
```
**Purpose:** Skip remote Sanity/Pinecone calls in local development (renders fallbacks instead).  
**Usage:** Set in `.env.local` when you want purely local/static behavior.

---

## 🛠️ Build Tools

### Package Manager
- **pnpm 10.18.2** (enforced by `packageManager` field)
- Uses `pnpm-lock.yaml` for deterministic installs
- **DO NOT use npm or yarn** - will cause dependency conflicts

### TypeScript
```json
"typescript": "^5.4.5"
```
**Purpose:** Type checking and compilation.  
**Config:** `tsconfig.json`

### Linting
```json
"eslint": "^9.14.0",
"eslint-config-next": "16.0.0"
```
**Purpose:** Code quality and consistency.  
**Config:** `eslint.config.mjs`

### Formatting
```json
"prettier": "^3.2.5",
"prettier-plugin-tailwindcss": "^0.6.11"
```
**Purpose:** Code formatting with Tailwind class sorting.  
**Config:** `.prettierrc` (if exists)