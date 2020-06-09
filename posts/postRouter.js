const express = require("express");

const router = express.Router();
const db = require("./postDb");

// ****************************************************************** //
//GET Request ✅
router.get("/", (req, res) => {
  db.get()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      console.log("Error / Working");
    });
});

//GET Request by :id ✅
router.get("/:id", (req, res) => {
  const postId = req.params.id;

  db.getById(postId)
    .then((response) => {
      if (response.length === 0) {
        res.status(404).json({
          message: "The post with the specified ID does not exist."
        });
      } else {
        res.status(200).json({ response });
      }
    })
    .catch(() => {
      res.status(500).json({
        message: "Oops, something went wrong, please try again",
      });
    });
});

//DELETE by :id ✅
router.delete("/:id", (req, res) => {
  const postId = req.params.id;

  db.remove(postId)
    .then(response => {
      if(response === 0 ) {
        res.status(404).json({
          message: "The post with the specified ID does not exist."
        })
      } else {
        res.status(200).json(response)
      }
    })
    .catch(() => {
      res.status(500).json({
        message:"Oops! Something went wrong, please try again."
      })
    })
});

//PUT by :id
router.put("/:id", (req, res) => {
  const postId = req.params.id
  const postBody = req.body

  db.update(postId, postBody)
    .then(response => {
      if(response === 0) {
        res.status(404).json({
          message:`The user id entered ${postId} does not exist`
        })
      } else if(!postBody.text) {
        res.status(400).json({
          message:"Please prove a text field"
        })
      } else {
          res.status(200).json({response})
      }
    })
    .catch(() => {
      res.status(500).json({
        message:"Oops! Something went wrong, please try again."
      })
    })
});

// custom middleware

function validatePostId(req, res, next) {
  // do your magic!
}

module.exports = router;
