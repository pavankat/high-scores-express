var bcrypt = require('bcryptjs');
var express = require('express');
var router  = express.Router();
var mysql = require('mysql')
var connection = require('../config/connection.js')

//ONE IS GET
	//get all the scores

//ONE IS POST
	//insert a score

router.get('/', function(req,res) {
	var query = "SELECT * FROM scores"

	connection.query(query, function(err, scores) {
		res.render('scores/index', {
			scores: scores,
			logged_in: req.session.logged_in,
			user_email: req.session.user_email,
			user_id: req.session.user_id,
			username: req.session.username
		});

	});
});

router.post('/create', function(req,res) {
	var query = "SELECT * FROM users u LEFT JOIN user_coupons uc ON uc.user_id = u.id LEFT JOIN coupons c ON c.id = uc.coupon_id WHERE u.id = ?"

	connection.query(query, [req.session.user_id], function(err, coupons) {
		res.render('coupons/purchased', {
			purchase_coupon: false,
			coupons: coupons,
			logged_in: req.session.logged_in,
			user_email: req.session.user_email,
			user_id: req.session.user_id,
			company: req.session.company,
			username: req.session.username
		});
	});
});

module.exports = router;
