import React, { ChangeEvent, useState } from "react";
import { Col, Dropdown, FormControl, Row } from "react-bootstrap";
import DisplayIcon from "./DisplayIcon";
import Fuse from "fuse.js";

type ICustomToggleProps = {
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {};
};

const CustomToggle = React.forwardRef(
  (props: ICustomToggleProps, ref: React.Ref<HTMLAnchorElement>) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        props.onClick(e);
      }}
    >
      {props.children}
    </a>
  )
);

type CustomMenuProps = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  labeledBy?: string;
  onSearch?: (event: ChangeEvent<any>) => void;
  searchValue?: string;
};

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = React.forwardRef(
  (props: CustomMenuProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div
        ref={ref}
        style={props.style}
        className={props.className}
        aria-labelledby={props.labeledBy}
      >
        <FormControl
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Type to filter..."
          onChange={props.onSearch}
          value={props.searchValue || ""}
        />
        <ul className="list-unstyled">
          {React.Children.toArray(props.children)}
        </ul>
      </div>
    );
  }
);

class GearSetSelector extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      filteredItems: [],
      items: [
        {
          item: "life-mote",
          name: "Life Mote",
        },
        {
          item: "fire-mote",
          name: "Fire Mote",
        },
      ],
    };
  }

  onSearch = (e) => {
    const fuse = new Fuse(this.state.items, { keys: ["name"] });
    let results = [];
    let searchResults = fuse.search(e.target.value);
    if (searchResults.length > 0) {
      results = searchResults.map((result) => result.item);
    }
    this.setState({
      searchValue: e.target.value,
      filteredItems: results,
    });
  };

  setActive = () => {};

  render() {
    let itemList =
      this.state.filteredItems.length > 0
        ? this.state.filteredItems
        : this.state.items;
    return (
      <Dropdown>
        <Col xs={6}>
          <Row>
            <Col xs={2}>
              <Dropdown.Toggle
                as={CustomToggle}
                id="dropdown-custom-components"
              >
                <DisplayIcon
                  width={"72px"}
                  height={"72px"}
                  clickable={true}
                  resource={this.state.items[0].item}
                />
              </Dropdown.Toggle>
            </Col>
          </Row>

          <Dropdown.Menu
            as={CustomMenu}
            searchValue={this.state.searchValue}
            onSearch={this.onSearch}
          >
            {itemList.map((item) => {
              console.log(item);
              return (
                <Dropdown.Item>
                  <Row>
                    <Col xs={3}>
                      <DisplayIcon
                        height={"50px"}
                        width={"50px"}
                        resource={item.item}
                      />
                    </Col>
                    <Col xs={9}>
                      <p>{item.name}</p>
                    </Col>
                  </Row>
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Col>
      </Dropdown>
    );
  }
}

export default GearSetSelector;
