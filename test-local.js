// test-local.js
// Test the API function locally before deploying

require('dotenv').config();
const apiFunction = require('./api/get-random-colors');

// Mock request and response objects
const mockReq = {};
const mockRes = {
    status: (code) => ({
        json: (data) => {
            console.log(`Status: ${code}`);
            console.log('Response:', JSON.stringify(data, null, 2));
        }
    }),
    json: (data) => {
        console.log('Response:', JSON.stringify(data, null, 2));
    }
};

console.log('🎵 Fetching random song from your Last.fm history...\n');

// Run the API function
apiFunction(mockReq, mockRes);
