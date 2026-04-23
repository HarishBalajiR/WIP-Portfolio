# My Portfolio

A modern personal portfolio website created for myself using React, Vite, TypeScript, and Tailwind CSS. This project is designed to be easy to customize, run locally, and deploy online.

## Features

* Fast development with Vite
* Modern React + TypeScript setup
* Easy customization
* Ready for deployment

# Tech Stack

* React
* TypeScript
* Vite
* Tailwind CSS
* npm

# Getting Started

## 1. Clone the Repository

```bash
git clone https://github.com/HarishBalajiR/WIP-Portfolio.git
```

## 2. Open the Project Folder

```bash
cd WIP-Portfolio
```

---

# Install Dependencies

Run the following command:

```bash
npm install
```

This downloads all required packages listed in `package.json`.

---

# Start the Development Server

```bash
npm run dev
```

After running the command, Vite will provide a local development URL similar to:

```text
http://localhost:5173/
```

Open the link in your browser.

---

# Build for Production

To create an optimized production build:

```bash
npm run build
```

The final build files will be generated inside the `dist` folder.

---

# Preview Production Build

```bash
npm run preview
```

---

# Project Structure

```text
project-root/
│
├── public/           # Static assets
├── src/              # Main source code
│   ├── components/   # Reusable UI components
│   ├── pages/        # Page components
│   ├── assets/       # Images and media
│   ├── App.tsx       # Main app component
│   └── main.tsx      # Entry point
│
├── package.json      # Project dependencies and scripts
├── vite.config.ts    # Vite configuration
└── tailwind.config.ts
```

---

# Common Commands

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm install`     | Install dependencies     |
| `npm run dev`     | Start development server |
| `npm run build`   | Create production build  |
| `npm run preview` | Preview production build |

---


# Troubleshooting

## Node.js version issues

Make sure Node.js is installed.

Recommended version:

```text
Node.js 18+
```

Check version:

```bash
node -v
```

---

## Dependency issues

Delete `node_modules` and reinstall:

```bash
rm -rf node_modules
npm install
```

Windows PowerShell:

```powershell
Remove-Item -Recurse -Force node_modules
npm install
```

---

# License

This project is open source and available under the MIT License.
