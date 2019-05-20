import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category-service';
import { TranslateService } from '@ngx-translate/core';
import { flatMap } from 'rxjs/operators';
import { empty } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories = [];

  newName: string;
  nextId = 0;

  constructor(private categoryService: CategoryService, private translate: TranslateService) { }

  ngOnInit() {
    this.categoryService.findAll()
      .subscribe(categories => {
        this.categories = categories;
      });
  }

  addNew() {
    if (this.newName) {
      this.categoryService.save({ name: this.newName })
        .subscribe(() => { },
          err => console.error(err));
    }
  }

  delete(id) {
    this.translate.get('MAIN.CONFIRMATION').pipe(
      flatMap(text => {
        if (confirm(text)) {
          return this.categoryService.delete(id)
        } else {
          return empty()
        }
      })
    ).subscribe(
      () => { },
      err => console.error(err)
    );
  }

}
