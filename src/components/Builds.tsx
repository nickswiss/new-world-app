import React, { ReactNode } from "react";
import { objectIsEmpty } from "../lib/utils";
import {
  Col,
  Container,
  OverlayTrigger,
  Popover,
  Row,
  Spinner,
} from "react-bootstrap";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SELECTED = "SELECTED";
const SELECTABLE = "SELECTABLE";
const DISABLED = "DISABLED";

interface IMovePopoverProps {
  children?: ReactNode;
  item: any;
}

const MovePopover = React.forwardRef(
  (props: IMovePopoverProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <Popover ref={ref} body {...props} className={"build-item-popover"}>
        <Row>
          <Col>
            <h3 style={{ color: "var(--gold)", fontFamily: "IM Fell DW Pica" }}>
              {props.item.name.toUpperCase()}
            </h3>
          </Col>
        </Row>
        <Row style={{ paddingTop: "2vh", paddingBottom: "2vh" }}>
          <Col xs={6} style={{ display: "flex", justifyContent: "start" }}>
            <img
              style={{
                height: "90px",
                width: "90px",
              }}
              src={props.item.detail}
            />
          </Col>
          {"cooldown" in props.item && (
            <Col
              xs={6}
              style={{
                marginTop: "auto",
                marginBottom: "auto",
              }}
            >
              <Row style={{ height: "18px" }}>
                <Col xs={12} style={{ height: "100%" }}>
                  {" "}
                  <p
                    style={{
                      color: "lightgray",
                      fontFamily: "Arial",
                      lineHeight: "18px",
                      fontSize: "18px",
                    }}
                  >
                    Cooldown
                  </p>
                </Col>
              </Row>
              <Row style={{ height: "20px" }}>
                <Col xs={12} style={{ height: "100%" }}>
                  {" "}
                  <p
                    style={{
                      color: "lightgray",
                      fontFamily: "Arial",
                      lineHeight: "18px",
                      fontSize: "18px",
                    }}
                  >
                    <FontAwesomeIcon
                      color={"white"}
                      icon={"hourglass-end"}
                      style={{
                        paddingRight: "2px",
                        lineHeight: "20px",
                        fontSize: "20px",
                      }}
                    />
                    {props.item.cooldown.toFixed(1)}s
                  </p>
                </Col>
              </Row>
            </Col>
          )}
        </Row>
        <Row>
          <Col xs={12}>
            <p style={{ color: "lightgray", fontFamily: "Arial" }}>
              {props.item.description}
            </p>
          </Col>
        </Row>
      </Popover>
    );
  }
);
/*

  New World Gear Affix Chart:
    https://newworldfans.com/articles/new-world-armor-Affix-chart


 */

class Builds extends React.Component<any, any> {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <div
              style={{
                borderLeft: "1px solid rgb(39, 36, 30)",
                height: "100%",
                width: "100%",
                margin: "auto",
              }}
            >
              <img
                src={
                  "https://media.newworlddocs.com/icons/items_hires/2hcelestialstaff_lifet5.png"
                }
                style={{ width: "100%" }}
              />
            </div>
          </Col>
          <Col sm={12} lg={5}>
            <Build />
          </Col>

          <Col sm={12} lg={5}>
            <Build />
          </Col>
        </Row>
      </Container>
    );
  }
}

