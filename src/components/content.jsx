import React from "react";
class Content extends React.Component {
  render() {
    return (
      <div>
        {this.props.myTitle}
        <br />
        Name:{this.props.propsObject.name}, Age:{this.props.propsObject.age}
      </div>
    );
  }
}
export default Content;
