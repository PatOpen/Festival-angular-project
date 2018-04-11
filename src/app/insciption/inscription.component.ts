import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {Inscription} from '../models/inscription.model';
import {InscriptionService} from '../services/inscription.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit, OnDestroy {

    inscription: Inscription[];
    inscriptionSubscription: Subscription;

    constructor(private inscriptionService: InscriptionService) { }

    ngOnInit() {
        this.inscriptionSubscription = this.inscriptionService.inscriptionSubject.subscribe(
            (inscription: Inscription[]) => {
                this.inscription = inscription;
            }
        );
        this.inscriptionService.getInscription();
        this.inscriptionService.emitInscription();
    }


    ngOnDestroy() {
        this.inscriptionSubscription.unsubscribe();
    }
}
