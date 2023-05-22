export interface ClientData {
    id: number;
    clientName: string;
    role: string;
    maxCTC: number;
    minCTC: number;
    noOfPositions: number;
    status: 'Open' | 'Closed' | 'Dropped';
  }