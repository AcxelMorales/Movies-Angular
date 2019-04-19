import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styles: []
})
export class GaleriaComponent {


  @Input() peliculas: any[] = [];

  constructor() { }

}
