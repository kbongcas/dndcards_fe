import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Spell } from './spell';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SpellService {

    private url: string  = 'http://localhost:8080/api/v1/Spell';
    spells: Spell[];
    private httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;

    }

    getAllSpells(): Observable<Spell[]> {
        return this.httpClient.get<Spell[]>(this.url);
    }
}
