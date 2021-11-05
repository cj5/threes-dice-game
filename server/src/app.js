// const Koa = require('koa');
// const app = new Koa();
// const Router = require('@koa/router');
// const router = new Router();

// router.get('/', (ctx, next) => {
//   ctx.sendFile('http://localhost:8081');
// });

// app
//   .use(router.routes())
//   .use(router.allowedMethods())

const express = require('express')
const app = express();
// const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(5001, () => console.log('listening on 5001...'));

const http = require('http');
const { v4: uuidv4 } = require('uuid');
const websocketServer = require('websocket').server
const httpServer = http.createServer();
httpServer.listen('5000', () => console.log('listening on 5000...'));

let clients = {};
let games = {};

const wss = new websocketServer({
  'httpServer': httpServer
})

wss.on('request', request => {
  const connection = request.accept(null, request.origin);
  connection.on('open', () => console.log('opened!'));
  connection.on('close', () => console.log('closed!'));
  connection.on('message', message => {
    const result = JSON.parse(message.utf8Data);

    // Client trying to create game
    if (result.method === 'create') {
      const clientId = result.clientId;
      const gameId = uuidv4();
      games[gameId] = {
        'id': gameId,
        'balls': 20,
        'clients': []
      }

      const payload = {
        'method': 'create',
        'game': games[gameId]
      }

      const con = clients[clientId].connection;
      con.send(JSON.stringify(payload));
    }

    // Client trying to join game
    if (result.method === 'join') {
      const clientId = result.clientId;
      const gameId = result.gameId;
      const game = games[gameId];
      if (game.clients.length >= 3) {
        // Max players reached
        return;
      } else {
        const colors = {'0': 'red', '1': 'green', '2': 'blue'};
        const color = colors[game.clients.length];
        game.clients.push({
          'clientId': clientId,
          'color': color
        });

        const payload = {
          'method': 'join',
          'game': game
        }

        game.clients.forEach(c => {
          clients[c.clientId].connection.send(JSON.stringify(payload));
        });
      }
    }
  })

  // generate new clientId
  const clientId = uuidv4();
  clients[clientId] = {
    'connection': connection
  };

  const payload = {
    'method': 'connect',
    'clientId': clientId
  }

  connection.send(JSON.stringify(payload));
})
