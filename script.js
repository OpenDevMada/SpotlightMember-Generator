/* ═══════════════════════════════════════════════════════
   SpotlightMember-Generator — script.js
   Ce fichier est volontairement VIDE.
   Chaque TODO ci-dessous correspond à une issue GitHub /
   une tâche de la liste de contribution.
   Réfère-toi à docs/maquette-reference.html pour voir le
   comportement final attendu (UNIQUEMENT comme référence —
   ne pas copier-coller, le but est de l'écrire toi-même).
   ═══════════════════════════════════════════════════════ */

// ───────────────────────────────────────────────────────
// TÂCHE 1 — Formulaire éditeur + validation basique
// ───────────────────────────────────────────────────────
// Objectif :
//   - Lire les valeurs des champs #inputName, #inputCity,
//     #inputRole, #inputStack à chaque frappe (event "input")
//   - Validation basique attendue :
//       • #inputName : obligatoire, sinon afficher #nameError
//         et ajouter la classe .invalid sur le champ
//       • Les autres champs ont une valeur de repli ("Ville,
//         Pays" / "Rôle") si vides, géré par la TÂCHE 3
//   - Ne pas bloquer la saisie : la validation est visuelle,
//     elle ne doit pas empêcher de continuer à taper
//
// function validateName() { ... }


// ───────────────────────────────────────────────────────
// TÂCHE 2 — Upload de photos (FileReader API)
// ───────────────────────────────────────────────────────
// Objectif :
//   - #photoUploadZone (clic) -> ouvre #photoInput
//   - #logoUploadZone (clic) -> ouvre #logoInput
//   - Au changement de fichier, utiliser FileReader.readAsDataURL()
//   - Mettre à jour DEUX endroits à chaque upload :
//       1. L'aperçu dans le formulaire (#photoPreview / #logoPreview)
//          + cacher l'icône placeholder (#photoIcon / #logoIcon)
//       2. La carte de rendu (#cardPhoto / #cardLogo)
//          + cacher le placeholder (#cardPhotoPlaceholder / #cardLogoPlaceholder)
//   - Voir docs/maquette-reference.html, fonctions loadPhoto()
//     et loadLogo(), pour le comportement de référence
//
// function handlePhotoUpload(file) { ... }
// function handleLogoUpload(file) { ... }


// ───────────────────────────────────────────────────────
// TÂCHE 3 — Carte de rendu en temps réel
// ───────────────────────────────────────────────────────
// Objectif :
//   - Fonction centrale (ex: update()) appelée sur chaque
//     event "input" des champs texte
//   - Met à jour :
//       • #card-name : nom en MAJUSCULES, coupé sur 2 lignes
//         (voir logique de répartition des mots dans la
//         maquette de référence)
//       • #card-city, #card-role : texte direct
//   - Aucun rechargement de page, aucune latence visible
//
// function updateCardPreview() { ... }


// ───────────────────────────────────────────────────────
// TÂCHE 4 — Badges de stack dynamiques
// ───────────────────────────────────────────────────────
// Objectif :
//   - Lire #inputStack (chaîne séparée par virgules)
//   - Découper, nettoyer (trim), filtrer les valeurs vides
//   - Générer un <span class="card-badge"> par techno dans
//     #card-stack
//   - Se met à jour en même temps que updateCardPreview()
//     (même event "input")
//   - Penser à l'échappement basique si on veut éviter
//     l'injection HTML brute depuis le champ texte
//
// function renderStackBadges(rawValue) { ... }


// ───────────────────────────────────────────────────────
// TÂCHE 5 — Export PNG haute résolution (html2canvas)
// ───────────────────────────────────────────────────────
// Objectif :
//   - Au clic sur #exportBtn, capturer #card avec html2canvas
//   - Options attendues : scale: 3, backgroundColor: '#ffffff',
//     useCORS: true
//   - Déclencher un téléchargement automatique du PNG
//   - Nom de fichier suggéré : spotlight_<nom-du-membre>.png
//   - Gérer le cas où html2canvas échoue (try/catch +
//     message d'erreur visible pour l'utilisateur, pas juste
//     une erreur silencieuse en console)
//
// function exportCardAsPNG() { ... }


// ───────────────────────────────────────────────────────
// Initialisation
// ───────────────────────────────────────────────────────
// Une fois les fonctions ci-dessus écrites, les brancher ici :
//   - listeners "input" sur les champs texte
//   - listeners "click" sur les zones d'upload
//   - listeners "change" sur les <input type="file">
//   - listener "click" sur #exportBtn
//
// document.addEventListener('DOMContentLoaded', () => {
//   // ...
// });
