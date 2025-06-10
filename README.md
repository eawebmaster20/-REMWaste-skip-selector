# WeWantWaste Skip Size Selection - Redesigned

A modern, responsive redesign of the WeWantWaste skip size selection page, built with Next.js and React. This project demonstrates a complete UI/UX overhaul while maintaining all original functionality.

---

## 🎯 Project Overview

This is a take-home assignment that involved redesigning the "Choose Your Skip Size" page from [WeWantWaste](https://wewantwaste.co.uk/). The original page can be accessed by:

1. Going to https://wewantwaste.co.uk/
2. Entering postcode **LE10 1SH**
3. Selecting an address
4. Choosing **garden waste**

---

## 🚀 Live Demo

[Live Application](your-deployed-url-here) <!-- Replace with your actual deployment URL -->

---

## 📋 Assignment Requirements Met

- ✅ Complete page redesign with fresh, modern UI
- ✅ Maintained all original functionality
- ✅ Fully responsive design (mobile and desktop)
- ✅ Clean, maintainable React code
- ✅ Integration with WeWantWaste API
- ✅ Improved user experience and accessibility

---

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (REACT)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI, Lucide Icons, custom components
- **API Integration:** WeWantWaste API for skip data
- **State Management:** Tanstack React Query
- **Forms:** React Hook Form
- **Responsive Design:** Mobile-first approach

---

## 📱 Features

### Design Improvements

- **Modern UI:** Clean, contemporary design with improved visual hierarchy
- **Enhanced UX:** Intuitive skip selection with clear pricing and size information
- **Responsive Layout:** Seamlessly adapts from mobile to desktop
- **Accessibility:** WCAG compliant with proper focus management and screen reader support
- **Loading States:** Smooth loading indicators and skeleton screens
- **Error Handling:** User-friendly error messages and fallback states

### Technical Improvements

- **Performance Optimized:** Fast loading with optimized images and code splitting
- **SEO Ready:** Proper meta tags and structured data
- **Type Safety:** Full TypeScript implementation
- **Clean Architecture:** Modular components and clear separation of concerns

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/eawebmaster20/-REMWaste-skip-selector.git
   cd wewantwaste-redesign
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Create a `.env` file in the root directory:

   ```env
   NEXT_PUBLIC_API_URL=endpoint for data
   NEXT_PUBLIC_IMAGE_URL=endpoint for images
   ```

4. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

---

## 📊 API Integration

The application fetches skip data from the WeWantWaste API:

```
https://the enpoint in your environment
```

### Data Structure

The API returns skip options with the following information:

- Skip sizes and dimensions
- Pricing information
- Availability status
- Service area details

---

## 🎨 Design Approach

### Original vs. Redesigned

The redesign focuses on:

1. **Visual Hierarchy:** Clear distinction between skip options using cards and proper spacing
2. **Information Architecture:** Better organization of skip details, pricing, and selection options
3. **Mobile Experience:** Touch-friendly interface with optimized layouts for smaller screens
4. **Accessibility:** High contrast ratios, keyboard navigation, and screen reader compatibility
5. **Modern Aesthetics:** Contemporary color scheme, typography, and micro-interactions

### Key Design Decisions

- **Card-based Layout:** Each skip option presented as a distinct card for easy comparison
- **Progressive Disclosure:** Essential information upfront with expandable details
- **Visual Feedback:** Clear selected states and hover effects
- **Consistent Spacing:** Systematic use of spacing for better readability
- **Typography Hierarchy:** Clear headings and readable body text

---

## 📱 Responsive Design

The application provides optimal viewing experience across all devices:

- **Mobile (320px - 768px):** Single column layout with touch-optimized interactions
- **Tablet (768px - 1024px):** Two-column grid with enhanced spacing
- **Desktop (1024px+):** Multi-column layout with additional information display

---

## 📦 Build and Deployment

```bash
# Build for production
npm run build

# Start production server
npm run start
```

---

## 🔧 Development Workflow

### Code Quality

- ESLint and Prettier for code formatting
- TypeScript for type safety

### Performance Monitoring

- Core Web Vitals tracking
- Bundle size analysis
- Lighthouse audits

---

## 📝 Project Structure

```
├── app/                    # Next.js app directory
│   ├── (steps)/            # Step-based UI components
│   ├── components/         # Reusable UI components
│   ├── lib/                # Utility functions and API calls
│   ├── types/              # TypeScript type definitions
│   └── page.tsx            # Main skip selection page
├── public/                 # Static assets
├── styles/                 # Global styles and Tailwind config
└── ...
```

---

## 🤝 Contributing

This project was developed as part of a technical assessment. The code demonstrates:

- Modern React and Next.js development practices
- Responsive design implementation
- API integration patterns
- TypeScript usage
- Performance optimization techniques

---

## 📄 License

This project is developed for assessment purposes.

---

**Note:** This redesign maintains all original functionality while providing a significantly improved user experience through modern design principles and responsive implementation.
