# Club Social y Deportivo de Máximo Paz — Web oficial

Link-hub institucional del club: accesos rápidos, actividades por disciplina y
contacto de cuotas.

## Stack

- [Next.js](https://nextjs.org) 16 (App Router) + React 19 + TypeScript
- Tailwind CSS 3
- Deploy con Docker + GitHub Actions (SSH a droplet)
- Gestor de paquetes: **pnpm**

## Desarrollo

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

## Comandos

```bash
pnpm build      # build de producción (output: standalone)
pnpm start      # servir el build
pnpm lint       # eslint
```

## Docker

```bash
docker-compose up --build -d   # subir
docker-compose down            # bajar
docker-compose logs -f         # logs
```

## Documentación

- [DESIGN.md](./DESIGN.md): sistema de diseño (colores, tipografía, componentes).
- [AGENTS.md](./AGENTS.md): guía para agentes de código.

## Deploy

Un push a `main` dispara [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml),
que hace `git pull` + `docker compose up -d` en el droplet vía SSH.
