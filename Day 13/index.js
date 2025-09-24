const express = require('express');
const user1 = require('./Data.json');
const port = 7000;
const app = express();
app.use(express.json());

app.get('/',(req,res) => {
    res.send("hello I am Chandrakant")
})
app.get('/chandra',(req,res) => {
    res.json(user1);
})
app.get('/chandra/:id',(req,res) => {
    const id= Number(req.params.id);    
    const user = user1.find(          
        user=> user.id === id
    )
    res.json(user)
})

// app.post('/chandra',(req,res) => {
//     res.send(user1);
// })

app.post('/chandra',(req,res) => {
    const newUser = req.body;
    user1.push(newUser);
    res.status(201).json({
        message: "User added successfully",
        chandra: newUser
    });
});

app.delete('/chandra/:id',(req,res) => {
   const idToDelete = Number(req.params.id);

    const index = user1.findIndex(obj => obj.id === idToDelete);

    if (index === -1) {
        return res.status(404).send("User not found");
    }

    const deletedUser = user1.splice(index, 1);

    res.json(deletedUser)
})

app.listen(port)
console.log("server is running")
console.log('http://localhost:7000/')