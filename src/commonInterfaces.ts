export interface Movie {
  id: string;
  title: string;
  reviews: number[];
  averageScore?: number;
  filmCompanyId: string;
  filmCompanyName?: string;
  cost: number;
  releaseYear: number;
}

export interface MovieCompany {
  id: string;
  name: string;
}
