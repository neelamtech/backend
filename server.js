const express = require('express');
const cors = require("cors");
const app = express();
const port = 8085;

app.get('./app/routers/student.routers/', (req, res) => {
  res.json(data);
});
app.post('./app/model/student.model.js',(req,res) =>{
  res.json(data)
})

var corsOptions = {
  origin: "http://localhost:8085"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true })); 


require("./routes/student.routes.js")(app);


const PORT = process.env.PORT || 8085;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

