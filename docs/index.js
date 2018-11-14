
function fetchData(callback) {
  var url = 'https://jsonplaceholder.typicode.com/users';
  var delay = 750;

  return fetch(url)
    .then(res => res.json())
    .then(json => {
      setTimeout(function () {
        callback(json);
      }, delay);
    });
}

function main() {

  var getButton = document.querySelector('#get-api');
  var prettyButton = document.querySelector('#pretty-api');
  var info = document.querySelector('#api-info');
  var apiBody = null;

  function prettify(body) {

    var retBody = '<ul>';
    body.forEach(function (item) {
      // console.log (JSON.stringify(item));
      retBody += `<li>${item.name}: <a href="mailto:${item.email}">${item.email}</a></li>`
    });
    info.innerHTML = retBody;
  }

  prettyButton.onclick = function (e) {
    // console.log('clicked pretty button');
    info.innerHTML = 'Loading pretty content...';
    if (apiBody) {
      prettify(apiBody);
    } else {
      fetchData(prettify);
    }
    
  };

  getButton.onclick = function (e) {
    // console.log('clicked button');
    info.innerHTML = 'Loading content...';
    fetchData(function (body) {
      apiBody = body;
      info.innerHTML = JSON.stringify(apiBody);
    });
  };

}


document.addEventListener('DOMContentLoaded', function () {
  // console.log('page loaded');
  main();
});
