import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import {Task} from '../Task';
import {TASKS} from '../mock-tasks';
import { TasksComponent } from '../components/tasks/tasks.component';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5569/tasks'

  constructor(private http:HttpClient) { }

  // Returns a promiselike value of an "Observable" Task array
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  } 
}