class Build extends React.Component<any, any> {
  build = [
    // Row 0
    [
      {
        detail:
          "https://media.newworlddocs.com/icons/abilities/lifestaffability3.png",
        background:
          "https://media.newworlddocs.com/icons/abilities/abilities_bg2.png",
        backgroundColor: "black",
        type: "move",
        active: true,
        disabled: true,
        name: "Divine Embrace",
        description: "Heal target for 150% weapon damage",
        manaCost: "Costs 25 mana",
        cooldown: 6.0,
        connectors: ["down"],
      },
      {},
      {},
      {
        detail:
          "https://media.newworlddocs.com/icons/abilities/lifestaffability6_mod2.png",
        background:
          "https://media.newworlddocs.com/icons/abilities/abilities_bg_passive6.png",
        type: "passive",
        active: false,
        description: "Light staffs Light and Heavy attack no longer take mana",
        name: "Absolved",
        connectors: ["down", "downRight"],
      },
      {},
    ],
    // Row 1 (0 indexed)
    [
      {
        detail:
          "https://media.newworlddocs.com/icons/abilities/lifestaffability3_mod1.png",
        background:
          "https://media.newworlddocs.com/icons/abilities/abilities_bg_passive5.png",
        type: "passive",
        active: false,
        description: "Divine Embrace costs 20 mana",
        name: "Privilege",
        connectors: ["up", "down"],
      },
      {},
      {
        detail:
          "https://media.newworlddocs.com/icons/abilities/lifestaffability2.png",
        background:
          "https://media.newworlddocs.com/icons/abilities/abilities_bg6.png",
        type: "move",
        active: true,
        name: "Sacred ground",
        description:
          "Create an area on the ground that lasts for 15 seconds and heals for 20% weapon damage every second",
        manaCost: "Costs 15 mana",
        cooldown: 20.0,
        connectors: ["down"],
      },
      {
        detail:
          "https://media.newworlddocs.com/icons/abilities/lifestaffpassive11.png",
        background:
          "https://media.newworlddocs.com/icons/abilities/abilities_bg_passive0.png",
        type: "passive",
        active: false,
        description:
          "Lifestaffs Heavy Attack now removes one debuff when passing through an ally",
        name: "Mending Touch",

        connectors: ["up"],
      },
      {
        detail:
          "https://media.newworlddocs.com/icons/abilities/warhammerpassive8.png",
        background:
          "https://media.newworlddocs.com/icons/abilities/abilities_bg_passive6.png",
        type: "passive",
        active: false,
        name: "Blissful Touch",
        description:
          "Light attacks now heal target for 20% weapon damage when passing through an ally",
        connectors: ["upLeft"],
      },
    ],
    // Row 2 (0 indexed)
    [
      { type: "connector", connectors: ["up", "down"] },
      {
        detail:
          "https://media.newworlddocs.com/icons/abilities/lifestaffpassive3.png",
        background:
          "https://media.newworlddocs.com/icons/abilities/abilities_bg_passive0.png",
        type: "passive",
        active: false,

        name: "Desperate Speed",
      },
      {
        detail:
          "https://media.newworlddocs.com/icons/abilities/lifestaffability6.png",
        background:
          "https://media.newworlddocs.com/icons/abilities/abilities_bg_passive0.png",
        type: "passive",
        active: false,

        name: "Holy Ground",

        connectors: ["up", "down"],
      },
      {
        detail:
          "https://media.newworlddocs.com/icons/abilities/lifestaffpassive2.png",
        background:
          "https://media.newworlddocs.com/icons/abilities/abilities_bg_passive0.png",
        type: "passive",
        active: false,
        name: "Revitalize",
      },
      {
        detail:
          "https://media.newworlddocs.com/icons/abilities/lifestaffpassive5.png",
        background:
          "https://media.newworlddocs.com/icons/abilities/abilities_bg6.png",
        type: "move",
        active: true,
        name: "Splash of Light",
        description: "Heal target for 150% weapon damage",
        manaCost: "Costs 25 mana",
        cooldown: 6.0,

        connectors: ["down"],
      },
    ],
    // Row 3 (0 indexed)
    [
      {
        detail:
          "https://media.newworlddocs.com/icons/abilities/hatchetpassive5.png",
        background:
          "https://media.newworlddocs.com/icons/abilities/abilities_bg_passive0.png",
        type: "passive",
        active: false,

        name: "Shared Struggle",
        description:
          "If target is below 50 percent health heal one additional ally within 8m for the same amount",

        connectors: ["up", "down"],
      },
      {},
      {
        detail:
          "https://media.newworlddocs.com/icons/abilities/lifestaffability6_mod1.png",
        background:
          "https://media.newworlddocs.com/icons/abilities/abilities_bg_passive0.png",
        type: "passive",
        active: false,
        description:
          "When allies are in Sacred Ground they are healed for 50% more from all healing",
        name: "Blessed",

        connectors: ["up"],
      },
      {
        detail:
          "https://media.newworlddocs.com/icons/abilities/lifestaffpassive6.png",
        background:
          "https://media.newworlddocs.com/icons/abilities/abilities_bg_passive0.png",
        type: "passive",
        active: false,
        description:
          "When hit in battle activate a healing aura for you and nearby friends in a 4m radius healing for 10% weapon damage each second for 6s. (cooldown 120s)",
        name: "Enchanted Justice",
      },
      {
        detail:
          "https://media.newworlddocs.com/icons/abilities/lifestaffability1.png",
        background:
          "https://media.newworlddocs.com/icons/abilities/abilities_bg_passive0.png",
        type: "passive",
        active: false,
        description:
          "If you heal a target below 50% health gain 3% of your max mana",
        name: "Shared Recovery",

        connectors: ["up", "down"],
      },
    ],
    // Row 4 (0 indexed)
    [
      {
        detail:
          "https://media.newworlddocs.com/icons/abilities/hatchetability3_mod2.png",
        background:
          "https://media.newworlddocs.com/icons/abilities/abilities_bg_passive0.png",
        type: "passive",
        active: false,
        description:
          "If 2nd target is below 50% health heal another ally within 8m of that ally",
        name: "Rebound",

        connectors: ["up"],
      },
      {
        detail:
          "https://media.newworlddocs.com/icons/abilities/lifestaffpassive1.png",
        background:
          "https://media.newworlddocs.com/icons/abilities/abilities_bg_passive0.png",
        type: "passive",
        active: false,
        description:
          "While holding a lifestaff: increase the amount of incoming healing to all friendlies in your group by 5%",
        name: "Sacred Protection",
      },
      {},
      {
        detail:
          "https://media.newworlddocs.com/icons/abilities/swordpassive10.png",
        background:
          "https://media.newworlddocs.com/icons/abilities/abilities_bg_passive0.png",
        type: "passive",
        active: false,
        name: "Intensify",
      },
      {
        detail:
          "https://media.newworlddocs.com/icons/abilities/rapier_evasionpass1_perfectionist.png",
        background:
          "https://media.newworlddocs.com/icons/abilities/abilities_bg_passive0.png",
        type: "passive",
        active: false,

        name: "Mending Touch",

        connectors: ["up"],
      },
    ],
  ];

