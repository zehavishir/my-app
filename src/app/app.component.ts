import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {FormGroup,ValidatorFn, FormControl,Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Job } from 'src/interfaces/job.interface';
import { Data } from 'src/interfaces/data.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-app';

  constructor(private http: HttpClient){
    // this.JobsArray = [];
    }
  ngOnInit(): void {
    // this.http.get<Data>('https://jobicy.com/api/v2/remote-jobs?count=20&geo=usa&industry=marketing&tag=seo').subscribe((response : Data) => {
    //   // console.log(response.jobs.map((x: Job) => x.salaryCurrency));
    //   console.log(response.jobs);
    //   this.JobsArray = response.jobs;
    // });
  }

  //TODO:
  //option 1: https://opentdb.com/api.php?amount=10&category=17&difficulty=easy - create a game
  //option 2: https://api.openbrewerydb.org/breweries - get a map and point to these brewries
  //option 3: https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita - cocktail recepies
  //option 4: https://jobicy.com/api/v2/remote-jobs?count=20&geo=usa&industry=marketing&tag=seo - list of remote jobs
  //option 5: https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2023-01 - uk crime and police data

  public OnClick(x: any):void{
    // console.log(x.value);
    // if (!this.Group.valid) {
    //   console.log('invalid');
    //   this.Error$.next(true);
    // }
  }

  private createGroup(validator: ValidatorFn[]){
    return new FormGroup({
      value: new FormControl('', validator)
    })
  }
}
