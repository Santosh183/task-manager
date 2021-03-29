import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  baseUrl = "https://devza.com/tests/tasks/";
  token = "UEYhRxLpiPCw2fWNNsehxiwNEla8wlc9";
  users = [];
  constructor(private http: HttpClient) {
  }

  getTaskList() {
    const header = new HttpHeaders({ 'AuthToken': this.token });
    return this.http.get(this.baseUrl+"list",{headers:header});
  }
  getUsers() {
    const header = new HttpHeaders({ 'AuthToken': this.token });
    return this.http.get(this.baseUrl+"listusers",{headers:header});
  }
}
