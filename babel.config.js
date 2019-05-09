
console.log('!!!!!babel.config.js')

module.exports = function(api) {
  api.cache(true)

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false,
          useBuiltIns: 'usage',
          corejs: 2,
          targets: {
            "browsers": ["ie 11"]
          },
        }
      ],
    ],
    plugins: [
      ["@babel/plugin-proposal-class-properties", { "loose": false }],
      ["@babel/plugin-proposal-decorators", { "legacy": true }],
      "@babel/plugin-proposal-export-namespace-from",
      "@babel/plugin-proposal-function-sent",
      "@babel/plugin-proposal-numeric-separator",
      "@babel/plugin-proposal-throw-expressions",
      "@babel/plugin-syntax-dynamic-import",
      "@babel/plugin-syntax-import-meta",
      '@babel/plugin-transform-runtime',
      '@babel/plugin-transform-shorthand-properties',
      '@babel/plugin-transform-property-mutators',
    ]
  }
}
