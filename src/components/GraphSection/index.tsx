import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { TITLE_STYLE_CLASSNAME, TOOLTIP_STYLE_CLASSNAME } from "../../contants";
import { useCountrySpecificCases } from "../../hooks/useCountrySpecificCases";
import { useGetCovidCases } from "../../hooks/useGetCovidCases";
import { useWorldWideCovidData } from "../../hooks/useWorldWideCovidData";
import { CountryTypes, CovidCaseStatsType } from "../../types";
import { convertToMillion } from "../../utils";

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const GraphSection = () => {
  // use custom hooks to make code more readable and easy to maintain and easy to debug
  const { data, isLoading } = useCountrySpecificCases();
  const { data: chartData, isLoading: isChartLoading } = useGetCovidCases();
  const { data: worldWideCovidData, isLoading: isWorldWideCovidDataLoading } =
    useWorldWideCovidData();

  if (isLoading || isChartLoading || isWorldWideCovidDataLoading) {
    return (
      <div className="h-[90vh] flex justify-center items-center text-3xl font-bold">
        Loading...
      </div>
    );
  }

  const transformedData =
    Object.keys(chartData?.cases ?? {}).length > 0
      ? Object.keys(chartData?.cases ?? {}).map((d) => ({
          date: d,
          cases: chartData?.cases[d],
        }))
      : [];

  return (
    <div className="flex flex-col mt-2 gap-4 p-2 sm:p-5">
      <div>
        <h2 className={TITLE_STYLE_CLASSNAME}>Historical Covid Data</h2>
        <ResponsiveContainer width="100%" height={500} className={"my-3"}>
          <LineChart width={430} height={250} data={transformedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" fontSize={12} />
            <YAxis
              dataKey={"cases"}
              tickFormatter={(val) => convertToMillion(val)}
              tickCount={15}
              fontSize={12}
            />
            <Tooltip />
            <Line type="monotone" dataKey="cases" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <h2 className={TITLE_STYLE_CLASSNAME}>
        Country Wide and World Wide Covid Stats
      </h2>
      <div className="grid sm:grid-rows-1 grid-rows-2 sm:grid-cols-[5fr_1.5fr] gap-2 h-full sm:h-[500px]">
        <MapContainer center={[20, 0]} zoom={2} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {data?.map((country: CountryTypes) => (
            <Marker
              key={country.country}
              position={[country.countryInfo.lat, country.countryInfo.long]}
            >
              <Popup>
                Country:{" "}
                <b className={TOOLTIP_STYLE_CLASSNAME}>{country.country}</b>
                <br />
                Active Cases:{" "}
                <b className={TOOLTIP_STYLE_CLASSNAME}>{country.active}</b>
                <br />
                Recoverd Cases:{" "}
                <b className={TOOLTIP_STYLE_CLASSNAME}>{country.recovered}</b>
                <br />
                Deaths:{" "}
                <b className={TOOLTIP_STYLE_CLASSNAME}>{country.deaths}</b>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
        <div className="h-[100%] border-2 p-2 grid sm:grid-cols-1 grid-cols-2 gap-2 grid-flow-row overflow-auto">
          {Object.keys(worldWideCovidData ?? {})?.map((key) => (
            <p className="text-xs sm:text-sm" key={key}>
              {key}:{" "}
              <span className="font-black">
                {convertToMillion(
                  worldWideCovidData?.[
                    key as keyof CovidCaseStatsType
                  ] as number
                )}
              </span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GraphSection;
