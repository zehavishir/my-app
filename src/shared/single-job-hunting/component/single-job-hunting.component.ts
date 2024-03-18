import { Component, Input } from '@angular/core';
import { Job } from 'src/interfaces/job.interface';
@Component({
  selector: 'app-single-job-hunting',
  templateUrl: './single-job-hunting.component.html',
  styleUrls: ['./single-job-hunting.component.scss']
})
export class SingleJobHuntingComponent {
  //לעשות סינון לפי?
  @Input() set job(job: Job) {
    this.Description = job.jobExcerpt.replace('&#8230;','...');
    this.Job = job;
  };
  public Description: string;
  public Job: Job;
  constructor() {
    this.Job = {} as Job;
    this.Description = '';
    // this.Description = this.job.jobDescription;
  }
}
