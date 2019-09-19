import React, { Component } from "react";
import SHOP_DATA from "./shop-data";
import PreviewCollection from "./../../components/preview-collection/preview-collection";
class ShowPage extends Component {
  state = {
    collections: SHOP_DATA
  };
  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(({ id, ...otherprops }) => (
          <PreviewCollection key={id} {...otherprops}></PreviewCollection>
        ))}
      </div>
    );
  }
}

export default ShowPage;
