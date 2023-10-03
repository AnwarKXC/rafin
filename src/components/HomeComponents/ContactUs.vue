<template>
   <section class=" w-screen h-[672px] bg-[#ECF5FB] flex justify-center items-center font-arabic flex-col">
      <div class="container text-center  font-arabic max-w-[744px] text-[20px] leading-[35px]">
         <h1 class="title">{{ $t( 'تواصل معنا' ) }}</h1>
         <div class="max-w-[744px] mx-auto flex justify-between items-center text-start">
            <div class="flex flex-col items-center"><img class="contact" src="/Group 47722@2x.png"
                  alt="">
               <h2 class="title">{{ $t( 'سعداء بزيارتك' ) }}</h2>
               <p class="form-text">{{ $t( 'السادس من أكتوبر - محافظة الجيزة' ) }}</p>
            </div>
            <div class="flex flex-col items-center"><img class="contact" src="/Group 47723@2x.png"
                  alt="">
               <h2 class="title">{{ $t( "إتصل بنا" ) }}</h2>
               <p class="form-text">01234564648 - 01214546535</p>
            </div>
            <div class="flex flex-col items-center"><img class="contact" src="/Group 47724@2x.png"
                  alt="">
               <h2 class="title">{{ $t( 'سعداء بزيارتك' ) }}</h2>
               <p class="form-text">Info@refin.com</p>
            </div>
         </div>
         
      </div>
      <div  class="container text-center  font-arabic max-w-[744px] text-[20px] leading-[35px]">
               <form action="submit" class="text-start pt-6 flex flex-col ">
                  <div class="flex justify-center items-cente max-w-[744px] gap-4">
                     <div>
                        <label for="email">{{ $t( 'الإسم' ) }}</label>
                        <input type="email" name="" id="name" :placeholder=" $t( 'قم بإدخال الاسم' ) ">
                     </div>
                     <div>
                        <label for="name">{{ $t( 'البريد الالكتروني' ) }}</label>
                        <input type="text" name="" id="name"
                           :placeholder=" $t( 'قم بإدخال البريد الالكتروني' ) ">
                     </div>
                  </div>
                  <div class="flex flex-col flex-shrink-0">
                     <label for="name">{{ $t( 'الرسالة' ) }}</label>
                     <input type="text" name="" id="name" class="h-[148px]"
                        :placeholder=" $t( '... يسعدنا قراءة رسالتك' ) ">
                  </div >
               </form>
               <button class="button-prim mt-10">{{ $t( 'يسعدنا انضمامك معنا' ) }}</button>
            </div>
   </section>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>