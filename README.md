# sistemaDeVisitantes

## Comando para rodar o container do MongoDB
docker run --name myMongo -p 27017:27017 -p 28017:28017 -e MONGODB_PASS="mypass" -e MONGO_INITDB_DATABASE="sisconvi" -v /home/rafael/workspace/sistemaDeVisitantes/docker/MongoDb:/data/db -d mongo:latest
