<template>
  <div class="fox-type">
    <h1 class="col-span-full mb-8">Type</h1>
    <div class="fox-grid">
      <h1>h1</h1>
      <h1 class="col-start-2 lg:col-start-3 col-span-full">Heading 1</h1>
      <h1 class="col-start-2 lg:col-start-3 col-span-full pb-6">
        Sphinx of black quartz, judge my vow !
      </h1>
      <h2>h2</h2>
      <h2 class="col-start-2 lg:col-start-3 col-span-full">Heading 2</h2>
      <h2 class="col-start-2 lg:col-start-3 col-span-full pb-6">
        Sphinx of black quartz, judge my vow !
      </h2>
      <h3>h3</h3>
      <h3 class="col-start-2 lg:col-start-3 col-span-full">Heading 3</h3>
      <h3 class="col-start-2 lg:col-start-3 col-span-full pb-6">
        Sphinx of black quartz, judge my vow !
      </h3>
      <h4>h4</h4>
      <h4 class="col-start-2 lg:col-start-3 col-span-full">Subheading 1</h4>
      <h4 class="col-start-2 lg:col-start-3 col-span-full pb-6">
        Sphinx of black quartz, judge my vow !
      </h4>
      <p>p</p>
      <p class="col-start-2 lg:col-start-3 col-span-full">Paragraph Text</p>
      <p class="col-start-2 lg:col-start-3 col-span-full pb-6">
        Sphinx of black quartz, judge my vow !
      </p>
      <h5>h5</h5>
      <h5 class="col-start-2 lg:col-start-3 col-span-full">Subheading 2</h5>
      <h5 class="col-start-2 lg:col-start-3 col-span-full">
        Sphinx of black quartz, judge my vow !
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.animateOnScroll();
  },

  methods: {
    animateOnScroll() {
      this.$gsap.from(".fox-type", {
        y: 200,
        // opacity: 0,
        ease: "slow(0.7, 0.7, false)",
        scrollTrigger: {
          trigger: ".fox-type",
          pin: false,
          end: "top",
          scrub: true,
        },
      });
    },
  },
};
</script>
