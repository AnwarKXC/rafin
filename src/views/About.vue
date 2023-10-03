<template>
   <main class=" font-arabic ">
      <div class=" -mt-40">
         <HeroSection />
      </div>
      <section class=" font-arabic flex justify-center items-center pb-10">
         <div class="container flex justify-around items-center  ">
            <div class=" max-w-[690px]">
               <h1 class="title"> {{ $t( " مين ريفاين ؟" ) }}</h1>
               <p class=" text-[20px]">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                  هذا النص من مولد النص
                  العربى، حيث يمكنك أن تولد مثل هذا النص أو
                  ذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                  هذا النص من مولد النص
                  العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد
                  العديد من النصوص الأخرى إضافة إلى زيادة عدد
               </p>


            </div>
            <div class=" order-first">
               <img width="171" src="Group 47562@2x.png" alt="">
            </div>
         </div>
      </section>
      <div class=" bg-[#ECF5FB]">
         <NumbersSection />
         <section class="h-[314px] bg-prim text-center flex justify-center flex-col items-center">
            <h1 class=" text-[48px] text-white">{{ $t('هل لديك أي إستفسار يسعدنا تواصلك معنا') }}</h1>
            <button class=" text-[23px] text-prim bg-white px-[73px] py-2.5 rounded-[10px] my-[34px]">{{ $t('تواصل معنا') }}</button>
         </section>
         <PartnersSection/>
      </div>
   </main>
</template>

<script setup>

import HeroSection from '../components/HomeComponents/HeroSection.vue'
import NumbersSection from '../components/HomeComponents/NumbersSection.vue'
import PartnersSection from '../components/HomeComponents/PartnersSection.vue'


</script>

<style lang="scss" scoped></style>