const {StatusCodes} = require('http-status-codes');
const info = (req, res)=>{
    return res.status(StatusCodes.OK).json({
        message: "API is live",
        success: "True",
        error: {},
        data: {}
    })
}

module.exports = {
    info
}