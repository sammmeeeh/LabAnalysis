import { Component } from '@angular/core';

@Component({ selector: 'app-clients-home', templateUrl: './clients-home.component.html', styleUrls: ['./clients-home.component.scss'], standalone: false })
export class ClientsHomeComponent {
  links = [['Clients','/app/gestion-clients/clients'],['ContactsClient','/app/gestion-clients/contacts-client'],['Usines','/app/gestion-clients/usines']];
}
