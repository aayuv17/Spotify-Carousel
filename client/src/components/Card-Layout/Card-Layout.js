import { CardColumns } from "react-bootstrap";
import React, { Component } from "react";
import Card from "../Card/Card";
import axios from "axios";
//import Navbar from '../../components/Navbar/navbar';
import "./Card-Layout.scss";
import "./Card-Layout.css";
import Lottie from "react-lottie";
import animationData from "./../../lotties/cards-loading.json";
import Swal from "sweetalert2";

export default class CardLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: [],
      loaded: false,
    };
  }
  componentDidMount() {
    axios
      .get(this.props.serverURL)
      .then((response) => {
        if (response.data.message) {
          Swal.fire({
            icon: "info",
            title: response.data.message,
          });
        }
        this.setState({
          details: response.data.items,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    setTimeout(() => {
      this.setState({
        loaded: true,
      });
    }, 7000);
  }

  render() {
    var items = [];
    if (this.state.details) {
      for (let item of this.state.details) {
        items.push(
          <Card
            key={item}
            src={item.image}
            main={item.main}
            subtext={item.subtext}
            id={item.id}
            type={this.props.type}
            delete={this.props.delete}
            loginWithSpotify={this.props.loginWithSpotify}
            add={this.props.add}
          />
        );
      }
    }
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <div>
        {this.state.loaded ? null : (
          <div
            style={{
              background: "white",
              height: "100vh",
              width: "100%",
              textAlign: "center",
            }}
          >
            <Lottie options={defaultOptions} height={700} width={700} />
          </div>
        )}
        {items.length > 0 ? (
          <div style={this.state.loaded ? {} : { display: "none" }}>
            <div className="heading">{this.props.heading}</div>
            <div className="subheading">{this.props.subheading}</div>
            <br />
            <br />
            <CardColumns>{items}</CardColumns>
          </div>
        ) : (
          <div style={this.state.loaded ? {} : { display: "none" }}>
            <div className="heading">{this.props.heading}</div>
            <div className="subheading">{this.props.subheading}</div>
            <br />
            <br />
            My my such empty!
          </div>
        )}
      </div>
    );
  }
}
