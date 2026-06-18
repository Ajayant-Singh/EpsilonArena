# EpsilonArena 

1. Build the production container image layout:
docker build -t trading-frontend .

2. Launch the container mapping internal port 80 to host port 8080:
docker run -d -p 8080:80 --name trading-ui trading-frontend

Open: http://localhost:8080