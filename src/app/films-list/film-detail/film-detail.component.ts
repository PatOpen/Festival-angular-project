import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ListeFilmsService} from '../../services/liste-films.service';
import {InscriptionService} from '../../services/inscription.service';
import {Inscription} from '../../models/inscription.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss']
})
export class FilmDetailComponent implements OnInit, OnDestroy {

  inscription: Inscription[];
  inscriptionSubscription: Subscription;

  id: number;
  titre: string;
  src: string;
  real: string;
  date: number;
  heure: string;
  desc:string;
  nonbreInscription: number = 0;

  constructor(private route: ActivatedRoute,
              private listeFilmsService: ListeFilmsService,
              private inscriptionService: InscriptionService,
              private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.id = this.listeFilmsService.getFilmDetail(+id).id;
    this.titre = this.listeFilmsService.getFilmDetail(+id).titre;
    this.src = this.listeFilmsService.getFilmDetail(+id).src;
    this.real = this.listeFilmsService.getFilmDetail(+id).real;
    this.date = this.listeFilmsService.getFilmDetail(+id).date;
    this.heure = this.listeFilmsService.getFilmDetail(+id).heure;
    this.desc = this.listeFilmsService.getFilmDetail(+id).desc;

    this.inscriptionSubscription = this.inscriptionService.inscriptionSubject.subscribe(
          (inscription: any[]) => {
              this.inscription = inscription;
          }
      );
    this.inscriptionService.getInscription();
  }

    onRajouterInscription() {
      this.nonbreInscription++;
    }

    onSupprimerInscription() {
      this.nonbreInscription--;
    }

    onEnvoyer(){
      this.inscriptionService.ajouterReservation(this.id, this.nonbreInscription);
      this.router.navigate(['Films']);
    }

    ngOnDestroy() {
       this.inscriptionSubscription.unsubscribe();
    }

}
