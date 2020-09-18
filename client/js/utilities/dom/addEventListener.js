export const addEventListener = (node, cb, event = "click") => {
	typeof node === "string"
		? document.querySelector(node).addEventListener(event, () => cb(node))
		: node.addEventListener(event, () => cb(node));
};
