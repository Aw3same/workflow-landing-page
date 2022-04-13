<template>
  <HelloWorld msg="Vue 3, Vite, TypeScript & Tailwind CSS" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import HelloWorld from '../components/HelloWorld.vue'

export default defineComponent({
  name: 'HomeComponent',
  components: {
    HelloWorld,
  },
})
</script>
