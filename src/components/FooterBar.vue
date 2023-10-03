<template>
   <section class=" container py-[50px]  text-[#191933] font-arabic text-[20px] h-[176px]">
      <div class=" flex justify-between border-t opacity-80 pt-[33px] ">
         <div>
            <img src="/Group 47550.svg" alt="">
         </div>

            <ul class=" flex gap-[62px]">
               <li>
                  <RouterLink to="/">{{ $t( "سياسة الخصوصية") }}</RouterLink>
               </li>
               <li>
                  <RouterLink to="/about-us">{{ $t("سياسة الاسترجاع" ) }}</RouterLink>
               </li>
               <li>
                  <RouterLink to="/contact-us">{{ $t( "شروط الاستخدام") }}</RouterLink>
               </li>
                  <li>|</li>
                  <li>
                     <RouterLink to="/contact-us">{{ $t( "تواصل معنا" ) }}</RouterLink>
                  </li>
            </ul>
         <div class="w-[212px] h-[45px] px-4 rounded-[26px] border-2 flex justify-around items-center">
            <h3 class=" text-[15px]">{{ $t('تابعنا علي') }}</h3>
            <div class="flex justify-center items-center gap-2">
               <a href="http://" ><img width="16" src="/instagram.png" alt=""></a>
               <a href="http://"><img width="16" src="/twitter.png" alt=""></a>
               <a href="http://"><img width="16" src="/facebook-app-symbol.png" alt=""></a>
            </div>
         </div>
      </div>
      <h6 class=" text-end text-[15px] opacity-30 py-[10px]">{{ $t('جميع الحقوق محفوظة لشركة © 2023 Paymac') }}</h6>
   </section>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>