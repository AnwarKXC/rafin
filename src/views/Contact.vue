<template>
   <main class=" container flex justify-between items-center  font-arabic py-36 ">
      <div class=" text-center  font-arabic  text-[20px] leading-[35px] ">
         <h1 class="title">{{ $t( "كن علي تواصل معنا" ) }}</h1>
         <div class="max-w-[744px] mx-auto flex justify-between items-center text-start flex-col">
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
            <div class=" flex flex-col absolute bottom-4 ">
               <img width="105" src="/Group 39294@2x.png" alt="">
               <div class=" w-[105] flex justify-center"><img width="28" src="/Group 39295@2x.png"
                     alt="">
               </div>
            </div>
         </div>

      </div>
      <div class=" text-center  font-arabic  text-[20px] leading-[35px] mt-20">
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
            </div>
         </form>
         <button class="button-prim mt-10 flex ">{{ $t( 'يسعدنا انضمامك معنا' ) }}</button>
      </div>
   </main>
   <PartnersSection />
      <section class="container flex justify-center items-center font-arabic  mx-auto pb-20 md:-mt-40">
         <div class=" relative ">
            <img src="/Group 47760@2x.png" alt="">
            <div class=" flex flex-col absolute bottom-16 ">
               <img width="105" src="/Group 39294@2x.png" alt="">
               <div class=" w-[105] flex justify-center"><img width="28" src="/Group 39295@2x.png" alt="">
               </div>
            </div>
         </div>
         <div class="text-xl text-right  max-w-[538px] 2xl:pt-40 ">
            <h1 class="title">{{ $t("حمل تطبيق ريفاين و واطمن علي صحتك في أي وقت") }}</h1>
            <div class="font-medium leading-[35px]">
               توفر منصة ريفاين خدمات شاملة في مجال الرعاية الصحية وبرامج التأمين الطبي المتنوعة، لتمكن
               عملائها من الاستفادة من هذه الخدمات وحجزها إلكترونيًا بسهولة. مع العديد من الميزات
               والخدمات، مثل تحديد وترتيب مقدمي الخدمة الطبية حسب المنطقة والمحافظة، وذلك بناءً على
               تقييماتهم وجودة الخدمة التي يقدمونها. كما تتيح للعملاء مقارنة الأسعار
            </div>
            <div class="flex gap-[27px] mt-[27px] justify-center">
               <a href=""><img src="/NoPath@2x.png" alt=""></a>
               <a href=""><img src="/NoPath - Copy@2x.png" alt=""></a>
            </div>
         </div>
      </section>
</template>

<script setup>
import PartnersSection from '../components/HomeComponents/PartnersSection.vue'


</script>

<style lang="scss" scoped></style>