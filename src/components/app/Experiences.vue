<script setup lang="ts">
import {computed} from "vue";
import MedalIcon from '../../assets/Languages/medal-svgrepo-com.svg';
import {useLanguage} from "@/composables/useLanguage";

interface Job {
  title: string;
  at: string;
  achievements: string[];
  date: string;
}

const {t} = useLanguage();

const jobs = computed<Job[]>(() => [
  {
    title: t.value.experiences.jobs.flutterDev.title,
    at: t.value.experiences.jobs.flutterDev.company,
    date: t.value.experiences.jobs.flutterDev.date,
    achievements: t.value.experiences.jobs.flutterDev.achievements
  },
  {
    title: t.value.experiences.jobs.backendDev1.title,
    at: t.value.experiences.jobs.backendDev1.company,
    date: t.value.experiences.jobs.backendDev1.date,
    achievements: t.value.experiences.jobs.backendDev1.achievements
  },
  {
    title: t.value.experiences.jobs.backendDev2.title,
    at: t.value.experiences.jobs.backendDev2.company,
    date: t.value.experiences.jobs.backendDev2.date,
    achievements: t.value.experiences.jobs.backendDev2.achievements
  }
]);
</script>

<template>
  <section class="experiences__section" id="experiences">
    <h2 class="text-light-green text-3xl text-center">&lt;<span class=" font-bold"> {{ t.experiences.title }} </span>&gt;
    </h2>
    <div class="flex flex-wrap gap-6 mt-16 justify-center">
      <div v-for="job in jobs" class="job__item rounded-md p-6 flex flex-col gap-6">
        <h3 class="job__title text-lg font-medium text-light-green">{{ job.title }}</h3>
        <p class="text-sm text-light-green">{{ t.experiences.at }}: <span class="text-white">{{ job.at }}</span></p>
        <p class="text-sm">{{ job.date }}</p>
        <p class="flex items-center gap-1">
          <img :src="MedalIcon" alt="Medal" class="h-5">
          <span class="text-sm text-yellow">{{ t.experiences.achievements }}</span>
        </p>
        <ul class="achievements__list flex flex-col gap-3">
          <li v-for="ac in job.achievements">{{ ac }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.experiences__section {
  min-height: calc(100vh - 120px);
  padding-top: 120px;

  .job__item {
    background-color: var(--bg-card);
    width: calc(50% - 0.75rem);
    transition: background-color 0.3s ease;

    .achievements__list {
      list-style-type: circle;
      padding-left: 20px;

      li {
        font-size: 0.875rem;
      }
    }
  }
}

@media screen and (max-width: 750px) {
  .experiences__section {
    .job__item {
      width: 100%;
    }

  }
}
</style>