import { Component,OnInit,Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

import 'rxjs/add/operator/retry';


@Component({
    selector: 'user',
    templateUrl: './user-login.component.html',

})


export  class UserLoginComponent implements  OnInit{

    @Input() results: string [];

    constructor(private http: HttpClient) {}

    ngOnInit(): void {

        console.log(environment.apiUrl);
        this.http.get('http://localhost:3000/')
            .retry(3)
            .subscribe(data => {
            // Read the result field from the JSON response.

            this.results = data['result'];
            console.log(this.results);
        },
        err=>{
            console.log('error',err);
        });
    }
}