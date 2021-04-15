import React, { Component } from 'react';
import './startPage.css';
import MainNavbar from "../../shell/navbar";
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default class StartPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 1000)
  }

  componentDidUpdate() {
  }

  render() {
    return (
      <div className="StartPage">
        <MainNavbar homeButton="true"/>
        <div className="App-header">
          <div className="beginRectangle">
          <h1>
            Before you start
          </h1>
          <h5>
            Would you like to <Link to="/login">log in</Link>? You can earn points and get rewards
          </h5>
          <Button className="beginButton">
            Start
          </Button>
          </div>
        </div>
      </div>
    );
  }
}

