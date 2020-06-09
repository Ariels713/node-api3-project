const express = require('express');

const router = express.Router();
const db = require('./postDb')


// ****************************************************************** // 
//GET Request
router.get('/', (req, res) => {
  db.get()
    .then(response => {
      res.status(200).json(response)
    })
    .catch(() => {
      console.log("Error / Working")
    })
});

router.get('/:id', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

// custom middleware

function validatePostId(req, res, next) {
  // do your magic!
}

module.exports = router;
