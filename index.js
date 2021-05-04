var mongoose = require('mongoose');
var schema = require('./paginas-squema');

mongoose.connect('mongodb://localhost:27017/eje05');

//Parametros: nombre del modelo, nombre de la coleccion
var Paginas = mongoose.model('Pagina',schema, 'Paginas');

var user = new Paginas({
    title:"Cuenta",
    author:"Agustin Hdez",
    body: "Ag",
    Comment:[{body:"Ag",date: new Date()}],
    meta:{
        votes:5,favs:8
    }
})


user.save(function(error){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("saved!!");
    process.exit(0);
});