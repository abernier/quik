var connect = require('connect'),       // http://senchalabs.github.com/connect/
    cors = require('connect-xcors'),    // https://github.com/antono/connect-cors
    quip = require('quip'),             // http://github.com/caolan/quip
    dispatch = require('dispatch');     // http://github.com/caolan/dispatch

function quik(spec) {
    var that;
    
    spec = spec || {};
    
    that = connect(
        cors(spec.cors),
        quip(),
        dispatch(spec.routes || {
            '/': function (req, res, next) {
                res.text('It was quik!');
            }
        })
    );
    
    var super_listen = that.listen;
    
    function listen(port) {
        console.log('Listening on ' + (port || spec.port));
        super_listen.apply(that, [port]);
    }
    
    that.listen = listen;
  
    return that;
}

exports = module.exports = quik;