import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {FormGroup,ValidatorFn, FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  public val: any;
  public Error$: BehaviorSubject<boolean>;
  public Group: FormGroup;

  constructor(){
    const validatorfunc: ValidatorFn[] = [Validators.pattern('^-?([0-9]{1,2}|1[0-7][0-9]|180)(\.[0-9]{1,10})?$'), Validators.required];
    this.Group = this.createGroup(validatorfunc);
    this.Error$ = new BehaviorSubject<boolean>(false);
    }

  public OnClick(x: any):void{
    console.log(x.value);
    if (!this.Group.valid) {
      console.log('invalid');
      this.Error$.next(true);
    }
  }

  private createGroup(validator: ValidatorFn[]){
    return new FormGroup({
      value: new FormControl('', validator)
    })
  }
}
