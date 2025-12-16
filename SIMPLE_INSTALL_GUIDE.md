# ⚡ SUPER SIMPLE INSTALL GUIDE

## 🎯 Installation (3 Steps)

### STEP 1: Copy the Code

Open this file: **`ghost-site-header-INLINE.html`**

Press `Ctrl+A` (select all), then `Ctrl+C` (copy)

---

### STEP 2: Paste in Ghost

1. Go to your Ghost Admin panel
2. Click **Settings** (left sidebar)
3. Click **Code Injection**
4. Find the box labeled **"Site Header"**
5. Click inside the box
6. Press `Ctrl+V` (paste)
7. Click **Save** (top right)

**Done!** Every post on your site now has custom footnotes.

---

### STEP 3: Test It!

Create a new post and write this:

```
This is a sentence with a footnote.[^1]

Another sentence with a second footnote.[^2]

[^1]: This is the first footnote content!
[^2]: This is the second footnote with **bold text** and a [link](https://example.com).
```

Preview or publish the post. Click the footnote buttons to see the popover!

---

## 🎨 Customization (BEFORE You Paste)

### How to Change Colors

**Before you paste the code into Ghost**, open `ghost-site-header-INLINE.html` and find these lines (around line 37-39):

```css
background-color: #610317 !important;  /* Deep red/maroon */
color: #fbe8e8 !important;              /* Light pink/cream */
border: 2px solid #610317 !important;   /* Matching border */
```

**Change the color codes:**

Replace `#610317` with any color you want:
- `#3b82f6` = Blue
- `#8b5cf6` = Purple
- `#f97316` = Orange
- `#10b981` = Green
- Or use any hex color code from [coolors.co](https://coolors.co)

Replace `#fbe8e8` with the text color you want.

**Then paste the edited code into Ghost.**

---

### How to Change Hover Color

Find this line (around line 52):

```css
background-color: #ab0528 !important;  /* Lighter red on hover */
```

Change `#ab0528` to any color for the hover effect.

---

### How to Use Symbols Instead of Numbers

Find this line (around line 194):

```javascript
buttonTemplate: '<button class="littlefoot__button" id="<% reference %>" title="See Footnote <% number %>" aria-label="Footnote <% number %>"><span class="littlefoot__button__content"><% number %></span></button>',
```

**For ellipses (•••):** Comment out that line and uncomment the line below it:

```javascript
// buttonTemplate: '<button class="littlefoot__button" id="<% reference %>" title="See Footnote <% number %>" aria-label="Footnote <% number %>"><span class="littlefoot__button__content"><% number %></span></button>',

buttonTemplate: '<button class="littlefoot__button" id="<% reference %>" title="See Footnote" aria-label="Footnote"><span class="littlefoot__button__ellipsis">...</span></button>',
```

The CSS will automatically convert `...` to thick bullets `•••`

---

### How to Change the Symbol

Find this line (around line 75):

```css
content: '•••' !important;  /* Thick bullets instead of ... */
```

**Replace `•••` with any symbol:**
- `'†'` = Dagger
- `'◆◆◆'` = Diamonds
- `'▸'` = Triangle
- `'*'` = Asterisk
- `'⁂'` = Asterism

---

### How to Change Size

Find this line (around line 28):

```css
font-size: 0.9rem !important;
```

**Change the number:**
- `0.7rem` = Tiny
- `0.8rem` = Small
- `0.9rem` = Medium (current)
- `1.0rem` = Large
- `1.2rem` = Extra Large

---

## 📝 How to Use Footnotes in Your Posts

### Option 1: Markdown (Easiest - Recommended!)

Just write in the Ghost editor normally:

```markdown
This is my text with a footnote.[^1]

Another paragraph with another footnote.[^note]

[^1]: This is the footnote content.
[^note]: You can use words instead of numbers for the reference.
```

**That's it!** Littlefoot automatically finds and converts them.

---

### Option 2: HTML (If Markdown Doesn't Work)

In an HTML card in Ghost, write:

```html
<p>This is text with a footnote.<sup id="fnref:1"><a href="#fn:1">1</a></sup></p>

<div class="footnotes">
  <ol>
    <li id="fn:1">
      This is the footnote content.
      <a href="#fnref:1">↩</a>
    </li>
  </ol>
</div>
```

---

## ❓ Common Questions

### Q: Do I need to add code to every post?
**A:** NO! You paste the code ONCE into Site Header (global settings). It applies to all posts automatically.

### Q: How do I change colors for just ONE post?
**A:** Don't use Site Header. Instead, paste the code into that specific post's "Post Header" (in post settings). Edit the colors in that copy.

### Q: Can I use different symbols on different posts?
**A:** Yes, same as above - paste the code into each post's "Post Header" and customize each one separately. But most people use the same style site-wide.

### Q: Will this slow down my site?
**A:** No! The JavaScript is deferred (loads after the page), and the CSS is minimal.

### Q: What if I want to remove it later?
**A:** Just delete the code from Site Header in Ghost settings. All footnotes will go back to normal links.

---

## 🎨 Quick Color Reference

Your current colors:
- **Dark version:** `#610317` background, `#fbe8e8` text, `#ab0528` hover
- **Light version:** Use `ghost-site-header-INLINE-LIGHT.html` instead

Popular color combos:
- **Blue:** `#3b82f6` background, `#ffffff` text, `#2563eb` hover
- **Purple:** `#8b5cf6` background, `#ffffff` text, `#7c3aed` hover
- **Green:** `#10b981` background, `#ffffff` text, `#059669` hover
- **Dark:** `#1f2937` background, `#f9fafb` text, `#111827` hover

---

## ✅ Checklist

- [ ] Copy code from `ghost-site-header-INLINE.html`
- [ ] (Optional) Edit colors and symbols in the code
- [ ] Paste into Ghost Settings → Code Injection → Site Header
- [ ] Click Save
- [ ] Create a test post with footnotes
- [ ] Preview and click the footnote buttons
- [ ] It works! 🎉

---

**Need help?** Check the full documentation in `IMPLEMENTATION-GUIDE.md`
