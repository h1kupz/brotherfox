<template>
  <div id="fox-grid">
    <h1 class="col-span-full mb-8">Colours</h1>
    <div class="fox-12grid p-4 rounded-foxlg">
      <div class="bg-brown fox-12grid-item rectangle lg:square rounded-full" />
      <div
        class="fox-12grid-item col-start-2 col-span-full h-1/4 self-center rounded-foxlg bg-gradient-to-r from-brown to-bone"
      />
      <h2 class="text-brown col-start-2">#231F20</h2>
      <div
        class="bg-gold fox-12grid-item rectangle lg:square rounded-full row-start-3"
      />
      <div
        class="fox-12grid-item col-start-2 col-span-full h-1/4 self-center rounded-foxlg bg-gradient-to-r from-gold to-bone"
      />
      <h2 class="text-gold col-start-2">#AC9E7B</h2>
    </div>
    <div class="fox-12grid bg-brown p-4 rounded-foxlg mt-4">
      <div class="bg-bone fox-12grid-item rectangle lg:square rounded-full" />
      <div
        class="fox-12grid-item col-start-2 col-span-full h-1/4 self-center rounded-foxlg bg-gradient-to-r from-bone to-brown"
      />
      <h2 class="text-bone col-start-2">#F6F1DD</h2>
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
