<template>
  <nav x-data="{ open: false }">
    <!-- Logo -->
    <a href="#">
      <div class="grid justify-items-left">
        <div
          class="text-3xl font-serif uppercase font-bold text-green dark:text-bone hover:text-gold"
        >
          Brother Fox
        </div>
        <h4
          class="uppercase font-medium text-gold tracking-widest leading-3 hover:text-gold"
        >
          Barbershop
        </h4>
      </div>
    </a>
    <!-- Mobile Nav Button -->
    <p>
      <button
        class="text-green dark:text-gold uppercase font-semibold md:font-medium tracking-wide hover:text-gold dark:hover:text-bone transition duration-150 ease-in-out md:hidden"
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
            class="w-full md:w-auto pl-0 md:pl-4 lg:pl-8 py-4 md:py-0 text-xl md:text-sm lg:text-base font-semibold md:font-medium tracking-wide uppercase text-green dark:text-gold hover:text-gold dark:hover:text-bone"
            x-on:click="open = !close"
          >
            {{ page.page }}
          </button>
        </p>
      </a>
      <div
        class="grid md:flex md:flex-col md:justify-center grid-cols-2 gap-4 md:gap-0"
      >
        <!-- Sosmed -->
        <div
          class="flex flex-row w-full justify-end md:justify-start self-center md:w-auto pl-0 md:pl-8 py-6 md:py-1 mb-1"
        >
          <a
            href="https://www.facebook.com/brotherfoxbarbershop/"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 22 22"
              height="21"
              viewBox="0 0 22 22"
              width="21"
              class="mr-2 md:mr-1 fill-[#1E292B] hover:fill-[#AC9E7B] dark:fill-[#AC9E7B] dark:hover:fill-[#F6F1DD]"
            >
              <rect fill="none" height="20" width="20" />
              <path
                d="M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.84,3.44,8.87,8,9.8V15H8v-3h2V9.5C10,7.57,11.57,6,13.5,6H16v3h-2 c-0.55,0-1,0.45-1,1v2h3v3h-3v6.95C18.05,21.45,22,17.19,22,12z"
              />
            </svg>
          </a>
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 24 24"
              class="pt-0.5 fill-[#1E292B] hover:fill-[#AC9E7B] dark:fill-[#AC9E7B] dark:hover:fill-[#F6F1DD]"
            >
              <path
                d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z"
              />
            </svg>
          </a>
        </div>
        <!-- Toggle Theme -->
        <div class="flex md:w-auto pl-0 md:pl-11 mb-3.5 md:mb-1">
          <div
            class="relative inline-block w-11 mr-3 align-middle select-none self-center"
          >
            <label
              for="toggle"
              class="block overflow-hidden h-1 rounded-full cursor-pointer relative top-1.5 bg-gradient-to-r from-bone to-green"
            />
            <input
              id="toggle"
              type="checkbox"
              name="toggle"
              class="right-6.5 checked:right-0 duration-200 ease-in absolute block w-4 h-4 bg-green focus:bg-green border-1 border-gold rounded-full focus:ring-0 focus:ring-offset-0 cursor-pointer top-0 checked:bg-[url('')] checked:bg-gold checked:focus:bg-gold"
              x-bind:value="darkMode"
              x-on:change="darkMode = !darkMode"
            />
          </div>
        </div>
      </div>
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
        { page: "Images", url: "#images" },
        { page: "CMS", url: "#cms" },
        { page: "Contact", url: "#contact" },
      ],
    };
  },
};
</script>
