# Plan — Page de synchronisation wallet (admin)

## Objectif
Ajouter une navigation "Paramètres → Synchronisation wallet" (admin) et une page
qui pilote l'API backend `/api/wallet-payment/sync` avec visualisation de la progression.

## Étapes

- [x] Explorer la structure settings/admin et les conventions (services, httpClient, progress)
- [x] Rédiger ce plan
- [x] Créer `features/wallet-sync/types.ts` (contrats WalletSyncJobProgress, statuts)
- [x] Créer `features/wallet-sync/services/wallet-sync.ts` (start/get/pause/resume/cancel/list)
- [x] Créer `features/wallet-sync/components/wallet-sync-manager.tsx` (client : lancement, polling, barre de progression, actions pause/resume/cancel)
- [x] Créer `features/wallet-sync/page.tsx` (wrapper fin)
- [x] Créer la route `app/(main)/ministere/settings/(pages)/wallet-sync/page.tsx`
- [x] Ajouter l'entrée de menu (carte) dans `features/setting/page.tsx` (adminOnly)
- [x] Ajouter l'entrée dans `app/(main)/ministere/settings/(pages)/layout.tsx` (adminOnly)
- [x] Lint + build du frontend

## Checklist qualité
- [ ] Composant client uniquement là où requis (polling, état réel)
- [ ] `data-cy` sur les éléments interactifs
- [ ] Aucun `any`, types explicites
- [ ] Pas de commentaires superflus
- [ ] Barre de progression via `components/ui/progress`
