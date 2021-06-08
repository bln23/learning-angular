start_mongo:
	docker run --name some-mongo -p 27017:27017 -d mongo

start: start_mongo
	npm start

stop_mongo:
	docker kill some-mongo && docker rm some-mongo

stop: stop_mongo
