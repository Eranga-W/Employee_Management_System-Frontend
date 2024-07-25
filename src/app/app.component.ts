import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ManageEmpolyeeComponent } from './page/manage-empolyee/manage-empolyee.component';
import { ViewAllEmployeeComponent } from './page/view-all-employee/view-all-employee.component';
import { NavComponent } from "./common/nav/nav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ManageEmpolyeeComponent, ViewAllEmployeeComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'emp-app';
}
