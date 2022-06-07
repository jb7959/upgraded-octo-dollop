// Require the framework and instantiate it
const fastify = require('fastify')({logger: true})

const util = require("util");
const timePromise = util.promisify(setTimeout)


// Declare a route
fastify.get('/', (request, reply) => {
    let r = 0;

    for (let i = 1; i <= 50000000; i++) {
        r += i;
    }

    return {
        hello: r
    }
})

// Run the server!
const start = async () => {
    try {
        await fastify.listen({host: "0.0.0.0", port: 3300})
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

module.exports = {
    start
}