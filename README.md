# FuseBox AngularJS Example

AngularJS example with [FuseBox](https://github.com/fuse-box/fuse-box) using the [NgTemplatePlugin](https://github.com/TobiasTimm/fuse-box-ng-template-plugin)

## Usage

With `npm`

```shell
npm install
```

With `yarn`

```shell
yarn
```

After the `node_modules` are installed run the development server via `npm start` / `yarn start`

## HMR

y default the built-in `FuseBox` hmr does not work with AngularJS, but you see an example implementation in the [hmr.js](./src/hmr.js).

Otherwise please force a reload within your `fuse.js`

```js
app.hmr({ reload: true });
```

## License

[MIT](./LICENSE)
