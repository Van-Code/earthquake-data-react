import { organizeEarthquakes } from "./index";

import mockEarthquakeData from "../public/mockEarthquakeData";
import mockSortedEarthquakeData from "../public/mockSortedEarthquakeData";
import mockFilteredByAlaskaEarthquakeData from "../public/mockFilteredByAlaskaEarthquakeData";

// these tests pass outside of codesandbox

describe("Earthquake App", () => {
  // it("filters the earthquakes by place property", () => {
  //   const filtered = organizeEarthquakes("Alaska", mockEarthquakeData);
  //   expect(filtered).toStrictEqual(mockFilteredByAlaskaEarthquakeData);
  // });
  // it("sorts by highest magnitude then most recent", () => {
  //   const results = organizeEarthquakes(undefined, mockEarthquakeData);
  //   expect(results).toStrictEqual(mockSortedEarthquakeData);
  // });
});
