<template>
  <nav x-data="{ open: false }">
    <!-- Logo -->
    <a href="#">
      <div class="grid justify-items-left">
        <div
          class="text-2xl font-serif uppercase font-bold text-green hover:text-gold"
        >
          Brother Fox
        </div>
        <div
          class="uppercase font-medium text-gold tracking-widest leading-3 hover:text-gold"
        >
          Barbershop
        </div>
      </div>
    </a>
    <p>
      <button
        class="text-green uppercase font-medium tracking-wide hover:text-gold transition duration-150 ease-in-out md:hidden"
        x-on:click="open = !open"
      >
        menu
      </button>
    </p>
    <!-- Primary Nav -->
    <div
      class="md:flex items-center flex-col md:flex-row w-full md:w-1/3 justify-end h-screen md:h-auto mt-10 md:mt-0"
      x-bind:class="{ 'hidden': !open }"
    >
      <a v-for="page in menu" :key="page.id" v-bind:href="page.url">
        <p>
          <button
            class="w-full md:w-auto pl-0 md:pl-8 py-6 md:py-0 font-medium tracking-wide uppercase text-green hover:text-gold"
            x-on:click="open = !close"
          >
            {{ page.page }}
          </button>
        </p>
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
