import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CovidCaseStatsType } from "../types";

export const useWorldWideCovidData = () => {
  // always use try, catch block to make sure the code wont break when there is any error and add appropriate console
  // or in actual products we can use sentry to capture error messages for better debugging
  const fetchWWCovidData = async () => {
    try {
      const { data } = await axios.get("https://disease.sh/v3/covid-19/all");
      return data;
    } catch (err) {
      console.log(err, " fetchWWCovidData fn error");
    }
  };
  return useQuery<CovidCaseStatsType>({
    queryKey: ["fetch-worldWide-covid-data"],
    queryFn: fetchWWCovidData,
  });
};
