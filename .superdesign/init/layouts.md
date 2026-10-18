# Layouts

One page. Header hero (index.html:113-131) and footer (index.html:225-243) are the only shared shells.

## Header / hero — index.html:113-131
```html
<header class="hero">
  <div class="wrap">
    <div class="brand">
      <svg viewBox="0 0 34 34" aria-hidden="true"><rect width="34" height="34" rx="4" fill="#E5641F"/><path d="M8 24h18M10 19h14M12 14h10M14 9h6" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/></svg>
      BMP Northwest Consulting
    </div>
    <h1>Your stormwater permit, handled.</h1>
    <p class="lede">Inspections, sampling, and reporting for construction sites across Western Washington. One call and it is off your plate.</p>
    <div class="reveal" data-reveal>
      <a class="phone" data-phone hidden></a>
      <div class="acts">
        <button class="btn orange" type="button" data-show>Show phone and email</button>
        <a class="btn orange" data-email hidden>Email Max</a>
        <a class="btn ghost" href="#services">What you get</a>
      </div>
      <p class="note" data-note hidden></p>
    </div>
  </div>
</header>
```
## Footer — index.html:225-243
```html
      </div>
      <div class="contact" data-reveal>
        <a data-phone hidden></a><br>
        <a data-email hidden></a>
        <button class="btn orange" type="button" data-show>Show phone and email</button>
        <p class="note" data-note hidden></p>
        <span style="color:#B9C6CF;display:block;margin-top:10px">BMP Northwest Consulting<br>Centralia, Washington</span>
      </div>
    </div>
    <p class="small">BMP Consulting LLC, doing business as BMP Northwest Consulting.</p>
  </div>
</footer>

<script>
(function(){
  var label=document.querySelector("[data-county]"), dflt=label.innerHTML, cur=null;
  document.querySelectorAll(".map path").forEach(function(p){
    var name=p.querySelector("title").textContent;
    function on(){ if(cur) cur.classList.remove("on"); cur=p; p.classList.add("on"); label.textContent=name; }
```
