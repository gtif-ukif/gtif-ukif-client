---
layout: page
footer: false
---

<script setup>
  import { withBase } from 'vitepress';
  const cacheBuster = `?t=${new Date().getTime()}`; // Add a timestamp for cache busting
</script>

<eo-dash :config="withBase(`/configs/gtif-ukif-config.js${cacheBuster}`)"/>
<style>
eo-dash {
  display: block;
  height: calc(100dvh - var(--vp-nav-height));
  width: 100%;
}
.VPPage:has(eo-dash) {
  padding: 0;
  max-width: unset;
}
body:has(eo-dash) .news-banner {
  display: none;
}
</style>
