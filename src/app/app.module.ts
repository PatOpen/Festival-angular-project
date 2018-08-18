import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ActusAccueilComponent } from './actus/actus-accueil/actus-accueil.component';
import { InscriptionComponent } from './insciption/inscription.component';
import { FilmsListComponent } from './films-list/films-list.component';
import { FilmDetailComponent } from './films-list/film-detail/film-detail.component';
import { HeaderComponent } from './header/header.component';
import { ActusComponent } from './actus/actus.component';
import { ActusFormComponent } from './actus/actus-form/actus-form.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { ActusService } from './services/actus.service';
import { ListeFilmsService } from './services/liste-films.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes, Router } from '@angular/router';
import { InscriptionService } from './services/inscription.service';
import { FooterComponent } from './footer/footer.component';


 const appRoutes: Routes = [
    { path: 'auth/Enregistrement', canActivate: [AuthGuardService], component: SignupComponent },
    { path: 'auth/Connexion', component: SigninComponent },
    { path: 'auth/Admin-inscription', canActivate: [AuthGuardService], component: InscriptionComponent },
    { path: 'auth/Admin-actus', canActivate: [AuthGuardService], component: ActusComponent },
    { path: 'auth/Admin-nouvelle-actus', canActivate: [AuthGuardService], component: ActusFormComponent },
    { path: 'Films', component: FilmsListComponent },
    { path: 'Films/Detail/:id', component: FilmDetailComponent },
    { path: 'Accueil', component: AccueilComponent },
    { path: '', redirectTo: 'Accueil', pathMatch: 'full' },
    { path: '**', redirectTo: 'Accueil' }
];

@NgModule({
  declarations: [
    AppComponent,
    FilmsListComponent,
    FilmDetailComponent,
    HeaderComponent,
    ActusComponent,
    ActusFormComponent,
    SignupComponent,
    SigninComponent,
    AccueilComponent,
    InscriptionComponent,
    ActusAccueilComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
      AuthService,
      AuthGuardService,
      ActusService,
      ListeFilmsService,
      InscriptionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
