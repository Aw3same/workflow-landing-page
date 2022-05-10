<template>
  <section class="pt-20 lg:pt-[120px] pb-12 lg:pb-[90px]">
    <div class="container">
      <div class="flex flex-wrap -mx-4">
        <div class="w-full px-4">
          <div class="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
            <span class="font-semibold text-lg text-primary mb-2 block">
              Nuestros servicios
            </span>
            <h2 class="font-bold text-3xl  sm:text-4xl md:text-[40px] text-dark mb-4">
              Qué Ofrecemos
            </h2>
            <p class="text-base text-body-color">
              Ofrecemos una amplia gama de servicios multidisciplinares para que puedas mejorar la calidad de vida de tus trabajadores
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap -mx-4">
        <ServiceCardComponent
          v-for="service in services"
          :key="service.id"
          :service="service"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ServiceCardComponent from '@/components/ServiceCard.vue'
import { services } from '@/constants/services'

export default defineComponent({
  name: 'ServicesComponent',
  components: {
    ServiceCardComponent,
  },
  data()
  {
    return {
      services: services,
    }
  },
})
</script>
