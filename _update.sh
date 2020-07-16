docker build -t medpro-static-resource-testing .
docker stop medpro-static-resource-testing
docker rm medpro-static-resource-testing
docker run -d --restart=always --name medpro-static-resource-testing -p 10005:6700 -t medpro-static-resource-testing

