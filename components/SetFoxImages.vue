<template>
  <div class="fox-grid fox-images">
    <h1 class="col-span-full">Images</h1>
    <p class="col-span-full mb-4">Example treatment of images for the site.</p>
    <div
      class="fox-card col-span-4 sm:col-span-2 md-col-span-1 lg:col-span-3"
      v-for="image in images"
      :key="image.id"
      v-bind:class="image.class"
    >
      <img
        class="fox-image"
        v-bind:src="image.url"
        v-bind:alt="image.alt"
        v-bind:class="image.class"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          url: "https://scontent-sin6-2.xx.fbcdn.net/v/t1.6435-9/123351772_695449751099231_7527031373795945584_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=9267fe&_nc_ohc=_CwneCHCmMMAX_G8Sl-&tn=kZSvGoKk9FgcbAEN&_nc_ht=scontent-sin6-2.xx&oh=00_AT-Zr0ksc9GNjYjhRsthDrPR1jXZLkdYXPmA1rS-nUbTlw&oe=6260D948",
          alt: "",
          class: "lg:col-span-6 lg:row-span-2",
        },
        {
          url: "https://scontent-sin6-3.xx.fbcdn.net/v/t1.6435-9/151966159_762049921105880_9139072014226160453_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=9267fe&_nc_ohc=KWpqxdiOlV0AX8o8GTx&_nc_ht=scontent-sin6-3.xx&oh=00_AT8m__Xf1L6OyLqeFlJjLKZ0z_zOqoUQe0rWxLeU7m3SMg&oe=62634928",
          alt: "",
          class: "",
        },
        {
          url: "https://scontent-sin6-3.xx.fbcdn.net/v/t1.6435-9/131382423_727567481220791_5406596896171347569_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=a26aad&_nc_ohc=d6OAJIHoplkAX8gWxhr&_nc_ht=scontent-sin6-3.xx&oh=00_AT8Gwd1xRnG7Y3DW4AHnFUyVm9ZUpsvrhwaHYe4bu7yh3Q&oe=6263D6D1",
          alt: "",
          class: "md:col-span-4 md:row-span-2 lg:row-start-3 lg:col-start-10",
        },
        {
          url: "https://scontent-sin6-2.xx.fbcdn.net/v/t1.6435-9/126983913_712506902726849_358693148743240005_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=9267fe&_nc_eui2=AeEbDwZUJH5yzrsJj8iQd-z7Iq054smjPEUirTniyaM8RRU0ScJjfDVuLofSObWjOup4ahVktGjiibwknSz1RdjJ&_nc_ohc=VkoJGXnOmpEAX94WytN&_nc_ht=scontent-sin6-2.xx&oh=00_AT_CsQIF5EiPf4RB_ADGusvB_CKftvqaSPafssCUvM1xwQ&oe=62697DDF",
          alt: "",
          class: "lg:row-start-4 lg:col-start-7",
        },
        {
          url: "https://scontent-sin6-2.xx.fbcdn.net/v/t1.6435-9/65201153_379484822695727_229958957119045632_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=y1jiJYHRz-wAX8wXv3-&_nc_oc=AQkUTV95i7YkC0dIehNbqNFnjGuDb9aQls8u0YVZzrUB7jP2ZaS40jyEIreE3NffvBFVWNYCRr5dw7qwvHTwB5pr&_nc_ht=scontent-sin6-2.xx&oh=00_AT_YuILIoVd8TMLAP4P11v38hZ4viGMcXdr3MLLRH8goaw&oe=6262076E",
          alt: "",
          class: "lg:row-start-4 lg:col-start-10",
        },
      ],
    };
  },
  mounted() {
    this.animateOnScroll();
  },

  methods: {
    animateOnScroll() {
      this.$gsap.from(".fox-images", {
        y: 200,
        // opacity: 0,
        ease: "slow(0.7, 0.7, false)",
        scrollTrigger: {
          trigger: ".fox-images",
          pin: false,
          end: "top",
          scrub: true,
        },
      });
    },
  },
};
</script>
