import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.page.html',
  styleUrls: ['./examen.page.scss'],
})
export class ExamenPage implements OnInit {

  nroPregunta: number = 0;

  examenPreguntas =
    [
      {
        id: 1,
        enunciado: '¿En qué lugar se ejecuta generalmente el código JavaScript?',
        opcion1: 'Servidor',
        opcion2: 'Cliente (en el navegador)',
        opcion3: 'En el archivo .js',
        opcion4: 'Ninguno de los anteriores',
      },
      {
        id: 2,
        enunciado: '¿Cuáles de estas son marcas para la inserción del código JavaScript en las páginas HTML?',
        opcion1: '<js_code> y </js_code>',
        opcion2: '<script> y </script>',
        opcion3: '<js> y </js>',
        opcion4: ' <?script> y <script?>',
      },
      {
        id: 3,
        enunciado: 'La llamada al código Javascript debe colocarse en:',
        opcion1: 'La sección Body de la página',
        opcion2: 'Antes de la etiqueta HTML',
        opcion3: 'Puede colocarse en la sección Head o en Body',
        opcion4: 'Entre el Head y Body',
      },
      {
        id: 4,
        enunciado: 'En JavaScript, para darle el nombre a una variable, objeto o función, debemos tener en cuenta que:',
        opcion1: 'No se pueden usar mayúsculas',
        opcion2: 'No distingue entre mayúsculas y minúsculas',
        opcion3: 'Si diferencia entre mayúsculas y minúsculas',
        opcion4: 'No se aceptan tildes o acentos',
      },
      {
        id: 5,
        enunciado: '¿Cuál es la instrucción usada para devolver un valor en una función de JavaScript?',
        opcion1: 'send',
        opcion2: 'return',
        opcion3: 'value',
        opcion4: 'echo',
      },
    ]

  siguiente() {
    if (this.nroPregunta < 5)
      this.nroPregunta++;
  }

  anterior() {
    if (this.nroPregunta > 0)
      this.nroPregunta--;
  }

  async finalizarExamen() {
    const alert = await this.AlertController.create({
      cssClass: 'alertBtn',
      header: '¡Hola usuario!',
      message: `¿Esta seguro que quiere finalizar el examen?`,
      translucent: true,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('haz cancelado');
          }
        }, {
          text: 'Si',
          id: 'confirm-button',
          handler: () => {
            console.log('Haz finalizado el examen.');
            this.navCtrl.navigateBack('home');
          }
        }
      ]
    });

    await alert.present();
  }

  constructor(
    private navCtrl: NavController,
    public AlertController: AlertController) { }

  ngOnInit() {
  }

}
