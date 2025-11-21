# Littlefoot Footnotes - Custom Implementation Guide

## Overview

This guide will help you implement customized Littlefoot footnotes on your Ghost blog (infodumpsterfire.com) with improved styling: bolder, larger, and more colorful footnote indicators.

## What's Included

1. **littlefoot-custom.css** - Custom styling for footnotes (color, size, boldness)
2. **littlefoot-init.js** - JavaScript configuration for Littlefoot behavior
3. **ghost-header-injection.html** - Code to add to Ghost's code injection
4. This implementation guide

## Quick Start

### Option 1: Using Ghost Content Files (Recommended)

#### Step 1: Upload Custom Files to Ghost

1. Go to your Ghost Admin panel
2. Navigate to **Settings** → **Labs** → **Routes** or use the file upload feature
3. Upload these two files to your Ghost content directory:
   - `littlefoot-custom.css`
   - `littlefoot-init.js`
4. Note the URLs where they're accessible (usually `/content/files/filename`)

#### Step 2: Add Code Injection

1. In Ghost Admin, go to **Settings** → **Code Injection**
2. In the **Site Header** section, paste the following code:

```html
<!-- Littlefoot Core CSS -->
<link rel="stylesheet" href="https://unpkg.com/littlefoot/dist/littlefoot.css" />

<!-- Custom Littlefoot Styling -->
<link rel="stylesheet" href="/content/files/littlefoot-custom.css" />

<!-- Littlefoot Core JavaScript -->
<script src="https://unpkg.com/littlefoot/dist/littlefoot.js" defer></script>

<!-- Custom Littlefoot Initialization -->
<script src="/content/files/littlefoot-init.js" defer></script>
```

3. Click **Save**

### Option 2: Inline Code (No File Upload Required)

If you prefer not to upload files, you can include everything inline:

1. Go to **Settings** → **Code Injection** → **Site Header**
2. Copy the contents of `littlefoot-custom.css` into a `<style>` tag
3. Copy the contents of `littlefoot-init.js` into a `<script>` tag
4. See `ghost-header-injection.html` for the template

### Option 3: External CDN/GitHub

Host the files on GitHub Pages, Cloudflare, or another CDN and reference them:

```html
<link rel="stylesheet" href="https://your-cdn.com/littlefoot-custom.css" />
<script src="https://your-cdn.com/littlefoot-init.js" defer></script>
```

## Using Footnotes in Your Posts

### Standard Markdown Footnotes

In your Ghost posts, use standard Markdown footnote syntax:

```markdown
This is a sentence with a footnote.[^1]

Another sentence with another footnote.[^2]

[^1]: This is the first footnote content.
[^2]: This is the second footnote content.
```

### HTML Footnotes (Alternative)

You can also use HTML:

```html
<p>This is text with a footnote.<sup id="fnref:1"><a href="#fn:1">1</a></sup></p>

<div class="footnotes">
  <ol>
    <li id="fn:1">This is the footnote content. <a href="#fnref:1">↩</a></li>
  </ol>
</div>
```

Littlefoot will automatically convert these into interactive popovers!

## Customization Guide

### Changing Colors

Edit `littlefoot-custom.css` around lines 23-25:

```css
.littlefoot__button {
  background-color: #3b82f6 !important;  /* Change this color */
  color: #ffffff !important;              /* Change text color */
  border: 2px solid #2563eb !important;   /* Change border color */
}
```

**Color Scheme Presets Available:**
- **Blue** (default): `#3b82f6`
- **Dark/Bold**: Uncomment lines starting at ~147
- **Purple**: Uncomment lines starting at ~159
- **Minimal Gray**: Uncomment lines starting at ~171
- **Warm Orange**: Uncomment lines starting at ~183

### Changing Size

Edit `littlefoot-custom.css` around line 14:

```css
.littlefoot__button {
  font-size: 0.9rem !important;  /* Increase/decrease this value */
  padding: 0.15em 0.4em !important;  /* Adjust padding for spacing */
}
```

### Changing from Numbers to Ellipses

By default, the configuration uses numbered footnotes. To switch to ellipses:

Edit `littlefoot-init.js` around line 50 and replace the `buttonTemplate` with:

```javascript
buttonTemplate: '<button class="littlefoot__button" id="<% reference %>" title="See Footnote" aria-label="Footnote"><span class="littlefoot__button__ellipsis">...</span></button>',
```

The CSS includes special styling for ellipses that makes them **bold** using bullet points instead of thin periods.

### Making Ellipses Thicker/Bolder

The CSS automatically converts thin `...` to thicker `•••` (bullet points).

This is defined in `littlefoot-custom.css` around line 43:

```css
.littlefoot__button__ellipsis::before {
  content: '•••' !important;  /* Change to other symbols if desired */
  font-weight: 900 !important;
  letter-spacing: 0.1em !important;
}
```

