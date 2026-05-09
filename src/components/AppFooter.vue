<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="app-footer">
    <div class="container">
      <p>
        &copy; {{ currentYear }} Shaun 版权所有 &nbsp;&nbsp;|&nbsp;&nbsp; 使用
        <a href="#">HTML</a> · <a href="#">CSS</a> · <a href="#">JS</a> 构建
      </p>
    </div>
  </footer>
</template>
