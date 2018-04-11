import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActusService} from '../../services/actus.service';
import {Subscription} from 'rxjs/Subscription';
import {Actus} from '../../models/actus.model';

@Component({
  selector: 'app-actus-accueil',
  templateUrl: './actus-accueil.component.html',
  styleUrls: ['./actus-accueil.component.scss']
})

export class ActusAccueilComponent implements OnInit, OnDestroy {

    actus: Actus[];
    actusSubscription: Subscription;

    constructor(private actusService: ActusService) { }

    ngOnInit() {
        this.actusSubscription = this.actusService.actusSubject.subscribe(
            (actus: Actus[]) => {
                this.actus = actus;
            }
        );
        this.actusService.getActus();
        this.actusService.emitActus();
    }


    ngOnDestroy() {
        this.actusSubscription.unsubscribe();
    }
}

