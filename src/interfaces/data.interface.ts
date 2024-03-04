import { Job } from "./job.interface";
export interface Data {
    apiVersion: string;
    clientKey: string;
    documentationUrl: string;
    friendlyNotice: string;
    jobCount: number;
    jobs: Job[];
    lastUpdate: string;
    xRayHash: string;
  } 