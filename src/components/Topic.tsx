import { Card, Col, Row, Toast } from "react-bootstrap";
import React, { useState } from "react";
import InfoCard from "./InfoCard";
import VideoCard from "./VideoCard";
import MapCard from "./MapCard";

const Topic = (props) => {
  let video = props.activeRoute.videos[0];
  const [showAd, setShowAd] = useState(true);
  const toggleShowAd = () => setShowAd(!showAd);

  return (
    <Card style={{ borderRadius: 0, borderStyle: "none" }}>
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
        {props.activeRoute.heading}
      </Card.Title>
      <Card.Body style={{ backgroundColor: "var(--light)" }}>
        <Row style={{ paddingTop: "1vh" }}>
          <Col md={6} xs={12}>
            <MapCard
              alt={props.activeRoute.map_image.name}
              src={props.activeRoute.map_image.url}
            />{" "}
          </Col>
          <Col md={6} xs={12} style={{ height: "100%" }}>
            <VideoCard
              video={video}
              activeTimestamp={props.activeTimestamp}
              loadActiveTimestamp={props.loadActiveTimestamp}
            />
          </Col>
        </Row>
        <Row style={{ paddingTop: "1vh" }}>
          <Col xs={12} md={12}>
            <InfoCard />
          </Col>
        </Row>
      </Card.Body>
      <Toast
        onClose={toggleShowAd}
        show={showAd}
        style={{ position: "fixed", bottom: 0, right: 0 }}
      >
        <Toast.Header closeButton={true}></Toast.Header>
        <Toast.Body>
          <Row>
            <Col xs={6} style={{ textAlign: "center" }}>
              <iframe
                title={"amazon-affiliate-ad-1"}
                style={{ width: "120px", height: "240px", margin: "auto" }}
                marginWidth={0}
                marginHeight={0}
                scrolling="no"
                src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=newworlddocs-20&marketplace=amazon&amp;region=US&placement=B01LVTI3TO&asins=B01LVTI3TO&linkId=ace12b2c3563bec006fd15f8833cd6aa&show_border=false&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff"
              ></iframe>
            </Col>
            <Col xs={6} style={{ textAlign: "center" }}>
              <iframe
                title={"amazon-affiliate-ad-1"}
                style={{ width: "120px", height: "240px", margin: "auto" }}
                marginWidth={0}
                marginHeight={0}
                scrolling="no"
                src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=newworlddocs-20&language=en_US&marketplace=amazon&region=US&placement=B07GBYYSMF&asins=B07GBYYSMF&linkId=32e11315bf75a965ea60d6fe430561f3&show_border=false&link_opens_in_new_window=true"
              ></iframe>
            </Col>
          </Row>{" "}
        </Toast.Body>
      </Toast>
    </Card>
  );
};

export interface ResourceQuantityItem {
  resource: string;
  quantity: number;
}

export default Topic;
