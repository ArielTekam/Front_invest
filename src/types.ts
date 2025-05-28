export interface Startup {
    id: string;
    name: string;
    sector: string;
    score: number;
  }
  
  export interface Investor {
    id: string;
    name: string;
    specialization: string;
  }
  
  export interface Deal {
    id: string;
    startupName: string;
    amount: number;
    date: string;
  }