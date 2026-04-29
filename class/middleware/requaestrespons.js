//handling respons exprss handel http requaest 
// the request Object. content information of cliend Object 

const { response } = require("express");

//   ex= url ,quaryparmiter ,hedaers ,
app.get("/home",(req,res)=>{
  res.send(req.query.name);
});
//Activity 4
//write 2 eg of quary parmiter and 2 eg of path parmiter
//understand quary parmiter 
//respons object : send data to client
// quary parmiter :  ?name=abc&age=20==send code 
// response.jison
// response.json