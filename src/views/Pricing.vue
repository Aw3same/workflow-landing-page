<template>
  <section class="pt-20 lg:pt-[120px] pb-12 lg:pb-[90px] relative z-20 overflow-hidden">
    <div class="container">
      <div class="flex flex-wrap -mx-4">
        <div class="w-full px-4">
          <div class="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
            <span class="font-semibold text-lg text-primary mb-2 block"> Planes de precios </span>
            <h2 class="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">Nuestros planes</h2>
            <p class="text-base text-body-color">Ofrecemos tres paquetes de precios en función de tus necesidades. Echa un vistazo y elige el que más te guste</p>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap justify-center -mx-4">
        <div class="w-full md:w-1/2 lg:w-1/3 px-4">
          <div class="bg-white rounded-xl relative z-10 overflow-hidden border border-primary border-opacity-20 shadow-pricing py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12 mb-10">
            <span class="text-primary font-semibold text-lg block mb-4"> Empresa 100 % </span>
            <h2 class="font-bold text-dark mb-5 text-[42px]">
              250€
              <span class="text-base text-body-color font-medium"> / persona </span>
            </h2>
            <p class="text-base text-body-color pb-8 mb-8 border-b border-[#F2F2F2]">Todo incluido para el bienestar de tus empleados a un precio insuperable</p>
            <div class="mb-7">
              <p class="text-base text-body-color leading-loose mb-1">50-250 trabajadores</p>
              <p class="text-base text-body-color leading-loose mb-1">Psicología</p>
              <p class="text-base text-body-color leading-loose mb-1">Nutrición</p>
              <p class="text-base text-body-color leading-loose mb-1">Fisioterapia</p>
              <p class="text-base text-body-color leading-loose mb-1">Entrenador personal</p>
              <p class="text-base text-body-color leading-loose mb-1">Talleres a precio especial a partir de 12 empleados</p>
            </div>
            <a
              href="javascript:void(0)"
              class="w-full block text-base font-semibold text-primary bg-transparent border border-[#D4DEFF] rounded-md text-center p-4 hover:text-white hover:bg-gray-800 hover:border-primary transition"
            >
              Elegir Empresa 100%
            </a>
            <div>
              <span class="absolute right-0 top-7 z-[-1]">
                <svg width="77" height="172" viewBox="0 0 77 172" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
                  <defs>
                    <linearGradient id="paint0_linear" x1="86" y1="0" x2="86" y2="172" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#3056D3" stop-opacity="0.09" />
                      <stop offset="1" stop-color="#C4C4C4" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 px-4">
          <div class="bg-white rounded-xl relative z-10 overflow-hidden border border-primary border-opacity-20 shadow-pricing py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12 mb-10">
            <span class="text-primary font-semibold text-lg block mb-4"> Compartido </span>
            <h2 class="font-bold text-dark mb-5 text-[42px]">
              150€
              <span class="text-base text-body-color font-medium"> / persona </span>
            </h2>
            <p class="text-base text-body-color pb-8 mb-8 border-b border-[#F2F2F2]">Asume el 60% del coste de cada servicio de salud para tus empleados.</p>
            <div class="mb-7">
              <p class="text-base text-body-color leading-loose mb-1">Primera sesión gratuita</p>
              <p class="text-base text-body-color leading-loose mb-1">Psicología</p>
              <p class="text-base text-body-color leading-loose mb-1">Nutrición</p>
              <p class="text-base text-body-color leading-loose mb-1">Fisioterapia</p>
              <p class="text-base text-body-color leading-loose mb-1">Entrenador personal</p>
              <p class="text-base text-body-color leading-loose mb-1">Talleres a precio especial a partir de 10 empleados</p>
            </div>
            <a href="javascript:void(0)" class="w-full block text-base font-semibold text-white bg-gray-800 border border-primary rounded-md text-center p-4 hover:bg-opacity-90 transition">
              Elegir Compartido
            </a>
            <div>
              <span class="absolute right-0 top-7 z-[-1]">
                <svg width="77" height="172" viewBox="0 0 77 172" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
                  <defs>
                    <linearGradient id="paint0_linear" x1="86" y1="0" x2="86" y2="172" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#3056D3" stop-opacity="0.09" />
                      <stop offset="1" stop-color="#C4C4C4" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PricingComponent',
  components: {},
})
</script>
