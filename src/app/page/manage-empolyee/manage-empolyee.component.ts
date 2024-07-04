import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-empolyee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './manage-empolyee.component.html',
  styleUrl: './manage-empolyee.component.css'
})
export class ManageEmpolyeeComponent {

  public firstName:string=""

  addEmployee(){
    alert(this.firstName)
  }
}
