---
layout: false
---

<script setup>
  import { withBase } from 'vitepress';
  const cacheBuster = `?t=${new Date().getTime()}`; // Add a timestamp for cache busting
</script>


<NavBar></NavBar>
<eo-dash style="display: block; top: 60px; height: calc(100dvh - 60px) !important;" :config="withBase(`/configs/gtif-ukif-config.js${cacheBuster}`)"/>
