<section id="colours" class="bg-bone dark:bg-green">
      <content
        class="opacity-0 translate-y-1/4 duration-1000"
        x-intersect.threshold.1="$el.classList.add('opacity-100', 'translate-y-0')"
        x-intersect:leave="$el.classList.remove('opacity-100', 'translate-y-0')"
      >
        <SetFoxColours />
      </content>
    </section>

<template>
  <section class="bg-green">
    <content>
      <div class="grid justify-center">
        <h1 v-if="error.statusCode === 404" class="text-9xl">F#!k, плут</h1>
        <h1 v-else-if="error.statusCode === 500">Server error</h1>
        <h1 v-else>Error Occurred</h1>
        <h4 class="justify-self-center hover:text-bone mt-6">
          <NuxtLink to="/style">Back to Bakunin</NuxtLink>
        </h4>
      </div>
    </content>
  </section>
</template>

<script>
export default {
  props: ["error"],
  // layout: 'error'
};
</script>
