Rendu DevOps

J'ai utilisé un back en nodejs, voici le repo: https://github.com/Karonad/StatsDeFootBack

J'ai utilisé 3 workflows pour le front et 2 pour le back.

Pour le front: 
    Pre-prod/Prod(master):
        - Build du projet
        - Vérification du Linter pour déterminer si le code est bien conforme aux règles instaurés
        - Tests afin de vérifier si le projet ne contient pas de problèmes définis
        - Mise en production sur Heroku 
            - URL pre-prod: https://iim-a4-qf-stats2foot-front.herokuapp.com/
            - URL prod: https://iim-a4-qf-stats2foot-frontprod.herokuapp.com/
        - Envoi d'un Email pour valider que le projet est déployer ( Cet ajout va rater car gmail n'accepte pas bien l'envoi c'est-à-dire qu'il faut que je disable le captcha pour           que ca fonctionne, on peux le voir dans les actions du back )
     Pull-request: Exécution des étapes précendentes sauf le deploy

Pour le back:
    Pre-prod/Prod(master):
        -  Build du pojet
        - Tests afin de vérifier si le projet ne contient pas de problèmes définis
        - Mise en production sur Heroku
        - Envoi d'un Email pour valider que le projet est déployer ( Cet ajout va rater car gmail n'accepte pas bien l'envoi c'est-à-dire qu'il faut que je disable le captcha pour           que ca fonctionne, on peux le voir dans les actions du back )

      
