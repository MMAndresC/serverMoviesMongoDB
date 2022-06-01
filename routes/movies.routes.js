const express = require('express');
const Movie = require('../models/movies');

const router = express.Router();

router.get('/', async(req,res,next) =>{ //4 Crear un endpoint get que devuelva todas las películas.
    try{
        const movie = await Movie.find();
        return res.status(200).json(movie);
    }
    catch(err) {
        return res.status(500).json(err);
    } 
});

router.get('/id/:id', async(req,res,next) =>{ //5 Crear un endpoint get que devuelva una película según su _id
    try{
        const movie = await Movie.find({_id:req.params.id});
        return res.status(200).json(movie);
    }
    catch(err){
        return res.status(500).json(err);
    }
});

router.get('/title/:title', async(req,res,next) =>{  //6 Crear un endpoint get que devuelva un valor por su titulo.
    try{
        const movie = await Movie.find({title:req.params.title});
        return res.status(200).json(movie);
    }
    catch(err){
        return res.status(500).json(err);
    }
});

router.get('/genre/:genre', async(req,res,next) =>{ //7 Crear un endpoint get que devuelva los documentos según su género.
    try{
        const movie = await Movie.find({genre:req.params.genre}).sort({title:1});
        return res.status(200).json(movie);
    }
    catch(err){
        return res.status(500).json(err);
    }
});

router.get('/year/', async(req,res,next) =>{  //8 Crear un endpoint get que devuelva las películas que se han estrenado a partir de 2010.
    try{
        const movie = await Movie.find({year:{$gte:2010}}).sort({year:1});
        return res.status(200).json(movie);
    }
    catch(err){
        return res.status(500).json(err);
    }
});





module.exports = router;