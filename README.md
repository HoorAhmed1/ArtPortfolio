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
  - 3 Creative bookmark displays (varied sizes, no cropping)
- **SEO Optimized**: Proper metadata for search engines
- **Interactive**: Clickable images with zoom functionality
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
   - Images will automatically display in the portfolio

2. **For Bookmarks**: 
   - Add your bookmark images to the `public/images/bookmarks/` folder
   - Currently displays bookmark1.png, bookmark2.png, and bookmark3.png

### Updating Social Media Links

The social media links are already configured for:
- Instagram: [@hourrahmed](https://instagram.com/hourrahmed)
- TikTok: [@hourahmed1](https://tiktok.com/@hourahmed1)

## Deployment on Vercel

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Portfolio ready for deployment"
   git push origin main
   ```

2. **Deploy on Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Sign up/Sign in with your GitHub account
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Your portfolio will be live** at `https://your-project-name.vercel.app`

## Current Portfolio Content

### Drawings (8 artworks):
- abwab_poem.png
- alne3am.png  
- dancer.png
- fish.png
- gold_pattern.png
- houses.png
- mattab.png
- v7.png

### Bookmarks (3 designs):
- bookmark2.png (displayed as Bookmark 1)
- bookmark1.png (displayed as Bookmark 2)
- bookmark3.png (displayed as Bookmark 3)

## Features Implemented

✅ **Responsive grid layout for drawings**  
✅ **Clickable images with zoom modal**  
✅ **Varied bookmark sizes (natural, no cropping)**  
✅ **Social media integration**  
✅ **Professional styling with Tailwind CSS**  
✅ **Mobile-friendly design**

## Project Structure

```
├── index.html                   # Main portfolio page (instant version)
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles
│   │   ├── layout.tsx           # App layout
│   │   └── page.tsx             # Next.js portfolio page
├── public/
│   └── images/
│       ├── drawings/            # 8 drawing files
│       └── bookmarks/           # 3 bookmark files
├── package.json                 # Dependencies and scripts
├── tailwind.config.ts           # Tailwind CSS configuration
└── README.md                    # This file
```

## Technologies Used

- **HTML5 & CSS3**: For the instant version
- **Tailwind CSS**: Utility-first CSS framework via CDN
- **JavaScript**: Interactive image modal functionality
- **Next.js 14**: React framework (advanced version)
- **TypeScript**: Type-safe JavaScript (advanced version)

## Support

If you need help with customization or deployment, feel free to reach out through your social media channels.

---

**Created for Hour Ahmed (By Hour)**  
Art Portfolio Website - 2025
