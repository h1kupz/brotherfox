<template>
  <main id="home" class="overflow-hidden">
    <SetFoxHero class="bg-bone" />
    <section id="colours" class="bg-bone">
      <content>
        <SetFoxColours />
      </content>
    </section>
    <section id="type" class="bg-bone">
      <content>
        <SetFoxType />
      </content>
    </section>
    <section id="images" class="bg-bone">
      <content>
        <SetFoxImages />
      </content>
    </section>
    <section id="grid" class="bg-bone">
      <content>
        <SetFoxGrid />
      </content>
    </section>
    <section id="cms" class="bg-bone">
      <content>
        <div class="fox-grid">
          <h1 class="col-span-full">CMS</h1>
          <p class="col-span-full mb-4">
            Example of an editable section. Team members can be added, edited
            and deleted via the site content management system (CMS) accessed by
            adding /admin to the site url.
          </p>
          <div
            v-for="crew of crew"
            :key="crew.slug"
            class="fox-form bg-green col-span-full md:col-span-4"
          >
            <div class="grid gap-5 md:gap-8 grid-cols-3 md:grid-cols-1">
              <div class="fox-card square">
                <img
                  v-bind:src="crew.image"
                  v-bind:alt="crew.name"
                  class="fox-image"
                />
              </div>
              <div class="col-span-2 md:col-span-1">
                <h2 class="text-bone leading-3 pb-2">{{ crew.name }}</h2>
                <h4 class="pb-2 md:pb-3">{{ crew.position }}</h4>
                <div class="text-bone">{{ crew.bio }}</div>
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
