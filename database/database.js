const dotenv = require('dotenv');
dotenv.config(); // Ensure this is called at the top

const { MongoClient } = require('mongodb');

let _db;

const initDb = async (callback) => {
    if (_db) {
        console.log('Database is already initialized!');
        return callback(null, _db);
    }
    try {
        const client = await MongoClient.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        _db = client.db(); // Use the default DB, or specify one if needed
        console.log('Database connected!');
        callback(null, _db);
    } catch (error) {
        console.error('Failed to connect to the database', error);
        callback(error);
    }
};

const getDatabase = () => {
    if (!_db) {
        throw Error('Database not initialized');
    }
    return _db;
};

module.exports = {
    initDb,
    getDatabase
};
