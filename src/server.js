import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
    return res.send("I'm dying");
};

const handelLogin = (req, res) => {
    return res.send("<h1>Login here</h1>");
};

app.get("/",  handleHome);
app.get("/login", handelLogin);

const handleListening = () => console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);