#!/usr/bin/env node

// framer-auto-update.js
// Automated script to update Framer site colors from Last.fm

require('dotenv').config();
const apiFunction = require('./api/get-random-colors');
const fs = require('fs');
const path = require('path');

let currentColors = null;

const mockRes = {
    status: (code) => ({
        json: (data) => {
            if (code === 200) {
                currentColors = data;
                generateFramerFiles(data);
            } else {
                console.error('❌ Error:', data.error);
            }
        }
    }),
    json: (data) => {
        currentColors = data;
        generateFramerFiles(data);
    }
};

function generateFramerFiles(data) {
    console.log('\n🎨 NEW COLORS GENERATED!\n');
    console.log(`🎵 Song: "${data.song}" by ${data.artist}`);
    console.log(`🖼️  Album: ${data.albumArtUrl}\n`);
    
    // 1. Generate CSS file for Framer custom code
    const cssCode = `/* Auto-generated colors from "${data.song}" by ${data.artist} */
/* Generated on: ${new Date().toLocaleString()} */

:root {
  ${data.cssVariables}
}

/* Optional: Pre-defined color classes */
.color-primary { color: var(--color-primary); }
.bg-primary { background-color: var(--color-primary); }
.color-secondary { color: var(--color-secondary); }
.bg-secondary { background-color: var(--color-secondary); }
.color-accent { color: var(--color-accent); }
.bg-accent { background-color: var(--color-accent); }
.color-muted { color: var(--color-muted); }
.bg-muted { background-color: var(--color-muted); }`;

    fs.writeFileSync('framer-colors.css', cssCode);
    
    // 2. Generate JavaScript snippet for programmatic updates
    const jsCode = `// Auto-generated Framer color updater
// Song: "${data.song}" by ${data.artist}
// Generated: ${new Date().toLocaleString()}

// For use in Framer code components or override functions
export const colors = ${JSON.stringify(data.framerTokens, null, 2)};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
    ${data.colors.map((color, index) => {
        const names = ['primary', 'secondary', 'accent', 'muted'];
        return `    root.style.setProperty('--color-${names[index]}', '${color}');`;
    }).join('\n')}
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}`;

    fs.writeFileSync('framer-colors.js', jsCode);
    
    // 3. Generate README with instructions
    const readmeCode = `# 🎨 Your Latest Color Palette

**Song**: "${data.song}" by ${data.artist}  
**Generated**: ${new Date().toLocaleString()}  
**Album Art**: [View Image](${data.albumArtUrl})

## 🎨 Color Palette
- **Primary**: \`${data.colors[0]}\` (Main brand color, CTAs)
- **Secondary**: \`${data.colors[1]}\` (Dark backgrounds, text)  
- **Accent**: \`${data.colors[2]}\` (Highlights, buttons)
- **Muted**: \`${data.colors[3]}\` (Subtle elements, borders)

## 📋 How to Apply to Framer

### Method 1: Copy CSS Variables
1. Open your Framer project
2. Go to **Site Settings** → **General** → **Custom Code**
3. Copy the contents of \`framer-colors.css\` into the **\`<head>\`** section
4. Use \`var(--color-primary)\` etc. in your components

### Method 2: Use Color Tokens
Update your Framer color variables with these values:
\`\`\`
${Object.entries(data.framerTokens).map(([key, value]) => `${key}: ${value}`).join('\n')}
\`\`\`

### Method 3: Programmatic (Advanced)
Use the \`framer-colors.js\` file in your Framer code components.

---
🔄 Run \`npm run auto-update\` to generate new colors!`;

    fs.writeFileSync('LATEST-COLORS.md', readmeCode);
    
    // 4. Display summary
    console.log('📁 FILES GENERATED:');
    console.log('   ✅ framer-colors.css - Ready to paste into Framer custom CSS');
    console.log('   ✅ framer-colors.js - For programmatic use in code components'); 
    console.log('   ✅ LATEST-COLORS.md - Instructions and color reference');
    
    console.log('\n🎨 YOUR COLORS:');
    const colorNames = ['Primary', 'Secondary', 'Accent', 'Muted'];
    data.colors.forEach((color, index) => {
        console.log(`   ${colorNames[index]}: ${color}`);
    });
    
    console.log('\n🚀 NEXT STEPS:');
    console.log('   1. Open framer-colors.css');
    console.log('   2. Copy the CSS code');
    console.log('   3. Paste into Framer Site Settings → Custom Code → <head>');
    console.log('   4. Use var(--color-primary) etc. in your components');
    
    console.log('\n🔄 Generate new colors anytime with: npm run auto-update');
    console.log('\n' + '='.repeat(60) + '\n');
}

console.log('🎵 Generating automated color palette for your Framer site...');
apiFunction({}, mockRes);
