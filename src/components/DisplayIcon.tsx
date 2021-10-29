import React from "react";
import { connect } from "react-redux";

class DisplayIcon extends React.Component<
  {
    resource: string;
    clickable: boolean;
    width: string;
    height: string;
    item?: any;
  },
  any
> {
  constructor(props: {
    resource: string;
    clickable: boolean;
    width: string;
    height: string;
    item?: any;
  }) {
    super(props);
    this.state = { imageLoaded: false };
  }

  render() {
    let itemClass = `item-bg-${this.props.item.rarity}`;
    let renderContent = (
      <img
        alt={""}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        src={this.props.item.thumb_url}
      />
    );
    if (this.props.clickable) {
      renderContent = <a href={this.props.item.detail_url}>{renderContent}</a>;
    }
    return (
      <div
        className={itemClass}
        style={{
          width: this.props.width,
          height: this.props.height,
          margin: "auto",
        }}
      >
        {renderContent}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  try {
    let item = state.inGameItems[ownProps.resource];
    return {
      item: item,
    };
  } catch {
    console.error(`Could not set icon for ${ownProps.resource}`);
    return {
      item: null,
    };
  }
};

export default connect(mapStateToProps)(DisplayIcon);
