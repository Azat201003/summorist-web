FROM oven/bun:alpine AS builder

WORKDIR /build

COPY package.json bun.lock ./

ENV BUN_CONFIG_REGISTRY=https://registry.npmmirror.com

RUN bun install --frozen-lockfile --verbose

COPY . .
RUN bun run build

FROM nginx:alpine
COPY --from=builder /build/nginx.conf /etc/nginx/templates/default.conf.template
COPY --from=builder /build/dist /dist
EXPOSE 5242
