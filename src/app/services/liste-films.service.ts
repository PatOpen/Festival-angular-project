import { Injectable } from '@angular/core';
import {Films} from '../models/film.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ListeFilmsService {

    filmSubject = new Subject<any[]>();

    private films: Films[] = [
        {
            id: 0,
            titre: 'TAXI 5',
            src: 'taxi-5_215_290.jpg',
            real: 'Franck Gastambide',
            date: 5,
            heure: '18h',
            desc: 'Sylvain Marot, super flic parisien et pilote d’exception, est muté contre son gré à la Police Municipale de Marseille. L’ex-commissaire Gibert, devenu Maire de la ville et au plus bas dans les sondages, va alors lui confier la mission de stopper le redoutable « Gang des Italiens », qui écume des bijouteries à l’aide de puissantes Ferrari. Mais pour y parvenir, Marot n’aura pas d’autre choix que de collaborer avec le petit-neveu du célèbre Daniel, Eddy Maklouf, le pire chauffeur VTC de Marseille, mais le seul à pouvoir récupérer le légendaire TAXI blanc.'
        },
        {
            id: 1,
            titre: 'Luna',
            src: 'luna_215_290.jpg',
            real: 'Elsa Diringer',
            date: 5,
            heure: '20h',
            desc: 'Luna vit près de Montpellier et travaille dans une exploitation maraîchère. Elle est belle, drôle, elle dévore la vie. Elle serait prête à tout pour garder l’amour de Ruben. Au cours d’une soirée trop arrosée avec ses amis, ils agressent un jeune inconnu. Quelques semaines plus tard, celui-ci réapparait dans la vie de Luna. Elle va devoir faire des choix.'
        },
        {
            id: 2,
            titre: 'Du soleil dans mes yeux',
            src: 'Du-soleil-dans-mes-yeux_215_290.jpg',
            real: 'Nicolas Giraud',
            date: 5,
            heure: '22h',
            desc: 'Irène va mieux. Elle a un projet. Vivre à nouveau avec son fils. Elle profite des vacances d’été pour le retrouver chez sa grand-mère à La Rochelle.  Mais elle fait la rencontre de Yann…'
        },
        {
            id: 3,
            titre: 'La Prière',
            src: 'la-priere_215_290.jpg',
            real: ' Cédric Kahn',
            date: 6,
            heure: '18h',
            desc: ' Thomas a 22 ans. Pour sortir de la dépendance, il rejoint une communauté isolée dans la montagne tenue par d’anciens drogués qui se soignent par la prière. Il va y découvrir l’amitié, la règle, le travail, l’amour et la foi…'
        },
        {
            id: 4,
            titre: 'Tout le monde debout',
            src: 'tout-le-monde-debout_215_290.jpg',
            real: 'Franck Dubosc',
            date: 6,
            heure: '20h',
            desc: 'Jocelyn, homme d\'affaire en pleine réussite, est un dragueur et un menteur invétéré. Lassé d\'être lui-même, il se retrouve malgré lui à séduire une jeune et jolie femme en se faisant passer pour un handicapé. Jusqu\'au jour où elle lui présente sa sœur elle-même handicapée...'
        },
        {
            id: 5,
            titre: 'Gaston Lagaffe',
            src: 'Gaston-Lagaffe_215_290.jpg',
            real: 'Pierre-François Martin-Laval',
            date: 6,
            heure: '22h',
            desc: 'M’enfin ! Gaston débarque en stage au Peticoin.\n' +
            'Avec ces inventions délirantes, il va changer le quotidien de ses collègues. \n' +
            'Chat, mouette, vache, et gaffophone seront au rendez-vous des aventures de notre bricoleur de génie qui ne pense qu’à faire le bien autour de lui mais qui a le don d’énerver Prunelle son patron. \n' +
            'Les gaffes à gogo de notre empêcheur de travailler en rond pourront-elles éviter que le redoutable Monsieur de Mesmaeker rachète le Peticoin ? '
        },
        {
            id: 6,
            titre: 'Le Collier rouge',
            src: 'le-collier-rouge_215_290.jpg',
            real: 'Jean Becker',
            date: 7,
            heure: '18h',
            desc: 'Dans une petite ville, écrasée par la chaleur de l’été, en 1919, un héros de la guerre est retenu prisonnier au fond d’une caserne déserte. Devant la porte, son chien tout cabossé aboie jour et nuit. Non loin de là, dans la campagne, une jeune femme usée par le travail de la terre, trop instruite cependant pour être une simple paysanne, attend et espère. Le juge qui arrive pour démêler cette affaire est un aristocrate dont la guerre a fait vaciller les principes. Trois personnages et, au milieu d’eux, un chien, qui détient la clef du drame…'
        },
        {
            id: 7,
            titre: 'Hostiles',
            src: 'hostiles_215_290.jpg',
            real: 'Scott Cooper',
            date: 7,
            heure: '20h',
            desc: 'En 1892, le capitaine de cavalerie Joseph Blocker, ancien héros de guerre devenu gardien de prison, est contraint d’escorter Yellow Hawk, chef de guerre Cheyenne mourant, sur ses anciennes terres tribales. Peu après avoir pris la route, ils rencontrent Rosalee Quaid. Seule rescapée du massacre de sa famille par les Comanches, la jeune femme traumatisée se joint à eux dans leur périple.\n' +
            'Façonnés par la souffrance, la violence et la mort, ils ont en eux d’infinies réserves de colère et de méfiance envers autrui. Sur le périlleux chemin qui va les conduire du Nouveau-Mexique jusqu’au Montana, les anciens ennemis vont devoir faire preuve de solidarité pour survivre à l’environnement et aux tribus comanches qu’ils rencontrent.'
        },
        {
            id: 8,
            titre: 'L\'Apparition',
            src: 'l-apparition_215_290.jpg',
            real: 'Xavier Giannoli',
            date: 7,
            heure: '22h',
            desc: 'Jacques, grand reporter pour un quotidien français reçoit un jour un mystérieux coup de téléphone du Vatican. Dans une petite ville du sud-est de la France une jeune fille de 18 ans a affirmé avoir eu une apparition de la Vierge Marie. La rumeur s’est vite répandue et le phénomène a pris une telle ampleur que des milliers de pèlerins viennent désormais se recueillir sur le lieu des apparitions présumées. Jacques qui n’a rien à voir avec ce monde-là accepte de faire partie d’une commission d’enquête chargée de faire la lumière sur ces événements.'
        },
        {
            id: 9,
            titre: 'Tomb Raider',
            src: 'Tomb-Raider_215_290.jpg',
            real: 'Roar Uthaug',
            date: 8,
            heure: '18h',
            desc: 'Lara Croft, 21 ans, n\'a ni projet, ni ambition : fille d\'un explorateur excentrique porté disparu depuis sept ans, cette jeune femme rebelle et indépendante refuse de reprendre l\'empire de son père. Convaincue qu\'il n\'est pas mort, elle met le cap sur la destination où son père a été vu pour la dernière fois : la tombe légendaire d\'une île mythique au large du Japon. Mais le voyage se révèle des plus périlleux et il lui faudra affronter d\'innombrables ennemis et repousser ses propres limites pour devenir "Tomb Raider"…'
        },
        {
            id: 10,
            titre: 'La Finale',
            src: 'La-Finale_215_290.jpg',
            real: 'Robin Sykes',
            date: 8,
            heure: '20h',
            desc: 'Toute la famille Verdi est aux petits soins pour s’occuper de Roland, le grand-père, qui perd un peu la boule ces derniers temps. Tous sauf JB, l\'ado de la famille, qui n\'a qu\'un seul but :  monter à Paris pour disputer sa finale de basket. Mais ses parents, bloqués ce week-end-là, lui demandent d’y renoncer pour surveiller son grand-père. JB décide alors de l’embarquer avec lui… Pendant ce voyage, rien ne se passera comme prévu…'
        },
        {
            id: 11,
            titre: 'Marie Madeleine',
            src: 'Marie-Madeleine_215_290.jpg',
            real: 'Garth Davis',
            date: 8,
            heure: '22h',
            desc: 'Marie Madeleine est un portrait authentique et humaniste de l’un des personnages religieux les plus énigmatiques et incompris de l’histoire. Ce biopic biblique raconte l’histoire de Marie, une jeune femme en quête d’un nouveau chemin de vie. Soumise aux mœurs de l’époque, Marie défie les traditions de sa famille pour rejoindre un nouveau mouvement social mené par le charismatique Jésus de Nazareth. Elle trouve rapidement sa place au cœur d’un voyage qui va les conduire à Jérusalem.'
        }

    ];

    emitFilmSubject() {
      this.filmSubject.next(this.films.slice());
    }

    getFilmDetail(id: number) {
        return this.films.find(
          (filmObject) => {
              return filmObject.id === id;
          }
      );
    }
}
