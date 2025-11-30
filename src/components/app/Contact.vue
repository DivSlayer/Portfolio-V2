<script setup lang="ts">
import {computed} from "vue";
import PhoneIcon from '../../assets/Languages/call-outline.svg';
import GithubIcon from '../../assets/Languages/logo-github.svg';
import LinkedinIcon from '../../assets/Languages/logo-linkedin (1).svg';
import MailIcon from '../../assets/Languages/mail-outline.svg';
import {useLanguage} from "@/composables/useLanguage";

interface SocialLink {
  title: string,
  icon: string,
  link: string,
  value: string,
}

const { t } = useLanguage();

const social_links = computed<SocialLink[]>(() => [
  {
    title: t.value.contact.github,
    icon: GithubIcon,
    value: 'DivSlayer',
    link: 'https://github.com/DivSlayer'
  }, {
    title: t.value.contact.linkedin,
    icon: LinkedinIcon,
    link: 'https://www.linkedin.com/in/amirrezesf/',
    value: '@amirrezesf'
  }, {
    title: t.value.contact.email,
    icon: MailIcon,
    link: 'mail:divslayer.git@gmail.com',
    value: 'divslayer.git@gmail.com'
  }, {
    title: t.value.contact.phone,
    icon: PhoneIcon,
    link: 'tel:+989214834536',
    value: '+989214834536'
  }
]);
</script>

<template>
  <section class="contact__section" id="contact">
    <h2 class="text-light-green text-3xl text-center">&lt;<span class="font-bold">{{ t.contact.title }}</span>&gt;</h2>
    <div class="mt-16 flex items-start gap-6 flex-wrap justify-center">
      <a v-for="item in social_links" :href="item.link" class="social__item p-6 rounded-md flex items-center gap-5">
        <div class="social__icon p-3">
          <img :src="item.icon" alt="icon" class="h-8"/>
        </div>
        <div class="flex flex-col gap-3 w-36">
          <h4 class="social__title text-light-green font-medium overflow-hidden text-ellipsis w-full whitespace-nowrap">{{ item.title }}</h4>
          <p class="text-xs overflow-hidden text-ellipsis w-full whitespace-nowrap">{{ item.value }}</p>
        </div>
      </a>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/assets/colors";

.contact__section {
  min-height: 100vh;
  padding-top: 120px;

  .social__item {
    background-color: var(--bg-card);
    transition: background-color 0.3s ease;

    &:hover {
      background-color: $lightGreen;

      .social__title {
        color: #fff;
      }
    }

    .social__icon {
      background-color: var(--bg-primary);
      border-radius: 100%;
      transition: background-color 0.3s ease;
      
      img {
        // In dark mode: invert to white, in light mode: keep original (dark)
        filter: brightness(0) saturate(100%) invert(var(--icon-invert));
        transition: filter 0.3s ease;
        opacity: 0.9;
      }
    }
    
    // On hover, make icons white
    &:hover .social__icon img {
      filter: brightness(0) saturate(100%) invert(1);
      opacity: 1;
    }
  }
}
</style>