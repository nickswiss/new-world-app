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
    <Table variant={"dark"} striped bordered hover>
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
                    width={"32px"}
                    height={"32px"}
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
          ))}{" "}
      </tbody>
    </Table>
  );
};
