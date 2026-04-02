# Littlefoot Customization Quick Reference

## 🎨 Change Button Color

**File:** `littlefoot-custom.css` (lines 23-25)

```css
.littlefoot__button {
  background-color: #YOUR-COLOR !important;
  color: #TEXT-COLOR !important;
  border: 2px solid #BORDER-COLOR !important;
}
```

**Popular Color Combinations:**
- **Blue**: `#3b82f6` / `#ffffff` / `#2563eb` (default)
- **Purple**: `#8b5cf6` / `#ffffff` / `#7c3aed`
- **Orange**: `#f97316` / `#ffffff` / `#ea580c`
- **Dark**: `#1f2937` / `#f9fafb` / `#111827`
- **Green**: `#10b981` / `#ffffff` / `#059669`
- **Red**: `#ef4444` / `#ffffff` / `#dc2626`

## 📏 Change Button Size

**File:** `littlefoot-custom.css` (line 14)

```css
.littlefoot__button {
  font-size: 0.9rem !important;  /* DEFAULT: 0.9rem */
}
```

**Size Guide:**
- **Tiny**: `0.7rem`
- **Small**: `0.8rem`
- **Default**: `0.9rem`
- **Large**: `1.0rem`
- **Extra Large**: `1.2rem`

## 🔢 Switch Between Numbers and Ellipses

**File:** `littlefoot-init.js` (line 50)

### For Numbers (default):
```javascript
buttonTemplate: '<button class="littlefoot__button" id="<% reference %>" title="See Footnote <% number %>" aria-label="Footnote <% number %>"><span class="littlefoot__button__content"><% number %></span></button>',
```

### For Ellipses:
```javascript
buttonTemplate: '<button class="littlefoot__button" id="<% reference %>" title="See Footnote" aria-label="Footnote"><span class="littlefoot__button__ellipsis">...</span></button>',
```

## ✦ Change Ellipses Symbol

**File:** `littlefoot-custom.css` (line 43)

```css
.littlefoot__button__ellipsis::before {
  content: '•••' !important;  /* Change this */
}
```

**Symbol Options:**
- `'•••'` - Bullets (default, bold)
- `'◆◆◆'` - Diamonds
- `'***'` - Asterisks
- `'†'` - Dagger
- `'‡'` - Double dagger
- `'▸'` - Triangle
- `'▴'` - Small triangle
- `'⁂'` - Asterism
- `'☞'` - Pointing hand
- `'✦'` - Star

## 🖱️ Click vs Hover Activation

**File:** `littlefoot-init.js` (line 35)

```javascript
activateOnHover: false,  // false = click, true = hover
```

- **false** - Click to open (recommended, mobile-friendly)
- **true** - Hover to open (desktop only)

## 🎯 Make Buttons Stand Out More

**File:** `littlefoot-custom.css`

### More Bold:
```css
.littlefoot__button {
  font-weight: 900 !important;  /* Change from 700 to 900 */
}
```

### Bigger Border:
```css
.littlefoot__button {
  border: 3px solid #2563eb !important;  /* Change from 2px to 3px */
}
```

### Add Shadow:
```css
.littlefoot__button {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3) !important;
}
```

## 🖼️ Use Custom Icon Instead of Text

**File:** `littlefoot-custom.css` (uncomment around line 195)

```css
.littlefoot__button__ellipsis::before {
  content: '' !important;
  display: inline-block;
  width: 16px;
  height: 16px;
  background-image: url('/content/files/footnote-icon.svg') !important;
  background-size: contain;
  background-repeat: no-repeat;
}
```

## 📱 Adjust Mobile Size

**File:** `littlefoot-custom.css` (lines 222-227)

```css
@media (max-width: 768px) {
  .littlefoot__button {
    font-size: 0.85rem !important;  /* Adjust this */
  }
}
```

## 🎭 Pre-Made Color Schemes

**File:** `littlefoot-custom.css` (lines 147-193)

Uncomment one of these sections to use preset colors:

- **Dark/Bold** (lines 147-157)
- **Purple** (lines 159-169)
- **Minimal Gray** (lines 171-181)
- **Warm Orange** (lines 183-193)

## 🔧 Common Issues

### Styles Not Showing
1. Hard refresh browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Check file path in Ghost header injection
3. Verify file uploaded successfully to Ghost

### Footnotes Not Working
1. Check browser console (F12) for errors
2. Verify littlefoot.js loaded from CDN
3. Check footnote syntax in your post

### Wrong Symbol Showing
1. Clear browser cache
2. Check both `littlefoot-init.js` (buttonTemplate) and `littlefoot-custom.css` (::before content)

## 📋 Installation Checklist

- [ ] Upload `littlefoot-custom.css` to Ghost
- [ ] Upload `littlefoot-init.js` to Ghost
- [ ] Add code injection to Ghost header (Settings → Code Injection)
- [ ] Choose color scheme
- [ ] Choose size
- [ ] Choose numbers vs ellipses vs custom symbol
- [ ] Test with a sample post
- [ ] Check on mobile device
- [ ] Clear cache and retest

## 🚀 File Locations for Ghost

After uploading to Ghost content files, use these paths:

```html
<link rel="stylesheet" href="/content/files/littlefoot-custom.css" />
<script src="/content/files/littlefoot-init.js" defer></script>
```

## 📚 Full Documentation

For detailed instructions, see **IMPLEMENTATION-GUIDE.md**

---

**Quick tip:** Start with the defaults, then customize one thing at a time!
