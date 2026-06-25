<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import gsap from 'gsap'
import { socialLinks, email } from '@/data/socialLinks'
import { contactBio } from '@/data/self'
import { sendContactEmail, type EmailParams } from '@/utils/email'

const copyButtonText = ref('复制');
const copyButtonClass = ref('');

const form = reactive({
  name: '',
  email: '',
  message: '',
});

const sendStatus = ref<'idle' | 'loading' | 'success' | 'error'>('idle');
const statusMessage = ref('');

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(email);
    copyButtonText.value = '已复制 ✓';
    copyButtonClass.value = 'copied';
    setTimeout(() => {
      copyButtonText.value = '复制';
      copyButtonClass.value = '';
    }, 2000);
  } catch (err) {
    console.error('复制失败:', err);
  }
};

const resetForm = () => {
  form.name = '';
  form.email = '';
  form.message = '';
  sendStatus.value = 'idle';
  statusMessage.value = '';
};

const handleSubmit = async () => {
  if (!form.name || !form.email || !form.message) {
    sendStatus.value = 'error'
    statusMessage.value = '请填写所有字段'
    return
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(form.email)) {
    sendStatus.value = 'error'
    statusMessage.value = '请输入有效的邮箱地址'
    return
  }

  sendStatus.value = 'loading'
  statusMessage.value = '正在发送...'

  try {
    const params: EmailParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
      to_name: '博主',
    }

    await sendContactEmail(params)

    sendStatus.value = 'success'
    statusMessage.value = '留言已成功发送！感谢你的来信 🎉'

    setTimeout(resetForm, 4000)
  } catch (err) {
    console.error('发送失败:', err)
    sendStatus.value = 'error'
    statusMessage.value = '发送失败，请稍后重试或直接发邮件联系我'
    setTimeout(() => {
      sendStatus.value = 'idle'
      statusMessage.value = ''
    }, 4000)
  }
}

const magneticMove = (e: MouseEvent) => {
  const btn = e.currentTarget as HTMLElement
  const rect = btn.getBoundingClientRect()
  const x = e.clientX - rect.left - rect.width / 2
  const y = e.clientY - rect.top - rect.height / 2
  gsap.to(btn, { x: x * 0.25, y: y * 0.25, duration: 0.3, ease: 'power2.out' })
}

const magneticLeave = (e: MouseEvent) => {
  gsap.to(e.currentTarget as HTMLElement, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' })
}

onMounted(() => {
  gsap.from('.contact-left > *', {
    y: 30, opacity: 0, duration: 0.5, stagger: 0.1,
    scrollTrigger: { trigger: '.contact-section', start: 'top 80%' }
  })
  gsap.from('.contact-form-wrap', {
    y: 40, opacity: 0, duration: 0.6,
    scrollTrigger: { trigger: '.contact-form-wrap', start: 'top 85%' }
  })
})
</script>

<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <div class="contact-layout">
        <div class="contact-left">
          <p class="section-label">联系</p>
          <h2 class="section-title">一起合作</h2>
          <div class="section-divider"></div>

          <p class="contact-bio">
            {{ contactBio }}
          </p>

          <div class="email-card">
            <div>
              <div class="email-label-text">邮箱</div>
              <div class="email-value">{{ email }}</div>
            </div>
            <button
              class="copy-btn"
              :class="copyButtonClass"
              @click="copyEmail"
            >
              {{ copyButtonText }}
            </button>
          </div>

          <div class="social-grid">
            <a
              v-for="(social, index) in socialLinks"
              :key="index"
              :href="social.href"
              class="social-card"
            >
              <div class="social-icon-box">{{ social.icon }}</div>
              <div class="social-info">
                <div class="social-platform">{{ social.platform }}</div>
                <div class="social-handle">{{ social.handle }}</div>
              </div>
            </a>
          </div>
        </div>

        <div class="contact-form-wrap">
          <p class="section-label">发送留言</p>
          <h3 class="form-heading">快速联系</h3>

          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <label class="form-label" for="name">姓名</label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                class="form-input"
                placeholder="你的名称"
                :disabled="sendStatus === 'loading'"
              />
            </div>
            <div class="form-group">
              <label class="form-label" for="email-input">邮箱</label>
              <input
                type="email"
                id="email-input"
                v-model="form.email"
                class="form-input"
                placeholder="you@example.com"
                :disabled="sendStatus === 'loading'"
              />
            </div>
            <div class="form-group">
              <label class="form-label" for="message">留言内容</label>
              <textarea
                id="message"
                v-model="form.message"
                class="form-textarea"
                placeholder="告诉我你的项目想法..."
                :disabled="sendStatus === 'loading'"
              ></textarea>
            </div>

            <div
              v-if="sendStatus !== 'idle'"
              class="send-status"
              :class="sendStatus"
            >
              <span v-if="sendStatus === 'loading'" class="status-spinner"></span>
              {{ statusMessage }}
            </div>

            <button
              type="submit"
              class="btn btn-primary btn-submit"
              :class="{ loading: sendStatus === 'loading' }"
              :disabled="sendStatus === 'loading' || sendStatus === 'success'"
              @mousemove="magneticMove"
              @mouseleave="magneticLeave"
            >
              <span v-if="sendStatus === 'loading'" class="btn-spinner"></span>
              {{ sendStatus === 'loading' ? '发送中...' : sendStatus === 'success' ? '已发送 ✓' : '发送留言' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
