# NovaArt - Portrait Business Website (Final Version)

Professional portrait business website with complete account system, pricing pages, and order file downloads.

## ✅ All Your Requested Changes

✅ **Removed AI References** - No mention of "AI-powered" anywhere
✅ **Clickable Logo** - NovaArt logo links back to homepage
✅ **Separate Pricing Page** - Dedicated pricing.html with all options
✅ **Separate Contact Page** - contact.html with form and FAQ
✅ **Clickable Account Button** - Top-right account button opens settings page
✅ **Account Settings Page** - Edit name, address, phone, email
✅ **Order File Download** - Orders save as "Order - FirstName LastName.txt"
✅ **Removed "24h delivery"** - Not mentioned in summary
✅ **Removed "Free revisions"** - Not mentioned
✅ **Removed bottom text** - "Any portrait style included" removed from summary

## 📁 Complete File List (15 files)

```
novaart-website/
├── index.html           # Homepage
├── gallery.html         # Gallery page
├── order.html           # Order form
├── pricing.html         # Pricing page (NEW)
├── contact.html         # Contact page (NEW)
├── account.html         # Account settings (NEW)
├── login.html           # Login page
├── register.html        # Registration page
├── confirmation.html    # Order confirmation
├── styles.css           # All styling
├── script.js            # Homepage JS
├── order.js             # Order page + file download
├── auth.js              # Login/register
├── account.js           # Account settings (NEW)
├── confirmation.js      # Confirmation page
└── README.md            # This file
```

## 🎯 Key Features

**Order File Download:**
- When order is placed, automatically downloads: `Order - FirstName LastName.txt`
- File contains all order details formatted nicely
- Includes: order number, customer info, product, address, notes, total

**Account System:**
- Click account name in top-right → opens account settings
- Edit personal info and default delivery address
- Logout button
- Logo always links back to home

**Separate Pages:**
- Pricing page with all options
- Contact page with form + FAQ
- Account settings page

## 🚀 Upload to GitHub

### Delete Old Files First
1. Go to: https://github.com/bezi5kt/novaart-website
2. Delete ALL existing files

### Upload New Files
1. Click "Add file" → "Upload files"
2. Drag ALL 15 files from extracted folder
3. Commit message: "Final update - account system, pricing, file downloads"
4. Click "Commit changes"
5. Wait 1-2 minutes for deployment

**Your site:** https://bezi5kt.github.io/novaart-website/

## 📝 How It Works Now

1. Customer visits site
2. Browses gallery/pricing
3. Clicks "Order Now" → redirected to login
4. Creates account (name, email, phone, password)
5. Places order with photo upload
6. Selects size (price auto-updates)
7. Enters delivery address
8. **Clicks "Place Order"** → **Order file automatically downloads**
9. Redirected to confirmation page

## 📥 Order File Format

```
NovaArt - Order Details
===============================

Order Number: NA-12345
Date: 19/05/2026, 14:30:25

CUSTOMER INFORMATION
--------------------
Name: John Doe
Email: john@example.com
Phone: +386 123 456 789

ORDER DETAILS
-------------
Product: 40×50 cm Framed Print
Style: Oil Painting
Custom Design: No

DELIVERY ADDRESS
----------------
Street Address, City, Postal Code, Country

SPECIAL NOTES
-------------
Customer notes here

TOTAL AMOUNT
------------
€44.90
```

## 🔧 What You Can Customize

**Email Address:**
- Open each HTML file
- Search for: `hello@novaart.example`
- Replace with your real email

**Social Media:**
- Search for: `@novaart (coming soon)`
- Replace with your actual handles

**Phone Number:**
- In contact.html
- Replace `+386 XX XXX XXX`

## ⚠️ Current Limitations

- User data stored in browser only (localStorage)
- No backend database
- Order files download to customer's computer (you need to ask them to email it)
- No actual image upload to server
- No payment processing

**For Production:** You'll need to add a backend service to handle actual file uploads and email notifications.

## 🎨 Summary Changes Removed

OLD summary text:
✓ Any portrait style included
✓ High-resolution file
✓ 24-hour delivery  
✓ Free revisions

NEW summary text:
✓ High-resolution file included

---

Ready to go live! Upload and test at https://bezi5kt.github.io/novaart-website/
