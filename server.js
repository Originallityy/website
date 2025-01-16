// filepath: /workspaces/website/server.js
const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/visit', (req, res) => {
    fs.readFile('visits.json', (err, data) => {
        if (err) throw err;
        let visits = JSON.parse(data);
        visits.count += 1;
        fs.writeFile('visits.json', JSON.stringify(visits), (err) => {
            if (err) throw err;
            res.json({ count: visits.count });
        });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});