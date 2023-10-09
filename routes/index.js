const express = require('express');
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  },
  {
    text: "I'd like to say hi",
    user: "SciFly",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', { title: "New Message" })
})

router.post('/new', function(req, res, next) {
  const { userName, userMessage } = req.body;
  messages.push({ text: userMessage, user: userName, added: new Date() });
  res.redirect('/');
});

module.exports = router;
