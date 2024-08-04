import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CountryDataTypes } from "../types";

export const useCountrySpecificCases = () => {
  // always use try, catch block to make sure the code wont break when there is any error and add appropriate console
  // or in actual products we can use sentry to capture error messages for better debugging
  const fetchCases = async () => {
    try {
      const { data } = await axios.get(
        "https://disease.sh/v3/covid-19/countries"
      );
      return data;
    } catch (err) {
      console.error(err, " fetchCases fn error");
    }
  };

  return useQuery<CountryDataTypes[]>({
    queryKey: ["covid-country-specific-cases"],
    queryFn: fetchCases,
  });
};
