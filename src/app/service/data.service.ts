import { Injectable } from '@angular/core';
import { ClientData } from '../model/Clients';
import { CandidateDiscovery } from '../model/CandidateDiscoveries';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  clients: ClientData[] = [
    { id: 1, clientName: 'Client 1', role: 'Developer', maxCTC: 100000, minCTC: 50000, noOfPositions: 5, status: 'Open' },
    { id: 2, clientName: 'Client 2', role: 'QA', maxCTC: 150000, minCTC: 70000, noOfPositions: 3, status: 'Closed' },
    { id: 3, clientName: 'Client 3', role: 'QA', maxCTC: 150000, minCTC: 70000, noOfPositions: 1, status: 'Closed' },
    { id: 4, clientName: 'Client 4', role: 'QA', maxCTC: 250000, minCTC: 880000, noOfPositions: 3, status: 'Open' },
    { id: 5, clientName: 'Client 5', role: 'Architect', maxCTC: 100000, minCTC: 50000, noOfPositions: 5, status: 'Open' },
    { id: 6, clientName: 'Client 6', role: 'Design', maxCTC: 150000, minCTC: 70000, noOfPositions: 3, status: 'Closed' },
    { id: 7, clientName: 'Client 7', role: 'manager', maxCTC: 150000, minCTC: 70000, noOfPositions: 1, status: 'Closed' },
    { id: 8, clientName: 'Client 8', role: 'manager', maxCTC: 250000, minCTC: 880000, noOfPositions: 3, status: 'Open' }
  ];

  candidateDiscoveries: CandidateDiscovery[] = [
    { id: 1, requirementId: 1, candidateName: 'ABC', status: 'Selected', offeredCTC: 120000, discoveredOn: '2023-05-19', discoveredBy: 'Member 1' },
    { id: 2, requirementId: 1, candidateName: 'Melroy', status: 'Selection Ongoing', offeredCTC: 100000, discoveredOn: '2023-05-18', discoveredBy: 'Member 2' },
    { id: 3, requirementId: 2, candidateName: 'YYZ', status: 'Selected', offeredCTC: 120000, discoveredOn: '2023-05-19', discoveredBy: 'Member 1' },
    { id: 4, requirementId: 2, candidateName: 'Roy', status: 'Selection Ongoing', offeredCTC: 100000, discoveredOn: '2023-05-18', discoveredBy: 'Member 2' },
    { id: 5, requirementId: 3, candidateName: 'Menon', status: 'Selected', offeredCTC: 120000, discoveredOn: '2023-05-19', discoveredBy: 'Member 1' },
    { id: 6, requirementId: 3, candidateName: 'Madona', status: 'Selection Ongoing', offeredCTC: 100000, discoveredOn: '2023-05-18', discoveredBy: 'Member 2' }
  ];

  constructor() {}
}
