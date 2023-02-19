//Variable qui permet la lecture du fichier (fs)
const fs = require('fs');
//Variable pour le chemin du fichier 
const path = "./src/model/library.json"
//Méthode CRUD pour ajouter des jeux sur la bibliothèque steam

//Création de données, fonction qui ajoute une entrée au tableau steam
//POST
exports.createData = ( request, response) => {
    //lecture des données
    fs.readFile ( path, ( err, data ) => {
        //Si erreur renvoyez le message d'erreur de lecture 500
        if (err) {
            response.status(500).json({
                message: "Erreur de lecture",
                error: err,
            })
        } else {
            //Enregistrement de l'objet JSON dans la variable 
            const dataExist = JSON.parse(data);
            // Déclaration de la variable id qui permettra de définir le dernier id du tableau
            let id;
            //On enregistre les id du tableau steam dans un tableau
            let tabId = dataExist.steam.map( (obj) => obj.id ); 
            //On recherche dans le tableau l'id avec le nombre le plus haut 
            //Ternary Operator s'il y a des objets dans le tableau on part sur un id de 0 sinon on calcule l'id maximum
            !dataExist.steam.length ? id = 0 : id = Math.max(...tabId)
            //On envoie dans le tableau désigné l'information de la requête à la suite dans la cible
            dataExist.steam.push({ "id" : id +1, "name": request.body.name, "value": request.body.value })
            //On écrit le fichier avec les nouvelles informations
            fs.writeFile(path, JSON.stringify(dataExist), (writeErr) => {
                //Message d'erreur si l'écriture n'a pas eu lieu
                if (writeErr) {
                    response.status(500).json({
                        message: "Erreur d'écriture",
                        error: err
                    })
                //Si l'écriture a réussi on valide avec une réponse de réussite de la requête    
                } else {
                    response.status(200).json({
                        message : "Ecriture réussie"
                    });
                }
            });
        }
    });
}

//Read
//Lire toutes les entrées du tableau steam
exports.readData = (request, response) => {
    //lecture des données
    fs.readFile( path, (err, data) => {
        //Si erreur renvoyez le message d'erreur de lecture 500
        if(err){
            response.status(500).json({
                message: "T'as pas lu le panneau. Reviens en arrière et check la map",
                error: err,
            })
        //Sinon on affiche la bibliothèque de jeu steam dans son intégralité
        }else{
            response.status(200).json(JSON.parse(data).steam)
        };
    })
}

//Read 
//lecture d'une entrée de la liste steam par son id
exports.readDataById = (request, response) => {
    //lecture des données
    fs.readFile(path, (err, data) => {
        //Si erreur renvoyez le message d'erreur de lecture 500
        if(err){
            response.status(500).json({
                response: "Je ne crois pas que ce métier ait encore été développé par l'équipe. Cherche en un autre",
                error: err,
            })
        } else {
            //On stocke dans la variable dataExistant les données du tableau steam
            const dataExistant = JSON.parse(data).steam.find(
                //dans les données on cherche l'élément id des objets du tableau et on les compare avec l'élément id entrée en input
                (obj) => obj.id === parseInt(request.params.id)
            );
            //Si pas d'erreur on affiche les données demandées
            if(dataExistant){
                response.status(200).json(dataExistant)
            //sinon on renvoie un message d'erreur expliquant que les données demandées n'existent pas
            } else {
                response.status(404).json({
                    message:"C'est le mauvais Id que tu as voulu fabriquer. Dommage. Essaie encore!",
                    error: err,
                });
            }
        }
    });
}

//Read
//Lecture d'une entrée par son nom
exports.readDataByName = (request, response) => {
    //lecture des données
    fs.readData(path, (err, data) => {
        if(err){
            //Si erreur renvoyez le message d'erreur de lecture 500
            response.status(500).json({
                message: "Non ce n'est pas Sésame ouvre-toi. Un autre idée peut être",
                error: err,
            })
        } else {
            //On stocke dans la variable dataExistant les données du tableau steam
            const dataExistant=JSON.parse(data).steam.find(
                //dans les données on cherche l'élément name des objets du tableau et on les compare avec l'élément name entrée en input
                (obj)=>obj.classe === request.params.name
            );
            if(dataExistant) {
                //Si pas d'erreur on affiche les données demandées
                response.status(200).json(dataExistant)
            } else {
                //sinon on renvoie un message d'erreur expliquant que les données demandées n'existent pas
                response.status(404).json({
                    message: "Ce métier n'existe pas faut faire attention à l'orthographe.",
                    error: err,
                })
            }
        }
    })
}

//Update
//Modification du statut d'une entrée du tableau par l'Id
exports.updateData = (request, response) => {
    fs.readFile(path, (err, data)=>{
        if(err) {
            response.status(500).json({
                message: "Wrong script. C'est bien comme position script ça ?",
                error: err,
            })
        } else {
            const dataExistant = JSON.parse(data);
            const dataId = dataExistant.steam.find(
                (obj) => obj.id === parseInt(request.params.id)
            )
            if(!dataId){
                response.status(404).json({
                    message:"Ne pas avancer, ne pas reculer mais chercher le bon endroit",
                    error: err,
                })
            } else {
                dataId.steam = request.body.value;
                fs.writeFile(path, JSON.stringify(dataExistant), (writeErr) => {
                    if(writeErr){
                        response.status(500).json({
                            message:"L'inspi, où est l'inspi. Comme l'id que tu cherches",
                            error: err,
                        })
                    } else {
                        response.status(200).json({
                            message : "Update sauvegardée. Veuillez ne pas retirer la memory card!",
                        })
                     }
                 })
            }
        }
    })
}

//Delete
//Effacer une entrée spécifique
exports.deleteData = (request, response) => {
    fs.readFile(path, (err, data) => {
        if(err) {
            response.status(500).json({
                message:"Où est l'id ? A côté de Charlie. Mais où est Charlie ?"
            })
        } else {
            const dataExistant = JSON.parse(data)
            const dataId = dataExistant.steam.find(
                (obj) => obj.id === parseInt(request.params.id)
            )
            if(!dataId) {
                response.status(404).json({
                    message : "Si tu vois ce message c'est grave, très grave!",
                    error: err,
                })
            } else {
                dataExistant.steam = dataExistant.steam.filter(
                    (obj)=> obj.id != parseInt(request.params.id))
                fs.writeFile( path, JSON.stringify(dataExistant), (writeErr) => {
                    if(writeErr){
                        response.status(500).json({
                            message: "J'ai pas d'inspi mais là y a une erreur de lecture",
                            error: err,
                        })
                    } else {
                        response.status(200).json({
                            message:"L'effacement est effacé. Inception"
                        })
                    }
                })   
            }
        }
    })
}
