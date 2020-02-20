import { Component } from '@angular/core';
import { WishesService } from '../../services/wishes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    public wishesService: WishesService,
    private router: Router
  ) {
    
  }

  addList() {
    // this.router.navigate(['/add']);
    this.router.navigateByUrl('/add');
  }

}
