import {Component, OnDestroy, OnInit} from '@angular/core';
import {Actus} from '../models/actus.model';
import {Subscription} from 'rxjs/Subscription';
import {ActusService} from '../services/actus.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-actus',
  templateUrl: './actus.component.html',
  styleUrls: ['./actus.component.scss']
})
export class ActusComponent implements OnInit, OnDestroy {

  actus: Actus[];
  actusSubscription: Subscription;

  constructor(private actusService: ActusService, private  router: Router) { }

  ngOnInit() {
    this.actusSubscription = this.actusService.actusSubject.subscribe(
        (actus: Actus[]) => {
          this.actus =actus;
        }
    );
    this.actusService.getActus();
    this.actusService.emitActus();
  }

  onNewActus() {
    this.router.navigate(['/auth', 'Admin-nouvelle-actus']);
  }
  onDeleteActus(actus: Actus) {
    this.actusService.removeActus(actus);
  }

  ngOnDestroy() {
    this.actusSubscription.unsubscribe();
  }

}
