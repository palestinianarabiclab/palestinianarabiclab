# AdSense and SEO Setup

This project is now prepared as a free public learning site with ad placements and SEO pages.

## Before Applying to AdSense

1. Publish the site on the final domain.
2. Update every canonical URL in the HTML files from:
   `https://palestinian-arabic-lab.vercel.app/`
   to the final domain.
3. Update `robots.txt` and `sitemap.xml` with the final domain.
4. Keep `privacy.html` and `terms.html` published and linked.
5. Add more useful article-style pages over time. AdSense is more likely to approve a site with real educational content, not only an app interface.

## Ad Placement Strategy

Use ads only in calm content areas:

- Below the top hero or app intro.
- Between lesson/article sections.
- At the end of free content pages.

Avoid ads:

- Inside answer choices or practice controls.
- Inside booking forms.
- In the teacher dashboard.
- Near buttons in a way that could cause accidental clicks.

## When You Have an AdSense Publisher ID

Replace the placeholder `.ad-slot` blocks with AdSense units, then update the Content Security Policy in `index.html` to allow Google ad domains.

Typical AdSense script shape:

```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_ID"
    crossorigin="anonymous"></script>
```

Do not add text asking visitors to click ads.
