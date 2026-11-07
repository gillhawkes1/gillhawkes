import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-job',
    imports: [],
    templateUrl: './job.component.html',
    styleUrl: './job.component.scss'
})

export class JobComponent {
  @Input() jobTitle!: string;
  @Input() company!: string;
  @Input() location!: string;
  @Input() startDate!: string;
  @Input() endDate!: string;
  @Input() technologies!: string[];
  @Input() description!: string;
}
