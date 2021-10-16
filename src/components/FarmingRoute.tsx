import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import map from "../images/map.png";
const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "blue",
};

function RoutingLink(params: any) {
  let active: Boolean = params.active;
  let style: any = { ...linkStyle };
  if (active) {
    style.fontWeight = "bold";
  }
  return (
    <ListGroup.Item>
      <Link to={params.to} style={style}>
        {params.heading}
      </Link>
    </ListGroup.Item>
  );
}

interface FarmingRouteListRecord {
  slug: string;
  heading: string;
}

interface FarmingRouteDetailRecord {
  slug: string;
  heading: string;
  content: string;
}

const detailRecords: FarmingRouteDetailRecord[] = [
  {
    slug: "boats",
    heading: "Boats",
    content:
      "Nunc pellentesque est ut elementum vehicula. Ut luctus est eget justo rhoncus, sed accumsan elit laoreet. In faucibus augue ac lobortis interdum. Praesent tellus ipsum, dignissim eu vehicula eget, sodales non felis. Sed molestie lobortis elit et varius. Mauris vehicula mauris orci, quis ultrices justo rhoncus sed. Nullam placerat nibh ac est faucibus, quis porta odio scelerisque. Vestibulum leo eros, porta id aliquet nec, congue vel diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras commodo molestie orci, vel malesuada ligula suscipit id. Praesent vitae metus maximus, rhoncus metus in, rhoncus massa. Maecenas quis aliquet ex. Quisque posuere est sed erat cursus eleifend. Maecenas faucibus ipsum vel mi aliquet pharetr",
  },
  {
    slug: "hoes",
    heading: "Hoes",
    content:
      "Nullam finibus vitae ante at elementum. Nunc pellentesque venenatis velit, vitae maximus diam molestie ut. Nunc laoreet velit a augue iaculis, eget feugiat arcu dictum. Ut condimentum, nunc vitae semper egestas, neque felis hendrerit turpis, varius dignissim dolor tortor id nisi. Nam ac ipsum pulvinar, efficitur eros eget, posuere magna. Mauris mattis fringilla erat quis imperdiet. Mauris sit amet maximus libero, id pharetra nisi. Vivamus vestibulum commodo ante eu congue. Proin gravida pulvinar erat et vestibulum. Proin nulla lorem, porttitor quis malesuada at, varius ut quam. Quisque ut purus bibendum, gravida dolor eget, sodales augue. Sed vel suscipit lorem. Suspendisse vel odio eget erat tincidunt pharetra.",
  },
  {
    slug: "pb",
    heading: "Peanut Butter",
    content:
      "Aliquam erat volutpat. Etiam lacinia elit purus, vel accumsan nunc egestas nec. Sed consequat justo id fringilla eleifend. Morbi ultrices est nec tincidunt maximus. Proin ex turpis, molestie et enim a, malesuada fermentum odio. Nulla lobortis leo fringilla bibendum gravida. Aliquam erat volutpat.",
  },
  {
    slug: "jelly",
    heading: "Jelly",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor orci tortor, non aliquam urna viverra sed. Vestibulum ac molestie sem, sit amet cursus massa. Donec nisi mauris, ullamcorper in quam vitae, egestas placerat lorem. Proin elementum tortor sed mollis suscipit. Vestibulum elementum neque odio, at sollicitudin ante euismod sit amet. Sed eget nisl sed velit dictum ullamcorper. Nulla ornare nec nisi congue tristique. Mauris pretium nulla et sem varius, quis tincidunt metus pretium. In dui libero, mollis id molestie ut, vehicula vitae diam. Vestibulum accumsan erat quis neque commodo maximus. Nulla consequat mi sed nulla molestie hendrerit.",
  },
];

function FarmingRoutes() {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let { params }: { path: string; url: string; params: any } = useRouteMatch();

  let routes: FarmingRouteListRecord[] = [
    {
      slug: "boats",
      heading: "Boats",
    },
    {
      slug: "hoes",
      heading: "Hoes",
    },
    {
      slug: "pb",
      heading: "Peanut Butter",
    },
    {
      slug: "jelly",
      heading: "Jelly",
    },
  ];
  const topicProps = {
    slug: params.slug,
  };
  console.log("topicProps");
  console.log(topicProps);
  return (
    <Container style={{ padding: 0, height: "100%" }}>
      <Row style={{ height: "100%" }}>
        <Col className="flex-column" xs={3} style={{ height: "100%" }}>
          <ListGroup style={{ height: "100%" }}>
            <ListGroup.Item style={{ paddingTop: "5vh", paddingBottom: "5vh" }}>
              <h5>Farming Routes</h5>
            </ListGroup.Item>
            {routes.map((route) => (
              <RoutingLink
                to={"/farming-routes/" + route.slug}
                heading={route.heading}
                active={route.slug === params.slug}
              />
            ))}
            <ListGroup.Item style={{ height: "100%" }} />
          </ListGroup>
        </Col>
        <Col xs={9}>{params.slug && <Topic {...topicProps} />}</Col>
      </Row>
    </Container>
  );
}

const TopicHeading = ({ heading }: { heading: string }) => (
  <Row className="justify-content-md-center">
    <Col md={4} style={{ paddingTop: "5vh", textAlign: "center" }}>
      <h3>{heading}</h3>
    </Col>
  </Row>
);

interface TopicProps {
  slug: string;
}

interface TopicState {
  slug?: string;
  heading?: string;
  content?: string;
}

class Topic extends React.Component<TopicProps, TopicState> {
  constructor(props: TopicProps) {
    super(props);
    this.state = { slug: props.slug, heading: undefined, content: undefined };
  }

  getRecord(slug?: string) {
    for (let i = 0; i < detailRecords.length; i++) {
      if (detailRecords[i].slug === slug) {
        return { ...detailRecords[i] };
      }
    }
  }

  componentDidMount() {
    // let record = detailRecords[0];
    let record = this.getRecord(this.state.slug);
    this.setState({ ...record });
  }

  componentDidUpdate(
    prevProps: Readonly<TopicProps>,
    prevState: Readonly<TopicState>,
    snapshot?: any
  ) {
    if (prevProps.slug !== this.props.slug) {
      this.setState({ ...this.getRecord(this.props.slug) });
    }
  }

  render() {
    // The <Route> that rendered this component has a
    // path of `/topics/:topicId`. The `:topicId` portion
    // of the URL indicates a placeholder that we can
    // get from `useParams()`.
    let {
      slug,
      heading,
      content,
    }: { slug?: string; heading?: string; content?: string } = this.state;
    if (!!slug && !!heading && !!content) {
      return (
        <Row>
          <TopicHeading heading={heading} />
          <Row className="justify-content-md-center">
            <Col md={9} style={{ paddingTop: "5vh", textAlign: "center" }}>
              <img
                style={{ maxWidth: "100%", height: "auto" }}
                src={map}
                alt="map"
              />
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md={9} style={{ paddingTop: "5vh", textAlign: "center" }}>
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

export default FarmingRoutes;
