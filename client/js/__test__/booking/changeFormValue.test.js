const { selectFields } = require("express-validator/src/select-fields");
const { changeFormValue } = require("../../utilities/booking/changeFormValue");

test("clicking party button changes party input value", () => {
	document.body.innerHTML = `
        <input id="party"/>
        <input id="email"/>
        <button 
            class="dropdownBtn" 
            data-input="#party"
            data-value="3"
        />
    `;
	const btn = document.querySelector("button");
	changeFormValue(btn);
	btn.click();
	expect(document.querySelector("#party").value).toBe("3");
	expect(document.querySelector("#email").value).not.toBe("3");
});

test("clicking time button changes time input value", () => {
	document.body.innerHTML = `
        <input id="time"/>
        <input id="day" data-date=${new Date("2020-10-14")}/>
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
	document.body.innerHTML = `
        <input id="day"/>
        <input id="restaurant"/>
        <button 
            class="dropdownBtn" 
            data-input="#day"
            data-value="14/10/2020"
            data-date=${new Date("2020-10-14")}
        />
    `;
	const btn = document.querySelector("button");
	changeFormValue(btn);
	btn.click();
	expect(document.querySelector("#day").value).toBe("14/10/2020");
	expect(document.querySelector("#restaurant").value).not.toBe("14/10/2020");
});
