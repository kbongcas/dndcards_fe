import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Item } from '../item-service/item';
import {FormControl, Validators, FormBuilder} from '@angular/forms';
import { ItemFormComponent } from '../item-form/item-form.component';
import { ItemService } from '../item-service/item.service';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.scss']
})
export class ItemViewComponent implements OnInit {

  dialogRef: MatDialogRef<ItemViewComponent>;
  item: Item;
  dialog: MatDialog;
  itemService: ItemService;
  constructor(
    dialog: MatDialog,
    dialogRef: MatDialogRef<ItemViewComponent>,
    @Inject(MAT_DIALOG_DATA) item: Item,
    itemService: ItemService) {
    this.dialogRef = dialogRef;
    this.item = item;
    this.dialog = dialog;
    this.itemService = itemService;
  }
  ngOnInit() {
  }

  close() {
  this.dialogRef.close();
  }

  openEditItemDialog(item: Item): void{

      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.data =this.item.itemId;
      const dialogRef = this.dialog.open(ItemFormComponent, dialogConfig)
      dialogRef.afterClosed().subscribe(
        item => this.dialogRef.close(item));
  }

  deleteItem(item: Item): void{
      this.itemService.deleteItem(item.itemId).subscribe(
        item => this.dialogRef.close(item)
      );
  }
}

