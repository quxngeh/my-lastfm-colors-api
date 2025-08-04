#!/usr/bin/env node

// apply-to-framer.js
// Script to fetch colors and provide instructions for Framer integration

require('dotenv').config();
const apiFunction = require('./api/get-random-colors');

// Mock request and response objects
const mockReq = {};
let result = null;

const mockRes = {
    status: (code) => ({
        json: (data) => {
            if (code === 200) {
                result = data;
                displayFramerInstructions(data);
            } else {
                console.error('❌ Error:', data.error);
            }
        }
    }),
    json: (data) => {
        result = data;
        displayFramerInstructions(data);
    }
};

function displayFramerInstructions(data) {
    console.log('\n🎨 COLORS EXTRACTED FROM YOUR MUSIC!\n');
    console.log(`🎵 Song: "${data.song}" by ${data.artist}`);
    console.log(`🖼️  Album Art: ${data.albumArtUrl}\n`);
    
    console.log('🎨 Color Palette:');
    const colorNames = ['Primary', 'Secondary', 'Accent', 'Muted'];
    data.colors.forEach((color, index) => {
        console.log(`   ${colorNames[index]}: ${color}`);
    });
    
    console.log('\n📋 FOR FRAMER INTEGRATION:\n');
    
    console.log('1️⃣ CSS Variables (paste in your site\'s custom CSS):');
    console.log('   ─────────────────────────────────────────────────');
    console.log('   :root {');
    console.log(`     ${data.cssVariables.replace(/\n  /g, '\n     ')}`);
    console.log('   }');
    
    console.log('\n2️⃣ Framer Color Tokens (use in your design system):');
    console.log('   ──────────────────────────────────────────────────');
    Object.entries(data.framerTokens).forEach(([key, value]) => {
        console.log(`   ${key}: ${value}`);
    });
    
    console.log('\n3️⃣ How to apply in Framer:');
    console.log('   ─────────────────────────');
    console.log('   • Go to your Framer project');
    console.log('   • Open the Assets panel');
    console.log('   • Update your color variables with the values above');
    console.log('   • Or add the CSS variables to your site\'s custom CSS');
    
    console.log('\n🔄 Run this script again to get a new random color palette!');
    console.log('   npm run framer\n');
}

console.log('🎵 Generating color palette from your Last.fm history...\n');
apiFunction(mockReq, mockRes);
