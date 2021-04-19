import React from "react";
import Moment from "moment";
import { maxRows } from "../../config";

import { DataProps, Earthquake } from "../../types";

import "./TableRow.scss";

export default function TableRow(props: {
  eqList: Array<Earthquake>;
  dataProps: DataProps;
}) {
  function RenderDetailsRow(props: { quake: Earthquake }) {
    const { quake } = props;
    // create row for expanded details
    return (
      <tr className="row-details" key={quake.id}>
        <td colSpan={5}>
          {["Longitude", "Latitude"].map((name, i) => {
            return (
              <span key={i}>
                {name}: {quake[name.toLowerCase()]}{" "}
              </span>
            );
          })}
        </td>
      </tr>
    );
  }
  function handleClick(e) {
    if (e.target) {
      //toggle class on current row to show/hide
      (e as any).target.closest(".TableRow").classList.toggle("collapsed");
    }
  }

  function RenderMoreButton() {
    return (
      <td className="button-column">
        <button
          onClick={(e) => {
            handleClick(e);
          }}
        >
          Details
        </button>
      </td>
    );
  }
  function DefaultRow(props: {
    quake: Earthquake;
    dataProps: Array<DataProps>;
  }) {
    const { dataProps, quake } = props;

    let button;
    return (
      <tr className="quake-row">
        {dataProps.map((dataProp: DataProps, y: number) => {
          // get value field from api
          let value = quake[dataProp.id] || "";

          // format time field
          if (dataProp.id === "time") {
            // https://maggiepint.com/2016/05/14/moment-js-shows-the-wrong-date/
            value = Moment.parseZone(quake[dataProp.id]);
            value = Moment(value).format("MMMM D, YYYY @ kk:mm");
          }
          // populate the details button button if on last column
          if (dataProp.id === "mag") {
            button = <RenderMoreButton />;
          }
          // skip if inDetails prop true
          if (!dataProp.inDetails) {
            return <td key={y}>{value}</td>;
          }
          return null;
        })}
        {button}
      </tr>
    );
  }

  const { dataProps, eqList } = props;
  const list = eqList ? eqList.slice(0, maxRows) : [];

  if (list.length > 0) {
    //create nested table to maintain logical order
    return list.map((quake: Earthquake, x: number) => {
      return (
        <tr className="TableRow collapsed" key={`outer-${quake.id}`}>
          <td>
            <table>
              <tbody>
                <DefaultRow
                  quake={quake}
                  x={x}
                  dataProps={dataProps}
                  key={"row-" + quake.id}
                />
                <RenderDetailsRow quake={quake} />
              </tbody>
            </table>
          </td>
        </tr>
      );
    });
  }

  return (
    <tr>
      <td>No results found</td>
    </tr>
  );
}
