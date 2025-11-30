<script setup lang="ts">
import {useLanguage} from "@/composables/useLanguage";

const {t} = useLanguage();
</script>

<template>

  <section id="about" class="intro-section flex items-center justify-between w-full !pb-30 gap-10">
    <div class="intro__details flex flex-col gap-7 flex-2">
      <div class="code__style ">
        < About >
      </div>
      <div>

        <h2 class="name text-4xl font-bold leading-tight flex items-center flex-wrap gap-4">
          <span class="whitespace-nowrap">Amir Reza Esfandiyari</span>
          <span class="text-lg text-light-green whitespace-nowrap">{{ t.intro.title }}</span>
        </h2>
        <p class="mt-3 text-light-text">
          {{ t.intro.description }}
        </p>
      </div>
      <div class="code__style ">
        &lt;/ About >
      </div>
    </div>
    <div class="intro__profile flex-1 flex justify-end">
      <div class="profile__pic w-80 h-80"></div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/colors';

.intro-section {
  min-height: 100vh;

  .intro__profile {
    .profile__pic {
      border-radius: 50%;
      background-image: url("../../assets/images/profile.png");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      position: relative;

      &::after {
        top: -5px;
        left: -10px;
      }

      &::after, &::before {
        content: '';
        position: absolute;
        width: calc(100% + 30px);
        height: calc(100% + 30px);
        border: 2px solid $lightGreen;
        border-radius: 50%;
        z-index: -1;
      }

      &::before {
        bottom: -5px;
        right: -10px;
      }
    }

  }
}

@media screen and (max-width: 990px) {
  .intro-section {
    .intro__profile {
      .profile__pic {
        width: 200px;
        height: 200px;
      }
    }
  }
}

@media screen and (max-width: 820px) {
  .intro-section {
    .intro__details {

    }
  }
}

@media screen and (max-width: 750px) {
  .intro-section {
    flex-direction: column-reverse;

    .intro__details {

    }
  }
}
</style>