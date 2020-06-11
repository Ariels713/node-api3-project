const morgan = require('morgan')

module.exports = (format) => {
  return (req, res, next) => {
    const time = new Date().toISOString();
    switch (format) {
      case "custom":
        console.log(`Logger: [${time}] ${req.method} ${req.url}`);
        break
      case "morgan":
          console.log('Call Morgan 3rd Party Middleware')
    }
    next();
  };
};
// Make this a higher order function, so we can have access to it's parameters.
