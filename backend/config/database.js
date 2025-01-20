const path = require('path');

module.exports = ({ env }) => {
  const client = env('DATABASE_CLIENT', 'sqlite');

  const connections = {
    postgres: {
      connection: {
        connectionString: env('192.168.2.36'),
        host: env('DATABASE_HOST', '192.168.2.36'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'aspirewebsite_dev'),
        user: env('DATABASE_USERNAME', 'aspirewebsite'),
        password: env('DATABASE_PASSWORD', '&nUWbrJTmuK7aS4T'),
        schema: env('DATABASE_SCHEMA', 'public'),
      },
      pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
    },
    sqlite: {
      connection: {
        filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
      },
      useNullAsDefault: true,
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};
