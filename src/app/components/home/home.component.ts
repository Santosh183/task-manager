import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task-service/task.service';
import {TaskFormComponent} from 'src/app/components/task-form/task-form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tasks = [];
  lowTasks = [];
  mediumTasks=[];
  highTasks=[];
  loader = true;
  constructor(private taskService: TaskService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loader = true;
    this.taskService.getUsers().subscribe(
      (res:any) => {
        this.taskService.users   = res.users;
        this.taskService.getTaskList().subscribe(
          (taskResponse:any) => {
            this.tasks   = taskResponse.tasks;
            this.segregateTasks();
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
        
      }
    );
  }
  segregateTasks() {
    for(let i in this.tasks) {
      if(this.tasks[i].priority == 1) {
        this.lowTasks.push(this.tasks[i]);
      } else if(this.tasks[i].priority == 2) {
        this.mediumTasks.push(this.tasks[i]);
      } else if(this.tasks[i].priority == 3) {
        this.highTasks.push(this.tasks[i]);
      }
    }
    this.loader = false;
  }
  openTaskModal(update:boolean,task: any) {
    if(!update) {
      task = null;
    }
    const dialogRef = this.dialog.open(TaskFormComponent, {
      data: {
        update: update,
        task: task
      },
    });
    dialogRef.afterClosed().subscribe(task => {
     // logic to check if task present already by id, if yes then update if not then create
    });
  }

}
