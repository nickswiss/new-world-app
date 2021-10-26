import React from "react";
import { connect } from "react-redux";
import { objectIsEmpty } from "../lib/utils";

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
        style={{ width: this.props.width, height: this.props.height }}
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
