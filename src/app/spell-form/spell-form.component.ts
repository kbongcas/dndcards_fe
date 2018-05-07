import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Spell } from '../spell-service/spell';
import {FormControl, Validators} from '@angular/forms';
import { SpellService } from '../spell-service/spell.service';

@Component({
  selector: 'app-spell-form',
  templateUrl: './spell-form.component.html',
  styleUrls: ['./spell-form.component.scss']
})
export class SpellFormComponent implements OnInit {

  form: FormGroup;
  fb: FormBuilder;
  dialogRef: MatDialogRef<SpellFormComponent>;
  spell: Spell;
  spellId: Number;
  spellService: SpellService;
  isDisabled: boolean;

  constructor(
    fb: FormBuilder,
    dialogRef: MatDialogRef<SpellFormComponent>,
    @Inject(MAT_DIALOG_DATA) spellId: Number,
    spellService: SpellService) {

    this.spellService = spellService;
    this.spellId = spellId;

    if (spellId) {
      this.spellService.getSpellById(this.spellId).subscribe(
          spell => this.spell = spell,
       );
    } else {
        this.spell = new Spell();
    }
    this.fb = fb;
    this.dialogRef = dialogRef;
    this.isDisabled = false;
  }
  ngOnInit() {
    /*
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
    */
  }

  save() {
    this.isDisabled = true;
    if (this.spellId) {
      this.spellService.updatePost(this.spellId, this.spell)
          .subscribe(spell => this.dialogRef.close(spell));
    } else {
        this.spellService.createNewSpell(this.spell)
            .subscribe(spell => this.dialogRef.close());
    }
  }

  close() {
    this.dialogRef.close();
  }
}
