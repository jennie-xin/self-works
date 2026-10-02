#!/usr/bin/env bash
# 一键部署：本地构建 → rsync 上传到香港服务器（Caddy 直接托管静态文件，无需重启）
set -euo pipefail

SERVER="ubuntu@124.156.136.68"
REMOTE_DIR="/var/www/homepage"

cd "$(dirname "$0")"

echo "==> 构建"
npx -y pnpm@10 install --frozen-lockfile
npx -y pnpm@10 build

echo "==> 上传到 ${SERVER}:${REMOTE_DIR}"
# 用 /usr/bin/ssh 绕过本机 shell 对 ssh 的包装
rsync -avz --delete -e /usr/bin/ssh dist/ "${SERVER}:${REMOTE_DIR}/"

echo "==> 完成"
