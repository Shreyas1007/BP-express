//jshint esversion:6


const express = require("express");

 const app = express();

 function ifperfect(number){

    var sum = 0;
    
    for(i=1; i<= number/2 ;i++){
        if(number%i === 0){
            sum = sum+i;
        }
    
    }
    
    if(sum === number && sum!==0){
        console.log( number + " is perfect number")
    }
    else{
        console.log(number + " is not perfect number")
    }
    
    };
    
   app.get('/ifperfect/:number', function(req,res){
    var number = req.params.number;
    res.send(ifperfect(number));

   });


   app.listen(3000, function(){
    console.log("Server started")

});