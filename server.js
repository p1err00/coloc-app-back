#!/usr/bin/env node
const express = require("express");
const http = require('http')
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
const cors = require('cors');
const server = http.createServer(app);
const io = require("socket.io")(server,
  {
    cors: {
      origin: "*", methods: ["GET", "POST"]
    }
  });



app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS, HEAD");
  res.header("Authorization", "Content-Type");
  res.header("Content-Type", "application/json; charset=UTF-8");
  next();
});

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use(cookieParser());


//CRUD routes
require("./routes/course.routes.js")(app);
require("./routes/stock.routes.js")(app);
require("./routes/importance.routes.js")(app);
require("./routes/categorie.routes.js")(app);
require("./routes/wishlist.routes.js")(app);
require("./routes/site.routes.js")(app);
require("./routes/taches.routes.js")(app);
require("./routes/evenements.routes.js")(app);
require("./routes/charges.routes.js")(app);
require("./routes/extras.routes.js")(app);
require("./routes/auth.routes.js")(app);
require("./routes/colocation.routes.js")(app);
require("./routes/courses_courante.routes.js")(app);
require("./routes/notification.routes.js")(app);
require("./routes/channel.routes.js")(app);
require("./routes/channel_user.routes.js")(app);
require("./routes/message.routes.js")(app);
require("./routes/vote.routes.js")(app);
require("./routes/choice.routes.js")(app);
require("./routes/choice_user.routes.js")(app);
require("./routes/recurent_tache.routes.js")(app);
require("./routes/recurent_event.routes.js")(app);
require("./routes/stockage.routes.js")(app);
require("./routes/stockage_folder.routes.js")(app);
require("./routes/shared.routes.js")(app);
require("./routes/file.routes.js")(app);
require("./routes/payment.routes.js")(app);
require("./routes/abonnement.routes.js")(app);
require("./routes/section_payment.routes.js")(app);
//require("./routes/section_payment_users.routes.js")(app);
require("./routes/section_taches.routes.js")(app);
require("./routes/event_payment.routes.js")(app);
require("./routes/external_user.routes.js")(app);
require("./routes/section_events_item.routes.js")(app);
require("./routes/section_events_users.routes.js")(app);
require("./routes/section_events.routes.js")(app);
require("./routes/section_payment.routes.js")(app);
require("./routes/section_taches_item.routes.js")(app);
require("./routes/section_taches_users.routes.js")(app);
require("./routes/section_taches.routes.js")(app);
require("./routes/wishlist_payment.routes.js")(app);



//Socket chat
io.on("connection", (socket) => {
  console.log('a user connected');

  socket.on('join', function (data) {
    // Joining room
    socket.join(data.room);
    console.log(data.user + ' joined the room : ' + data.room);
    socket.broadcast.to(data.room).emit('new user joined', { user: data.user, message: 'has joined this room.' });
  });

  socket.on('new message', function (data) {
    console.log(data);
    io.in(data.room).emit('new message', { user: data.user, message: data.message });
  });
});

// set port, listen for requests

server.listen((process.env.PORT || 3000), () => {
  console.log('Started');
});
