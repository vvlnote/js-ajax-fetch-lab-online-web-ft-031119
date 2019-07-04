const baseURL = 'https://api.github.com';
const user = '<YOUR_USERNAME>';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  fetch('https://github.com/login/oauth/authorize')
  .then(res => res.json())
  .then(json => console.log(json));
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  const token = "567c3f0355831495f4f66ddfae4eaee5eed8880a";
  //use fetch to fork it!
  console.log(`https://api.github.com/repos/${repo}/forks`);
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    headers: {
      Authorization: `token ${token}`
    }
  })
  .then(res => res.json())
  .then(json => showResults(json));
}

function showResults(json) {
  //use this function to display the results from forking via the API
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
