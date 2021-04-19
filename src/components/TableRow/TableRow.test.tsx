import React from "react";
import TestRenderer from "react-test-renderer";
import TableRow from "./TableRow";
import mockEarthquakeData from "../../../public/mockEarthquakeData";
import { dataProps } from "../../config";

describe("Table Row", () => {
  const testRenderer = TestRenderer.create(
    <TableRow dataProps={dataProps} eqList={mockEarthquakeData} />
  );
  const testInstance = testRenderer.root;

  it("render button with text 'details'", () => {
    const button = testInstance.findAllByType("button")[0];
    expect(button.props.children).toContain("Details");
  });

  it("should format time", () => {
    const valid = "September 8, 2017 @ 12:46";
    const tds = testInstance.findAllByProps({ className: "quake-row" });
    const cellOutput = tds[0].props.children[0][1].props.children;
    expect(cellOutput).toBe(valid);
  });

  it("shows longitude and latitude when clicking details button", () => {
    const button = testInstance.findAllByType("button")[0];
    // i'm stumped
    // button.handleClick();
    // button.props.onClick({ e: { target: button } });
    // expect(testInstance.findAllByProps({className: "TableRow"})[0].toBe(true);
  });

  it("show no more than 20 earthquakes", () => {
    const results = testInstance.findAllByProps({
      className: "TableRow collapsed"
    });
    expect(results.length).toBeGreaterThanOrEqual(1);
    expect(results.length).toBeLessThanOrEqual(20);
  });
});
