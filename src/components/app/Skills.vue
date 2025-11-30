<script setup lang="ts">
import {computed} from "vue";
import {
  AfterEffects,
  DartLang,
  DjangoLang,
  DockerLang, FFMPEG, FlaskLang,
  FlutterLang, GitLang, HtmlLang, JavaLang, LaravelLang, LinuxLang, Nginx,
  NuxtLang, Photoshop, PHPLang, Premiere,
  PythonLang,
  ReactLang, SassLang, TypeScriptLang,
  VueLang
} from "@/types/programing_language";
import {useLanguage} from "@/composables/useLanguage";

interface Category {
  name: string;
  skills: Skill[];
}

interface Skill {
  name: string,
  image: string,
  percentage: number
}

const {t} = useLanguage();

const skills: Skill[] = [
  {name: FlutterLang.name, image: FlutterLang.image, percentage: 85}, // many Flutter apps
  {name: DjangoLang.name, image: DjangoLang.image, percentage: 90}, // backend in Food-App, Chat-App
  {name: VueLang.name, image: VueLang.image, percentage: 78}, // CRM-Nuxt present
  {name: NuxtLang.name, image: NuxtLang.image, percentage: 82}, // explicit CRM-Nuxt repo
  {name: ReactLang.name, image: ReactLang.image, percentage: 80}, // React frontend in Food-App
  {name: PythonLang.name, image: PythonLang.image, percentage: 84}, // multiple Python/Django projects
  {name: TypeScriptLang.name, image: TypeScriptLang.image, percentage: 70}, // some TS usage evidence but not dominant
  {name: DockerLang.name, image: DockerLang.image, percentage: 66}, // docker-compose / Dockerfiles in Food-App
  {name: HtmlLang.name, image: HtmlLang.image, percentage: 88}, // solid frontend work
  {name: SassLang.name, image: SassLang.image, percentage: 74}, // frontend styling present but less prominent
  {name: GitLang.name, image: GitLang.image, percentage: 86},  // clear use of Git/GitHub and multi-repo management
  {name: PHPLang.name, image: PHPLang.image, percentage: 82},  // clear use of Git/GitHub and multi-repo management
  {name: LaravelLang.name, image: LaravelLang.image, percentage: 80},  // clear use of Git/GitHub and multi-repo management
  {name: FlaskLang.name, image: FlaskLang.image, percentage: 80},  // clear use of Git/GitHub and multi-repo management
  {name: DartLang.name, image: DartLang.image, percentage: 87},  // clear use of Git/GitHub and multi-repo management
  {name: JavaLang.name, image: JavaLang.image, percentage: 60},  // clear use of Git/GitHub and multi-repo management
  {name: LinuxLang.name, image: LinuxLang.image, percentage: 85},  // clear use of Git/GitHub and multi-repo management
  {name: FFMPEG.name, image: FFMPEG.image, percentage: 76},  // clear use of Git/GitHub and multi-repo management
  {name: AfterEffects.name, image: AfterEffects.image, percentage: 67},  // clear use of Git/GitHub and multi-repo management
  {name: Photoshop.name, image: Photoshop.image, percentage: 73},  // clear use of Git/GitHub and multi-repo management
  {name: Premiere.name, image: Premiere.image, percentage: 80},  // clear use of Git/GitHub and multi-repo management
  {name: Nginx.name, image: Nginx.image, percentage: 77},  // clear use of Git/GitHub and multi-repo management
];

const Cats = computed<Category[]>(() => [
  {
    name: t.value.skills.categories.frontEnd,
    skills: [
      skills[2],
      skills[3],
      skills[4],
      skills[6],
      skills[8],
      skills[9],
    ]
  },
  {
    name: t.value.skills.categories.backEnd,
    skills: [
      skills[1],
      skills[11],
      skills[12],
      skills[13]
    ]
  },
  {
    name: t.value.skills.categories.appDev,
    skills: [
      skills[0],
      {
        name: 'React Native',
        image: ReactLang.image,
        percentage: 84,
      },
      skills[14],
      skills[15]
    ]
  },
  {
    name: t.value.skills.categories.devOps,
    skills: [
      skills[7],
      skills[16],
      skills[21],
    ]
  },
  {
    name: t.value.skills.categories.multimedia,
    skills: [
      skills[17],
      skills[18],
      skills[19],
      skills[20],
    ]
  },
]);

/* -------------------------
  NEW: color helper
  maps 0 -> red (hue 0) and 100 -> green (hue 120)
--------------------------*/
const clamp = (v: number) => Math.min(100, Math.max(0, Number(v) || 0));
const MIN_COLOR = "#ff4d4d"; // color for 0%
const MAX_COLOR = "#4aaf5e"; // color for 100% (your requested green)

