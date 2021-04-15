import React, { Component } from 'react';
import './informationPage.css';
import MainNavbar from "../../shell/navbar";
import { Tabs, Tab, Sonnet } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default class InformationPage extends React.Component {
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
      <div className="InformationPage">
        <MainNavbar className="mainNavbar" homeButton="true"/>
        <Tabs defaultActiveKey="howTo" id="uncontrolled-tab-example" className="mainTab">
            <Tab eventKey="howTo" title="How to">
                <p>Lorem ipsum</p>
            </Tab>
            <Tab eventKey="contact" title="Contact">
                <p>Lorem ipsum</p>
            </Tab>
        </Tabs>
      </div>
    );
  }
}

