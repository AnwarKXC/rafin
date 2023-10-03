<template>
      <section class="container text-center font-arabic max-w-[938px] text-[20px] leading-[35px] h-[401px] flex justify-center items-center" >
         <div>
            <h1 class="title">{{ $t( "أشهر خدماتنا" ) }}</h1>
            <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف</p>
            <div class="flex justify-evenly items-center mt-10">
               <div class="text-20px">
                  <div class="serv"><img src="/Group 41435@2x.png" alt=""></div>
                  <p>{{ $t( 'معمل تحاليل' ) }}</p>
               </div>
               <div>
                  <div class="serv"><img src="/Group 41318@2x.png" alt=""></div>
                  <p>{{ $t( "معمل أشعة" ) }}</p>
               </div>
               <div>
                  <div class="serv"><img src="/Group 41448@2x.png" alt=""></div>
                  <p>{{ $t( 'مستشفي' ) }}</p>
               </div>
               <div>
                  <div class="serv"><img src="/Group 41477@2x.png" alt=""></div>
                  <p>{{ $t( 'عيادة' ) }}</p>
               </div>
            </div>
         </div>
      </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>