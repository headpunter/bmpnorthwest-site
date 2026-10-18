# Routes

| Path | File | Notes |
|---|---|---|
| `/` | `index.html` | the whole site, single page |
| `/api/contact` | `functions/api/contact.js` | Cloudflare Pages Function, POST only; returns phone + email after a Turnstile token verifies. Not UI. |

Sections on `/` in order: hero (contact reveal) → What you get (6 services) → Why contractors call us (4) → Where we work (19-county hover SVG map) → How it works (3 steps) → About Max Day (+ facts list) → footer contact (reveal again).
