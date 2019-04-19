import { Component } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: []
})
export class MovieComponent {

  pelicula: any;
  regresar: string;
  buscar: string;

  constructor(public _peliculasService: PeliculasService, private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => {
        this.regresar = params['pag'];

        if (params['buscar']) this.buscar = params['buscar']

        this._peliculasService.getMovie(params['id'])
          .subscribe(
            pelicula => this.pelicula = pelicula,
            err => console.log(err)
          )
      }
    );
  }

}
