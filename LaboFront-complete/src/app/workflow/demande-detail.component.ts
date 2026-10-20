import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EntityRegistryService } from '../core/services/entity-registry.service';

@Component({ selector: 'app-demande-detail', templateUrl: './demande-detail.component.html', styleUrls: ['./demande-detail.component.scss'], standalone: false })
export class DemandeDetailComponent implements OnInit {
  demande: any;
  constructor(public route: ActivatedRoute, public registry: EntityRegistryService) {}
  ngOnInit(): void { this.demande = this.registry.demandesTest.snapshot().find((item) => item.id === Number(this.route.snapshot.paramMap.get('id'))); }
  get samples() { return this.registry.echantillons.snapshot().filter((item) => item.demandeTestId === this.demande?.id); }
  label(key: 'clients' | 'articles' | 'usines' | 'naturesEchantillon', id: number, prop: string) { return (this.registry.getOptions(key).find((item: any) => item.id === id) || {})[prop] || '-'; }
}
