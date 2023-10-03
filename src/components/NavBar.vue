<template>
   <header
      class="container h-[63px] md:h-[106px]  flex justify-between items-center text-lg  uppercase  ">
      <div class="flex justify-between gap-[160px] font-arabic items-center">
         <div>
            <img src="/Group 47550.svg" alt="">
         </div>
         <nav class="hidden md:inline-flex font-medium">
            <ul class=" flex gap-[62px]">
               <li>
                  <RouterLink to="/">{{ $t( 'الرئيسية' ) }}</RouterLink>
               </li>
               <li>
                  <RouterLink to="/about-us">{{ $t( "من نحن" ) }}</RouterLink>
               </li>
               <li>
                  <RouterLink to="/contact-us">{{ $t( "تواصل معنا" ) }}</RouterLink>
               </li>
               <li>
                  <RouterLink to="/blog">{{ $t( "المدونة" ) }}</RouterLink>
               </li>
            </ul>
         </nav>
      </div>
      <div class="md:hidden ">
         <img src="/left-alignment.svg" alt="">
      </div>

      <div class="hidden md:inline-flex">
         <button class="button-prim">
            <a href="">{{ $t( 'تحميل التطبيق' ) }}</a>
         </button>
      </div>
   </header>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>