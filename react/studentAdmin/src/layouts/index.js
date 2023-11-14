import React from "react";
import { useLocation, Outlet } from "umi";
import Layout from "@/components/Layout";
import Menu from "../components/LeftMenu";
import Header from "../components/Header";

export default function index() {
	const location = useLocation();
	if (location.pathname === "/login") {
		return <Outlet></Outlet>;
	} else {
		return (
			<>
				<Layout
					left={<Menu></Menu>}
					header={<Header></Header>}
					main={<Outlet></Outlet>}
				></Layout>
			</>
		);
	}
}
