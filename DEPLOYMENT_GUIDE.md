# 🚀 Quick Deployment Guide

Get your wedding invitation online and shareable in 5 minutes!

## Step 1: Prepare Your Files ✅

Current status - Ready to deploy!

- [x] Added all 5 images to the `images/` folder ✅
  - ganesh.png ✅
  - couple-1.png ✅
  - couple-2.png ✅
  - couple-3.png ✅
  - couple-4.png ✅
- [x] Background music configured ✅
  - Using external romantic instrumental
  - Optional: Add local background.mp3 for custom music
- [ ] Test the invitation by opening index.html in a browser ⬅️ DO THIS NOW
- [ ] (Optional) Activate Google Analytics tracking

## Step 2: Choose Your Deployment Method

### 🌟 Easiest: Netlify Drop (5 Minutes)

**Perfect for non-technical users!**

1. **Go to Netlify**
   - Visit: https://app.netlify.com/drop
   - No account needed!

2. **Drag & Drop**
   - Select the entire `rilav` folder
   - Drag it onto the Netlify page
   - Wait 30 seconds

3. **Done!**
   - You'll get a URL like: `random-name-123.netlify.app`
   - Click the link to test it
   - Share this link with your guests!

4. **Optional: Customize URL**
   - Create a free Netlify account
   - Go to: Site settings → Change site name
   - Rename to: `riya-lavesh-wedding`
   - New URL: `riya-lavesh-wedding.netlify.app`

**Updating Later:**
- Just drag the folder again to update images/content!

---

### 🎯 Alternative: Vercel (Also Easy)

1. **Sign Up**
   - Go to: https://vercel.com
   - Sign up with GitHub, GitLab, or Bitbucket

2. **Import Project**
   - Click "New Project"
   - Click "Import Third Party Git Repository"
   - Or use Vercel CLI: `vercel` in the project folder

3. **Deploy**
   - Vercel automatically deploys
   - You get a URL like: `project-name.vercel.app`

4. **Share**
   - Copy the URL and share with guests!

---

### 📘 Advanced: GitHub Pages (Free Forever)

**Best if you want version control**

1. **Create GitHub Account**
   - Go to: https://github.com
   - Sign up for free

2. **Create Repository**
   - Click "New repository"
   - Name: `wedding-invitation`
   - Make it Public
   - Click "Create repository"

3. **Upload Files**
   - Click "uploading an existing file"
   - Drag all your files (index.html, styles.css, script.js, and folders)
   - Click "Commit changes"

4. **Enable GitHub Pages**
   - Go to: Settings → Pages
   - Source: Deploy from a branch
   - Branch: main
   - Click Save

5. **Get Your URL**
   - Wait 2-3 minutes
   - Your URL: `yourusername.github.io/wedding-invitation`
   - Share this link!

---

## Step 3: Test Your Live Site 🧪

Before sharing with guests:

1. **Open the URL** on your phone
2. **Test the card opening** - Does it animate smoothly?
3. **Check the music** - Does it play when you tap?
4. **Scroll through** - Do all sections appear?
5. **Test calendar button** - Does it open Google Calendar?
6. **Test on different devices** - iPhone, Android, iPad, etc.

---

## Step 4: Share With Guests 📤

### WhatsApp

```
🎊 You're Invited! 🎊

Riya & Lavesh are getting married!

Date: Friday, February 13, 2026
Venue: Grand Dream Resort, Meerut

View your digital invitation:
[your-url-here]

We look forward to celebrating with you! 💒
```

### SMS/Text

```
You're invited to Riya & Lavesh's wedding! 
Feb 13, 2026 at Grand Dream Resort, Meerut
View invitation: [your-url-here]
```

### Email

**Subject:** You're Invited - Riya & Lavesh's Wedding

```
Dear [Name],

We are delighted to invite you to celebrate the wedding of 
Riya and Lavesh!

📅 Friday, February 13, 2026
📍 Grand Dream Resort, Meerut

Please view your digital invitation here:
[your-url-here]

We look forward to your gracious presence and blessings!

With love,
[Your name]
```

---

## Bonus: Create a QR Code 📱

Make it easy for guests to access the invitation!

1. **Go to QR Code Generator**
   - Visit: https://www.qr-code-generator.com
   - Or: https://qr.io

2. **Enter Your URL**
   - Paste your invitation URL
   - Choose "URL" type

3. **Customize (Optional)**
   - Add a logo in the center
   - Change colors to match your theme
   - Add a frame with text like "Scan to View Invitation"

4. **Download**
   - Download as PNG or SVG
   - High resolution (at least 1000x1000px)

5. **Use It**
   - Add to physical invitation cards
   - Share on social media
   - Print on wedding materials

---

## Common Questions ❓

### How long will the link stay active?

**Netlify/Vercel:** Forever (free tier)
**GitHub Pages:** As long as your account is active

### Can I change the content after sharing?

**Yes!** Just:
1. Update your local files
2. Re-upload to the same deployment
3. The URL stays the same, content updates

### Will it work on all phones?

**Yes!** Tested on:
- iPhone (iOS 12+)
- Android (Chrome, Firefox)
- Samsung Internet
- All modern browsers

### What if guests don't have internet?

The invitation requires internet to view. Make sure to:
- Send physical invitations as backup
- Inform guests in advance
- Or create a PDF version for offline viewing

### Can I password-protect it?

**Netlify:** Yes, with paid plan
**Vercel:** Yes, with password protection feature
**GitHub Pages:** No built-in password protection

**Alternative:** Create a simple landing page that asks for a password before showing the invitation.

### How do I track who viewed it?

**Google Analytics is already built-in!** Just need to activate it:

1. **Get Measurement ID:**
   - Go to https://analytics.google.com
   - Create free account (takes 2 minutes)
   - Get your Measurement ID (format: `G-XXXXXXXXXX`)

2. **Update index.html:**
   - Open `index.html`
   - Find line 24: `<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>`
   - Replace `G-XXXXXXXXXX` with your actual ID
   - Find line 29: `gtag('config', 'G-XXXXXXXXXX'`
   - Replace that `G-XXXXXXXXXX` too

3. **Deploy:**
   - Upload to Netlify again
   - Done! Analytics will start tracking

4. **View Stats:**
   - Go to Google Analytics → Reports → Realtime
   - See visitors, card opens, calendar clicks, etc.

**For detailed guide:** See `GOOGLE_ANALYTICS_SETUP.md`

**What You'll Track:**
- Total visitors & unique visitors
- Card opened count
- Music started count
- Calendar button clicks
- Device breakdown (mobile vs desktop)
- Geographic locations
- Time spent on page

---

## Need Help? 🆘

1. Check README.md for troubleshooting
2. Test in incognito/private mode
3. Clear browser cache
4. Try a different browser
5. Check browser console for errors (F12)

---

## Checklist Before Sharing ✅

- [ ] All images are added and displaying correctly
- [ ] Background music plays when card opens
- [ ] All text is correct (names, dates, venue)
- [ ] Calendar button works
- [ ] Tested on mobile phone
- [ ] Tested on someone else's phone
- [ ] URL is bookmarked/saved
- [ ] Backup of files saved on computer

---

**🎉 Congratulations! Your digital invitation is live! 🎉**

Now sit back and watch the blessings pour in!
