# NovaArt - AI Portrait Website (Updated V2)

Professional portrait business website with account system, order management, and dynamic pricing.

## 🎨 New Features

✅ **User Authentication**
- Login & Registration system
- Account required to place orders
- Stores user info (name, email, phone)

✅ **Universal Order Page**
- Automatic price calculation based on size selection
- Exact pricing from your requirements:
  - 30×40 cm Framed Print — €34.90
  - 40×50 cm Framed Print — €44.90
  - 50×70 cm Framed Print — €64.90
  - 40×60 cm Canvas — €69.90
  - 50×70 cm Canvas — €84.90
  - 50×70 cm Poster — €32.90
  - Personalized Design — +€20.00
- Delivery address collection
- Image upload with preview
- Remove image button

✅ **Separate Confirmation Page**
- Order summary with all details
- Order number generation
- Next steps for payment & delivery

✅ **Multi-Page Navigation**
- Home page (index.html)
- Gallery page (gallery.html)
- Order page (order.html)
- Login page (login.html)
- Register page (register.html)
- Confirmation page (confirmation.html)

## 📁 File Structure

```
novaart-website/
├── index.html           # Homepage
├── gallery.html         # Full gallery page
├── order.html           # Order form with pricing
├── login.html           # Login page
├── register.html        # Registration page
├── confirmation.html    # Order confirmation
├── styles.css           # All styling
├── script.js            # Homepage JS
├── order.js             # Order page logic
├── auth.js              # Login/register logic
├── confirmation.js      # Confirmation page logic
└── README.md            # This file
```

## 🚀 Upload to GitHub

### Step 1: Upload Files
1. Go to https://github.com/bezi5kt/novaart-website
2. Click "Add file" → "Upload files"
3. **Delete all old files first** (select all → delete)
4. Drag and drop ALL 10 new files:
   - index.html
   - gallery.html
   - order.html
   - login.html
   - register.html
   - confirmation.html
   - styles.css
   - script.js
   - order.js
   - auth.js
   - confirmation.js
   - README.md
5. Commit message: "Updated website with account system and pricing"
6. Click "Commit changes"

### Step 2: Wait for Deployment
- GitHub Pages will automatically redeploy (1-2 minutes)
- Your site: **https://bezi5kt.github.io/novaart-website/**

## 💾 How It Currently Works

**Data Storage:**
- Uses browser localStorage (temporary solution)
- User accounts stored locally
- Orders stored locally

**For Production:**
You'll need to add a backend to:
1. Store user accounts in a database
2. Handle image uploads (Uploadcare, Cloudinary, AWS S3)
3. Process payments
4. Send email notifications
5. Track orders

## 🔧 Recommended Next Steps

1. **Image Upload Backend:**
   - Integrate Uploadcare or Cloudinary
   - Images get uploaded to cloud storage
   - You receive download links

2. **Order Notifications:**
   - Use EmailJS or Formspree
   - You receive email when order is placed
   - Customer gets confirmation email

3. **Payment Integration:**
   - Add Stripe or PayPal
   - Process payments directly
   - Automatic order confirmation

4. **Database:**
   - Firebase (easiest)
   - MongoDB
   - PostgreSQL with backend

## 🎯 User Flow

1. Customer visits homepage
2. Clicks "Order Now"
3. Redirected to login/register
4. Creates account (name, email, phone)
5. Accesses order page
6. Uploads photo
7. Selects style & size (price auto-updates)
8. Enters delivery address
9. Submits order
10. Redirected to confirmation page
11. Receives order number & details

## 🔐 Current Limitations

- **No backend:** Data only stored in browser
- **No real authentication:** Just local storage
- **No image upload to server:** Files only previewed
- **No payment processing:** Manual payment instructions
- **No email notifications:** Need to add email service

All these can be added once you're ready to launch!

## 📧 Contact

Update email addresses in the HTML files:
- Search for: `hello@novaart.example`
- Replace with your real email

---

**Ready to go live!** Upload the files and test at https://bezi5kt.github.io/novaart-website/
