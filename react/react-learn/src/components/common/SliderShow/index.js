import React, { Component } from "react";
import "./index.css";
import PropTypes from "prop-types";
import ImgContainer from "./ImgContainer";
import SwitchArrow from "./SwitchArrow";
import SwitchDots from "./SwitchDots";

export default class SliderShow extends Component {
	static defaultProps = {
		width: 520,
		height: 280,
		autoPlayDuration: 3000,
		duration: 1000,
		imgSrc: [],
		isAutoPlay: true,
		isShowDots: true,
		isShowArrow: true,
	};

	static propTypes = {
		width: PropTypes.number.isRequired, //容器宽度
		height: PropTypes.number.isRequired, //容器高度
		autoPlayDuration: PropTypes.number, //自动轮播切换时间
		duration: PropTypes.number, //完成切换的时间
		imgSrc: PropTypes.arrayOf(PropTypes.string), //图片路径数组
		isAutoPlay: PropTypes.bool, //是否自动播放
		isShowDots: PropTypes.bool, //是否显示切换的小圆点
		isShowArrow: PropTypes.bool, //是否显示左右切换的按钮
	};

	state = {
		currentIndex: 0, //当前的下标
	};

	imgContainerRef = (el) => {
		this.imgContainer = el;
	};

	timer = null; //计时器序号
	/**
	 * 自动轮播
	 */
	autoPlay() {
		clearInterval(this.timer);
		this.timer = setInterval(() => {
			let cur = this.state.currentIndex;
			cur = (cur + 1) % this.props.imgSrc.length;
			this.switchTo(cur);
		}, this.props.autoPlayDuration);
	}
	componentDidMount() {
		this.autoPlay();
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	/**
	 * 箭头切换
	 * @param {*} type 左箭头和右箭头切换
	 */
	onHandleArrowSwitch = (type) => {
		let current = this.state.currentIndex;
		if (type === "left") {
			current--;
			if (current < 0) {
				// 到最左边了，返回最后一个
				current = this.props.imgSrc.length - 1;
			}
		} else if (type === "right") {
			current++;
			if (current > this.props.imgSrc.length - 1) {
				// 到最右边，回到初始
				current = 0;
			}
		}
		this.switchTo(current);
	};

	/**
	 * 切换到指定的下标
	 * @param {*} index
	 */
	switchTo = (index) => {
		this.setState({
			currentIndex: index,
		});
		// 调用ImgContainer里面的switchImg方法
		this.imgContainer.switchImg(index);
	};

	render() {
		return (
			<div
				className="slider-show-container"
				style={{
					width: this.props.width,
					height: this.props.height,
				}}
				onMouseEnter={() => {
					clearInterval(this.timer);
				}}
				onMouseLeave={() => {
					this.autoPlay();
				}}
			>
				<ImgContainer
					ref={this.imgContainerRef}
					imgSrc={this.props.imgSrc}
					imgWidth={this.props.width}
					imgHeight={this.props.height}
					duration={this.props.duration}
				></ImgContainer>
				{this.props.isShowArrow && (
					<SwitchArrow
						onChange={this.onHandleArrowSwitch}
					></SwitchArrow>
				)}
				{this.props.isShowDots && (
					<SwitchDots
						total={this.props.imgSrc.length}
						currentIndex={this.state.currentIndex}
						onChange={this.switchTo}
					></SwitchDots>
				)}
			</div>
		);
	}
}
