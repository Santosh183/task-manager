import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { TaskService } from 'src/app/services/task-service/task.service';
import {map, startWith} from 'rxjs/operators';
import {User} from '../../models/user';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';



@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

  minDate = new Date();
  dueDate: any;
  assignTo ="";
  priority= "";
  userCtrl = new FormControl();
  taskDescription: "";
  taskId ="";
  filteredUsers: Observable<User[]>;

  users: User[] = this.taskService.users;
  constructor(private taskService: TaskService, 
    @Inject(MAT_DIALOG_DATA) public data:  {
      update: boolean,
      task: any
    }) {
    this.users = this.taskService.users;
    this.filteredUsers = this.userCtrl.valueChanges
    .pipe(
      startWith(''),
      map(state => state ? this._filterUsers(state) : this.users.slice())
    );
  }

  private _filterUsers(value: string): User[] {
    const filterValue = value.toLowerCase();

    return this.users.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }

  ngOnInit(): void {
    if(this.data.update) {
      this.taskDescription = this.data.task.taskDescription;
      this.assignTo = this.data.task.assignTo;
      this.priority= this.data.task.priority;
      this.userCtrl.setValue(this.data.task.assignTo);
      this.taskId = this.data.task.id;
    } 
  }

}
