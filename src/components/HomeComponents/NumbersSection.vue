<template>
   <section class="container text-center font-arabic max-w-[938px] text-[20px] leading-[35px] h-[401px] flex justify-center items-center" >
      <div>
         <h1 class="title">{{ $t('ريفاين في ارقام') }}</h1>
         <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف</p>
         <div class="flex justify-evenly items-center mt-10">
            <div class="text-20px">
               <h1 class="title-num">+20</h1>
               <p>{{ $t('معمل تحاليل') }}</p>
            </div>
            <div>
               <h1 class="title-num">+13</h1>
               <p>{{ $t('مستشفي') }}</p>
            </div>
            <div>
               <h1 class="title-num">+10</h1>
               <p>{{ $t("معمل أشعة") }}</p>
            </div>
            <div>
               <h1 class="title-num">+50</h1>
               <p>{{ $t('عيادة') }}</p>
            </div>
         </div>
      </div>
   </section>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>