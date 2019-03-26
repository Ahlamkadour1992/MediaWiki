document.getElementById('button').addEventListener("click", myFunction);

function myFunction {
const ul = document.getElementById('input');
const url = 'https://www.mediawiki.org/w/api.php?action=opensearch&search=';
fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.log(error);
  })
}
