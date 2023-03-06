# express-typescript-todo-api

## start

```sh
docker compose up -d
```

## down

```sh
docker compose down -v
```

## lint

```sh
docker compose exec api npm run lint
```

## test

```sh
docker compose exec api npm run test
```

## generate prisma client

```sh
npx prisma generate --schema=./src/infrastructure/database/schema.prisma
```

## migrate

```sh
npx prisma migrate reset --schema=./src/infrastructure/database/schema.prisma
```
