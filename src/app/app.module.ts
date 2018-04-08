import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { SpellsComponent } from './spells/spells.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';


@NgModule({
    declarations: [
        AppComponent,
        SpellsComponent,
        HeaderComponent,
        SideNavComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
