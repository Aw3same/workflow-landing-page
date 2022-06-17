<template>
  <section class="pt-20 lg:pt-[120px] pb-10 lg:pb-20">
    <div class="container">
      <div class="flex flex-wrap -mx-4">
        <div class="w-full px-4">
          <div class="text-center mx-auto mb-[60px] max-w-[510px]">
            <span class="font-semibold text-lg text-primary mb-2 block"> Sobre Nosotros</span>
          </div>
        </div>
      </div>
      <!-- MISION -->
      <div class="py-16">
        <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div class="md:5/12 lg:w-5/12">
              <img src="https://media.istockphoto.com/photos/golden-compass-concept-picture-id685797134?k=20&m=685797134&s=612x612&w=0&h=s3uEW5Db2-K37syk-zzoCzHfEA-8-meNL_vQXlsaULw=" alt="image" loading="lazy" width="" height="" />
            </div>
            <div class="md:7/12 lg:w-6/12">
              <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">MISIÓN</h2>
              <p class="mt-6 text-gray-600">
                Queremos mejorar el bienestar físico, mental, emocional, social y deportivo de los trabajadores empresariales mediante una plataforma de salud digital enfocada en el bienestar general.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Vision -->
      <div class="py-16">
        <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div class="md:7/12 lg:w-6/12">
              <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">VISIÓN</h2>
              <p class="mt-6 text-gray-600">
                Aspiramos a ser el primer promotor de una cultura de bienestar psicológico y físico en la población empresarial en Colombia siendo referentes en el cuidado y promoción de la salud en
                las empresas colombianas.
              </p>
            </div>
            <div class="md:5/12 lg:w-5/12">
              <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="image" loading="lazy" width="" height="" />
            </div>
          </div>
        </div>
      </div>

      <!-- VALORES -->
      <div class="py-16">
        <h2 class="text-2xl text-center text-gray-900 font-bold md:text-4xl">VALORES</h2>
        <div class="w-full px-4 content-center">
          <div class="flex flex-wrap">
            <div class="w-full md:w-6/12 px-4">
              <div class="relative flex flex-col mt-4">
                <div class="px-4 py-5 flex-auto">
                  <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                    <FontAwesomeIcon icon="person" class="text-black text-3xl" />
                  </div>
                  <h6 class="text-xl mb-1 font-semibold">Servicio al cliente</h6>
                  <p class="mb-4 text-blueGray-500">Todas las acciones de la empresa están dirigidas a satisfacer las necesidades de los clientes.</p>
                </div>
              </div>
              <div class="relative flex flex-col min-w-0">
                <div class="px-4 py-5 flex-auto">
                  <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                    <FontAwesomeIcon icon="user-group" class="text-black text-2xl" />
                  </div>
                  <h6 class="text-xl mb-1 font-semibold">Colaboración/Cooperación</h6>
                  <p class="mb-4 text-blueGray-500">Se busca la colaboración entre empleados, independientemente de su nivel jerárquico.</p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-6/12 px-4">
              <div class="relative flex flex-col min-w-0 mt-4">
                <div class="px-4 py-5 flex-auto">
                  <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                    <FontAwesomeIcon icon="user-graduate" class="text-black text-2xl" />
                  </div>
                  <h6 class="text-xl mb-1 font-semibold">Excelencia</h6>
                  <p class="mb-4 text-blueGray-500">Contamos con profesionales en constante formación para ofrecer un servicio de calidad y actualizado.</p>
                </div>
              </div>
              <div class="relative flex flex-col min-w-0">
                <div class="px-4 py-5 flex-auto">
                  <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                    <FontAwesomeIcon icon="heart" class="text-black text-3xl" />
                  </div>
                  <h6 class="text-xl mb-1 font-semibold">Responsabilidad social</h6>
                  <p class="mb-4 text-blueGray-500">Estamos comprometidos en promover y proteger la salud de las personas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap -mx-4">
        <div class="w-full px-4">
          <div class="text-center mx-auto mb-[60px] max-w-[510px]">
            <h2 class="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">Nuestro Increíble Equipo</h2>
            <p class="text-base text-body-color">Echa un vistazo a la gente que forma parte de Workflow</p>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap justify-center -mx-4">
        <ProfileCardComponent v-for="person in team" :key="person.id" :person="person" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { team } from '@/constants/people'
import { defineComponent } from 'vue'
import ProfileCardComponent from '@/components/ProfileCard.vue'

export default defineComponent({
  name: 'AboutComponent',
  components: {
    ProfileCardComponent,
  },
  data() {
    return {
      team: team,
    }
  },
})
</script>
