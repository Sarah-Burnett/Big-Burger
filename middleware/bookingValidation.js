const { check, validationResult } = require("express-validator");

const bookingValidationRules = () => {
	return [
		check("name")
			.notEmpty()
			.isLength({ min: 1 })
			.withMessage("Please input your name"),
		check("email").notEmpty().isEmail(),
		check("restaurant")
			.notEmpty()
			.matches(/'Tanygirisau'||'Glensgaich'/),
		check("date").notEmpty().isLength(10),
		check("time")
			.notEmpty()
			.isLength(5)
			.matches(/^[0-2][0-9]:[03][0]$/),
		check("party").notEmpty().isNumeric().isLength(1),
	];
};

const validate = (req, res, next) => {
	const errors = validationResult(req);
	if (errors.isEmpty()) next();
	else return res.status(400).json(errors);
};

module.exports = {
    bookingValidationRules,
    validate
}