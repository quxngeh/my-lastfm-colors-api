// api/get-random-colors.js

const fetch = require('node-fetch');
const ColorThief = require('colorthief');
const fs = require('fs');
const path = require('path');
const os = require('os');

// This is the main function Vercel will run
module.exports = async (req, res) => {
    try {
        // Your Last.fm username and API key from environment variables
        const API_KEY = process.env.LASTFM_API_KEY;
        const USERNAME = process.env.LASTFM_USERNAME || 'quxngg'; // Replace with your username

        if (!API_KEY) {
            throw new Error("Last.fm API key is not set.");
        }

        const toTimestamp = Math.floor(Date.now() / 1000);
        const fromTimestamp = toTimestamp - 31536000; // 1 year ago

        const initialUrl = `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USERNAME}&api_key=${API_KEY}&format=json&from=${fromTimestamp}&to=${toTimestamp}&limit=200`;

        const initialResponse = await fetch(initialUrl);
        const initialData = await initialResponse.json();

        if (!initialData.recenttracks) {
            return res.status(404).json({ error: "Could not find tracks for the user." });
        }

        const totalPages = parseInt(initialData.recenttracks['@attr'].totalPages);
        const randomPage = Math.floor(Math.random() * totalPages) + 1;

        const randomPageUrl = `${initialUrl}&page=${randomPage}`;
        const pageResponse = await fetch(randomPageUrl);
        const pageData = await pageResponse.json();

        const tracksOnPage = pageData.recenttracks.track;
        const randomTrack = tracksOnPage[Math.floor(Math.random() * tracksOnPage.length)];

        const albumArtUrl = randomTrack.image.find(img => img.size === 'extralarge')['#text'];

        if (!albumArtUrl) {
             return res.status(404).json({ error: "Album art not found for the selected track." });
        }

        // Download the image temporarily
        const imageResponse = await fetch(albumArtUrl);
        const imageBuffer = await imageResponse.buffer();
        
        // Create a temporary file
        const tempDir = os.tmpdir();
        const tempFilePath = path.join(tempDir, `album_${Date.now()}.jpg`);
        
        // Write the image to the temporary file
        fs.writeFileSync(tempFilePath, imageBuffer);
        
        try {
            // Extract 4 dominant colors using ColorThief
            const palette = await ColorThief.getPalette(tempFilePath, 4);
            
            // Convert RGB arrays to hex strings
            const colors = palette.map(rgb => {
                const [r, g, b] = rgb;
                return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
            });
            
            // Clean up the temporary file
            fs.unlinkSync(tempFilePath);

            // Generate CSS variables for Framer
            const cssVariables = colors.map((color, index) => {
                const names = ['primary', 'secondary', 'accent', 'muted'];
                return `--color-${names[index]}: ${color};`;
            }).join('\n  ');

            // Send the successful response! ✨
            res.status(200).json({
                artist: randomTrack.artist['#text'],
                song: randomTrack.name,
                albumArtUrl: albumArtUrl,
                colors: colors,
                cssVariables: cssVariables,
                framerTokens: {
                    primary: colors[0],
                    secondary: colors[1], 
                    accent: colors[2],
                    muted: colors[3]
                }
            });
        } catch (colorError) {
            // Clean up the temporary file in case of error
            if (fs.existsSync(tempFilePath)) {
                fs.unlinkSync(tempFilePath);
            }
            throw colorError;
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching the data.' });
    }
};
