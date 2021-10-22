import React from "react";
import { Card, Col, Row, Table } from "react-bootstrap";
import DisplayIcon from "./DisplayIcon";
import { connect } from "react-redux";

export const ResourceTable = ({
  resources,
  icons,
}: {
  resources: any[];
  icons: any;
}) => {
  return (
    <Table className={"card-1"} variant={"dark"} striped bordered hover>
      <thead>
        <tr>
          <th></th>
          <th>Item</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {resources &&
          resources.map((resource) => (
            <tr>
              <td>
                <DisplayIcon iconConfig={icons[resource.resource]} />
              </td>
              <td>{icons[resource.resource].name}</td>
              <td>{resource.quantity}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};
