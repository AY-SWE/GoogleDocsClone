const io = require("socket.io")(9000, {
    cors:{
        origin: "http://localhost:3000",
        methods: ['GET', 'POST']
    }
})

io.on("connection", (socket) => {
    console.log("socket server-side connected");

    socket.on("send-changes", delta => {        //delta is the "changes"
        //console.log(delta);       //works
        socket.broadcast.emit("receive-changes", delta);
    });
})