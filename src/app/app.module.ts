import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { SpellsComponent } from './spells/spells.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { SpellService } from './spell-service/spell.service';
import { HttpClientModule } from '@angular/common/http';
/*
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './keycloak-service/keycloak.http';
*/
import { APP_INITIALIZER } from '@angular/core';
import { KeycloakService, KeycloakAngularModule } from 'keycloak-angular';
import { initializer } from './utils/app-init';

@NgModule({
    declarations: [
        AppComponent,
        SpellsComponent,
        HeaderComponent,
        SideNavComponent,
        HomeComponent,
        CardsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        HttpClientModule,
        KeycloakAngularModule
    ],
    providers: [SpellService,
        {
            provide: APP_INITIALIZER,
            useFactory: initializer,
            multi: true,
            deps: [KeycloakService]
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
