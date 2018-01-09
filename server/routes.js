
        var path = require('path');
        // var mysql = require('mysql');
        // var dbconfig = require('./database');
        // var connection = mysql.createConnection(dbconfig.connection);
        // connection.query('USE ' + dbconfig.database);
        
        module.exports = function(app, express) {
            // app.use('/*THE FOLDER NAME*', express.static(path.join(__dirname, '../*THE APP NAME*/public')));
            app.use('/dashboard', express.static(path.join(__dirname, '../dashboard/public')));
            
            // app.post('/login', function (req, res) {
            //      var user = req.body.user;
            //      var pass = req.body.pass;
        
            //     if ((user.length) && (pass.length)) {
            //         connection.query('SELECT * FROM `' + dbconfig.users_table + '` WHERE (user = "' + user + '" OR email = "' + user + '") AND pass = "' + pass + '" AND active = "1"', function(err, data) {
            //             if (data[0]) {
            //                 data = data[0];
            //                 res.send(data);
            //             }
            //             else {
            //                 data = ['failed'];
            //                 res.send(data);
            //             }
            //         });
            //     }
            //     else {
            //         data = ['empty'];
            //         res.send(data);
            //     }
            // });
        };