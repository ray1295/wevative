import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  images: string[] = [
    "../../assets/images/alex-kotliarskyi-361081-unsplash.jpg", 
    "../../assets/images/francois-olwage-630276-unsplash.jpg",
    "../../assets/images/nagy-arnold-735320-unsplash.jpg",
    "../../assets/images/nik-shuliahin-423834-unsplash.jpg",
    "../../assets/images/venveo-609390-unsplash.jpg",
  ];

  constructor() { }

  ngOnInit() {
  }

}
