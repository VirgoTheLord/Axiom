# Pulse - Token Dashboard

A modern, responsive cryptocurrency token monitoring dashboard built with Next.js 15 and React 19. Track new token pairs, monitor tokens in their final stretch, and view migrated tokens across different market stages.

## ✨ Features

- **Multi-Category Token Tracking**: Monitor tokens across three categories:

  - 🆕 **New Pairs**: Recently launched tokens
  - 🎯 **Final Stretch**: Tokens approaching key milestones
  - ✅ **Migrated**: Successfully migrated tokens

- **Responsive Design**:

  - Desktop: Three-column layout with full token tables
  - Tablet: Optimized two-column view
  - Mobile: Single-column card-based interface

- **Real-time Data**: Track key metrics including:

  - Market cap and volume
  - User count and transaction history
  - Age and performance indicators
  - Shield status and security metrics

- **Interactive UI**: Built with Radix UI components for accessibility and user experience

## 🚀 Tech Stack

- **Framework**: Next.js 15 with Turbopack
- **Runtime**: React 19
- **Styling**: Tailwind CSS 4
- **UI Library**: shadcn/ui components
- **UI Primitives**: Radix UI
- **Icons**: Lucide React
- **Language**: TypeScript 5

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd axiom
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint for code quality

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main dashboard page
├── components/            # React components
│   ├── ui/               # UI primitives
│   └── [components]      # Feature components
└── lib/                  # Utilities and data
    ├── data.ts           # Token data
    ├── types.ts          # TypeScript types
    └── utils.ts          # Utility functions
```

## 🎨 Component Architecture

- **TokenTable**: Desktop table view with sorting and filtering
- **MobileTokenView**: Mobile-optimized card layout
- **TabletTokenView**: Tablet-specific responsive design
- **PulseHeader**: Application header with branding
- **UI Components**: Built with shadcn/ui components and Radix UI primitives

## 🚀 Deployment

### Vercel (Recommended)

Deploy instantly to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<your-repo-url>)

### Manual Deployment

1. Build the application: `npm run build`
2. Start the production server: `npm start`

### Images

![Main](https://raw.githubusercontent.com/VirgoTheLord/CDN/main/uploads/Screenshot%202025-09-28%20184517.png, "Optional title")
![Tablet](https://raw.githubusercontent.com/VirgoTheLord/CDN/main/uploads/Screenshot%202025-09-28%20184532.png, "Optional title")
![Mobile](https://raw.githubusercontent.com/VirgoTheLord/CDN/main/uploads/Screenshot%202025-09-28%20184559.png, "Optional title")
