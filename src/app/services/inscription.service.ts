import { Injectable } from '@angular/core';
import {Inscription} from '../models/inscription.model';
import {Subject} from 'rxjs/Subject';
import * as firebase from 'firebase';

@Injectable()
export class InscriptionService {

  private inscription: Inscription[] = [];

  inscriptionSubject = new Subject<Inscription[]>();


    emitInscription() {
      this.inscriptionSubject.next(this.inscription);
    }

    saveInscription(){
        return new Promise(
            (resolve, reject) => {
                firebase.database().ref('/inscription').set(this.inscription).then(
                    () => resolve(),
                    error => reject(error)
                );
            }
        );
    }

    getInscription() {
        firebase.database().ref('/inscription')
            .on('value', (data) => {
                this.inscription = data.val() ? data.val() : [];
                this.emitInscription();
            });
    }

    ajouterReservation(index: number, nombre: number) {
        this.inscription[index].reservation = this.inscription[index].reservation + nombre;
        this.saveInscription();
    }

}
