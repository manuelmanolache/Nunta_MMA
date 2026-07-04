# 💍 Nunta MMA - Wedding Website

A beautiful, simple wedding website template featuring your photos and information.

## Features

✨ **What's Included:**
- 🏠 **Hero Section** - Beautiful intro photo with welcome message
- 💌 **Invitation** - Display your wedding invitation and details
- 📋 **RSVP Form** - Guests can confirm attendance and provide dietary info
- 👰 **About Us** - Your couple photo and love story
- 🖼️ **Photo Gallery** - Showcase your favorite moments
- 📞 **Contact** - Email and phone information
- 🎞️ **Footer** - Beautiful closing photo

## File Structure

```
Nunta_MMA/
├── index.html           # Main wedding webpage
├── css/
│   └── style.css       # All styling (colors, layout, responsive)
├── js/
│   └── script.js       # RSVP handling, interactions, animations
├── images/
│   ├── intro.jpg       # Hero section photo
│   ├── invitation.jpg  # Invitation photo
│   ├── couple.jpg      # About us photo
│   ├── photo1-6.jpg    # Gallery photos (add as many as you want)
│   └── lastpage.jpg    # Footer closing photo
└── README.md           # This file
```

## How to Use

### 1. **Add Your Photos**

Create an `images/` folder and add:
- `intro.jpg` - Your opening photo
- `invitation.jpg` - Your wedding invitation
- `couple.jpg` - You and your partner
- `photo1.jpg` through `photo6.jpg` - Gallery photos (or add more!)
- `lastpage.jpg` - Closing footer photo

### 2. **Update Wedding Details**

Open `js/script.js` and find this section:

```javascript
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('wedding-date').textContent = 'Saturday, July 4, 2026';
    document.getElementById('wedding-time').textContent = '6:00 PM';
    document.getElementById('wedding-location').textContent = 'Beautiful Venue, Romania';
});
```

Update with your actual details!

### 3. **Update Contact Information**

In `index.html`, find the contact section and update:

```html
<p><strong>Email:</strong> <a href="mailto:your-email@example.com">your-email@example.com</a></p>
<p><strong>Phone:</strong> <a href="tel:+40123456789">+40 123 456 789</a></p>
```

### 4. **Customize Colors (Optional)**

In `css/style.css`, modify these colors:

```css
:root {
    --primary-color: #c41e3a;      /* Main color (deep red) */
    --secondary-color: #ffd700;    /* Accent color (gold) */
    --dark-color: #2c3e50;         /* Dark accents */
    --light-color: #ecf0f1;        /* Light background */
}
```

### 5. **View Your Website**

Open `index.html` in your browser - that's it! 🎉

## Features Explained

### RSVP Form
- Guests enter their name, email, phone
- Confirm attendance (Yes/No/Maybe)
- Specify number of guests
- List dietary restrictions
- Add special messages
- ✅ Responses are saved locally (requires backend to email)

### Responsive Design
- Works beautifully on desktop, tablet, and mobile
- Photos scale properly on all devices
- Navigation is easy on small screens

### Interactive Elements
- Smooth scrolling between sections
- Hover effects on photos and buttons
- Fade-in animations as you scroll
- Form validation

## Deploy Your Website

### Free Option 1: GitHub Pages
```bash
git add .
git commit -m "Add wedding website"
git push origin main
```

Then go to **Settings → Pages** and enable GitHub Pages.

### Free Option 2: Netlify
- Drag and drop your folder to [Netlify.com](https://netlify.com)
- Get a free URL instantly!

### Free Option 3: Vercel
- Connect your GitHub repo to [Vercel.com](https://vercel.com)
- Auto-deploys on every push!

## Customization Tips

### Add More Gallery Photos
In `index.html`, add more items to the gallery grid:

```html
<div class="gallery-item">
    <img src="images/photo7.jpg" alt="Our Moment 7">
</div>
```

### Change Fonts
In `css/style.css`, modify:

```css
body {
    font-family: 'Georgia', serif;  /* Change this */
}
```

Options: `'Garamond'`, `'Times New Roman'`, `'Arial'`, etc.

### Add More Sections
Copy an existing section and customize it. Keep the structure consistent!

## RSVP Data

Guest RSVP responses are stored in your browser's local storage. To view them:

1. Open browser DevTools (F12 or Right-click → Inspect)
2. Go to **Console** tab
3. Type: `printRSVPResponses()`
4. See all responses in a table!

**Note:** For production, set up a backend to:
- Store responses in a database
- Send confirmation emails
- Export guest list

## Troubleshooting

### Photos not showing?
- ✅ Check file names match exactly (case-sensitive!)
- ✅ Ensure image files are in the `images/` folder
- ✅ Try JPG, PNG, or WebP formats

### Form not working?
- ✅ All required fields must be filled
- ✅ Email must be valid format
- ✅ Check browser console for errors (F12)

### Website looks broken on mobile?
- ✅ Refresh page (Ctrl+F5)
- ✅ Check image sizes aren't too large
- ✅ All CSS is responsive, should work fine!

## Next Steps

1. ✅ Create `images/` folder
2. ✅ Upload your photos
3. ✅ Update wedding date, time, location
4. ✅ Add your contact email
5. ✅ Customize colors if desired
6. ✅ Deploy to GitHub Pages/Netlify/Vercel
7. ✅ Share the link with guests!

## Support

Need help? Check the code comments in:
- `index.html` - Structure and sections
- `css/style.css` - All styling explained
- `js/script.js` - JavaScript functions documented

Happy wedding planning! 💕

---

*Made with ❤️ for your special day*