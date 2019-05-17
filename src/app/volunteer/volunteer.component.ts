import { Component, OnInit } from '@angular/core';
import { Category } from '../model/category';
import { Volunteer } from '../model/volunteer';
import { VolunteerService } from '../services/volunteer-service';
import { ActivatedRoute } from '@angular/router';
import { map, flatMap } from 'rxjs/operators'
import { empty } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit {

  categoriesList: Category[];
  volunteer: Volunteer = new Volunteer();

  dropdownSettings = {
    singleSelection: false,
    idField: 'id',
    textField: 'name',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    allowSearchFilter: true
  };

  constructor(
    private volunteerService: VolunteerService,
    private translate: TranslateService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.categoriesList = [
      {
        id: 1,
        name: 'Western'
      },
      {
        id: 2,
        name: 'Scifi'
      },
      {
        id: 3,
        name: 'Horror'
      },
      {
        id: 4,
        name: 'Drama'
      }
    ];

    this.route.paramMap.pipe(
      flatMap(params => {
        const id = +params.get('id');
        if (id) {
          return this.volunteerService.findOne(id);
        } else {
          return empty();
        }
      }),
    ).subscribe(volunteer => {
      this.volunteer = volunteer;
    });
  }

  save() {
    console.log(this.volunteer);
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
    return this.volunteer.name && this.volunteer.name.length;
  }

}
