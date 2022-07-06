import { Server } from 'socket.io';
import { getDocument, updateDocument} from '../server/controllers/documentController.js';

const io = new Server(9000, {
    cors:{
        origin: "http://localhost:3000",
        methods: ['GET', 'POST']
    }
})

io.on("connection", (socket) => {
    console.log("socket server-side connected");
    socket.on("get-document", async documentId => {
        console.log(documentId);
        const document = await getDocument(documentId);
        socket.join(documentId);
        socket.emit('load-document', document.data);   
        socket.on("send-changes", delta => {        //delta is the "changes"
            //console.log(delta);       //works
            socket.broadcast.to(documentId).emit("receive-changes", delta);         //to(socketId) sends event to one client
        });

        socket.on('save-document', async data => {
            await updateDocument(documentId, data);
        });
    })

})