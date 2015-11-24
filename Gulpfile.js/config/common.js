var NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    isDev: NODE_ENV === 'development'
};