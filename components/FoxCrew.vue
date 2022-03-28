<template>
  <div class="fox-crew">
    <h1 class="fox-crew-title text-brown fox-mblg">Crew</h1>
    <div
      class="fox-form fox-grid gap-5 py-4 bg-brown rounded-r-full fox-mb"
      v-for="person in crew"
      :key="person.id"
    >
      <div
        class="self-center row-start-1 col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4"
        v-bind:class="person.textclass"
      >
        <h2>{{ person.name }}</h2>
        <p class="text-bone py-4">
          {{ person.info }}
        </p>
      </div>

      <div
        class="fox-card shadow-fox_d bg-gold square rounded-full row-start-1 col-span-1 lg:col-span-2"
      >
        <img
          class="fox-image"
          v-for="image in crew"
          :key="image.id"
          v-bind:class="image.imageclass"
          v-bind:src="image.image"
          v-bind:alt="crew.alt"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      crew: [
        {
          name: "Person",
          info: "Crucifix de sapristi de géritole de saint-ciboire de torvisse de sainte-viarge de torrieux de batince de purée de ciboire de gériboire.",
          textclass: "",
          image:
            "https://scontent-sin6-2.xx.fbcdn.net/v/t1.6435-9/123351772_695449751099231_7527031373795945584_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=9267fe&_nc_ohc=_CwneCHCmMMAX_G8Sl-&tn=kZSvGoKk9FgcbAEN&_nc_ht=scontent-sin6-2.xx&oh=00_AT-Zr0ksc9GNjYjhRsthDrPR1jXZLkdYXPmA1rS-nUbTlw&oe=6260D948",
          alt: "",
          imageclass: "",
        },
        {
          name: "Person",
          info: "Crucifix de sapristi de géritole de saint-ciboire de torvisse de sainte-viarge de torrieux de batince de purée de ciboire de gériboire.",
          textclass: "col-start-2",
          image:
            "https://scontent-sin6-2.xx.fbcdn.net/v/t1.6435-9/123351772_695449751099231_7527031373795945584_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=9267fe&_nc_ohc=_CwneCHCmMMAX_G8Sl-&tn=kZSvGoKk9FgcbAEN&_nc_ht=scontent-sin6-2.xx&oh=00_AT-Zr0ksc9GNjYjhRsthDrPR1jXZLkdYXPmA1rS-nUbTlw&oe=6260D948",
          alt: "",
          imageclass: "col-start-1",
        },
        {
          name: "Person",
          info: "Crucifix de sapristi de géritole de saint-ciboire de torvisse de sainte-viarge de torrieux de batince de purée de ciboire de gériboire.",
          textclass: "",
          image:
            "https://scontent-sin6-2.xx.fbcdn.net/v/t1.6435-9/123351772_695449751099231_7527031373795945584_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=9267fe&_nc_ohc=_CwneCHCmMMAX_G8Sl-&tn=kZSvGoKk9FgcbAEN&_nc_ht=scontent-sin6-2.xx&oh=00_AT-Zr0ksc9GNjYjhRsthDrPR1jXZLkdYXPmA1rS-nUbTlw&oe=6260D948",
          alt: "",
          imageclass: "",
        },
      ],
    };
  },
  mounted() {
    this.animateOnScroll();
  },

  methods: {
    animateOnScroll() {
      this.$gsap.from(".fox-crew", {
        x: 200,
        opacity: 0,
        ease: "slow(0.7, 0.7, false)",
        scrollTrigger: {
          trigger: ".fox-crew",
          pin: false,
          end: "top",
          scrub: true,
        },
      });
    },
  },
};
</script>
