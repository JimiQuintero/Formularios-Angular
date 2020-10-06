import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http: HttpClient) {
    console.log('Servicio paises funcionando');
   }

    getPaises() {
     return this.http.get('https://restcountries.eu/rest/v2/lang/es')
     .pipe(
       map( (resp: any[] ) => {
         return resp.map( pais => {
           return {
             nombre: pais.name,
             codigo: pais.alpha3Code
           };
         });
       })
     );
   }
}