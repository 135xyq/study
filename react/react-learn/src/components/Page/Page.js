import React, { Component } from "react";
import "./Page.css";

export default class Page extends Component {
	// 需传入总页码数total，每页展示多少count，一共展示多少个页码数showCount，初始页码currentPage,当前页码currentPage


	// 切换页码
	handleClickToChangePage(page) {
        if(page === this.props.currentPage){
            return;
        }
		if (page < 1) {
			page = 1;
		}
		if (page > this.pages) {
			page = this.pages;
		}
		this.props.pageChange && this.props.pageChange(page);
	}

	render() {
		this.pages = Math.ceil(this.props.total / this.props.count); //总页数
        // 没有数据，不需要分页
        if(this.pages === 0){
            return <div>暂无数据,不需要分页</div>
        }
		this.leftNumber =
			this.props.currentPage - Math.floor(this.props.showCount / 2);
		if (this.leftNumber < 1) {
			this.leftNumber = 1;
		}
		this.rightNumber = this.leftNumber + this.props.showCount - 1;
		if (this.rightNumber > this.pages) {
			this.rightNumber = this.pages;
			this.leftNumber = this.rightNumber - this.props.showCount + 1;
			if (this.leftNumber < 1) {
				this.leftNumber = 1;
			}
		}
		let pageList = [];
		for (let i = this.leftNumber; i <= this.rightNumber; i++) {
			pageList.push(
				<li
					className={
						this.props.currentPage === i
							? "page-item active"
							: "page-item"
					}
					key={i}
					onClick={this.handleClickToChangePage.bind(this, i)}
				>
					{i}
				</li>
			);
		}
		return (
			<React.Fragment>
				<ul>
					<li
						className={
							this.props.currentPage === 1
								? "page-item disabled"
								: "page-item"
						}
						onClick={this.handleClickToChangePage.bind(this, 1)}
					>
						首页
					</li>
					<li
						className={
							this.props.currentPage === 1
								? "page-item disabled previous-page"
								: "page-item previous-page"
						}
						onClick={this.handleClickToChangePage.bind(
							this,
							this.props.currentPage- 1
						)}
					>
						上一页
					</li>
					{pageList}
					<li
						className={
							this.props.currentPage === this.pages
								? "page-item disabled next-page"
								: "page-item next-page"
						}
						onClick={this.handleClickToChangePage.bind(
							this,
							this.props.currentPage + 1
						)}
					>
						下一页
					</li>
					<li
						className={
							this.props.currentPage === this.pages
								? "page-item disabled"
								: "page-item"
						}
						onClick={this.handleClickToChangePage.bind(
							this,
							this.pages
						)}
					>
						尾页
					</li>
				</ul>
			</React.Fragment>
		);
	}
}
