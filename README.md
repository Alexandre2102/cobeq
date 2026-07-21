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

La version publique GitHub Pages est servie par la branche `gh-pages`:

https://alexandre2102.github.io/cobeq/

Le site peut être exporté en version statique dans `docs/`:

```bash
npm run export:github-pages
```

Pour republier sur GitHub Pages, il faut mettre le contenu de `docs/` à la racine de la branche `gh-pages`.

## Commandes utiles

- `npm run dev`: démarrer le site en local
- `npm run build`: vérifier la construction du site
- `npm run export:github-pages`: générer la version statique dans `docs/`
- `npm test`: vérifier le rendu et l'export GitHub Pages