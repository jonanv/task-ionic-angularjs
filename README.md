<p align="center">
    <img src="https://i.imgur.com/Z0ZklBp.png" width="300">
</p>

[![NPM Version][npm-badge]][npm-url]
[![Node JS][node-badge]][node-url]
[![Angular JS][angular-badge]][angular-url]
[![Ionic][ionic-badge]][ionic-url]
[![License][license-badge]][license-url]

# Site
<!-- ![Spotify angularjs](https://i.imgur.com/B2heenX.png) -->

# Install dependences
in ```task-ionic-angularjs/```

```bash
npm install
```
or
```bash
yarn install
```

***

# TaskIonicAngularjs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.12.

## Development server

Run `ionic serve` for a dev server. Navigate to `http://localhost:8100/`. The app will automatically reload if you change any of the source files.

***

# Create project
```javascript
ionic start NameProject tabs
```

# Start project with browser
```javascript
ionic serve -o
```
<!-- 
# Create component without spec.ts
```javascript
ng g c components/shared/navbar --spec=false
```
or

```javascript
ng generate component components/shared/navbar --spec=false
```

# Create component without spec.ts and .css
```javascript
ng g c components/artist --spec=false -is
```
or

```javascript
ng generate component components/artist --spec=false -is
```

# Create service without spec.ts
```javascript
ng g s services/spotify --spec=false
```
or
```javascript
ng generate service services/spotify --spec=false
```

# Create pipe without spec.ts
```javascript
ng g p pipes/noimage --spec=false
```
```javascript
ng generate pipe pipes/noimage --spec=false
```

# Create project build to production
```javascript
ng build --prod
``` -->

# Server local
install global ```sudo npm i -g http-server```

deploy in ```/task-ionic-angularjs/dist/task-ionic-angularjs/```

```javascript
http-server
```
or
```javascript
http-server -o
```

[npm-badge]: https://img.shields.io/badge/npm-v6.13.4-brightgreen.svg
[npm-url]: https://www.npmjs.com
[node-badge]: https://img.shields.io/badge/nodejs-v10.18.1-brightgreen
[node-url]: https://nodejs.org/download/release/v10.16.3/
[angular-badge]: https://img.shields.io/badge/angular--CLI-v8.1.3-brightgreen
[angular-url]: https://angular.io/cli/
[ionic-badge]: https://img.shields.io/badge/ionic-v5.4.15-brightgreen
[ionic-url]: https://ionicframework.com/
[license-badge]: https://img.shields.io/badge/license-MIT-green.svg
[license-url]: https://opensource.org/licenses/MIT
