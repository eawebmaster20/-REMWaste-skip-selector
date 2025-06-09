# Remwaste Skip Selector

A modern skip selector web application built with [Next.js](https://nextjs.org), [React](https://react.dev), and [Tailwind CSS](https://tailwindcss.com/).

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [License](#license)

---

## Overview

This project is a take-home assignment for Remwaste. It allows users to select skip sizes and view related information, using a clean and responsive UI.

---

## Features

- Skip size selection with images and details
- Responsive design
- Modern UI components
- API integration (see `.env` for endpoints)
- Built with best practices for scalability and maintainability

---

## Tech Stack

- **Framework:** Next.js 15, React 19
- **Styling:** Tailwind CSS 4
- **UI:** Radix UI, Lucide Icons
- **State Management:** React Query
- **Forms:** React Hook Form
- **Type Checking:** TypeScript

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/remwaste-skip-selector.git
cd remwaste-skip-selector
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Set up environment variables

Create a `.env` file in the root directory with the following content:

```env
NEXT_PUBLIC_API_URL=https://app.wewantwaste.co.uk/api
NEXT_PUBLIC_IMAGE_URL=https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes
```

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
remwaste-skip-selector/
├── src/
│   ├── app/           # Next.js app directory (routes, layout, globals)
│   ├── components/    # Reusable UI components
│   ├── lib/           # Utilities and helpers
│   ├── hooks/         # Custom React hooks
│   └── styles/        # Global and component styles
├── public/            # Static assets
├── .env               # Environment variables
├── next.config.ts     # Next.js configuration
├── tailwind.config.js # Tailwind CSS configuration
└── ...
```

---

## Scripts

- `dev` – Start the development server
- `build` – Build for production
- `start` – Start the production server
- `lint` – Run ESLint

Example:

```bash
npm run build
npm start
```

---

## License

This project is for assessment purposes only and is not licensed for production use.

---
