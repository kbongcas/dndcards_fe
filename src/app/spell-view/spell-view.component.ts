import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatDialogConfig } from '@angular/material/dialog';
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
  dialog: MatDialog;
  constructor(
    dialog: MatDialog,
    dialogRef: MatDialogRef<SpellViewComponent>,
    @Inject(MAT_DIALOG_DATA) spell: Spell) {
    this.dialogRef = dialogRef;
    this.spell = spell;
    this.dialog = dialog;
  }
  ngOnInit() {
  }

  close() {
  this.dialogRef.close();
  }

  openEditSpellDialog(spell: Spell): void{
      this.spell = spell;
      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;

      dialogConfig.data =this.spell;
      const dialogRef = this.dialog.open(SpellFormComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(
      spell => this.dialogRef.close(this.spell))
  }
}
