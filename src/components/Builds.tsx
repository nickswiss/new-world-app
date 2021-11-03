import React from "react";
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

const MovePopover = (props) => (
  <Popover id="popover-basic" style={{ backgroundColor: "rgb(10,10,10)" }}>
    <Popover.Header
      style={{ backgroundColor: "rgb(10,10,10)", color: "gold" }}
      as="h3"
    >
      Popover right
    </Popover.Header>
    <Popover.Body>
      {/*<Row>*/}
      {/*  <Col xs={6}>*/}
      {/*    <img src={props.item.detail} />*/}
      {/*  </Col>*/}
      {/*  <Col xs={6}></Col>*/}
      {/*</Row>*/}
    </Popover.Body>
  </Popover>
);
/*

  New World Gear Affix Chart:
    https://newworldfans.com/articles/new-world-armor-Affix-chart


 */

class Builds extends React.Component<any, any> {
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
    console.log(this.props);
    let rows = this.build.map((row, rowIndex) => (
      <Row>
        {row.map((item, columnIndex) => {
          return <ItemCell item={item} />;
        })}
      </Row>
    ));
    return <Container>{rows.map((row) => row)}</Container>;
  }
}

const ConnectorUp = () => (
  <div
    style={{
      position: "absolute",
      borderLeft: "4px solid grey",
      width: "1px",
      height: "50%",
      left: "50%",
      zIndex: -20,
      top: 0,
    }}
  />
);
const ConnectorDown = () => (
  <div
    style={{
      position: "absolute",
      borderLeft: "4px solid grey",
      width: "1px",
      height: "50%",
      left: "50%",
      zIndex: -20,
      bottom: 0,
    }}
  />
);

const ConnectorUpLeft = () => (
  <div
    style={{
      position: "absolute",
      borderRight: "4px solid grey",
      borderTop: "4px solid grey",
      width: "50%",
      height: "50%",
      right: "50%",
      zIndex: -20,
      top: 0,
    }}
  />
);

const ConnectorUpRight = () => (
  <div
    style={{
      position: "absolute",
      borderLeft: "4px solid grey",
      borderTop: "4px solid grey",
      width: "50%",
      height: "50%",
      left: "50%",
      zIndex: -20,
      top: 0,
    }}
  />
);

const ConnectorDownRight = () => (
  <div
    style={{
      position: "absolute",
      borderLeft: "4px solid grey",
      borderBottom: "4px solid grey",
      width: "50%",
      height: "50%",
      left: "50%",
      zIndex: -20,
      top: "53%",
    }}
  />
);

const ConnectorDownLeft = () => (
  <div
    style={{
      position: "absolute",
      borderLeft: "4px solid grey",
      borderBottom: "4px solid grey",
      width: "50%",
      height: "50%",
      left: "50%",
      zIndex: -20,
      top: "47%",
    }}
  />
);

let Connector = (props) => ({
  up: () => <ConnectorUp {...props} />,
  down: () => <ConnectorDown {...props} />,
  upRight: () => <ConnectorUpRight {...props} />,
  upLeft: () => <ConnectorUpLeft {...props} />,
  downLeft: () => <ConnectorDownLeft {...props} />,
  downRight: () => <ConnectorDownRight {...props} />,
});

const ItemCell = (props) => {
  let inactiveBorder = "2px solid rgb(107,179,218)";
  let activeBorder = "3px solid rgb(230, 217, 186)";

  let itemStyle = {
    border: props.item.active ? activeBorder : inactiveBorder,
    margin: "auto",
    backgroundImage: `url(${props.item.background})`,
  };

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
            placement="right"
            trigger={"click"}
            overlay={
              <Popover
                id="popover-basic"
                style={{
                  backgroundColor: "rgb(10,10,10)",
                  fontFamily: "IM Fell DW Pica",
                }}
              >
                <Popover.Header
                  style={{
                    backgroundColor: "rgb(10,10,10)",
                    color: "rgb(142,131,112)",
                    fontSize: "24px",
                    paddingBottom: "0",
                  }}
                  as="h1"
                >
                  {props.item.name.toUpperCase()}
                </Popover.Header>
                <Popover.Body>
                  <Row>
                    <Col xs={6}>
                      <img style={{ margin: "auto" }} src={props.item.detail} />
                    </Col>
                    <Col
                      xs={6}
                      style={{
                        height: "100px",
                        marginTop: "auto",
                        marginBottom: "auto",
                      }}
                    >
                      <Row>
                        <Col xs={12}>
                          {" "}
                          <p
                            style={{
                              textAlign: "center",
                              color: "lightgray",
                              fontFamily: "Arial",
                              lineHeight: "16px",
                              fontSize: "16px",
                            }}
                          >
                            Cooldown
                          </p>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12}>
                          {" "}
                          <p
                            style={{
                              textAlign: "center",
                              color: "lightgray",
                              fontFamily: "Arial",
                              lineHeight: "16px",
                              fontSize: "16px",
                            }}
                          >
                            <FontAwesomeIcon
                              color={"white"}
                              icon={"hourglass-end"}
                              style={{ paddingRight: "2px" }}
                            />
                            {props.item.cooldown.toFixed(1)}s
                          </p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <p style={{ color: "lightgray", fontFamily: "Arial" }}>
                        {props.item.description}
                      </p>
                    </Col>
                  </Row>
                </Popover.Body>
              </Popover>
            }
          >
            <div
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
          <div
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
