
var connection = require("../config/connection.js")
//create var orm and export
//with selection and insert queries

//create question mark function-
function createQmarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

//create helper translate string to sql readable
function translateSql(obj) {
    var arr = [];
    for (var key in obj[key]) {
        if (Object.hasOwnProperty.call(obj, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value)
        }
    }
    return arr.toString();
}



var orm = {
    selectAll: function (table, cb) {
        var queryString= "SELECT * FROM " + "" + table + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function (table, cols, vals, cb) {
        //var dbQuery = "INSERT INTO" + table + "(" + cols.toString() + ")" + "VALUES (" + createQmarks(vals.length) + ")";
        var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += createQmarks(vals.length);
    queryString += ") ";
        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    updateOne: function (table, objColVals, condition, cb) {
        var queryString =
        "UPDATE " +
        table +
        " SET " +
        translateSql(objColVals) +
        " WHERE " +
        condition;
       //var queryString = "UPDATE " + table;
       //queryString += " SET";
       //queryString += translateSql(objColVals);
       //queryString += " WHERE ";
       //queryString += condition;
        console.log(queryString);

        connection.query(queryString, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    deleteOne: function (table, condition, cb) {
        //var dbQuery = "DELETE FROM " + table + "WHERE" + condition;
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;
        console.log(dbQuery);
        connection.query(dbQuery, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    }
};
module.exports = orm;