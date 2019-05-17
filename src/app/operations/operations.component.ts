import { Component, OnInit } from '@angular/core';
import { Operation } from '../model/operation';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {
  operations: Operation[]

  displayedColumns = ["id", "name", "location"];

  categories = [
    {
      id: 1,
      name: 'Western'
    },
    {
      id: 1,
      name: 'Scifi'
    }
  ];

  dropdownSettings = {
    singleSelection: false,
    idField: 'id',
    textField: 'name',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };

  selected = [];

  constructor() { }

  ngOnInit() {
    this.operations = [
      {
        id: 1,
        name: "Operation Dragon",
        location: "Scheleppe"
      },
      {
        id: 2,
        name: "Kill Jamie Oliver",
        location: "Global"
      }
    ];
  }

  onSelect() {
    console.log(this.selected);
  }

  test() {
    console.log(this.selected);
  }
}
