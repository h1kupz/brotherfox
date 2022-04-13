<template>
  <main id="home" class="bg-gold" x-data>
    <SetFoxHero class="bg-bone" />
    <section id="colours" class="bg-bone dark:bg-green">
      <SetFoxColours />
    </section>
    <section id="type" class="bg-bone dark:bg-green">
      <SetFoxType />
    </section>
    <section id="images" class="bg-bone dark:bg-green">
      <SetFoxImages />
    </section>
    <section id="cms" class="bg-bone dark:bg-green">
      <SetFoxCMS
        ><div
          v-for="crew of crew"
          :key="crew.slug"
          class="fox-form col-span-full md:col-span-4"
        >
          <div
            class="grid gap-5 md:gap-8 grid-cols-1 sm:grid-cols-3 md:grid-cols-1"
          >
            <div
              class="fox-card shadow-fox_l dark:shadow-fox_d relative h-0 w-full pb-2/3 pt-0 sm:pt-2/3 md:pt-0 lg:pt-2/3 col-span-2 sm:col-span-1"
            >
              <img
                v-bind:src="crew.image"
                v-bind:alt="crew.name"
                class="fox-image absolute inset-0 w-full h-full object-top"
              />
            </div>
            <div class="col-span-2 md:col-span-1">
              <h2 class="text-bone leading-3 pb-2">{{ crew.name }}</h2>
              <h4 class="pb-2 md:pb-3 dark:text-green">
                {{ crew.position }}
              </h4>
              <div class="text-bone dark:text-green">{{ crew.bio }}</div>
            </div>
          </div>
        </div></SetFoxCMS
      >
    </section>
    <section id="contact" class="bg-bone dark:bg-green">
      <SetFoxContact />
    </section>
  </main>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "BrotherFox",
  layout: "setfox",

  async asyncData({ $content }) {
    const crew = await $content("crew").sortBy("order").fetch();

    return {
      crew,
    };
  },
});
</script>
