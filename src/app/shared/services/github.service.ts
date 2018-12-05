/* Setting up HTTP request to GitHub API using observables */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class GithubService {

  // Injecting HttpClient into application class as a dependecny in the constructor.  
  constructor(
    private http: HttpClient
  ) { }

  // Creating method to get GitHub users 
  fetchUsers() {
    return this.http.get("https://api.github.com/users");
  }
}
