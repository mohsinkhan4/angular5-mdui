/**
 * Express Js based web server
 */
const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const FORM_METADATA = path.join(__dirname, 'localdata.json');

const app = express();
// Redirecting the root url to folder www which holds the User Interface implementation
app.use('/', express.static(path.join(__dirname, 'dist')));
app.use(['/form', '/designer'], express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");

    // Disable caching so we'll always get the latest comments.
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.get('/df/api/formmetadata', function(req, res) {
    fs.readFile(FORM_METADATA, function(err, data) {
        if (err) {
            console.error(err);
        }
        res.json(JSON.parse(data));
    });
});

app.post('/df/api/formmetadata', function(req, res) {
    const metadata = req.body;
    fs.writeFile(FORM_METADATA, JSON.stringify(metadata, null, 4), function(err) {
        if (err) {
            console.error(err);
            res.json({ 'result': err });
        }
        res.json({ 'result': 'updated' });
    });
});

app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function() {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
});
