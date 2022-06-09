import React, { Component } from 'react';
import "./About.css";
  
export default class About extends Component {
  render() {
    return (
      <div>
    <div class="split left">
      <div className="centered">
        <img 
          className="profile_image"
          // Image goes here
          alt="Profile Pic"
          ></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title">Yeshwanth Mandava</div>
        <div className="brief_description">
          What's up my dawg
        </div>
      </div>
    </div>
  </div>
    )
  }
}