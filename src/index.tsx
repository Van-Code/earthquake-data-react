import React, { useState } from "react";
import ReactDOM from "react-dom";

import mockEarthquakeData from "../public/mockEarthquakeData";
import { dataProps } from "./config";

import { Earthquake } from "./types";
import TableRow from "./components/TableRow/TableRow";
import TableHeader from "./components/TableHeader/TableHeader";

import "./index.scss";
import "./fonts.scss";

/**
 *  earthquake data/current search and returns the sorted, filtered, and sliced list
 */
export function organizeEarthquakes(
  search: string | undefined,
  earthquakes: Array<Earthquake>
) {
  if (search) {
    earthquakes = earthquakes.filter((eq: Earthquake) => {
      // make search case insensitive
      const locationString = eq.place.toLowerCase();
      const searchStr = search.toLowerCase();
      return locationString.includes(searchStr);
    });
  }

  const sorted = earthquakes.sort((a, b) => {
    //sort by highest magnitude(mag) then by most recent(time)
    return a.mag < b.mag
      ? 1
      : a.mag === b.mag
      ? a.time < b.time
        ? 1
        : -1
      : -1;
  });
  return sorted;
}

function useEarthquakes() {
  return mockEarthquakeData;
}
function EarthquakeApp() {
  const [search, setSearchString] = useState<string>();
  // initial dataset
  const earthquakes = useEarthquakes();

  return (
    <div className="Earthquakes">
      <input
        type="text"
        placeholder="Search by Location"
        onChange={(e) => {
          setSearchString(e.target.value);
        }}
      />
      <table className="table-outer">
        <TableHeader dataProps={dataProps} />
        <tbody>
          <TableRow
            dataProps={dataProps}
            eqList={organizeEarthquakes(search, earthquakes)}
          />
        </tbody>
      </table>
    </div>
  );
}
const container = document.getElementById("root");
if (container) {
  ReactDOM.render(<EarthquakeApp />, container);
}
