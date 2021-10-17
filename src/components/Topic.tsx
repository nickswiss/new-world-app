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
        <Row>
          {resources && <ResourceDashboard resources={resources} />}
          <Container style={{ paddingLeft: "0", paddingTop: "2vh" }}>
            <Card>
              <Card.Title
                style={{
                  paddingTop: "2vh",
                  paddingLeft: "2vh",
                  paddingRight: "2vh",
                }}
              >
                <h3>{"Route"}</h3>
              </Card.Title>
              {images &&
                images.map((image) => {
                  return (
                    <Container>
                      <Col
                        md={9}
                        style={{
                          textAlign: "center",
                          width: "100%",
                        }}
                      >
                        <img
                          style={{
                            maxWidth: "100%",
                            height: "auto",
                          }}
                          src={image.url}
                          alt="map"
                        />
                      </Col>
                    </Container>
                  );
                })}
              {videos &&
                videos.map((video) => (
                  <Container style={{ paddingLeft: 0, padding: "1vh" }}>
                    <iframe
                      style={{
                        width: "100%",
                        height: "35vh",
                      }}
                      src={video.url}
                      title={video.name}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </Container>
                ))}
            </Card>
          </Container>

          <Row className="justify-content-md-center">
            <Col md={9} style={{ paddingTop: "2vh", textAlign: "center" }}>
              <p>{content}</p>
            </Col>
          </Row>
        </Row>
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
