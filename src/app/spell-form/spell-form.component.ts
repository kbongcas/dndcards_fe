import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Spell } from '../spell-service/spell';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-spell-form',
  templateUrl: './spell-form.component.html',
  styleUrls: ['./spell-form.component.scss']
})
export class SpellFormComponent implements OnInit {

  form: FormGroup;
  description: string;
  fb: FormBuilder;
  dialogRef: MatDialogRef<SpellFormComponent>;
  spell: Spell;

  constructor(
    fb: FormBuilder,
    dialogRef: MatDialogRef<SpellFormComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

    this.fb = fb;
    this.dialogRef = dialogRef;
    this.description = data.description;
  }
  ngOnInit() {
    this.form = this.fb.group({
      description: [this.description, []],
      spellId: ['3231',[]],
      spellName: ['',[]],
      isRitual: ['',[]],
      ritualName: ['',[]],
      level: ['',[]],
      castingTime: ['',[]],
      range: ['',[]],
      duration: ['',[]],
      components: ['',[]],
      materials: ['',[]],
      spellDesc: ['',[]],
      higherLevelDescOne: ['',[]],
      higherLevelDescTwo:  ['',[]]
    });
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }

}
