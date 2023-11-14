import React from "react";
import EventHandle from "./index copy";

export default function Test() {
	function onHandleDel(e) {
		console.log(e);
        return !e;
	}
	return <EventHandle onHandleDel={onHandleDel}></EventHandle>;
}
