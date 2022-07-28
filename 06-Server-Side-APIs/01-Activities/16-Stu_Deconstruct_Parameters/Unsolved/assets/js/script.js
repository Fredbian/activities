fetch(
  // Explain each parameter in comments below.
  // show only 10 
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// Parameter explanation.
// sort What to sort results by. Can be either created, updated, comments
// state Indicates the state of the issues to return.
// per_page=10 The number of results per page (max 100)
// direction directionstring. The direction to sort the results by.