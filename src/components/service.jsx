import React from "react";
import Header from "./header.jsx";
import Content from "./content.jsx";
class Service extends React.Component {
  render() {
    return (
      <div>
        <Header title="service page" />
        <Content myTitle="this is Service Page from props" />
        this is service
      </div>
    );
  }
}
export default Service;
