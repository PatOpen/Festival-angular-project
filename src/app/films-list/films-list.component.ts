import { Component, OnInit } from '@angular/core';
import {ListeFilmsService} from '../services/liste-films.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.scss']
})
export class FilmsListComponent implements OnInit {

  listFilms: any[];
  filmSubscription: Subscription;

  constructor(private listeFilmsService: ListeFilmsService,
              private router: Router) { }

  ngOnInit() {
      this.filmSubscription = this.listeFilmsService.filmSubject.subscribe(
          (listFilms: any[]) => {
              this.listFilms = listFilms;
          }
      );
      this.listeFilmsService.emitFilmSubject();
  }

  onFilmDetail(id: number) {
      this.router.navigate(['/Films', 'Detail', id]);
  }

}
