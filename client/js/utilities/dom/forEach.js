export const forEach = (nodeList, cb1, cb2) => {
	let nodes = nodeList;
	if (typeof nodeList === "string") nodes = document.querySelectorAll(nodes);
	for (const node of nodes) {
		cb1(node);
		if (cb2) cb2(node);
	}
};
