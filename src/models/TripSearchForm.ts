export interface TripSearchForm extends FormData {
  departureDate?: Date;
  returnDate?: Date;
  region?: string;
  people?: number;
  budget?: number;
}

export interface TripSearchResult {
  title: string;
  price: number;
}
