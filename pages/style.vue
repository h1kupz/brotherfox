<template>
  <main id="home" class="bg-gold" x-data>
    <SetFoxHero class="bg-bone" />
    <section id="colours" class="bg-bone dark:bg-green">
      <content
        class="opacity-0 translate-y-1/4 duration-1000"
        x-intersect.threshold.1="$el.classList.add('opacity-100', 'translate-y-0')"
        x-intersect:leave="$el.classList.remove('opacity-100', 'translate-y-0')"
      >
        <SetFoxColours />
      </content>
    </section>
    <section id="type" class="bg-bone dark:bg-green">
      <content
        class="opacity-0 translate-y-1/4 duration-1000"
        x-intersect.threshold.1="$el.classList.add('opacity-100', 'translate-y-0')"
        x-intersect:leave="$el.classList.remove('opacity-100', 'translate-y-0')"
      >
        <SetFoxType />
      </content>
    </section>
    <section id="images" class="bg-bone dark:bg-green">
      <content
        class="opacity-0 translate-y-1/4 duration-1000"
        x-intersect.threshold.1="$el.classList.add('opacity-100', 'translate-y-0')"
        x-intersect:leave.margin.0px.0px.250px.0px="$el.classList.remove('opacity-100', 'translate-y-0')"
      >
        <SetFoxImages />
      </content>
    </section>
    <section id="cms" class="bg-bone dark:bg-green">
      <content
        class="opacity-0 translate-y-1/4 duration-1000"
        x-intersect.margin.200px="$el.classList.add('opacity-100', 'translate-y-0')"
        x-intersect:leave="$el.classList.remove('opacity-100', 'translate-y-0')"
      >
        <div class="fox-grid">
          <h1 class="col-span-full">CMS</h1>
          <p class="col-span-full mb-4">
            Example of an editable section. Team members can be added, edited
            and deleted via the site content management system (CMS), accessed
            by adding /admin to the site url.
          </p>
          <div
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
          </div>
        </div>
      </content>
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
