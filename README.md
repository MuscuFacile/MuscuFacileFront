# MuscuFacileFront

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## Contributing

### Using docker
If you are using a Windows OS, you need to install Docker for Windows and use Powershell

```bash
# Go to your project folder
cd /path/to/project/muscu-facile-front

# Build the docker's image using project's sources
docker build -t muscu-facile-front .

# Create docker's container from the image and mount project's folder on the container
# For Windows, you cannot use $(pwd), use ${PWD} instead
docker create --name muscu-facile-front
    -v $(pwd):/var/www/muscu-facile-front
    -p 8080:80
    muscu-facile-front

# Start the container
docker start muscu-facile-front

# Get server's logs
docker logs -f muscu-facile-front
```
Inspired by https://github.com/BretFisher/node-docker-good-defaults

### Manually

Requierement

Install nodemon globaly
```bash
npm install -g nodemon
```
