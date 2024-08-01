const figlet = require("figlet");  //package h to ./ nhi lagana padega
figlet("Apna College", function (err, data) {   //copied from npm - figlet
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });