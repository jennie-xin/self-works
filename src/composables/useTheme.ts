import { ref, watch } from 'vue';

type Theme = 'dark' | 'light';

const theme = ref<Theme>((localStorage.getItem('theme') as Theme) || 'dark');

watch(theme, (newTheme) => {
  localStorage.setItem('theme', newTheme);
  document.documentElement.setAttribute('data-theme', newTheme);
}, { immediate: true });

export function useTheme() {
  const toggle = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark';
  };

  const isDark = () => theme.value === 'dark';

  return {
    toggle,
    isDark,
  };
}
