import React, { useEffect, useState } from "react";
import { getProject } from "@/server/project";

function Index(props) {
	const [project, setProject] = useState([]);
	useEffect( () => {
		(async () => {
			const res = await getProject();
			setProject(res.data.rows);
		})();
	},[]);
	return (
		<ul>
			{project.map((item) => {
				return (
					<li key={item.id}>
						<p>名称：{item.name}</p>
						<p>描述: {item.description}</p>
						<p>创建日期: {item.createdAt}</p>
						<p>
							<img
								src={"http://xyq135.top/site-server/public/" + item.thumb}
								alt="图片"
							/>
						</p>
					</li>
				);
			})}
		</ul>
	);
}

export default Index;
