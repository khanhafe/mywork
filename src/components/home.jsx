import React from "react";
import Header from "./header.jsx";
import Content from "./content.jsx";
import PropTypes from "prop-types";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statePrp: props.headerProp,
      incrementPrp: 0
    };
  }
  btnClick = () => {
    this.setState({
      statePrp: "changed by state after btn click",
      incrementPrp: this.state.incrementPrp + 1
    });
  };
  render() {
    return (
      <div>
        <Header title="Home page" />
        <Content
          myTitle="this is Home Page from props"
          propsObject={{ name: "hafeez", age: 10 }}
        />
        this is home <br />
        {this.state.statePrp} <br />
        {this.props.contentProp} <br />
        {this.state.incrementPrp}
        <br />
        <button onClick={this.btnClick}>Test Me</button>
      </div>
    );
  }
}
Home.propTypes = {
  headerProp: PropTypes.string,
  contentProp: PropTypes.isRequired
};
Home.defaultProps = {
  headerProp: "Header from props...",
  contentProp: "Content from props..."
};
export default Home;
