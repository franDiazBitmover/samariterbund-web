import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories = [];

  newName: string;
  nextId = 0;

  constructor() { }

  ngOnInit() {
    this.categories = [];
  }

  addNew() {
    if (this.newName) {
      this.categories.push({id : ++ this.nextId, name: this.newName})
    }
  }

}
