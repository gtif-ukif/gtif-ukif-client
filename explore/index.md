---
layout: page
footer: false
feedback: false
---

<script setup>
  import { withBase } from 'vitepress';
  const cacheBuster = `?t=${new Date().getTime()}`; // Add a timestamp for cache busting
</script>


<NavBar></NavBar>
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
</style>
