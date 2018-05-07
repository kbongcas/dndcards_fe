import { Component, OnInit } from '@angular/core';
import { SpellService } from '../spell-service/spell.service';
import { Spell } from '../spell-service/spell';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { SpellFormComponent } from '../spell-form/spell-form.component';
import { Observable } from 'rxjs/Observable';
import { SpellViewComponent } from '../spell-view/spell-view.component';
import { Router } from '@angular/router';

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
    private router: Router;

    constructor(spellService: SpellService, dialog: MatDialog, router: Router) {
        this.spellService = spellService;
        this.spellService.getAllSpells().subscribe(spells => this.spells = spells);
        this.dialog = dialog;
        this.router = router;
    }

    openCreateSpellDialog(): void{
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        const dialogRef = this.dialog.open(SpellFormComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(
            data => this.spellService.getAllSpells().subscribe(spells => this.spells = spells)
        );
    }
    /**
    openEditSpellDialog(spell: Spell): void{
        this.spell = spell;
        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;

        dialogConfig.data =this.spell;
        const dialogRef = this.dialog.open(SpellFormComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(
        spell => this.createNewSpell(spell).subscribe( s => console.log(s))
    );   
    **/
    openViewSpellDialog(spell: Spell): void{
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.data = spell;
        const dialogRef = this.dialog.open(SpellViewComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(
            spell => {
                if (spell){
                    this.spellService.getAllSpells().subscribe(spells => this.spells = spells)
                }
            }
        )
    }
 
     ngOnInit() {
     }

     /**
    createNewSpell( spell: Spell): Observable<Spell> {
        return this.spellService.createNewSpell(spell);
    }
    **/

    viewSpell(spell: Spell): Spell {
        return this.spell;
    }
}
