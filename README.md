# Girlfriend's Day — A Cinematic Digital Love Letter

> A handcrafted, cinematic, story-driven website designed as a timeless digital love letter.
>
> Built using only **HTML5**, **CSS3**, and **Vanilla JavaScript**, the experience unfolds chapter by chapter through elegant typography, subtle motion, emotional storytelling, and carefully paced interactions.

---

# Table of Contents

1. Project Overview
2. Features
3. Folder Structure
4. Installation
5. Running Locally
6. GitHub Pages Deployment
7. Website Customization
8. Image Replacement Guide
9. Configuration System
10. Password Customization
11. Editing Text Content
12. Changing Theme Colors
13. Adding New Memories
14. Browser Compatibility
15. Mobile Testing Checklist
16. Performance Checklist
17. Asset Optimization Guide
18. Troubleshooting
19. Future Scalability
20. Credits
21. License
22. Development Philosophy

---

# Project Overview

This project is not intended to be a traditional website.

Instead, it has been designed as an interactive digital experience that gradually tells a personal story through carefully paced motion, elegant typography, cinematic layouts, and subtle visual effects.

Every section contributes to one continuous emotional journey rather than existing as isolated web pages.

The website is completely static and requires no backend services, making it suitable for hosting on GitHub Pages or any static web server.

The project has been intentionally designed around a single editable configuration file so that future customization can be completed without modifying the core application logic.

---

# Features

## Experience

- Premium loading sequence
- Elegant password entry
- Cinematic page transitions
- Story-driven scrolling
- Chapter-based presentation
- Interactive memory gallery
- Relationship timeline
- Animated handwritten letter
- Confession sequence
- Cinematic ending
- Responsive layout
- Mobile-first architecture

---

## Visual Design

- Luxury-inspired color palette
- Soft gradients
- Warm ambient lighting
- Glassmorphism used selectively
- Carefully balanced whitespace
- Large editorial typography
- Smooth visual rhythm
- Elegant shadows
- Layered depth effects

---

## Motion

- Fade reveals
- Blur transitions
- Parallax movement
- Scroll animations
- Staggered image loading
- Elegant hover interactions
- Animated progress indicator
- Premium micro-interactions
- Slow cinematic pacing

---

## Technical Features

- HTML5
- CSS3
- Vanilla JavaScript
- No frameworks
- No build tools
- GitHub Pages compatible
- Mobile-first
- Semantic HTML
- Accessibility-conscious structure
- Easy customization
- Configuration-driven content

---

# Folder Structure

```text
girlfriends-day/
│
├── index.html
├── style.css
├── script.js
├── config.js
├── README.md
│
├── assets/
│   ├── images/
│   ├── icons/
│   ├── fonts/
│   ├── textures/
│   └── videos/
│
└── docs/
```

### Root Files

| File | Purpose |
|------|---------|
| index.html | Website structure |
| style.css | Complete design system |
| script.js | Website functionality |
| config.js | All editable content |
| README.md | Project documentation |

---

### Assets Folder

The **assets** directory contains every visual resource used by the website.

Examples include:

- Hero photographs
- Gallery images
- Timeline images
- Backgrounds
- Icons
- Textures
- Fonts

Organizing assets by category keeps the project maintainable as the experience grows.

---

### Documentation Folder

The optional **docs** directory stores additional project documentation such as design notes, deployment instructions, and future expansion plans.

It is not required for the website to function but helps keep larger projects organized.

---

# Installation

This project requires no package manager, build process, or external dependencies.

## Step 1

Download or clone the repository.

```bash
git clone https://github.com/USERNAME/REPOSITORY.git
```

Or download the ZIP archive directly from GitHub and extract it.

---

## Step 2

Open the project folder.

You should see files similar to:

```text
index.html
style.css
script.js
config.js
README.md
assets/
```

---

## Step 3

Verify that all folders remain in their original locations.

