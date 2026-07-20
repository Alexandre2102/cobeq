# PMC COBEQ

Site Web de présentation du Projet majeur de conception COBEQ: un module robotisé dédié à la cueillette de fraises de production en serre et en culture hors-sol.

## Prérequis

- Node.js `>=22.13.0`

## Développement local

```bash
npm install
npm run dev
npm run build
```

## GitHub Pages

Le site peut être exporté en version statique dans `docs/`, compatible avec GitHub Pages:

```bash
npm run export:github-pages
```

Une action GitHub est incluse dans `.github/workflows/pages.yml` pour publier automatiquement la version statique sur GitHub Pages à chaque modification de la branche `main`.

## Commandes utiles

- `npm run dev`: démarrer le site en local
- `npm run build`: vérifier la construction du site
- `npm run export:github-pages`: générer la version statique dans `docs/`
- `npm test`: vérifier le rendu et l'export GitHub Pages