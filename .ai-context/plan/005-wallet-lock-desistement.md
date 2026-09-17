# Plan — Wallet lock : désistement modifiable + warning permanent

## Objectif
Sur la page de modification d'un étudiant (`StudentFormPage`) :
1. Quand l'étudiant possède un wallet Trésor : afficher le warning `StudentWalletLocked` et le garder visible (condition actuellement inversée).
2. Les autres champs restent verrouillés (fieldset disabled + bouton désactivé).
3. Le champ « désistement » (`has_withdrawn`) reste modifiable et enregistrable, via un circuit séparé avec son propre contrôle de validation.

## Étapes

### Backend
- [x] `update-student.use-case.ts` : déplacer le check wallet après construction du patch ; ne lever `ForbiddenException` que si le patch touche d'autres champs que `hasWithdrawn`/`withdrawnAt` ; ne pas forcer `identityLevel = STRONG` sur un patch désistement-only.

### Frontend
- [x] `schemas.ts` : ajouter `withdrawnSchema` (zod, champ unique `has_withdrawn` booléen requis).
- [x] Service `update-student-withdrawn.ts` : PATCH `/students/:id` avec `{ hasWithdrawn }` uniquement.
- [x] Hook `use-withdrawn-form.ts` : formulaire dédié (zodResolver sur `withdrawnSchema`), submit propre, invalidation queries, toasts.
- [x] Composant `student-withdrawn-section.tsx` : radios Oui/Non + bouton « Enregistrer le désistement », gate rôle (DBNE/MINISTERE/ADMIN), rendu uniquement si wallet lock + mode édition.
- [x] `family-info-section.tsx` : prop `hideWithdrawn` pour masquer son bloc désistement quand le wallet lock est actif.
- [x] `student-form-page.tsx` : corriger la condition du warning (`isWalletLocked &&`), passer `hideWithdrawn`, rendre la section autonome hors du `<fieldset disabled>`.
- [x] `student-wallet-locked.tsx` : mentionner que le désistement reste modifiable.

## Checklist qualité
- [x] Aucun `any`
- [x] `data-cy` sur les nouveaux contrôles interactifs
- [x] ESLint frontend + tsc backend sur les fichiers touchés

## Notes
- Le backend rejette déjà tout update d'un étudiant wallet (403) → l'exception backend est indispensable pour que la sauvegarde du désistement aboutisse.
- Le bouton principal « Modifier » reste désactivé sous wallet lock : seul le circuit dédié enregistre.
- Fix bouton désactivé : `setValue` sans `shouldDirty: true` laissait `isDirty` à `false`. Le bouton est désormais conditionné sur une comparaison manuelle valeur courante vs valeur initiale (`isChanged`) + `isSubmitting` — plus aucune dépendance aux formState (`isValid`/`isDirty`) ni au formulaire principal.
