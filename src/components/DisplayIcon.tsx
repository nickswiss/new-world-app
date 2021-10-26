import React from "react";
import { connect } from "react-redux";

class DisplayIcon extends React.Component<
  {
    resource: string;
    clickable: boolean;
    width: string;
    height: string;
    icon?: any;
  },
  any
> {
  constructor(props: {
    resource: string;
    clickable: boolean;
    width: string;
    height: string;
    icon?: any;
  }) {
    super(props);
    this.state = { imageLoaded: false };
  }

  render() {
    let itemClass = `item-bg-${this.props.icon.rarity}`;
    let renderContent = (
      <img
        alt={""}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        src={this.props.icon.thumb_url}
      />
    );
    if (this.props.clickable) {
      renderContent = <a href={this.props.icon.detail_url}>{renderContent}</a>;
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
    let icon = state.icons[ownProps.resource];
    return {
      icon: icon,
    };
  } catch {
    console.error(`Could not set icon for ${ownProps.resource}`);
    return {
      icon: null,
    };
  }
};

export default connect(mapStateToProps)(DisplayIcon);
