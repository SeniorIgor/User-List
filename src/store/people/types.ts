export enum Types {
  LOAD_USERS_REQUEST = 'PEOPLE/LOAD_USERS_REQUEST',
  LOAD_USERS_SUCCESS = 'PEOPLE/LOAD_USERS_SUCCESS',
  LOAD_USERS_FAILURE = 'PEOPLE/LOAD_USERS_FAILURE',
}

export interface RequestPayload {
  page: number;
  search: string;
}

export interface Person {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export interface Response {
  count: number;
  next: string | null;
  previous: string | null;
  results: Person[];
}
