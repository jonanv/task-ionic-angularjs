import { Component, OnInit } from '@angular/core';
import { WishesService } from '../../services/wishes.service';
import { Router } from '@angular/router';
import { List } from '../../models/list.model';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {

  constructor(
    public wishesService: WishesService,
    private router: Router
  ) { }

  ngOnInit() {}

  selectList(list: List) {
    this.router.navigateByUrl(`/tabs/tab1/add/${ list.id }`);
  }

}
