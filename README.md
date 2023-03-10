# code-beetrip

test technique réalisé à partire de l'énoncé suivant:
# Consigne

Le but de cet exercice est de coder un mini-site sur le thème du tennis. Le site devra permettre de **simuler le déroulé d’un match, point par point, et d’en déduire le score**.

**Le site sera composé un front, et d’un back.**

- Sur le front, un petit formulaire permettra de régler les paramètre suivants :
    - Nom joueur 1
    - Niveau joueur 1 (note de 1 à 10)
    - Nom joueur 2
    - Niveau joueur 2 (note de 1 à 10)
- Sur le front, il sera possible de générer aléatoirement (et autant de fois que souhaité), une liste de 150 points, avec le résultat de chaque point, sous cette forme :
    
    <aside>
    🎾 - Point 1 : remporté par [Nom du joueur 1]
    - Point 2 : remporté par [Nom du joueur 1]
    - Point 3 : remporté par [Nom du joueur 2]
    - etc.
    
    </aside>
    
    Cette liste de points sera affichée pour vérification.
    
    Le niveau des joueurs sera reflété dans les points remportés (un joueur de bon niveau doit statistiquement gagner plus de points qu’un joueur de mauvais niveau)
    
- Un bouton permettra d’envoyer la liste des points au backend, afin d’obtenir le score Final.
- Côté backend, il faudra donc calculer et renvoyer :
    - Le vainqueur, si le match est terminé
    - Le score

Le front devra afficher le résultat sous la forme suivante :

<aside>
🎾 Résultat : **Jeu en cours, pas de vainqueur**

|  | Set 1 | Set 2 | Set 3 | Current Game |
| --- | --- | --- | --- | --- |
| Thomas | 6 | 2 | 4 | AV |
| Paul | 4 | 6 | 1 | - |
</aside>

# Règles du match (et du tennis)

Pour les connaisseurs, c’est un match au meilleur des 5 manches, avec un tie break classique au 5è set (comme les autres sets)

Voici les règles en détail (si une règle du tennis n’est pas comprise, n’hésite pas à nous demander, cela ne fait pas partie de l’exercice) :

### Match

Le gagnant du match est le premier à inscrire 3 sets

### Set

Pour remporter un set, un joueur doit gagner 6 jeux, avec au moins 2 jeux d’écart (ex : un jeu est gagné à 6-4, mais il reste non terminé à 6-5).

Si le score d’un set atteint 6-5, le score suivant peut-être : 

- 7-5, dans ce cas, le set est gagné
- 6-6. Dans ce cas, un jeu décisif sera joué (voir plus loin), et le gagnant du jeu décisif remportera le set. Dans le cas où le set est remporté suite à un jeu décisif, le score final du set est noté 7-6 (c’est la seule possibilité de gagner un set avec un jeu d’écart)

### Jeu “classique”

Pour remporter un jeu, il faut remporter au moins 4 points, avec au moins 2 points d’écart avec l’adversaire. 

La notation des scores d’un jeu en cours est la suivante : 0 (0 point), 15 (1 point), 30 (2 points), 40 (3 points)

Si le score atteint 4-3, 5-4, 6-5, etc : le score est noté “AV -” (le premier joueur a l’avantage “AV”)

Si le score atteint 3-4, 4-5, 5-6, etc : le score est noté “- AV” (le deuxième joueur a l’avantage “AV”)

Si le score est a égalité, et à plus de 4-4 (5-5, 6-6, etc), le score est noté 40 - 40, comme à 4-4.

Exemples : 

- 2-1 ⇒ 30 - 15
- 4 - 4 ⇒ 40 - 40
- 4-5 ⇒ - AV
- 7-6 ⇒ AV -
- 9-9 ⇒ 40 - 40

### Jeu décisif

Quand le score du set (en nombre de jeux) atteint 6-6, un jeu décisif est joué : 

Il ne faut plus inscrire 4 points, mais 7 pour gagner le jeu, toujours avec 2 points d’écart.

Question affichage, la notation des points change, et n’est plus 0, 15, 30, 40, mais 1, 2, 3, 4, 5, 6, sans règle particulière (exemple : 5-2)

# Réalisation de l’exercice

- Aucune importance au design pour cet exercice, un rendu en pur html sans css nous ira très bien, nous voulons juste voir le code applicatif.
- L’exercice pourra nous être partagé de n’importe quelle manière, tant qu’il est possible simplement de :
    - Voir le code
    - Lancer l’app pour la tester.

>>>>>>>> *

##Image du designe très sommaire comme demandé

[Photo](frontend/picture/photo1.png)
## Initialisation du projet 

-Copie de la clé SSH

-Dans le terminal depuis la racine du projet => cd ./backend/ 

-Puis npm install 

-npm install -g nodemon 

-Et enfin nodemon .

-Reste à lire le fichier HTML qui se trouve dans la partie frontend sur votre navigateur et à tester l'application.