import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { EntityRegistryService } from '../core/services/entity-registry.service';

@Component({ selector: 'app-rapports', templateUrl: './rapports.component.html', styleUrls: ['./rapports.component.scss'], standalone: false })
export class RapportsComponent {
  constructor(public auth: AuthService, public registry: EntityRegistryService) {}
  get items() {
    return this.registry.rapports.snapshot().filter((item) => {
      if (this.auth.currentRole() === 'Client') {
        const demande = this.registry.demandesTest.snapshot().find((entry) => entry.id === item.demandeTestId);
        return demande?.clientId === this.auth.currentUser()?.clientId;
      }
      return true;
    });
  }
  download(reference: string): void {
    if (typeof document === 'undefined') { return; }
    const blob = new Blob([`Rapport simule: ${reference}`], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a'); link.href = url; link.download = `${reference}.txt`; link.click(); URL.revokeObjectURL(url);
  }
}
