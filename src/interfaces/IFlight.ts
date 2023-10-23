
export interface IFlight {
    id: number;
    number: number;
    from: string;
    to: string;
    capacity: number;
    passenger: IPassenger[];
    eliminado?: boolean; 
  }  

export interface IPassenger {
    id: number;
    passportNumber: string;
    gender: string;
    address: string;
    flightId: number;
}


