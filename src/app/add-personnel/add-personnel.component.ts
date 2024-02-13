import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { PersonnelService } from '../services/personnel.service';
import { Fonction } from '../models/fonction.model';
import { FonctionService } from '../services/fonction.service';

@Component({
  selector: 'app-add-personnel',
  templateUrl: './add-personnel.component.html',
  styleUrls: ['./add-personnel.component.scss']
})
export class AddPersonnelComponent implements OnInit {

  personnelForm!:FormGroup;
  emailRegex!:RegExp;
  fonctions!:Fonction[];
  constructor(private formBuilder:FormBuilder,
    private personnelService:PersonnelService,
    private fonctionService:FonctionService) { }

  ngOnInit(): void {
    this.personnelForm = this.formBuilder.group({
      nom:[null,[Validators.required]],
      prenom:[null,[Validators.required]],
      dateNaissance:[null],
      matricule:[null],
      fonction_id:[null],
      // email:[null,[Validators.required,Validators.pattern(this.emailRegex) ]],
      email:[null,[Validators.required,Validators.email]],

    });
    this.fonctions = this.fonctionService.getAllFonction();
    console.log(this.fonctions);

  }
  onSubmitForm():void {
    console.log(this.personnelForm.value)
    // this.personnelService.savePersonnel(this.personnelForm.value);
    // this.personnelForm.reset();

  }

}
