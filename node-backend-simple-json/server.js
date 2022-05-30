const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const response = {
    1: "Absolutely not in a million years",
    2: "Probably",
    3: "Ask again later",
    4: "Ask again never",
    5: "It is more certain than anything ever has been",
    6: "Wut??",
    7: "I don't think you wanna know",
    8: "You betcha!!",
    9: "Most definitely",
    10: "Consult a groundhog",
    11: "You can be super duper sure",
    12: "On a scale of 1 to 10, it's a 15",
    13: "Oui",
    14: "nope.",
    15: "Does a bear....live in the woods?",
    16: "You can't handle the truth",
    17: "Nothing is certain",
    18: "Wouldn't you like to know?",
    19: "Maybe go ask some tea leaves",
    20: "Yep yep yep!!"
  }
  const params = querystring.parse(url.parse(req.url).query);
  function serveFile(file,fileType){
    fs.readFile(file, function(err, data) {
      res.writeHead(200, {'Content-Type': fileType});
      res.write(data);
      res.end();
    });    
  }
  console.log(page);

  switch (page){
    case '/': 
      serveFile('index.html','text/html') 
    break;
    case '/otherpage': 
      serveFile('otherpage.html','text/html')
    break;
    case '/otherotherpage': 
      serveFile('otherotherpage.html','text/html')
    break;
    case '/js/main.js': 
      serveFile('js/main.js','text/javascript')
    break;
    case '/api/ask':
      let answer = Math.ceil(Math.random()*20)
          res.writeHead(200, {'Content-Type': 'application/json'});
          objToJson = response[answer]
          console.log(objToJson)
          res.end(JSON.stringify(objToJson));
    break;
    case '/css/style.css':
      fs.readFile('css/style.css', function(err, data) {
        res.write(data);
        res.end();
      });
    break;
    default:
      figlet('404!!', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        res.write(data);
        res.end();
      });
  }
 
});

server.listen(8000);
// case '/api':
//   if('student' in params){
//     if(params['student']== 'leon'){
//       res.writeHead(200, {'Content-Type': 'application/json'});
//       const objToJson = {
//         name: "leon",
//         status: "Boss Man",
//         currentOccupation: "Baller"
//       }
//       res.end(JSON.stringify(objToJson));
//     }//student = leon
//     else if(params['student'] != 'leon'){
//       res.writeHead(200, {'Content-Type': 'application/json'});
//       const objToJson = {
//         name: "unknown",
//         status: "unknown",
//         currentOccupation: "unknown"
//       }
//       res.end(JSON.stringify(objToJson));
//     }//student != leon
//   }//student if