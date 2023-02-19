// Déclaration de la variable pour lancer l
const app = require('./app' );
//définission du port d'écoute
const port = 3000

//requête sur la variable définit ci-dessus pour faire fonctionner l'API
//lance l'application
app.listen( port, ()=>{
    console.log( "l'application tourne sur le port " + port ) //Permet de vérifier que l'application tourne
})