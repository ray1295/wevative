import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  // styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  encapsulation: ViewEncapsulation.None
  
  constructor() { }

  ngOnInit() {
  }

}
