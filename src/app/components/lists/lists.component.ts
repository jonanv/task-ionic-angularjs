import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { WishesService } from '../../services/wishes.service';
import { Router } from '@angular/router';
import { List } from '../../models/list.model';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {

  @ViewChild(IonList) list: IonList;
  @Input() terminated = true;

  constructor(
    public wishesService: WishesService,
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {}

  selectList(list: List) {
    if(this.terminated) {
      this.router.navigateByUrl(`/tabs/tab2/add/${ list.id }`);
    }
    else {
      this.router.navigateByUrl(`/tabs/tab1/add/${ list.id }`);
    }
  }

  deleteList(list: List) {
    this.wishesService.deleteList(list);
  }

  async editList(list: List) {
    const alert = await this.alertController.create({
      header: 'Editar lista',
      inputs: [{
        name: 'titulo',
        type: 'text',
        value: list.titulo,
        placeholder: 'Nombre de la lista'
      }],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
            this.list.closeSlidingItems();
          }
        },
        {
          text: 'Actualizar',
          handler: (data) => {
            if (data.titulo.length === 0) {
              return;
            }

            list.titulo = data.titulo;
            this.wishesService.saveStorage();
            this.list.closeSlidingItems();
          }
        }
      ]
    });

    await alert.present();
  }
}
