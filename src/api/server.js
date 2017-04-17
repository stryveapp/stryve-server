const Hapi = require('hapi')

function newApiServer(options) {
  const server = new Hapi.Server()

  server.connection({
    port: options.port || 3000,
    host: 'localhost',
  })

  server.start((err) => {
    if (err) {
      throw err
    }
    console.log(`API server running at: ${server.info.uri}`)
  })
}

module.exports = {
  newApiServer,
}
