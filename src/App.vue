<template>
<NavBar/>
  <RouterView class="flex-1 " v-slot=" { Component } ">
    <component :is="Component" />
  </RouterView>
  <FooterBar/>
</template>

<script setup>
import { RouterView } from "vue-router"
import NavBar from "./components/NavBar.vue"
import FooterBar from "./components/FooterBar.vue"

if ( !localStorage.getItem( 'lang' ) ) {
  localStorage.setItem( 'lang', 'AR' )
} else {
  localStorage.getItem( 'lang' )
}


const lang = localStorage.getItem( "lang" )

</script>

<style  scoped></style>