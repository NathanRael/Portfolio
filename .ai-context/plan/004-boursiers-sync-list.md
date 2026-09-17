# Plan — Liste des boursiers déjà synchronisés

## Objectif
Page dans le sidebar global (DBNE : entrée directe, admin : dans le menu déroulant « Bourses ») listant les boursiers **déjà synchronisés** (ligne de statut wallet `payment_stages` présente), en réutilisant la page « liste des boursiers » existante (`ScholarshipListPage`) et tous ses filtres (`ProgressiveScholarshipFilter`).

## Étapes

### Backend (`scholarship` module)
- [x] DTO `ScholarshipStudentQueryDto` : nouveau filtre `syncedOnly`
- [x] `buildScholarshipWhereClause` : `student.paymentStages: { some: { reason: null } }` quand `syncedOnly`
- [x] DTO `ScholarshipStudentResponseDto` : champs optionnels wallet (`hasWallet`, `fundingsCount`, `totalPaid`, `syncedAt`)
- [x] Service `enrichWithWalletInfo` : enrichit la page avec le dernier statut wallet + agrégation des fundings (branch eligibilité + pagination normale)
- [x] `tsc --noEmit` backend

### Frontend
- [x] `scholarshipApi.getStudents` : paramètre `syncedOnly`
- [x] Type `ScholarshipStudent` : champs wallet optionnels
- [x] `ScholarshipListPage` : prop `syncedOnly` (filtre envoyé, colonne « Synchronisation », onglet comptes masqué, titres adaptés, export masqué)
- [x] Routes : `/${role}/scholarships/sync` (dbne + ministere)
- [x] Sidebar : entrée DBNE « Boursiers synchronisés » + sous-item admin « Bourses → Boursiers synchronisés »
- [x] Nettoyage : retrait de l'ancienne approche « settings » (route, hub, menu, tableau, endpoint `/wallet-payment/boursiers`)
- [ ] ESLint + tsc frontend

## Checklist qualité
- [x] Aucun `any` dans le code ajouté (le bloc existant `params: any` n'est pas modifié)
- [x] Champs wallet optionnels → aucune régression sur les autres pages boursiers
- [x] Filtres identiques à la liste des boursiers (année, université, établissement, mention, parcours, niveau, éligibilité, statut inscription, réclamation, IUN, recherche)

## Notes
- « Déjà synchronisé » = une ligne de statut `payment_stages` (reason NULL) existe pour l'étudiant.
- Le statut wallet affiché correspond au dernier `updatedAt` de la ligne de statut (toutes années).
- La totalisation des paiements (`fundings`) se fait par (étudiant, année de la dernière synchro).