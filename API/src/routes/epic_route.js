const express = require('express');
//Controller correspondant
const controllerEpic = require('../controller/epic_controller');

//Router pour le tableau
const router = express.Router();

//Method route
router.route("/epic")
//POST
//Méthode pour créer une entrée sans préciser l'id
// ex : http://localhost:3000/epic/
    .post(controllerEpic.createData)

//GET
//Méthode pour afficher le tableau
// ex : http://localhost:3000/epic
    .get(controllerEpic.readData);
    
router.route("/epic/:id")
    //GET
    //Méthode pour afficher par ID
    // ex : http://localhost:3000/epic/:id
    .get(controllerEpic.readDataById)
    
    //PUT
    //Méthode pour mettre à jour un métier par son id
    // ex : http://localhost:3000/epic/:id
    .put(controllerEpic.updateData)
    
    //DELETE
    //Méthode pour supprimer un métier
    // ex: http://localhost:3000/epic/:id
    .delete(controllerEpic.deleteData);
   
//Méthode pour afficher par nom
// ex : http://localhost:3000/epic/name/:name
router.get("/epic/name/:name", controllerEpic.readDataByName)

module.exports = router