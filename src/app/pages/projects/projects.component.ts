import { Component } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { NgFor, CommonModule } from '@angular/common';
import { RepoComponent } from '../../components/repo/repo.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, CommonModule, RepoComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  providers: []
})
export class ProjectsComponent {
  title = 'My Projects'
  repos: any[] = [];
  private subscription: Subscription | null = null;

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.subscription = this.githubService.getRepos().subscribe((data) => {
      this.repos = data.filter((repo) => {
        return this.showProjects.includes(repo.name);
      });
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  showProjects: string[] = [
    'gillhawkes',
    'katiehawkes',
    'thehawkesnest',
    'runclub',
    'financehelper'
  ];
}
