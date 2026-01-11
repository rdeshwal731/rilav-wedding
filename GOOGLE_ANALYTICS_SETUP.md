# 📊 Google Analytics Setup Guide

Track who views your wedding invitation and get detailed statistics!

## 🎯 What You'll Track

With Google Analytics, you can see:
- **Total visitors** - How many people viewed the invitation
- **Unique visitors** - Number of different people
- **Device breakdown** - Mobile vs Desktop
- **Location data** - Where guests are viewing from
- **Time spent** - How long they stayed on the page
- **Custom events:**
  - Card opened
  - Music started
  - Add to Calendar clicked
  - Scroll depth

---

## 🚀 Setup Steps (5 Minutes)

### Step 1: Create Google Analytics Account

1. **Go to Google Analytics**
   - Visit: https://analytics.google.com
   - Sign in with your Google account

2. **Create Account**
   - Click "Start measuring"
   - Account name: "Wedding Invitation" (or any name)
   - Click "Next"

3. **Create Property**
   - Property name: "Riya Lavesh Wedding"
   - Time zone: Select "India" (or your timezone)
   - Currency: INR (or your preference)
   - Click "Next"

4. **Business Details**
   - Industry: "Other"
   - Business size: "Small"
   - How you plan to use: Select options that apply
   - Click "Create"

5. **Accept Terms**
   - Read and accept the terms
   - Click "I Accept"

### Step 2: Set Up Web Data Stream

1. **Choose Platform**
   - Select "Web"

2. **Enter Website Details**
   - Website URL: Your Netlify URL (e.g., `https://riya-lavesh-wedding.netlify.app`)
   - Stream name: "Wedding Invitation Site"
   - Click "Create stream"

3. **Get Measurement ID**
   - You'll see a **Measurement ID** like: `G-XXXXXXXXXX`
   - **Copy this ID** (it starts with "G-")

### Step 3: Add Measurement ID to Your Invitation

1. **Open index.html**
   - Find this line near the top (around line 24):
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   ```

2. **Replace G-XXXXXXXXXX**
   - Replace **both occurrences** of `G-XXXXXXXXXX` with your actual Measurement ID
   - Example: If your ID is `G-ABC123XYZ`, it should look like:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-ABC123XYZ"></script>
   <script>
       ...
       gtag('config', 'G-ABC123XYZ', {
   ```

3. **Save the file**

### Step 4: Deploy and Test

1. **Deploy to Netlify**
   - Upload your updated files to Netlify

2. **Test Tracking**
   - Visit your invitation URL
   - Open the invitation (click "Tap to Open")
   - Click the Calendar button

