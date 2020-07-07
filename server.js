const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
notesArray = [];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./Develop/public/index.html"))});



  
app.get("/notes", function(req, res) {
    res.json(path.join(__dirname, "/Develop/public/notes.html"))});

app.post("/api/notes", function (req, res) {
        const newNote = req.body;
        notesArray.push(newNote);
        res.json(newNote);
      });

app.get("/api/notes", function (req, res) {
        res.json(notesArray);
      });

// app.get('/api/notes', function(req,res) {
//     res.json(db);
// });


app.listen(PORT, () => console.log(`Listening at port ${PORT}`));
