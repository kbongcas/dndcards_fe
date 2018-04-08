import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-spells',
    templateUrl: './spells.component.html',
    styleUrls: ['./spells.component.scss']
})
export class SpellsComponent implements OnInit {

    private spells: object[];

    constructor() {
        this.spells = [
            {
                'spellname': 'Acid Splash',
                'duration': 'Instananous'
            },
            {
                'spellname': 'SSSSSS',
                'duration': 'Instananouiss'
            },
            {
                'spellname': 'cccccc',
                'duration': 'Instananouissddd'
            },
            {
                'spellname': 'cccccc',
                'duration': 'Instananouissddd'
            }

        ];
    }

     ngOnInit() {
     }

}
