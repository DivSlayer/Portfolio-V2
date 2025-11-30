import { ref, computed } from 'vue';

export type Theme = 'light' | 'dark';

const currentTheme = ref<Theme>((localStorage.getItem('theme') as Theme) || 'dark');

export function useTheme() {
  const setTheme = (theme: Theme) => {
    currentTheme.value = theme;
    localStorage.setItem('theme', theme);
    // Apply theme class to document
    if (theme === 'light') {
      document.documentElement.classList.add('light-theme');
      document.documentElement.classList.remove('dark-theme');
    } else {
      document.documentElement.classList.add('dark-theme');
      document.documentElement.classList.remove('light-theme');
    }
  };

  const toggleTheme = () => {
    setTheme(currentTheme.value === 'dark' ? 'light' : 'dark');
  };

  const isDark = computed(() => currentTheme.value === 'dark');
  const isLight = computed(() => currentTheme.value === 'light');

  // Initialize theme on mount
  if (typeof window !== 'undefined') {
    setTheme(currentTheme.value);
  }

  return {
    currentTheme,
    isDark,
    isLight,
    setTheme,
    toggleTheme,
  };
}

