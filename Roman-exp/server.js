//jshint esversion:6

const express = require("express");

 const app = express();


 function roman_conv(num){

    var romanToNum ={
     M:1000,
     CM:900, 
     D:500,
     CD:400,
     C:100,
     XC:90,
     L:50,
     XL:40,
     X:10,
     IX:9,
     V:5,
     IV:4,
     I:1
    };

    var roman = "";

    for( var key in romanToNum ){
        while(num >= romanToNum[key]){
            roman += key;
            num -= romanToNum[key];
            
        }
    }

    return(roman);

};

 

app.get("/roman_conv/:num",function(req,res){
    var num = req.params.num;
    res.send(roman_conv(num));
});

app.listen(3000, function(){
    console.log("Server started")

});



