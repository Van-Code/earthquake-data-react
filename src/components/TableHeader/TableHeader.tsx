import React from "react";
import { DataProps } from "../../types";

import "./TableHeader.scss";

export default function TableHeader(props: { dataProps: Array<DataProps> }) {
  const { dataProps } = props;
  return (
    <thead className="TableHeader">
      <tr>
        {dataProps.map((column: DataProps, x: number) => {
          if (!column.inDetails) {
            return <th key={column.title}>{column.title}</th>;
          } else {
            return null;
          }
        })}
        <th>More</th>
      </tr>
    </thead>
  );
}
