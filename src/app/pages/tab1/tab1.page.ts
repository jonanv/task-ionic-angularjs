import { Component } from '@angular/core';
import { WishesService } from '../../services/wishes.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    public wishesService: WishesService,
    private router: Router,
    private alertController: AlertController
  ) {

  }

  async addList() {
    const alert = await this.alertController.create({
      header: 'Nueva lista',
      inputs: [{
        name: 'titulo',
        type: 'text',
        placeholder: 'Nombre de la lista'
      }],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
          }
        },
        {
          text: 'Crear',
          handler: (data) => {
            if (data.titulo.length === 0) {
              return;
            }

            const listId = this.wishesService.createlist(data.titulo);

            // this.router.navigate(['/tabs/tab1/add']);
            this.router.navigateByUrl(`/tabs/tab1/add/${ listId }`);
          }
        }
      ]
    });

    await alert.present();
  }

}
