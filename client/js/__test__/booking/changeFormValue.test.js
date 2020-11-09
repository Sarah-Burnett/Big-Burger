const { selectFields } = require("express-validator/src/select-fields");
const { changeFormValue } = require("../../utilities/booking/changeInputValue");

const inputs = `
        <input id="email" value="email"/>
        <input id="restaurant" value="Glensgaich"/>
        <input id="day" value="20/12/2020"/>
        <input id="time" value="17:00"/>
        <input id="party" value="4"/>
 `;

test("clicking party button changes party input value", () => {
	document.body.innerHTML =
		inputs +
		`
        <button 
            class="dropdownBtn" 
            data-input="#party"
            data-value="3"
        />
    `;
	console.log({ email, restaurant, day, time, party });
    const btn = document.querySelector("button");
	btn.click();
	expect(document.querySelector("#party").value).toBe("3");
	expect(document.querySelector("#email").value).not.toBe("3");
});

test("clicking time button changes time input value", () => {
	document.body.innerHTML =
		inputs +
		`
        <button 
            class="dropdownBtn" 
            data-input="#time"
            data-value="17:00"
        />
    `;
	const btn = document.querySelector("button");
	changeFormValue(btn);
	btn.click();
	expect(document.querySelector("#time").value).toBe("17:00");
	expect(document.querySelector("#day").value).not.toBe("17:00");
});

test("clicking day button changes day input value", () => {
	document.body.innerHTML =
		inputs +
		`
        <button 
            class="dropdownBtn" 
            data-input="#day"
            data-value="14/10/2020"
        />
    `;
	const btn = document.querySelector("button");
	changeFormValue(btn);
	btn.click();
	expect(document.querySelector("#day").value).toBe("14/10/2020");
	expect(document.querySelector("#restaurant").value).not.toBe("14/10/2020");
});
