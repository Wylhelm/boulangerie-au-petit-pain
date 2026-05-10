# Au Petit Pain — Site Vitrine

Site vitrine de la boulangerie **Au Petit Pain**, développé avec React + TypeScript + Vite.

## Accès en production

**URL publique :** https://wylhelm.github.io/boulangerie-au-petit-pain/

Le déploiement est automatique à chaque push sur la branche `main` via GitHub Actions → GitHub Pages.

## Développement local

```bash
npm install
npm run dev
```

Le serveur de développement démarre sur http://localhost:5173.

## Build

```bash
npm run build
```

Les fichiers de production sont générés dans le dossier `dist/`.

## Déploiement

### Pipeline CI/CD (automatique)

Le fichier `.github/workflows/deploy.yml` configure un pipeline GitHub Actions qui :

1. Se déclenche à chaque push sur `main` (ou manuellement via l'onglet Actions)
2. Installe les dépendances avec `npm ci`
3. Build le projet avec `npm run build`
4. Déploie le contenu de `dist/` sur GitHub Pages

### Configuration requise (une seule fois)

Dans les **Settings** du dépôt GitHub :
1. Aller dans **Settings → Pages**
2. Source : **GitHub Actions**
3. Sauvegarder

Le premier déploiement se lance automatiquement après le premier push.

### Déploiement manuel

Via l'interface GitHub : onglet **Actions** → workflow **Deploy to GitHub Pages** → **Run workflow**.

## Variables d'environnement

Aucune variable d'environnement n'est requise — le site est entièrement statique.

Pour un futur backend (API, CMS), créer un fichier `.env.local` (non commité) avec les variables nécessaires, préfixées `VITE_` pour les exposer côté client :

```env
VITE_API_URL=https://api.example.com
```

## Stack technique

- [React 19](https://react.dev/) — UI
- [TypeScript](https://www.typescriptlang.org/) — typage statique
- [Vite](https://vite.dev/) — bundler et dev server
- [GitHub Actions](https://github.com/features/actions) — CI/CD
- [GitHub Pages](https://pages.github.com/) — hébergement statique gratuit
