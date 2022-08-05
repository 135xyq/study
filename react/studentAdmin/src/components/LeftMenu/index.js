import React from "react";
import { NavLink } from "umi";
import styles from "./index.less";

export default function Menu() {
	return (
		<ul className={styles["menu-container"]}>
			<li className={styles.item}>
				<NavLink
					exact="true"
					className={({ isActive }) =>
						isActive ? styles.active : ""
					}
					to="/"
				>
					首页
				</NavLink>
			</li>
			<li className={styles.item}>
				<NavLink
					className={({ isActive }) =>
						isActive ? styles.active : ""
					}
					to="/project"
				>
					项目列表
				</NavLink>
			</li>
			<li className={styles.item}>
				<NavLink
					exact="true"
					className={({ isActive }) =>
						isActive ? styles.active : ""
					}
					to="/project/add"
				>
					新增项目
				</NavLink>
			</li>
		</ul>
	);
}
