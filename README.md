# JSON Beautifier

A lightweight, single-page web application for beautifying, minifying, and exploring JSON files — built with Node.js and Express.

## Live Demo

- 👉 **[JSON Beautifier](https://heikomayer.github.io/test/public/index.html)**
- 👉 **[Geolocation](https://heikomayer.github.io/test/public/geo.html)**
- 👉 **[Drama Page](https://heikomayer.github.io/test/public/drama.html)**

## Features

- **Drag & Drop** — Drop a `.json` file onto the drop zone to load it instantly
- **Paste Support** — Paste raw JSON text directly into the input area
- **Click to Browse** — Click the drop zone to open a file picker
- **Beautify** — Pretty-print JSON with 2-space indentation and syntax highlighting
- **Minify** — Compact JSON to a single line
- **Copy to Clipboard** — One-click copy with toast confirmation
- **Download** — Save the result as `beautified.json` or `minified.json`
- **Collapsible Tree View** — Explore JSON as an expandable/collapsible tree with type-colored values
- **Dark / Light Theme** — Toggle manually or auto-detect from OS preference; persisted in localStorage
- **JSON Validation** — Clear error banner with the exact parse error for invalid input
- **File Size Guard** — Rejects files larger than 10 MB to prevent browser freezing

## Tech Stack

| Layer    | Technology           |
|----------|----------------------|
| Server   | Node.js + Express    |
| Frontend | Vanilla HTML/CSS/JS  |
| Dev tool | nodemon              |

All JSON processing happens **client-side** — no data is uploaded to the server.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v16 or later

### Installation

```bash
git clone https://github.com/HeikoMayer/test.git
cd test
npm install
```

### Run

```bash
# Production
npm start

# Development (auto-restart on file changes)
npm run dev
```

Open **http://localhost:3000** in your browser.

## Project Structure

```
test/
├── server.js          # Express server — serves static files on port 3000
├── package.json       # Project metadata and scripts
└── public/
    ├── index.html     # JSON Beautifier — single-page application
    ├── drama.html     # Drama page — fetches content from an external service
    └── geo.html       # Geolocation — displays location data with an interactive UI
```

## License

ISC
