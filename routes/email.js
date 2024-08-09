// routes/email.js
const express = require('express');
const graph = require('../graph');
const router = express.Router();

/* GET user's inbox emails. */
router.get('/inbox', async function(req, res) {
  try {
    const emails = await graph.getInboxEmails(
      req.app.locals.msalClient,
      req.session.userId,
      10 // Fetch the top 10 emails
    );
    res.render('email', { emails: emails.value });
  } catch (err) {
    console.error('Error getting user inbox emails:', err);
    req.flash('error_msg', {
      message: 'Error getting user inbox emails',
      debug: JSON.stringify(err, Object.getOwnPropertyNames(err))
    });
    res.redirect('/');
  }
});

module.exports = router;