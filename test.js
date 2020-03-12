const http = require('http');
const url = require('url');
const fs = require('fs');
var querystring = require('querystring');
const server = http.createServer((req, res) => {
    var url_parts=url.parse(req.url,true);
    var query = url_parts.query;
    req.url=query;


    console.log("req url----", req.url);
    if(query.pathname==="/"){
        if (req.method === 'GET') {
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString(); // convert Buffer to string
            });
            req.on('end', () => {
                console.log(body,"reg get body----");
                res.end('ok');
                
            });
        }
        else if(query.pathname==="/register"){
            if (req.method === 'GET') {
                    var q;
                    q=req.url;
                    var parseurl = url.parse(q);
                    var parseQs = querystring.parse(parseurl.query);
                    console.log(parseQs);
                    res.end('ok');

                    
                };
                fs.writeFile('get123.json',"email"+parseQs,'utf8',function(err,data){
                    if(err)
                    throw err;
                })
            }}

        else if (req.method === 'POST') {
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString(); // convert Buffer to string
            });
            req.on('end', () => {
                console.log(body);
                res.end('ok');
            });
        }
        else if(query.pathname==="/register"){
            if (req.method === 'POST') {
                let body = '';
                req.on('data', chunk => {
                    body += chunk.toString(); // convert Buffer to string
                });
                req.on('end', () => {
                    console.log(body,"reg post body----");
                    res.end('ok');
                    
                });
            }}
        else{
            res.end(`
            <!doctype html>
            <html>
            <body>
                <form action="/" method="post">
                    <input type="text" name="fname" /><br />
                    <input type="number" name="age" /><br />
                     <button>Save</button>
                </form>
            </body>
            </html>
        `);
        }
    
    
    
    
    })
server.listen(4003);
