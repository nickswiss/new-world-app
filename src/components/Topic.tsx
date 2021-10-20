import { Button, Card, Col, Row } from "react-bootstrap";
import React from "react";
import { AxiosInstance } from "axios";
import { getInitializedApi } from "../api/config";
import ResourceCard from "./ResourceCard";
import InfoCard from "./InfoCard";

interface FarmingRouteDetailRecord {
  id: string;
  heading: string;
  content: string;
  video_url: string;
  video_heading: string;
  map_image_name: string;
  map_image_url: string;
  resources: ResourceQuantityItem;
}

interface TopicProps {
  id: string;
}

interface TopicState {
  id: string;
  heading?: string;
  content?: string;
  timestamp: number;
}

export class Topic extends React.Component<TopicProps, TopicState> {
  labels: any[] = [
    {
      timestamp: 67,
      number: "1",
      name: "Life Moth 1",
    },
    {
      timestamp: 84,
      number: "2",
      name: "Life Moth 2",
    },
    {
      timestamp: 94,
      number: "3",
      name: "Life Moth 3",
    },
    {
      timestamp: 128,
      number: "4",
      name: "Life Moth 4",
    },
    {
      timestamp: 148,
      number: "5",
      name: "Life Moth 5",
    },
    {
      timestamp: 166,
      number: "6",
      name: "Life Moth 6",
    },
    {
      timestamp: 227,
      number: "A",
      name: "Climb to 7",
    },
    {
      timestamp: 315,
      number: "7",
      name: "Life Moth 7",
    },
    {
      timestamp: 345,
      number: "8",
      name: "Life Moth 8",
    },
    {
      timestamp: 373,
      number: "9",
      name: "Life Moth 9",
    },
    {
      timestamp: 403,
      number: "10",
      name: "Life Moth 10",
    },
    {
      timestamp: 435,
      number: "11",
      name: "Life Moth 11",
    },
    {
      timestamp: 458,
      number: "12",
      name: "Life Moth 12",
    },
    {
      timestamp: 477,
      number: "13-14",
      name: "Life Moth 13-14",
    },
    {
      timestamp: 525,
      number: "15",
      name: "Life Moth 15",
    },
    {
      timestamp: 551,
      number: "16",
      name: "Life Moth 16",
    },
    {
      timestamp: 568,
      number: "17",
      name: "Life Moth 17",
    },
    {
      timestamp: 600,
      number: "18",
      name: "Life Moth 18",
    },
    {
      timestamp: 612,
      number: "19-20",
      name: "Life Moth 19-20",
    },
  ];

  constructor(props: TopicProps) {
    super(props);
    this.state = {
      id: props.id,
      heading: undefined,
      content: undefined,
      timestamp: 0,
    };
  }

  loadRoute(id: string) {
    let api: AxiosInstance = getInitializedApi();
    api
      .get<FarmingRouteDetailRecord>("farming-routes/" + id + "/")
      .then((response) => {
        console.log(response);
        this.setState({ ...response.data, timestamp: 0 });
      });
  }

  componentDidMount() {
    this.loadRoute(this.props.id);
  }

  componentDidUpdate(
    prevProps: Readonly<TopicProps>,
    prevState: Readonly<TopicState>,
    snapshot?: any
  ) {
    if (prevProps.id !== this.props.id) {
      this.loadRoute(this.props.id);
    }
  }

  onLinkClicked(timestamp: number, heading: string) {
    this.setState({ timestamp: timestamp, heading: heading });
  }

  render() {
    // The <Route> that rendered this component has a
    // path of `/topics/:topicId`. The `:topicId` portion
    // of the URL indicates a placeholder that we can
    // get from `useParams()`.
    let suffix = !!this.state.timestamp ? `&start=${this.state.timestamp}` : "";

    let paginatedTimes = (
      <Row>
        <Col xs={12}>
          {this.labels.map((label) => {
            return (
              <Button
                onClick={() => {
                  this.onLinkClicked(label.timestamp, label.number);
                }}
                variant="secondary"
                style={{ backgroundColor: "var(--primary)" }}
                active
              >
                {label.number}
              </Button>
            );
          })}
        </Col>
      </Row>
    );
    let {
      id,
      heading,
      content,
    }: // resources,
    // images,
    // videos,
    {
      id?: string;
      heading?: string;
      content?: string;
      resources?: ResourceQuantityItem[];
      images?: { name: string; url: string }[];
      videos?: { name: string; url: string }[];
    } = this.state;
    if (!!id && !!heading && !!content) {
      return (
        <Card style={{ borderRadius: 0, borderStyle: "none" }}>
          <div style={{ backgroundColor: "var(--dark)", height: "3px" }} />
          <Card.Title
            style={{
              backgroundColor: "var(--primary)",
              fontFamily: "Roboto Mono",
              color: "white",
              padding: "1vh",
              margin: 0,
              textAlign: "center",
            }}
          >
            Last Stand Life Motes
          </Card.Title>
          <Card.Body style={{ backgroundColor: "var(--light)" }}>
            <Row>
              <Col xs={12} md={6}>
                <ResourceCard />
              </Col>
              <Col xs={12} md={6}>
                <InfoCard />
              </Col>
            </Row>
            <Row style={{ paddingTop: "1vh" }}>
              <Col xs={12} md={6}>
                <Card
                  className={"card-1"}
                  style={{
                    backgroundColor: "var(--dark)",
                    borderStyle: "none",
                    padding: "1vh",
                    borderRadius: 2,
                    color: "white",
                    fontFamily: "Roboto Mono",
                    textAlign: "center",
                  }}
                >
                  <Card.Title
                    className={"card-1"}
                    style={{
                      padding: "1vh",
                      backgroundColor: "var(--primary)",
                      fontFamily: "Roboto Mono",
                    }}
                  >
                    Route
                  </Card.Title>
                  <img
                    className={"card-1"}
                    alt={""}
                    style={{
                      width: "100%",
                      height: "auto%",
                    }}
                    src={
                      "https://media.newworlddocs.com/media/farming-routes/last-stand-life-motes/route.png"
                    }
                  />
                </Card>
              </Col>
              <Col xs={12} md={6}>
                {" "}
                <Card
                  className={"card-1"}
                  style={{
                    backgroundColor: "var(--dark)",
                    borderStyle: "none",
                    padding: "1vh",
                    borderRadius: 2,
                    color: "white",
                    fontFamily: "Roboto Mono",
                    height: "40vh",
                    textAlign: "center",
                  }}
                >
                  <Card.Title
                    className={"card-1"}
                    style={{
                      padding: "1vh",
                      backgroundColor: "var(--primary)",
                      fontFamily: "Roboto Mono",
                    }}
                  >
                    Route
                  </Card.Title>
                  <iframe
                    className={"card-1"}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    src={
                      "https://www.youtube.com/embed/0y4GdFhM9Fc?autoplay=1" +
                      suffix
                    }
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  {paginatedTimes}
                </Card>
              </Col>
            </Row>
            <Row style={{ paddingTop: "1vh" }}></Row>
          </Card.Body>
        </Card>
      );
    } else {
      return <div>a</div>;
    }
  }
}

export interface ResourceQuantityItem {
  resource: string;
  quantity: number;
}
