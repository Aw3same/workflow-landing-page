<template>
  <section class="pt-20 lg:pt-[120px] pb-12 lg:pb-[90px]">
    <div class="container">
      <div class="flex flex-wrap -mx-4">
        <div class="w-full px-4">
          <div class="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
            <span class="font-semibold text-lg text-primary mb-2 block">
              Our Services
            </span>
            <h2 class="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  ">
              What We Offer
            </h2>
            <p class="text-base text-body-color">
              There are many variations of passages of Lorem Ipsum available
              but the majority have suffered alteration in some form.
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap -mx-4">
        <!--  Card 1: Psychology -->
        <div class="w-full md:w-1/2 lg:w-1/3 px-4">
          <div class="p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8">
            <div class="w-[70px] h-[70px] flex items-center justify-center bg-gray-800 rounded-2xl mb-8">
              <FontAwesomeIcon icon="brain" class="text-white text-3xl" />
            </div>
            <h4 class="font-semibold text-xl text-dark mb-3"> Psicología </h4>
            <p class="text-body-color"> Professional evaluation on anxiety, depression and many more. We also offer Sports Psychology </p>
          </div>
        </div>
        <!--  Card 2: Physiotherapy -->
        <div class="w-full md:w-1/2 lg:w-1/3 px-4">
          <div class="p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8">
            <div class="w-[70px] h-[70px] flex items-center justify-center bg-gray-800 rounded-2xl mb-8">
              <FontAwesomeIcon icon="hand" class="text-white text-3xl" />
            </div>
            <h4 class="font-semibold text-xl text-dark mb-3"> Fisioterapia </h4>
            <p class="text-body-color"> Fisioterapeutas especializados en  el ámbito deportivo y rehabilitación de lesiones </p>
          </div>
        </div>

        <div class="w-full md:w-1/2 lg:w-1/3 px-4">
          <div class="
               p-10
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8
               ">
            <div class="
                  w-[70px]
                  h-[70px]
                  flex
                  items-center
                  justify-center
                  bg-gray-800
                  rounded-2xl
                  mb-8
                  ">
              <FontAwesomeIcon icon="bowl-food" class="text-white text-3xl" />

            </div>
            <h4 class="font-semibold text-xl text-dark mb-3">
              Nutrición
            </h4>
            <p class="text-body-color">
              Planes de nutrición personalizados y hábitos de alimentación saludables
            </p>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 px-4">
          <div class="
               p-10
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8
               ">
            <div class="
                  w-[70px]
                  h-[70px]
                  flex
                  items-center
                  justify-center
                  bg-gray-800
                  rounded-2xl
                  mb-8
                  ">
              <FontAwesomeIcon icon="volleyball" class="text-white text-3xl" />

            </div>
            <h4 class="font-semibold text-xl text-dark mb-3">
              Entrenador personal
            </h4>
            <p class="text-body-color">
              Personalización de planes de entrenamiento acorde a tus objetivos y necesidades
            </p>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 px-4">
          <div class="
               p-10
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8
               ">
            <div class="
                  w-[70px]
                  h-[70px]
                  flex
                  items-center
                  justify-center
                  bg-gray-800
                  rounded-2xl
                  mb-8
                  ">
              <FontAwesomeIcon icon="house-medical" class="text-white text-3xl" />

            </div>
            <h4 class="font-semibold text-xl text-dark mb-3">
              Medicina
            </h4>
            <p class="text-body-color">
              Nuestros especialistas en medicina cuidarán de tu salud y bienestar
            </p>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 px-4">
          <div class="
               p-10
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8
               ">
            <div class="
                  w-[70px]
                  h-[70px]
                  flex
                  items-center
                  justify-center
                  bg-gray-800
                  rounded-2xl
                  mb-8
                  ">
              <FontAwesomeIcon icon="book" class="text-white text-3xl" />

            </div>
            <h4 class="font-semibold text-xl text-dark mb-3">
              Courses
            </h4>
            <p class="text-body-color">
              Ofrecemos también multitud de cursos, pregunta por ellos
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ServicesComponent',
  components: {},
})
</script>
