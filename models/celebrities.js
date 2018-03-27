var db = require('./manageDB');

exports.findAll = function (callback) {
    db.executeQuery("select * from celebrities", function (err, data){
        callback(err, data);
    });
}

exports.create = function (value ,callback) {
	var query = "INSERT INTO celebrities SET ?";
	db.executeParamsQuery(query, value, function (err, data){
        callback(err, data);
    });
}

exports.delete = function (value, callback) {
	var query = "Delete From celebrities Where id = ?";
	db.executeParamsQuery(query, value, function(err, data){
		callback(err, data);
	});
}

exports.update = function (value, callback) {
	var query = "Update celebrities Set image_url=?, name=?, description=? Where id = ?";
	db.executeParamsQuery(query, [value.image_url, value.name, value.description, value.id], function(err, data){
		callback(err, data);
	});
}

exports.findOne = function (value, callback) {
	var query = "Select* From celebrities Where id = ?";
	db.executeParamsQuery(query, value, function(err, data){
		callback(err, data);
	});
}