3. **Check Google Analytics**
   - Go back to Google Analytics
   - Click "Reports" → "Realtime"
   - You should see "1 user online" (that's you!)
   - Wait 5-10 seconds for data to appear

---

## 📈 How to View Statistics

### Real-Time Data (See current visitors)

1. Go to Google Analytics dashboard
2. Click **"Reports"** → **"Realtime"**
3. See:
   - Current active users
   - Pages being viewed
   - Events happening now

### Full Reports (After 24-48 hours)

1. **User Statistics**
   - Reports → Acquisition → User acquisition
   - See total visitors, new vs returning

2. **Device Breakdown**
   - Reports → Tech → Tech details
   - See mobile vs desktop, browsers, operating systems

3. **Location Data**
   - Reports → User → Demographic details
   - See cities and countries

4. **Custom Events**
   - Reports → Engagement → Events
   - See:
     - `card_opened` - How many opened the invitation
     - `music_started` - How many heard the music
     - `add_to_calendar_clicked` - How many added to calendar

5. **Engagement**
   - Reports → Engagement → Pages and screens
   - See average time on page

---

## 🎯 Custom Events Being Tracked

The invitation automatically tracks these events:

| Event Name | When It Fires | What It Means |
|------------|---------------|---------------|
| `page_view` | Page loads | Someone visited the invitation |
| `card_opened` | User clicks "Tap to Open" | Guest opened the invitation |
| `music_started` | Music begins playing | Guest heard the music |
| `add_to_calendar_clicked` | Calendar button clicked | Guest added event to calendar |
| `invitation_loaded` | Page fully loads | Initial page load complete |

---

## 📊 Understanding the Data

### Key Metrics to Watch:

1. **Total Users**
   - How many people you've shared the link with
   - vs. how many actually viewed it

2. **Engagement Rate**
   - Compare `page_view` vs `card_opened`
   - If 100 viewed but only 50 opened = 50% engagement

3. **Calendar Adds**
   - `add_to_calendar_clicked` count
   - Shows how many are seriously planning to attend

4. **Device Type**
   - Most will be mobile (as expected)
   - Can optimize if needed

5. **Peak Viewing Times**
   - When do most people view?
   - Best time to send reminder messages

---

## 🔒 Privacy Features

The tracking includes privacy protections:

✅ **IP Anonymization** - IP addresses are anonymized
✅ **No Personal Data** - Only anonymous usage data
✅ **GDPR Compliant** - Follows privacy regulations
✅ **Secure** - All data encrypted

---

## 🛠️ Troubleshooting

### Not Seeing Any Data?

**Check:**
1. ✅ Measurement ID is correct (starts with "G-")
2. ✅ ID is in BOTH places in index.html
3. ✅ You deployed the updated file to Netlify
4. ✅ You're looking at "Realtime" report (for instant data)
5. ✅ Full reports take 24-48 hours to populate

### Data Looks Wrong?

**Common Issues:**
- **Multiple visits from same IP** - You testing repeatedly
- **0 visitors** - Wait 24 hours for full reports
- **Realtime shows data, reports don't** - Reports update with delay

### Still Not Working?

1. Open invitation in browser
2. Press F12 (Developer Tools)
3. Go to "Console" tab
4. Look for errors
5. You should see: "Event: invitation_loaded"

---

## 📱 Mobile App (Optional)

View stats on your phone!

1. Download "Google Analytics" app (iOS/Android)
2. Sign in with your Google account
3. Select your property
4. View realtime and reports

---

## 💡 Pro Tips

1. **Share Strategically**
   - Track when you send invitations
   - See immediate spike in viewers
   - Know who might have missed it

2. **Follow Up**
   - If someone viewed but didn't add to calendar
   - Send a gentle reminder

3. **Engagement Insights**
   - Low card_opened rate? → Link might not be working
   - High views but low calendar adds? → Consider adding phone reminder

4. **Peak Times**
   - See when most people view
   - Send important updates at those times

---

## 📋 Quick Reference

**Your Measurement ID Location:**
- Line 24 in `index.html`
- Replace: `G-XXXXXXXXXX`
- With: Your actual ID from Google Analytics

**Where to Check Stats:**
- URL: https://analytics.google.com
- Realtime: Reports → Realtime
- Full Reports: Available after 24 hours

**What Gets Tracked:**
- Page views
- Card opens
- Music plays
- Calendar button clicks
- Time on page
- Device types
- Locations

---

## ❓ FAQ

### Is this free?
**Yes!** Google Analytics is completely free.

### Will guests know they're being tracked?
**No.** It's anonymous analytics, like any website.

### Can I see individual names?
**No.** Analytics shows aggregate data only (total numbers, percentages).

### How long is data stored?
**Default:** 2 months (can extend to 14 months in settings)

### Can I stop tracking later?
**Yes.** Just remove the Google Analytics code from index.html.

---

## 🎉 You're All Set!

Once you add your Measurement ID:
- ✅ Automatic tracking starts
- ✅ View realtime visitors
- ✅ Get detailed reports
- ✅ Make data-driven decisions

**Next Steps:**
1. Get your Measurement ID from Google Analytics
2. Replace `G-XXXXXXXXXX` in index.html
3. Deploy to Netlify
4. Watch the stats roll in!

---

**Questions?** Check the Google Analytics Help Center: https://support.google.com/analytics

Made with ❤️ for data-driven wedding planning! 📊💒
