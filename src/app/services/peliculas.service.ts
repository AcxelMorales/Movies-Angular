import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apiKey: string = '012e552a33aa7ab027efdf8b3b53c0f6';
  private urlMoviedb: string = 'https://api.themoviedb.org/3';
  public peliculas: any[] = [];

  constructor(private _service: HttpClient) { }

  getPopulares(): Observable<any> {
    let url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

    return this._service.jsonp(url, '').pipe(
      map(res => res)
    );
  }

  getBillboard(): Observable<any> {
    let desde = new Date();
    let hasta = new Date();
    hasta.setDate(hasta.getDate() + 7);

    let desdeFrm = `${desde.getFullYear()}-${desde.getMonth() + 1}-${desde.getDay()}`;
    let hastaFrm = `${hasta.getFullYear()}-${hasta.getMonth() + 1}-${hasta.getDay()}`;

    let url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${desdeFrm}&primary_release_date.lte=${hastaFrm}&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

    return this._service.jsonp(url, '').pipe(
      map((res: any) => res)
    );
  }

  getChildrens(): Observable<any> {
    let url = `${this.urlMoviedb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&language=es&api_key=${this.apiKey}&callback=JSONP_CALLBACK`;

    return this._service.jsonp(url, '').pipe(
      map((res: any) => res)
    );
  }

  searchMovie(texto: string): Observable<void> {
    let url = `${this.urlMoviedb}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;

    return this._service.get(url).pipe(
      map((resp: any) => {
        this.peliculas = resp.results
      })
    );
  }

  getMovie(id: string): Observable<any> {
    let url = `${this.urlMoviedb}/movie/${id}?api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

    return this._service.jsonp(url, '').pipe(
      map((res: any) => res)
    );
  }

}
