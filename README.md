# Adverze - Digital Marketing Agency Website

A modern, fully responsive Next.js website for Adverze, a digital marketing agency based in Namakkal, Tamil Nadu. Built with Next.js 16, React 19, and Tailwind CSS v4.

## 🚀 Features

- **Fully Responsive Design** - Optimized for mobile, tablet, and desktop devices
- **Modern UI/UX** - Clean layouts with smooth transitions and animations
- **Performance Optimized** - Built with Next.js for lightning-fast page loads
- **SEO Ready** - Comprehensive metadata and semantic HTML structure
- **Dark Mode Support** - Automatic dark/light theme based on system preferences
- **Accessible** - WCAG compliant with proper ARIA labels and keyboard navigation

## 📄 Pages

### 1. Home Page (`/`)
- Hero section with compelling value proposition
- "What We Do" service overview with icons
- "Why Choose Adverze?" section highlighting unique selling points
- Client showcase featuring ADD Nirmala Logistics, Balamurugan, and Lakshmi Doors and Lights
- Strong call-to-action for free digital audit

### 2. About Page (`/about`)
- Company mission and story
- Core values: Clarity over complexity, Strategy before execution, Results that matter
- Team section with role descriptions
- Contact CTA

### 3. Services Page (`/services`)
- Detailed service descriptions:
  - **SEO & Content Strategy** - Keyword research, technical SEO, content optimization
  - **Paid Ads (Google & Meta)** - Campaign management and optimization
  - **Social Media Marketing** - Content creation and community engagement
  - **Content Strategy & Branding** - Brand identity and thought leadership
  - **Web Design & Development** - Custom, performance-focused websites
- Each service includes feature lists and CTAs

### 4. Blog Page (`/blog`)
- Featured article highlight
- Blog post grid with categories
- Newsletter subscription form
- Recent posts:
  - "How to Build a Funnel That Doesn't Leak"
  - "Google Ads in 2025: What You're Doing Wrong"
  - "Why Your Website Is Pretty But Useless"
  - "The Real SEO Checklist We Actually Use"

## 🛠️ Technology Stack

- **Framework**: Next.js 16.0.3 with App Router
- **React**: 19.2.0
- **Styling**: Tailwind CSS v4
- **TypeScript**: 5.x
- **Font**: Geist Sans & Geist Mono (Google Fonts)
- **Icons**: Custom SVG icons throughout

## 🎨 Design System

### Colors
- **Primary**: Purple (#8B5CF6) - Represents creativity and innovation
- **Secondary**: Emerald (#10B981) - Represents growth and success
- **Accent**: Amber (#F59E0B) - Represents energy and attention

### Typography
- **Headings**: Bold, modern typeface with gradient effects
- **Body**: Clean, readable font with proper line height
- **CTAs**: Prominent, action-oriented buttons

### Components
- `Navbar` - Fixed navigation with active link highlighting and mobile menu
- `Footer` - Comprehensive footer with contact info and social links
- `Button` - Reusable button component with multiple variants
- `ServiceCard` - Card component for displaying services

## 🚦 Getting Started

### Prerequisites
- Node.js 20.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd adverze-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
adverze-website/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── blog/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Button.tsx
│       ├── Footer.tsx
│       ├── Navbar.tsx
│       └── ServiceCard.tsx
├── public/
├── package.json
├── next.config.ts
├── tsconfig.json
└── README.md
```

## 🎯 Key Features Implementation

### Animations
- Fade-in animations on page load
- Hover effects on cards and buttons
- Smooth scroll behavior
- Animated blob backgrounds on hero section

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Collapsible mobile navigation
- Fluid typography and spacing

### SEO Optimization
- Semantic HTML structure
- Meta tags and Open Graph data
- Descriptive alt texts for images
- Proper heading hierarchy
- Fast page load times

## 📞 Contact Information

- **Location**: Namakkal, Tamil Nadu, India
- **Email**: hello@adverze.com
- **Phone**: +91 98765 43210

## 🌐 Social Media

- Facebook
- Instagram
- LinkedIn
- Twitter

## 📝 Content Strategy

The website content is crafted to:
- Communicate Adverze's unique value proposition
- Address client pain points directly
- Use clear, jargon-free language
- Include strong calls-to-action
- Build trust through transparency

## 🔧 Customization

### Updating Colors
Edit `/src/app/globals.css` to modify the color palette:
```css
:root {
  --primary: #8B5CF6;
  --secondary: #10B981;
  --accent: #F59E0B;
}
```

### Adding New Pages
Create a new folder in `/src/app/` with a `page.tsx` file.

### Modifying Navigation
Update the `navLinks` array in `/src/components/Navbar.tsx`.

## 📈 Performance

- Optimized images with Next.js Image component
- Code splitting and lazy loading
- Minimal JavaScript bundle size
- Fast Time to Interactive (TTI)

## 🔒 Security

- No sensitive data in client-side code
- Environment variables for API keys
- HTTPS ready
- XSS protection

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

This is a client project for Adverze. For any modifications or updates, please contact the development team.

## 📄 License

© 2025 Adverze. All rights reserved.

---

Built with ❤️ by the Adverze team in Namakkal, Tamil Nadu

