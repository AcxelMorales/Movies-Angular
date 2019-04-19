import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: []
})
export class NavComponent {

  constructor(private router: Router) { }

  search(busqueda: string) {
    if (busqueda.length === 0) return;
    this.router.navigate(['search', busqueda]);
  }

}
