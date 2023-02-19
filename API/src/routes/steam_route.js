const express = require('express');
//Controller correspondant
const controllerSteam = require('../controller/steam_controller');

//Router pour le tableau
const router = express.Router();

//Method pour les route /steam
router.route("/steam")
    //POST
    //Méthode pour créer une entrée sans préciser l'id
    // ex : http://localhost:3000/steam/
    .post(controllerSteam.createData)

    //GET
    //Méthode pour afficher le tableau
    // ex : http://localhost:3000/steam
    .get(controllerSteam.readData);

//Method pour les routes "/steam/:id"
router.route("/steam/:id")
    //GET
    //Méthode pour afficher par ID
    // ex : http://localhost:3000/steam/:id
    .get(controllerSteam.readDataById)
    
    //PUT
    //Méthode pour mettre à jour un métier par son id
    // ex : http://localhost:3000/steam/:id
    .put(controllerSteam.updateData)
    
    //DELETE
    //Méthode pour supprimer un métier
    // ex: http://localhost:3000/steam/:id
    .delete(controllerSteam.deleteData);
    
//Méthode pour afficher par nom
// ex : http://localhost:3000/steam/name/:name
router.get("/steam/name/:name", controllerSteam.readDataByName)

//pour exporter le module et utiliser les routes
module.exports = router