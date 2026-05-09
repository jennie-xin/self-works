import { onMounted, onUnmounted, type Ref } from 'vue';

export function useScrollReveal() {
  let observer: IntersectionObserver | null = null;

  const init = (elements: Ref<HTMLElement[] | HTMLElement[]>) => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const elementArray = Array.isArray(elements.value)
      ? elements.value
      : [elements.value];

    elementArray.forEach((el) => {
      if (el) observer?.observe(el);
    });
  };

  const destroy = () => {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
  };

  onMounted(() => {
    // Will be called after template is rendered
  });

  onUnmounted(() => {
    destroy();
  });

  return { init, destroy };
}
