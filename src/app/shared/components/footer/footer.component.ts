import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  // styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  grayLogoPath: string = "assets/images/wevative_logo_gray.png";

  constructor() { }

  ngOnInit() {
  }

}
