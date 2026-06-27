<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useTheme } from '@/composables/useTheme';
import { fontSizeOptions, widthOptions, fontOptions } from '@/data/background';

const { toggle, isDark } = useTheme();

const isOpen = ref(false);



const currentFontSize = ref('default');
const currentWidth = ref('default');
const currentFont = ref('default');

onMounted(() => {
  document.documentElement.setAttribute('data-font-size', currentFontSize.value);
  document.documentElement.setAttribute('data-width', currentWidth.value);
  document.documentElement.setAttribute('data-font-family', currentFont.value);
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});

const handleClickOutside = (event: MouseEvent) => {
  const wrapper = document.querySelector('.tweaks-wrapper');
  if (wrapper && !wrapper.contains(event.target as Node) && isOpen.value) {
    isOpen.value = false;
    closeAllDropdowns();
  }
};

const closeAllDropdowns = () => {
  document.querySelectorAll('.select-menu.open').forEach(menu => {
    menu.classList.remove('open');
  });
};

const togglePanel = () => {
  isOpen.value = !isOpen.value;
};

const setFontSize = (value: string) => {
  currentFontSize.value = value;
  document.documentElement.setAttribute('data-font-size', value);
};

const setWidth = (value: string) => {
  currentWidth.value = value;
  document.documentElement.setAttribute('data-width', value);
};

const setFont = (value: string) => {
  currentFont.value = value;
  document.documentElement.setAttribute('data-font-family', value);
};

const fontSizeLabel = computed(() => {
  return fontSizeOptions.find(opt => opt.value === currentFontSize.value)?.label || '默认';
});

const widthLabel = computed(() => {
  return widthOptions.find(opt => opt.value === currentWidth.value)?.label || '默认';
});

const fontLabel = computed(() => {
  return fontOptions.find(opt => opt.value === currentFont.value)?.label || '默认';
});
</script>

<template>
  <div class="tweaks-wrapper">
    <Transition name="panel">
      <div v-if="isOpen" class="tweaks-panel">
        <h3 class="tweaks-title">页面调节</h3>

        <div class="tweaks-item">
          <label class="tweaks-label">深色模式</label>
          <button
            class="toggle-switch"
            :class="{ active: isDark() }"
            @click="toggle"
            aria-label="切换深色模式"
          >
            <span class="toggle-thumb"></span>
          </button>
        </div>

        <div class="tweaks-item">
          <label class="tweaks-label">字体大小</label>
          <div class="select-dropdown">
            <button class="select-trigger" @click="($event.currentTarget as HTMLElement)?.nextElementSibling?.classList.toggle('open')">
              {{ fontSizeLabel }}
              <span class="select-arrow">▾</span>
            </button>
            <div class="select-menu">
              <button
                v-for="option in fontSizeOptions"
                :key="option.value"
                class="select-option"
                :class="{ selected: currentFontSize === option.value }"
                @click="setFontSize(option.value); ($event.target as HTMLElement)?.closest('.select-menu')?.classList.remove('open')"
              >
                {{ option.label }}
              </button>
            </div>
          </div>
        </div>

        <div class="tweaks-item">
          <label class="tweaks-label">页面宽度</label>
          <div class="select-dropdown">
            <button class="select-trigger" @click="($event.currentTarget as HTMLElement)?.nextElementSibling?.classList.toggle('open')">
              {{ widthLabel }}
              <span class="select-arrow">▾</span>
            </button>
            <div class="select-menu">
              <button
                v-for="option in widthOptions"
                :key="option.value"
                class="select-option"
                :class="{ selected: currentWidth === option.value }"
                @click="setWidth(option.value); ($event.target as HTMLElement)?.closest('.select-menu')?.classList.remove('open')"
              >
                {{ option.label }}
              </button>
            </div>
          </div>
        </div>

        <div class="tweaks-item">
          <label class="tweaks-label">字体风格</label>
          <div class="select-dropdown">
            <button class="select-trigger" @click="($event.currentTarget as HTMLElement)?.nextElementSibling?.classList.toggle('open')">
              {{ fontLabel }}
              <span class="select-arrow">▾</span>
            </button>
            <div class="select-menu">
              <button
                v-for="option in fontOptions"
                :key="option.value"
                class="select-option"
                :class="{ selected: currentFont === option.value }"
                @click="setFont(option.value); ($event.target as HTMLElement)?.closest('.select-menu')?.classList.remove('open')"
              >
                {{ option.label }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <button
      class="tweaks-trigger"
      :class="{ open: isOpen }"
      @click="togglePanel"
      aria-label="打开设置"
    >
      <span class="trigger-icon">{{ isOpen ? '✕' : '()' }}</span>
    </button>
  </div>
</template>
