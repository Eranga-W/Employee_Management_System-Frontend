import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-empolyee',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule],
  templateUrl: './manage-empolyee.component.html',
  styleUrl: './manage-empolyee.component.css'
})
export class ManageEmpolyeeComponent {

  public employeeObj = {
    firstName:"",
    lastName:"",
    email:"",
    departmentId:"",
    roleId:""
  }

  constructor(private http:HttpClient){}

  addEmployee(){
    this.http.post("http://localhost:8080/emp-controller/add-employee",this.employeeObj).subscribe(
      (data) => {
        Swal.fire({
          title: "Added!",
          text: "Employee Added Successfully!",
          icon: "success"
        });
      }
    )
  }
}
