<template>
  <div class="flex flex-col h-screen justify-between">
    <Navbar />
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="mb-auto max-w-5xl mx-auto my-6">
        <router-view />
      </div>
    </div>
    <div class="">
      <FooterComponent />
    </div>
  </div>
</template>

<script lang="ts">
import Navbar from '@/components/NavBar.vue'
import FooterComponent from '@/components/FooterComponent.vue'


export default {
  components: {
    Navbar,
    FooterComponent,

  },
}

</script>
