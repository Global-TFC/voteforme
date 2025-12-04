# Meta Tags Verification

## What Next.js Generates for WhatsApp

When you visit `https://voteformee.vercel.app/usmanshareef`, Next.js automatically generates these meta tags:

### Required Open Graph Tags (for WhatsApp):

```html
<!-- Basic OG Tags -->
<meta property="og:title" content="Vote for Usmanshareef" />
<meta property="og:description" content="Vote for: കുനിയിൽ ഉസ്മാൻ ഷെരീഫ്. Interactive Electronic Voting Machine Ballot Unit." />
<meta property="og:url" content="https://voteformee.vercel.app/usmanshareef" />
<meta property="og:site_name" content="Vote for Me" />
<meta property="og:locale" content="en_US" />
<meta property="og:type" content="website" />

<!-- OG Image Tags -->
<meta property="og:image" content="https://voteformee.vercel.app/usmanshareef.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:type" content="image/jpeg" />
<meta property="og:image:alt" content="Vote for Usmanshareef" />

<!-- Twitter Card (also used by some platforms) -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Vote for Usmanshareef" />
<meta name="twitter:description" content="Vote for: കുനിയിൽ ഉസ്മാൻ ഷെരീഫ്. Interactive Electronic Voting Machine Ballot Unit." />
<meta name="twitter:image" content="https://voteformee.vercel.app/usmanshareef.jpg" />

<!-- Favicon -->
<link rel="icon" href="/usmanshareef.jpg" type="image/jpeg" />
<link rel="apple-touch-icon" href="/usmanshareef.jpg" type="image/jpeg" />
```

## How It Works

The metadata is configured in: `app/[slug]/page.tsx`

```typescript
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const config = configs[slug];
  const firstCandidate = config.ward?.[0] || config.block?.[0] || config.district?.[0];
  const baseUrl = getBaseUrl(); // https://voteformee.vercel.app
  
  const ogImage = firstCandidate?.photoUrl
    ? `${baseUrl}${firstCandidate.photoUrl}`
    : `${baseUrl}/og-image.png`;

  return {
    title: `Vote for ${slug}`,
    description: `Vote for: ${candidateNames}...`,
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${slug}`,
      siteName: "Vote for Me",
      images: [{
        url: ogImage,              // ✅ Absolute URL
        width: 1200,              // ✅ WhatsApp recommended
        height: 630,              // ✅ WhatsApp recommended
        alt: title,
        type: 'image/jpeg',       // ✅ Proper MIME type
      }],
      locale: "en_US",
      type: "website",
    },
  };
}
```

## Image Requirements for WhatsApp

Your images are already configured correctly:

✅ **Absolute URLs**: `https://voteformee.vercel.app/usmanshareef.jpg`
✅ **Size**: 1200x630 pixels (recommended by Facebook/WhatsApp)
✅ **Aspect Ratio**: 1.91:1 (perfect for link previews)
✅ **Format**: JPEG/PNG (both supported)
✅ **MIME Type**: Properly specified (`image/jpeg` or `image/png`)

## Testing the Meta Tags

### Method 1: View Page Source
1. Visit: `https://voteformee.vercel.app/usmanshareef`
2. Right-click → "View Page Source"
3. Search for: `og:image`
4. You should see: `https://voteformee.vercel.app/usmanshareef.jpg`

### Method 2: Facebook Debugger (WhatsApp uses this)
1. Visit: https://developers.facebook.com/tools/debug/
2. Enter: `https://voteformee.vercel.app/usmanshareef`
3. Click "Debug"
4. You'll see all the OG tags and preview image

### Method 3: WhatsApp Direct
1. Open WhatsApp
2. Paste: `https://voteformee.vercel.app/usmanshareef`
3. Wait 2-3 seconds for preview to load
4. You should see the candidate's photo as the thumbnail

## Different Slugs Generate Different Meta Tags

### For `/brandso`:
```html
<meta property="og:title" content="Vote for Brandso" />
<meta property="og:description" content="Vote for: Name, Favas, Rabeeh..." />
<meta property="og:image" content="https://voteformee.vercel.app/favas.png" />
```

### For `/usmanshareef`:
```html
<meta property="og:title" content="Vote for Usmanshareef" />
<meta property="og:description" content="Vote for: കുനിയിൽ ഉസ്മാൻ ഷെരീഫ്..." />
<meta property="og:image" content="https://voteformee.vercel.app/usmanshareef.jpg" />
```

## Troubleshooting

### If WhatsApp doesn't show the image:

1. **Clear Cache**: Use Facebook Debugger and click "Scrape Again"
2. **Check Image Loads**: Visit the image URL directly
3. **Add Version**: `https://voteformee.vercel.app/usmanshareef?v=2`
4. **Wait**: WhatsApp cache can take up to 24 hours to refresh

### If meta tags don't appear in page source:

1. **Build for Production**: `npm run build && npm start`
2. **Check Deployment**: Verify on Vercel, not just localhost
3. **Hard Refresh**: Ctrl+Shift+R or Cmd+Shift+R

## Next.js Metadata API

Next.js **automatically converts** the Metadata API into HTML meta tags.

You don't need to manually write `<meta>` tags because:
- `openGraph.title` → `<meta property="og:title" />`
- `openGraph.description` → `<meta property="og:description" />`
- `openGraph.url` → `<meta property="og:url" />`
- `openGraph.images[0].url` → `<meta property="og:image" />`
- etc.

This is the modern Next.js way! 🚀
