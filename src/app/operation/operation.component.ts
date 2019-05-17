import { Component, OnInit } from '@angular/core';
import { OperationService } from '../services/operation-service';
import { ActivatedRoute } from '@angular/router';
import { map, flatMap } from 'rxjs/operators'
import { empty } from 'rxjs';
import { Operation } from '../model/operation';
import { Category } from '../model/category';
import { CategoryService } from '../services/category-service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  operation = new Operation();
  categoriesList: Category[] = [];

  dropdownSettings = {
    singleSelection: false,
    idField: 'id',
    textField: 'name',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    allowSearchFilter: true
  };

  constructor(
    private operationService: OperationService,
    private categoryService: CategoryService,
    private translate: TranslateService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.categoryService.findAll()
      .subscribe(categories => {
        this.categoriesList = categories;
      });

    this.route.paramMap.pipe(
      flatMap(params => {
        const id = +params.get('id');
        if (id) {
          return this.operationService.findOne(id);
        } else {
          return empty();
        }
      }),
    ).subscribe(operation => {
      this.operation = operation;
    });
  }

  save() {
    console.log(this.operation);
  }

  delete(id) {
    this.translate.get('MAIN.CONFIRMATION')
      .subscribe((text: string) => {
        if (confirm(text)) {
          console.log(`deleting id ${id}`)
        }
      });
  }

  isFormValid() {
    return this.operation.name && this.operation.name.length
      && this.operation.description && this.operation.description.length
      && this.operation.categories && this.operation.categories.length;
  }
}
