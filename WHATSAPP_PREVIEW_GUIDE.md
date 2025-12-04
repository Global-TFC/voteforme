# WhatsApp Link Preview Setup Guide

## Current Status
✅ Open Graph metadata is configured correctly in `app/[slug]/page.tsx`
✅ The code automatically detects Vercel deployment URLs
✅ Uses candidate photos for Open Graph images

## For WhatsApp Link Previews to Work on Vercel

### Option 1: Automatic (Already implemented)
The code already uses `process.env.VERCEL_URL` which Vercel provides automatically.
This should work without any additional configuration.

### Option 2: Manual Configuration (Recommended for consistency)

1. **Add Environment Variable in Vercel Dashboard:**
   - Go to: https://vercel.com/dashboard
   - Select your project: `voteforme`
   - Navigate to: **Settings** → **Environment Variables**
   - Add new variable:
     - **Name**: `NEXT_PUBLIC_BASE_URL`
     - **Value**: `https://voteformee.vercel.app`
     - **Environments**: Check all (Production, Preview, Development)
   - Click **Save**

2. **Redeploy:**
   - Go to **Deployments** tab
   - Click **Redeploy** on the latest deployment
   - OR push a new commit to trigger automatic deployment

3. **Test the Link Preview:**
   
   **Method 1 - WhatsApp Direct Test:**
   - Open WhatsApp (Web or Mobile)
   - Paste: `https://voteformee.vercel.app/usmanshareef`
   - Wait for preview to load (may take a few seconds)

   **Method 2 - Facebook/Meta Debugger:**
   - Visit: https://developers.facebook.com/tools/debug/
   - Enter: `https://voteformee.vercel.app/usmanshareef`
   - Click "Debug" - This will show you what WhatsApp sees
   - Click "Scrape Again" if the image doesn't show

   **Method 3 - LinkedIn Post Inspector:**
   - Visit: https://www.linkedin.com/post-inspector/
   - Enter: `https://voteformee.vercel.app/usmanshareef`
   - This shows how social platforms see your link

4. **Clear WhatsApp Cache (if needed):**
   
   If the preview doesn't update:
   - Add a version parameter: `https://voteformee.vercel.app/usmanshareef?v=2`
   - Wait 24 hours for WhatsApp cache to expire
   - Use the Facebook debugger (Method 2) and click "Scrape Again"

## What's Being Shared

For each slug (e.g., `/usmanshareef`), the link preview will show:

- **Title**: "Vote for Brandso" (or the slug name)
- **Description**: "Vote for: [Candidate Names]. Interactive Electronic Voting Machine Ballot Unit."
- **Image**: The candidate's photo (from `photoUrl` in ballot-config.json)
- **URL**: The full URL to your ballot page

### Example URLs:
- `https://voteformee.vercel.app/brandso` → Shows Favas/Rabeeh photos
- `https://voteformee.vercel.app/usmanshareef` → Shows Usman Shareef photo

## Troubleshooting

### Image Not Showing on WhatsApp:

1. **Check Image URL is Accessible:**
   - Visit: `https://voteformee.vercel.app/usmanshareef.jpg`
   - Make sure the image loads

2. **Check Image Size:**
   - WhatsApp prefers images that are:
     - At least 200x200 pixels
     - Less than 5MB
     - Aspect ratio close to 1.91:1 (1200x630 is ideal)

3. **Check Open Graph Tags:**
   - View page source: Right-click → View Page Source
   - Search for: `og:image`
   - Verify the URL is: `https://voteformee.vercel.app/usmanshareef.jpg`

4. **Force WhatsApp to Refresh:**
   - Use Facebook Debugger (it shares the same cache as WhatsApp)
   - Click "Scrape Again" button
   - Then try sharing on WhatsApp again

## Technical Details

The metadata is generated in: `app/[slug]/page.tsx`

Key code:
```typescript
const baseUrl = getBaseUrl(); // Returns https://voteformee.vercel.app on Vercel
const ogImage = firstCandidate?.photoUrl 
  ? `${baseUrl}${firstCandidate.photoUrl}` 
  : `${baseUrl}/og-image.png`;
```

The `getBaseUrl()` function prioritizes:
1. `NEXT_PUBLIC_BASE_URL` (if set in Vercel)
2. `VERCEL_URL` (auto-provided by Vercel)
3. `http://localhost:3000` (for local development)
