import express from "express";

const PORT = 4000;

const app = express();

const gossipMddleware = (req, res , next) => {
    console.log("I'm in the middle");
    next();
}

const handleHome = (req, res, next) => {
    return res.end();
};

const handelLogin = (req, res) => {
    return res.send("<h1>Login here</h1>");
};

app.get("/", gossipMddleware, handleHome);
app.get("/login", handelLogin);

const handleListening = () => console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);