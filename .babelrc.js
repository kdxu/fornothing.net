
const plugins = [
  '@babel/plugin-syntax-dynamic-import',
  '@babel/plugin-proposal-object-rest-spread',
  [
    'module-resolver',
    {
      root: ['./src'],
      alias: {
        '~': './src',
        test: './test'
      }
    }
  ]
]

const presets = ['@babel/preset-flow', '@babel/preset-react']

const presetsByEnv = {
  development: [['@babel/preset-env', { targets: {browsers: ["last 2 versions"] }}]],
  test: [['@babel/preset-env', { targets: { node: '9' } }]],
  production: [
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: {
          browsers: ['last 2 versions', 'ie >= 11']
        }
      }
    ]
  ]
}

module.exports = {
  plugins,
  presets: [...presets, ...presetsByEnv[process.env.NODE_ENV || 'development']]
}

