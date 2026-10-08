## Frontend app for Gott snack radio

Next.js (Pages Router) site for the Gott snack podcast/radio show.

### Getting started

```bash
npm install
cp .env.example .env.local   # fill in the YouTube values
npm run dev
```

### Environment variables

| Name | Description |
| --- | --- |
| `YOUTUBE_API_KEY` | YouTube Data API v3 key, used by `/api/youtube-latest` |
| `YOUTUBE_CHANNEL_ID` | Channel ID (starts with `UC`) whose latest upload is shown on the start page |

### Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript check |
