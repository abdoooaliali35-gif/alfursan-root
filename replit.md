# Al Fursan Quadruple Factory - Jordanian Jameed Manufacturing Website

## Overview

This is a React-based website for Al Fursan Quadruple, a Jordanian company specializing in traditional Jameed (dried yogurt) production. The site showcases their products, company information, certifications, and provides contact/quote request functionality. Built as a professional corporate website with Arabic language support and right-to-left (RTL) layout design.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: React Router DOM for single-page application navigation
- **UI Framework**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom Arabic typography (Tajawal, Cairo fonts)
- **State Management**: React hooks and context for component state
- **Data Fetching**: TanStack Query for server state management

### Design System
- **Theme System**: CSS custom properties (HSL color format) for consistent theming
- **Brand Colors**: Exact HSL values for Al Fursan blue (#00529d), Jameed red/burgundy, and Badawya cream/gold
- **Component Library**: Comprehensive UI components (cards, buttons, forms, modals, etc.)
- **Typography**: Arabic-first design with Tajawal as primary font
- **Layout**: RTL (right-to-left) support throughout the application
- **Responsive Design**: Mobile-first approach with custom breakpoint system

### Page Structure
- **Landing Page**: Hero section, about us, product showcase, certifications, contact form
- **Product Pages**: Detailed product information for Jameedna Zaman and Jameed Badawya
- **Company Pages**: About us, certificates/quality, blog, contact
- **Interactive Features**: Quote request system, contact forms, image processing

### Form Handling
- **React Hook Form**: Form validation and state management with resolvers
- **Multi-step Forms**: Progressive quote request system with validation
- **Toast Notifications**: User feedback system using shadcn/ui toast components

### Image Processing
- **Background Removal**: Hugging Face Transformers.js integration for AI-powered image processing
- **Optimization**: Responsive images with proper loading and decoding attributes

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React 18, React DOM, React Router DOM for SPA functionality
- **UI Components**: Radix UI primitives for accessible, unstyled components
- **Styling**: Tailwind CSS with PostCSS for utility-first CSS
- **Icons**: Lucide React for consistent iconography
- **Animations**: CSS animations and transitions, Embla Carousel for interactive elements

### Development Tools
- **TypeScript**: Type checking and IDE support with relaxed configuration
- **Vite**: Fast development server and build tool
- **ESLint**: Code linting with React-specific rules
- **Lovable Tagger**: Development-time component tagging (development mode only)

### AI/ML Integration
- **Hugging Face Transformers**: Browser-based AI models for image processing
- **Model**: Segformer for image segmentation and background removal

### Form & Validation
- **React Hook Form**: Form state management and validation
- **Hookform Resolvers**: Integration with validation libraries
- **Input OTP**: One-time password input components

### Utility Libraries
- **Class Variance Authority**: Type-safe CSS class variants
- **clsx & tailwind-merge**: Conditional CSS class management
- **date-fns**: Date manipulation and formatting
- **cmdk**: Command menu implementation

### Production Considerations
- **SEO Optimization**: Comprehensive meta tags, Open Graph, and structured data
- **Performance**: Code splitting, lazy loading, and optimized bundle sizes
- **Accessibility**: ARIA compliance through Radix UI components
- **Browser Support**: Modern browser targeting with fallbacks