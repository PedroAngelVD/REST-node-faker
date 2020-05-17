const mongoose = require('mongoose');

async function connect() {
    await mongoose.connect('mongodb://localhost/flutter-node', {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log('database connect')
}

module.exports = { connect };