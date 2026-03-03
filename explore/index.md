---
layout: false
---

<script setup>
  import { withBase } from 'vitepress';
  const cacheBuster = `?t=${new Date().getTime()}`; // Add a timestamp for cache busting
</script>


<NavBar></NavBar>
<eo-dash style="display:block;position: fixed;inset: 60px 0 0 0;" :config="withBase(`/configs/gtif-ukif-config.js${cacheBuster}`)"/>