// Helper: Convert hex → RGB
function hexToRgb(hex: string) {
  const sanitized = hex.replace("#", "");
  return {
    r: parseInt(sanitized.substring(0, 2), 16),
    g: parseInt(sanitized.substring(2, 4), 16),
    b: parseInt(sanitized.substring(4, 6), 16),
  };
}

// Helper: Interpolate between two hex colors
function interpolateColor(minHex: string, maxHex: string, pct: number) {
  const t = clamp(pct) / 100;
  const c1 = hexToRgb(minHex);
  const c2 = hexToRgb(maxHex);

  const r = Math.round(c1.r + (c2.r - c1.r) * t);
  const g = Math.round(c1.g + (c2.g - c1.g) * t);
  const b = Math.round(c1.b + (c2.b - c1.b) * t);

  return `rgb(${r}, ${g}, ${b})`;
}

function colorFromPercentage(pct: number) {
  return interpolateColor(MIN_COLOR, MAX_COLOR, pct);
}

function getLevel(percentage: number): string {
  if (percentage > 80) {
    return t.value.skills.levels.expert;
  } else if (percentage <= 80 && percentage >= 50) {
    return t.value.skills.levels.advanced;
  }
  return t.value.skills.levels.beginner;
}
</script>

<template>
  <section class="skills-section" id="skills">
    <h2 class="text-light-green text-3xl text-center">&lt;<span class="font-bold">{{ t.skills.title }}</span>&gt;</h2>
    <div class="skills__list grid grid-flow-row-dense mt-16 gap-6">
      <div v-for="cat in Cats" class="skills__category p-5 rounded-md"
           :style="{gridRow: `span ${cat.skills.length + 1}`}">
        <h2 class="text-2xl text-center font-medium mb-8">{{ cat.name }}</h2>
        <div class="flex flex-col gap-6">
          <div v-for="skill in cat.skills" class="skills__item p-5 rounded-md flex items-center gap-6 w-full relative">
            <img :src="skill.image" alt="" class="h-12"/>
            <div class="w-full flex flex-col gap-5">
              <h4 class="name">{{ skill.name }}</h4>
              <div class="skills__slider w-full h-3 rounded-full">
                <div
                    class="slider__value bg-light-green h-3 rounded-full"
                    :style="{ width: skill.percentage + '%', background: colorFromPercentage(skill.percentage) }"
                />
              </div>
            </div>
            <p class="level__tag absolute bg-light-green px-3 py-1 text-sm">
              {{ getLevel(skill.percentage) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/colors';

.skills-section {
  min-height: 100vh;
  padding-top: 120px;

  .skills__list {
    grid-auto-rows: 100px; /* base row height to calculate spans */
    column-gap: 1rem;
    row-gap: 1rem;
    grid-template-columns: repeat(3, 1fr); /* 3 columns */
    & > div:nth-child(1) {
      grid-column: 1 / 2;
    }

    & > div:nth-child(2) {
      grid-column: 2 / 3;
    }

    & > div:nth-child(3) {
      grid-column: 3 / 4;
    }

    & > div:nth-child(4) {
      grid-column: 2 / 3;
    }

    .skills__category {
      background-color: var(--bg-card);
      width: 100%;
      transition: background-color 0.3s ease;

    }

    .skills__item {
      background-color: var(--bg-card-hover);
      cursor: pointer;
      z-index: 100;
      transition: background-color 0.3s ease, color 0.3s ease;

      &:hover {
        background-color: var(--bg-card-hover);
        border-radius: 0 6px 6px 6px;

        .name {
          color: var(--text-primary);
        }

        .level__tag {
          color: #fff;
          background-color: $lightGreen;
          transform: translateY(-100%);
        }
      }

      .skills__slider {
        background-color: var(--bg-card-hover);
        width: 100%;
      }

      .level__tag {
        top: 0;
        left: 0;
        transform: translateY(0%);
        border-radius: 6px 6px 0 0;
        z-index: 10;
        background-color: transparent;
        color: transparent;

      }
    }
  }
}

@media screen and (max-width: 900px) {
  .skills-section {
    .skills__list {
      grid-template-columns:repeat(2, 1fr);

      & > div:nth-child(1) {
        grid-column: 1 / 2;
      }

      & > div:nth-child(2) {
        grid-column: 2 / 3;
      }

      & > div:nth-child(3) {
        grid-column: 1 / 2;
      }

      & > div:nth-child(4) {
        grid-column: 2 / 3;
      }
    }
  }
}

@media screen and (max-width: 750px) {
  .skills-section {
    .skills__list {
      grid-template-columns:repeat(1, 1fr);

      & > div:nth-child(1) {
        grid-column: 1 / 2;
      }

      & > div:nth-child(2) {
        grid-column: 1 / 2;
      }

      & > div:nth-child(3) {
        grid-column: 1 / 2;
      }

      & > div:nth-child(4) {
        grid-column: 1 / 2;
      }
    }
  }
}
</style>
