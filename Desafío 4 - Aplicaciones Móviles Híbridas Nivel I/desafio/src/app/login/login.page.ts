import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  goBackHome() {
    this.navCtrl.navigateBack('home');
  }

  verContrasena: boolean = false;

  iconoContrasena: string = 'eye-off';

  clickMostrarContrasena() {
    this.verContrasena = !this.verContrasena;

    if (this.iconoContrasena == 'eye-off')
      this.iconoContrasena = 'eye';
    else
      this.iconoContrasena = 'eye-off';
  }

  ngOnInit() {
  }

}
