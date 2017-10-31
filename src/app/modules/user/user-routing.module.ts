import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {UserLoginComponent}     from  './user-login.component';

const userRoutes: Routes = [
    { path: 'user',  component: UserLoginComponent },

];

@NgModule({
    imports: [
        RouterModule.forChild(userRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class UserRoutingModule { }