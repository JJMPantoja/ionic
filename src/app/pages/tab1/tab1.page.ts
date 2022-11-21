import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  lista: Lista[] = [];
  constructor(
    public deseosService: DeseosService,
    private router: Router,
    private alertCtrl: AlertController
  ) {
    console.log(this.deseosService.listas);
    this.lista = this.deseosService.listas;
  }

  async agregarLista() {
    // this.router.navigateByUrl('/tabs/tab1/agregar');
    const alert = await this.alertCtrl.create({
      header: 'Nueva lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre de la lista',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('cancelar');
          },
        },
        {
          text: 'Crear',
          handler: (data) => {
            console.log(data);
            if (data.lenght === 0) {
              return;
            } else {
              this.deseosService.crearLista(data.titulo);
            }
          },
        },
      ],
    });

    alert.present();
  }
}
