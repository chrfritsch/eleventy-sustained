var axios  = require('axios');

var url = process.env.GITHUB_REPO_LIST ||'https://api.github.com/users/chrfritsch/repos';

// Expose these results as data to Eleventy.
module.exports = () => {
    return new Promise((resolve, reject) => {
      // go get it
      axios.get(url).then((response) => {
          // Data passed to resolve() is available to Eleventy as `repos`
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
};