# NovaArt - AI Portrait Website

A professional landing page for NovaArt portrait business built with HTML, CSS, and JavaScript.

## Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Photo upload with preview
- ✅ Order form with validation
- ✅ Gallery with before/after comparisons
- ✅ Pricing section
- ✅ SEO-optimized structure
- ✅ Smooth scrolling navigation

## Quick Setup for GitHub Pages

### Step 1: Create Repository on GitHub
1. Go to https://github.com/bezi5kt
2. Click "+" → "New repository"
3. Name it: `novaart-website`
4. Make it **Public**
5. Don't initialize with README
6. Click "Create repository"

### Step 2: Upload Files
You have two options:

**Option A: Using GitHub Web Interface (Easiest)**
1. On your new repository page, click "uploading an existing file"
2. Drag and drop all 4 files:
   - index.html
   - styles.css
   - script.js
   - README.md
3. Add commit message: "Initial NovaArt website"
4. Click "Commit changes"

**Option B: Using Git Command Line**
```bash
cd /path/to/novaart-website
git init
git add .
git commit -m "Initial NovaArt website"
git branch -M main
git remote add origin https://github.com/bezi5kt/novaart-website.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to repository Settings
2. Click "Pages" in left sidebar
3. Under "Source", select "Deploy from a branch"
4. Branch: select "main", folder: "/ (root)"
5. Click "Save"
6. Wait 1-2 minutes for deployment

### Step 4: Access Your Website
Your site will be live at:
**https://bezi5kt.github.io/novaart-website**

## Adding Custom Domain (Later)

When you buy a domain (e.g., novaart.com):

1. In GitHub repo Settings → Pages → Custom domain
2. Enter your domain: `novaart.com`
3. Click "Save"
4. In your domain registrar (Namecheap, etc.), add these DNS records:
   ```
   Type: A, Host: @, Value: 185.199.108.153
   Type: A, Host: @, Value: 185.199.109.153
   Type: A, Host: @, Value: 185.199.110.153
   Type: A, Host: @, Value: 185.199.111.153
   Type: CNAME, Host: www, Value: bezi5kt.github.io
   ```
5. Wait 24-48 hours for DNS propagation
6. Enable "Enforce HTTPS" in GitHub Pages settings

## Making Image Uploads Functional

Currently, the form shows a success message but doesn't actually send data. To make it work:

### Option 1: Netlify Forms (Recommended for GitHub Pages)
1. Sign up at netlify.com
2. Connect your GitHub repository
3. In `index.html`, add `data-netlify="true"` to the `<form>` tag:
   ```html
   <form id="orderForm" class="order-form" data-netlify="true">
   ```
4. Netlify will automatically handle form submissions
5. You'll receive emails for each order with file attachments

### Option 2: Uploadcare + EmailJS
1. Sign up at uploadcare.com (free tier: 3GB storage)
2. Get your public key
3. Add Uploadcare widget to handle file uploads
4. Use EmailJS to send order details to your email

### Option 3: Formspree
1. Sign up at formspree.io
2. Get your form endpoint URL
3. Update form action in JavaScript to POST to Formspree
4. Files will be uploaded and you'll get email notifications

## Updating Content

To change prices, text, or styles:
1. Edit the files locally or on GitHub
2. Commit changes
3. Push to GitHub (if using Git)
4. GitHub Pages auto-updates in 1-2 minutes

## File Structure

```
novaart-website/
├── index.html       # Main HTML structure
├── styles.css       # All styling
├── script.js        # Form handling, image preview
└── README.md        # This file
```

## SEO Tips

The site includes:
- Proper meta tags and descriptions
- Semantic HTML structure
- Alt text for images
- Fast loading times

To improve SEO further:
- Add a blog section
- Get backlinks from social media
- Submit sitemap to Google Search Console
- Add schema.org markup for local business

## Support

Questions? Update the contact email in `index.html` to your real email address.

---

Built for NovaArt - Transform Your Photos Into Stunning Portraits
