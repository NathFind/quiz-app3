# Brief Projet — Quiz IA

*Document distribué aux stagiaires avant le Sprint A*

---

## Contexte et objectif

Vous allez construire, en tant que classe, une application de quiz dont les questions sont générées par intelligence artificielle (Claude via API). L'application évoluera au fil de 7 sprints de développement, jusqu'à devenir une appli multi-utilisateurs avec génération IA, validation humaine du contenu, et contrôle d'accès.

**Ce document décrit la trajectoire complète du projet** — pas seulement ce qui sera codé aujourd'hui. Il sert de référence pour poser, dès le premier sprint, un périmètre de test qui anticipe les fonctionnalités à venir plutôt que de se limiter à l'état du jour.

---

## Point de départ (ce qui existe au Sprint A)

- Une question affichée avec plusieurs choix de réponse
- Un retour immédiat ("correct" / "incorrect") au clic

C'est le seul point de départ. Tout le reste ci-dessous **arrivera progressivement** — il ne faut pas s'étonner de ne pas le voir codé dès le premier sprint.

---

## Roadmap fonctionnelle complète

### Scoring et navigation
L'application enchaînera plusieurs questions à la suite, avec un score qui évolue et un indicateur de progression (ex : question 2/5).

### Génération des questions par IA
Les questions ne seront plus écrites à la main : elles seront générées automatiquement par un appel à l'IA, avec un format de réponse structuré (JSON) que l'application devra interpréter correctement.

### Multi-utilisateurs et contenu partagé
Les questions générées seront **visibles par toute la classe**, pas seulement par la personne qui les a générées. Le contenu sera stocké et persistera après rechargement de la page.

### Fiabilité de la génération IA
Des vérifications automatiques s'assureront que chaque question générée est bien formée, cohérente, et reste dans le thème attendu — y compris face à des tentatives de contournement.

### Rôle créateur et validation du contenu
Une personne pourra jouer un rôle de "créateur" : demander la génération d'un lot de questions sur un thème choisi, puis valider ou rejeter chacune avant qu'elle ne soit visible des utilisateurs. Seul le contenu validé sera accessible côté quiz.

### Contrôle d'accès
L'accès à la vue "créateur" sera protégé — un utilisateur normal ne doit jamais pouvoir y accéder ni influencer le contenu publié.

---

## Contraintes et risques connus dès maintenant

Ces éléments ne sont pas encore codés au Sprint A, mais ils font partie du projet et méritent d'être anticipés dans votre périmètre de test :

- **Contenu non-déterministe** : l'IA ne génère jamais exactement la même chose deux fois — la façon de vérifier un résultat sera différente de celle d'une application classique.
- **Multi-utilisateurs** : plusieurs personnes pourront interagir avec les mêmes données en même temps.
- **Exposition publique inter-classes** : votre application sera testée par une autre classe que la vôtre, et vous testerez celle d'une classe différente de la vôtre. Le contenu doit rester exploitable et compréhensible par des personnes extérieures à votre classe.
- **Rotation du "publieur"** : chaque sprint, une seule personne de la classe se charge de mettre en ligne le travail commun — la synchronisation entre postes est un point d'attention.

---

## Ce qu'on attend de vous au Sprint A (phase test)

En vous appuyant sur ce brief, posez un périmètre de test qui :

- couvre les risques déjà identifiables ci-dessus, même s'ils ne sont pas encore codés
- distingue ce qui est testable aujourd'hui de ce qui le sera plus tard
- formule des critères d'entrée/sortie mesurables, pas des intentions générales
