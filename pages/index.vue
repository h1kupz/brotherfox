<template>
  <main id="home" class="overflow-hidden">
    <FoxHero />
    <section id="about" class="bg-brown">
      <content>
        <FoxAbout />
      </content>
    </section>
    <section id="crew" class="bg-bone">
      <content>
        <FoxCrew />
      </content>
    </section>
    <section id="products" class="bg-brown">
      <content>
        <FoxProducts />
      </content>
    </section>
    <section id="contact" class="bg-bone mb-0">
      <content>
        <FoxContact />
      </content>
    </section>
  </main>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "BrotherFox",
  layout: "fox",
});
</script>
