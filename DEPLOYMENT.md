# Deployment Guide for Adverze Website

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the recommended platform as it's built by the creators of Next.js and offers:
- ✅ Zero configuration deployment
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Automatic deployments on git push
- ✅ Free tier (perfect for agency websites)
- ✅ Custom domain support

#### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Adverze website"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/in with your GitHub account
   - Click "New Project"
   - Import your `adverze-website` repository
   - Click "Deploy" (no configuration needed!)
   - Wait 2-3 minutes ⏱️
   - Your site is live! 🎉

3. **Custom Domain**
   - In Vercel dashboard, go to your project
   - Settings → Domains
   - Add your domain (e.g., adverze.com)
   - Update DNS records as instructed
   - Wait for DNS propagation (usually 5-60 minutes)
   - Done!

### Option 2: Netlify

1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

2. **Deploy**
   - Go to [netlify.com](https://netlify.com)
   - Connect your GitHub repository
   - Configure build settings
   - Deploy!

### Option 3: Traditional Hosting (cPanel/VPS)

This requires a Node.js environment:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload files**
   - Upload entire project to server
   - SSH into your server
   - Install Node.js (v20+)
   - Run `npm install --production`
   - Run `npm start`

3. **Process Manager (PM2)**
   ```bash
   npm install -g pm2
   pm2 start npm --name "adverze" -- start
   pm2 save
   pm2 startup
   ```

## 🌐 Domain Configuration

### For Namakkal-based Domain Registrar

If you bought your domain from an Indian registrar (GoDaddy India, BigRock, etc.):

1. **DNS Settings**
   - Log into your domain registrar
   - Go to DNS Management
   - Add these records:

   For Vercel:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

2. **Verify**
   - Check at [dnschecker.org](https://dnschecker.org)
   - Should propagate within 1-24 hours

## 📧 Email Setup

To use hello@adverze.com:

### Option 1: Gmail (Recommended for small teams)
- Go to Google Workspace
- Add your domain
- Follow verification steps
- Cost: ~₹125/user/month

### Option 2: Zoho Mail (Budget-friendly)
- Go to zoho.com/mail
- Free plan: 5 users
- Add your domain
- Update MX records

### Option 3: Domain Email (Basic)
- Most Indian registrars offer email hosting
- Usually ₹100-500/year
- Check with your domain provider

## 🔒 SSL Certificate

All recommended platforms (Vercel, Netlify) provide **automatic HTTPS** for free!

For traditional hosting:
- Use Let's Encrypt (free)
- Or purchase from your hosting provider

## 📊 Analytics Setup (Optional)

### Google Analytics 4

1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Add to `layout.tsx`:

```tsx
// Add in <head> section
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script dangerouslySetInnerHTML={{
  __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `
}} />
```

### Microsoft Clarity (Free)

1. Sign up at [clarity.microsoft.com](https://clarity.microsoft.com)
2. Add tracking code to `layout.tsx`
3. Get heatmaps and session recordings

## 🔍 SEO Setup

### Google Search Console

1. Verify your domain at [search.google.com/search-console](https://search.google.com/search-console)
2. Submit sitemap: `https://yourdomain.com/sitemap.xml`
3. Request indexing for main pages

### Google My Business (Essential!)

As a Namakkal-based business:
1. Claim your Google My Business listing
2. Add complete information:
   - Address: Your Namakkal office
   - Phone: +91 98765 43210
   - Website: Your new domain
   - Business hours
   - Photos of office/team
3. Get reviews from clients!

## 📱 Social Media Integration

Update these with your actual links:

```tsx
// In Footer.tsx, update URLs:
<a href="https://facebook.com/adverze" ...>
<a href="https://instagram.com/adverze" ...>
<a href="https://linkedin.com/company/adverze" ...>
```

## ⚡ Performance Optimization

Already included:
- ✅ Next.js Image optimization
- ✅ Code splitting
- ✅ Font optimization
- ✅ CSS minimization

Additional (optional):
- Add Cloudflare for extra CDN
- Enable Vercel Analytics
- Set up error monitoring (Sentry)

## 🧪 Pre-Launch Checklist

Before announcing your website:

### Content
- [ ] Update email to actual business email
- [ ] Update phone number
- [ ] Verify all client names are spelled correctly
- [ ] Add actual office address in Namakkal
- [ ] Review all content for typos

### Functionality
- [ ] Test all navigation links
- [ ] Check mobile responsiveness
- [ ] Test contact forms (if added)
- [ ] Verify all CTAs work
- [ ] Test on different browsers

### SEO
- [ ] Update page titles and descriptions
- [ ] Add favicon
- [ ] Submit to Google Search Console
- [ ] Create Google My Business listing
- [ ] Add schema markup (optional)

### Social
- [ ] Update social media links
- [ ] Add social sharing images
- [ ] Create social media posts announcing launch

### Legal (If Required)
- [ ] Privacy Policy page (if collecting data)
- [ ] Terms of Service (if offering services online)
- [ ] Cookie consent (if in EU/EEA)

## 🎉 Post-Launch

After your site is live:

1. **Announce on Social Media**
   - Share on all platforms
   - Tag local Namakkal businesses
   - Use hashtags: #DigitalMarketing #Namakkal #TamilNadu

2. **Update Everywhere**
   - Email signature
   - Business cards
   - Letterhead
   - LinkedIn profile
   - Facebook page
   - Google My Business

3. **Monitor**
   - Check Google Analytics weekly
   - Track contact form submissions
   - Monitor page load speed
   - Read user feedback

4. **Start Blogging**
   - Publish 1-2 posts per month
   - Share on social media
   - Helps with SEO!

## 🆘 Troubleshooting

### Site not loading after deployment
- Check build logs in Vercel/Netlify
- Verify all dependencies installed
- Check for TypeScript errors

### Domain not connecting
- Wait 24 hours for DNS propagation
- Verify DNS records are correct
- Clear browser cache

### Images not showing
- Ensure images are in `/public/` folder
- Check Next.js Image component usage
- Verify image paths

## 📞 Support Resources

- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **Tailwind CSS**: [tailwindcss.com/docs](https://tailwindcss.com/docs)

## 🎯 Quick Commands Reference

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm start           # Start production server

# Check for issues
npm run lint        # Run linter

# Update dependencies
npm update          # Update packages
```

---

## 🚀 Ready to Launch?

Your website is production-ready! Choose your deployment platform, follow the steps, and launch your digital presence.

**Estimated Time to Live**: 30 minutes - 2 hours (including domain setup)

Good luck with the launch! 🎊

---

*For additional support or custom features, contact your development team.*
