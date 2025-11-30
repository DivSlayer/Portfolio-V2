<script setup lang="ts">
import {ref, onMounted, onUnmounted, computed} from "vue";
import {useLanguage} from "@/composables/useLanguage";
import {useTheme} from "@/composables/useTheme";

const {currentLanguage, t, setLanguage} = useLanguage();
const {isDark, toggleTheme} = useTheme();
const headerRef = ref<null | HTMLElement>(null);
const activeSection = ref<string>('about');

// Section IDs in order
const sections = ['about', 'projects', 'experiences', 'skills', 'contact'];

let scrollTimeout: number | null = null;

function updateActiveSection() {
  // Check which section is currently in view
  const scrollPosition = window.scrollY + 150; // Offset for header height

  // Check from bottom to top to get the section we're currently in
  for (let i = sections.length - 1; i >= 0; i--) {
    const section = document.getElementById(sections[i]);
    if (section) {
      const sectionTop = section.offsetTop;
      if (scrollPosition >= sectionTop) {
        activeSection.value = sections[i];
        return;
      }
    }
  }

  // Default to first section if at the top
  activeSection.value = sections[0];
}

function handleScroll() {
  // Update sticky header
  if (window.scrollY >= 100) {
    if (headerRef.value) {
      headerRef.value.classList.add('sticky');
    }
  } else {
    if (headerRef.value) {
      headerRef.value.classList.remove('sticky');
    }
  }

  // Update active section with throttling
  if (scrollTimeout !== null) {
    clearTimeout(scrollTimeout);
  }
  scrollTimeout = window.setTimeout(() => {
    updateActiveSection();
  }, 10);
}

onMounted(() => {
  // Set up scroll listener
  window.addEventListener('scroll', handleScroll, {passive: true});

  // Initial check
  updateActiveSection();
});

onUnmounted(() => {
  if (scrollTimeout !== null) {
    clearTimeout(scrollTimeout);
  }
  window.removeEventListener('scroll', handleScroll);
});

const isFa = computed(() => currentLanguage.value === 'fa');

function setLanguageTo(lang: 'en' | 'fa') {
  setLanguage(lang);
}

const showMenu = ref(false);


</script>

<template>
  <header class=" flex items-center justify-between w-full" ref="headerRef">
    <h1 class="logo text-2xl flex items-center flex-1">
      <span class="mr-3 text-md text-light-green">//</span>
      <span>DivSlayer</span>
    </h1>
    <div :class="['nav-links flex items-center flex-1 gap-4 justify-around', {'active': showMenu}]">
      <a href="#about" :class="{ active: activeSection === 'about' }">{{ t.nav.about }}</a>
      <a href="#projects" :class="{ active: activeSection === 'projects' }">{{ t.nav.projects }}</a>
      <a href="#experiences" :class="{ active: activeSection === 'experiences' }">{{ t.nav.experiences }}</a>
      <a href="#skills" :class="{ active: activeSection === 'skills' }">{{ t.nav.skills }}</a>
      <a href="#contact" :class="{ active: activeSection === 'contact' }">{{ t.nav.contact }}</a>
    </div>
    <div class="burger menu-btn-two">
      <input type="checkbox" v-model="showMenu"/>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="flex items-center gap-4 flex-1 justify-end">
      <div :class="['language__selector flex items-center gap-2 relative', {'fa': isFa}]">
        <button class="text-sm" @click="setLanguageTo('en')">En</button>
        <button class="text-sm" @click="setLanguageTo('fa')">Fa</button>
        <div class="active__bg absolute w-full h-full bg-light-green"/>
      </div>
      <button :class="['toggle__theme grid items-center p-2', {'dark': isDark}]" @click="toggleTheme">
        <!-- Sun icon for light mode -->
        <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="h-6" viewBox="0 0 512 512">
          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"
                d="M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94"/>
          <circle cx="256" cy="256" r="80" fill="none" stroke="currentColor" stroke-linecap="round"
                  stroke-miterlimit="10" stroke-width="32"/>
        </svg>
        <!-- Moon icon for dark mode -->
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6" viewBox="0 0 512 512">
          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"
                d="M160 136c0-30.62 4.51-61.61 16-88C99 57 48 159.32 48 256c0 114.69 93.31 208 208 208 96.68 0 199-51 208-128-26.39 11.49-57.38 16-88 16a136 136 0 01-136-136z"/>
        </svg>
      </button>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import "@/assets/colors";

