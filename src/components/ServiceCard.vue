<template>
  <div class="w-full md:w-1/2 lg:w-1/3 px-4">
    <div class="p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8 h-80">
      <div class="w-[70px] h-[70px] flex items-center justify-center bg-gray-800 rounded-2xl mb-8">
        <FontAwesomeIcon :icon="service?.icon" class="text-white text-3xl" />
      </div>
      <h4 class="font-semibold text-xl text-dark mb-3">
        {{ service?.name }}
      </h4>
      <p class="text-body-color">
        {{ service?.description }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, Prop } from 'vue'
import { IService } from '@/types/types'

export default defineComponent({
  name: 'ServiceCardComponent',
  props: {
    service: Object as Prop<IService>,
  },
})
</script>
