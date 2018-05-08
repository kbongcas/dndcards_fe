import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item-service/item.service';
import { Item } from '../item-service/item';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { ItemFormComponent } from '../item-form/item-form.component';
import { Observable } from 'rxjs/Observable';
import { ItemViewComponent } from '../item-view/item-view.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app-items',
    templateUrl: './items.component.html',
    styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

    private items: Item[];
    private dialog: MatDialog;
    private item: Item;
    private itemService: ItemService;
    private router: Router;

    constructor(itemService: ItemService, dialog: MatDialog, router: Router) {
        this.itemService = itemService;
        this.itemService.getAllItems().subscribe(items => this.items = items);
        this.dialog = dialog;
        this.router = router;
    }

    openCreateItemDialog(): void{
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        const dialogRef = this.dialog.open(ItemFormComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(
            data => this.itemService.getAllItems().subscribe(items => this.items = items)
        );
    }
    /**
    openEditItemDialog(item: Item): void{
        this.item = item;
        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;

        dialogConfig.data =this.item;
        const dialogRef = this.dialog.open(ItemFormComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(
        item => this.createNewItem(item).subscribe( s => console.log(s))
    );   
    **/
    openViewItemDialog(item: Item): void{
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.data = item;
        const dialogRef = this.dialog.open(ItemViewComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(
            item => {
                if (item){
                    this.itemService.getAllItems().subscribe(items => this.items = items)
                }
            }
        )
    }
 
     ngOnInit() {
     }

     /**
    createNewItem( item: Item): Observable<Item> {
        return this.itemService.createNewItem(item);
    }
    **/

    viewItem(item: Item): Item {
        return this.item;
    }
}
