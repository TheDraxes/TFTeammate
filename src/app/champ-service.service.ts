import { Injectable, OnInit } from '@angular/core';
import { CHAMPS } from "./mock-heroes";
import { of, Observable } from 'rxjs';
import { Champ } from './champions/champ';

@Injectable({
  providedIn: 'root'
})
export class ChampServiceService {

  champs: Champ;

  constructor() { }

  getChamps(): Observable<Champ[]> {
    return of(CHAMPS);
  }
}
