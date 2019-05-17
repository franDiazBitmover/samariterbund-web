import { Component, OnInit } from '@angular/core';
import { VolunteerService } from '../services/volunteer-service';

@Component({
  selector: 'app-volunteers',
  templateUrl: './volunteers.component.html',
  styleUrls: ['./volunteers.component.css']
})
export class VolunteersComponent implements OnInit {

  volunteers = [];

  constructor(private volunteerService: VolunteerService) { }

  ngOnInit() {
    this.volunteerService.findAll()
      .subscribe(volunteers => {
        this.volunteers = volunteers;
      });
  }
}
