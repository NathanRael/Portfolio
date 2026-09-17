# Plan — Visual batch progress (wallet sync)

## Objectif
Afficher, sous la barre de progression, une liste de l'état de chaque batch
(page de 100 étudiants) avec les batches en attente groupés par tranches de 5.

## Étapes

- [x] Backend : ajouter `WalletSyncBatchProgress` + `batchSize`/`batches` au type `WalletSyncJobProgress`
- [x] Backend : suivre un tableau `batches` par job (`in_progress`/`done`/`cancelled`) dans `wallet-payment-sync.service.ts`
- [x] Backend : incrémenter les compteurs par batch dans `processPage` + exposer dans `toProgress`
- [x] Frontend : étendre `types.ts` (batchSize + batches)
- [x] Frontend : créer `features/wallet-sync/components/wallet-sync-batches.tsx` (rows terminées/en cours + grille d'attente « par tranches de 5 »)
- [x] Frontend : afficher le composant dans `wallet-sync-manager.tsx` sous la progression
- [ ] Lint + tsc frontend (valo — `routes.d.ts` corrompu par cache .next, hors scope)

## Checklist qualité
- [x] Composant client uniquement (liste feature-internal, réutilisable dans le feature)
- [x] `data-cy` sur l'élément clé (`wallet-sync-batches`)
- [x] Tokens design (border-border, bg-background-*, text-foreground/*, text-muted-foreground)
- [x] Aucun `any` explicite
- [x] Barres `components/ui/progress` par batch