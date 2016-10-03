var environment = {
  development: { port: 3000, },
  production: { port: 80, }
}[process.env.NODE_ENV || 'production'];


exports.config = environment;
