import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { TaskService } from 'src/app/services/task-service/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: any;
  @Output() deleteModal  = new EventEmitter<any>();
  @Output() editModal  = new EventEmitter<any>();
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }
  getProfilePic() {
    let user = this.taskService.users.find(
      (user) => {
        return user.id == this.task.assigned_to;
      }
    );
    return user.picture;
  }
  openDeleteModal() {
    this.deleteModal.emit();
  }
  openEditModal() {
    this.editModal.emit();
  }

}
