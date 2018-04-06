import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.scss']
})
export class FilmsListComponent implements OnInit {

  listFilms = [
      {
        titre: 'test',
        real: 'machin',
        date: '6',
        heure: '22h',
        desc: 'Ce film machin est super génial'
      },
      {
          titre: 'test',
          real: 'machin',
          date: '7',
          heure: '20h',
          desc: 'Ce film machin est super génial'
      },
      {
          titre: 'test',
          real: 'machin',
          date: '8',
          heure: '18h',
          desc: 'Ce film machin est super génial'
      }
  ];

  constructor() { }

  ngOnInit() {
  }

}
