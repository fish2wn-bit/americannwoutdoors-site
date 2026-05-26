# American NW Outdoors Website

This is a Vite + React + Tailwind website for American NW Outdoors.

## How to run locally

1. Install Node.js from https://nodejs.org
2. Open this folder in a terminal
3. Run:

```bash
npm install
npm run dev
```

## How to deploy on Vercel

1. Create a GitHub account.
2. Create a new repository named `americannwoutdoors-site`.
3. Upload all files from this folder to that repository.
4. Create a Vercel account.
5. In Vercel, choose **Add New Project**.
6. Import your GitHub repository.
7. Click **Deploy**.
8. In Vercel project settings, add your domain: `americannwoutdoors.com`.
9. Follow Vercel's DNS instructions in GoDaddy.

## Where to add photos

Create a folder named `public/images` and place your boat images there.
Then reference them in React like:

```jsx
<img src="/images/your-photo.jpg" alt="Boat setup" />
```

## Social links

Update the Facebook and Instagram links in `src/App.jsx` once you have the exact URLs.
