import { Injectable } from '@angular/core';

export interface JobInterface {
  jobTitle: string,
  company: string,
  location: string,
  startDate: string,
  endDate: string,
  technologies: Array<string>,
  description: string
}

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  jobs: JobInterface[] = [
    {
      jobTitle: "Sous Chef",
      company: "Flatiron Kitchen & Taphouse",
      location: "Davidson, NC",
      startDate: "Sept 2015",
      endDate: "Jan 2020",
      technologies: ["Specials", "Leadership", "Scheduling", "Inventory", "Training"],
      description: "Managed and led a team of 9 employees ensuring smooth operations. Developed and implemented strategies to reduce labor and food cost to maximize annual revenue growth. Created daily unique Entree and Appetizer specials to guarantee new plates each day."
    },
    {
      jobTitle: "Full Stack Developer",
      company: "Environmental Comfort Solutions, Inc.",
      location: "Kannapolis, NC",
      startDate: "Jan 2020",
      endDate: "Feb 2022",
      technologies: ["PHP", "MySQL", "JavaScript", "Vuejs", "Python", "AJAX"],
      description: "Designed, implemented, deployed and maintained numerous applications for internal use: Ticketing System, Time Clock, Inventory Management, Employee Reviews, Employee Goals, and Bonus Pool Calculation."
    },
    {
      jobTitle: "Software Engineer II",
      company: "Bank of America",
      location: "Charlotte, NC",
      startDate: "Feb 2022",
      endDate: "December 2024",
      technologies: ["JavaScript","TypeScript", "Vuejs", "Handlebars", "SCSS"],
      description: "Developed and maintained multiple stateful associate-facing ADA-compliant applications for purchasing and configuring payment pinpads for Business Banking & Small Business companies."
    },
    {
      jobTitle: "Full Stack Software Engineer",
      company: "GXO Logistics Inc.",
      location: "Greensboro, NC",
      startDate: "Jan 2025",
      endDate: "",
      technologies: ["Angular", "Typescript", "C#", ".NET", "PL/SQL"],
      description: "Dedicated warehouse application resouce for Apple Inc. Implemented features for client specific needs touching the full lifecycle of the code for all warehouse tasks with a concentration in picking."
    }
  ];
  
  public getJobs(): JobInterface[] {
    return this.jobs.reverse();
  }
}
