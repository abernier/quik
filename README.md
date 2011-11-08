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