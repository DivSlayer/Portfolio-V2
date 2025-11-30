<script setup>
import { onMounted } from "vue";
import Header from "@/components/app/Header.vue";
import Intro from "@/components/app/Intro.vue";
import Projects from "@/components/app/Projects.vue";
import Skills from "@/components/app/Skills.vue";
import Experiences from "@/components/app/Experiences.vue";
import Contact from "@/components/app/Contact.vue";
import { useLanguage } from "@/composables/useLanguage";

// Initialize language system
const { currentLanguage } = useLanguage();

onMounted(() => {
  // Ensure language is initialized
  document.documentElement.dir = currentLanguage.value === 'fa' ? 'rtl' : 'ltr';
  document.documentElement.lang = currentLanguage.value;
  if (currentLanguage.value === 'fa') {
    document.documentElement.classList.add('fa')
  }else{
    document.documentElement.classList.remove('fa')
    
  }
});
</script>
<template>
  <Header/>
  <Intro/>
  <Projects/>
  <Experiences/>
  <Skills/>
  <Contact/>
</template>
<style scoped lang="scss">

</style>
