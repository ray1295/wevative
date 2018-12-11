import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { coerceNumberProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  // styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  showTicks: boolean = true;
  autoTicks: boolean = false;
  max: string = '£100000';
  min: string = '£1000';
  step: number = 5;
  thumbLabel: boolean = true;
  value: number = 0;
  projectTypes: string[] = ['Logo/Branding', 'Illustration', 'Web Design', 'App Design', 'Other'];
  
  updateFile(file: HTMLInputElement) {
    let name = file.value;
  }

  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(value) {
    this._tickInterval = coerceNumberProperty(value);
  }
  private _tickInterval = 10;

  contactForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    companyName: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    projectBud: new FormControl('', Validators.required),
    projectType: new FormControl('', Validators.required),
    message: new FormControl(''), 
    privacyPolicy: new FormControl('', Validators.required),
  });


  onSubmmit() {
    console.log(this.contactForm.value);
  }

  // getErrorMessage() {
  //   return this.contactForm.get('email').hasError('required') ? 'You must enter a value' :
  //   this.contactForm.get('email').hasError('email') ? 'Not a valid email' : '';
  // }

  constructor() { }

  ngOnInit() {
  }

}
