import React from "react";
import styles from "./index.less";

export default function Layout(props) {
	return (
		<div>
			<div className={styles.header}>
				{props.header}
			</div>
			<div className={styles.content}>
				<div className={styles.left}>
					{props.left}
				</div>
				<div className={styles.main}>
					{props.main}
				</div>
			</div>
		</div>
	);
}
