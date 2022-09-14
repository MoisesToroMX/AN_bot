require('dotenv').config();
const cors = require('cors');
const express = require('express');
const fetch = require('node-fetch');
const socketServer = require('socket.io');

const accessToken = process.env.WITAI_TOKEN;
const port = process.env.PORT;
const notFound = 'This was not found, text me something that I can find';

const app = express();

module.exports = { cors, express, fetch, socketServer, accessToken, port, notFound,app };