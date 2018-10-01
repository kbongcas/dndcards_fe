import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SpellsComponent } from './spells/spells.component';
import { CardsComponent  } from './cards/cards.component';
import { AppComponent } from './app.component';

const routes: Routes = [
            {
                path: 'home',
                component: HomeComponent,
            },
            {
               path: '',
               redirectTo: 'home',
               pathMatch: 'full',
            },
            {
                path: 'cards',
                component: CardsComponent,
            }
];


@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {
}
