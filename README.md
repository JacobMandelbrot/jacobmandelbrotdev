# Portfolio Website

A modern, minimalist portfolio website showcasing game programming and VR development projects.

## Features

- **Modern/Minimalist Design** with blue/tech color scheme
- **Three-tab Navigation**: About Me, Resume, Projects
- **8 Project Showcases**: 5 Game Projects + 3 VR Projects
- **Dynamic Project Loading** from JSON file
- **Responsive Video Embeds** on project detail pages
- **Easy to Customize** - just edit JSON and replace placeholders

## Getting Started

### Viewing Locally

Simply open `index.html` in your web browser. The site works without a server for local viewing.

For the best experience (especially for JSON loading), use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## Customization Guide

### 1. Update About Me Section

Edit `index.html` (lines ~48-75):

- Replace `YN` initials in the profile placeholder
- Update the bio text
- Change contact links (GitHub, LinkedIn, Email)
- Add your profile photo: replace the `<div class="profile-placeholder">` with:
  ```html
  <img src="assets/images/profile.jpg" alt="Your Name" class="profile-photo">
  ```

### 2. Add Your Resume

1. Save your resume PDF as `assets/resume/resume.pdf`
2. Edit `index.html` (line ~82)
3. Uncomment the iframe line:
   ```html
   <iframe src="assets/resume/resume.pdf" class="resume-embed"></iframe>
   ```
4. Comment out or delete the placeholder div

### 3. Update Projects

**Easy Method - Edit JSON:**

Edit `data/projects.json` to add, remove, or modify projects:

```json
{
  "id": "your-project-id",
  "title": "Your Project Title",
  "category": "game",  // or "vr"
  "thumbnail": "assets/gifs/your-project.gif",
  "shortDescription": "Brief description for the card",
  "detailPage": "projects/your-project.html",
  "videoUrl": "https://www.youtube.com/embed/YOUR_VIDEO_ID",
  "techStack": ["Unity", "C#", "Your Tech"],
  "detailedDescription": "Full description...",
  "githubUrl": "https://github.com/...",
  "demoUrl": "https://..."
}
```

**Replace Placeholder GIFs:**

1. Add your project GIFs to `assets/gifs/`
2. Update the `thumbnail` path in `projects.json`
3. Recommended size: 800x450px (16:9 aspect ratio)

**Update Project Detail Pages:**

Each project has an HTML file in `projects/` folder:
- Update the title, description, video URL, tech stack
- Change GitHub and demo links
- Add your YouTube video ID to the iframe src

### 4. Customize Colors

Edit `css/styles.css` (lines 15-26) to change the color scheme:

```css
:root {
    --primary-blue: #2563eb;      /* Main blue color */
    --secondary-purple: #7c3aed;   /* Accent purple */
    --secondary-teal: #0d9488;     /* Accent teal */
    /* ... */
}
```

### 5. Change Fonts

The site uses Google Fonts (Inter). To change:

1. Edit `css/styles.css` line 8 to import different fonts
2. Update `--font-family` on line 30

## File Structure

```
PortfolioWebsite/
├── index.html              # Main page
├── css/
│   └── styles.css         # All styles
├── js/
│   └── main.js            # Tab navigation & project loading
├── assets/
│   ├── images/            # Profile photos, etc.
│   ├── gifs/              # Project thumbnails
│   └── resume/            # Your resume PDF
├── projects/
│   ├── game1.html         # Individual project pages
│   ├── game2.html
│   └── ...
└── data/
    └── projects.json      # Project data
```

## Deployment

### GitHub Pages

1. Create a new GitHub repository
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```
3. Go to repository Settings > Pages
4. Set Source to "main" branch, root folder
5. Your site will be live at `https://yourusername.github.io/portfolio/`

### Custom Domain (Optional)

1. Add a file named `CNAME` to the root with your domain:
   ```
   yourdomain.com
   ```
2. Configure your domain's DNS settings to point to GitHub Pages

## Browser Support

- Chrome, Firefox, Safari, Edge (latest versions)
- Desktop-optimized (mobile responsive features coming in future update)

## Tips

- Keep GIF file sizes under 2-5MB for faster loading
- Use YouTube embeds instead of hosting large video files
- Test navigation between pages before deploying
- Update meta tags in HTML files for better SEO

## Future Enhancements

Planned features for future updates:
- Mobile responsive design
- Dark mode toggle
- Project filtering (show only Games or VR)
- Smooth scroll animations
- Contact form

## Support

For issues or questions, refer to the development plan in `DEVELOPMENT_PLAN.md`

---

Built with simple HTML, CSS, and JavaScript - no frameworks required!
