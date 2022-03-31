<template>
  <div id="fox-grid">
    <h1 class="col-span-full mb-8">Grid</h1>
    <div class="fox-grid h-screen pb-60">
      <div class="fox-grid-item opacity-50" />
      <div class="fox-grid-item opacity-50 md:col-span-2" />
      <div class="fox-grid-item opacity-50 fox-col-span-124" />
      <div class="fox-grid-item opacity-50 fox-col-span-135" />
      <div class="fox-grid-item opacity-50" />
      <div class="fox-grid-item opacity-50" />
      <div class="fox-grid-item opacity-50" />
      <div class="fox-grid-item opacity-50" />

      <div class="fox-grid-item opacity-50" />
      <div class="fox-grid-item opacity-50" />
      <div class="fox-grid-item opacity-50" />
      <div class="fox-grid-item opacity-50" />

      <div class="fox-grid-item opacity-50 hidden lg:block" />
      <div class="fox-grid-item opacity-50 hidden lg:block" />
      <div class="fox-grid-item opacity-50 hidden lg:block" />
      <div class="fox-grid-item opacity-50 hidden lg:block" />
    </div>
  </div>
</template>

//
<script>
// export default {
//   data() {
//     return {};
//   },
//   mounted() {
//     this.animateOnScroll();
//   },

//   methods: {
//     animateOnScroll() {
//       this.$gsap.from("#fox-grid", {
//         y: 200,
//         ease: "slow(0.7, 0.7, false)",
//         scrollTrigger: {
//           trigger: "#fox-grid",
//           pin: false,
//           end: "top",
//           scrub: true,
//         },
//       });
//     },
//   },
// };
//
</script>
