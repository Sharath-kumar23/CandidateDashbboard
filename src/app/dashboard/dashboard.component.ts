import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { ChartType } from '../Constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  chartData: any[] = [];
  barChart: any[] = [];
  selectedChartType: ChartType = ChartType.Table;
  lineChartData: { name: string, series: { name: string, value: number }[] }[] = [];
  clientChartData: { name: string, value: number }[] = [];
  chartType = ChartType;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.initializeChartData();
  }

  initializeChartData(): void {
    this.generateLineChartData();
    this.generatePieChartData();
    const clients = this.dataService.clients;
    this.chartData = clients.map(client => ({
      name: client.clientName,
      value: client.noOfPositions
    }));

    this.barChart = clients.map(client => ({
      name: `${client.clientName} - ${client.role}`,
      value: client.noOfPositions
    }));
  }

  generateLineChartData(): void {
    const groupedData = new Map<string, { name: string, value: number }[]>();

    for (const discovery of this.dataService.candidateDiscoveries) {
      const date = discovery.discoveredOn;
      const value = discovery.offeredCTC;

      if (groupedData.has(date)) {
        const existingValues = groupedData.get(date);
        if (existingValues) {
          existingValues.push({ name: discovery.candidateName, value: value });
        }
      } else {
        groupedData.set(date, [{ name: discovery.candidateName, value: value }]);
      }
    }

    groupedData.forEach((values, date) => {
      this.lineChartData.push({ name: date, series: values });
    });
  }

  generatePieChartData(): void {
    const clientStatusesMap = new Map<string, Map<string, number>>();
    for (const client of this.dataService.clients) {
      const status = client.status;

      let clientStatuses = clientStatusesMap.get(client.clientName);
      if (!clientStatuses) {
        clientStatuses = new Map<string, number>();
        clientStatusesMap.set(client.clientName, clientStatuses);
      }
      const clientStatusCount = clientStatuses.get(status) || 0;
      clientStatuses.set(status, clientStatusCount + 1);
    }

    clientStatusesMap.forEach((clientStatuses, clientName) => {
      clientStatuses.forEach((count, status) => {
        this.clientChartData.push({ name: `${clientName} - ${status}`, value: count });
      });
    });
  }

  menuClicked(menuItem: ChartType): void {
    this.selectedChartType = menuItem;
  }
}
