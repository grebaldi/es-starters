const withTypescript = require('@zeit/next-typescript');

module.exports = withTypescript({
    distDir: 'build',
    pageExtensions: ['tsx']
});