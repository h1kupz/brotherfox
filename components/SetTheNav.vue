<template>
  <nav x-data="{ open: false }">
    <!-- Logo -->
    <a href="#">
      <div class="grid justify-items-left">
        <div
          class="text-2xl font-serif uppercase font-semibold text-brown tracking-wider hover:text-gold"
        >
          Brother Fox
        </div>
        <div
          class="text-xs uppercase font-medium text-gold tracking-wider hover:text-gold"
        >
          Barbershop
        </div>
      </div>
    </a>
    <button
      class="text-brown leading-tight uppercase hover:text-gold transition duration-150 ease-in-out md:hidden"
      x-on:click="open = !open"
    >
      menu
    </button>
    <!-- Primary Nav -->
    <div
      class="md:flex items-center flex-col md:flex-row w-full md:w-1/3 justify-end h-screen md:h-auto mt-10 md:mt-0"
      x-bind:class="{ 'hidden': !open }"
    >
      <a v-for="page in menu" :key="page.id" v-bind:href="page.url">
        <button
          class="w-full md:w-auto pl-0 md:pl-10 py-8 md:py-0 text-xl md:text-xs uppercase font-semibold text-brown tracking-widest hover:text-gold"
          x-on:click="open = !close"
        >
          {{ page.page }}
        </button>
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        { page: "Home", url: "#home" },
        { page: "Colours", url: "#colours" },
        { page: "Type", url: "#type" },
        { page: "Grid", url: "#grid" },
      ],
    };
  },
};
</script>
