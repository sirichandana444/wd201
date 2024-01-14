const http = require("http");
const fs = require("fs");

const args = require("minimist")(process.argv.slice(1));

//console.log(args);

let homeContent = "";
let projectContent = "";
let regContent = "";


fs.readFile("home.html", (err, homeData) => {
  if (err) {
    throw err;
  }
  homeContent = homeData;
});

fs.readFile("project.html", (err, projectData) => {
  if (err) {
    throw err;
  }
  projectContent = projectData;
});

fs.readFile("registration.html", (err, regData) => {
  if (err) {
    throw err;
  }
  regContent = regData;
});

http
  .createServer((request, response) => {
    let url = request.url;
    response.writeHeader(200, { "Content-Type": "text/html" });
    switch (url) {
      case "/project":
        response.write(projectContent);
        response.end();
        break;
      case "/registration":
        response.write(regContent);
        response.end();
        break;
      default:
        response.write(homeContent);
        response.end();
        break;
    }
  })
  .listen(args.port);

