module.exports = ({ file, options, env }) => ({
    parser: file.extname === '.ss' ? 'sugarss' : false,
    plugins: {
        'postcss-partial-import': {
            root: process.cwd()
        },
        'postcss-nested': {},
        'postcss-cssnext': {
            browsers: ['last 2 versions']
        }
    }
});
