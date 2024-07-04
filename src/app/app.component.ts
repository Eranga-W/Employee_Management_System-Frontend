import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ManageEmpolyeeComponent } from './page/manage-empolyee/manage-empolyee.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ManageEmpolyeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'emp-app';
}
