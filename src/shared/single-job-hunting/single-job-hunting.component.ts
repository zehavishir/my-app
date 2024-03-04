import { Component, Input } from '@angular/core';
import { Job } from 'src/interfaces/job.interface';
@Component({
  selector: 'app-single-job-hunting',
  templateUrl: './single-job-hunting.component.html',
  styleUrls: ['./single-job-hunting.component.scss']
})
export class SingleJobHuntingComponent {
  @Input() job: Job;
  public Description: string;
  constructor() {
    this.job = {} as Job;
    this.Description = this.job.jobDescription;
  }
}
