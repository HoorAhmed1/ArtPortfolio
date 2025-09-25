# By Hour - Art Portfolio

A modern, responsive art portfolio website for Hour Ahmed (By Hour) showcasing digital drawings and creative bookmarks.

## 🚀 Quick Start (No Installation Required)

**For immediate use**: Simply open `index.html` in your web browser. This version works instantly without any setup!

## Features

- **Responsive Design**: Works beautifully on all devices
- **Modern UI**: Clean, professional design with gradient backgrounds
- **Social Media Integration**: Direct links to Instagram and TikTok
- **Portfolio Sections**: 
  - 8 Drawing showcase slots
  - 5 Creative bookmark displays
- **SEO Optimized**: Proper metadata for search engines
- **Two Versions**: HTML (instant) and Next.js (advanced)

## Getting Started

### Option 1: Instant HTML Version (Recommended for Quick Setup)

1. **Open the portfolio**: Double-click `index.html` or right-click and "Open with" your web browser
2. **Add your artwork**: Replace the placeholder images with your own
3. **Deploy**: Upload the entire folder to any web hosting service

### Option 2: Advanced Next.js Version

#### Prerequisites

Make sure you have Node.js (version 18 or higher) installed on your computer.

### Installation

1. **Install Node.js** (if not already installed):
   - Download from [nodejs.org](https://nodejs.org/)
   - Choose the LTS version

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and visit:
   ```
   http://localhost:3000
   ```

## Customization

### Adding Your Artwork

1. **For Drawings**: 
   - Add your image files to the `public/images/drawings/` folder
   - Update the drawing placeholders in `src/app/page.tsx`

2. **For Bookmarks**: 
   - Add your bookmark images to the `public/images/bookmarks/` folder
   - Update the bookmark placeholders in `src/app/page.tsx`

### Updating Social Media Links

The social media links are already configured for:
- Instagram: [@hourrahmed](https://instagram.com/hourrahmed)
- TikTok: [@hourahmed1](https://tiktok.com/@hourahmed1)

## Deployment on Vercel

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Sign up/Sign in with your GitHub account
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Your portfolio will be live** at `https://your-project-name.vercel.app`

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles
│   │   ├── layout.tsx           # App layout
│   │   └── page.tsx             # Main portfolio page
├── public/                      # Static assets (add your images here)
├── package.json                 # Dependencies and scripts
├── tailwind.config.ts           # Tailwind CSS configuration
└── README.md                    # This file
```

## Technologies Used

- **Next.js 14**: React framework for production
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **React**: UI library

## Support

If you need help with customization or deployment, feel free to reach out through your social media channels.

---

**Created for Hour Ahmed (By Hour)**  
Portfolio Website - 2025
