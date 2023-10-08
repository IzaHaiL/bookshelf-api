/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style, import/no-extraneous-dependencies
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

// eslint-disable-next-line linebreak-style
const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);
  await server.start();
  // eslint-disable-next-line no-console
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
