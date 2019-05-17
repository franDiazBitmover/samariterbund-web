import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category-service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories = [];

  newName: string;
  nextId = 0;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.findAll()
    .subscribe(categories => {
      this.categories = categories;
    });
  }

  addNew() {
    if (this.newName) {
      this.categories.push({id : ++ this.nextId, name: this.newName})
    }
  }

}
