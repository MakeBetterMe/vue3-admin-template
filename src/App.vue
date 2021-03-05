<template>
  <figure class="flex p-8 justify-center bg-red-50">
    <div class="pt-6 md:p-8 text-center md:text-left space-y-4 bg-red-100 rounded  w-1/2">
      <blockquote>
        <p class="text-lg font-semibold">
          “Tailwind CSS is the only framework that I've seen scale
          on large teams. It’s easy to customize, adapts to any design,
          and the build size is tiny.”
        </p>
      </blockquote>
      <div class="font-medium">
        <div class="text-cyan-600">
          Sarah Dayan
        </div>
        <div class="text-gray-500">
          Staff Engineer, Algolia
        </div>
      </div>
    </div>
  </figure>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