header {
  padding: 25px 10%;
  position: sticky;
  top: 0;
  z-index: 100;

  &.sticky {
    background-color: var(--bg-secondary);
    backdrop-filter: blur(10px);
  }


  .language__selector {
    border-radius: 40px;
    border: 2px solid $lightText;

    button {

      padding: 7px 20px;
    }

    &.fa {
      .active__bg {
        border-radius: 0 40px 40px 0;
        transform: translateX(100%);
      }
    }

    .active__bg {
      z-index: -1;
      border-radius: 40px 0 0 40px;
      width: 50%;
      top: 0;
      left: 0;
      transform: translateX(0%);
    }
  }

  .toggle__theme {
    border: 2px solid $lightGreen;
    border-radius: 100%;
    background-color: $lightGreen;
    color: #fff;

    &.dark {
      background-color: transparent;
      color: $lightGreen;
    }
  }

  .nav-links {
    a {
      position: relative;
      display: flex;
      align-items: center;
      flex-direction: column;
      white-space: nowrap;

      &.active {
        color: $lightGreen;

        &:hover {
          &::after {
            width: 0;
          }
        }
      }

      &::after {
        content: "";
        position: absolute;
        bottom: -5px;
        height: 2px;
        width: 0;
        border-radius: 10px;
        background-color: $lightGreen;
        transition: all 0.2s ease;

      }

      &:hover {
        color: $lightGreen;

        &::after {
          width: 100%;
        }
      }

    }
  }

  .menu-btn-two {

    //cursor: pointer;
    display: none;
    flex-direction: column;
    align-items: center;
    z-index: 99;
    height: auto;

    input {
      display: block;
      cursor: pointer;
      position: absolute;
      height: 40px;
      width: 40px;
      opacity: 0;
      z-index: 9;

      &:checked ~ span {
        &:nth-child(2) {
          opacity: 0;
          transform: scale(0)
        }

        &:nth-child(3) {
          transform: rotate(45deg);
          width: 35px;
          background: $lightGreen;
          box-shadow: 0 0 2em 0.2em $lightGreen;
        }

        &:nth-child(4) {
          display: block;
          transform: rotate(135deg);
          opacity: 1;
          margin-top: -3px;
          width: 35px;
          background: $lightGreen;
          box-shadow: 0 0 2em 0.2em $lightGreen;
        }

        &:nth-child(5) {
          opacity: 0;
          transform: scale(0)
        }


      }
    }

    span {
      width: 35px;
      height: 3px;
      background: $lightText;
      position: relative;
      display: block;
      margin: 4px 0;
      border-radius: 2px;
      transition: all .2s linear;

      &:nth-child(3) {
        width: 25px;
        margin-bottom: auto;
      }

      &:nth-child(4) {
        width: 25px;
        opacity: 0;
        margin: 0;
      }
    }

  }

}

@media (max-width: 1000px) {
  header {
    .language__selector {
      button {
        font-size: 12px;
      }

    }

    .nav-links {
      a {
        font-size: 14px;
      }
    }
  }
}

@media (max-width: 990px) {
  header {
    .menu-btn-two{
      display: flex;
    }
    .nav-links {
      position: absolute;
      width: 100%;
      left: 0;
      padding: 20px 0;
      background-color: var(--bg-primary);
      display: flex;
      flex-direction: column;
      top: 85px;
      height: 0;
      padding: 0;

      a {
        display: none;
      }

      &.active {
        padding: 20px 0;
        height: unset;

        a {
          display: unset;
        }
      }
    }
  }
}

@media (max-width: 750px) {
  header {
    .language__selector {
      button {

        padding: 5px 12px;
      }
    }
  }
}

@media (max-width: 500px) {
  header {
    .language__selector {
      button {
        font-size: 10px;
        padding: 2px 6px;
      }
    }
  }
}
</style>