import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SpellsComponent } from './spells/spells.component';
import { CardsComponent  } from './cards/cards.component';
import { AppComponent } from './app.component';
import { AppAuthGuard } from './keycloak-service/keycloak.authguard';

const routes: Routes = [];

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: 'home',
                component: HomeComponent
            },
            {
               path: '',
               redirectTo: 'home',
               pathMatch: 'full'
            },
            {
                path: 'cards',
                component: CardsComponent,
                canActivate: [AppAuthGuard]
            }
        ])],
    exports: [RouterModule],
    providers: [AppAuthGuard]
})
export class AppRoutingModule {
}
