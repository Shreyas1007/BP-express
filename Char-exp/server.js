const express = require("express");

 const app = express();

function countChar(string){

var counts ={};  //map

var len = string.length;
var count;


for(i=0;i<len;i++){

  ch = string.charAt(i);
  count = counts[ch];

  counts[ch] = count ? count+1 : 1;

}


for (ch in counts){
    return(ch + " count is :" + counts[ch]);

}

};




app.get("/countChar/:string",function(req,res){
    var string = req.params.string;
    res.send(countChar(string));
});

app.listen(3000, function(){
    console.log("Server started")

});