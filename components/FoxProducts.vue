<template>
  <div class="fox-products">
    <h1 class="fox-crew-title text-bone fox-mblg">Products</h1>
    <div class="fox-grid-2">
      <div
        class="fox-card square"
        v-for="product in products"
        :key="product.id"
        v-bind:class="product.class"
      >
        <img
          class="fox-image sepia-0"
          v-bind:src="product.url"
          v-bind:alt="product.alt"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          url: "https://scontent-sin6-3.xx.fbcdn.net/v/t1.6435-9/131382423_727567481220791_5406596896171347569_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=a26aad&_nc_ohc=d6OAJIHoplkAX8gWxhr&_nc_ht=scontent-sin6-3.xx&oh=00_AT8Gwd1xRnG7Y3DW4AHnFUyVm9ZUpsvrhwaHYe4bu7yh3Q&oe=6263D6D1",
          alt: "",
          class: "col-span-full rectangle",
        },
        {
          url: "https://scontent-sin6-3.xx.fbcdn.net/v/t1.6435-9/131382423_727567481220791_5406596896171347569_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=a26aad&_nc_ohc=d6OAJIHoplkAX8gWxhr&_nc_ht=scontent-sin6-3.xx&oh=00_AT8Gwd1xRnG7Y3DW4AHnFUyVm9ZUpsvrhwaHYe4bu7yh3Q&oe=6263D6D1",
          alt: "",
          class: "",
        },
        {
          url: "https://scontent-sin6-3.xx.fbcdn.net/v/t1.6435-9/131382423_727567481220791_5406596896171347569_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=a26aad&_nc_ohc=d6OAJIHoplkAX8gWxhr&_nc_ht=scontent-sin6-3.xx&oh=00_AT8Gwd1xRnG7Y3DW4AHnFUyVm9ZUpsvrhwaHYe4bu7yh3Q&oe=6263D6D1",
          alt: "",
          class: "",
        },
        {
          url: "https://scontent-sin6-3.xx.fbcdn.net/v/t1.6435-9/131382423_727567481220791_5406596896171347569_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=a26aad&_nc_ohc=d6OAJIHoplkAX8gWxhr&_nc_ht=scontent-sin6-3.xx&oh=00_AT8Gwd1xRnG7Y3DW4AHnFUyVm9ZUpsvrhwaHYe4bu7yh3Q&oe=6263D6D1",
          alt: "",
          class: "",
        },
        {
          url: "https://scontent-sin6-3.xx.fbcdn.net/v/t1.6435-9/131382423_727567481220791_5406596896171347569_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=a26aad&_nc_ohc=d6OAJIHoplkAX8gWxhr&_nc_ht=scontent-sin6-3.xx&oh=00_AT8Gwd1xRnG7Y3DW4AHnFUyVm9ZUpsvrhwaHYe4bu7yh3Q&oe=6263D6D1",
          alt: "",
          class: "",
        },
      ],
    };
  },
  mounted() {
    this.animateOnScroll();
  },

  methods: {
    animateOnScroll() {
      this.$gsap.from(".fox-products", {
        x: 200,
        opacity: 0,
        ease: "slow(0.7, 0.7, false)",
        scrollTrigger: {
          trigger: ".fox-products",
          pin: false,
          end: "top",
          scrub: true,
        },
      });
    },
  },
};
</script>
