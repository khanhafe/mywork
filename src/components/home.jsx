import React from "react";
import Header from "./header.jsx";
import Content from "./content.jsx";
class Home extends React.Component {
  render() {
    return (
      <div>
        <Header title="Home page" />
        <Content myTitle="this is Home Page from props" />
        this is home
      </div>
    );
  }
}
export default Home;
