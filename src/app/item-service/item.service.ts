import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from './item';
import { Observable } from 'rxjs';

@Injectable()
export class ItemService {

    private url: string  = 'http://localhost:8080/api/v1/Item';
    private urlAdd: string  = 'http://localhost:8080/api/v1/Item/create';
    items: Item[];
    private httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;

    }

    getAllItems(): Observable<Item[]> {
        return this.httpClient.get<Item[]>(this.url);
    }
    getItemById(itemId: Number): Observable<Item> {
        return this.httpClient.get<Item>(`${this.url}/${itemId}`);
    }
    createNewItem(item: Item): Observable<Item> {
        return this.httpClient.post<Item>(this.urlAdd,item);
    }
    updateItem(itemId: Number, item: Item): Observable<Item> {
        return this.httpClient.put<Item>(`${this.url}/${itemId}`, item);
    }
    deleteItem(itemId: Number): Observable<Item> {
        return this.httpClient.delete<Item>(`${this.url}/${itemId}`);
    }
}