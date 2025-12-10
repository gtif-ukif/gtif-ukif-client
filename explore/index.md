---
layout: false
---

<script setup>
    import { withBase } from 'vitepress';
    import VPNav from 'vitepress/dist/client/theme-default/components/VPNav.vue';
</script>
<VPNav />
<eo-dash style="display: block; top:var(--vp-nav-height); height: calc(100dvh - var(--vp-nav-height)) !important;" :config="withBase('/configs/gtif-ukif-config.js')"/>
