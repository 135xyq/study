import React, { Component } from "react";
import Page from "./Page";
import MovieList from "./MovieList";

export default class Container extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPage: 1,
			total: 0,
			count: 20,
			showCount: 10,
			movieList: [],
		};
		this.fetchData();
	}
	onHandleChange = (page) => {
		this.setState({
			currentPage: page,
		});
		this.fetchData();
	};

	async fetchData() {
		const result = await fetch(
			`https://study.duyiedu.com/api/movies?page=${this.state.currentPage}&size=${this.state.count}`,
			{
				"mode": "cors",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Credentials": true,
			}
		)
			.then((resp) => {
				return resp.json();
			})
			.then((resp) => resp.data);
		console.log(result);
		this.setState({
			total: result.movieTotal,
			movieList: result.movieList,
		});
	}

	render() {
		return (
			<React.Fragment>
				<MovieList movieList={this.state.movieList}></MovieList>
				<Page {...this.state} pageChange={this.onHandleChange}></Page>
			</React.Fragment>
		);
	}
}
