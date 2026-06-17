# Disney Static Wait App - Better Ride Matching

Static Disney wait time app with a Vercel API proxy.

## What changed

- Pulls every attraction returned by Queue-Times for the selected park.
- Uses known exact pins where available.
- Adds approximate map pins for live attractions that are not yet manually mapped.
- Marks approximate pins clearly with an `Approx pin` badge.
- Keeps manual extras like shows, play areas, and character locations that may not have live wait data.

## Deploy

Upload these files to your repo root:

- `index.html`
- `vercel.json`
- `api/waits.js`
- `README.md`

Deploy to Vercel as a static project with the included serverless API function.
