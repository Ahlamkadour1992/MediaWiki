document.getElementById('button').addEventListener("click", getMediaWikiData);
var url = 'https://www.mediawiki.org/w/api.php?action=opensearch&search=';

function getMediaWikiData (event) {
var keyword = document.getElementById('input').value;
var searchURL = url + keyword;
fetch(searchURL)
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