**Alternative symbols you can use:**
- `'◆◆◆'` - Diamond shapes
- `'▸'` - Single triangle
- `'†'` - Dagger
- `'*'` - Asterisk
- `'⌃'` - Up caret

### Using Custom Icons/Images

To use custom icons instead of text:

1. Create or find an SVG icon
2. Upload it to Ghost content files
3. Edit `littlefoot-custom.css` and uncomment the "CUSTOM ICON/IMAGE SUPPORT" section (around line 195)
4. Replace the `background-image` URL with your icon path:

```css
.littlefoot__button__ellipsis::before {
  content: '' !important;
  display: inline-block;
  width: 16px;
  height: 16px;
  background-image: url('/content/files/your-icon.svg') !important;
  background-size: contain;
  background-repeat: no-repeat;
}
```

### Click vs Hover Activation

By default, footnotes activate on **click** (better for mobile).

To activate on **hover**, edit `littlefoot-init.js` line 35:

```javascript
activateOnHover: true,  // Change to true for hover activation
```

## Troubleshooting

### Footnotes Not Appearing

1. **Check browser console** for JavaScript errors
2. **Verify files are loaded**: In browser DevTools → Network tab, check that all CSS/JS files loaded successfully
3. **Check footnote syntax**: Ensure you're using proper Markdown or HTML footnote format
4. **Clear Ghost cache**: Go to Settings → Labs → Delete all content (or restart Ghost)

### Styling Not Applied

1. **Check CSS file path**: Ensure the `href` in your header injection matches where you uploaded the file
2. **Use `!important`**: Our CSS uses `!important` flags to override default Littlefoot styles
3. **Check browser cache**: Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
4. **Inspect element**: Right-click a footnote button and check computed styles

### Numbers Not Showing

If you want numbers but seeing ellipses (or vice versa):

1. Check the `buttonTemplate` in `littlefoot-init.js`
2. For numbers: Use `<% number %>` in the template
3. For ellipses: Use a static character or `...`

### Mobile Display Issues

The CSS includes responsive styles. If issues persist:

1. Check the media queries in `littlefoot-custom.css` (lines 218-240)
2. Adjust font sizes for mobile breakpoints
3. Test on different devices using browser DevTools device mode

## Testing Your Implementation

### Step 1: Create a Test Post

Create a new post with this content:

```markdown
# Footnote Test

This is a test sentence with a footnote.[^test]

Another sentence with a second footnote.[^test2]

[^test]: This is the first footnote. It should appear in a popup when clicked!

[^test2]: This is the second footnote with **bold text** and a [link](https://example.com).
```

### Step 2: Verify Appearance

1. Publish the post (or preview it)
2. Check that you see footnote indicators (numbers or symbols)
3. Click/hover on them to verify the popover appears
4. Check that styling (color, size, boldness) matches your preferences

### Step 3: Check Console

1. Open browser DevTools (F12)
2. Check the Console tab
3. You should see: `Littlefoot footnotes initialized successfully!`
4. No errors should appear

## Advanced Customization

### Adding Animation

Add to `littlefoot-custom.css`:

```css
.littlefoot__button {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}
```

### Changing Popover Position

Edit `littlefoot-init.js`:

```javascript
anchorParentSelector: 'article, .post-content, main, body',
```

Change this to match your theme's content container for better positioning.

### Analytics Tracking

The initialization script includes callbacks for tracking:

```javascript
activateCallback: function(popover, button) {
  // Add Google Analytics or other tracking
  if (typeof gtag !== 'undefined') {
    gtag('event', 'footnote_click', {
      footnote_id: button.dataset.footnoteId
    });
  }
},
```

## Reference Links

- **Littlefoot Official Docs**: https://littlefoot.js.org
- **Littlefoot GitHub**: https://github.com/goblindegook/littlefoot
- **Ghost Code Injection Guide**: https://ghost.org/help/code-injection/
- **Markdown Footnote Syntax**: https://www.markdownguide.org/extended-syntax/#footnotes

## Support & Updates

For issues or questions:
1. Check the Ghost theme compatibility
2. Verify Littlefoot version compatibility (this guide uses v4)
3. Review browser console errors
4. Check that all file paths are correct

## Color Reference

Current default color scheme:
- **Primary Button**: `#3b82f6` (Blue 500)
- **Hover State**: `#2563eb` (Blue 600)
- **Active State**: `#1d4ed8` (Blue 700)
- **Text Color**: `#ffffff` (White)

You can use any hex color code, RGB, or color name. Online tools like [Coolors](https://coolors.co) can help you create matching color schemes.

## Next Steps

1. ✅ Upload `littlefoot-custom.css` and `littlefoot-init.js` to Ghost
2. ✅ Add code injection snippet to Ghost header
3. ✅ Create a test post with footnotes
4. ✅ Customize colors and sizes to match your brand
5. ✅ Test on mobile and desktop
6. ✅ Deploy to production!

---

**Questions or need help?** Leave a comment on your blog or reach out to your development team!
