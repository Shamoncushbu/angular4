import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import {UserLoginComponent} from  './user-login.component';
import {UserRoutingModule}  from   './user-routing.module';


@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule
    ],
    declarations: [
        UserLoginComponent
    ],
    providers: [ ]
})
export class UserModule {
}