
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Fonction } from "../models/fonction.model";

@Injectable({
    providedIn: 'root'
})
export class FonctionService {

    fonctions:Fonction[]=[
        {
            id:0,
            libelle:"Employé",
            description:"Un agent en CDD"
        },
        {
            id:1,
            libelle:"Directeur",
            description:"Haut grade"
        },
        {
            id:2,
            libelle:"Stagiaire",
            description:"En stage"
        }
    ];

    getAllFonction():Fonction[]{
        return this.fonctions;
    }
    // savePersonnel(personnelNew:Personnel):void{        
    //     //console.log(this.personnels.some(personnel =>personnel.matricule===personnelNew.matricule));
    //     if(this.personnels.some(personnel =>personnel.matricule===personnelNew.matricule)){
    //         console.log("Matricule existe deja");
    //         //return error
    //     }
    //     else{
    //         this.personnels.push(personnelNew);
    //     }
    // }

}