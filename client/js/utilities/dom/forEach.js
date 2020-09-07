export const forEach = (nodeList, cb) => {
	typeof nodeList === "string"
		? document.querySelectorAll(nodeList).forEach((node) => cb(node))
		: nodeList.forEach((node) => cb(node));
};
