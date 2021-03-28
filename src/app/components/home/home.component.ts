import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task-service/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tasks = [];
  loader = true;
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getUsers().subscribe(
      (res:any) => {
        this.taskService.users   = res.users;
        this.taskService.getTaskList().subscribe(
          (taskResponse:any) => {
            this.tasks   = taskResponse.tasks;
          },
          (err) => {
            console.log("API error: " + err);
          }
        );
      },
      (error) => {
        console.log("API error: " + error);
        this.loader = false;
      },
      ()=> {
        this.loader = false;
      }
    );
  }

}
