const app = require('./app');
const { connect } = require('./database');


async function main() {
    // Database conexion
    await connect();

    // Express app
    await app.listen(4000);    
    console.log('Server en puerto 4000');
}

main();