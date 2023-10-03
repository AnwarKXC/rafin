<template>
   <section class=" w-screen h-[375px] bg-[#ECF5FB] font-arabic flex justify-center items-center">
      <div class="container flex justify-around items-center  ">
         <div class=" max-w-[511px]">
            <h1 class="title"> {{ $t( "مين ريفاين ؟" ) }}</h1>
            <p class=" text-[20px]">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص
               العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد</p>
               <button class="button-prim mt-[35px]">
                  <RouterLink to="/about-us" > {{ $t('معرفة المزيد') }}</RouterLink>
               </button>
         </div>
         <div >
            <img width="171" src="Group 47562@2x.png" alt="">
         </div>
      </div>
   </section>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>