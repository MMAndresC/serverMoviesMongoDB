const mongoose = require('mongoose');

const DB_URL = "mongodb://localhost:27017/movies";

const connect = async() =>{
    try{
        const connection = await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        const {host, port, name} = connection.connection;
        console.log(`Conectado a la bd ${name} ${host} ${port}`);
    }
    catch (err){
        return res.status(404).json(err);
    }
}

module.exports = {
    connect, DB_URL
};