import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Item } from '../item-service/item';
import {FormControl, Validators} from '@angular/forms';
import { ItemService } from '../item-service/item.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {

  form: FormGroup;
  fb: FormBuilder;
  dialogRef: MatDialogRef<ItemFormComponent>;
  item: Item;
  itemId: Number;
  itemService: ItemService;
  isDisabled: boolean;
  isEditing: boolean;

  constructor(
    fb: FormBuilder,
    dialogRef: MatDialogRef<ItemFormComponent>,
    @Inject(MAT_DIALOG_DATA) itemId: Number,
    itemService: ItemService) {
    
    this.isEditing = false;
    this.itemService = itemService;
    this.itemId = itemId;

    if (itemId) {
      this.isEditing = true;
      this.itemService.getItemById(this.itemId).subscribe(
          item => this.item = item,
       );
    } else {
      this.item = new Item();
    }
    this.fb = fb;
    this.dialogRef = dialogRef;
    this.isDisabled = false;
  }
  ngOnInit() {
    /*
    this.form = this.fb.group({
      description: [this.description, []],
      itemId: ['3231',[]],
      itemName: ['',[]],
      isRitual: ['',[]],
      ritualName: ['',[]],
      level: ['',[]],
      castingTime: ['',[]],
      range: ['',[]],
      duration: ['',[]],
      components: ['',[]],
      materials: ['',[]],
      itemDesc: ['',[]],
      higherLevelDescOne: ['',[]],
      higherLevelDescTwo:  ['',[]]
    });
    */
  }

  save() {
    this.isDisabled = true;
    if (this.itemId) {
      this.itemService.updateItem(this.itemId, this.item)
          .subscribe(item => this.dialogRef.close(item));
    } else {
        this.itemService.createNewItem(this.item)
            .subscribe(item => this.dialogRef.close());
    }
  }

  close() {
    this.dialogRef.close();
  }
}