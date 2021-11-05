import React, { ReactNode } from "react";
import { objectIsEmpty } from "../lib/utils";
import { Col, Container, OverlayTrigger, Popover, Row } from "react-bootstrap";
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
              alt={"popover-detail"}
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
  buildConfig = {
    one: {
      buildState: [
        [DISABLED, "0", "0", SELECTED, "0"],
        [DISABLED, "0", SELECTED, SELECTED, DISABLED],
        [DISABLED, SELECTED, SELECTED, SELECTED, SELECTED],
        [DISABLED, "0", SELECTED, DISABLED, SELECTED],
        [DISABLED, SELECTED, "0", SELECTED, SELECTED],
        [DISABLED, DISABLED, SELECTED, DISABLED, DISABLED],
      ],
      heading: "HEALING",
      build: [
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
            description:
              "Light staffs Light and Heavy attack no longer take mana",
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
        [
          {},
          {},
          {
            detail:
              "https://media.newworlddocs.com/icons/abilities/lifestaffpassive8.png",
            background:
              "https://media.newworlddocs.com/icons/abilities/abilities_bg_passive0.png",
            type: "final",
            active: false,
            description:
              "If you successfully heal an ally with Orb of Protection, you also gain Fortify, and Recovery",
            name: "Shared Protection",

            connectors: [],
          },
          {},
          {},
        ],
      ],
    },
    two: {
      buildState: [
        [DISABLED, SELECTED, DISABLED, SELECTABLE, "0"],
        [DISABLED, "0", "0", SELECTED, DISABLED],
        [DISABLED, SELECTED, SELECTED, DISABLED, DISABLED],
        [DISABLED, "0", SELECTED, DISABLED, DISABLED],
        ["0", SELECTED, DISABLED, DISABLED, DISABLED],
        ["0", DISABLED, DISABLED, DISABLED, DISABLED],
      ],
      heading: "PROTECTOR",
      build: [
        // Row 0
        [
          {
            detail:
              "https://media.newworlddocs.com/icons/abilities/firestaffability1.png",
            background:
              "https://media.newworlddocs.com/icons/abilities/abilities_bg2.png",
            backgroundColor: "black",
            type: "move",
            name: "Orb of Protection",
            description:
              "Shoot out a light projectile that grants 10% Fortify for 20s, heals an ally for 10% of weapon damage and deals 146% weapon damage when it hits an enemy. (Fortify reduces incoming damage.)",
            manaCost: "Costs 25 mana",
            cooldown: 10.0,
            costs: "16 mana",
            connectors: ["down"],
          },
          {
            detail:
              "https://media.newworlddocs.com/icons/abilities/bowpassive5.png",
            background:
              "https://media.newworlddocs.com/icons/abilities/abilities_bg2.png",
            type: "passive",
            name: "Bend Light",
            description:
              "After a dodge, your heals are 20% more effective for 5s.",
            connectors: [],
          },
          {
            detail:
              "https://media.newworlddocs.com/icons/abilities/lifestaffability3_mod2.png",
            background:
              "https://media.newworlddocs.com/icons/abilities/abilities_bg2.png",
            type: "passive",
            name: "Defensive Light",
            description: "When you block a Melee attack: gain 5% max mana",
            connectors: [],
          },
          {},
          {},
        ],
        // Row 1 (0 indexed)
        [
          {
            detail:
              "https://media.newworlddocs.com/icons/abilities/firestaffability1_mod2.png",
            background:
              "https://media.newworlddocs.com/icons/abilities/abilities_bg_passive5.png",
            type: "passive",
            description:
              "If Orb of Protection hit an ally they gain Recovery for 10s. (Recovery heals for 7.5% weapon damage every second.)",
            name: "Protector's Blessing",
            connectors: ["up", "down"],
          },
          {},
          {},
          {
            detail:
              "https://media.newworlddocs.com/icons/abilities/warhammerpassive5.png",
            background:
              "https://media.newworlddocs.com/icons/abilities/abilities_bg_passive0.png",
            type: "passive",
            description:
              "Lifestaffs Light and Heavy Attack grant 15% Fortify for 3s when hitting an enemy. (Fortify reduces incoming damage.)",
            name: "Protector's Touch",

            connectors: [],
          },
          {
            detail:
              "https://media.newworlddocs.com/icons/abilities/hatchetpassive3.png",
            background:
              "https://media.newworlddocs.com/icons/abilities/abilities_bg2.png",
            backgroundColor: "black",
            type: "move",
            name: "Beacon",
            description:
              "Shoot out a light projectile that deals 146% weapon damage to enemies, attaches to its target and heals all nearby allies for 20% weapon damage each second for 10s",
            manaCost: "Costs 16 mana",
            cooldown: 35.0,
            costs: "16 mana",
            connectors: ["down"],
          },
        ],
        // Row 2 (0 indexed)
        [
          {
            detail:
              "https://media.newworlddocs.com/icons/abilities/lifestaffpassive8.png",
            background:
              "https://media.newworlddocs.com/icons/abilities/abilities_bg_passive0.png",
            type: "passive",
            active: false,
            description:
              "If you successfully heal an ally with Orb of Protection, you also gain Fortify, and Recovery",
            name: "Shared Protection",

            connectors: ["up", "down"],
          },
          {
            detail:
              "https://media.newworlddocs.com/icons/abilities/lifestaffpassive8.png",
            background:
              "https://media.newworlddocs.com/icons/abilities/abilities_bg_passive0.png",
            type: "passive",
            active: false,
            description: "If you have a buff, heal for 10% or more.",
            name: "Protector's Strength",
            connectors: [],
          },
          {
            detail:
              "https://media.newworlddocs.com/icons/abilities/lifestaffability4_mod3.png",
            background:
              "https://media.newworlddocs.com/icons/abilities/abilities_bg2.png",
            backgroundColor: "black",
            type: "move",
            name: "Lights Embrace",
            description:
              "Targeted heal for 100% weapon damage +30% more for each buff on that target.",
            manaCost: "Costs 18 mana",
            cooldown: 4.0,
            costs: "18 mana",
            connectors: ["down"],
          },
          {},
          {
            detail:
              "https://media.newworlddocs.com/icons/abilities/lifestaffability3_mod2.png",
            background:
              "https://media.newworlddocs.com/icons/abilities/abilities_bg2.png",
            type: "passive",
            name: "Infused Light",
            description: "Beacon's area of effect is now 50% larger.",
            connectors: ["up", "down"],
          },
        ],
        // Row 3 (0 indexed)
        [
          {
            detail:
              "https://media.newworlddocs.com/icons/abilities/firestaffability3_mod2.png",
            background:
              "https://media.newworlddocs.com/icons/abilities/abilities_bg2.png",
            type: "passive",
            name: "Aegis",
            description:
              "When this projectile hits, it effects all allies within a 3m radius.",
            connectors: ["up"],
          },
          {},
          {
            detail:
              "https://media.newworlddocs.com/icons/abilities/spear_cyclone_bonusstaminaonmultihit.png",
            background:
              "https://media.newworlddocs.com/icons/abilities/abilities_bg2.png",
            type: "passive",
            name: "Inspire",
            description:
              "When you heal a target with Light's Embrace target receives 25 stamina.",
            connectors: ["up", "down"],
          },
          {
            detail:
              "https://media.newworlddocs.com/icons/abilities/musketpassive8.png",
            background:
              "https://media.newworlddocs.com/icons/abilities/abilities_bg2.png",
            type: "passive",
            name: "Balance",
            description:
              "When you get hit while below 50% health, gain 10% Haste for 5s. (cooldown 20s)",
            connectors: [],
          },
          {
            detail:
              "https://media.newworlddocs.com/icons/abilities/lifestaffpassive7.png",
            background:
              "https://media.newworlddocs.com/icons/abilities/abilities_bg2.png",
            type: "passive",
            name: "Radiance's Blessing",
            description: "Beacon lasts 5s longer",
            connectors: ["up", "down"],
          },
        ],
        // Row 4 (0 indexed)
        [
          {},
          {
            detail:
              "https://media.newworlddocs.com/icons/abilities/lifestaffpassive7.png",
            background:
              "https://media.newworlddocs.com/icons/abilities/abilities_bg_passive0.png",
            type: "passive",
            active: false,
            description:
              "Increases mana regeneration for you and group members by 3%",
            name: "Spirits United",

            connectors: [],
          },
          {
            detail:
              "https://media.newworlddocs.com/icons/abilities/warhammerability5.png",
            background:
              "https://media.newworlddocs.com/icons/abilities/abilities_bg_passive0.png",
            type: "passive",
            active: false,
            description:
              "When you heal a target with Lights Embrace gain 1% of your max mana for each buff your target has.",
            name: "Connection",
            connectors: ["up", "down"],
          },
          {
            detail:
              "https://media.newworlddocs.com/icons/abilities/musketability3_mod2.png",
            background:
              "https://media.newworlddocs.com/icons/abilities/abilities_bg_passive0.png",
            type: "passive",
            description: "Buffs you grant last 20% longer",
            name: "Glowing Focus",
          },
          {
            detail:
              "https://media.newworlddocs.com/icons/abilities/hatchetability4_mod1.png",
            background:
              "https://media.newworlddocs.com/icons/abilities/abilities_bg_passive0.png",
            type: "passive",

            name: "Speed of Light",
            description:
              "When Beacon heals a target it also applies 20% Haste for 4s. (Haste increases movement speed.)",
            connectors: ["up"],
          },
        ],
        [
          {},
          {},
          {
            detail:
              "https://media.newworlddocs.com/icons/abilities/lifestaffpassive8.png",
            background:
              "https://media.newworlddocs.com/icons/abilities/abilities_bg_passive0.png",
            type: "final",
            active: false,
            description:
              "If you successfully heal an ally with Orb of Protection, you also gain Fortify, and Recovery",
            name: "Shared Protection",

            connectors: ["up"],
          },
          {},
          {},
        ],
      ],
    },
  };

  render() {
    return (
      <Container fluid>
        <Row
          style={{
            padding: "2vh",
          }}
        >
          <Col sm={12} lg={6}>
            <Build buildConfig={this.buildConfig.one} />
          </Col>

          <Col sm={12} lg={6}>
            <Build buildConfig={this.buildConfig.two} />
          </Col>
        </Row>
      </Container>
    );
  }
}

