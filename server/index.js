const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

const socketIoServer = require('http').createServer(app);

const io = require('socket.io')(socketIoServer, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  socket.on('enterGame', (codeRoom) => {
    console.log(codeRoom);
  });
});

app.use(cors());

app.use(express.static(path.join(__dirname, '..', 'public')));

// app.get('/', (_req, res) => res.sendFile(path.join(__dirname, '..', 'public/index.html')));

socketIoServer.listen(3000, () => console.log('App listening on port 3000'));
