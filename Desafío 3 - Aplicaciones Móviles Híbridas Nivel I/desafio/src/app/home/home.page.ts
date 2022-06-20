import { Component } from '@angular/core';
import { AlertController, ToastController, ActionSheetController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  datosVideos =
    [
      {
        miniatura: 'https://i.ytimg.com/vi/Ep3uffrEsTQ/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAnaI9OrfJSoX4oJitSV986JNcPsA',
        titulo: 'Diseñador grafico',
        asesor: 'Jean Rondón',
        temas: ['Photoshop', 'Ilustrator']
      },
      {
        miniatura: 'https://i.ytimg.com/vi/N3Igqm1pjJ0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAm-U-TegZclDBWTfq7i8HEQHZ6Ug',
        titulo: 'Tecnico electrónica y robótica',
        asesor: 'Jean Rondón',
        temas: ['Arduino', 'Voltaje', 'Fet']
      },
      {
        miniatura: 'https://i.ytimg.com/vi/Q5Xke5NVkXk/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBcL7owS0VqSLmoDc3_o1HgbFc0AQ',
        titulo: 'Redes de computadoras',
        asesor: 'Jean Rondón',
        temas: ['DNS', 'OSI', 'DHCP']
      },
      {
        miniatura: 'https://i.ytimg.com/vi/TcmpT4BFOJ0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCHD_2qB9AYRcUrEAQKuKdiWTWccg',
        titulo: 'Desarrollador frontend jr',
        asesor: 'Jean Rondón',
        temas: ['HTML', 'CSS', 'JavaScript']
      },
      {
        miniatura: 'https://i.ytimg.com/vi/FH0BEqlgvKo/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDux_DAKsxY47y6tIoWxVwBQn1Y0g',
        titulo: 'Asistente administrativo',
        asesor: 'Jean Rondón',
        temas: ['Word', 'Excel', 'Powerpoint']
      },
      {
        miniatura: 'https://i.ytimg.com/vi/mVIGS6KabRY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBo7-TS7cMvh2jSsudzvw69i9tk0g',
        titulo: 'Fundamentos Programación',
        asesor: 'Jean Rondón',
        temas: ['Git', 'Algoritmos', 'POO']
      },
      {
        miniatura: 'https://i.ytimg.com/vi/8KsIc7TeTP8/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAhDecp4g27YygcqT1NvaC83Y2T9A',
        titulo: 'Mantenimiento PC y redes',
        asesor: 'Jean Rondón',
        temas: ['WISP', 'Drivers']
      },
      {
        miniatura: 'https://i.ytimg.com/vi/2F3w6Moq8PQ/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAS4XW6KNI5_qVlVEhccJd6zemrkw',
        titulo: 'AutoCAD 2D y 3D',
        asesor: 'Jean Rondón',
        temas: ['Autocad', 'Tablas']
      },
    ]

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public actionSheetController: ActionSheetController,
    private navCtrl: NavController
  ) { }


  async presentToast(textToast: string) {
    const toast = await this.toastController.create({
      message: `¡Haz dado click en ${textToast}!`,
      icon: 'information-circle',
      position: 'top',
      translucent: true,
      duration: 1800
    });
    toast.present();
  }

  async presentAlertConfirm(textAlert: string) {
    const alert = await this.alertController.create({
      cssClass: 'alertBtn',
      header: '¡Hola usuario!',
      message: `Haz dado click en <strong>${textAlert}</strong>`,
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
          text: 'Ok',
          id: 'confirm-button',
          handler: () => {
            console.log('Haz dado click en ok');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentActionSheet(textAgregar: string) {
    const actionSheet = await this.actionSheetController.create({
      header: textAgregar,
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Subir video',
          icon: 'videocam',
          data: 10,
          handler: () => {
            console.log('Haz subido un video!');
          }
        }, {
          text: 'Empezar stream',
          icon: 'eye',
          data: 'Data value',
          handler: () => {
            console.log('Comenzando stream en vivo...');
          }
        }, {
          text: 'Subir material',
          icon: 'library',
          handler: () => {
            console.log('Subiste material nuevo.');
          }
        }, {
          text: 'Cancelar',
          icon: 'sad',
          role: 'cancel',
          handler: () => {
            console.log('Cancelaste.');
          }
        }]
    });
    await actionSheet.present();

  }

  goToLogin() {
    this.navCtrl.navigateForward(['login']);
  }
}
