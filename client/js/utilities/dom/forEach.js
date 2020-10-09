export const forEach = (nodeList, cb) => {
	let nodes = nodeList;
	if (typeof nodeList === "string") nodes = document.querySelectorAll(nodes);
	console.log(nodes);
	for (const node of nodes) {
		cb(node);
	}
};
