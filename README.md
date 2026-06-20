# Spotlight Generator — OpenDev Mada

Web app standalone (HTML / CSS / JS, **aucun backend**) qui permet à un membre OpenDev Mada de remplir un formulaire et d'obtenir une carte personnalisée prête à partager sur Discord ou les réseaux sociaux.

➡️ **Avant de coder, regarde `docs/maquette-reference.html` dans un navigateur.** C'est le rendu final attendu, entièrement fonctionnel. Le but du repo est de reconstruire ce comportement, étape par étape, dans `index.html` / `style.css` / `script.js`.

## État du projet

Le squelette HTML/CSS est en place et visuellement fidèle à la maquette. **`script.js` est vide** — c'est tout le travail de contribution qui reste à faire. Aucune tâche n'est résolue.

## Stack

- HTML / CSS / JavaScript vanilla — pas de framework, pas de build step
- [html2canvas](https://html2canvas.hertzen.com/) (déjà inclus via CDN dans `index.html`) pour l'export PNG
- FileReader API (native) pour l'upload de photos

## Démarrer en local

Aucune installation nécessaire. Deux options :

```bash
# Option 1 : ouvrir directement
open index.html        # macOS
xdg-open index.html    # Linux

# Option 2 : petit serveur local (recommandé pour éviter les soucis de CORS avec FileReader)
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

## Charte de design — OpenDev Mada

Tokens extraits de la maquette de référence (`docs/maquette-reference.html`), déjà présents dans `style.css` :

| Élément | Valeur |
|---|---|
| Navy (couleur principale) | `#1B2A4A` |
| Navy clair (hover) | `#2a3f6f` |
| Off-white | `#F7F7F5` |
| Police | `Segoe UI, Arial, sans-serif` |
| Carte — largeur | `540px` |
| Export PNG — résolution | `scale: 3` (haute résolution) |

**Ne pas modifier ces valeurs sans concertation** — le rendu final doit coller pixel pour pixel à la maquette. Les contributions portent sur la *logique* (JS), pas sur le *design* (déjà figé en CSS).

## Tâches à contribuer

Chaque tâche correspond à une issue GitHub à créer (voir `CONTRIBUTING.md`) et à un bloc `TODO` dans `script.js` :

1. **Formulaire éditeur** — validation basique des champs (nom obligatoire, etc.)
2. **Upload de photos** — photo de profil + logo via FileReader API, aperçu immédiat dans le formulaire ET sur la carte
3. **Carte de rendu temps réel** — mise à jour à chaque frappe, sans rechargement
4. **Badges de stack dynamiques** — champ CSV → badges générés sur la carte
5. **Export PNG haute résolution** — capture via html2canvas à 3×
6. **Responsive mobile** — la maquette de référence n'est pas pensée mobile-first ; à améliorer (bonus, non bloquant)

Détail technique de chaque tâche : voir les commentaires `TODO` dans `script.js`.

## Comment contribuer

Voir [`CONTRIBUTING.md`](./CONTRIBUTING.md).

**Une seule règle non négociable : le rendu final doit coller à la maquette.**

Et un principe d'esprit du projet : on évite l'IA pour écrire la logique. L'idée, c'est que chacun reparte de zéro et code avec sa tête. 😉 (L'échafaudage de ce repo — structure de fichiers, README, découpage en tâches — a été préparé avec l'aide d'un assistant IA pour débloquer le démarrage du projet ; le code applicatif dans `script.js`, lui, est à écrire par les contributeurs.)
