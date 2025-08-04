#!/bin/bash

echo "🚀 Setting up Vercel environment variables..."
echo ""

echo "Setting LASTFM_API_KEY..."
echo "6383f94116c25b98ce1652f5b46be095" | npx vercel env add LASTFM_API_KEY production

echo ""
echo "Setting LASTFM_USERNAME..."
echo "sadisntit" | npx vercel env add LASTFM_USERNAME production

echo ""
echo "✅ Environment variables set up!"
echo "🔄 Redeploying..."
npx vercel --prod

echo ""
echo "🎉 Your API should now be live!"
