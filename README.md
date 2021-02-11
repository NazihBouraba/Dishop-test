# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


##choix techniques et architecturaux 

chaque page est representée par un dossier qui contient 3 fichiers (header,content,footer)


#Architecture
point positif: 
separation du travail et decentralisation du developpement.

point negatif:
trop de code repeté : non respect des principe de programmation DRY (dont repeat your self)
puisque toutes les pages ont les memes header s et footers.
ainsi que les pages sont trés similaires on pouvait bien créer un seul composant pour representer les trois pages(juste le tableau de données qui change)

#technique: 
j'ai utilisé une bibliotheque MDBreact pour afficher quelques components (comme footer)
car elle simple efficace et rapide.
un styling simple avec CSS (pas d'animations)
j'ai utliser React Router pour la navigation .


##Ameliorations: 
-creer un seul component pour gerer l'affichage des trois pages selon les props passées 
-utiliser Redex pour centraliser la lecture du fichier Json et manipulation du store.
-refonrcer UI/UX
-Rajouter quelques animations



#si j'avait le temps

-j'aurait creé un petit server (json-server) pour simuler le loading des données via un serveur
-implementer redux pour la gestion des données (tableau)
-améliorer l'interface graphique
-rajouter proptypes
-creer une autre page pour l'affichage detaillé d'un (film/serie).