Changing the folder hierarchy without updating file references may prevent images or other resources from loading correctly.

---

# Running Locally

Because the project is entirely static, it can be opened directly in a modern web browser.

## Method 1 (Recommended During Development)

Double-click:

```text
index.html
```

The browser will open the website.

---

## Method 2 (Recommended for Testing)

Use a lightweight local server.

Examples include:

- Visual Studio Code Live Server
- Python HTTP Server
- Any static web server

Python example:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

Running a local server more closely matches the behavior of GitHub Pages and is recommended when testing image paths, fonts, and future enhancements.

---

The following sections are provided in the next parts of this README:

- GitHub Pages deployment
- Configuration system
- Editing content
- Password customization
- Theme customization
- Performance guidance
- Troubleshooting
- Browser compatibility
- Credits
- License
- Development philosophy


# GitHub Pages Deployment Guide

This guide assumes you have **never used GitHub before**.

By the end of this section, your website will be publicly accessible on the internet.

---

## Step 1 — Create a GitHub Account

If you do not already have one:

1. Visit:

   https://github.com

2. Create a free account.

3. Verify your email address.

---

## Step 2 — Create a New Repository

After logging in:

1. Click the **+** icon in the top-right corner.
2. Select **New repository**.
3. Enter a repository name.

Example:

```text
girlfriends-day
```

Choose either:

- Public
- Private

Both support GitHub Pages (subject to your GitHub plan and current GitHub policies).

Leave the remaining options unchanged unless you already know you need them.

Click:

```text
Create Repository
```

---

## Step 3 — Upload the Project

Open your newly created repository.

Click:

```text
Add File
```

↓

```text
Upload Files
```

Drag the **entire project folder contents** into the upload area.

Do **not** upload the outer project folder itself.

The repository root should contain:

```text
index.html
style.css
script.js
config.js
README.md
assets/
```

When all files have finished uploading:

Click:

```text
Commit Changes
```

---

## Required Repository Structure

Your repository should look similar to:

```text
Repository
│
├── index.html
├── style.css
├── script.js
├── config.js
├── README.md
│
└── assets/
```

The file named **index.html** must remain in the repository root.

Do not place it inside another folder.

---

## Step 4 — Verify the Default Branch

Open:

```text
Repository → Branches
```

Ensure the primary branch is:

```text
main
```

If your default branch has another name, GitHub Pages can still work, but the instructions below assume **main**.

---

## Step 5 — Enable GitHub Pages

Open:

```text
Settings
```

↓

```text
Pages
```

Locate:

```text
Build and Deployment
```

Select:

```text
Deploy from a branch
```

For the branch choose:

```text
main
```

For the folder choose:

```text
/ (root)
```

Click:

```text
Save
```

GitHub will begin deploying your website automatically.

Deployment usually completes within a few minutes.

---

## Expected Website Address

After deployment finishes, your website will be available at:

```text
https://YOUR-USERNAME.github.io/REPOSITORY-NAME/
```

Example:

```text
https://janedoe.github.io/girlfriends-day/
```

GitHub will also display the live URL on the Pages settings page.

---

## Updating the Website

Every future update follows the same workflow.

1. Edit your project locally.

2. Save your changes.

3. Upload the modified files to the repository.

4. Commit the changes.

GitHub Pages will automatically rebuild the website.

No additional deployment steps are required.

Most updates appear within a few minutes.

---

# Common Deployment Mistakes

| Problem | Cause | Solution |
|---------|-------|----------|
| Website shows 404 | `index.html` is not in the repository root | Move `index.html` back to the root directory |
| CSS does not load | Incorrect file path | Verify the `<link>` reference in `index.html` |
| Images are missing | Wrong folder names or file names | Ensure image paths match exactly, including capitalization |
| Website is blank | JavaScript error | Open the browser developer console and check for errors |
| GitHub Pages is unavailable | Deployment still in progress | Wait a few minutes and refresh |
| Changes are not visible | Browser cache | Perform a hard refresh or clear the browser cache |
| Assets fail only online | Case-sensitive paths | Ensure filenames match exactly (e.g., `Hero.jpg` ≠ `hero.jpg`) |

