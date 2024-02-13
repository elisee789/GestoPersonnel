import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Personnel } from '../models/personnel.model';
import { PersonnelService } from '../services/personnel.service';

@Component({
  selector: 'app-list-personnel',
  templateUrl: './list-personnel.component.html',
  styleUrls: ['./list-personnel.component.scss']
})
export class ListPersonnelComponent implements OnInit {


  // personnelList$!: Observable<Personnel[]>;
  personnels!: Personnel[];


  constructor(private personnelService:PersonnelService) { }

  ngOnInit(): void {
    this.personnels = this.personnelService.getAllPersonnel();
  }

}
