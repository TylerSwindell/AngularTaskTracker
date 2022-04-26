import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddTask!: boolean;
  subscription!: Subscription;

  // When using a service in a component, it must be added to constructor
  // Router object give access to 'this.router.url' boolean
  constructor(private uiService: UiService, private router: Router) { 
    this.subscription = this.uiService.onToggle().subscribe(val => {
      this.showAddTask = val;
    });
  }

  ngOnInit(): void { }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

  // Checks the current route where 'this' component is located is and compares to route arguement
  hasRoute(route: string) {
    return this.router.url === route;
  }

}
