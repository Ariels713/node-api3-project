const db = require('../posts/postDb')

module.exports = () => {
    return (req, res, next) => {
            db.getById(req.params.id)
                .then((userId) => {
                    if(userId) {
                        req.userId = userId
                        next()
                    } else {
                        res.status(404).json({
                            message:`User ${req.params.id} does not exisit`
                        })
                    }
                })
                .catch(() => {
                    res.status(500).json({
                      message: "Oops, something went wrong, please try again",
                    });
                  });
        
    }
}