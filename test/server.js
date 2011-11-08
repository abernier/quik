require('../lib/index')({
    routes: {
        '/': function(req, res, next){
            res.text('It was quik!');
        },
        '/api': function(req, res, next){
            res.json({it: 'was quik!'});
        }
    }
}).listen(3003);