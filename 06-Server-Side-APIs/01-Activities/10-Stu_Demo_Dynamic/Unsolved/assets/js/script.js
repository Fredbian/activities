var userContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var requestUrl = 'https://api.github.com/users?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the console to examine the response
      console.log(data);
      // TODO: Loop through the data and generate your HTML
      for (i = 0; i < data.length; i++) {
        var user = document.createElement('span')
        var url = document.createElement('span')
        user.textContent = data[i].login
        url.textContent = data[i].url
        userContainer.append(user);
        userContainer.append(url)
      }
    });
}
fetchButton.addEventListener('click', getApi);
