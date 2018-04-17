import { Component, OnInit } from '@angular/core';
import { SpellService } from '../spell-service/spell.service';
import { Spell } from '../spell-service/spell';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { SpellFormComponent } from '../spell-form/spell-form.component';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-spells',
    templateUrl: './spells.component.html',
    styleUrls: ['./spells.component.scss']
})
export class SpellsComponent implements OnInit {

    private spells: Spell[];
    private dialog: MatDialog;
    private spell: Spell;
    private spellService: SpellService;
    constructor(spellService: SpellService, dialog: MatDialog) {
        this.spellService = spellService;
        spellService.getAllSpells().subscribe(spells => this.spells = spells);
        this.dialog = dialog;
    }

    openDialog(): void{

        this.spell = new Spell();
        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;

        dialogConfig.data =this.spell;
        const dialogRef = this.dialog.open(SpellFormComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(
        spell => this.createNewSpell(spell).subscribe( s => console.log(s))
    );   
    }
     ngOnInit() {
     }

    createNewSpell( spell: Spell): Observable<Spell> {
        return this.spellService.createNewSpell(spell);
    }
}
