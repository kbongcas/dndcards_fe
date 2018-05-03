import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Spell } from '../spell-service/spell';
import {FormControl, Validators, FormBuilder} from '@angular/forms';
import { SpellFormComponent } from '../spell-form/spell-form.component';

@Component({
  selector: 'app-spell-view',
  templateUrl: './spell-view.component.html',
  styleUrls: ['./spell-view.component.scss']
})
export class SpellViewComponent implements OnInit {

  dialogRef: MatDialogRef<SpellViewComponent>;
  spell: Spell;

  constructor(
    dialogRef: MatDialogRef<SpellViewComponent>,
    @Inject(MAT_DIALOG_DATA) spell: Spell) {
    this.dialogRef = dialogRef;
    this.spell = spell;
  }
  ngOnInit() {
  }

  close() {
  this.dialogRef.close();
  }
}