---

# Browser Compatibility

The website is designed for all modern browsers.

| Browser | Supported |
|----------|-----------|
| Chrome | ✅ |
| Edge | ✅ |
| Firefox | ✅ |
| Safari | ✅ |
| Brave | ✅ |
| Opera | ✅ |

Older browsers that lack support for modern CSS features may display a simplified experience.

---

# Mobile Testing Checklist

Before sharing the website, verify the following on a real mobile device whenever possible.

## Layout

- [ ] No horizontal scrolling
- [ ] Content remains centered
- [ ] Images scale correctly
- [ ] Text remains readable
- [ ] Buttons are easy to tap

---

## Navigation

- [ ] Password input works
- [ ] Buttons respond correctly
- [ ] Smooth scrolling functions properly
- [ ] Gallery opens and closes correctly
- [ ] Timeline remains readable

---

## Performance

- [ ] Animations remain smooth
- [ ] No noticeable lag
- [ ] Images load correctly
- [ ] No overlapping sections
- [ ] No clipped text

---

# Performance Checklist

Review this list before publishing.

- [ ] Compress all images
- [ ] Remove unused assets
- [ ] Verify image dimensions
- [ ] Avoid duplicate files
- [ ] Test on mobile data
- [ ] Confirm all links work
- [ ] Check accessibility
- [ ] Test keyboard navigation
- [ ] Validate HTML
- [ ] Verify responsive layouts

---

# Asset Optimization Guide

Large media files are the most common cause of slow websites.

## Images

Recommended formats:

| Type | Format |
|------|--------|
| Photos | WebP |
| Transparent graphics | PNG |
| Icons | SVG |
| Decorative textures | WebP |

---

## Image Sizes

Suggested maximum widths:

| Usage | Width |
|--------|------:|
| Hero image | 1920 px |
| Gallery | 1400 px |
| Timeline | 1200 px |
| Backgrounds | 1920 px |

Resize images before adding them to the project.

---

## Compression

Use an image optimization tool before uploading assets.

Benefits include:

- Faster loading
- Reduced bandwidth
- Improved mobile performance
- Better GitHub Pages experience

Aim to keep individual images reasonably small while maintaining visual quality.


# Website Customization Guide

The project has been designed so that nearly all personalization can be completed without modifying the application's core logic.

The primary customization point is:

```text
config.js
```

Whenever possible, edit values in `config.js` instead of modifying `script.js` or `index.html`.

This approach keeps the project maintainable and makes future updates significantly easier.

---

# Image Replacement Guide

All images are stored inside the `assets/images/` directory.

Recommended organization:

```text
assets/
└── images/
    ├── hero/
    ├── gallery/
    ├── timeline/
    ├── backgrounds/
    └── placeholders/
```

## Replacing Hero Images

1. Open:

```text
assets/images/hero/
```

2. Replace the existing image with your own.

3. Keep the filename the same **or** update the corresponding image path in `config.js`.

---

## Replacing Gallery Photos

Open:

```text
assets/images/gallery/
```

Replace any existing images with your own photographs.

If you change filenames, update the gallery entries inside `config.js`.

---

## Replacing Timeline Photos

Timeline images are located in:

```text
assets/images/timeline/
```

Each timeline entry references its image through the configuration system.

---

## Replacing Background Images

Backgrounds are stored in:

```text
assets/images/backgrounds/
```

For the best visual quality:

- Use high-resolution images.
- Compress them before uploading.
- Prefer WebP for photographic content.

---

# Configuration System

The website uses a single configuration object stored in:

```text
config.js
```

This file acts as the central source of truth for all editable content.

Examples include:

- Names
- Dates
- Password
- Story chapters
- Quotes
- Timeline events
- Gallery items
- Theme colors
- Animation settings
- Future options

