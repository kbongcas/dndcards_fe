import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatCardModule,
        MatGridListModule,
        MatToolbarModule,
        MatSidenavModule,
        MatMenuModule,
        MatIconModule,
        MatTabsModule,
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatCardModule,
        MatGridListModule,
        MatToolbarModule,
        MatSidenavModule,
        MatMenuModule,
        MatIconModule,
        MatTabsModule,
    ],
})
export class MaterialModule { }

