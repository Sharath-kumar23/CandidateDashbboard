
export interface CandidateDiscovery {
    id: number;
    requirementId: number;
    candidateName: string;
    status: 'Selection Ongoing' | 'Dropped' | 'Selected' | 'Joined';
    offeredCTC: number;
    discoveredOn: string;
    discoveredBy: string;
  }
  