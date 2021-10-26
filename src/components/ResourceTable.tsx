import React from "react";
import { Table } from "react-bootstrap";
import DisplayIcon from "./DisplayIcon";

export const ResourceTable = ({
  resources,
  icons,
}: {
  resources: any[];
  icons: any;
}) => {
  return (
    <Table
      className={"card-1"}
      variant={"dark"}
      striped
      bordered
      responsive
      hover
    >
      <thead>
        <tr>
          <th></th>
          <th>Item</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {resources &&
          resources.map((resource, index) => (
            <tr key={index}>
              {icons && (
                <td>
                  <DisplayIcon
                    width={"64px"}
                    height={"64px"}
                    clickable={true}
                    resource={resource.resource}
                  />
                </td>
              )}
              <td style={{ verticalAlign: "middle" }}>
                {icons[resource.resource].name}
              </td>
              <td style={{ verticalAlign: "middle" }}>{resource.quantity}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};
