Rendu DevOps

J'ai utilisé un back en nodejs, voici le repo: https://github.com/Karonad/StatsDeFootBack

J'ai utilisé 3 workflows pour le front et 2 pour le back.

Pour le front

Pre-prod/Prod(master)
1. Build du projet
2. Vérification du Linter pour déterminer si le code est bien conforme aux règles instaurés
3. Tests afin de vérifier si le projet ne contient pas de problèmes définis
4. Mise en production sur Heroku 
a. URL pre-prod: https://iim-a4-qf-stats2foot-front.herokuapp.com/
b. URL prod: https://iim-a4-qf-stats2foot-frontprod.herokuapp.com/
5. Envoi d'un Email pour valider que le projet est déployer ( Cet ajout va rater car gmail n'accepte pas bien l'envoi c'est-à-dire qu'il faut que je disable le captcha pour que ca fonctionne, on peux le voir dans les actions du back).


Pull-request
1. Exécution des étapes précendentes sauf le deploy



Pour le back

Pre-prod/Prod(master)
1. Build du pojet
2. Tests afin de vérifier si le projet ne contient pas de problèmes définis
3. Mise en production sur Heroku
4. Envoi d'un Email pour valider que le projet est déployer ( Cet ajout va rater car gmail n'accepte pas bien l'envoi c'est-à-dire qu'il faut que je disable le captcha pour que ca fonctionne, on peux le voir dans les actions du back )

      
