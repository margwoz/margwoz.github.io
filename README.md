# Margaret Wozniak Portfolio

A responsive, static portfolio built with HTML, CSS, and vanilla JavaScript.

## Included
- `index.html` — homepage and project-card structure
- `css/style.css` — shared styles, responsive layout, and motion
- `js/main.js` — mobile navigation and scroll-reveal animation
- `assets/images/` — add your original project screenshots and portrait here
- `assets/documents/resume.pdf` — add your resume PDF here
- `projects/` — planned location for detailed project pages

## Run locally
### Option 1: VS Code Live Server
1. Extract this folder.
2. Open the `margaret-portfolio` folder in Visual Studio Code.
3. Install the **Live Server** extension if you do not already have it.
4. Right-click `index.html` and select **Open with Live Server**.

### Option 2: Python local server
Open a terminal in this folder and run:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000 in your browser. If your system uses `python3`, run `python3 -m http.server 8000`.

## Before publishing
1. Replace `YOUR_EMAIL@example.com` with the email address you want to publish.
2. Replace the placeholder LinkedIn and GitHub links with your profile URLs.
3. Add `assets/documents/resume.pdf`.
4. Add original project images in `assets/images/` and update the project image markup if desired.
5. Verify all project descriptions, experience details, and dates.
6. Implement detailed project pages and update the links when those pages are created.
7. Add a hosted form endpoint before enabling a real contact form. GitHub Pages cannot process form submissions by itself.

## Publish with GitHub Pages
Create a GitHub repository, upload these files, and configure **Settings → Pages** to publish from the branch and folder containing `index.html`. Test the generated URL before connecting a custom domain.
