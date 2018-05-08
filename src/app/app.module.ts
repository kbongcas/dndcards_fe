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
import { SpellFormComponent } from './spell-form/spell-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SideNavProfileComponent } from './side-nav-profile/side-nav-profile.component';
import { SpellViewComponent } from './spell-view/spell-view.component';
import { ItemsComponent } from './items/items.component';
import { ItemService } from './item-service/item.service';

import { ItemFormComponent } from './item-form/item-form.component';
import { ItemViewComponent } from './item-view/item-view.component';

@NgModule({
    declarations: [
        AppComponent,
        SpellsComponent,
        HeaderComponent,
        SideNavComponent,
        HomeComponent,
        CardsComponent,
        SpellFormComponent,
        SideNavProfileComponent,
        SpellViewComponent,
        ItemsComponent,
        ItemViewComponent,
        ItemFormComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        HttpClientModule,
        KeycloakAngularModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        SpellService,
        ItemService,
        {
            provide: APP_INITIALIZER,
            useFactory: initializer,
            multi: true,
            deps: [KeycloakService]
        }
    ],
    bootstrap: [AppComponent],
    entryComponents: [
        SpellFormComponent, 
        SpellViewComponent,
        ItemViewComponent,
        ItemFormComponent
    ]
})
export class AppModule { }