  render() {
    let buildState = [
      [SELECTED, "0", "0", SELECTABLE, "0"],
      [SELECTED, "0", DISABLED, DISABLED, DISABLED],
      [SELECTED, DISABLED, DISABLED, DISABLED, DISABLED],
      [SELECTABLE, "0", DISABLED, DISABLED, DISABLED],
      [DISABLED, DISABLED, "0", DISABLED, DISABLED],
    ];
    let rows = this.build.map((row, rowIndex) => (
      <Row style={{ height: "128px" }}>
        {row.map((item, columnIndex) => {
          /* CRAZY LOGIC HERE */
          /* TODO: REFACTOR, BUT ITS PURTY */
          let connectorUpActive = false;
          let connectorUpLeftActive = false;
          let connectorUpRightActive = false;
          let connectorDownActive = false;
          let connectorDownLeftActive = false;
          let connectorDownRightActive = false;
          if (rowIndex === 0) {
            //first row, only connectors down
            connectorDownActive = [SELECTED, SELECTABLE].includes(
              buildState[rowIndex + 1][columnIndex]
            )
              ? true
              : false;
            if (columnIndex == 0) {
              // only check up right
              connectorDownRightActive = [SELECTED, SELECTABLE].includes(
                buildState[rowIndex + 1][columnIndex + 1]
              );
            } else if (columnIndex == buildState[rowIndex].length - 1) {
              connectorDownLeftActive = [SELECTED, SELECTABLE].includes(
                buildState[rowIndex + 1][columnIndex - 1]
              );
            } else {
              connectorDownRightActive = [SELECTED, SELECTABLE].includes(
                buildState[rowIndex + 1][columnIndex + 1]
              );
              connectorDownLeftActive = [SELECTED, SELECTABLE].includes(
                buildState[rowIndex + 1][columnIndex - 1]
              );
            }
          } else if (rowIndex === buildState.length - 1) {
            // last row, only connectors up
            connectorUpActive = [SELECTED].includes(
              buildState[rowIndex - 1][columnIndex]
            )
              ? true
              : false;

            if (columnIndex == 0) {
              // only check up right
              connectorUpRightActive = [SELECTED].includes(
                buildState[rowIndex - 1][columnIndex + 1]
              );
            } else if (columnIndex == buildState[rowIndex].length - 1) {
              connectorUpLeftActive = [SELECTED].includes(
                buildState[rowIndex - 1][columnIndex - 1]
              );
            } else {
              // in a middle cell, can check all directions
              connectorUpRightActive = [SELECTED].includes(
                buildState[rowIndex - 1][columnIndex + 1]
              );

              connectorUpLeftActive = [SELECTED].includes(
                buildState[rowIndex - 1][columnIndex - 1]
              );
            }
          } else {
            // other rows
            connectorUpActive = [SELECTED].includes(
              buildState[rowIndex - 1][columnIndex]
            );
            connectorDownActive = [SELECTED, SELECTABLE].includes(
              buildState[rowIndex + 1][columnIndex]
            );

            if (columnIndex == 0) {
              // only check up right
              connectorUpRightActive = [SELECTED].includes(
                buildState[rowIndex - 1][columnIndex + 1]
              );
              connectorDownRightActive = [SELECTED, SELECTABLE].includes(
                buildState[rowIndex + 1][columnIndex + 1]
              );
            } else if (columnIndex == buildState[rowIndex].length - 1) {
              // only check up left
              connectorUpLeftActive = [SELECTED].includes(
                buildState[rowIndex - 1][columnIndex - 1]
              );
              connectorDownLeftActive = [SELECTED, SELECTABLE].includes(
                buildState[rowIndex + 1][columnIndex - 1]
              );
            } else {
              // in a middle cell, can check all directions
              connectorUpRightActive = [SELECTED].includes(
                buildState[rowIndex - 1][columnIndex + 1]
              );
              connectorDownRightActive = [SELECTED, SELECTABLE].includes(
                buildState[rowIndex + 1][columnIndex + 1]
              );
              connectorUpLeftActive = [SELECTED].includes(
                buildState[rowIndex - 1][columnIndex - 1]
              );
              connectorDownLeftActive = [SELECTED, SELECTABLE].includes(
                buildState[rowIndex + 1][columnIndex - 1]
              );
            }
          }
          return (
            <ItemCell
              connectorUpActive={connectorUpActive}
              connectorDownActive={connectorDownActive}
              connectorDownLeftActive={connectorDownLeftActive}
              connectorDownRightActive={connectorDownRightActive}
              connectorUpLeftActive={connectorUpLeftActive}
              connectorUpRightActive={connectorUpRightActive}
              rowIndex={rowIndex}
              columnIndex={columnIndex}
              cellType={buildState[rowIndex][columnIndex]}
              item={item}
            />
          );
        })}
      </Row>
    ));
    return (
      <Container
        fluid
        style={{ minWidth: "770px", border: "1px solid rgb(39, 36, 30)" }}
      >
        {rows.map((row) => row)}
      </Container>
    );
  }
}

