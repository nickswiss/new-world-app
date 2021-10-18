import {
  Card,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
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

const TopicHeading = ({ heading }: { heading: string }) => (
  <Row>
    <Col md={4} style={{ paddingTop: "2vh" }}>
      <h3>{heading}</h3>
    </Col>
  </Row>
);

interface TopicProps {
  id: string;
}

interface TopicState {
  id: string;
  heading?: string;
  content?: string;
}

export class Topic extends React.Component<TopicProps, TopicState> {
  constructor(props: TopicProps) {
    super(props);
    this.state = {
      id: props.id,
      heading: undefined,
      content: undefined,
    };
  }

  loadRoute(id: string) {
    let api: AxiosInstance = getInitializedApi();
    api
      .get<FarmingRouteDetailRecord>("farming-routes/" + id + "/")
      .then((response) => {
        console.log(response);
        this.setState({ ...response.data });
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

  render() {
    // The <Route> that rendered this component has a
    // path of `/topics/:topicId`. The `:topicId` portion
    // of the URL indicates a placeholder that we can
    // get from `useParams()`.
    let {
      id,
      heading,
      content,
      resources,
      images,
      videos,
    }: {
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
          <div style={{ backgroundColor: "#0039cb", height: "3px" }} />
          <Card.Title
            style={{
              backgroundColor: "#2962ff",
              fontFamily: "Roboto Mono",
              color: "white",
              padding: "1vh",
              margin: 0,
            }}
          >
            Card Title
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
              <Col xs={12} md={12}>
                <Card
                  className={"light-shadow card-1"}
                  style={{
                    backgroundColor: "white",
                    padding: "1vh",
                    borderRadius: 2,
                    height: "40vh",
                  }}
                >
                  <img
                    style={{
                      height: "100%",
                      width: "auto",
                    }}
                    src={
                      "https://media.newworlddocs.com/media/farming-routes/last-stand-life-motes/route.png"
                    }
                  />
                </Card>
              </Col>
            </Row>
            <Row style={{ paddingTop: "1vh" }}>
              <Col xs={12} md={12}>
                <Card
                  className={"light-shadow card-1"}
                  style={{
                    backgroundColor: "white",
                    padding: "1vh",
                    borderRadius: 2,
                    height: "40vh",
                  }}
                >
                  <iframe
                    style={{
                      height: "100%",
                    }}
                    src="https://www.youtube.com/embed/0y4GdFhM9Fc"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </Card>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      );
    } else {
      return <div>loading</div>;
    }
  }
}

export interface ResourceQuantityItem {
  resource: string;
  quantity: number;
}
