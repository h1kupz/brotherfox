<template>
  <html
    class="bg-gold"
    x-data="{'darkMode': false}"
    x-bind:class="{ dark: darkMode === true }"
    x-init="
         darkMode = JSON.parse(localStorage.getItem('darkMode'));
         $watch('darkMode', value => localStorage.setItem('darkMode', JSON.stringify(value)))"
  >
    >
    <header>
      <SetTheNav />
    </header>
    <Nuxt />
    <footer class="bg-bone dark:bg-green">
      <SetTheFooter />
    </footer>
  </html>
</template>
