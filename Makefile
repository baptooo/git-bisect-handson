build:
	docker-compose -f docker-compose.yml build

run:
	docker-compose -f docker-compose.yml run app npm start

test:
	docker-compose -f docker-compose.yml run app npm t
