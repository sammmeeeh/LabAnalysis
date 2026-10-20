import { Component, Input } from '@angular/core';

@Component({ selector: 'app-stat-card', templateUrl: './stat-card.component.html', styleUrls: ['./stat-card.component.scss'], standalone: false })
export class StatCardComponent { @Input() label = ''; @Input() value = ''; @Input() tone: 'primary' | 'success' | 'warning' | 'danger' = 'primary'; }
