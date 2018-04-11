import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Actus} from '../models/actus.model';
import * as firebase from 'firebase';

@Injectable()
export class ActusService {

  actus: Actus[] = [];
  actusSubject = new Subject<Actus[]>();

  constructor() { }

  emitActus() {
    this.actusSubject.next(this.actus);
  }

  saveActus(){
      return new  Promise(
          (resolve, reject) => {
              firebase.database().ref('/actus').set(this.actus).then(
                  () => resolve(),
                  error => reject(error)
              );
          }
       );
  }

  getActus() {
      firebase.database().ref('/actus')
          .on('value', (data) => {
              this.actus = data.val() ? data.val() : [];
              this.emitActus();
          });
  }

  createNewActus(newActus: Actus) {
      this.actus.push(newActus);
      this.saveActus();
      this.emitActus();
  }

  removeActus(actus: Actus) {
      const actusIndexToRemove = this.actus.findIndex(
          (actusEl) => {
              if(actusEl === actus) {
                  return true;
              }
          }
      );
      this.actus.splice(actusIndexToRemove, 1);
      this.saveActus();
      this.emitActus();
  }
}
