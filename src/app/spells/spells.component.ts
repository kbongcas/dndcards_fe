import { Component, OnInit } from '@angular/core';
import { SpellService } from '../spell-service/spell.service';
import { Spell } from '../spell-service/spell';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { SpellFormComponent } from '../spell-form/spell-form.component';

@Component({
    selector: 'app-spells',
    templateUrl: './spells.component.html',
    styleUrls: ['./spells.component.scss']
})
export class SpellsComponent implements OnInit {

    private spells: Spell[];
    private dialog: MatDialog;
    private spell: Spell;
    constructor(spellService: SpellService, dialog: MatDialog) {
        spellService.getAllSpells().subscribe(spells => this.spells = spells);
        this.dialog = dialog;
    }

    openDialog(): void{

        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;

        dialogConfig.data = {
            spell: this.spell
        };
        const dialogRef = this.dialog.open(SpellFormComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(
        spell => console.log(spell)
    );   
    }
     ngOnInit() {
     }

}
