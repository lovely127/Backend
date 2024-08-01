//Getting started with express
const express = require("express");
const app = express();  //upper wali line se function return hoga
//console.dir(app);

let port = 8080;
app.listen(port, ()=>{
    console.log(`app is listening on port number ${port}`);
});

//Handling request and sending response
// app.use((req, res) => {
//     console.log(req);
//     console.log("request recieved");
//     res.send("this is basic response");
// });

//object bhi send kr sakte hain response me
// app.use((req, res) => { 
    //console.log("request recieved"); 
//     res.send({
//             name:"apple",
//              color:"red",
//     });
// });

//HTML bhi send kr sakte hain
// app.use((req, res) => {
//     console.log("request recieved");
//     let code = "<h1>Fruits</h1><ul><li>Apple</li><li>Orange</li></ul>";
//     res.send(code);
//  });




//Routing
// app.get("/",(req,res)=>{
//     res.send("you contacted root path");
// })

// app.get("/apple",(req,res)=>{
//     res.send("you contacted apple path");
// })

// app.get("/orange",(req,res)=>{
//     res.send("you contacted orange path");
// })

// app.get("*",(req, res) => {
//     res.send("This path does not exist");
// })

// app.post("/",(req, res) => {
//     res.send("You sent a post request to root");
// })





//Path parameters
// app.get("/:username/:id",(req, res) => {
//     let {username, id} = req.params
//     //console.log(req.params);
//     //res.send(`Welcome to the page of ${username}.`);

//     let htmlstr = `<h1>Welcome to the page of ${username}.</h1>`;
//     res.send(htmlstr);
// })





//Query String
// app.get("/search",(req, res)=> {
//     console.log(req.query);
//     res.send("no results");
// });

app.get("/search",(req, res)=> {
    let {q} = req.query;
    res.send(`search result for query : ${q}`);
});
