import { Card, Col, Container, Row } from "react-bootstrap";
import React from "react";
import map from "../images/map.png";
import { AxiosInstance } from "axios";
import { getInitializedApi } from "../api/config";
import ResourceDashboard from "./ResourceDashboard";

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
          <Card.Body style={{ backgroundColor: "var(--white)" }}></Card.Body>
          <Card.Body style={{ backgroundColor: "var(--dark)" }}>
            <iframe
              style={{
                width: "100%",
                height: "auto",
              }}
              src="https://www.youtube.com/embed/8TlbYm-Enzc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Card.Body>
          <Card.Body style={{ backgroundColor: "white" }}>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <div style={{ backgroundColor: "var(--light)", height: "10px" }} />
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
