import { Component } from '@angular/core';

@Component({ selector: 'app-reference-home', templateUrl: './reference-home.component.html', styleUrls: ['./reference-home.component.scss'], standalone: false })
export class ReferenceHomeComponent {
  links = [
    ['Familles','/app/referentiel/familles'],['SousFamilles','/app/referentiel/sous-familles'],['Speculations','/app/referentiel/speculations'],['Articles','/app/referentiel/articles'],['NaturesEchantillon','/app/referentiel/natures-echantillon'],['Unites','/app/referentiel/unites'],['ReferencesMethodes','/app/referentiel/references-methodes'],['Normes','/app/referentiel/normes'],['TypesAnalyse','/app/referentiel/types-analyse'],['Fourchettes','/app/referentiel/fourchettes']
  ];
}
