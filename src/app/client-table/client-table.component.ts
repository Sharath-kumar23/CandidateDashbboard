import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.scss']
})
export class ClientTableComponent {
  constructor(public dataService: DataService) { }

  getStatusSeverity(status: string): string {
    switch (status) {
      case 'Open':
        return 'success';
      case 'Closed':
        return 'danger';
      default:
        return '';
    }
  }
}
