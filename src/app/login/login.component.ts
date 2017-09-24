import { Component, OnInit, Directive, forwardRef, Attribute, OnChanges, SimpleChanges, Input } from '@angular/core';
import { User } from './user';
import { NG_VALIDATORS, Validators, Validator, AbstractControl, ValidatorFn } from '@angular/forms';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import 'rxjs';
import {Md5} from 'ts-md5/dist/md5';
@Component({

	moduleId:module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

model = new User('','','',null,'','');

// const body = {name: };
submitted = false;
constructor(private http: Http)
{

}

// JSON.stringify(this.model)

onSubmit(){ 
		this.submitted=true;
		const body = {
			firstname:this.model.firstname,
			lastname:this.model.lastname,
			email:this.model.email,
			mobile:this.model.mobile,
			password:Md5.hashStr(this.model.password)
		};
		var headers = new Headers();
      	headers.append('Content-Type', 'application/json');
      	// headers.append('Accept', 'application/json');
      	console.log(body);
      	if((Md5.hashStr(this.model.confirmPassword)===Md5.hashStr(this.model.password))){
      		console.log("equal");
      	}
    	
		this.http
  		.post('http://192.168.43.175:8000/api/users/signup/',body,{
            headers: headers
          })
  		.subscribe(
  			data => {
                alert('ok');
          }, error => {
              console.log(JSON.stringify(error.json()));
          }
          );
  
	}

}