class Build extends React.Component<any, any> {
  render() {
    let buildState = this.props.buildConfig.buildState;
    let rows = this.props.buildConfig.build.map((row, rowIndex) => (
      <Row
        style={{
          height:
            rowIndex === this.props.buildConfig.build.length - 1
              ? "164px"
              : "128px",
        }}
      >
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
            );
            if (columnIndex === 0) {
              // only check up right
              connectorDownRightActive = [SELECTED, SELECTABLE].includes(
                buildState[rowIndex + 1][columnIndex + 1]
              );
            } else if (columnIndex === buildState[rowIndex].length - 1) {
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
            );

            if (columnIndex === 0) {
              // only check up right
              connectorUpRightActive = [SELECTED].includes(
                buildState[rowIndex - 1][columnIndex + 1]
              );
            } else if (columnIndex === buildState[rowIndex].length - 1) {
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

            if (columnIndex === 0) {
              // only check up right
              connectorUpRightActive = [SELECTED].includes(
                buildState[rowIndex - 1][columnIndex + 1]
              );
              connectorDownRightActive = [SELECTED, SELECTABLE].includes(
                buildState[rowIndex + 1][columnIndex + 1]
              );
            } else if (columnIndex === buildState[rowIndex].length - 1) {
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
      <Row
        style={{
          borderRight: "1px solid grey",
          borderLeft: "1px solid grey",
          borderBottom: "1px solid grey",
        }}
      >
        <Col
          lg={12}
          style={{
            backgroundImage:
              "url(https://media.newworlddocs.com/icons/bgs/blurdark.png)",
          }}
        >
          <Row style={{ borderBottom: "1px solid grey", paddingTop: "4vh" }}>
            <Col lg={12}>
              <h1
                style={{
                  color: "var(--gold)",
                  fontFamily: "IM Fell DW Pica",
                  textAlign: "center",
                }}
              >
                {this.props.buildConfig.heading}
              </h1>
            </Col>
          </Row>
          <Row style={{ padding: 0 }}>
            <Col lg={12} style={{ padding: 0 }}>
              {rows.map((row) => row)}
            </Col>
          </Row>
        </Col>
      </Row>
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
        zIndex: 2,
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
      zIndex: 2,
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
      zIndex: 2,
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
      zIndex: 2,
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
      zIndex: "moveZUnder" in props && props.moveZUnder ? 1 : 2,
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
      zIndex: 2,
      top: "47%",
    }}
  />
);

let Connector = (props) => {
  console.log(props);
  return {
    up: () => (
      <ConnectorUp
        active={props.connectorUpActive && props.cellType !== DISABLED}
      />
    ),
    down: () => <ConnectorDown active={props.connectorDownActive} />,
    upRight: () => (
      <ConnectorUpRight
        active={props.connectorUpRightActive && props.cellType !== DISABLED}
      />
    ),
    upLeft: () => (
      <ConnectorUpLeft
        active={props.connectorUpLeftActive && props.cellType !== DISABLED}
      />
    ),
    downLeft: () => (
      <ConnectorDownLeft active={props.connectorDownLeftActive} />
    ),
    downRight: () => {
      if (props.connectorDownActive && !props.connectorDownRightActive) {
        return (
          <ConnectorDownRight
            moveZUnder={true}
            active={props.connectorDownRightActive}
          />
        );
      }
      return <ConnectorDownRight active={props.connectorDownRightActive} />;
    },
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
        zIndex: 3,
      };
      break;
    case SELECTABLE:
      itemStyle = {
        border: inactiveBorder,
        margin: "auto",
        backgroundImage: `url(${props.item.background})`,
        zIndex: 3,
      };
      break;
    case DISABLED:
      itemStyle = {
        border: "2px solid grey",
        margin: "auto",
        backgroundColor: "black",
        zIndex: 3,
      };
      break;
    default:
      itemStyle = {
        border: props.item.active ? activeBorder : inactiveBorder,
        margin: "auto",
        backgroundImage: `url(${props.item.background})`,
        zIndex: 3,
      };
      break;
  }
  if (objectIsEmpty(props.item)) {
    return <Col style={{ width: "96px", height: "96px" }} />;
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
            width: "96px",
          }}
        >
          {connectors}
          <OverlayTrigger
            placement={props.columnIndex > 2 ? "left" : "right"}
            trigger={["hover"]}
            overlay={<MovePopover item={props.item} />}
          >
            <div
              className={"hover-move-expand"}
              style={{
                ...itemStyle,
                width: "80px",
                height: "80px",
                backgroundColor: "black",
              }}
            >
              <div style={{ opacity: props.cellType === DISABLED ? 0.4 : 1 }}>
                <img
                  alt={"move"}
                  src={props.item.detail}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
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
            width: "96px",
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
            placement={props.columnIndex > 2 ? "left" : "right"}
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
              <div style={{ opacity: props.cellType === DISABLED ? 0.4 : 1 }}>
                <img
                  alt={"passive"}
                  src={props.item.detail}
                  style={{
                    left: "-2",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
            </div>
          </OverlayTrigger>
        </Col>
      );
    case "final":
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
            placement={props.columnIndex > 2 ? "left" : "right"}
            trigger={"hover"}
            overlay={<MovePopover item={props.item} />}
          >
            <div
              className={"hover-move-expand"}
              style={{
                ...itemStyle,
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                backgroundColor: "black",
              }}
            >
              <div style={{ opacity: props.cellType === DISABLED ? 0.4 : 1 }}>
                <img
                  alt={"passive"}
                  src={props.item.detail}
                  style={{
                    left: "-2",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
            </div>
          </OverlayTrigger>
        </Col>
      );
    default:
      return (
        <Col>
          <div
            style={{
              width: "64px",
              height: "64px",
              backgroundImage: `url(${props.item.background})`,
              margin: "auto",
              border: "1px solid white",
            }}
          >
            <div style={{ opacity: props.cellType === DISABLED ? 0.4 : 1 }}>
              <img
                alt={"default"}
                src={props.item.detail}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </div>
        </Col>
      );
  }
};

const mapStateToProps = (state) => ({
  inGameItems: state.inGameItems,
});

export default connect(mapStateToProps)(Builds);
