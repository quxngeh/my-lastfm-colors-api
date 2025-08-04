// api/latest-colors.js
// Simple endpoint that returns the latest generated colors

const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
    try {
        // Set CORS headers
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

        if (req.method === 'OPTIONS') {
            res.status(200).end();
            return;
        }

        // Try to read the latest generated colors file
        const colorsPath = path.join(process.cwd(), 'framer-colors.css');
        const readmePath = path.join(process.cwd(), 'LATEST-COLORS.md');
        
        let cssContent = '';
        let metadata = {};
        
        try {
            cssContent = fs.readFileSync(colorsPath, 'utf8');
            
            // Parse CSS to extract colors
            const colorMatches = cssContent.match(/--color-(\w+):\s*(#[a-fA-F0-9]{6});/g);
            const colors = {};
            
            if (colorMatches) {
                colorMatches.forEach(match => {
                    const [, name, color] = match.match(/--color-(\w+):\s*(#[a-fA-F0-9]{6});/);
                    colors[name] = color;
                });
            }
            
            // Try to extract song info from CSS comments
            const songMatch = cssContent.match(/\/\* Auto-generated colors from "([^"]+)" by ([^*]+) \*\//);
            if (songMatch) {
                metadata.song = songMatch[1];
                metadata.artist = songMatch[2];
            }
            
            // Try to extract generation time
            const timeMatch = cssContent.match(/\/\* Generated on: ([^*]+) \*\//);
            if (timeMatch) {
                metadata.generatedAt = timeMatch[1];
            }
            
            res.status(200).json({
                success: true,
                colors,
                metadata,
                css: cssContent,
                timestamp: new Date().toISOString()
            });
            
        } catch (fileError) {
            // If no colors file exists, generate new ones
            res.status(200).json({
                success: false,
                error: 'No colors generated yet. Colors are updated automatically once daily.',
                message: 'Check back later or trigger a manual update via GitHub Actions.',
                timestamp: new Date().toISOString()
            });
        }
        
    } catch (error) {
        console.error('Error in latest-colors endpoint:', error);
        res.status(500).json({
            success: false,
            error: 'Internal server error',
            timestamp: new Date().toISOString()
        });
    }
};
