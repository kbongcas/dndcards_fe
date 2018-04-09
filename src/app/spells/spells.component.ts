import { Component, OnInit } from '@angular/core';
import { SpellService } from '../spell-service/spell.service';
import { Spell } from '../spell-service/spell';

@Component({
    selector: 'app-spells',
    templateUrl: './spells.component.html',
    styleUrls: ['./spells.component.scss']
})
export class SpellsComponent implements OnInit {

    private spells: Spell[];
    constructor(spellService: SpellService) {
        spellService.getAllSpells().subscribe(spells => this.spells = spells);
    }

     ngOnInit() {
     }

}
