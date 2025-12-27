# Littlefoot Footnotes - Custom Implementation for infodumpsterfire.com

Custom implementation of [Littlefoot.js](https://littlefoot.js.org/) footnotes for Ghost blogs with **bold, colorful, larger** footnote indicators in brand colors.

---

## 🎯 What This Does

Transforms standard Ghost footnote links into beautiful **popup footnotes** with:
- ✨ **Brand colors**: Maroon (#610317) buttons with light pink (#fbe8e8) text
- 📏 **Larger, readable buttons** (not tiny default ellipses)
- 💪 **Bold typography** (900 weight)
- 🎨 **Hover effects** with color changes (#ab0528)
- 📱 **Mobile-responsive**
- 💡 **Optional citations list** at bottom (toggle per-post)

---

## 📁 Repository Structure

```
littlefoot-infodump-update/
├── UNIFIED Toggle Version - Install Once Use Everywhere.html  ⭐ RECOMMENDED
├── SIMPLIFIED Styling littlefoot_Site Header Code_2025-12-27.html
├── ALTERNATIVE SIMPLIFIED w CITATIONS LIST.html
├── README.md
├── archive/          (old versions, for reference only)
└── demos/            (demo/test files)
```

---

## 🚀 Quick Start

### Choose Your Version

**Option 1: UNIFIED Toggle Version** ⭐ **RECOMMENDED**
- Install **once** in Site Header
- Default: Clean layout (no citations list)
- Toggle citations list per-post with one line of code
- Most flexible!

**Option 2: SIMPLIFIED**
- Always hides citations list at bottom
- Popups only
- Clean layout for all posts

**Option 3: ALTERNATIVE with CITATIONS LIST**
- Always shows full citations/bibliography at bottom
- Good for academic/research-heavy blogs

---

## 📝 Installation Instructions

### UNIFIED Toggle Version (Recommended)

#### Step 1: Install in Site Header (One Time Only)

1. Open **`UNIFIED Toggle Version - Install Once Use Everywhere.html`**
2. Copy the **entire** file contents
3. Go to Ghost Admin → **Settings** → **Code Injection** → **Site Header**
4. Paste the code
5. Click **Save**

Done! This applies to all posts.

#### Step 2: Use Default Behavior (Most Posts)

By default, all posts will have:
- ✅ Footnote popup buttons (click to see content)
- ✅ Clean layout (no citations list at bottom)

Just write your footnotes in Markdown:

```markdown
This is a sentence with a footnote.[^1]

Another sentence with a second footnote.[^2]

[^1]: This is the first footnote content!
[^2]: This is the second footnote with **bold text** and a [link](https://example.com).
```

#### Step 3: Enable Citations List (Optional, Per-Post)

For research/academic posts where you want a full bibliography at the bottom:

1. Edit the post in Ghost
2. Post Settings (gear icon) → **Code Injection** → **Post Header**
3. Add this **single line**:
   ```html
   <script>document.documentElement.classList.add('show-citations-list');</script>
   ```
4. Save the post

That post will now show:
- ✅ Footnote popup buttons
- ✅ Full citations list at bottom with styled back arrows (↩)

---

## 🎨 Features

### Footnote Buttons
- **Bold numbered buttons** (1, 2, 3...)
- **Maroon background** (#610317)
- **Light pink text** (#fbe8e8)
- **Hover effect**: Changes to #ab0528 with lift animation
- **Responsive sizing**: Larger on desktop, optimized for mobile

### Popup Windows
- **Large, readable text** (1.1rem)
- Clean white background with subtle shadow
- Supports **bold text**, *italics*, and [links](https://example.com)
- Automatically positioned near the button

### Citations List (Optional)
- Styled bibliography section at bottom
- Brand-colored back arrows (↩) to jump back to text
- Proper spacing and typography
- Only visible when toggled on

---

## 🔧 Customization

### Make Buttons Larger

Edit these lines before pasting into Ghost:

**For buttons:**
- Line 34: Change `font-size: 1.1rem` to `1.5rem`

**For popup text:**
- Line 104: Change `font-size: 1.1rem` to `1.3rem`

### Change Colors

Find and replace these hex codes:
- `#610317` = Maroon (button background)
- `#fbe8e8` = Light pink (button text)
- `#ab0528` = Hover red (hover state)

---

## 📚 Version Guide

### When to Use Each Version

**UNIFIED Toggle Version** ⭐
- ✅ You want flexibility
- ✅ Mix of casual posts (no citations) and research posts (with citations)
- ✅ Don't want to swap code in Site Header
- ✅ Want to decide per-post

**SIMPLIFIED**
- ✅ You never want citations lists visible
- ✅ Clean, minimal layout always
- ✅ Popups are sufficient

**ALTERNATIVE with CITATIONS LIST**
- ✅ You always want full bibliography visible
- ✅ Academic/research-focused blog
- ✅ Readers need to see all references

---

## 🛠️ Troubleshooting

### Buttons are too small
Edit font-size values (see Customization section above)

### Browser freezes or site slows down
- Check for conflicting JavaScript in your Ghost theme
- Try disabling browser extensions
- Check browser console for errors

### Popups don't show content
- Verify footnote markdown syntax is correct
- Check that footnote definitions exist at bottom of Markdown card
- Inspect browser console for JavaScript errors

### Citations list not showing (UNIFIED version)
- Verify you added the toggle script to **Post Header** (not Site Header)
- Check spelling: `show-citations-list` (with hyphens)
- View page source to confirm class was added to `<html>` tag

### Styling doesn't match brand colors
- Your Ghost theme's CSS may have higher specificity
- Try the AGGRESSIVE STYLING version in `/archive/` folder
- Inspect element to see which CSS rules are winning

---

## 📂 Archive Folder

The `/archive/` folder contains earlier development versions:
- Early inline implementations
- Diagnostic versions
- Alternative color schemes
- Standalone CSS/JS files

These are kept for reference but are **not recommended** for new installations. Use the three main versions at the repository root instead.

---

## 🎯 Tested With

- **Ghost CMS**: 5.x
- **Littlefoot.js**: 4.0.0
- **Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile**: iOS Safari, Chrome Mobile

---

## 📝 Writing Footnotes in Ghost

### Use a Markdown Card

1. In Ghost editor, add a **Markdown** card (type `/markdown`)
2. Write your content with footnote syntax:

```markdown
Main text with footnote.[^1]

[^1]: Footnote content here.
```

3. Ghost will render the footnotes and Littlefoot will make them into popups

### Important Notes

- ⚠️ Do NOT write footnotes inside a **Code block** - they won't work
- ✅ DO use a **Markdown card** for proper rendering
- Footnote definitions must be in the same Markdown card as the references

---

## 💡 Tips for Best Results

### For Popup-Only Posts (No Citations List)
- Use short, concise footnotes (1-3 sentences)
- Popups work best for quick asides or clarifications
- Keep links short and relevant

### For Posts with Citations List
- Longer, detailed footnotes work well
- Full bibliographic references
- Academic sources with URLs
- Good for research posts, deep dives, or essays with many sources

### Mobile Considerations
- Buttons automatically resize for mobile (1rem vs 1.1rem)
- Popups constrain to 90vw on mobile screens
- Touch-friendly button sizing

---

## 🤝 Contributing

This is a custom implementation for infodumpsterfire.com. Feel free to fork and adapt for your own Ghost blog!

---

## 📄 License

Custom implementation provided as-is.

[Littlefoot.js](https://github.com/goblindegook/littlefoot) is licensed under MIT License by [@goblindegook](https://github.com/goblindegook).

---

## 🔗 Links

- **Live site**: [infodumpsterfire.com](https://infodumpsterfire.com)
- **Littlefoot.js**: [littlefoot.js.org](https://littlefoot.js.org/)
- **Ghost CMS**: [ghost.org](https://ghost.org/)

---

**Ready to install?** → Open **UNIFIED Toggle Version - Install Once Use Everywhere.html** and follow the Quick Start guide above!
