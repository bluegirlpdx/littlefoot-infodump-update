# Installation Guide

## Quick Install (5 minutes)

### Step 1: Choose Your Version

**UNIFIED Toggle Version** ⭐ **Recommended**
- Install once, toggle citations per-post
- Most flexible option
- File: `UNIFIED Toggle Version - Install Once Use Everywhere.html`

**SIMPLIFIED**
- Popups only, no citations list
- File: `SIMPLIFIED Styling littlefoot_Site Header Code_2025-12-27.html`

**ALTERNATIVE with CITATIONS**
- Always shows full bibliography
- File: `ALTERNATIVE SIMPLIFIED w CITATIONS LIST.html`

---

### Step 2: Install in Ghost

1. Open your chosen file
2. **Copy all the code** (Ctrl+A, Ctrl+C)
3. Go to **Ghost Admin** → **Settings** → **Code Injection**
4. Paste into **Site Header** field
5. Click **Save**

Done! Littlefoot is now installed on your entire site.

---

### Step 3: Write Footnotes

In your Ghost post editor:

1. Add a **Markdown** card (type `/markdown`)
2. Write footnotes using this syntax:

```markdown
This is a sentence with a footnote.[^1]

Another sentence.[^2]

[^1]: This is the first footnote content!
[^2]: This is the second footnote.
```

3. Publish your post
4. Footnotes will automatically appear as clickable popup buttons

---

## Per-Post Citations List (UNIFIED Version Only)

To show the full bibliography at the bottom of a specific post:

1. Edit the post in Ghost
2. **Post Settings** (gear icon) → **Code Injection** → **Post Header**
3. Add this line:
   ```html
   <script>document.documentElement.classList.add('show-citations-list');</script>
   ```
4. Save

That post will now show both popups AND a full citations list at the bottom.

---

## Troubleshooting

**Buttons are tiny:**
- Edit the file before pasting
- Line 34: Change `1.1rem` to `1.5rem`

**Popup text is small:**
- Edit the file before pasting
- Line 104: Change `1.1rem` to `1.3rem`

**Site freezes or lags:**
- Check for JavaScript conflicts in your theme
- Try disabling browser extensions
- Check browser console for errors

**Popups don't work:**
- Verify you're using a Markdown card (not a code block)
- Check that footnote definitions exist in the same Markdown card
- Look for errors in browser console (F12)

**Citations list not showing (UNIFIED version):**
- Verify script is in **Post Header**, not Site Header
- Check class name: `show-citations-list` (with hyphens)
- View page source to confirm class added to `<html>` tag

---

## Need Help?

See **README.md** for full documentation, customization options, and detailed troubleshooting.
