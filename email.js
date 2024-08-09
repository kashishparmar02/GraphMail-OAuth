// email.js
const graph = require('./graph');

module.exports = {
  getUserEmail: async function(msalClient, userId) {
    const user = await graph.getUserDetails(msalClient, userId);
    return user.mail || user.userPrincipalName;
  }
};