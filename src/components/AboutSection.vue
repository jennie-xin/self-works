<script setup lang="ts">
import { skillGroups, timeline } from '@/data/skills';
import { aboutBio } from '@/data/self';
</script>

<template>
  <section id="about" class="about-section scroll-reveal">
    <div class="container">
      <div class="about-grid">
        <div class="about-left">
          <p class="section-label">关于</p>
          <h2 class="section-title">我是谁</h2>
          <div class="section-divider"></div>

          <div class="about-body">
            <p v-for="(paragraph, index) in aboutBio" :key="index">{{ paragraph }}</p>
          </div>

          <div class="timeline">
            <p class="section-label timeline-title">工作经历</p>
            <div
              v-for="(item, index) in timeline"
              :key="index"
              class="timeline-item"
            >
              <div class="timeline-year">{{ item.year }}</div>
              <div class="timeline-content">
                <div class="timeline-title">{{ item.title }}</div>
                <div class="timeline-org">{{ item.organization }}</div>
                <div class="timeline-desc">{{ item.description }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="skills-panel">
          <p class="section-label">技术栈</p>
          <h3 class="skills-heading">技能 & 工具</h3>

          <div
            v-for="(group, index) in skillGroups"
            :key="index"
            class="skill-group"
          >
            <div class="skill-group-label">{{ group.label }}</div>
            <div class="tag-row">
              <span
                v-for="(skill, idx) in group.skills"
                :key="idx"
                class="tag"
                :class="`tag-${group.type}`"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
