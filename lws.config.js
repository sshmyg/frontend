module.exports = {
  hostname: 'localhost',
  port: 3001,
  spa: 'index.html',
  directory: './dist',
  // Proxy
  /* rewrite: [
    {
      from: '/apps/(.*)',
      to: 'http://localhost:5000/apps/$1',
    },
    {
      from: '/api/(.*)',
      to: 'http://localhost:9000/api/$1',
    },
  ], */
};
