<script setup lang="ts">
import { info } from '@/data/self';
</script>

<template>
  <section id="hero" class="hero-section">
    <div class="container">
      <div class="hero-grid">
        <div class="hero-content">
          <p class="hero-eyebrow">你好，我是</p>
          <h1 class="hero-name">{{ info.name }}</h1>
          <div class="hero-role-badge">
            <span class="status-dot"></span>
            {{ info.role }}
          </div>
          <p class="hero-bio">
            {{ info.desc }}
          </p>
          <div class="hero-actions">
            <a href="#projects" class="btn btn-primary">查看项目</a>
            <a href="/resume.docx" download class="btn btn-outline">下载简历</a>
          </div>
        </div>

        <div class="hero-avatar">
          <div class="avatar-ring"></div>
          <img class="avatar-img" src="../assets/author.jpg" alt="shaun">
        </div>
      </div>
    </div>
  </section>
</template>
