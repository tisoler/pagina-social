# Stage 1: Building the code
FROM node:23-alpine AS builder

WORKDIR /web-social

RUN corepack enable

# Install dependencies for building
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy source and build
COPY . .
RUN pnpm build

# Stage 2: Run the built code
FROM node:23-alpine AS runner
WORKDIR /web-social

# Set to production
ENV NODE_ENV=production

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy necessary files
COPY --from=builder /web-social/public ./public
COPY --from=builder /web-social/package.json ./package.json

# Copy built assets
COPY --from=builder --chown=nextjs:nodejs /web-social/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /web-social/.next/static ./.next/static

# Set user
USER nextjs

# Expose and run
EXPOSE 3047
ENV PORT 3047

CMD ["node", "server.js"]
