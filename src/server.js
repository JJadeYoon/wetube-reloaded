import express from "express";

const PORT = 4000;

const app = express();

const logger = (req, res , next) => {
    console.log("I'm in the middle");
    console.log(`${req.method} ${req.url}`);
    next();
}
const privateMiddleware = (req, res, next) => {
    const url = req.url;
    if (url === "/protected") {
        return res.send("<h1>Not Allowed</h1>");
    }
    console.log("Allowed");
    next();
}

const handleHome = (req, res) => {
    return res.send("HOME");
};

const handleprotected = (req, res) => {
    return res.send("It's private lounge");
}

app.use(logger);
app.use(privateMiddleware);
app.get("/", handleHome);
app.get("/protected", handleprotected)

const handleListening = () => console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);