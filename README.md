# Littlefoot Footnotes - Custom Styling for infodumpsterfire.com

Custom implementation of [Littlefoot](https://littlefoot.js.org/) footnotes for Ghost blogs with enhanced styling: **bolder**, **larger**, and **more colorful** footnote indicators.

## 🎯 What This Does

Transforms thin, hard-to-see ellipses (`...`) or standard footnote numbers into bold, eye-catching footnote buttons with:
- ✨ Custom colors (multiple presets included)
- 📏 Larger, more readable sizes
- 💪 Bold, thick typography
- 🎨 Hover effects and animations
- 📱 Mobile-responsive design
- ♿ Accessibility improvements

## 📁 Files Included

| File | Purpose |
|------|---------|
| `littlefoot-custom.css` | Custom styling (colors, sizes, boldness) |
| `littlefoot-init.js` | JavaScript configuration and initialization |
| `ghost-header-injection.html` | Code snippet for Ghost header |
| `IMPLEMENTATION-GUIDE.md` | Detailed setup instructions |
| `QUICK-REFERENCE.md` | Quick customization cheat sheet |

## 🚀 Quick Start

### 1. Upload Files to Ghost

Upload `littlefoot-custom.css` and `littlefoot-init.js` to your Ghost content files.

### 2. Add to Ghost Header

Go to **Settings** → **Code Injection** → **Site Header** and paste:

```html
<!-- Littlefoot Core -->
<link rel="stylesheet" href="https://unpkg.com/littlefoot/dist/littlefoot.css" />
<script src="https://unpkg.com/littlefoot/dist/littlefoot.js" defer></script>

<!-- Custom Styling -->
<link rel="stylesheet" href="/content/files/littlefoot-custom.css" />
<script src="/content/files/littlefoot-init.js" defer></script>
```

### 3. Use Footnotes in Posts

Write standard Markdown footnotes:

```markdown
This is a sentence with a footnote.[^1]

[^1]: This is the footnote content.
```

That's it! Littlefoot will automatically convert them into beautiful popovers.

## 🎨 Customization Options

### Change Colors
Edit `littlefoot-custom.css` - 5 color presets included:
- **Blue** (default)
- **Purple**
- **Orange**
- **Dark**
- **Minimal Gray**

### Change Size
Adjust `font-size` in CSS - presets from tiny (0.7rem) to extra large (1.2rem)

### Numbers vs Ellipses vs Custom Symbols
Edit `littlefoot-init.js` buttonTemplate or CSS `::before` content

### Use Custom Icons
Uncomment the icon section in CSS and provide your SVG path

See **QUICK-REFERENCE.md** for copy-paste examples of all customizations.

## 📖 Documentation

- **[IMPLEMENTATION-GUIDE.md](IMPLEMENTATION-GUIDE.md)** - Complete setup guide with troubleshooting
- **[QUICK-REFERENCE.md](QUICK-REFERENCE.md)** - Fast customization cheat sheet
- **[ghost-header-injection.html](ghost-header-injection.html)** - Ready-to-use code snippets

## 🌟 Features

### Before vs After

**Before (Default Littlefoot):**
- Thin, barely visible `...` ellipses
- Small, easy to miss
- Plain styling

**After (This Custom Version):**
- Bold, thick bullet points `•••` or numbers
- Larger, prominent buttons
- Colorful with hover effects
- Better mobile support
- Improved accessibility

### What's Different from Standard Littlefoot?

✅ **900-weight** bold typography (vs 400 default)
✅ **Bullet points** (`•••`) instead of thin periods (`...`)
✅ **Colored backgrounds** with borders (vs plain text)
✅ **Hover animations** with shadow effects
✅ **Larger font sizes** (0.9rem vs 0.7rem default)
✅ **Mobile-responsive** with specific breakpoints
✅ **Dark mode support** built-in
✅ **5 color presets** ready to use
✅ **Custom icon support** with CSS

## 🛠️ Browser Support

Works in all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This custom implementation is provided as-is for use with [Littlefoot](https://github.com/goblindegook/littlefoot).

Littlefoot itself is licensed under MIT License by [@goblindegook](https://github.com/goblindegook).

## 🤝 Contributing

Feel free to fork and customize for your own Ghost blog! If you create improvements:
1. Test thoroughly on your Ghost site
2. Document your changes
3. Share your customizations

## 🆘 Support

**Issues?**
1. Check **IMPLEMENTATION-GUIDE.md** troubleshooting section
2. Verify file paths in Ghost header injection
3. Check browser console for errors
4. Ensure Littlefoot CDN loaded successfully

**Questions?**
- Review **QUICK-REFERENCE.md** for common tweaks
- Check [Littlefoot documentation](https://littlefoot.js.org)
- Inspect element to debug CSS issues

## 🎯 Tested With

- **Ghost**: 5.x
- **Littlefoot**: 4.x
- **Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile**: iOS Safari, Chrome Mobile, Samsung Internet

---

Made with ❤️ for [infodumpsterfire.com](https://infodumpsterfire.com)

**Ready to make your footnotes pop?** → Start with **IMPLEMENTATION-GUIDE.md**
