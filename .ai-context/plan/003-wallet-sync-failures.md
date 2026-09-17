# Plan — Erreurs persistées + relance ciblée (wallet sync)

## Objectif
Sur la page de synchronisation wallet :
1. Afficher les échecs (UIN + motif) dans une section dédiée sous le suivi du job (second layout ergonomique).
2. Bouton « Relancer les erreurs » qui ne retraite que les étudiants en échec (pas toute la base).

## Étapes

### Backend
- [x] Modèle `WalletSyncFailure` (jobId, batchNumber, uin, studentId, reason, createdAt) + relation Student
- [x] `prisma:generate` + `prisma:push`
- [x] Repo : `persistFailures`, `findFailures`, `findStudentsByUins`
- [x] Service : collecte/persist des échecs par page
- [x] Service : `startRetry(jobId)` (UIN distincts, encore éligibles) + boucle `nextSlice`/`advanceCursor` (mode retry = liste ciblée)
- [x] Service : `getFailures(jobId, limit)`
- [x] Controller : `GET /sync/:jobId/failures`, `POST /sync/:jobId/retry`
- [x] Endpoint global `GET /sync/failures` (derniers échecs tous jobs) — corrige l'affichage après restart backend (jobs en mémoire vides)
- [x] Fix sérialisation : `studentId` converti en string (BigInt non sérialisable en JSON → 500 silencieux)
- [x] `tsc` backend

### Frontend
- [x] Types : `WalletSyncFailureRecord`, `retryOfJobId?`
- [x] Service : `getFailures(jobId)`, `retry(jobId)`
- [x] Composant `wallet-sync-failures.tsx` (table Batch/UIN/Motif/Date + bouton relance, état vide)
- [x] Manager : chargement des échecs (source = `retryOfJobId` sinon job courant), `handleRetry`, section second layout
- [x] Manager : bascule sur `getRecentFailures` (indépendant des jobs en mémoire) + refresh pendant le polling
- [x] ESLint + tsc frontend

## Checklist qualité
- [x] `data-cy` sur le bouton relance (`wallet-sync-retry-errors`)
- [x] Tokens design, table shadcn
- [x] Aucun `any`, types explicites
- [x] Relance bornée à 500 échecs (dédupliqués par UIN)

## Notes
- `prisma:push` utilisé pour la dev ; prévoir une migration versionnée pour la prod.
- Après relance, un nouveau job (RUNNING) est créé ; l'UI bascule dessus et la section affiche les échecs du job source pendant le retraitement.
- `clearFailures` : les échecs des étudiants repassés en succès sont supprimés (tous jobs) — la liste se vide au fil de la synchro.
- Layout : section erreurs côte à côte (grille `lg:grid-cols-2`) au lieu d'en dessous.
- Rafraîchissement : polling 2 s pendant un job actif + à chaque changement de statut.