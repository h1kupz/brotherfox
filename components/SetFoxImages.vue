<template>
  <div class="fox-grid fox-images">
    <h1 class="col-span-full">Images</h1>
    <p class="col-span-full mb-4">
      Example treatment of images and gallery/lightbox.
    </p>
    <div
      class="fox-card square col-span-2 md-col-span-1 lg:col-span-3"
      v-for="image in images"
      :key="image.id"
      v-bind:class="image.class"
    >
      <a v-bind:href="image.current">
        <img
          class="fox-image square"
          v-bind:src="image.url"
          v-bind:alt="image.alt"
          v-bind:class="image.class"
        />
      </a>
      <!-- lightbox -->
      <div
        class="lightbox absolute flex mx-auto max-w-screen-xl w-0 h-0 opacity-0 inset-0 z-30 overflow-hidden justify-center items-center bg-bone dark:bg-green backdrop-filter backdrop-blur bg-opacity-50 dark:bg-opacity-50 fox-px pb-36"
        v-bind:id="image.order"
      >
        <a v-bind:href="image.prev" class="light-btn absolute left-0 z-50"
          ><div class="fox-btn">Prev</div></a
        >
        <a href="#_" class="absolute top-[100px] right-0 z-50"
          ><div class="fox-btn">X</div></a
        >
        <img
          v-bind:src="image.url"
          class="fox-image square-0 rectangle-0 rounded-foxlg shadow-fox_d max-h-[90%] h-auto w-auto opacity-0"
        />
        <a v-bind:href="image.next" class="light-btn absolute right-0 z-50"
          ><div class="fox-btn">Next</div></a
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.lightbox:target {
  width: 100%;
  height: 100%;
  padding-top: 112px;
  opacity: 1 !important;
}
.lightbox:target img {
  opacity: 1;
  transition: opacity 0.2s;
}
</style>

<script>
export default {
  data() {
    return {
      images: [
        {
          order: "01",
          current: "#01",
          next: "#02",
          prev: "#05",
          url: "https://scontent-sin6-2.xx.fbcdn.net/v/t1.6435-9/123351772_695449751099231_7527031373795945584_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=9267fe&_nc_ohc=_CwneCHCmMMAX_G8Sl-&tn=kZSvGoKk9FgcbAEN&_nc_ht=scontent-sin6-2.xx&oh=00_AT-Zr0ksc9GNjYjhRsthDrPR1jXZLkdYXPmA1rS-nUbTlw&oe=6260D948",
          alt: "",
          class:
            "lg:col-span-6 lg:row-span-2 object-top sm:object-center rectangle sm:square col-span-4 sm:col-span-2",
        },
        {
          order: "02",
          current: "#02",
          next: "#03",
          prev: "#01",
          url: "https://scontent-sin6-3.xx.fbcdn.net/v/t1.6435-9/151966159_762049921105880_9139072014226160453_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=9267fe&_nc_ohc=KWpqxdiOlV0AX8o8GTx&_nc_ht=scontent-sin6-3.xx&oh=00_AT8m__Xf1L6OyLqeFlJjLKZ0z_zOqoUQe0rWxLeU7m3SMg&oe=62634928",
          alt: "",
          class: "",
        },
        {
          order: "03",
          current: "#03",
          next: "#04",
          prev: "#02",
          url: "https://scontent-sin6-3.xx.fbcdn.net/v/t1.6435-9/131382423_727567481220791_5406596896171347569_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=a26aad&_nc_ohc=d6OAJIHoplkAX8gWxhr&_nc_ht=scontent-sin6-3.xx&oh=00_AT8Gwd1xRnG7Y3DW4AHnFUyVm9ZUpsvrhwaHYe4bu7yh3Q&oe=6263D6D1",
          alt: "",
          class: "md:col-span-4 md:row-span-2 lg:row-start-3 lg:col-start-10",
        },
        {
          order: "04",
          current: "#04",
          next: "#05",
          prev: "#03",
          url: "https://scontent-sin6-2.xx.fbcdn.net/v/t1.6435-9/126983913_712506902726849_358693148743240005_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=9267fe&_nc_eui2=AeEbDwZUJH5yzrsJj8iQd-z7Iq054smjPEUirTniyaM8RRU0ScJjfDVuLofSObWjOup4ahVktGjiibwknSz1RdjJ&_nc_ohc=VkoJGXnOmpEAX94WytN&_nc_ht=scontent-sin6-2.xx&oh=00_AT_CsQIF5EiPf4RB_ADGusvB_CKftvqaSPafssCUvM1xwQ&oe=62697DDF",
          alt: "",
          class: "lg:row-start-4 lg:col-start-7",
        },
        {
          order: "05",
          current: "#05",
          next: "#01",
          prev: "#04",
          url: "https://scontent-sin6-2.xx.fbcdn.net/v/t1.6435-9/65201153_379484822695727_229958957119045632_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=y1jiJYHRz-wAX8wXv3-&_nc_oc=AQkUTV95i7YkC0dIehNbqNFnjGuDb9aQls8u0YVZzrUB7jP2ZaS40jyEIreE3NffvBFVWNYCRr5dw7qwvHTwB5pr&_nc_ht=scontent-sin6-2.xx&oh=00_AT_YuILIoVd8TMLAP4P11v38hZ4viGMcXdr3MLLRH8goaw&oe=6262076E",
          alt: "",
          class: "lg:row-start-4 lg:col-start-10 object-top sm:object-center",
        },
      ],
    };
  },
};
</script>
