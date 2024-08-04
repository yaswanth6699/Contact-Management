import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CovidCasesHistoricTypes } from "../types";

export const useGetCovidCases = () => {
  // always use try, catch block to make sure the code wont break when there is any error and add appropriate console
  // or in actual products we can use sentry to capture error messages for better debugging
  const fetchCovidCases = async () => {
    try {
      const { data } = await axios.get(
        "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
      );
      return data;
    } catch (err) {
      console.log(err, " fetchCovidCases fn error");
    }
  };
  return useQuery<CovidCasesHistoricTypes>({
    queryKey: ["fetch-covid-cases"],
    queryFn: fetchCovidCases,
  });
};
