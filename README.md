# Writer Portfolio

A modern, responsive portfolio website for showcasing writing work, genres, and professional profile details.

## Overview

This project is a React + Vite writer portfolio. It highlights writing experience, selected projects, genre-based collections, skills, and contact links in a polished single-page layout.

## Features

- Sticky top navigation with smooth section scrolling
- Light/Dark mode toggle with theme persistence (`localStorage`)
- Hero section with animated name underline + pencil motion
- Experience highlights and project showcase cards
- Genre exploration sections with cover images and external Medium links
- Contact section with Medium, LinkedIn, and Email actions
- Responsive design for desktop and mobile

## Tech Stack

- **Frontend:** React 18
- **Build Tool:** Vite 5
- **Styling:** Plain CSS (`src/styles.css`)

## Project Structure

```text
Writer Portfolio/
├─ assets/                 # Images used in cards/hero
├─ public/
│  ├─ favicon.svg
│  └─ Writer_resume.pdf    # Resume linked from navbar
├─ src/
│  ├─ App.jsx              # Main single-page portfolio UI
│  ├─ main.jsx             # React entry point
│  └─ styles.css           # Complete styling + animations
├─ index.html
├─ package.json
└─ vite.config.js
```

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm

### Installation

```bash
npm install
```

### Run in Development

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Customization Guide

- Update content and section text in `src/App.jsx`
- Update styling/theme colors in `src/styles.css`
- Replace images in `assets/` and update imports in `src/App.jsx`
- Replace resume file in `public/Writer_resume.pdf`

## Author

**Kartik Gupta**

- Medium: `https://medium.com/@kaartikgupta2`
- LinkedIn: `https://www.linkedin.com/in/kartik-gupta08/`
