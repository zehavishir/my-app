export interface Job {
    annualSalaryMax: string;
    annualSalaryMin: string;
    companyLogo: string;
    companyName: string;
    id: number;
    jobDescription: string;
    jobExcerpt: string;
    jobGeo: string;
    jobIndustry: string[];//
    jobLevel:string;//
    jobSlug: string;
    jobTitle: string;
    jobType: string[];
    pubDate: string[];//
    salaryCurrency: string;
    url: string;
  }