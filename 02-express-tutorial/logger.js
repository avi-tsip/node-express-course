const logger = (req, res, next) => {
        const method = req.method;
        const url = req.url;
        const date = new Date().toString();
        console.log(method, url, date)
       0// one option with middleware is to send the data ourselves in the middleware with: res.send('Testing')
       // or pass the responsibility to the next function with next
       next()
    }

module.exports = logger