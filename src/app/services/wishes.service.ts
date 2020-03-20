import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class WishesService {

  lists: List[] = [];

  constructor() {
    this.loadStorage();
    // const list1 = new List('Recolectar piedras del infinito');
    // const list2 = new List('Héroes a desaparecer');

    // this.lists.push(list1, list2);
    // console.log(this.lists);
  }

  createlist(titulo: string) {
    const newList = new List(titulo);
    this.lists.push(newList);
    this.saveStorage();
  }

  saveStorage() {
    localStorage.setItem('data', JSON.stringify(this.lists));
  }

  loadStorage() {
    if(localStorage.getItem('data')) {
      this.lists = JSON.parse(localStorage.getItem('data'));
    }
    else {
      this.lists = [];
    }
  }
}
