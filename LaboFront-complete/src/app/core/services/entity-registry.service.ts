import { Injectable } from '@angular/core';
import { AnalyseService } from './analyse.service';
import { ArticleService } from './article.service';
import { ClientService } from './client.service';
import { ContactClientService } from './contact-client.service';
import { DecisionQualiteService } from './decision-qualite.service';
import { DemandeTestService } from './demande-test.service';
import { EchantillonService } from './echantillon.service';
import { FamilleService } from './famille.service';
import { FourchetteService } from './fourchette.service';
import { NatureEchantillonService } from './nature-echantillon.service';
import { NormeService } from './norme.service';
import { ReferenceMethodeService } from './reference-methode.service';
import { RapportService } from './rapport.service';
import { ResultatService } from './resultat.service';
import { SousFamilleService } from './sous-famille.service';
import { SpeculationService } from './speculation.service';
import { TypeAnalyseService } from './type-analyse.service';
import { UniteService } from './unite.service';
import { UsineService } from './usine.service';
import { UserService } from './user.service';

@Injectable({ providedIn: 'root' })
export class EntityRegistryService {
  constructor(
    public familles: FamilleService,
    public sousFamilles: SousFamilleService,
    public speculations: SpeculationService,
    public articles: ArticleService,
    public naturesEchantillon: NatureEchantillonService,
    public unites: UniteService,
    public referencesMethodes: ReferenceMethodeService,
    public normes: NormeService,
    public typesAnalyse: TypeAnalyseService,
    public fourchettes: FourchetteService,
    public clients: ClientService,
    public contactsClient: ContactClientService,
    public usines: UsineService,
    public users: UserService,
    public demandesTest: DemandeTestService,
    public echantillons: EchantillonService,
    public analyses: AnalyseService,
    public resultats: ResultatService,
    public decisionsQualite: DecisionQualiteService,
    public rapports: RapportService,
  ) {}

  getService(key: string): any { return (this as any)[key]; }
  getOptions(key: string): any[] { return this.getService(key)?.snapshot?.() ?? []; }
}
