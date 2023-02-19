//Import du module express
//Création d'une variable pour la manipulation des fichiers
const express = require('express');
//Variable constante qui contiendra l'export du module body-parser
const bodyParser = require('body-parser');
//variable pour le module cors (Cross-origin resource sharing) qui permet l'accès à des données d'une page html à l'application
const cors = require('cors');

//import des routes de l'application 
const epicRoute = require('./src/routes/epic_route.js');
const steamRoute = require('./src/routes/steam_route.js');

//Création d'une variable pour lancer la fonction 
const app = express();

//Sert à utiliser le module installé
app.use(bodyParser.json());
app.use(cors());

//Permet de lancer les scripts 
app.use(epicRoute);
app.use(steamRoute);

//export de la méthode app
module.exports=app