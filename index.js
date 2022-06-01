const express = require('express');
const db = require('./db/db.movies');
db.connect();
const PORT = 5000;


const app = express();
const indexRoutes = require('./routes/index.routes');
const moviesRoutes = require('./routes/movies.routes');


app.use('/movies', moviesRoutes);
app.use('/', indexRoutes);

app.listen(PORT,() => {
    console.log(`Server started in http://localhost:${PORT}`);
})