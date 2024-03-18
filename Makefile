install:
	docker compose run nodejs sh -c 'npm install'

start:
	docker compose run --service-ports nodejs sh -c 'npm run start'

build:
	docker compose run nodejs sh -c 'npm run build'

test:
	docker compose run nodejs sh -c 'npm run test'

eject:
	docker compose run nodejs sh -c 'npm run eject'
