import { Component, OnInit, Directive, forwardRef, Attribute, OnChanges, SimpleChanges, Input } from '@angular/core';
import { User } from './user';
import { NG_VALIDATORS, Validators, Validator, AbstractControl, ValidatorFn } from '@angular/forms';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import 'rxjs';
@Component({

	moduleId:module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

model = new User('','',null,'','','');



submitted = false;
constructor(private http: Http)
{

}

onSubmit(){ 

		this.submitted=true;
		console.log(this.model);
		this.http
  		.post('http://192.168.43.175:8000/accounts/api/signup', JSON.stringify(this.model))
  		.subscribe();
  
	}

}
