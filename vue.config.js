export default {
  title: 'Demonstration', // show in html title (unless using a custom template) and cli output
  template: 'index.html',
  resolve: true, // resolve ./src dir so that we can do `import 'components/MyComponent'` directly
  port: 4000, // the port on which to run the dev server
  target: 'web', // Webpack target
  // target: 'node', // Webpack target. 'node' allows server-side rendering
  // cjs: true, // bundle in CommonJS format to allow server-side rendering
  entry: {
    client: './src/index.js'
  },
  vendor: Object.keys(require('./package.json').dependencies), // separate dependencies into a different bundle
  // externals: Object.keys(require('./package.json').dependencies), // exclude dependencies from the main app bundle
  open: true, // open the app in a web browser when creating a dev server
  notify: false, // whether to show a system notification every time the build updates
  postcss: {
    use: ['autoprefixer'],
    autoprefixer: { browsers: ['last 2 versions'] }, // options for this plugin
    append: false // whether to append these plugins to the built-in plugins
  },
  babel: {
    presets: [
      [require.resolve('babel-preset-es2015'), { modules: false }], // 'modules: false' means Babel won't convert ES2015 modules to CommonJS, thus allowing Webpack to do tree shaking
      require.resolve('babel-preset-stage-2')
    ]
  }
}