module.exports = () => {
    return (req, res, next) => {
        if(Object.keys(req.body).length === 0) {
            return res.status(400).json({
                message: "missing post data"
            })
        } else if (!req.body.text) {
            return res.status(400).json({
                message: "missing required text field"
            })
        }
        req.data = req.body
        next()
    }
}


