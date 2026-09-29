# Founder portrait slots

No photographs are included yet. Add a portrait only after the founder has approved it and
publication rights are confirmed (including the photographer's permission where needed).

1. Save an optimized JPEG or WebP here, for example `josh-muller.jpg` or `matt-lafleur.jpg`.
   Aim for 1200 x 1500 pixels (4:5), under about 250 KB.
2. In `site.config.mjs`, set that founder's `photo`:
   `photo: { src: 'photos/josh-muller.jpg', width: 1200, height: 1500, alt: 'Josh Muller speaking to a group of business owners' }`
   Write the alt text from what the photo actually shows.
3. Run `npm run check`. The portrait appears on Home and About with no layout changes.

Do not add stock photos of meetings or handshakes, AI-generated likenesses, or client images.
