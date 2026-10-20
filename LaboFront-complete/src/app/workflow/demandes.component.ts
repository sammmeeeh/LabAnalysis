import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { EntityRegistryService } from '../core/services/entity-registry.service';

@Component({ selector: 'app-demandes', templateUrl: './demandes.component.html', styleUrls: ['./demandes.component.scss'], standalone: false })
export class DemandesComponent implements OnInit {
  mode = 'list';
  statut = 'Tous';
  constructor(public route: ActivatedRoute, public auth: AuthService, public registry: EntityRegistryService, private router: Router) {}
  ngOnInit(): void { this.mode = this.route.snapshot.data['mode'] || 'list'; }
  get demandes() { const all = this.registry.demandesTest.snapshot().filter((item) => this.mode === 'validation' ? true : item.clientId === (this.auth.currentUser()?.clientId || item.clientId)); return all.filter((item) => this.statut === 'Tous' ? true : item.statut === this.statut); }
  clientName(id: number) { return this.registry.clients.snapshot().find((item) => item.id === id)?.raisonSociale || '-'; }
  articleName(id: number) { return this.registry.articles.snapshot().find((item) => item.id === id)?.designation || '-'; }
  open(id: number) { this.router.navigate(['/app/workflow/demandes', id]); }
  updateStatus(id: number, statut: 'Validee' | 'Refusee') { this.registry.demandesTest.update(id, { statut }).subscribe(); }
}
