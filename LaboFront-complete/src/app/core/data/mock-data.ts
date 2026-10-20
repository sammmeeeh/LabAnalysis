import { Analyse, AppUser, Article, ClientEntity, ContactClient, DecisionQualite, DemandeTest, Echantillon, Famille, Fourchette, NatureEchantillon, Norme, ReferenceMethode, Rapport, Resultat, SousFamille, Speculation, TypeAnalyse, Unite, Usine } from '../models/app.models';

export interface MockDatabase {
  users: AppUser[];
  familles: Famille[];
  sousFamilles: SousFamille[];
  speculations: Speculation[];
  articles: Article[];
  naturesEchantillon: NatureEchantillon[];
  unites: Unite[];
  referencesMethodes: ReferenceMethode[];
  normes: Norme[];
  typesAnalyse: TypeAnalyse[];
  fourchettes: Fourchette[];
  clients: ClientEntity[];
  contactsClient: ContactClient[];
  usines: Usine[];
  demandesTest: DemandeTest[];
  echantillons: Echantillon[];
  analyses: Analyse[];
  resultats: Resultat[];
  decisionsQualite: DecisionQualite[];
  rapports: Rapport[];
}

export const initialMockDatabase: MockDatabase = {
  users: [
    { id: 1, nom: 'Admin Labo', email: 'admin@lab.local', motDePasse: 'Password123!', role: 'Administrator' },
    { id: 2, nom: 'Technicien Omar', email: 'tech@lab.local', motDePasse: 'Password123!', role: 'Technician' },
    { id: 3, nom: 'Qualite Salma', email: 'quality@lab.local', motDePasse: 'Password123!', role: 'QualityManager' },
    { id: 4, nom: 'Nutrition Yassine', email: 'nutrition@lab.local', motDePasse: 'Password123!', role: 'NutritionManager' },
    { id: 5, nom: 'Client Atlas', email: 'client@lab.local', motDePasse: 'Password123!', role: 'Client', clientId: 1 }
  ],
  familles: [
    { id: 1, nom: 'Cereales', description: 'Produits cerealiers et derives' },
    { id: 2, nom: 'Aliments composes', description: 'Formules finies et melanges' }
  ],
  sousFamilles: [
    { id: 1, nom: 'Farines', description: 'Farines de transformation', familleId: 1 },
    { id: 2, nom: 'Semoules', description: 'Semoules et issues', familleId: 1 },
    { id: 3, nom: 'Premix', description: 'Melanges nutritionnels', familleId: 2 }
  ],
  speculations: [
    { id: 1, nom: 'Ble tendre', origine: 'Maroc' },
    { id: 2, nom: 'Mais', origine: 'France' },
    { id: 3, nom: 'Soja', origine: 'Bresil' }
  ],
  articles: [
    { id: 1, code: 'ART-FAR-001', designation: 'Farine panifiable T55', sousFamilleId: 1, speculationId: 1 },
    { id: 2, code: 'ART-SEM-002', designation: 'Semoule fine extra', sousFamilleId: 2, speculationId: 1 },
    { id: 3, code: 'ART-PMX-003', designation: 'Premix croissance volaille', sousFamilleId: 3, speculationId: 3 }
  ],
  naturesEchantillon: [
    { id: 1, libelle: 'Produit fini', description: 'Echantillon issu du lot final' },
    { id: 2, libelle: 'Matiere premiere', description: 'Produit brut a reception' }
  ],
  unites: [
    { id: 1, code: '%', libelle: 'Pourcentage' },
    { id: 2, code: 'ppm', libelle: 'Parties par million' },
    { id: 3, code: 'g/kg', libelle: 'Grammes par kilogramme' }
  ],
  referencesMethodes: [
    { id: 1, code: 'RM-001', libelle: 'Sechage etuve 130C' },
    { id: 2, code: 'RM-002', libelle: 'Spectrometrie NIR' },
    { id: 3, code: 'RM-003', libelle: 'Tamisage normalise' }
  ],
  normes: [
    { id: 1, code: 'NM-ISO-712', libelle: 'Humidite cereales' },
    { id: 2, code: 'NM-ISO-2171', libelle: 'Cendres totales' },
    { id: 3, code: 'NM-INT-004', libelle: 'Granulometrie interne' }
  ],
  typesAnalyse: [
    { id: 1, libelle: 'Humidite', referenceMethodeId: 1, normeId: 1, uniteId: 1 },
    { id: 2, libelle: 'Cendres', referenceMethodeId: 2, normeId: 2, uniteId: 1 },
    { id: 3, libelle: 'Granulometrie', referenceMethodeId: 3, normeId: 3, uniteId: 3 }
  ],
  fourchettes: [
    { id: 1, articleId: 1, typeAnalyseId: 1, valeurMin: 11.5, valeurMax: 14 },
    { id: 2, articleId: 1, typeAnalyseId: 2, valeurMin: 0.4, valeurMax: 0.7 },
    { id: 3, articleId: 3, typeAnalyseId: 2, valeurMin: 5, valeurMax: 7 },
    { id: 4, articleId: 2, typeAnalyseId: 3, valeurMin: 0.8, valeurMax: 1.3 }
  ],
  clients: [
    { id: 1, raisonSociale: 'Atlas Foods', code: 'CLI-ATLAS', secteur: 'Minoterie' },
    { id: 2, raisonSociale: 'NutriFeed Industrie', code: 'CLI-NUTRI', secteur: 'Nutrition animale' }
  ],
  contactsClient: [
    { id: 1, clientId: 1, nom: 'Sara Benali', email: 'sara@atlasfoods.ma', telephone: '+212600000001' },
    { id: 2, clientId: 2, nom: 'Hamza Idrissi', email: 'hamza@nutrifeed.ma', telephone: '+212600000002' }
  ],
  usines: [
    { id: 1, clientId: 1, nom: 'Usine Casablanca', ville: 'Casablanca', pays: 'Maroc' },
    { id: 2, clientId: 1, nom: 'Usine Fes', ville: 'Fes', pays: 'Maroc' },
    { id: 3, clientId: 2, nom: 'Site Kenitra', ville: 'Kenitra', pays: 'Maroc' }
  ],
  demandesTest: [
    { id: 1, numero: 'DT-2026-001', clientId: 1, usineId: 1, articleId: 1, natureEchantillonId: 1, dateDemande: '2026-08-05', statut: 'Soumise', commentaire: 'Controle lot expedition', echantillonInfo: 'Lot F55-0805' },
    { id: 2, numero: 'DT-2026-002', clientId: 2, usineId: 3, articleId: 3, natureEchantillonId: 1, dateDemande: '2026-08-07', statut: 'Validee', commentaire: 'Verification matiere avant liberation', echantillonInfo: 'Lot PMX-211' },
    { id: 3, numero: 'DT-2026-003', clientId: 1, usineId: 2, articleId: 2, natureEchantillonId: 2, dateDemande: '2026-08-08', statut: 'Cloturee', commentaire: 'Reclamation client final', echantillonInfo: 'Prelevement ligne 2' }
  ],
  echantillons: [
    { id: 1, code: 'ECH-001', demandeTestId: 1, natureEchantillonId: 1, dateReception: '2026-08-06', statut: 'A analyser' },
    { id: 2, code: 'ECH-002', demandeTestId: 2, natureEchantillonId: 1, dateReception: '2026-08-07', statut: 'Analyse en cours' },
    { id: 3, code: 'ECH-003', demandeTestId: 3, natureEchantillonId: 2, dateReception: '2026-08-08', statut: 'Analyse terminee' }
  ],
  analyses: [
    { id: 1, echantillonId: 3, typeAnalyseId: 3, technicianId: 2, dateAnalyse: '2026-08-09' },
    { id: 2, echantillonId: 2, typeAnalyseId: 2, technicianId: 2, dateAnalyse: '2026-08-10' }
  ],
  resultats: [
    { id: 1, analyseId: 1, valeur: 1.1, conforme: true, commentaireNutrition: '' },
    { id: 2, analyseId: 2, valeur: 7.6, conforme: false, commentaireNutrition: 'Valeur elevee, verifier formulation minerale.' }
  ],
  decisionsQualite: [
    { id: 1, demandeTestId: 2, decision: 'Recyclage', motif: 'Depassement cendres sur lot premix', qualityManagerId: 3, dateDecision: '2026-08-11' }
  ],
  rapports: [
    { id: 1, demandeTestId: 3, reference: 'RPT-2026-003', dateGeneration: '2026-08-10', disponible: true },
    { id: 2, demandeTestId: 2, reference: 'RPT-2026-002', dateGeneration: '2026-08-11', disponible: true }
  ]
};
