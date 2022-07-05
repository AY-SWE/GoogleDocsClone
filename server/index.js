const io = require("socket.io")(9000, {
    cors:{
        origin: "http://localhost:3000",
        methods: ['GET', 'POST']
    }
})

io.on("connection", (socket) => {
    console.log("socket server-side connected");
})