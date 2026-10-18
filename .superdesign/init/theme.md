# Theme

## Token summary
- Colors: `--ink #16222B` (text, footer bg), `--slate #243441` (hero bg), `--rain #E7ECEF` (services band), `--paper #F7F8F9` (page bg), `--orange #E5641F` (accent, buttons, phone), `--orange-ink #B84B12` (hover/label), `--mute #5B6B77` (secondary text), `--line #C9D2D8` (rules). Map fill `#F2B890`, hover `--orange`.
- Font: Archivo (Google Fonts, variable width axis). Headings weight 700 at wdth 112.5; body 400 at wdth 100. 17px/1.55 body.
- Type scale: h1 clamp(34px,6vw,64px); h2 clamp(28px,4vw,38px); h3 20-21px; phone clamp(34px,6.5vw,72px); small 15px.
- Layout: max width 1080px, 20px gutters; sections 72px vertical padding (56px mobile); breakpoint 760px collapses grids to 1 column.
- Radius 4px on buttons only. No shadows. Hero has a 115deg hairline rain-stripe pattern, masked.

## Raw CSS
```css
<style>
:root{
  --ink:#16222B; --slate:#243441; --rain:#E7ECEF; --paper:#F7F8F9;
  --orange:#E5641F; --orange-ink:#B84B12; --mute:#5B6B77; --line:#C9D2D8;
  --w:1080px;
}
*{box-sizing:border-box}
html{-webkit-text-size-adjust:100%}
body{margin:0;background:var(--paper);color:var(--ink);font:400 17px/1.55 Archivo,system-ui,sans-serif;font-variation-settings:"wdth" 100}
a{color:inherit}
.wrap{max-width:var(--w);margin:0 auto;padding:0 20px}
h1,h2,h3{margin:0;line-height:1.08;font-weight:700;font-variation-settings:"wdth" 112.5;letter-spacing:-.01em}
h2{font-size:clamp(28px,4vw,38px);margin-bottom:28px}
p{margin:0 0 1em}
.btn{display:inline-block;padding:14px 22px;border-radius:4px;font-weight:500;text-decoration:none;border:2px solid transparent}
.btn.orange{background:var(--orange);color:#fff}
.btn.orange:hover{background:var(--orange-ink)}
.btn.ghost{border-color:rgba(255,255,255,.4);color:#fff}
.btn.ghost:hover{border-color:#fff}
:focus-visible{outline:3px solid var(--orange);outline-offset:3px}

/* hero */
.hero{background:var(--slate);color:#fff;position:relative;overflow:hidden}
.hero::before{content:"";position:absolute;inset:0;
  background-image:repeating-linear-gradient(115deg,rgba(255,255,255,.07) 0 1px,transparent 1px 14px);
  mask-image:linear-gradient(180deg,transparent 10%,#000 60%);-webkit-mask-image:linear-gradient(180deg,transparent 10%,#000 60%)}
.hero .wrap{position:relative;padding-top:28px;padding-bottom:64px}
.brand{display:flex;align-items:center;gap:12px;font-weight:700;font-size:18px;margin-bottom:72px}
.brand svg{width:34px;height:34px}
.hero h1{font-size:clamp(34px,6vw,64px);max-width:15ch}
.hero .lede{font-size:clamp(18px,2.2vw,22px);max-width:46ch;margin:22px 0 36px;color:#D6DEE4}
.phone{display:block;font-weight:700;font-variation-settings:"wdth" 112.5;font-size:clamp(34px,6.5vw,72px);line-height:1;color:var(--orange);text-decoration:none;letter-spacing:-.02em;margin-bottom:24px}
.phone:hover{color:#FF8A4A}
.hero .acts{display:flex;gap:12px;flex-wrap:wrap}
.btn{cursor:pointer;font:inherit;font-weight:500}
.note{font-size:15px;color:#B9C6CF;margin:12px 0 0}
.turnstile{margin:0 0 16px}
[hidden]{display:none!important}

/* sections */
section{padding:72px 0}
section + section{border-top:1px solid var(--line)}
.services{background:var(--rain)}
.svc{display:grid;grid-template-columns:1fr 1fr;gap:34px 56px;list-style:none;margin:0;padding:0}
.svc li{border-top:3px solid var(--orange);padding-top:14px}
.svc h3{font-size:21px;margin-bottom:8px}
.svc p{margin:0;color:var(--mute);max-width:42ch}

.why{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(2,1fr);gap:28px 56px}
.why li{padding-left:18px;border-left:3px solid var(--orange)}
.why h3{font-size:20px;margin-bottom:6px}
.why p{margin:0;color:var(--mute);max-width:44ch}
.area{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center}
.area .text p{max-width:48ch}
.map{width:100%;max-width:440px;height:auto;display:block;margin:0 auto}
.map path{fill:#F2B890;stroke:var(--paper);stroke-width:1.2;stroke-linejoin:round;cursor:default}
.map path:hover,.map path.on{fill:var(--orange)}
.county{font-weight:700;font-size:22px;min-height:1.4em;margin:14px 0 0;color:var(--orange-ink)}
.county small{font-weight:400;color:var(--mute);font-size:16px}
.about{display:grid;grid-template-columns:1.2fr 1fr;gap:56px;align-items:start}
.about .text p{max-width:56ch}
.facts{list-style:none;margin:0;padding:0;border-top:1px solid var(--line)}
.facts li{padding:14px 0;border-bottom:1px solid var(--line);display:grid;grid-template-columns:120px 1fr;gap:14px}
.facts b{font-weight:500;color:var(--mute)}

.steps{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(3,1fr);gap:40px;counter-reset:s}
.steps li{counter-increment:s}
.steps li::before{content:counter(s);display:block;font-size:44px;font-weight:700;color:var(--orange);line-height:1;margin-bottom:10px;font-variation-settings:"wdth" 112.5}
.steps h3{font-size:20px;margin-bottom:8px}
.steps p{color:var(--mute);margin:0;max-width:34ch}

footer{background:var(--ink);color:#fff;padding:64px 0 40px}
footer .grid{display:grid;grid-template-columns:1fr 1fr;gap:40px}
footer h2{font-size:clamp(26px,3.5vw,34px)}
footer a{text-decoration:none}
footer a:hover{text-decoration:underline}
.contact{font-size:22px;line-height:1.5}
.contact a{color:#fff;font-weight:500}
.small{color:#9FB0BC;font-size:15px;margin-top:40px}
.small a{color:#9FB0BC}

@media (max-width:760px){
  .brand{margin-bottom:48px}
  .svc,.why,.area,.about,.steps,footer .grid{grid-template-columns:1fr}
  .facts li{grid-template-columns:1fr;gap:2px}
  section{padding:56px 0}
  .hero .wrap{padding-bottom:48px}
}
@media (prefers-reduced-motion:no-preference){
  .btn,.phone{transition:color .15s,background-color .15s,border-color .15s}
}
</style>
```
