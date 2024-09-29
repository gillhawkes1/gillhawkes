import { Component, inject, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  providers: [GithubService]
})
export class ProjectsComponent {
  repos: any[] = [];

  // constructor(private githubService: GithubService) { }
  private githubService = inject(GithubService);

  ngOnInit(): void {
    this.githubService.getRepos().subscribe((data) => {
      this.repos = data.filter((repo) => {
        return this.showProjects.includes(repo.name);
      });
    });
  }

  showProjects: string[] = [
    'gillhawkes',
    'katiehawkes',
    'thehawkesnest',
    'runclub',
    'financehelper'
  ];
}
