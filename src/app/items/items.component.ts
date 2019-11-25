import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { Items } from "../data/mockItems";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  Items: Item[] = [];
  anz;

  constructor() { }

  ngOnInit() {
    this.Items = Items;
    this.anz = 0;
  }

}
