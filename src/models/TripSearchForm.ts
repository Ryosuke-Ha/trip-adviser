export interface TripSearchForm extends FormData {
  departureDate?: Date;
  returnDate?: Date;
  region?: string;
  people?: number;
  budget?: number;
}

export interface TripSearchResult {
  place: string;
  reasons: string[];
  recommends: string[];
  prices: string[];
  cautions: string[];
}
