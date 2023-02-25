const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  fs.readFile('quotes.txt', (err, data) => {
    if (err) throw err;
    const quotes = data.toString().split('\n');
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const html = `
      <html>
        <head>
          <title>Berühmte Zitate</title>
          <style>
            body {.ans-serif;
              background-color: #f7f7f7;
              text-align: center;
            }
            h1 {
              color: #444;
              font-size: 2.5rem;
              margin-top: 2rem;
            }
            p {
              color: #666;
              font-size: 1.5rem;
              margin-top: 1rem;
            }
            button {
              background-color: #5c5c5c;
              color: #fff;
              font-size: 1.2rem;
              padding: 0.5rem 1rem;
              border: none;
              border-radius: 5px;
              margin-top: 1rem;
              cursor: pointer;
            }
          </style>
        </head>
        <body>
          <h1>Berühmte Zitate</h1>
          <p>${randomQuote}</p>
          <button onclick="location.reload()">Ein weiteres Zitat</button>
        </body>
      </html>
    `;
    res.send(html);
  });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
