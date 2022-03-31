<template>
  <div class="fox-about fox-grid-2">
    <div
      class="self-center fox-mblg sm:mb-0 col-span-2 md:col-span-3 md:self-center lg:col-span-4"
    >
      <div class="fox-about-title">
        <h1 class="text-bone text-center sm:text-left">Brother Fox</h1>
        <h2 class="text-gold text-center sm:text-left">Barbershop</h2>
      </div>
    </div>
    <p
      class="text-bone py-4 text-center sm:text-left row-start-3 col-start-1 col-span-2 sm:row-start-2 sm:col-start-2 sm:self-center md:col-start-1 md:col-span-2 md:pr-10 lg:col-span-3"
    >
      Brother Fox Barbershop in Cowra offer a truly unique and professional
      experience for quality styling for your hair and beard.
    </p>

    <div
      class="fox-card"
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

    <p
      class="text-bone sm:self-center py-4 text-center sm:text-left col-span-2 lg:row-start-3 lg:col-start-3"
    >
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, quaerat?
    </p>
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
          class: "",
        },
        {
          url: "https://i.stack.imgur.com/Vkq2a.png",
          alt: "",
          class: "hidden sm:block",
        },
        {
          url: "https://scontent-sin6-3.xx.fbcdn.net/v/t1.6435-9/151966159_762049921105880_9139072014226160453_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=9267fe&_nc_ohc=KWpqxdiOlV0AX8o8GTx&_nc_ht=scontent-sin6-3.xx&oh=00_AT8m__Xf1L6OyLqeFlJjLKZ0z_zOqoUQe0rWxLeU7m3SMg&oe=62634928",
          alt: "",
          class: "",
        },
        {
          url: "https://scontent-sin6-3.xx.fbcdn.net/v/t1.6435-9/131382423_727567481220791_5406596896171347569_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=a26aad&_nc_ohc=d6OAJIHoplkAX8gWxhr&_nc_ht=scontent-sin6-3.xx&oh=00_AT8Gwd1xRnG7Y3DW4AHnFUyVm9ZUpsvrhwaHYe4bu7yh3Q&oe=6263D6D1",
          alt: "",
          class: "",
        },
        {
          url: "https://i.stack.imgur.com/Vkq2a.png",
          alt: "",
          class: "hidden md:block",
        },
        {
          url: "https://scontent-sin6-2.xx.fbcdn.net/v/t1.6435-9/126983913_712506902726849_358693148743240005_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=9267fe&_nc_eui2=AeEbDwZUJH5yzrsJj8iQd-z7Iq054smjPEUirTniyaM8RRU0ScJjfDVuLofSObWjOup4ahVktGjiibwknSz1RdjJ&_nc_ohc=VkoJGXnOmpEAX94WytN&_nc_ht=scontent-sin6-2.xx&oh=00_AT_CsQIF5EiPf4RB_ADGusvB_CKftvqaSPafssCUvM1xwQ&oe=62697DDF",
          alt: "",
          class: "",
        },
        {
          url: "https://i.stack.imgur.com/Vkq2a.png",
          alt: "",
          class: "hidden md:block",
        },
        {
          url: "https://i.stack.imgur.com/Vkq2a.png",
          alt: "",
          class: "hidden md:block",
        },
        {
          url: "https://scontent-sin6-2.xx.fbcdn.net/v/t1.6435-9/65201153_379484822695727_229958957119045632_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=y1jiJYHRz-wAX8wXv3-&_nc_oc=AQkUTV95i7YkC0dIehNbqNFnjGuDb9aQls8u0YVZzrUB7jP2ZaS40jyEIreE3NffvBFVWNYCRr5dw7qwvHTwB5pr&_nc_ht=scontent-sin6-2.xx&oh=00_AT_YuILIoVd8TMLAP4P11v38hZ4viGMcXdr3MLLRH8goaw&oe=6262076E",
          alt: "",
          class: "sm:col-start-1 md:col-start-2 col-span-2 sm:col-span-1",
        },
      ],
    };
  },
  mounted() {
    this.animateOnScroll();
  },

  methods: {
    animateOnScroll() {
      this.$gsap.from(".fox-about", {
        x: 200,
        opacity: 0,
        ease: "slow(0.7, 0.7, false)",
        scrollTrigger: {
          trigger: ".fox-about",
          pin: false,
          end: "top",
          scrub: true,
        },
      });
    },
  },
};
</script>
