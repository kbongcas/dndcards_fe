import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
    });
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }

}
