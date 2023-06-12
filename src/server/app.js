const Express = require("express")();
const Http = require("http").Server(Express);
const Socketio = require("socket.io")(Http, { path: '/api' });

const HOST = '0.0.0.0'
const PORT = 8080

var position = {
    x: 200,
    y: 200
};

Http.listen(PORT, HOST, () => {
    console.log(`Listening at ${HOST}:${PORT}`);
});

Socketio.on("connection", socket => {
    console.log('visitor!');
    // send current position to joining players
    socket.emit("position", position);
    console.log(position);

    socket.on("move", data => {
        switch(data) {
            case "left":
                position.x -= 15;
                Socketio.emit("position", position);
                break;
            case "right":
                position.x += 15;
                Socketio.emit("position", position);
                break;
            case "up":
                position.y -= 15;
                Socketio.emit("position", position);
                break;
            case "down":
                position.y += 15;
                Socketio.emit("position", position);
                break;
        }
    });
});