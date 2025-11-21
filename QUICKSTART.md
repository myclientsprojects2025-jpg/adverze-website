# Adverze Website - Quick Reference Guide

## 🎨 Website Overview

Your new website is a modern, fully responsive digital marketing agency website built with the latest web technologies. It's designed to attract and convert visitors into leads.

## 📱 Pages You Have

1. **Home** (`/`) - Your main landing page with hero, services overview, and client showcase
2. **About** (`/about`) - Your story, values, and team
3. **Services** (`/services`) - Detailed breakdown of all your service offerings
4. **Blog** (`/blog`) - Content marketing hub with featured articles

## 🔗 Important Links & Information

### Contact Details (Update These!)
- **Email**: hello@adverze.com
- **Phone**: +91 98765 43210
- **Location**: Namakkal, Tamil Nadu, India

### Where to Update Contact Info:
- Footer: `/src/components/Footer.tsx`
- Individual page CTAs: Each page file in `/src/app/`

## ✏️ How to Make Common Updates

### Update Company Name or Logo
Edit: `/src/components/Navbar.tsx` (line ~30)

### Change Color Scheme
Edit: `/src/app/globals.css` (lines 4-8)
```css
--primary: #8B5CF6;  /* Purple - your main brand color */
--secondary: #10B981; /* Green - success/growth color */
--accent: #F59E0B;   /* Amber - attention color */
```

### Update Social Media Links
Edit: `/src/components/Footer.tsx` (lines ~40-80)
Replace the `href` attributes with your actual social media URLs.

### Add More Blog Posts
Edit: `/src/app/blog/page.tsx` (lines ~11-39)
Add new entries to the `blogPosts` array.

### Update Client Names
Edit: `/src/app/page.tsx` (lines ~170-190)
Modify the client showcase section.

## 🎯 Call-to-Action Buttons

All CTA buttons currently link to:
- Email: `mailto:hello@adverze.com`
- Phone: `tel:+919876543210`
- Contact section: `#contact`

Update these in each page file where they appear.

## 📊 Performance Features

✅ Mobile-first responsive design
✅ Fast page load times
✅ SEO optimized
✅ Dark mode support
✅ Smooth animations
✅ Accessible design

## 🚀 Running the Website

### Development (Testing)
```bash
npm run dev
```
Opens at: http://localhost:3000

### Production (Go Live)
```bash
npm run build
npm start
```

## 🌐 Deploying to Production

### Option 1: Vercel (Recommended - Free)
1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"
5. Done! Your site is live.

### Option 2: Netlify
1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Connect your repository
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Deploy!

## 📝 Content Tips

### Writing Blog Posts
- Keep titles clear and benefit-focused
- Use bullet points for easy scanning
- Include actionable takeaways
- Add a strong CTA at the end

### Service Descriptions
- Focus on benefits, not just features
- Use client language, not jargon
- Include social proof when possible
- Make CTAs specific and urgent

### Homepage Hero
- Lead with the transformation you offer
- Keep it conversational
- Address pain points quickly
- Multiple CTA options (low and high commitment)

## 🔧 Common Tasks

### Add a New Page
1. Create folder in `/src/app/` (e.g., `/src/app/contact/`)
2. Add `page.tsx` file
3. Copy structure from existing page
4. Update navbar links in `/src/components/Navbar.tsx`

### Change Fonts
Edit: `/src/app/layout.tsx` (lines 3-14)
Replace Geist fonts with your preferred Google Fonts.

### Update Footer Content
Edit: `/src/components/Footer.tsx`
- Company description (line ~30)
- Quick links (lines ~60-80)
- Contact details (lines ~90-110)

## 🎨 Design System

### Button Variants
- `primary` - Purple background (main CTAs)
- `secondary` - Green background (alternative actions)
- `outline` - Border only (less emphasis)

### Button Sizes
- `sm` - Small buttons
- `md` - Default size
- `lg` - Large, prominent CTAs

Usage:
```tsx
<Button href="/contact" variant="primary" size="lg">
  Get Started
</Button>
```

## 📞 Support Checklist

Before launching, make sure to:
- [ ] Update all contact information (email, phone, address)
- [ ] Add real social media links
- [ ] Update client names and testimonials
- [ ] Replace placeholder team photos (if using)
- [ ] Add actual blog posts or remove the blog page
- [ ] Set up email for contact forms (if added)
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Verify SEO metadata is correct
- [ ] Set up Google Analytics (optional)

## 🆘 Need Help?

### File Structure Quick Reference
```
src/
├── app/              # Pages
│   ├── page.tsx      # Home page
│   ├── about/        # About page
│   ├── services/     # Services page
│   └── blog/         # Blog page
└── components/       # Reusable UI components
    ├── Navbar.tsx    # Top navigation
    ├── Footer.tsx    # Site footer
    ├── Button.tsx    # Button component
    └── ServiceCard.tsx # Service display cards
```

### Key Files to Know
- `layout.tsx` - Site-wide settings, metadata, navigation, footer
- `globals.css` - Colors, fonts, animations
- `page.tsx` files - Individual page content

## 🎁 Bonus Features Included

✨ Animated hero backgrounds
✨ Smooth scroll to sections
✨ Hover effects on cards
✨ Mobile-friendly menu
✨ Loading animations
✨ Dark mode support
✨ SEO-optimized structure
✨ Fast performance
✨ Accessible design

---

**Remember**: This website is built to grow with your business. Start with what you have, and update content as you expand your services and client base.

**Questions?** Refer to the main README.md or reach out to your development team.

Good luck with Adverze! 🚀
