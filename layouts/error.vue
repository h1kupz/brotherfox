<template>
  <section class="bg-green">
    <content>
      <div class="grid justify-center">
        <h1 v-if="error.statusCode === 404" class="text-9xl">плут</h1>
        <h1 v-else-if="error.statusCode === 500">плут</h1>
        <h1 v-else>плут</h1>
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
