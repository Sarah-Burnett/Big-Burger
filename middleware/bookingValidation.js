const { check, validationResult } = require("express-validator");

const bookingValidationRules = () => {
	return [
		check("name")
			.notEmpty()
			.isLength({ min: 1 })
			.withMessage("Name of booker missing"),
		check("email").notEmpty().isEmail().withMessage("Valid email missing"),
		check("restaurant")
			.notEmpty()
			.matches(/'Tanygirisau'||'Glensgaich'/)
			.withMessage("Restaurant missing"),
		check("date").notEmpty().isISO8601().withMessage("Date of booking missing"),
		check("day").notEmpty().isLength(8).withMessage("Day of booking missing"),
		check("time")
			.notEmpty()
			.isLength(5)
			.matches(/^[0-2][0-9]:[03][0]$/)
			.withMessage("Time of booking missing"),
		check("party")
			.notEmpty()
			.isNumeric()
			.isLength(1)
			.withMessage("Party size missing"),
	];
};

const validate = (req, res, next) => {
	const errors = validationResult(req);
	if (errors.isEmpty()) next();
	else return res.status(400).json(errors);
};

module.exports = {
	bookingValidationRules,
	validate,
};