Keeping all editable values together minimizes the risk of accidental code changes.

---

# Changing the Password

The password is defined in `config.js`.

Example:

```javascript
password: {
    primary: "28 July 2026",
    acceptedFormats: [
        "28 July 2026",
        "28/07/2026",
        "28-07-2026",
        "28072026"
    ]
}
```

To change the password:

1. Open `config.js`.
2. Locate the password section.
3. Replace the values with your preferred password and accepted formats.
4. Save the file.
5. Refresh the website.

No additional code changes are required.

---

# Editing Website Text

All major text content is stored in `config.js`.

This includes:

- Names
- Headings
- Subheadings
- Chapter titles
- Paragraphs
- Quotes
- Letter content
- Confession text
- Ending message

After updating the text, save the file and reload the website.

---

# Changing Theme Colors

Theme colors are managed centrally.

Typical values include:

- Background
- Surface
- Accent
- Typography
- Shadows
- Borders
- Highlight colors

Changing these values updates the entire design consistently.

Avoid editing individual CSS rules unless you are intentionally redesigning the theme.

---

# Adding New Memories

Memory cards are generated from data stored in `config.js`.

Each memory typically contains:

| Property | Description |
|----------|-------------|
| Title | Short heading |
| Date | Memory date |
| Image | Image path |
| Caption | Description |
| Quote | Optional quote |
| Location | Optional location |

To add another memory:

1. Duplicate an existing memory object.
2. Update its values.
3. Save `config.js`.
4. Reload the website.

No HTML changes are necessary.

---

# Troubleshooting

## Images Do Not Appear

Possible causes:

- Incorrect filename
- Incorrect folder
- Wrong file extension
- Missing file

Verify that the image path in `config.js` matches the actual file exactly.

---

## Website Does Not Unlock

Check:

- Password spelling
- Accepted password formats
- Saved changes in `config.js`

---

## Layout Looks Incorrect

Ensure:

- All project files remain in their original locations.
- CSS and JavaScript files are loading correctly.
- The browser cache has been cleared after major updates.

---

## Animations Feel Slow

Future animation timing can be adjusted from the animation settings inside `config.js`.

Avoid modifying animation logic unless necessary.

---

## Changes Do Not Appear

Try the following:

1. Save all files.
2. Perform a hard refresh.
3. Clear the browser cache.
4. Confirm the latest files were uploaded to GitHub.

---

# Future Scalability

The project architecture is intentionally modular.

Future enhancements may include:

- Additional story chapters
- More timeline milestones
- Expanded gallery layouts
- Theme presets
- Multiple languages
- Dark mode
- Seasonal visual themes
- Additional ending sequences
- Progressive Web App support
- Offline functionality

Because the content is configuration-driven, expanding the project requires minimal structural changes.

---

# Credits

Created using:

- HTML5
- CSS3
- Vanilla JavaScript

Designed with a focus on:

- Accessibility
- Maintainability
- Performance
- Storytelling
- Responsive design

No external UI frameworks are required.

---

# License

This project is intended for personal and educational use.

You may modify and customize it for your own private use.

If you choose to publish or distribute a modified version, ensure that you have the rights to all assets used, including photographs, fonts, and icons.

---

# Development Philosophy

This project was built around one guiding principle:

> Technology should disappear into the background so that emotion remains at the center of the experience.

Every animation, transition, layout decision, and interaction is intended to support the narrative rather than distract from it.

Key principles include:

- Simplicity over excess
- Meaningful motion over decorative animation
- Editorial typography over visual clutter
- Reusable architecture over duplication
- Configuration-driven customization
- Accessibility by default
- Mobile-first responsive design
- Progressive enhancement
- Long-term maintainability
- Performance without sacrificing elegance

The goal is not simply to present information, but to create an experience that feels timeless, intentional, and deeply personal.

---

**End of README**

