import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  // styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  navLogo: string = './assets/images/wevative_logo.png';
  constructor() { }

  ngOnInit() {
  }

}
