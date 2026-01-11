# 💒 Digital Wedding Invitation

A beautiful, interactive digital wedding invitation template built with HTML, CSS, and JavaScript. Features elegant animations, background music, and mobile-first responsive design.

## ✨ Features

- **Interactive Card Animation** - Opens like a real invitation card
- **Auto-playing Background Music** - Romantic instrumental that plays on card open
- **Scroll Reveal Animations** - Smooth fade-in effects as you scroll
- **Floating Flower Petals** - Gentle animations throughout
- **Photo Integration** - Couple photos elegantly integrated as backgrounds
- **Add to Calendar** - One-click Google Calendar integration
- **Google Analytics** - Track visitors, engagement, and statistics (optional)
- **Mobile-First Design** - Optimized for iOS Safari and Android Chrome
- **Fully Responsive** - Works beautifully on all devices
- **Accessible** - Keyboard navigation and screen reader support

## 📁 Project Structure

```
rilav/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # JavaScript for interactivity
├── images/             # Image assets folder
│   ├── ganesh.png      # Ganesh symbol (add this)
│   ├── couple-1.jpg    # Couple photo 1 (add this)
│   ├── couple-2.jpg    # Couple photo 2 (add this)
│   ├── couple-3.jpg    # Couple photo 3 (add this)
│   ├── couple-4.jpg    # Couple photo 4 (add this)
│   └── README.txt      # Image instructions
├── audio/              # Audio assets folder
│   ├── background.mp3  # Background music (add this)
│   └── README.txt      # Audio instructions
└── README.md           # This file
```

## 🚀 Quick Start

### Current Status: ✅ READY TO TEST!

**All assets are in place:**
- ✅ All 5 images added (PNG format)
- ✅ Background music configured
- ✅ Google Analytics integrated (optional activation)
- ✅ Mobile-responsive design ready

### Test the Invitation Now:

1. **Open `index.html`** in any browser (double-click it)
2. **Click "Tap to Open"** to see the card unfold
3. **Music plays automatically** - romantic instrumental
4. **Scroll down** to view all sections with photos
5. **Test "Add to Calendar"** button

**No installation required!**

### Images: ✅ ALL ADDED

All images are PNG format in the `images/` folder:
- `ganesh.png` ✅
- `couple-1.png` ✅
- `couple-2.png` ✅
- `couple-3.png` ✅
- `couple-4.png` ✅

### Music: ✅ CONFIGURED

Background music uses external romantic instrumental.

**Optional:** Add `background.mp3` to `audio/` folder for custom music.

### Next Steps:

1. **Test locally** - Open index.html now
2. **(Optional)** Activate Google Analytics
3. **Deploy to Netlify** - Get shareable link
4. **Share with guests** - WhatsApp, SMS, email

## 🌐 Deployment (Making it Shareable)

You have two excellent free options:

### Option 1: Netlify (Recommended)

1. Go to [netlify.com](https://www.netlify.com)
2. Sign up/login (free account)
3. Drag and drop the entire `rilav` folder onto Netlify
4. Your site will be live in seconds!
5. You'll get a URL like: `riya-lavesh-wedding.netlify.app`
6. Share this URL with guests via WhatsApp, SMS, email, etc.

**Benefits:**
- Super fast
- Free SSL (https)
- Can customize domain name
- Automatic updates when you drag new files

### Option 2: Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up/login (free account)
3. Import your project
4. Deploy - done!
5. You'll get a URL like: `riya-lavesh-wedding.vercel.app`

### Option 3: GitHub Pages

1. Create a GitHub account
2. Create a new repository named `wedding-invitation`
3. Upload all files
4. Go to Settings → Pages
5. Enable GitHub Pages
6. Your URL: `yourusername.github.io/wedding-invitation`

## 📱 Sharing the Invitation

Once deployed, you can share the link via:

- **WhatsApp** - Just paste the link, it will show a preview
- **SMS/Text** - Send the link directly
- **Email** - Include the link in your email
- **Social Media** - Share on Facebook, Instagram, etc.
- **QR Code** - Generate a QR code that links to the invitation

### Creating a QR Code

1. Go to [qr-code-generator.com](https://www.qr-code-generator.com)
2. Paste your invitation URL
3. Download the QR code
4. Print it on physical invitations!

## 🔄 Updating Images Later

Want to replace photos with caricatures or different images?

1. Keep the same filenames (`couple-1.jpg`, `couple-2.jpg`, etc.)
2. Simply replace the files in the `images/` folder
3. If using Netlify: drag the updated folder again
4. The invitation will update automatically!

## 🎨 Customization

### Changing Names

Edit `index.html` and search for "Riya" and "Lavesh" - replace with desired names.

### Changing Event Details

Edit `index.html` around line 130-150 to update:
- Date and time
- Venue name and address
- Event schedule

Also update `script.js` lines 110-120 for calendar integration.

### Changing Colors

Edit `styles.css` at the top (CSS Variables section) to customize colors:

```css
--cream-bg: #FAF9F6;      /* Background color */
--dark-green: #2C5530;    /* Main text color */
--accent-pink: #D4A5A5;   /* Accent color */
--gold: #B8860B;          /* Gold highlights */
```

### Changing Fonts

Edit line 20-21 in `index.html` to use different Google Fonts.

## 📊 Browser Support

✅ **Mobile:**
- iOS Safari 12+
- Android Chrome 80+
- Android Firefox
- Samsung Internet

✅ **Desktop:**
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## 🐛 Troubleshooting

### Music Not Playing on Mobile

**Why:** Mobile browsers require user interaction before playing audio.

**Solution:** The music will play when the guest taps "Open" on the invitation card. This tap counts as user interaction!

### Images Not Showing

**Check:**
1. Filenames are exactly: `ganesh.png`, `couple-1.jpg`, etc.
2. Files are in the `images/` folder
3. File extensions are lowercase (.jpg, not .JPG)

### Invitation Looks Broken

**Check:**
1. All three files are in the same folder: `index.html`, `styles.css`, `script.js`
2. Open in a modern browser
3. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

### Calendar Button Not Working

**Check:**
1. Pop-up blocker might be blocking the calendar window
2. Allow pop-ups for your site
3. Try in a different browser

## 📞 Support

If you have issues:

1. Check the browser console for errors (F12 → Console tab)
2. Verify all files are in the correct folders
3. Test in a different browser
4. Try incognito/private mode

## 🎯 Performance Tips

For the fastest loading:

1. **Compress Images**
   - Use [tinypng.com](https://tinypng.com) to compress photos
   - Aim for under 300KB per image

2. **Optimize Music**
   - Keep music file under 2MB
   - 128kbps MP3 is usually sufficient

3. **Test Loading Speed**
   - Use Google PageSpeed Insights
   - Test on slow 3G connection

## 📝 Customizable Event Details

**The invitation includes:**
- Customizable couple names
- Flexible date and time
- Venue information
- Event schedule with multiple ceremonies
- Sanskrit blessings and religious elements
- Photo integration (background overlays and frames)

## 🙏 Credits

A beautiful wedding invitation template for your special day.

**Technologies Used:**
- HTML5
- CSS3 (Animations, Grid, Flexbox)
- Vanilla JavaScript
- Google Fonts (Playfair Display, Noto Sans Devanagari, Montserrat)

## 📜 License

Free to use for personal wedding invitation purposes.

---

**Made with ❤️ for your special day**

*For any questions or assistance, feel free to ask!*
