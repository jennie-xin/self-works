# Capability: contact-email

## Overview

联系表单功能，基于 EmailJS 实现客户端邮件发送，无需后端服务。

## Components

- **ContactSection.vue** — 表单 UI 组件，包含姓名/邮箱/消息输入框
- **utils/email.ts** — EmailJS SDK 封装，提供 sendEmail 函数

## Form Fields

| 字段 | 类型 | 必填 | 校验规则 |
|------|------|------|---------|
| 姓名 | text | ✓ | 非空 |
| 邮箱 | email | ✓ | 格式校验 |
| 消息 | textarea | ✓ | 最少 10 字符 |

## Behavior Flow

1. 用户填写表单 → 点击发送
2. 前端校验字段合法性
3. 调用 EmailJS API 发送邮件
4. 显示状态反馈：loading → success / error
5. 成功后自动清空表单

## Configuration

通过 `.env` 环境变量配置：
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`
