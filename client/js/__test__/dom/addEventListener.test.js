// export const addEventListener = (node, cb, event = "click") => {
// 	typeof node === "string"
// 		? document.querySelector(node).addEventListener(event, () => cb(node))
// 		: node.addEventListener(event, () => cb(node));
// };

const html = `
	<button id="btn">Click me!</Button>
`;

test("it correctly performs callback on click", () => {
	document.body.innerHTML = html;
	addEventListener("#btn", () => {
		btn.disabled = true;
		btn.innerText = "Clicked!";
	});
	btn.click();
	expect(btn.disabled).toBe(true);
	expect(btn.innerText).toBe("Clicked");
});

test("it correctly performs callback on click", () => {
	document.body.innerHTML = html;
	addEventListener(document.querySelector("#btn"), () => {
		btn.disabled = true;
		btn.innerText = "Clicked!";
	});
	btn.click();
	expect(btn.disabled).toBe(true);
	expect(btn.innerText).toBe("Clicked");
});

