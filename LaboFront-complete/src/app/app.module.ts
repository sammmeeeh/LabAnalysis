import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { App } from './app';
import { CoreModule } from './core/core-module';

@NgModule({ declarations: [App], imports: [BrowserModule, FormsModule, HttpClientModule, CoreModule, AppRoutingModule], providers: [provideBrowserGlobalErrorListeners(), provideClientHydration()], bootstrap: [App] })
export class AppModule {}
