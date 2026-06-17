# Disney Static Wait App with Vercel Proxy

Upload all files in this folder to the root of a GitHub repo and deploy to Vercel.

This version uses `/api/waits` as a tiny Vercel serverless proxy so the browser does not call Queue-Times directly.

Vercel settings:
- Framework Preset: Other
- Build Command: blank
- Output Directory: blank or `.`

Files required:
- index.html
- api/waits.js
- vercel.json
