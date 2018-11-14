const fetch = require('node-fetch');
const https = require('https');
const url = 'https://jsonplaceholder.typicode.com/users';

function fetchData() {
  fetch(url)
    .then(res => res.json())
    .then(json => console.log(json));
}


function fetchWithCallback(callback) {

  https.get(url, function (res) {
    res.setEncoding("utf8");
    let body = "";

    res.on("data", function (data) {
      body += data;
    });

    res.on("end", function () {
      body = JSON.parse(body);
      console.log(body);
      callback();
    });
  });
  // callback();
}

const callback = function () {
  console.log('\nData fetch was completed with the https module!\n');
};

Number(process.argv[2]) === 1 ?
  fetchData() :
  fetchWithCallback(callback);