import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  // Services must be past in constructor of component they will be used in
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    // Observables are similar to promises in effect.
    // Subscribing is somewhat similar to .then
    // If subscribe isn't chained then nothing will load 
    // because it will not update the data
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }
}
