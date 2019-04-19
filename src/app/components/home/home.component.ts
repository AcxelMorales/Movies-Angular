import { Component } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    hr {
      background-color: white;
    }
  `]
})
export class HomeComponent {

  cartelera: any;
  populares: any;
  infantiles: any;

  constructor(public _peliculasService: PeliculasService) {
    this._peliculasService.getBillboard()
      .subscribe(
        resp => this.cartelera = resp.results,
        err => console.error(err)
      )

    this._peliculasService.getPopulares()
      .subscribe(
        resp => this.populares = resp.results,
        err => console.error(err)
      )

    this._peliculasService.getChildrens()
      .subscribe(
        resp => this.infantiles = resp.results,
        err => console.error(err)
      );
  }

}
