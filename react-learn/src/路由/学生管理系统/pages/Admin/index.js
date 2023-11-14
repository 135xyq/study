import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../../components/Layout";
import Header from "../Header";
import Aside from "../Aside";
import StudentList from "./student/StudentList";
import StudentAdd from "./student/StudentAdd";
import CourseList from "./course/CourseList";
import CourseAdd from "./course/CourseAdd";
import Welcome from "../Welcome";

export default function Admin() {
	return (
		<Layout header={<Header />} aside={<Aside />}>
			<Routes>
				<Route path="/student" element={<StudentList />}></Route>
				<Route path="/student/add" element={<StudentAdd />}></Route>
				<Route path="/course" element={<CourseList />}></Route>
				<Route path="/course/add" element={<CourseAdd />}></Route>
				<Route path="/" exact element={<Welcome />}></Route>
				<Route path="*" exact element={<div>找不到</div>}></Route>
			</Routes>
		</Layout>
	);
}
