# Update Google Analytics - Quick Commands

After you get your Measurement ID from Google Analytics:

1. Open `index.html` in your editor
2. Replace `G-XXXXXXXXXX` with your actual ID (2 places: lines 24 & 29)
3. Save the file
4. Run these commands in terminal:

```powershell
cd "C:\Users\Raghav Deshwal\Desktop\rilav"
git add index.html
git commit -m "Add Google Analytics tracking"
git push
```

Done! Analytics will start tracking in 5 minutes.
