import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre: 'Jimi',
    apellido: 'Quintero',
    email: 'jjimiq@gmail.com',
    pais: 'CRI',
    genero: 'M'
  };

  paises: any[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
    this.paisService.getPaises().subscribe( paises => {
      // console.log(paises);
      this.paises = paises;

      this.paises.unshift({
        nombre: '[Selecione un País]',
        codigo: ''
      });

      // console.log(this.paises);
    } );
  }


  guardar( f: NgForm ) {
    console.log( f );

    if (f.invalid) {
      Object.values(f.controls).forEach( control => {
        control.markAsTouched();
      });
      return;
    }
    console.log( f.value );
  }

}
