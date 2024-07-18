import { Routes } from '@angular/router';
import { ManageEmpolyeeComponent } from './page/manage-empolyee/manage-empolyee.component';
import { ViewAllEmployeeComponent } from './page/view-all-employee/view-all-employee.component';

export const routes: Routes = [
    {
        path:"add-employee",
        component:ManageEmpolyeeComponent
    },
    {
        path:"view-all-employee",
        component:ViewAllEmployeeComponent
    }
];
