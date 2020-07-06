const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);

app.get("/", function(req, res) {
    res.sendfile(path.join(__dirname, "/Develop/public/index.html"))});

app.get("/notes", function(req, res) {
    res.json(path.join(__dirname, "./public/notes.html"))});

// app.get('/notes', function(req,res) {
//     res.sendFile(path.join(__dirname, "./public/notes.html"))
// });

// app.get('/api/notes', function(req,res) {
//     res.json(db);
// });

// app.get('*', function(req,res)  {
//     res.sendFile(path.join(__dirname, "./public/index.html"))
// });

app.listen(PORT, () => console.log(`Listening at port ${PORT}`));