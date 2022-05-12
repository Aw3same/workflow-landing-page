<template>
  <h1>WORKFLOW</h1>
  <div class="container">
    <div class="flex flex-wrap lg:justify-between -mx-4">
      <div class="w-full lg:w-1/2 xl:w-6/12 px-4">
        <div class="max-w-[570px] mb-12 lg:mb-0">
          <span class="block mb-4 text-base text-primary font-semibold">
            Acerca el bienestar a tu empresa
          </span>
          <h2 class="text-dark mb-6 uppercase font-bold text-[32px] sm:text-[40px] lg:text-[36px] xl:text-[40px] ">
            TU PLAN DE SALUD INTEGRAL
          </h2>
          <p class="text-base text-body-color leading-relaxed mb-9">
            Para cualquier duda que tengas, escríbenos un mensaje y nuestro equipo se encargará de resolverla
          </p>
        </div>
      </div>
    </div>
  </div>
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
