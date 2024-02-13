import { Injectable } from "@angular/core";
import { Personnel } from "../models/personnel.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PersonnelService {

    personnels:Personnel[]=[];

    getAllPersonnel():Personnel[]{
        return this.personnels;
    }
    savePersonnel(personnelNew:Personnel):void{        
        //console.log(this.personnels.some(personnel =>personnel.matricule===personnelNew.matricule));
        if(this.personnels.some(personnel =>personnel.matricule===personnelNew.matricule)){
            console.log("Matricule existe deja");
            //return error
        }
        else{
            this.personnels.push(personnelNew);
        }
    }

}