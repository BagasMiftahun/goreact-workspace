DB_URL=hrmsystem_identityup:f9c392c33274baf158e5fc4ecb21c2161e97e483@tcp(kxpa6.h.filess.io:3307)/hrmsystem_identityup?charset=utf8mb4&parseTime=True&loc=Local
MIGRATIONS_DIR=./apps/api/migrations

migrate-up:
	goose -dir $(MIGRATIONS_DIR) mysql "$(DB_URL)" up

migrate-down:
	goose -dir $(MIGRATIONS_DIR) mysql "$(DB_URL)" down
