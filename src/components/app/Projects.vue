<script setup lang="ts">
import {computed} from "vue";
import {Project} from "@/types/project";
import {
  DjangoLang,
  FlutterLang,
  NuxtLang,
  PythonLang,
  ReactLang,
  TypeScriptLang,
  VueLang
} from "@/types/programing_language";
import {useLanguage} from "@/composables/useLanguage";

import CRMBanner from '../../assets/Projects/CRM-Nuxt/preview.png'

const {t} = useLanguage();

const projects = computed<Project[]>(() => [
  {
    name: t.value.projects.items.foodDelivery.name,
    banner: 'https://raw.githubusercontent.com/DivSlayer/Food-App/main/mockups/banner.png',
    description: t.value.projects.items.foodDelivery.description,
    url: 'https://github.com/DivSlayer/Food-App',
    languages: [ReactLang, DjangoLang, FlutterLang]
  },
  {
    name: t.value.projects.items.crmNuxt.name,
    banner: CRMBanner,
    description: t.value.projects.items.crmNuxt.description,
    url: 'https://github.com/DivSlayer/Food-App',
    languages: [NuxtLang, VueLang, TypeScriptLang]
  },
  {
    name: t.value.projects.items.chatApp.name,
    banner: 'https://raw.githubusercontent.com/DivSlayer/Chat-App/main/mockups/banner.png',
    description: t.value.projects.items.chatApp.description,
    url: 'https://github.com/DivSlayer/Chat-App',
    languages: [DjangoLang, FlutterLang]
  },
  {
    name: t.value.projects.items.anyDeskApp.name,
    banner: 'https://raw.githubusercontent.com/DivSlayer/AnyDeskApp/main/banner.png',
    description: t.value.projects.items.anyDeskApp.description,
    url: 'https://github.com/DivSlayer/AnyDeskApp',
    languages: [PythonLang]
  },
  {
    name: t.value.projects.items.financeApp.name,
    banner: 'https://raw.githubusercontent.com/DivSlayer/Finance-App/main/images/banner-big.png',
    description: t.value.projects.items.financeApp.description,
    url: 'https://github.com/DivSlayer/Finance-App',
    languages: [FlutterLang]
  },
  {
    name: t.value.projects.items.covidApp.name,
    banner: 'https://raw.githubusercontent.com/DivSlayer/Covid-19-App/main/banner.png',
    description: t.value.projects.items.covidApp.description,
    url: 'https://github.com/DivSlayer/Finance-App',
    languages: [FlutterLang]
  },
]);
</script>

<template>
  <section class="projects__section" id="projects">
    <h2 class="text-light-green text-3xl text-center">&lt;<span class=" font-bold"> {{ t.projects.title }} </span>&gt;
    </h2>
    <div class="projects__list flex flex-wrap gap-6 mt-16">
      <div v-for="item in projects" class="projects__item rounded-md flex flex-col">
        <div class="project__img flex items-center overflow-hidden">
          <img :src="item.banner" alt="banner" class="rounded-md"/>
        </div>
        <h3 class="title text-lg font-medium mt-5">{{ item.name }}</h3>
        <p class="mt-3 text-light-text text-sm project__description">{{ item.description }}</p>
        <div class="flex items-center mt-3 gap-2">
          <div v-for="lang in item.languages" class="p-1 bg-white rounded-full language__item">
            <img :src="lang.image" alt="language" class="h-6" :aria-label="lang.name" :title="lang.name"/>
          </div>
        </div>
        <a :href="item.url"
           class="mt-5 py-3 bg-light-green text-sm border-light-green border-solid border-2 hover:bg-transparent text-center rounded-md"
           target="_blank">
          {{ t.projects.viewProject }}
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.projects__section {
  min-height: 100vh;
  padding-top: 120px;

  .projects__list {
    .projects__item {
      width: calc(33.33% - 1rem);
      min-height: 300px;
      background-color: var(--bg-card);
      padding: 20px;
      transition: background-color 0.3s ease;

      .project__img {
        width: 100%;
        height: 200px;

        img {
          width: 100%;
        }
      }

      .project__description {
        display: -webkit-box;
        line-clamp: 3;
        -webkit-line-clamp: 3; /* number of lines you want */
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }

    }
  }
}

@media screen and (max-width: 900px) {
  .projects__section {
    .projects__list {
      .projects__item {
        width: calc(50% - .75rem);
      }
    }
  }
}

@media screen and (max-width: 750px) {
  .projects__section {
    .projects__list {
      .projects__item {
        width: calc(100%);
      }
    }
  }
}
</style>