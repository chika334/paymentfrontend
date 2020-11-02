import React, { Component } from "react";
import { FaWifi, FaLightbulb, FaShuttleVan, FaBeer } from "react-icons/fa";
import {MdPhoneAndroid, MdTv} from 'react-icons/md'
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <MdPhoneAndroid />,
        title: "Buy Phone Credit",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
      },
      {
        icon: <FaWifi />,
        title: "Buy Internet Data",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
      },
      {
        icon: <MdTv />,
        title: "Pay TV Subscription",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
      },
      {
        icon: <FaLightbulb />,
        title: "Pay Electricity Bill",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
