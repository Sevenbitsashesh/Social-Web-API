module.exports = errorHandler;

function errorHandler(err, req, res, next) {
    
    if (typeof (err) === 'string') {
        // custom application error
        return res.status(400).json({ message: err });
    }

    if (err.name === 'ValidationError') {
        // mongoose validation error
        return res.status(400).json({ message: 'invalida' });
    }

    if (err.name === 'UnauthorizedError') {
        
        // console.log(req.body);
        // jwt authentication error
        return res.status(401).json({ message: 'not valid Token' });
    }

    // // default to 500 server error
    return res.status(500).json({ message: err.message });   
}