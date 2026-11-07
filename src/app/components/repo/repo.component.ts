import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-repo',
    imports: [],
    templateUrl: './repo.component.html',
    styleUrl: './repo.component.scss'
})
export class RepoComponent {
  @Input() name!: string;
  @Input() description!: string;
  @Input() html_url!: string;
}
