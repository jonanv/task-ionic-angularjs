import { Component, OnInit } from '@angular/core';
import { WishesService } from '../../services/wishes.service';
import { ActivatedRoute } from '@angular/router';
import { List } from '../../models/list.model';
import { ListItem } from '../../models/list-item.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  list: List;
  nameItem: string = '';

  constructor(
    private wishesService: WishesService,
    public activatedRoute: ActivatedRoute
  ) {
    const listId = this.activatedRoute.snapshot.paramMap.get('listId');
    this.list = this.wishesService.getList(listId);
  }

  ngOnInit() {
  }

  addItem() {
    if (this.nameItem.length === 0) {
      return;
    }

    const newItem = new ListItem(this.nameItem);
    this.list.items.push(newItem);
    this.nameItem = '';
    this.wishesService.saveStorage();
  }

  changeCheck(item: ListItem) {

    const pending = this.list.items
      .filter(itemData => !itemData.completado)
      .length;

    if (pending === 0) {
      this.list.terminadaEn = new Date();
      this.list.terminada = true;
    }
    else {
      this.list.terminadaEn = null;
      this.list.terminada = false;
    }

    this.wishesService.saveStorage();
  }

  deleteItem(i: number) {
    this.list.items.splice(i, 1);
    this.wishesService.saveStorage();
  }
}
