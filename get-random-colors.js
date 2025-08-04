// api/get-random-colors.js

const fetch = require('node-fetch');
const Vibrant = require('node-vibrant');

// This is the main function Vercel will run
module.exports = async (req, res) => {
    try {
        // Your Last.fm username and API key from environment variables
        const API_KEY = process.env.LASTFM_API_KEY;
        const USERNAME = 'YOUR_LASTFM_USERNAME'; // Replace with your username

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

        const palette = await Vibrant.from(albumArtUrl).getPalette();
        const colors = [
            palette.Vibrant?.hex,
            palette.LightVibrant?.hex,
            palette.DarkVibrant?.hex,
            palette.Muted?.hex,
        ].filter(Boolean); // Removes any nulls

        // Send the successful response! ✨
        res.status(200).json({
            artist: randomTrack.artist['#text'],
            song: randomTrack.name,
            albumArtUrl: albumArtUrl,
            colors: colors
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching the data.' });
    }
};
