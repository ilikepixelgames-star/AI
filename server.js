const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("./"));

app.post("/api/chat", async (req,res)=>{

    const userMessage = req.body.message;

    const reply = generateResponse(userMessage);

    res.json({
        reply
    });

});

function generateResponse(message){

    const msg = message.toLowerCase();

    if(msg.includes("hello"))
        return "Hello! How are you today?";

    if(msg.includes("your name"))
        return "I'm a simple AI assistant.";

    if(msg.includes("how are you"))
        return "I'm doing great!";

    if(msg.includes("bye"))
        return "Goodbye!";

    return "You said: " + message;
}

app.listen(3000,()=>{
    console.log("Running on port 3000");
});
