import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Job } from 'src/interfaces/job.interface';

@Component({
  selector: 'app-main-window-sidebar',
  templateUrl: './main-window-sidebar.component.html',
  styleUrls: ['./main-window-sidebar.component.scss']
})
export class MainWindowSidebarComponent implements OnInit{
  public Sales: number;
  public MarketingAndSales: number;
  public Seo: number;
  public CopywritingAndContent: number;
  @Input() set JobsToDisplay(jobs: Job[]){
    this.Sales = jobs.filter((x: Job) => x.jobIndustry[0] === 'Sales').length;
    this.MarketingAndSales = jobs.filter((x: Job) => x.jobIndustry[0] === 'Marketing &amp; Sales').length;
    this.Seo = jobs.filter((x: Job) => x.jobIndustry[0] === 'SEO').length;
    this.CopywritingAndContent = jobs.filter((x: Job) => x.jobIndustry[0] === 'Copywriting &amp; Content').length; 
    console.log(this.Sales);
    console.log(this.MarketingAndSales);
    console.log(this.Seo);
    console.log(this.CopywritingAndContent);
  }
  @Output() OnClick = new EventEmitter<string>;
  constructor(){
    
  }
  ngOnInit(): void {
    // this.Sales = this.JobsToDisplay.filter((x: Job) => x.jobIndustry[0] === 'Sales').length;
    // console.log(this.Sales)
  }

  public OnClickTab(str: string): void{
    this.OnClick.emit(str)
  }
}
