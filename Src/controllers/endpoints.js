var url = require("url");

exports.getDevops = function getDevops (req, res, next) {
    var result = [
        {
            "name":"test",
            "tasks":[
                "task1",
                "task2"
            ],
            "configurations":[
                "configuration1",
                "configuration2"
            ]
        }
    ];

    if(typeof result !== 'undefined') {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(result || {}, null, 2));
    }
    else
        res.end();
};