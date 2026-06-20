# Contribuer au Spotlight Generator

Merci de vouloir contribuer ! Voici le process, simple et rapide.

## 1. Choisir une tâche

Va dans l'onglet **Issues** du repo. Chaque tâche listée dans le README a sa propre issue. Commente l'issue pour te l'assigner avant de commencer, histoire d'éviter que deux personnes bossent sur la même chose en parallèle.

Pas d'issue qui te convient ? Tu peux en proposer une nouvelle (ex : amélioration responsive, accessibilité, petit bug visuel).

## 2. Créer une branche

Depuis `main` :

```bash
git checkout main
git pull
git checkout -b feature/nom-de-ta-tache
```

Exemples de noms : `feature/upload-photo`, `feature/export-png`, `feature/validation-formulaire`.

## 3. Coder

- Travaille uniquement dans `script.js` (et `index.html` / `style.css` seulement si ta tâche le justifie explicitement, ex : tu ajoutes un message d'erreur qui a besoin d'un nouvel élément).
- Garde les IDs et classes existants (`#inputName`, `.card-badge`, etc.) — d'autres tâches en dépendent.
- Teste dans le navigateur en ouvrant `index.html` (ou via `python3 -m http.server`).
- Compare ton résultat à `docs/maquette-reference.html` — ouvre les deux côte à côte. **Le rendu final doit coller à la maquette.**

### La règle IA

On évite l'IA pour écrire la logique métier (le contenu de `script.js`). L'objectif du projet, c'est que chacun apprenne en codant la fonctionnalité de A à Z. Un peu d'autocomplétion classique (IDE) ou une recherche ponctuelle, ok — un bloc de code généré et collé tel quel, non.

## 4. Ouvrir une Pull Request

```bash
git add .
git commit -m "feat: upload de la photo de profil"
git push origin feature/nom-de-ta-tache
```

Puis ouvre la PR sur GitHub vers `main`. Dans la description :
- Quelle tâche/issue ça résout (`Closes #X`)
- Une capture d'écran ou un GIF du résultat
- Toute limite connue ou question ouverte

## 5. Review

Quelqu'un de l'équipe relit, compare au visuel de la maquette, et merge ou demande des ajustements. Pas de stress — c'est normal de faire des allers-retours.

## Convention de commits

Pas obligatoire mais apprécié, format simple :
- `feat: ...` — nouvelle fonctionnalité
- `fix: ...` — correction de bug
- `style: ...` — ajustement visuel/CSS uniquement
- `docs: ...` — documentation

## Questions ?

Pose-les directement dans l'issue correspondante, ou sur le channel Discord du projet.
