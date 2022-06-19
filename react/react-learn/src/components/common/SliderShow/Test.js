import React, { Component } from 'react'
import SliderShow from '.';
import img1 from "./TestImg/1.jpg";
import img2 from "./TestImg/2.jpg";
import img3 from "./TestImg/3.jpg";
import img4 from "./TestImg/4.jpg";
import img5 from "./TestImg/5.jpg";
import img6 from "./TestImg/6.jpg";

const imgs = [img1,img2,img3,img4,img5,img6];

export default class Test extends Component {
  render() {
    return (
      <div>
        <SliderShow imgSrc={imgs} isShowDots={false}></SliderShow>
      </div>
    )
  }
}
