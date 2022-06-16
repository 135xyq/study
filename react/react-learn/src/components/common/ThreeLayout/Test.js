import React from "react";
import ThreeLayout from ".";

export default function Test() {
	return (
		<ThreeLayout
			left={
				<div
					style={{
						border: "1px solid #0ff",
					}}
				>
					左区域
				</div>
			}
			right={
				<div
					style={{
						border: "1px solid #0f0",
					}}
				>
					右区域
				</div>
			}
		>
			<div
				style={{
					border: "1px solid black",
				}}
			>
				主区域
				<div
					style={{
						overflow: "hidden",
						textOverflow: "ellipsis",
						whiteSpace: "nowrap",
					}}
				>werwef
				</div>
			</div>
		</ThreeLayout>
	);
}
