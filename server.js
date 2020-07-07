const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
let db = require("./db/db.json")
const fs= require("fs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/apiroutes")(app);
require("./routes/htmlroutes")(app);

userArray = [];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"))
});

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
  });

  app.get("/api/notes", function(req, res) {
      console.log("Testing routes");
    return res.json(db);
  });

  app.post("/api/notes", function (req, res) {
console.log("Testing Routes");
    fs.readFile("./db/db.json", "utf8", (err, data) => {
      if (err) {
        console.log(err);
      }
      const db = JSON.parse(data);
      const addNote = req.body;
      db.push(addNote);
      const dbIndex = db.map(function(note,index){
          note.id=index;
          return note;
      })
console.log(db);
      fs.writeFile("./db/db.json", JSON.stringify(db), "utf8", (err) => {
        if (err) {
          return res.send("Error");
        }
        res.json(addNote);
      });
    });
  });

  app.delete('/api/notes/:id', (req, res) => {
    const dbId = req.params.id;
  
    fs.readFile(__dirname + "/db/db.json", "utf8", (err, data) => {
      if (err) throw err;
      
      const db = JSON.parse(data);
    //   const output = jsonInput.filter(note => note.id !== parseInt(noteId));
  
      fs.writeFile(__dirname + "/db/db.json", JSON.stringify(results), (err, data) => {
        if (err) throw err;
        res.json(db);
      });
    });
  });

app.listen(PORT, () => console.log(`Listening at port ${PORT}`));
        
