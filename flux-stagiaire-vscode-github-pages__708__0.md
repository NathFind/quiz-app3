# Flux stagiaire — VS Code vers GitHub Pages

*Note de référence — les stagiaires n'ouvrent jamais github.com*

---

## Principe général

Tout se passe dans **VS Code**. Les stagiaires ne consultent que l'**URL GitHub Pages** de leur classe dans un navigateur pour voir le résultat. Ils n'ouvrent jamais `github.com`.

---

## Étape 0 — Association initiale (une seule fois, avant le Sprint A)

L'association entre le dossier local (VS Code) et le repo GitHub se fait **une seule fois, au clonage** — jamais à refaire ensuite. À partir de ce moment, tout commit/push depuis ce dossier part automatiquement vers le bon repo, sans que le stagiaire ait à le repréciser.

1. Dans VS Code : `Ctrl+Shift+P` → **"Git: Clone"**
2. Coller l'URL du repo **de sa classe** (à copier-coller depuis le support, jamais à taper de mémoire) :
   - Classe 1 → `https://github.com/jyboub/quiz-app1.git`
   - Classe 2 → `https://github.com/jyboub/quiz-app2.git`
   - Classe 3 → `https://github.com/jyboub/quiz-app3.git`
3. VS Code demande où enregistrer le dossier localement — **c'est le seul choix manuel du stagiaire dans tout le processus**. Recommandation : choisir directement le **Bureau (Desktop)**, pour que tous les stagiaires aient le même chemin prévisible. À partir de cet emplacement, tout le reste se fait automatiquement : Git crée lui-même un sous-dossier portant le nom du repo (ex : `Desktop\quiz-app1\`), déjà rempli avec les 3 fichiers vides (`index.html`, `script.js`, `style.css`), puisque le repo a été préparé ainsi en amont par le formateur. Aucune création manuelle de dossier ou de fichier n'est nécessaire — ni le nom du dossier, ni les fichiers à créer.
4. Ouvrir ce dossier dans VS Code une fois le clonage terminé (`File > Open Folder` s'il ne s'ouvre pas automatiquement)

**Vérification obligatoire immédiatement après clonage**, avant de coder quoi que ce soit :

```bash
git remote -v
```

L'URL affichée doit correspondre exactement au repo de la classe. C'est un réflexe de 10 secondes qui évite toute confusion entre classes par la suite.

---

## Déroulé étape par étape (répété à chaque sprint)

1. **Modifier le code** dans VS Code (`index.html`, `script.js`, `style.css`)
2. **Tester en local** avec l'extension Live Server (clic droit sur `index.html` → "Open with Live Server")
3. Une fois satisfait, **le publieur du sprint** (rotation entre les 4 stagiaires) commit + push depuis l'onglet **Source Control** de VS Code (`Ctrl+Shift+G`) :
   - Sélectionner les fichiers modifiés
   - Écrire un message dans le champ en haut (ex : `Sprint B - scoring et navigation`)
   - Cliquer sur **✓ Commit**
   - Cliquer sur **"Sync Changes"** (ou "Push")
4. **Attendre le déploiement** : 5–10 min au premier déploiement, souvent plus rapide ensuite
5. **Rafraîchir l'URL GitHub Pages** de la classe (`https://jyboub.github.io/quiz-appX/`) pour voir le résultat en ligne

---

## Point d'attention : cache navigateur

Si le changement n'apparaît pas après le délai, faire un **rafraîchissement forcé** :
- `Ctrl+F5` ou `Ctrl+Shift+R`

plutôt qu'un simple `F5` — le navigateur garde parfois en cache l'ancienne version de la page, ce qui peut faire croire à tort que le déploiement a échoué.

---

## Ce qui reste réservé au formateur

- Consultation de `github.com` (historique des commits, supervision, résolution de conflits)
- Configuration Vercel (proxy, clé API) — les stagiaires n'y accèdent jamais non plus
- Résolution des cas de divergence Git (conflits, remotes mal configurés)

---

## Rappel : un seul publieur par sprint

Une seule personne de la classe commit + push par sprint (rotation). Éviter que plusieurs stagiaires poussent en parallèle, pour limiter les conflits Git et les divergences entre copies locales.
