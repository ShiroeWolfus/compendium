Compendium - A Game Library
=========================
Une bibliothèque qui permet de garder à jour la liste des jeux que l'on a sur les launcher Epic et Steam. 
Ce cours utilise du code agnostique et générique afin de gérer les opérations de CRUD sur 1 fichiers JSON qui se trouve dans : 

````
src/model/library.json
````
Les codes source utilisé pour générer les réponses sont dans le dossier : 
````
src/controller/
````
la liste des routes comprenant les routes sont dans le dossier :
````
src/routes/
````

Les routes utilisées sont dynamiques mais existent également en version static
### Liste des routes
| Route | Verbe | Exemple | Explications |
|:-----|-----|-----|-----:|
|/:categorie |POST| htpp://localhost:3000/epic | Cette route permet de créer une entrée dans un tableau dans un fichier| 
|/ |GET | htpp://localhost:3000/dynamic/ | Cette route permet de récupérer toutes les données dans un fichier| 
|/:categorie/:id |GET | htpp://localhost:3000/steam/2 | Cette route permet d'afficher les données d'un tableau  par son Id| 
|/:categorie/name/:name |GET | htpp://localhost:3000/epic/Final Fantasy XIV | Cette route permet de récupérer les données d'une entrée par son nom| 
|/:categorie/:id |PUT | htpp://localhost:3000/epic/42 | Cette route permet de mettre à jour toutes le statut d'un jeu par son Id| 
|/:categorie/:id |Delete | htpp://localhost:3000/steam/45 | Cette route permet de supprimer un jeu par son Id| 
 
## Liste des librairies utilisées
| Librairie | Version | Raison | 
|:-----|----|-----:|
|Express |4.18.2 | Express sert de middleware pour manipuler les requêtes entrantes et les réponses courtes| 
|body-parser |1.20.1 | BodyParser va nous servir à accepter les données du body dans les requêtes entrantes| 
|fs | 0.0.1-security | Création et gestion des fichiers pour y stocker ou lire des fichiers sur le serveur. Permet la manipulation en mode synchrone ou asynchrone |
| nodemon | 2.0.20 |Nodemon nous sert uniquement pour le dev afin d'avoir un serveur en liverReload |

### Installation du projet
* Se placer à la racine du projet
* Ouvrir un terminal
* S'assurer d'avoir node d'installé via la commande dans le terminal
```
node -v
```
* installer les dépendances avec la commande dans le terminal
````
npm install
````
* installer les modules express et fs
````
npm install express fs
````
* installer le module nodemon avec les drapeaux pour la devDependencies
````
npm install nodemon --save-dev
````
permet d'éviter de surcharger l'application
### Manipulation du projet
* Installez l'extension Thunder Client sur VS Code
* Lancer une requête l'entrée de route de la requête
````
http:localhost:3000/epic/42
````
### Routes pour les chemins statics
* Epic
`````
http:localhost:3000/epic
`````
* Steam
`````
http:localhost:3000/steam
`````
### Fonctionnement
* Front
````
Compendium est une librairie qui permet de suivre l'évolution de vos liste de jeux. Pour se faire, la partie Front est l'interface qui vous permet d'intéragir avec votre bibliothèque et d'ajouter la liste de vos jeux ainsi que votre avancement et également vos envies et souhait de jeux.
````
* Back
````
La partie Back est une API de traitement des requêtes qui transitent entre les demandes sur le front et la bibliothèque qui regroupe les informations sous le type de fonctionnement CRUD
````
