import { Component, OnInit } from '@angular/core';
import { Job } from 'src/interfaces/job.interface';
import { HttpClient } from '@angular/common/http';
import { Data } from 'src/interfaces/data.interface';
@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.scss']
})
export class MainWindowComponent implements OnInit {
  public JobsArray: Job[];
  public JobsToDisplay: Job[];
  constructor(private http: HttpClient){
    this.JobsArray = [];
    this.JobsToDisplay = this.JobsArray
  }
  ngOnInit(): void {
    this.http.get<Data>('https://jobicy.com/api/v2/remote-jobs?count=20&geo=usa&industry=marketing&tag=seo').subscribe((response : Data) => {
      // console.log(response.jobs.map((x: Job) => x.salaryCurrency));
      console.log(response.jobs);
      this.JobsArray = response.jobs;
      this.JobsToDisplay = this.JobsArray
    });
  }

  public OnClick(str: string): Job[]{
    switch (str) {
      case 'Marketing & Sales':
        this.JobsToDisplay = this.JobsArray.filter((x: Job) => x.jobIndustry[0] === 'Marketing &amp; Sales');
        return  this.JobsToDisplay;
        case 'Sales':
          this.JobsToDisplay = this.JobsArray.filter((x: Job) => x.jobIndustry[0] === 'Sales');
          return  this.JobsToDisplay;
        case 'SEO':
          this.JobsToDisplay = this.JobsArray.filter((x: Job) => x.jobIndustry[0] === 'SEO');
          return  this.JobsToDisplay;
        case 'Copywriting & Content':
          this.JobsToDisplay = this.JobsArray.filter((x: Job) => x.jobIndustry[0] === 'Copywriting &amp; Content');
          return  this.JobsToDisplay;
      default:
        return this.JobsArray;
    }
  }
}
