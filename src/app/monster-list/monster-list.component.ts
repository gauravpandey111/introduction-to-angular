import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MonsterLocation} from "../monster-location";

@Component({
  selector: 'app-monster-list',
  templateUrl: './monster-list.component.html',
  styleUrls: ['./monster-list.component.css']
})
export class MonsterListComponent implements OnInit {

  @Input() monsterLocationListVariable: MonsterLocation[] = [];
  monsterLocationsFilteredResults: MonsterLocation[] = [];
  @Output() selectedMonsterLocationEvent = new EventEmitter<MonsterLocation>()

  constructor() { }

  ngOnInit(): void {
  }

  searchMonsterLocations(searchText: string) {
    if (!searchText) return;

    this.monsterLocationsFilteredResults = this.monsterLocationListVariable.filter(s => s.name.toLowerCase().includes(searchText.toLowerCase())
        || s.city.toLowerCase().includes(searchText.toLowerCase()));
    console.log("Looking for: " + searchText);
  }

  selectedMonsterLocationFunction(clickedMonsterLocation: MonsterLocation) {
    this.selectedMonsterLocationEvent.emit(clickedMonsterLocation);
  }
}
