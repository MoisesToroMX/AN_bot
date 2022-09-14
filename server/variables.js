require('dotenv').config();
const cors = require('cors');
const express = require('express');
const fetch = require('node-fetch');
const http = require('http');
const { Server } = require('socket.io');

const accessToken = process.env.WITAI_TOKEN;
const port = process.env.PORT;
const notFound = 'This was not found, text me something that I can find';

const app = express();
const server = http.createServer(app);

module.exports = { cors, express, fetch, Server, accessToken, port, app, server, notFound };