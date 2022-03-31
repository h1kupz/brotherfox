<template v-for="crew of crewTest" :key="crewTest.slug">
  <div>
    <h2>{{ crew.name }}</h2>
  </div>
</template>

<script>
import crewTest from "../pages/style.vue";
export default {};
</script>