const ConnectorUp = (props) => {
  return (
    <div
      style={{
        position: "absolute",
        borderLeft: `4px solid ${props.active ? "rgb(230, 217, 186)" : "grey"}`,
        width: "1px",
        height: "50%",
        left: "50%",
        zIndex: -20,
        top: 0,
      }}
    />
  );
};
const ConnectorDown = (props) => (
  <div
    style={{
      position: "absolute",
      borderLeft: `4px solid ${props.active ? "rgb(230, 217, 186)" : "grey"}`,
      width: "1px",
      height: "50%",
      left: "50%",
      zIndex: -10,
      bottom: 0,
    }}
  />
);

const ConnectorUpLeft = (props) => (
  <div
    style={{
      position: "absolute",
      borderRight: `4px solid ${props.active ? "rgb(230, 217, 186)" : "grey"}`,
      borderTop: `4px solid ${props.active ? "rgb(230, 217, 186)" : "grey"}`,
      width: "50%",
      height: "51%",
      right: "50%",
      zIndex: -20,
      top: "-3%",
    }}
  />
);

const ConnectorUpRight = (props) => (
  <div
    style={{
      position: "absolute",
      borderLeft: `4px solid ${props.active ? "rgb(230, 217, 186)" : "grey"}`,
      borderTop: `4px solid ${props.active ? "rgb(230, 217, 186)" : "grey"}`,
      width: "50%",
      height: "50%",
      left: "50%",
      zIndex: -20,
      top: 0,
    }}
  />
);

