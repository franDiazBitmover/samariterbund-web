import { Component, OnInit } from '@angular/core';
import { OperationService } from '../services/operation-service';
import { ActivatedRoute } from '@angular/router';
import { map, flatMap } from 'rxjs/operators'
import { empty } from 'rxjs';
import { Operation } from '../model/operation';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  operation = new Operation();

  constructor(private operationService: OperationService, private route: ActivatedRoute) { }

  ngOnInit() {
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
}
