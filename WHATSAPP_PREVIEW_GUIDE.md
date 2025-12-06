# WhatsApp Link Preview Guide

## ✅ What Was Fixed

### **1. Using posterUrl Instead of photoUrl**
- **Browser Tab (Favicon)**: Uses `photoUrl` (small candidate photo)
- **WhatsApp Preview**: Uses `posterUrl` (campaign poster - just like YouTube thumbnails!)

### **2. Complete OpenGraph Tags**
Added comprehensive meta tags that WhatsApp reads:
```typescript
{
  'og:image': posterImageUrl,              // Main preview image
  'og:image:secure_url': posterImageUrl,   // HTTPS version
  'og:image:type': 'image/jpeg',           // Image type
  'og:image:width': '1200',                // Width (WhatsApp prefers 1200x630)
  'og:image:height': '630',                // Height
  'og:image:alt': title,                   // Alt text
  'og:url': full_page_url,                 // Page URL
  'og:type': 'website',                    // Content type
  'og:title': title,                       // Preview title
  'og:description': description,           // Preview description
}
```

## 🎯 How To Test WhatsApp Preview

### **Important Notes:**
1. **Localhost URLs won't work**: WhatsApp cannot access `http://localhost:3000`
2. **Deploy first**: You need a public URL (Vercel, Netlify, etc.)
3. **WhatsApp caches aggressively**: Need to clear cache

### **Step 1: Deploy Your Site**
```bash
# Deploy to Vercel (recommended)
vercel --prod

# Or use your deployment method
npm run build
```

### **Step 2: Clear WhatsApp Cache**

#### **Method 1: Use WhatsApp Link Preview Debugger**
1. Go to: https://developers.facebook.com/tools/debug/
2. Enter your URL: `https://yourdomain.com/brandso`
3. Click "Debug" or "Scrape Again"
4. This forces WhatsApp to refresh the preview

#### **Method 2: Add Query Parameter**
Instead of sharing: `https://yourdomain.com/brandso`
Share: `https://yourdomain.com/brandso?v=1` (change number each time)

#### **Method 3: Wait (Not Recommended)**
WhatsApp cache expires after ~7 days

### **Step 3: Test The Share**

#### **Method A: Direct WhatsApp Share**
1. Open WhatsApp Web or App
2. Paste your URL: `https://yourdomain.com/brandso`
3. Wait 2-3 seconds for preview to load
4. You should see the **posterUrl** image!

#### **Method B: Test on Phone**
1. Send the link to yourself
2. The preview should show:
   - ✅ Poster image (posterUrl)
   - ✅ Page title
   - ✅ Description with candidate names

## 📋 Verification Checklist

### **Before Sharing:**
- [ ] Site is deployed to public URL (not localhost)
- [ ] posterUrl images exist in /public folder
- [ ] Images are .jpg or .png format
- [ ] Images are publicly accessible (not behind login)

### **Ideal Image Specs:**
- **Size**: 1200 x 630 pixels (WhatsApp recommended)
- **Format**: JPG or PNG
- **File size**: Under 8MB
- **Aspect ratio**: 1.91:1

### **Check Meta Tags:**
1. Visit your page: `https://yourdomain.com/brandso`
2. View page source (Right-click → View Page Source)
3. Look for these tags:
```html
<meta property="og:image" content="https://yourdomain.com/usmanshareefPoster.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:title" content="Vote for Brandso">
```

## 🔧 Troubleshooting

### **Problem: Image still not showing**

**Solution 1: Clear WhatsApp Cache**
- Use Facebook's debugger tool (above)
- Or add `?v=2` to your URL

**Solution 2: Check Image URL**
1. Copy the `og:image` URL from page source
2. Paste it directly in browser
3. If it doesn't load → image path is wrong!

**Solution 3: Check Image Size**
- Too large (>8MB) → WhatsApp won't show it
- Too small (<200x200) → May not display properly

**Solution 4: Verify HTTPS**
- WhatsApp requires HTTPS for images
- localhost won't work - must be deployed

### **Problem: Shows old/wrong image**

**Solution:** 
WhatsApp has cached the old preview
- Use different URL query: `?v=3`, `?v=4`, etc.
- Or wait for cache to expire (~7 days)

### **Problem: Works in browser but not WhatsApp**

**Cause:** 
Open Graph tags are specifically for social media, not browsers

**Fix:**
This is normal! The favicon (photoUrl) shows in browser tabs,
while the poster (posterUrl) shows in WhatsApp previews.

## 🎨 Example Working Setup

### **ballot-config.json:**
```json
{
  "usmanshareef": {
    "ward": [
      {
        "rowNumber": 1,
        "name": "കുനിയിൽ ഉസ്മാൻ ഷെരീഫ്",
        "photoUrl": "/usmanshareef.jpg",       ← Browser tab icon
        "posterUrl": "/usmanshareefPoster.jpg", ← WhatsApp preview!
        "symbolUrl": "/koni.png"
      }
    ]
  }
}
```

### **Result:**
- **Browser Tab**: Shows small `usmanshareef.jpg`
- **WhatsApp Preview**: Shows campaign poster `usmanshareefPoster.jpg`

## 📱 Best Practices

1. **Poster Image Should Be:**
   - High quality campaign poster
   - Clear candidate photo
   - Good text/logo placement
   - Professional looking

2. **File Naming:**
   - Use descriptive names: `usmanshareefPoster.jpg`
   - Keep them in `/public` folder

3. **Testing:**
   - Always test on real WhatsApp
   - Test on both Web and Mobile
   - Check different phone models

4. **Updates:**
   - When you change poster, change filename too
   - Or use query parameters to bust cache
   - Clear cache using Facebook debugger

## 🚀 Quick Test Command

After deployment, test your meta tags:
```bash
curl -I https://yourdomain.com/brandso
```

Look for these headers:
```
og:image: https://yourdomain.com/usmanshareefPoster.jpg
```

---

**Remember:** WhatsApp preview = posterUrl (like YouTube thumbnail!)
Browser favicon = photoUrl (small icon)
