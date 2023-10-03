<template>
   <section class=" w-screen bg-[#FAFAFB] flex justify-center items-center font-arabic py-10">
      <div class=" max-w-[1094px] ">
         <div class="flex justify-between items-center">
            <h1 class="title"> {{ $t( 'المدونة' ) }}</h1>
            <button class="button-prim"> {{ $t( 'المزيد' ) }} <span
                  class=" font-bold">+</span></button>
         </div>
         <div class=" flex justify-center items-center gap-[22px] text-center pt-8 ">
            <ProductCard />
            <ProductCard />
            <ProductCard />
         </div>
      </div>
   </section>
</template>

<script setup>
import ProductCard from './ProductCard.vue'


</script>

<style lang="scss" scoped></style>