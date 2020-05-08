# Personal Web Site

Wrote with html/css/react
[Create React App]

## Start

```bash
npm start
```
## Build for production

```bash
npm run build
```

## Static Installation Server

```bash
npm install -g serve
```

## Start server
```bash
serve -s build
```

## Deployment on github 
```bash
npm install gh-pages --save-dev
```
Change remote from github : 
git remote set-url origin https://github.com/tom901/tom901.github.io.git

(
get current remote url : 
git config --get remote.origin.url
)

Start npm command to deploy on gitpage : gh-pages -b master -d build
```bash
npm run deploy
```
After re-change remote origin to project folder :
git remote set-url origin https://github.com/tom901/site-perso-react.git

Warning, if the url is not changed, code could be crush
