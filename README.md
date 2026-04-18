# HNG Frontend Wizards - Stage 1b: Profile Card

A responsive, accessible profile card component built with semantic HTML, vanilla CSS, and JavaScript.

## Features

✨ **Semantic HTML** - Uses proper HTML5 elements (`<article>`, `<figure>`, `<nav>`, `<section>`)

♿ **Accessibility First**
- Meaningful alt text on images
- WCAG AA color contrast compliance
- Keyboard-navigable links
- ARIA labels for better screen reader support
- aria-live for dynamic time updates

📱 **Fully Responsive**
- Desktop (1024px+): Two-column layout
- Tablet (768px): Single column with flex
- Mobile (480px): Compact, touch-friendly
- Extra small (320px): Optimized for small screens

🎯 **Fully Testable**
- All elements have unique `data-testid` attributes
- Easy to target for automated testing

## Project Structure

```
hng-task-stage1b/
├── index.html       (Semantic HTML with all testids)
├── styles.css       (Responsive design)
├── script.js        (Time updates)
└── README.md        (This file)
```

## Getting Started

### Requirements
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies needed

### Running Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/John124code/hng-task-stage1b.git
   cd hng-task-stage1b
   ```

2. **Open in browser**
   ```bash
   # On macOS
   open index.html

   # On Windows (PowerShell)
   start index.html

   # Or manually: Right-click index.html → Open with → Browser
   ```

3. Done! The profile card will load instantly.

## Features Explained

### Current Time Display
- Shows current epoch time in milliseconds
- Updates every 500ms automatically
- Announces changes to screen readers via `aria-live="polite"`

### Avatar Image
- Lazy loaded for performance
- Circular design with border
- Meaningful alt text for accessibility

### Social Links
- Opens in new tab with security attributes (`rel="noopener noreferrer"`)
- Keyboard accessible with visible focus states
- Meets 44x44px touch target minimum

### Hobbies & Dislikes
- Semantic list structure
- Easy to read and scannable
- Responsive display

## Accessibility Highlights

✅ **WCAG AA Compliant**
- Color contrast: 7:1+ for primary text
- Interactive elements: 44x44px minimum
- Keyboard navigation: Full support

✅ **Screen Reader Support**
- Semantic HTML structure
- ARIA labels on all interactive elements
- Live regions announce time updates

✅ **Keyboard Navigation**
- Tab key: Navigate through links
- Enter/Space: Activate links
- Focus indicators: Visible outline on all interactive elements

## Responsive Breakpoints

| Breakpoint | Layout |
|------------|--------|
| 1024px+ | Two-column (avatar left, info right) |
| 768px - 1023px | Single column, centered |
| 480px - 767px | Mobile optimized |
| Below 320px | Extra small screens |

## Testable Elements

All elements include `data-testid` for automated testing:

- `test-profile-card` - Root article
- `test-user-name` - User name
- `test-user-bio` - Biography
- `test-user-time` - Current time (milliseconds)
- `test-user-avatar` - Profile image
- `test-user-social-links` - Social links container
- `test-user-social-twitter` - Twitter link
- `test-user-social-github` - GitHub link
- `test-user-social-linkedin` - LinkedIn link
- `test-user-hobbies` - Hobbies list
- `test-user-dislikes` - Dislikes list

## Example Usage

```html
<!-- Access element in tests -->
<div data-testid="test-user-name">Jane Doe</div>

<!-- JavaScript -->
const nameElement = document.querySelector('[data-testid="test-user-name"]');
console.log(nameElement.textContent); // "Jane Doe"
```

## Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Zero external dependencies
- ~5KB total (HTML + CSS + JS)
- No build step required
- Uses lazy loading for images
- CSS Grid and Flexbox for efficient layouts

## Deployment

Deploy to your favorite hosting platform:

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Drag & drop the folder on netlify.com
# Or use Netlify CLI
npm install -g netlify-cli
netlify deploy --prod --dir=.
```

### GitHub Pages
```bash
# Enable GitHub Pages in repo settings
# Push to main branch
git push origin main
```

## Customization

### Change Profile Information
Edit `index.html` and update:
- Name inside `<h1>`
- Bio inside `<p>`
- Avatar image `src`
- Social links `href` values
- Hobbies and dislikes lists

### Adjust Colors
Edit `styles.css`:
- Primary color: `#667eea` (appears in links, borders)
- Text colors: `#1a1a1a` (dark), `#666` (medium), `#999` (light)
- Background: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`

### Modify Responsive Breakpoints
Edit media queries in `styles.css`:
```css
@media (max-width: 768px) { ... }
@media (max-width: 480px) { ... }
@media (max-width: 320px) { ... }
```

## Acceptance Criteria (Stage 1b)

✅ All required testids present and discoverable  
✅ Semantic HTML with accessibility  
✅ Current time in milliseconds (Date.now())  
✅ Avatar with meaningful alt text  
✅ Social links in new tab with security attributes  
✅ Hobbies and dislikes as distinct lists  
✅ Keyboard navigation fully functional  
✅ Responsive at all breakpoints (320px, 480px, 768px, 1024px+)  
✅ WCAG AA color contrast compliance  
✅ No console errors  

## Author

Built for HNG Frontend Wizards - Stage 1b Challenge

## License

MIT License - Free to use and modify

---

**Need help?** Check the HTML comments in `index.html` or review the CSS organization in `styles.css`.

**Want to test?** Open the HTML in any browser - no server needed!
