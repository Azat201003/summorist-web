FROM oven/bun:alpine AS builder
WORKDIR /build

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile --production

COPY . .
RUN bun run build

FROM nginx:alpine

COPY --from=builder /build/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /build/dist /dist

EXPOSE 5242
