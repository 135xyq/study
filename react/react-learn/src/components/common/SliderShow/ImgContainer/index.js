import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";

export default class ImgContainer extends Component {
    static propTypes = {
        imgSrc:PropTypes.arrayOf(PropTypes.string),//图片地址
        imgWidth:PropTypes.number.isRequired,//图片宽度
        imgHeight:PropTypes.number.isRequired,//图片高度
        duration:PropTypes.number.isRequired,//切换时间
    }
    
    containerRef = React.createRef();
    // 切换图片的移动
    switchImg = index=>{
        // 防止index不合法
        if(index < 0){
            index = 0
        }
        if(index > this.props.imgSrc.length - 1){
            index = this.props.imgSrc.length - 1
        }
        const targetLeft = -index * this.props.imgWidth;//目标位置
        let currentLeft = parseFloat(window.getComputedStyle(this.containerRef.current).marginLeft);//当前位置
        const total = targetLeft - currentLeft;//要移动的总位置
        const count = Math.ceil(this.props.duration / this.tick);//要移动的次数
        let eachDistance = total / count;
        let currentTimes = 0;//当前运行的次数
        clearInterval(this.timer);
        this.timer = setInterval(()=>{
            currentTimes++;
            currentLeft+=eachDistance;
            this.containerRef.current.style.marginLeft = currentLeft + "px";
            if(currentTimes === count){
                this.containerRef.current.style.marginLeft = targetLeft+"px";//直接到最终位置，防止误差
                clearInterval(this.timer);
            }
        },this.tick)
    }

    timer = null;//计时器序号
    tick = 16;//刷新位置的间隔时间

	render() {
        let imgs = this.props.imgSrc.map((item,index)=>(<img src={item} style={{
            width:this.props.imgWidth,
            height:this.props.imgHeight,
            float:"left"
        }} key={index} alt={"轮播图图片"+index+1}></img>))
		return <div ref={this.containerRef} className="img-container-container" style={{
            width:this.props.imgSrc.length * this.props.imgWidth,
            height:this.props.imgHeight,
        }}>{imgs}</div>;
	}
}
