<script setup lang="ts">
import { watch } from 'vue';

const props = defineProps<{
  src: string;
  visible: boolean;
}>();

const emit = defineEmits<{
  close: [];
}>();

watch(
  () => props.visible,
  (val) => {
    if (val) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
);

const onOverlayClick = (e: MouseEvent) => {
  if ((e.target as HTMLElement).classList.contains('lightbox')) {
    emit('close');
  }
};
</script>

<template>
  <Transition name="lightbox-fade">
    <div v-if="visible" class="lightbox" @click="onOverlayClick">
      <button class="lightbox-close" @click="emit('close')" aria-label="关闭预览">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </button>
      <img :src="src" class="lightbox-img" @click.stop />
    </div>
  </Transition>
</template>
