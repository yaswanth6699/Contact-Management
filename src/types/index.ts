import { store } from "../store";

export enum ContactScreenEnums {
  EMPTY = "EMPTY",
  CREATE = "CREATE",
  LIST = "LIST",
  EDIT = "EDIT",
}

export type ContactType = {
  firstName: string;
  lastName: string;
  status: string;
  uuid: string;
};

export type InitialContactTypes = {
  contacts: ContactType[];
  contactScreen: ContactScreenEnums;
  selectedData: Partial<ContactType>;
};
export type ContactContentType = {
  label: string;
  name: string;
  type?: string;
  className?: string;
  value?: string;
  isTextField?: boolean;
};

export type ContactFormTypes = (ContactContentType & {
  children: ContactContentType[];
})[];

export type CountryTypes = {
  countryInfo: { lat: number; long: number };
  country: string;
  cases: number;
  active: number;
  deaths: number;
  recovered: number;
};

type CountryInfoType = {
  _id: number;
  iso2: string;
  iso3: string;
  lat: number;
  long: number;
  flag: string;
};

export type CovidCaseStatsType = {
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  todayRecovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  population: number;
  continent: string;
  oneCasePerPeople: number;
  oneDeathPerPeople: number;
  oneTestPerPeople: number;
  activePerOneMillion: number;
  recoveredPerOneMillion: number;
};

export type CountryDataTypes = {
  updated: number;
  country: string;
  countryInfo: CountryInfoType;
  criticalPerOneMillion: number;
} & CovidCaseStatsType;

export type CovidCasesHistoricTypes = {
  cases: Record<string, number>;
};

export type RootState = ReturnType<typeof store.getState>;
