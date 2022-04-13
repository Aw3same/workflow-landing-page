<template>
  <div>
    <Navbar />
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="max-w-5xl mx-auto my-6">
        <router-view />
      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<script lang="ts">
// import { defineComponent } from 'vue'
import Navbar from '@/components/Navbar.vue'
import FooterComponent from '@/components/FooterComponent.vue'


export default {
  components: {
    Navbar,
    FooterComponent,

  },
}

</script>
