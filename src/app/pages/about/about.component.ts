import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { GithubService } from '../../shared/services/github.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  users;

  constructor(public GithubService: GithubService) { }

  ngOnInit() {
    let showUsers = this.GithubService.fetchUsers()
      .subscribe(
        (data) => {
          this.users = data;
        },
        (error) => {
          console.log(error);
        },
        () => {
          // Adding setInternal to create effect of an async data
          // setInterval(() => {
          //   console.log('completed');
          // }, 2000);
          // Adding unsubscribe method to complete to avoid memory leak.
          // setTimeout(() => {
          //   showUsers.unsubscribe();
          //   console.log('completed');
          // }, 2000);
          console.log('completed');
        }
      )
  }
}