const ConnectorDownRight = (props) => (
  <div
    style={{
      position: "absolute",
      borderLeft: `4px solid ${props.active ? "rgb(230, 217, 186)" : "grey"}`,
      borderBottom: `4px solid ${props.active ? "rgb(230, 217, 186)" : "grey"}`,
      width: "50%",
      height: "50%",
      left: "50%",
      zIndex: -20,
      top: "50%",
    }}
  />
);

const ConnectorDownLeft = (props) => (
  <div
    style={{
      position: "absolute",
      borderLeft: `4px solid ${props.active ? "rgb(230, 217, 186)" : "grey"}`,
      borderBottom: `4px solid ${props.active ? "rgb(230, 217, 186)" : "grey"}`,
      width: "50%",
      height: "50%",
      left: "50%",
      zIndex: -20,
      top: "47%",
    }}
  />
);

let Connector = (props) => {
  console.log(props);
  return {
    up: () => <ConnectorUp active={props.connectorUpActive} />,
    down: () => <ConnectorDown active={props.connectorDownActive} />,
    upRight: () => <ConnectorUpRight active={props.connectorUpRightActive} />,
    upLeft: () => <ConnectorUpLeft active={props.connectorUpLeftActive} />,
    downLeft: () => (
      <ConnectorDownLeft active={props.connectorDownLeftActive} />
    ),
    downRight: () => (
      <ConnectorDownRight active={props.connectorDownRightActive} />
    ),
  };
};

const ItemCell = (props) => {
  let inactiveBorder = "2px solid rgb(107,179,218)";
  let activeBorder = "3px solid rgb(230, 217, 186)";

  /* selected */
  /* selectable */
  /* disabled */
  let itemStyle = {};
  switch (props.cellType) {
    case SELECTED:
      itemStyle = {
        border: activeBorder,
        margin: "auto",
        backgroundImage: `url(${props.item.background})`,
      };
      break;
    case SELECTABLE:
      itemStyle = {
        border: inactiveBorder,
        margin: "auto",
        backgroundImage: `url(${props.item.background})`,
      };
      break;
    case DISABLED:
      itemStyle = {
        border: "2px solid grey",
        margin: "auto",
        backgroundColor: "black",
      };
      break;
    default:
      itemStyle = {
        border: props.item.active ? activeBorder : inactiveBorder,
        margin: "auto",
        backgroundImage: `url(${props.item.background})`,
      };
      break;
  }
  if (objectIsEmpty(props.item)) {
    return <Col style={{ width: "128px", height: "128px" }} />;
  }

  let connectors = [];
  if ("connectors" in props.item) {
    connectors = props.item.connectors.map((connector) =>
      Connector(props)[connector]()
    );
  }

  switch (props.item.type) {
    case "move":
      return (
        <Col
          style={{
            alignItems: "center",
            display: "flex",
            position: "relative",
          }}
        >
          {connectors}
          <OverlayTrigger
            placement={"left"}
            trigger={["hover", "click"]}
            overlay={<MovePopover item={props.item} />}
          >
            <div
              className={"hover-move-expand"}
              style={{
                ...itemStyle,
                width: "96px",
                height: "96px",
                backgroundColor: "black",
              }}
            >
              <img
                src={props.item.detail}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </OverlayTrigger>
        </Col>
      );
    case "connector":
      return (
        <Col
          style={{
            alignItems: "center",
            display: "flex",
            position: "relative",
          }}
        >
          {connectors}
        </Col>
      );

    case "passive":
      return (
        <Col
          style={{
            alignItems: "center",
            display: "flex",
            position: "relative",
          }}
        >
          {connectors}
          <OverlayTrigger
            placement="right"
            trigger={"hover"}
            overlay={<MovePopover item={props.item} />}
          >
            <div
              className={"hover-passive-expand"}
              style={{
                ...itemStyle,
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                backgroundColor: "black",
              }}
            >
              <img
                src={props.item.detail}
                style={{
                  left: "-2",
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </OverlayTrigger>
        </Col>
      );
    default:
      return (
        <Col>
          <div
            style={{
              width: "128px",
              height: "128px",
              backgroundImage: `url(${props.item.background})`,
              margin: "auto",
              border: "1px solid white",
            }}
          >
            <img
              src={props.item.detail}
              style={{
                width: "128px",
                height: "128px",
              }}
            />
          </div>
        </Col>
      );
  }
};

const mapStateToProps = (state) => ({
  inGameItems: state.inGameItems,
});

export default connect(mapStateToProps)(Builds);
