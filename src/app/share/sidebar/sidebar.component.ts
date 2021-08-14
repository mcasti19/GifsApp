import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',

})
export class SidebarComponent {

  constructor(private gifsServices: GifsService) {
  }

  get historial() {
    return this.gifsServices.historial;
  }

  buscar(termino: string) {
    console.log(termino);
    this.gifsServices.buscarGifs(termino);
  }
}
