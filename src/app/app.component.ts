import { Component } from '@angular/core';
import { ApiService } from './servicios/api.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private apiService: ApiService) {}

  crearNuevo(){
    this.apiService.createPosts(this.crearNuevo).subscribe(Response =>{
      console.log('Nuevo Dato creado: ', Response);
    })
  }

  Eliminar(id: number){
    this.apiService.deletePost(id).subscribe(Response =>{
      console.log('Eliminado Correctamente:', Response);
    })

  }
  


}
