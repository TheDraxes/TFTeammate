import { Component, OnInit } from '@angular/core';
import { Champ } from './champ';
import { ChampServiceService } from '../champ-service.service';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit {

  champs: Champ[];

  constructor(private champService: ChampServiceService) { }

  ngOnInit() {
    this.getChamps();
  }

  getChamps() {
    this.champService.getChamps().subscribe(champs => this.champs = champs);
  }

  getRowNumber(): number {
    return Math.ceil(this.champs.length / 3);
  }

}
