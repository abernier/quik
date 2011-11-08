INSTALL
-------

    npm install https://github.com/abernier/quik/tarball/master

USAGE
-----

    $ cat > api.js <<EOF
    require('quik')({
        routes: {
            'GET /': function (req, res) {
                res.json({it: 'was quick'});
            }
        }
    }).listen(3003);
    EOF
  
    $ node api.js
    Listening on 3003