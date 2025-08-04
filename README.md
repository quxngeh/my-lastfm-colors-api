# 🎵 Last.fm to Framer Color Palette Generator

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyour-username%2Fmy-lastfm-colors-api)
[![Auto-Update Colors](https://github.com/your-username/my-lastfm-colors-api/actions/workflows/update-colors.yml/badge.svg)](https://github.com/your-username/my-lastfm-colors-api/actions/workflows/update-colors.yml)

Transform your music listening history into beautiful color palettes for your Framer website! This tool picks a random song from your Last.fm listening history (past year), extracts 4 dominant colors from its album artwork, and generates ready-to-use CSS variables and Framer color tokens.

**🤖 Fully automated** - Colors update daily via GitHub Actions without any manual intervention!

## ✨ Features

- 🎲 **Random Song Selection**: Picks from your entire Last.fm listening history (1 year back)
- 🎨 **Color Extraction**: Extracts 4 dominant colors from album artwork using advanced color analysis
- 🖥️ **Framer Ready**: Generates CSS variables and Framer design tokens
- 🌐 **API Endpoint**: Deploy as a Vercel function for programmatic access
- 🎯 **Visual Preview**: HTML preview page to see your colors before applying

## 🚀 Quick Start

### 1. Setup
```bash
npm install
```

### 2. Configure Environment
Update your `.env` file with your Last.fm credentials:
```env
LASTFM_API_KEY=your_api_key_here
LASTFM_USERNAME=your_lastfm_username
```

### 3. Generate Colors
```bash
# Get formatted output for Framer integration
npm run framer

# Or test the raw API response
npm test
```

## 📖 Usage Examples

### Example Output
```bash
🎨 COLORS EXTRACTED FROM YOUR MUSIC!

🎵 Song: "i don't know" by j-hope & HUH YUNJIN
🖼️  Album Art: https://lastfm.freetls.fastly.net/i/u/300x300/...

🎨 Color Palette:
   Primary: #3e3933
   Secondary: #bdada5  
   Accent: #3378b0
   Muted: #999c92

📋 FOR FRAMER INTEGRATION:

1️⃣ CSS Variables (paste in your site's custom CSS):
   :root {
     --color-primary: #3e3933;
     --color-secondary: #bdada5;
     --color-accent: #3378b0;
     --color-muted: #999c92;
   }

2️⃣ Framer Color Tokens:
   primary: #3e3933
   secondary: #bdada5
   accent: #3378b0
   muted: #999c92
```

## 🎨 Applying to Framer

### Method 1: CSS Variables
1. Go to your Framer project
2. Open **Site Settings** → **General** → **Custom Code**
3. Add the generated CSS variables to the `<head>` section:
```html
<style>
:root {
  --color-primary: #3e3933;
  --color-secondary: #bdada5;
  --color-accent: #3378b0;
  --color-muted: #999c92;
}
</style>
```
4. Use the variables in your components: `var(--color-primary)`

### Method 2: Design Tokens
1. Open the **Assets** panel in Framer
2. Go to **Colors**
3. Update your existing color tokens with the generated hex values
4. Apply the updated colors to your components

## 🌐 Deploy as API

Deploy to Vercel for programmatic access:

```bash
# Deploy to Vercel
vercel

# Or connect to your GitHub repo for auto-deployment
```

Once deployed, you can call your API:
```javascript
fetch('https://your-domain.vercel.app/api/get-random-colors')
  .then(response => response.json())
  .then(data => {
    console.log('New colors:', data.colors);
    // Apply to your Framer site programmatically
  });
```

## 📂 Files

- `api/get-random-colors.js` - Main API function for Vercel
- `apply-to-framer.js` - CLI script with Framer integration instructions
- `test-local.js` - Local testing script
- `preview.html` - Visual preview page (open in browser)

## 🛠️ Scripts

- `npm test` - Test API locally with raw JSON output
- `npm run framer` - Generate colors with Framer integration guide
- `npm run dev` - Same as test (development alias)

## 🎯 API Response Format

```json
{
  "artist": "Artist Name",
  "song": "Song Title", 
  "albumArtUrl": "https://...",
  "colors": ["#3e3933", "#bdada5", "#3378b0", "#999c92"],
  "cssVariables": "--color-primary: #3e3933;\n--color-secondary: #bdada5;...",
  "framerTokens": {
    "primary": "#3e3933",
    "secondary": "#bdada5", 
    "accent": "#3378b0",
    "muted": "#999c92"
  }
}
```

## 🎨 Color Meanings

- **Primary**: Most dominant/vibrant color - great for headings, CTAs
- **Secondary**: Complementary color - good for accents, highlights  
- **Accent**: Third most prominent - perfect for buttons, links
- **Muted**: Subtle tone - ideal for backgrounds, borders

## 🔧 Dependencies

- `node-fetch` - HTTP requests to Last.fm API
- `colorthief` - Color extraction from images
- `dotenv` - Environment variable management

## 🎵 Last.fm Setup

1. Get a free API key: https://www.last.fm/api/account/create
2. Add your username and API key to `.env`
3. Ensure you have listening history (scrobbles) in Last.fm

## 💡 Tips

- Run the script multiple times to explore different color palettes
- The tool looks back 1 year in your listening history
- Works best with albums that have colorful, high-contrast artwork
- Colors are extracted using advanced clustering algorithms for optimal results

## 🔄 Automation Ideas

- Set up a cron job to automatically update your site colors
- Create a webhook to trigger color updates from your CMS
- Build a simple interface for your clients to refresh colors on-demand

---

Built with ❤️ for music lovers and designers who want their websites to reflect their musical taste!
