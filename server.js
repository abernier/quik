var Connect = require('connect'),       // http://senchalabs.github.com/connect/
    cors = require('connect-xcors'),    // https://github.com/antono/connect-cors
    quip = require('quip'),             // http://github.com/caolan/quip
    dispatch = require('dispatch');     // http://github.com/caolan/dispatch

var port = 3003;

var server = Connect.createServer(
    cors(),
    quip(),
    dispatch({
        '/': function(req, res, next){
            res.text('It was quik!');
        },
        '/api': function(req, res, next){
            res.json({it: 'was quik!'});
        }
    })
);

console.log('Listening on ' + port);
server.listen(port);