import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { EntityRegistryService } from '../core/services/entity-registry.service';

@Component({ selector: 'app-result-entry', templateUrl: './result-entry.component.html', styleUrls: ['./result-entry.component.scss'], standalone: false })
export class ResultEntryComponent implements OnInit {
  model: any = { echantillonId: undefined, typeAnalyseId: undefined, valeur: undefined };
  message = '';
  constructor(public route: ActivatedRoute, public registry: EntityRegistryService, private auth: AuthService, private router: Router) {}
  ngOnInit(): void { this.model.echantillonId = Number(this.route.snapshot.paramMap.get('sampleId')) || undefined; }
  get currentRange() { const echantillon = this.registry.echantillons.snapshot().find((item) => item.id === Number(this.model.echantillonId)); const demande = this.registry.demandesTest.snapshot().find((item) => item.id === echantillon?.demandeTestId); return demande && this.model.typeAnalyseId ? this.registry.fourchettes.findByArticleAndTypeAnalyse(demande.articleId, Number(this.model.typeAnalyseId)) : undefined; }
  get conforme() { if (this.model.valeur === undefined || !this.currentRange) { return null; } return Number(this.model.valeur) >= this.currentRange.valeurMin && Number(this.model.valeur) <= this.currentRange.valeurMax; }
  save(): void { const technicianId = this.auth.currentUser()?.id || 2; this.registry.analyses.create({ echantillonId: Number(this.model.echantillonId), typeAnalyseId: Number(this.model.typeAnalyseId), technicianId, dateAnalyse: '2026-08-12' }).subscribe((analyse: any) => { this.registry.resultats.create({ analyseId: analyse.id, valeur: Number(this.model.valeur), conforme: this.conforme ?? true, commentaireNutrition: '' }).subscribe(() => { this.registry.echantillons.update(Number(this.model.echantillonId), { statut: 'Analyse terminee' }).subscribe(); this.router.navigate(['/app/workflow/echantillons']); }); }); }
}
