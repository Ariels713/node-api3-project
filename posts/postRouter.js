const express = require("express");

const router = express.Router();
const db = require("./postDb");
const userDb = require("../users/userDb")
const validateUserId = require('../middleware/validateUserId')
const validateUser = require('../middleware/validateUser')
const validatePost = require("../middleware/validatePost")

//custom Middleware
// logger 🎟
// validateUserId 🧩
// validateUser 🏆
// validatePost 🎲


// ****************************************************************** //
//GET Request ✅
router.get("/", (req, res) => {
  db.get()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      res.status(500).json({
        message: "Oops, something went wrong, please try again",
      });
    });
});

//GET Request by :id ✅🧩
router.get("/:id", validateUserId(), (req, res) => {
  res.status(200).json(req.userId)
});

//GET Request user:id
router.get("/:id/posts", validateUserId(), (req, res) => {
  userDb.getUserPosts(req.userId)
    .then(response => {
      res.status(200).json(response)
    })
    .catch(() => {
      res.status(500).json({
        message: "Oops, something went wrong, please try again",
      });
    });
})

//DELETE by :id ✅🧩
router.delete("/:id", validateUserId() , (req, res) => {
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

//PUT by :id ✅🧩🎲
router.put("/:id", validateUserId(), validatePost(), (req, res) => {
  const postId = req.params.id
  const postBody = req.body

  db.update(postId, postBody)
    .then((response) => {
      res.status(200).json({response})
    })
    .catch(() => {
      res.status(500).json({
        message:"Oops! Something went wrong, please try again."
      })
    })
});

//POST new user ✅🎲
router.post("/", validatePost() , (req, res) => {
const user = req.body

  userDb.insert(req.body)
  .then(user => {
      res.status(201).json(user)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({
        message: "Oops, something went wrong, please try again",
      });
    });
});

router.get("./env", (req, res) => {
  res.status(200).json({
    message: `welcom ${process.env.NAME}`
  })
})


module.exports = router;
