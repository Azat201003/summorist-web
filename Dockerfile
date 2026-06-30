FROM oven/bun:alpine AS base
WORKDIR /app

COPY package.json bun.lock ./
ENV BUN_CONFIG_REGISTRY=https://registry.npmmirror.com
RUN bun install --frozen-lockfile

FROM base AS dev
COPY . .

EXPOSE $PORT
CMD bun run dev --port $PORT --host 0.0.0.0

FROM base AS builder
COPY . .

RUN bun run build

FROM nginx:alpine AS prod

COPY --from=builder /app/dist /dist
COPY --from=builder /app/nginx.conf /etc/nginx/templates/default.conf.template

EXPOSE 80
