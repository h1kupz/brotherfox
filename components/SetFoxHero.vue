<template>
  <div
    class="flex items-center h-screen justify-center mb-1 bg-cover custom-img"
  >
    <div
      class="flex w-96 h-96 p-6 rounded-full bg-green shadow-fox_d overflow-hidden"
    >
      <img class="self-center" src="../assets/images/FoxLogoGreen.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.parallax();
  },

  methods: {
    parallax() {
      this.$gsap.from(".custom-img", {
        backgroundPosition: "50% 100% ",
        ease: "none",
        scrollTrigger: {
          trigger: ".custom-img",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
  },
};
</script>

<style scoped>
.logo {
  background-image: url("../assets/images/FoxLogoGreen.png");
}

.custom-img {
  background-image: url("https://scontent-sin6-4.xx.fbcdn.net/v/t1.6435-9/118210307_646660539311486_3791438011853617899_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=e3f864&_nc_ohc=mv8tfJnv4nIAX_Qd3Gb&_nc_oc=AQlIB3f0_z1_P6pyI9X8MZG7cILxvxMDEFM4yApfKCToX2Df7p4A4IIvD8cxW5G7f8y42NbDDVwWQpLNzBNDrFLA&tn=kZSvGoKk9FgcbAEN&_nc_ht=scontent-sin6-4.xx&oh=00_AT9pPsuOAkgjmaa67ubF9mh935bwo-BbwUYwodKmGd4TWw&oe=62605984");
}
</style>
