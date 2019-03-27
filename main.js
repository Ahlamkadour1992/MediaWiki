var url = 'https://www.mediawiki.org/w/api.php?action=opensearch&format=json&origin=*&search=';
// var url = 'https://www.mediawiki.org/w/api.php?action=parse&format=json'
function getMediaWikiData(event) {
  var keyword = document.getElementById('input').value;
  var searchURL = url + keyword;
  console.log(searchURL);
  fetch(searchURL)
    .then(function(response) {
      // console.log(response.text());
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      // console.log(data ? JSON.parse(data) : {});
    })
    .catch(function(error) {
      console.log(error);
    })
}

document.getElementById('button').addEventListener("click", getMediaWikiData);
