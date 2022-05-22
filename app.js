const { Server } = require("./models/server");
require('dotenv').config()

//Instancia el servidor y el lister
const server = new Server()
server.listen()

