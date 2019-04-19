import { Component } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  buscar: string;

  constructor(public _peliculasService: PeliculasService, private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => {
        if (params['texto']) {
          this.buscar = params['texto'];
          this.search();
        }
      }
    );
  }

  search() {
    if (this.buscar.length === 0) return;

    this._peliculasService.searchMovie(this.buscar)
      .subscribe(
        r => console.log(r)
      );
  }

}
