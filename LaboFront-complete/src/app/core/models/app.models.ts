export type Role = 'Client' | 'Administrator' | 'Technician' | 'QualityManager' | 'NutritionManager';
export type DemandeStatut = 'Brouillon' | 'Soumise' | 'Validee' | 'Refusee' | 'Cloturee';
export type DecisionType = 'Deblocage' | 'Recyclage';

export interface BaseEntity { id: number; }
export interface AppUser extends BaseEntity { nom: string; email: string; motDePasse: string; role: Role; clientId?: number; }
export interface Famille extends BaseEntity { nom: string; description: string; }
export interface SousFamille extends BaseEntity { nom: string; description: string; familleId: number; }
export interface Speculation extends BaseEntity { nom: string; origine: string; }
export interface Article extends BaseEntity { code: string; designation: string; sousFamilleId: number; speculationId: number; }
export interface NatureEchantillon extends BaseEntity { libelle: string; description: string; }
export interface Unite extends BaseEntity { code: string; libelle: string; }
export interface ReferenceMethode extends BaseEntity { code: string; libelle: string; }
export interface Norme extends BaseEntity { code: string; libelle: string; }
export interface TypeAnalyse extends BaseEntity { libelle: string; referenceMethodeId: number; normeId: number; uniteId: number; }
export interface Fourchette extends BaseEntity { articleId: number; typeAnalyseId: number; valeurMin: number; valeurMax: number; }
export interface ClientEntity extends BaseEntity { raisonSociale: string; code: string; secteur: string; }
export interface ContactClient extends BaseEntity { clientId: number; nom: string; email: string; telephone: string; }
export interface Usine extends BaseEntity { clientId: number; nom: string; ville: string; pays: string; }
export interface DemandeTest extends BaseEntity { numero: string; clientId: number; usineId: number; articleId: number; natureEchantillonId: number; dateDemande: string; statut: DemandeStatut; commentaire: string; echantillonInfo: string; }
export interface Echantillon extends BaseEntity { code: string; demandeTestId: number; natureEchantillonId: number; dateReception: string; statut: 'A analyser' | 'Analyse en cours' | 'Analyse terminee'; }
export interface Analyse extends BaseEntity { echantillonId: number; typeAnalyseId: number; technicianId: number; dateAnalyse: string; }
export interface Resultat extends BaseEntity { analyseId: number; valeur: number; conforme: boolean; commentaireNutrition: string; }
export interface DecisionQualite extends BaseEntity { demandeTestId: number; decision: DecisionType; motif: string; qualityManagerId: number; dateDecision: string; }
export interface Rapport extends BaseEntity { demandeTestId: number; reference: string; dateGeneration: string; disponible: boolean; }

export interface FieldOptionConfig { key: string; label: string; }
export interface FieldConfig {
  key: string;
  label: string;
  type?: 'text' | 'textarea' | 'number' | 'date' | 'select';
  required?: boolean;
  optionKey?: string;
  optionLabel?: string;
  readonly?: boolean;
}
export interface ManagementPageConfig {
  entityKey: string;
  title: string;
  subtitle: string;
  fields: FieldConfig[];
}
