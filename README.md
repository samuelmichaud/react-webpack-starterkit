React + Webpack Starter kit
=====================

>This starter kit aim to be very simple but complete on the build process. It's perfect for people who want to try react and ES6 without spending hours to build the stack.
>For more complex app, you can easily build upon because there is no real architecture in this starter kit so you can choose your own.

## Feature
- React + react router
- Webpack hot loader ! Try the [live demo](http://gaearon.github.io/react-hot-loader/) or watch the [demo video](https://vimeo.com/100010922)
- Build system with versioning for CSS, JS and images for optimal caching
- Full ES6 with Babel for compatibility
- A complete eslint configuration for the best code quality you can dream of ;)
- SCSS compilation
- Image optimisation & compression
- Some nice webpack config for easy life & happiness


### Requirement
You must install Node, npm and webpack (globaly)

```
npm install -g webpack
```

### Usage

```
npm install
npm start
open http://localhost:3000
```

### Build a release

```
npm run release
```

### Linting

```
npm run lint
```

### Other config

You may want to change the host and port in package.json for your dev server.
You may also want to change the build repository (default: public).

### Dependencies

* [React](https://facebook.github.io/react/)
* [Webpack](https://webpack.github.io/docs/)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [babel-loader](https://github.com/babel/babel-loader)
* [react-hot-loader](https://github.com/gaearon/react-hot-loader)
* [react-router](https://github.com/rackt/react-router)

### For Windows user

You might have some issues during the npm install. This should solve them :

```
npm config set cache C:\nodejs\npm-cache --global
```

This is because some node module have a too long path for the file system. The idea of this command is to reduce a bit the path.

### Thanks & credits
Thanks to Dan Abramov @gaearon for his own [starter kit](https://github.com/gaearon/react-hot-boilerplate) which helped me a lot. Moreover, this guy deserve endless credits & applause for his work ;)
Thanks to Thomas Roux @spartDev for his awesome eslint configuration