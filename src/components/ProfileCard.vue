<template>
  <div class="w-full md:w-1/2 xl:w-1/4 px-4">
    <div class="max-w-[370px] w-full mx-auto mb-10">
      <div class="relative rounded-lg overflow-hidden">
        <img :src="`${person?.photo}`" alt="image" class="w-full h-[325px]" />
        <div class="absolute w-full bottom-5 left-0 text-center">
          <div class="bg-white relative rounded-lg overflow-hidden mx-5 py-5 px-5">
            <h3 class="text-base font-semibold text-dark">
              {{ person?.name }} {{ person?.surname }}
            </h3>
            <p class="text-sm text-body-color">
              {{ person?.job1 }}
            </p>
            <p v-if="person?.job2" class="text-sm text-body-color">
              {{ person?.job2 }}
            </p>
            <div>
              <span class="absolute left-0 bottom-0">
                <svg width="61" height="30" viewBox="0 0 61 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="45" r="45" fill="#13C296" fill-opacity="0.11" />
                </svg>
              </span>
              <span class="absolute top-0 right-0">
                <svg width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="0.706257" cy="24.3533" r="0.646687" transform="rotate(-90 0.706257 24.3533)" fill="#3056D3" />
                  <circle cx="6.39669" cy="24.3533" r="0.646687" transform="rotate(-90 6.39669 24.3533)" fill="#3056D3" />
                  <circle cx="12.0881" cy="24.3533" r="0.646687" transform="rotate(-90 12.0881 24.3533)" fill="#3056D3" />
                  <circle cx="17.7785" cy="24.3533" r="0.646687" transform="rotate(-90 17.7785 24.3533)" fill="#3056D3" />
                  <circle cx="0.706257" cy="18.6624" r="0.646687" transform="rotate(-90 0.706257 18.6624)" fill="#3056D3" />
                  <circle cx="6.39669" cy="18.6624" r="0.646687" transform="rotate(-90 6.39669 18.6624)" fill="#3056D3" />
                  <circle cx="12.0881" cy="18.6624" r="0.646687" transform="rotate(-90 12.0881 18.6624)" fill="#3056D3" />
                  <circle cx="17.7785" cy="18.6624" r="0.646687" transform="rotate(-90 17.7785 18.6624)" fill="#3056D3" />
                  <circle cx="0.706257" cy="12.9717" r="0.646687" transform="rotate(-90 0.706257 12.9717)" fill="#3056D3" />
                  <circle cx="6.39669" cy="12.9717" r="0.646687" transform="rotate(-90 6.39669 12.9717)" fill="#3056D3" />
                  <circle cx="12.0881" cy="12.9717" r="0.646687" transform="rotate(-90 12.0881 12.9717)" fill="#3056D3" />
                  <circle cx="17.7785" cy="12.9717" r="0.646687" transform="rotate(-90 17.7785 12.9717)" fill="#3056D3" />
                  <circle cx="0.706257" cy="7.28077" r="0.646687" transform="rotate(-90 0.706257 7.28077)" fill="#3056D3" />
                  <circle cx="6.39669" cy="7.28077" r="0.646687" transform="rotate(-90 6.39669 7.28077)" fill="#3056D3" />
                  <circle cx="12.0881" cy="7.28077" r="0.646687" transform="rotate(-90 12.0881 7.28077)" fill="#3056D3" />
                  <circle cx="17.7785" cy="7.28077" r="0.646687" transform="rotate(-90 17.7785 7.28077)" fill="#3056D3" />
                  <circle cx="0.706257" cy="1.58989" r="0.646687" transform="rotate(-90 0.706257 1.58989)" fill="#3056D3" />
                  <circle cx="6.39669" cy="1.58989" r="0.646687" transform="rotate(-90 6.39669 1.58989)" fill="#3056D3" />
                  <circle cx="12.0881" cy="1.58989" r="0.646687" transform="rotate(-90 12.0881 1.58989)" fill="#3056D3" />
                  <circle cx="17.7785" cy="1.58989" r="0.646687" transform="rotate(-90 17.7785 1.58989)" fill="#3056D3" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, Prop } from 'vue'
import { IPeople } from '@/types/types'

export default defineComponent({
  name: 'ProfileCardComponent',
  props: {
    person: Object as Prop<IPeople>,
  },
})
</script>
