import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category-service';
import { TranslateService } from '@ngx-translate/core';

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
      this.categories.push({ id: ++this.nextId, name: this.newName })
    }
  }

  delete(id) {
    this.translate.get('MAIN.CONFIRMATION')
      .subscribe((text: string) => {
        if (confirm(text)) {
          this.categories = this.categories.filter(c => c.id != id);
        }
      });
  }

}
