import { Component, OnInit } from '@angular/core';
import { Operation } from '../model/operation';
import { OperationService } from '../services/operation-service';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {
  operations: Operation[]

  constructor(private operationService: OperationService) { }

  ngOnInit() {
    this.operationService.findAll()
    .subscribe(operations => {
      this.operations = operations;
    });
  }
}
