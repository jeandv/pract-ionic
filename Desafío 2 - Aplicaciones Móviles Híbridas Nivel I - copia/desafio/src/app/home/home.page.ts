import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  imgs = ['banner1', 'banner2', 'banner3', 'banner4', 'banner5', 'banner6', 'banner7', 'banner8', 'banner9', 'banner10', 'banner11', 'banner12', 'banner13', 'banner14', 'banner15', 'banner16', 'banner17']

  imagesBanner = this.imgs.map((img) => `../assets/images/${img}.jpg`);

  contenidoSection =
    [
      {
        icono: 'https://cadif1.com/img/servicios/iconos/carrera-informaticas.png',
        titulo: 'carreras técnicas',
        descripcion: 'Formate integral y profesionalmente en un área de estudio y preparate para trabajar.'
      },
      {
        icono: 'https://cadif1.com/img/servicios/iconos/cursos-presenciales.png',
        titulo: 'cursos especializados',
        descripcion: 'Hazte un experto en los temas relacionados con la computación y la informática.'
      },
      {
        icono: 'https://cadif1.com/img/servicios/iconos/asesoria-tecnicas.png',
        titulo: 'asesorías técnicas',
        descripcion: 'Resuelve los problemas que tengas en el desarrollo de tu proyectos.'
      },
      {
        icono: 'https://cadif1.com/img/servicios/iconos/alquiler-salones.png',
        titulo: 'alquiler de salones',
        descripcion: 'Contamos con una infraestructura adaptada a tus necesidades con la mejor tecnología.'
      }
    ]

}
