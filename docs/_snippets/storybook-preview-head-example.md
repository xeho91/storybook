```html filename=".storybook/preview-head.html" renderer="common" language="ts" tabTitle="html"
{/* Pull in static files served from your Static directory or the internet */}

<link rel=”preload” href=”your/font” />

{/* Or you can load custom head-tag JavaScript: */}

<script src="https://use.typekit.net/xxxyyy.js"></script>
<script>try{ Typekit.load(); } catch(e){ }</script>
```
