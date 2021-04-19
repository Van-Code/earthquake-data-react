import React from "react";
import TestRenderer from "react-test-renderer";
import { dataProps } from "../../config";

import TableHeader from "./TableHeader";

describe("Table Header", () => {
  const testRenderer = TestRenderer.create(
    <TableHeader dataProps={dataProps} />
  );
  const testInstance = testRenderer.root;
  const children = testInstance.findByType("tr").props.children;

  it("render number of columns to match heading array", () => {
    expect(children[0].length).toBe(dataProps.length);
  });

  it("display 7 columns with correct titles from config", () => {
    const objs = children[0];
    expect(objs.length).toBe(dataProps.length);
    dataProps.forEach((column, i) => {
      if (objs[i]) {
        expect(objs[i].key).toBe(column.title);
      }
    });
  });
});
