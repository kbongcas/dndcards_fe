import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Spell } from './spell';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SpellService {

    private url: string  = 'http://localhost:8080/api/v1/Spell';
    private urlAdd: string  = 'http://localhost:8080/api/v1/Spell/create';
    spells: Spell[];
    private httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;

    }

    getAllSpells(): Observable<Spell[]> {
        return this.httpClient.get<Spell[]>(this.url);
    }
    getSpellById(spellId: Number): Observable<Spell> {
        return this.httpClient.get<Spell>(`${this.url}/${spellId}`);
    }
    createNewSpell(spell: Spell): Observable<Spell> {
        return this.httpClient.post<Spell>(this.urlAdd,spell);
    }
    updateSpell(spellId: Number, spell: Spell): Observable<Spell> {
        return this.httpClient.put<Spell>(`${this.url}/${spellId}`, spell);
    }
    deleteSpell(spellId: Number): Observable<Spell> {
        return this.httpClient.delete<Spell>(`${this.url}/${spellId}`);
    }
}
