import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ListeFilmsService} from '../../services/liste-films.service';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss']
})
export class FilmDetailComponent implements OnInit {

  id: number;
  titre: string;
  src: string;
  real: string;
  date: number;
  heure: string;
  desc:string;

  constructor(private route: ActivatedRoute,
              private listeFilmsService: ListeFilmsService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.id = this.listeFilmsService.getFilmDetail(+id).id;
    this.titre = this.listeFilmsService.getFilmDetail(+id).titre;
    this.src = this.listeFilmsService.getFilmDetail(+id).src;
    this.real = this.listeFilmsService.getFilmDetail(+id).real;
    this.date = this.listeFilmsService.getFilmDetail(+id).date;
    this.heure = this.listeFilmsService.getFilmDetail(+id).heure;
    this.desc = this.listeFilmsService.getFilmDetail(+id).desc;
  }

}
