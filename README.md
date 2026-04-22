# Personal Portfolio

A personal portfolio website built with **React** and **React Router**, deployable to **GitHub Pages**.

## Features

- **Home Page** — About Me, Research Interests, Personal Details, Profile Picture, Skills
- **Projects Page** — Displays projects with links to GitHub repositories
- **NavLink routing** between pages (using `HashRouter` for GitHub Pages compatibility)
- **Responsive CSS** styling

## Folder Structure

```
portfolio/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   └── Navbar.css
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Home.css
│   │   ├── Projects.js
│   │   └── Projects.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── .gitignore
└── README.md
```

## Setup

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Deployment (GitHub Pages)

1. Create a repo named `portfolio` on GitHub.
2. Update the `homepage` field in `package.json` with your GitHub username:
   ```json
   "homepage": "https://your-username.github.io/portfolio"
   ```
3. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "first commit"
   git branch -M main
   git remote add origin https://github.com/your-username/portfolio.git
   git push -u origin main
   ```
4. Deploy:
   ```bash
   npm run deploy
   ```
5. In your GitHub repo → **Settings → Pages**, select the `gh-pages` branch.

## Customize

- Replace placeholder text in `src/pages/Home.js` with your personal info.
- Replace the profile image URL with your own picture.
- Add your projects to the `projects` array in `src/pages/Projects.js`.
