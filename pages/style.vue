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
    <section id="grid" class="bg-bone">
      <content>
        <SetFoxGrid />
      </content>
    </section>
  </main>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "BrotherFox",
  layout: "setfox",
});
</script>
