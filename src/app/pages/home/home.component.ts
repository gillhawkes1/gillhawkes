import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { JobComponent, } from "../../components/job/job.component";
import { JobsService, JobInterface } from "../../components/job/job.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterOutlet, JobComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  name = "Gill Hawkes"
  title = "Full Stack Software Engineer";
  jobs: JobInterface[] = [];

  constructor(private jobsService: JobsService) {}

  ngOnInit(): void {
    this.jobs = this.jobsService.getJobs();
  }
}
