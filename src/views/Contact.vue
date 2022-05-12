<template>
  <div class="container">
    <div class="flex flex-wrap lg:justify-between -mx-4">
      <div class="w-full lg:w-1/2 xl:w-6/12 px-4">
        <div class="max-w-[570px] mb-12 lg:mb-0">
          <span class="block mb-4 text-base text-primary font-semibold">
            Contactanos
          </span>
          <h2 class="text-dark mb-6 uppercase font-bold text-[32px] sm:text-[40px] lg:text-[36px] xl:text-[40px] ">
            PONTE EN CONTACTO CON NOSOTROS
          </h2>
          <p class="text-base text-body-color leading-relaxed mb-9">
            Para cualquier duda que tengas, escríbenos un mensaje y nuestro equipo se encargará de resolverla
          </p>
          <div class="flex mb-8 max-w-[370px] w-full">
            <div class="max-w-[60px] sm:max-w-[70px] w-full h-[60px] sm:h-[70px] flex items-center justify-center mr-6 overflow-hidden bg-gray-800 bg-opacity-5 text-primary rounded ">
              <FontAwesomeIcon icon="house" class="text-black text-4xl" />
            </div>
            <div class="w-full">
              <h4 class="font-bold text-dark text-xl mb-1">
                Nuestras oficinas
              </h4>
              <p class="text-base text-body-color">
                Carrera 10 #72-66, Bogotá DC, Colombia
              </p>
            </div>
          </div>
          <div class="flex mb-8 max-w-[370px] w-full">
            <div class="max-w-[60px] sm:max-w-[70px] w-full h-[60px] sm:h-[70px] flex items-center justify-center mr-6 overflow-hidden bg-gray-800 bg-opacity-5 text-primary rounded ">
              <FontAwesomeIcon icon="square-phone" class="text-black text-4xl" />
            </div>
            <div class="w-full">
              <h4 class="font-bold text-dark text-xl mb-1">
                Teléfono
              </h4>
              <p class="text-base text-body-color">
                (+11)81 414 257 9980
              </p>
            </div>
          </div>
          <div class="flex mb-8 max-w-[370px] w-full">
            <div class="max-w-[60px] sm:max-w-[70px] w-full h-[60px] sm:h-[70px] flex items-center justify-center mr-6 overflow-hidden bg-gray-800 bg-opacity-5 text-primary rounded ">
              <FontAwesomeIcon icon="envelope" class="text-black text-4xl" />
            </div>
            <div class="w-full">
              <h4 class="font-bold text-dark text-xl mb-1">
                Email
              </h4>
              <p class="text-base text-body-color">
                info@workflow.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-1/2 xl:w-5/12 px-4">
        <div class="bg-white relative rounded-lg p-8 sm:p-12 shadow-lg">
          <form>
            <div class="mb-6">
              <input type="text" placeholder="Tu Nombre" class="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary" />
            </div>
            <div class="mb-6">
              <input type="email" placeholder="Tu Email" class="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary" />
            </div>
            <div class="mb-6">
              <input type="text" placeholder="Tu Teléfono" class="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary" />
            </div>
            <div class="mb-6">
              <textarea rows="6" placeholder="Tu mensaje" class="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] resize-none outline-none focus-visible:shadow-none focus:border-primary"></textarea>
            </div>
            <div>
              <button type="submit" class="w-full text-white bg-gray-800 rounded border border-primary p-3 transition hover:bg-opacity-90 ">
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ContactComponent',
  components: {},
})

</script>
